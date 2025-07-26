let faceMesh;
let video;
let faces = [];
let options = { maxFaces: 1, refineLandmarks: false, flipHorizontal: false };
let isShaking = false; // 用于追踪是否正在摇头
let lastShakeTime = 0; // 上次检测到摇头的时间
const shakeThreshold = 10; // 定义摇头的阈值
const historyLength = 5; // 用来判断摇头的时间窗口内的帧数
let noseHistory = []; // 存储鼻子位置的历史记录
let alpha = 230; // 图像透明度初始值为完全不透明
const fadeSpeed = 5; // 每帧透明度变化的速度
const delayTime = 300; // 延迟时间3秒
let frameCounter = 0;
const detectionInterval = 100; // 每5帧检测一次


// 纹理图片
let eyeImg, mouthImg, noseImg, headImg, l12Img, l22Img, r12Img, r22Img;

// 关键点索引范围（根据MediaPipe Face Mesh定义）
const KEYPOINTS = {
  mouth: [164,57,287,152],
  nose: [0,36, 266, 195],
  head: [10,21,6,251],
  eye: [9, 265, 35, 4],
  l1: [165, 186, 234,21],
  l2: [234, 140, 194, 147],
  r1: [391, 410,454,251],
  r2: [454, 369, 410, 376]
};

function mousePressed() {
  console.log("当前检测到的脸部数据:", faces);
}

function gotFaces(results) {
  faces = results;
  //console.log("更新脸部数据:", faces.length, "张脸被检测到.");
}

function preload() {
  faceMesh = ml5.faceMesh(options);
  // 加载纹理图片
  noseImg = loadImage('nose2.png');
  mouthImg = loadImage('mouth2.png'); // 需要准备对应的图片
  headImg = loadImage('head1.png');
  eyeImg = loadImage('eye3.png'); // 需要准备对应的图片
  l1Img = loadImage('l12.png');
  l2Img = loadImage('l22.png');
  r1Img = loadImage('r12.png');
  r2Img = loadImage('r22.png');
  bg = loadImage('bg3.png'); 
}

function setup() {
  createCanvas(1024, 768);
  video = createCapture(VIDEO);
  video.size(1024, 768);
  video.hide();
  faceMesh.detectStart(video, gotFaces);
}

function calculateBoundingBox(points) {
  let xs = points.map(p => p.x);
  let ys = points.map(p => p.y);
  let minX = min(xs);
  let maxX = max(xs);
  let minY = min(ys);
  let maxY = max(ys);
  return {
    x: minX,
    y: minY,
    width: maxX - minX,
    height: maxY - minY,
    centerX: (minX + maxX) / 2,
    centerY: (minY + maxY) / 2
  };
}

function draw() {
  
  //初始背景和海报设计
  image(bg, 0, 0, width, height);
  image(video, 0, 0, width, height);

  drawParallelograms(30, 10); // 平行四边形
  //scrollText("Hao Wang", 2, 16, 16);


  // 绘制边框
  noFill();
  stroke(114, 146, 195,200);
  strokeWeight(10);
  rect(20,20,width-40,height-40);
  stroke(114, 146, 195);
  strokeWeight(2);
  rect(30,30,width-60,height-60);
  stroke(0, 0, 0, 100);
  strokeWeight(30);
  rect(0,0,width,height);



  

  if (++frameCounter % detectionInterval === 0) {
    if (faceMesh) {
      faceMesh.detect(video.elt, gotFaces);
    }
  }

  if (faces.length > 0) {
    let face = faces[0];
    let nosePoint = face.keypoints[4]; // 使用鼻子的关键点索引 4

    if (nosePoint) {
      noseHistory.push(nosePoint);
      if (noseHistory.length > historyLength) {
        noseHistory.shift(); // 移除最早的数据点以保持固定长度
      }
    }

    if (noseHistory.length === historyLength) {
      let startNose = noseHistory[0];
      let endNose = noseHistory[noseHistory.length - 1];
      let diffX = Math.abs(endNose.x - startNose.x);

      if (diffX > shakeThreshold) {
        lastShakeTime = millis(); // 更新上次检测到摇头的时间
      }

      if (millis() - lastShakeTime < delayTime) {
        isShaking = true;
      } else {
        isShaking = false;
      }
    }

    // 根据是否摇晃调整透明度
    if (isShaking) {
      if (alpha > 0) {
        alpha -= fadeSpeed;
      }
    } else {
      if (alpha < 255) {
        alpha += fadeSpeed;
      }
    }


    alpha = constrain(alpha, 0, 255); // 确保透明度在0到255之间
    // 获取各个部位的关键点
    let mouthPoints = KEYPOINTS.mouth.map(i => face.keypoints[i]);
    let nosePoints = KEYPOINTS.nose.map(i => face.keypoints[i]);
    let headPoints = KEYPOINTS.head.map(i => face.keypoints[i]);
    let eyePoints = KEYPOINTS.eye.map(i => face.keypoints[i]);
    let l1Points = KEYPOINTS.l1.map(i => face.keypoints[i]);
    let l2Points = KEYPOINTS.l2.map(i => face.keypoints[i]);
    let r1Points = KEYPOINTS.r1.map(i => face.keypoints[i]);
    let r2Points = KEYPOINTS.r2.map(i => face.keypoints[i]);

    // 计算边界框
    let mouthBB = calculateBoundingBox(mouthPoints);
    let noseBB = calculateBoundingBox(nosePoints);
    let headBB = calculateBoundingBox(headPoints);
    let eyeBB = calculateBoundingBox(eyePoints);
    let l1BB = calculateBoundingBox(l1Points);
    let l2BB = calculateBoundingBox(l2Points);
    let r1BB = calculateBoundingBox(r1Points);
    let r2BB = calculateBoundingBox(r2Points);

    // 绘制纹理（关闭边框）
    noStroke();

    drawingContext.globalAlpha = alpha /255;
    image(mouthImg, mouthBB.x, mouthBB.y, mouthBB.width, mouthBB.height+30);
    drawingContext.globalAlpha = 0.8; // 绘制后立即重置透明度
    
    drawingContext.globalAlpha = alpha / 255;
    image(noseImg, noseBB.x, noseBB.y, noseBB.width, noseBB.height);
    drawingContext.globalAlpha = 0.8; // 绘制后立即重置透明度
    
    drawingContext.globalAlpha = alpha / 255;
    image(headImg, headBB.x-50, headBB.y-100, headBB.width+100, headBB.height+100);
    drawingContext.globalAlpha = 0.8; // 绘制后立即重置透明度

    drawingContext.globalAlpha = alpha / 255;
    image(eyeImg, eyeBB.x, eyeBB.y, eyeBB.width, eyeBB.height);
    drawingContext.globalAlpha = 0.8; // 绘制后立即重置透明度

    drawingContext.globalAlpha = alpha / 255;
    image(l1Img, l1BB.x-20, l1BB.y, l1BB.width+20, l1BB.height);
    drawingContext.globalAlpha = 0.8; // 绘制后立即重置透明度

    drawingContext.globalAlpha = alpha / 255;
    image(l2Img, l2BB.x-30, l2BB.y, l2BB.width+30, l2BB.height);
    drawingContext.globalAlpha = 0.8; // 绘制后立即重置透明度

    drawingContext.globalAlpha = alpha / 255;
    image(r1Img, r1BB.x, r1BB.y, r1BB.width+20, r1BB.height);
    drawingContext.globalAlpha = 0.8; // 绘制后立即重置透明度

    drawingContext.globalAlpha = alpha / 255;
    image(r2Img, r2BB.x, r2BB.y, r2BB.width+30, r2BB.height);
    drawingContext.globalAlpha = 0.8; // 绘制后立即重置透明度

    fill(27, 0, 32, 45);
    rect(0,0,width,height);

    fill(235, 0, 99, 45);
    rect(0,0,width,height);
    

    if(!isShaking){
      //textSize(40);
      let ran = random(-2,2);
      textAlign(CENTER);
      fill(229, 31, 47, 150);
      textFont('Plantagenet Cherokee', 60);
      text("SHAKE HEAD", width/2+ran, height/2+ran+50);
      fill(229, 31, 47, 220);
      //noFill();
      textFont('Plantagenet Cherokee', 62);
      text("SHAKE HEAD", width/2+ran, height/2+ran+50);

    }

  }
}


function drawParallelograms(spacing, count) {
  // 定义基准点
  let startX = width - 10; // 起始 X 坐标
  let startY = 55; // 起始 Y 坐标

  // 循环绘制多个平行四边形
  for (let i = 0; i < count; i++) {
    // 计算当前平行四边形的偏移量
    let offsetX = 0; // 水平偏移
    let offsetY = i * 40; // 垂直偏移

    // 定义四个顶点
    let x1 = startX - offsetX;
    let y1 = startY + offsetY;
    let x2 = startX - offsetX - 40; // 向左偏移 40
    let y2 = startY + offsetY - 20; // 向上偏移 20
    let x3 = x2;
    let y3 = y2 + spacing; // 向下偏移
    let x4 = x1;
    let y4 = y1 + spacing; // 向下偏移

    // 绘制平行四边形
    fill(255, 255, 255, 150); // 填充颜色渐变
    noStroke(); // 边框颜色
    quad(x1, y1, x2, y2, x3, y3, x4, y4);
  }
}

function scrollText(message, speed, size, yPos) {
  // 静态变量，用于存储文字位置
  if (typeof scrollText.xPos === 'undefined') {
    scrollText.xPos = width; // 初始 X 坐标为画布右侧
  }

  // 设置文字样式
  textSize(size);
  fill(255);

  // 绘制滚动字幕
  text(message, scrollText.xPos, yPos);

  // 更新文字位置
  scrollText.xPos -= speed;

  // 如果文字完全滚出画布，重置 X 坐标
  if (scrollText.xPos < -textWidth(message)) {
    scrollText.xPos = width;
  }
}
