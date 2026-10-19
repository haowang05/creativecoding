# Identity Fragmentor (Lite)
> Real-Time AR Identity Generation Experiment

Identity Fragmentor is a lightweight, web-based AR application that combines on-device computer vision with Generative AI. It tracks faces in real-time and uses Google Gemini to generate "identity labels" and "hallucinated alternatives" based on visual data.

This version is a pure HTML/JS implementation, designed for easy understanding and modification without complex build tools.

## Tech Stack

Core: Vanilla HTML5, JavaScript (ES Modules), CSS

Styling: Tailwind CSS (via CDN)

Computer Vision: face-api.js (TensorFlow.js based)

Generative AI: Google Gemini API (gemini-2.5-flash)

## How to Run Locally

Due to browser security restrictions regarding camera access, this application must be served via a local web server.

### Configure API Key

  * Duplicate config.example.js and rename it to config.js.
  * Open config.js and paste your Google Gemini API Key.

### Start the Server

  * Python Script (Included)
  * Double-click the start_server.py file, or run it in your terminal:python start_server.py
  * It will automatically open http://localhost:8000 in your browser.
