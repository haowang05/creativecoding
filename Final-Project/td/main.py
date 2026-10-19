import cv2
import os
import time
import google.generativeai as genai
from deepface import DeepFace
from pythonosc import udp_client
import NDIlib as ndi  # <-- 您安装成功的 NDI-python 库
import numpy as np
import logging

# --- 0. 设置日志 ---
# (使用 logging 模块比 print() 更专业，但为了简单直观，我们这里用 print)
print("--- [系统] 脚本开始运行 ---")

# --- 1. 初始化 ---

# Google Gemini API
try:
    GOOGLE_API_KEY = os.environ.get("GOOGLE_API_KEY", "").strip()
    if not GOOGLE_API_KEY:
        print("🔴 [错误] 请设置 GOOGLE_API_KEY 环境变量")
        exit()
    genai.configure(api_key=GOOGLE_API_KEY)
    model = genai.GenerativeModel('gemini-pro')
    print("✅ [初始化] Google Gemini API 连接成功")
except Exception as e:
    print(f"🔴 [错误] Google Gemini API 初始化失败: {e}")
    exit()

# OSC: 发送数据到TD
try:
    TD_IP = "127.0.0.1" # 本机
    TD_PORT = 9000      # TD 接收端口
    osc_client = udp_client.SimpleUDPClient(TD_IP, TD_PORT)
    print(f"✅ [初始化] OSC 客户端准备就绪 (发送到 {TD_IP}:{TD_PORT})")
except Exception as e:
    print(f"🔴 [错误] OSC 客户端初始化失败: {e}")
    exit()

# NDI: 发送视频到TD
try:
    print("... [初始化] 正在启动 NDI ...")
    if not ndi.initialize():
        print("🔴 [错误] 无法初始化 NDI")
        exit()

    ndi_send = ndi.send_create()
    if ndi_send is None:
        print("🔴 [错误] 无法创建 NDI 发送器")
        ndi.destroy()
        exit()

    send_source = ndi.Source("PythonWebcam", True) # 命名为 "PythonWebcam"
    ndi_send.set_source(send_source)
    video_frame = ndi.VideoFrame()
    print(f"✅ [初始化] NDI 发送器已创建 (源名称: 'PythonWebcam')")
except Exception as e:
    print(f"🔴 [错误] NDI 初始化失败: {e}")
    exit()

# Webcam
try:
    cap = cv2.VideoCapture(0)
    if not cap.isOpened():
        print("🔴 [错误] 无法打开 Webcam (ID: 0)")
        raise Exception("Cannot open webcam")
    print("✅ [初始化] Webcam 启动成功")
except Exception as e:
    print(f"🔴 [错误] Webcam 打开失败: {e}")
    ndi.send_destroy(ndi_send)
    ndi.destroy()
    exit()

# --- 2. 变量控制 ---
last_analysis_time = 0
analysis_interval = 5 # 每5秒分析一次 (您可以按需修改)
last_gender = "person"
last_age = 30
frame_count = 0

print(f"\n--- 🚀 Python中枢已全部启动 ---")
print(f"--- 视频分析间隔: {analysis_interval} 秒 ---")


try:
    while True:
        # --- 3. 实时发送视频流 (NDI) ---
        ret, frame = cap.read()
        if not ret:
            print("🔴 [错误] Webcam 读取帧失败，退出...")
            break
        
        frame_count += 1
        
        # 将OpenCV的BGR帧转换为NDI需要的RGBA
        frame_rgba = cv2.cvtColor(frame, cv2.COLOR_BGR2RGBA)
        
        video_frame.data = frame_rgba
        video_frame.FourCC = ndi.FOURCC_VIDEO_TYPE_RGBA
        ndi.send_send_video_v2(ndi_send, video_frame)
        
        if frame_count % 100 == 0: # 每发送100帧打印一次，避免刷屏
            print(f"... [循环] 正在实时发送 NDI 视频流 (已发送 {frame_count} 帧)")
        
        # （可选）在Python端也显示一个窗口预览
        cv2.imshow('Python Cam Sender (按q退出)', frame)
        if cv2.waitKey(1) & 0xFF == ord('q'):
            print("\n... [系统] 检测到 'q' 键按下，准备退出...")
            break

        # --- 4. 定时分析并调用AI ---
        current_time = time.time()
        if current_time - last_analysis_time > analysis_interval:
            last_analysis_time = current_time
            print("\n--- ⏰ (1/5) 时间到，开始执行图像分析 ---")

            try:
                # DeepFace 分析 (这步可能会有几秒延迟)
                print("... (2/5) 正在调用 DeepFace (性别/年龄)...")
                analysis = DeepFace.analyze(
                    frame, 
                    actions=['age', 'gender'], 
                    enforce_detection=False # 即使没检测到也别报错
                )
                
                if isinstance(analysis, list) and len(analysis) > 0:
                    result = analysis[0]
                    last_gender = result['dominant_gender']
                    last_age = result['age']
                    print(f"✅ (3/5) DeepFace 分析完成: 性别={last_gender}, 年龄={last_age}")
                else:
                    print("⚠️ (3/5) DeepFace 未检测到清晰面部，使用上次结果")

                # 发送OSC数据
                osc_client.send_message("/age", last_age)
                osc_client.send_message("/gender", last_gender)

                # --- 5. 调用 Gemini ---
                print("... (4/5) 正在调用 Gemini API ...")
                prompt = f"请为一位 {last_age} 岁的 {last_gender} 写一句简短的、充满启发的欢迎词。"
                
                response = model.generate_content(prompt)
                gemini_text = response.text.replace("\n", " ") # 替换换行符
                
                print(f"✅ (5/5) Gemini 回复: {gemini_text}")
                
                # 发送Gemini文本
                osc_client.send_message("/gemini/text", gemini_text)
                print("--- ✅ [完成] 所有分析结果已通过 OSC 发送 ---")

            except Exception as e:
                print(f"🔴 [错误] 在分析/AI调用循环中发生错误: {e}")
                print("... [系统] 将发送上一次的缓存数据以防TD出错")
                osc_client.send_message("/age", last_age)
                osc_client.send_message("/gender", last_gender)
                osc_client.send_message("/gemini/text", "...")

finally:
    # --- 6. 清理 ---
    print("\n--- [系统] 正在关闭所有服务... ---")
    cap.release()
    cv2.destroyAllWindows()
    ndi.send_destroy(ndi_send)
    ndi.destroy()
    print("✅ [系统] Webcam 和 NDI 已安全释放。程序退出。")