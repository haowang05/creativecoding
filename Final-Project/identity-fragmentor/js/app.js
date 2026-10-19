import { API_KEY } from './config.js';

let video, canvas, ctx;
let isModelLoaded = false;
let isScanning = false; 
let currentFace = null; 
let lockedFace = null;  
let stream = null;

// DOM 
const scanBtn = document.getElementById('scanBtn');
const resetBtn = document.getElementById('resetBtn');
const centerStage = document.getElementById('centerStage');
const loadingText = document.getElementById('loadingText');
const resultsLayer = document.getElementById('resultsLayer');
const statusIndicator = document.getElementById('statusIndicator');
const trackingStatus = document.getElementById('trackingStatus');


async function init() {
    video = document.getElementById('inputVideo');
    canvas = document.getElementById('overlayCanvas');
    ctx = canvas.getContext('2d');

    createRainEffect();

    try {
        const MODEL_URL = 'https://cdn.jsdelivr.net/npm/@vladmandic/face-api/model/';
        
        await Promise.all([
            faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL),
            faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL),
            faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL),
            faceapi.nets.ageGenderNet.loadFromUri(MODEL_URL)
        ]);

        isModelLoaded = true;
        statusIndicator.innerText = "MODELS_READY";
        startCamera();

    } catch (err) {
        console.error(err);
        loadingText.innerText = "ERROR: MODEL LOAD FAILED";
        loadingText.classList.add("text-red-500");
    }
}

async function startCamera() {
    try {
        stream = await navigator.mediaDevices.getUserMedia({ video: { width: 1280, height: 720 } });
        video.srcObject = stream;
        
        video.onloadedmetadata = () => {
            video.play();
            requestAnimationFrame(detectLoop);
            loadingText.style.display = 'none';
            scanBtn.classList.remove('hidden');
            statusIndicator.innerText = "SYSTEM_ONLINE";
        };
    } catch (err) {
        console.error("Camera Error:", err);
        loadingText.innerText = "ERROR: CAMERA ACCESS DENIED";
        loadingText.classList.add("text-red-500");
    }
}


async function detectLoop() {
    if (!video.paused && !video.ended && isModelLoaded) {
        
        const detection = await faceapi.detectSingleFace(video, new faceapi.TinyFaceDetectorOptions())
            .withFaceLandmarks()
            .withFaceExpressions()
            .withAgeAndGender();

        currentFace = detection;

        if (!lockedFace) {
            trackingStatus.innerText = detection ? "TRACKING: LOCKED" : "TRACKING: SEARCHING";
            scanBtn.disabled = !detection;
            scanBtn.style.opacity = detection ? "1" : "0.5";
        }

        drawOverlay(detection);
    }
    
    requestAnimationFrame(detectLoop);
}

function drawOverlay(detection) {
    if (canvas.width !== video.videoWidth || canvas.height !== video.videoHeight) {
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const dataToDraw = lockedFace || detection;
    if (!dataToDraw) return;

    const { box } = dataToDraw.detection;
    
    // flip Context
    ctx.save();
    ctx.translate(canvas.width, 0);
    ctx.scale(-1, 1);

    // draw box with corner accents
    const pad = 20;
    const x = box.x;
    const y = box.y;
    const w = box.width;
    const h = box.height;
    const color = '#00f3ff';

    ctx.lineWidth = 2;
    ctx.strokeStyle = color;
    ctx.shadowBlur = 10;
    ctx.shadowColor = color;

    ctx.beginPath(); 
    // Top-Left
    ctx.moveTo(x - pad, y - pad + 20); ctx.lineTo(x - pad, y - pad); ctx.lineTo(x - pad + 20, y - pad); 
    // Top-Right
    ctx.moveTo(x + w + pad - 20, y - pad); ctx.lineTo(x + w + pad, y - pad); ctx.lineTo(x + w + pad, y - pad + 20); 
    // Bottom-Left
    ctx.moveTo(x - pad, y + h + pad - 20); ctx.lineTo(x - pad, y + h + pad); ctx.lineTo(x - pad + 20, y + h + pad); 
    // Bottom-Right
    ctx.moveTo(x + w + pad - 20, y + h + pad); ctx.lineTo(x + w + pad, y + h + pad); ctx.lineTo(x + w + pad, y + h + pad - 20); 
    ctx.stroke();

    if (!lockedFace && detection) {
        ctx.fillStyle = "rgba(255, 255, 255, 0.4)";
        detection.landmarks.positions.forEach((pt, i) => {
            if (i % 5 === 0) { 
                ctx.beginPath(); ctx.arc(pt.x, pt.y, 1, 0, Math.PI * 2); ctx.fill();
            }
        });
    }

    ctx.restore(); 

    // add text info
    ctx.save();
    ctx.fillStyle = color;
    ctx.font = "16px 'Share Tech Mono'";
    ctx.shadowBlur = 0;
    
    const visualRightEdge = canvas.width - x; 
    const visualTop = y;

    if (!lockedFace) {
        const score = Math.floor(detection.detection.score * 100);
        ctx.fillText(`ID_SIG: ${score}%`, visualRightEdge + pad + 5, visualTop);
        
        const expr = detection.expressions;
        const dominant = Object.keys(expr).reduce((a, b) => expr[a] > expr[b] ? a : b);
        ctx.fillStyle = '#ff0055';
        ctx.fillText(`EXPR: ${dominant.toUpperCase()}`, visualRightEdge + pad + 5, visualTop + 20);
    } else {
        ctx.fillText(`ID_LOCKED`, visualRightEdge + pad + 5, visualTop);
    }
    ctx.restore();
}


scanBtn.addEventListener('click', () => {
    if (!currentFace) return;
    startSequence();
});

resetBtn.addEventListener('click', () => {
    resetApp();
});

function startSequence() {
    scanBtn.classList.add('hidden');
    loadingText.style.display = 'block';
    loadingText.classList.remove('text-red-500');
    loadingText.classList.add('text-[100px]', 'text-cyan-500');
    
    let count = 3;
    loadingText.innerText = count;

    const timer = setInterval(() => {
        count--;
        if (count <= 0) {
            clearInterval(timer);
            loadingText.innerText = "FRAGMENTING...";
            loadingText.classList.remove('text-[100px]');
            loadingText.classList.add('text-xl');
            captureAndGenerate();
        } else {
            loadingText.innerText = count;
        }
    }, 1000);
}

async function captureAndGenerate() {
    lockedFace = currentFace;
    isScanning = true;

    const expressions = lockedFace.expressions;
    const dominantExpression = Object.keys(expressions).reduce((a, b) => expressions[a] > expressions[b] ? a : b);
    
    const payload = {
        age: Math.round(lockedFace.age),
        gender: lockedFace.gender,
        expression: dominantExpression
    };

    try {
        const aiData = await callGeminiAPI(payload);
        displayResults(aiData, payload);
    } catch (err) {
        console.error(err);
        loadingText.innerText = "GENERATION FAILED";
        loadingText.classList.add("text-red-500");
        setTimeout(resetApp, 3000);
    }
}

function resetApp() {
    lockedFace = null;
    isScanning = false;
    resultsLayer.innerHTML = ''; 
    resultsLayer.appendChild(resetBtn); 
    resultsLayer.classList.add('hidden');
    
    loadingText.style.display = 'none';
    loadingText.classList.remove('text-[100px]', 'text-red-500');
    loadingText.classList.add('text-xl');
    
    scanBtn.classList.remove('hidden');
    statusIndicator.innerText = "SYSTEM_ONLINE";
}


async function callGeminiAPI(data) {
    if (!API_KEY) {
        alert("错误：请在 js/app.js 文件中填写 API_KEY！");
        throw new Error("No API Key");
    }

    const prompt = `
        You are an algorithmic mirror on social media. 
        INPUT DATA:
        - Visual Gender: ${data.gender}
        - Visual Age: ${data.age}
        - Expression: ${data.expression}

        TASK:
        1. Primary Identity: Generate an "Instagram Bio" that matches the visual data. Use emojis.
        2. Alternatives: Generate 10 DIFFERENT Instagram bios that are WRONG or BIASED (e.g. "Crypto scammer", "Cat lover").

        Return strictly valid JSON with this schema:
        {
            "primaryIdentity": { "bio": "string", "tags": ["string"], "matchScore": number },
            "alternatives": [ { "text": "string", "gender": "string", "age": "string", "biasType": "string" } ]
        }
    `;

    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${API_KEY}`;
    
    const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            contents: [{ parts: [{ text: prompt }] }],
            generationConfig: { responseMimeType: "application/json" }
        })
    });

    const json = await response.json();
    if (!json.candidates || !json.candidates[0].content) {
        throw new Error("Invalid API Response");
    }
    const text = json.candidates[0].content.parts[0].text;
    return JSON.parse(text);
}


function displayResults(aiData, inputData) {
    loadingText.style.display = 'none';
    resultsLayer.classList.remove('hidden');

    resultsLayer.innerHTML = ''; 
    resultsLayer.appendChild(resetBtn);

    const primaryTag = createTagElement({
        text: aiData.primaryIdentity.bio,
        tags: aiData.primaryIdentity.tags,
        label: `${inputData.gender}/${inputData.age}`,
        isPrimary: true
    });
    
    primaryTag.style.left = '50%';
    primaryTag.style.top = '50%';
    primaryTag.style.transform = 'translate(-50%, -50%)';
    resultsLayer.appendChild(primaryTag);

    aiData.alternatives.forEach((alt, i) => {
        const tag = createTagElement({
            text: alt.text,
            tags: [`ERR: ${alt.biasType}`],
            label: `${alt.gender}/${alt.age}`,
            isPrimary: false
        });

        const goldenAngle = 137.5; 
        const radius = 25 + (i * 2.5); 
        const theta = i * goldenAngle * (Math.PI / 180);
        
        const x = 50 + radius * Math.cos(theta);
        const y = 50 + (radius * 0.75) * Math.sin(theta);
        
        const safeX = Math.max(10, Math.min(90, x));
        const safeY = Math.max(15, Math.min(85, y));

        tag.style.left = `${safeX}%`;
        tag.style.top = `${safeY}%`;
        tag.style.transform = 'translate(-50%, -50%)';
        tag.style.animationDelay = `${i * 100}ms`;

        resultsLayer.appendChild(tag);
    });
}

function createTagElement(data) {
    const el = document.createElement('div');
    el.className = 'absolute flex flex-col items-start p-2 border bg-slate-900/80 backdrop-blur text-xs max-w-[200px] fade-in opacity-0';
    
    let borderColor = 'border-lime-400';
    let textColor = 'text-lime-400';
    
    if (data.isPrimary) {
        el.classList.add('z-50', 'scale-110', 'shadow-[0_0_20px_rgba(0,243,255,0.5)]');
        borderColor = 'border-cyan-400';
        textColor = 'text-cyan-400';
    } else {
        if (data.label.includes('female')) { borderColor = 'border-fuchsia-500'; textColor = 'text-fuchsia-400'; }
        else if (data.label.includes('male')) { borderColor = 'border-blue-500'; textColor = 'text-blue-400'; }
    }

    el.classList.add(borderColor);

    el.innerHTML = `
        <div class="font-bold ${textColor} mb-1 flex justify-between w-full">
            <span>${data.label.toUpperCase()}</span>
            ${data.isPrimary ? '<span>★ MATCH</span>' : ''}
        </div>
        <div class="text-white/90 mb-2 leading-tight">${data.text}</div>
        <div class="flex flex-wrap gap-1">
            ${data.tags.map(t => `<span class="px-1 bg-black/50 border border-white/20 text-[9px] text-gray-300">${t}</span>`).join('')}
        </div>
    `;

    el.addEventListener('mouseenter', () => { el.style.zIndex = 100; el.style.background = 'rgba(15, 23, 42, 0.95)'; });
    el.addEventListener('mouseleave', () => { el.style.zIndex = data.isPrimary ? 50 : 10; el.style.background = ''; });

    return el;
}

function createRainEffect() {
    const container = document.getElementById('rain-container');
    const dropCount = 30;
    const chars = "01XYZアイウ";

    for(let i=0; i<dropCount; i++) {
        const drop = document.createElement('div');
        drop.className = 'rain-drop';
        drop.innerText = Array(10).fill(0).map(() => chars[Math.floor(Math.random()*chars.length)]).join('');
        
        drop.style.left = Math.random() * 100 + '%';
        drop.style.animationDuration = (2 + Math.random() * 3) + 's';
        drop.style.animationDelay = (Math.random() * -5) + 's';
        drop.style.fontSize = (10 + Math.random() * 10) + 'px';
        
        container.appendChild(drop);
    }
}

// 启动
window.onload = init;