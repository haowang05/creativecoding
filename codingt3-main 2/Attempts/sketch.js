let faceMesh;
let video;
let faces = [];
let options = { maxFaces: 1, refineLandmarks: false, flipHorizontal: false };
let isShaking = false;
let lastShakeTime = 0;
const shakeThreshold = 10;
const historyLength = 5;
let noseHistory = [];
let alpha = 230;
const fadeSpeed = 5;
const delayTime = 300;
let frameCounter = 0;
const detectionInterval = 100;

let danmuDataA = [];
let danmuDataB = [];
let activeDanmus = [];
let currentMode = 'B';

let eyeImg, mouthImg, noseImg, headImg, l1Img, l2Img, r1Img, r2Img, bg;

const KEYPOINTS = {
  mouth: [164, 57, 287, 152],
  nose: [0, 36, 266, 195],
  head: [10, 21, 6, 251],
  eye: [9, 265, 35, 4],
  l1: [165, 186, 234, 21],
  l2: [234, 140, 194, 147],
  r1: [391, 410, 454, 251],
  r2: [454, 369, 410, 376]
};

function mousePressed() {
  console.log("当前检测到的脸部数据:", faces);
}

function gotFaces(results) {
  faces = results;
}

async function preload() {
  faceMesh = ml5.faceMesh(options);
  noseImg = loadImage('png/nose2.png');
  mouthImg = loadImage('png/mouth2.png');
  headImg = loadImage('png/head1.png');
  eyeImg = loadImage('png/eye3.png');
  l1Img = loadImage('png/l12.png');
  l2Img = loadImage('png/l22.png');
  r1Img = loadImage('png/r12.png');
  r2Img = loadImage('png/r22.png');
  bg = loadImage('bg3.png');

  const response = await fetch('danmu.json');
  const data = await response.json();
  danmuDataA = data.modeA;
  danmuDataB = data.modeB;
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
  let minX = min(xs), maxX = max(xs);
  let minY = min(ys), maxY = max(ys);
  return {
    x: minX,
    y: minY,
    width: maxX - minX,
    height: maxY - minY,
    centerX: (minX + maxX) / 2,
    centerY: (minY + maxY) / 2
  };
}

// 封装统一绘制带透明度的图片函数
function drawImageWithAlpha(img, x, y, w, h, alphaVal) {
  drawingContext.globalAlpha = alphaVal;
  image(img, x, y, w, h);
  drawingContext.globalAlpha = 1.0; // 重置透明度
}

function draw() {
  image(bg, 0, 0, width, height);
  image(video, 0, 0, width, height);
  drawParallelograms(30, 10);

  noFill();
  stroke(114, 146, 195, 200);
  strokeWeight(10);
  rect(20, 20, width - 40, height - 40);
  stroke(114, 146, 195);
  strokeWeight(2);
  rect(30, 30, width - 60, height - 60);
  stroke(0, 0, 0, 100);
  strokeWeight(30);
  rect(0, 0, width, height);

  if (++frameCounter % detectionInterval === 0 && faceMesh) {
    faceMesh.detect(video.elt, gotFaces);
  }

  if (faces.length > 0) {
    let face = faces[0];
    let nosePoint = face.keypoints[4];
    if (nosePoint) {
      noseHistory.push(nosePoint);
      if (noseHistory.length > historyLength) noseHistory.shift();
    }

    if (noseHistory.length === historyLength) {
      let diffX = Math.abs(noseHistory[noseHistory.length - 1].x - noseHistory[0].x);
      if (diffX > shakeThreshold) lastShakeTime = millis();
      isShaking = (millis() - lastShakeTime < delayTime);
    }

    alpha += isShaking ? -fadeSpeed : fadeSpeed;
    alpha = constrain(alpha, 0, 255);

    // 关键点集合映射
    let keypointGroups = {};
    for (let part in KEYPOINTS) {
      keypointGroups[part] = KEYPOINTS[part].map(i => face.keypoints[i]);
    }

    // 计算边界框
    let boundingBoxes = {};
    for (let part in keypointGroups) {
      boundingBoxes[part] = calculateBoundingBox(keypointGroups[part]);
    }

    noStroke();

    // 绘制纹理图片配置列表，方便循环绘制，减少重复
    const drawConfigs = [
      {img: mouthImg, bb: boundingBoxes.mouth, adjust: [0, 0, 0, 30]},
      {img: noseImg, bb: boundingBoxes.nose, adjust: [0, 0, 0, 0]},
      {img: headImg, bb: boundingBoxes.head, adjust: [-50, -100, 100, 100]},
      {img: eyeImg, bb: boundingBoxes.eye, adjust: [0, 0, 0, 0]},
      {img: l1Img, bb: boundingBoxes.l1, adjust: [-20, 0, 20, 0]},
      {img: l2Img, bb: boundingBoxes.l2, adjust: [-30, 0, 30, 0]},
      {img: r1Img, bb: boundingBoxes.r1, adjust: [0, 0, 20, 0]},
      {img: r2Img, bb: boundingBoxes.r2, adjust: [0, 0, 30, 0]},
    ];

    for (let cfg of drawConfigs) {
      let x = cfg.bb.x + cfg.adjust[0];
      let y = cfg.bb.y + cfg.adjust[1];
      let w = cfg.bb.width + cfg.adjust[2];
      let h = cfg.bb.height + cfg.adjust[3];
      drawImageWithAlpha(cfg.img, x, y, w, h, alpha / 255);
    }

    fill(27, 0, 32, 45);
    rect(0, 0, width, height);

    fill(235, 0, 99, 45);
    rect(0, 0, width, height);

    if (!isShaking) {
      textSize(40);
      let ran = random(-2, 2);
      textAlign(CENTER);
      fill(229, 31, 47, 150);
      textFont('Plantagenet Cherokee', 60);
      text("SHAKE HEAD", width / 2 + ran, height / 2 + ran + 50);
      fill(229, 31, 47, 220);
      textFont('Plantagenet Cherokee', 62);
      text("SHAKE HEAD", width / 2 + ran, height / 2 + ran + 50);
    }
  }

  updateDanmus();
  drawDanmus();
  displayCurrentMode();
}

function drawParallelograms(spacing, count) {
  let startX = width - 10;
  let startY = 55;
  fill(255, 255, 255, 150);
  noStroke();

  for (let i = 0; i < count; i++) {
    let offsetY = i * 40;
    let x1 = startX;
    let y1 = startY + offsetY;
    let x2 = startX - 40;
    let y2 = startY + offsetY - 20;
    let x3 = x2;
    let y3 = y2 + spacing;
    let x4 = x1;
    let y4 = y1 + spacing;
    quad(x1, y1, x2, y2, x3, y3, x4, y4);
  }
}

function spawnDanmu() {
  const danmuData = currentMode === 'A' ? danmuDataA : danmuDataB;
  if (danmuData.length === 0) return;
  const selectedDanmu = random(danmuData);
  const size = random(20, 50);
  const yPosition = random(size, height - size);
  activeDanmus.push({
    text: selectedDanmu.title,
    x: width,
    y: yPosition,
    size: size,
    speed: random(2, 5)
  });
}

function updateDanmus() {
  if (random(1) < 0.05) spawnDanmu();

  for (let i = activeDanmus.length - 1; i >= 0; i--) {
    activeDanmus[i].x -= activeDanmus[i].speed;
    if (activeDanmus[i].x < -textWidth(activeDanmus[i].text)) {
      activeDanmus.splice(i, 1);
    }
  }

  if (isShaking && currentMode === 'B') {
    currentMode = 'A';
  } else if (!isShaking && currentMode === 'A') {
    currentMode = 'B';
  }
}

function drawDanmus() {
  fill(255, 255, 255, 200);
  noStroke();
  textAlign(LEFT, CENTER);

  for (let danmu of activeDanmus) {
    textSize(danmu.size);
    text(danmu.text, danmu.x, danmu.y);
  }
}

function displayCurrentMode() {
  fill(255, 255, 255, 200);
  noStroke();
  textSize(32);
  textAlign(CENTER, TOP);
  text(`Current Mode: ${currentMode}`, width / 2, height - 50);
}
