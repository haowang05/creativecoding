async function loadModels() {
  const MODEL_URL = "./models"; 
  await faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL);
  await faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL);
}

// 
async function processEmotionFromImageDataURL(dataURL) {
  // 
  return new Promise(async (resolve, reject) => {
    const img = new Image();
    img.onload = async () => {
      try {
        const detections = await faceapi
          .detectSingleFace(img, new faceapi.TinyFaceDetectorOptions())
          .withFaceExpressions();

        if (!detections || !detections.expressions) {
          resolve('neutral'); 
          return;
        }
        // expressions
        const expressions = detections.expressions;
        const maxEmotion = Object.entries(expressions).reduce(
          (max, curr) => (curr[1] > max[1] ? curr : max),
          ["neutral", 0]
        );
        const [emotion, confidence] = maxEmotion;

        if (confidence > 0.5) {
          resolve(emotion);
        } else {
          resolve('neutral');
        }
      } catch (e) {
        reject(e);
      }
    };
    img.onerror = () => reject(new Error('Failed to load image for emotion detection'));
    img.src = dataURL;
  });
}

// 
loadModels();
