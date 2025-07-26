# Week 14


## Project Development｜Voice-Control Interaction System

Since none of our team members had a strong background in music or melody recognition, we decided to shift our core interaction approach to **voice commands**.

Initially, we aimed for a fully voice-controlled system — using commands like `left`, `right`, or `jump` for navigation. However, after playing a few voice-controlled games, we found that:

> Most action-based games require high-frequency and fast responses. Full reliance on voice input caused noticeable delays in control and disrupted the gameplay flow.



### Model Design & Technical Split

I was responsible for developing the voice input system. We first explored **Unity's built-in AI/voice APIs**, but found little official documentation or working examples.  
So we decided to **separate the voice recognition logic from the Unity runtime**.

We tested two model types:

- **Online APIs (e.g., Google Speech, Emotion AI)**: Very accurate and context-aware, even capable of detecting emotional tone. However, they rely on long sentence input and are not optimized for quick, single-word triggers.
- **Local models (e.g., Vosk)**: Less complex, but better suited for short commands with faster local response time and no need for network connection.



https://git.arts.ac.uk/24010286/Responsive-Environments-Blog-2024/assets/1333/3db0a960-4b15-4387-b98e-144794862d1d



### Microphone Permission Issues

We encountered a blocking issue during development: microphone access was not enabled.  
Although it should have been easily configured via the system's privacy settings, **VSCode never showed up in the input permissions list**. After much troubleshooting and reading through forums, I was able to solve it.  
![](/file/w14/image.png)


## Reading & Reflections｜Performance Challenges in Virtual Spaces

I fully support Jackie Morie’s perspective that **virtual or digital spaces can be powerful performance stages** — especially from the **audience’s point of view**, where virtual spaces enhance aesthetics and immersion.

However, for the **performers**, I believe the challenges outweigh the benefits.  
In physical stages, performers can see the environment, sense the audience, and respond in real time. In contrast, virtual stages often require the performer to **imagine** the entire context — a disconnect that hinders presence and spontaneity.

If placed in a **VR scenario**, the boundary between performer and audience may blur. But as of now:

- VR performance is still limited by **resolution, latency, and tracking fidelity**
- **Wearable constraints** reduce physical freedom of expression for the performer

In conclusion, virtual stages hold immense potential — but **more technological advancements are needed before both performers and audiences can fully inhabit them together**.




