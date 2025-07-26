# Project Name: DreamSpeaker

**Github Link** :https://git.arts.ac.uk/24010286/Responsive-Environments-Blog-2024/tree/main

**Video**: https://youtu.be/eJ3_juaHRJQ?si=eVY-SFnDxIPMQ27L

-----

## Project description:

DREAMSPEAKER is a voice-controlled, multi-scene game built in Unity that turns shouting, whispering, and speaking into playful mechanics. The game features three distinct levels, each with its own interaction style, all connected through a modular system of shared components and scene management.

Instead of using a keyboard or controller, players speak keywords like “light” or “attack,” or control actions by varying the volume and length of their voice. This transforms the microphone into a kind of magical game wand. To make voice input responsive and stable, I built a Python-Unity hybrid system that converts audio into simulated key presses, replacing earlier unreliable UDP-based communication.

This project explores how voice can become more than a UI gimmick—how it can shape the mood, pacing, and emotional texture of play. I learned that while voice input is expressive and immersive, it comes with real technical challenges: noise, latency, and clarity. These insights helped refine my approach to interaction design, leading to a system that rewards vocal performance as much as precision. DREAMSPEAKER is both a game and a question: what happens when we play with our voices, not just our hands?



## Technical description:

The project uses a hybrid Python-Unity system to enable real-time voice interaction. Python captures audio input and processes it through Vosk for offline keyword recognition and volume-based analysis. Commands are mapped to simulated keystrokes using PyAutoGUI, which are then read by Unity’s input system to trigger game events. Two interaction modes are implemented: semantic keyword control and volume-based actions for responsiveness. Unity handles three distinct scenes—puzzle, platformer, and combat—each using different voice mechanics. Features include real-time audio mapping, procedural level generation, and responsive physics. All components are modular, supporting offline use and customizable command dictionaries.

## My contribution:

I led the design and implementation of the voice interaction system, researching multiple speech recognition models and selecting a local solution (Vosk) for its low latency and offline capability. I developed Python scripts to process voice input—both keyword and volume-based—and convert it into real-time simulated keystrokes, enabling responsive Unity control. I also built the integration pipeline between Python and Unity. Additionally, I contributed to early gameplay design, tested voice-controlled games for reference, and collaborated on level balancing. My work focused on ensuring the system was technically stable, expressive, and playable across all three gameplay scenes.

## Screenshot

![屏幕截图 2025-06-12 191519](https://git.arts.ac.uk/24009771/Responsive-Environments-Blog-2024/assets/1290/819c09fc-96e0-417f-9646-a5b725ecac4f)

 <img width="1203" alt="image" src="https://git.arts.ac.uk/24010286/Responsive-Environments-Blog-2024/assets/1333/ac53581b-898f-48ca-b8d0-d850e00bc71a">

 <img width="1256" alt="image" src="https://git.arts.ac.uk/24010286/Responsive-Environments-Blog-2024/assets/1333/6eea9014-3f3c-4cba-8ff2-2bc1081eb38c">

<img width="1259" alt="image" src="https://git.arts.ac.uk/24010286/Responsive-Environments-Blog-2024/assets/1333/76724937-da25-4020-b034-94ad0ecefe05">

<img width="1260" alt="image" src="https://git.arts.ac.uk/24010286/Responsive-Environments-Blog-2024/assets/1333/ad9a90e3-1362-4cab-95a2-61052b48f350">

<img width="1239" alt="image" src="https://git.arts.ac.uk/24010286/Responsive-Environments-Blog-2024/assets/1333/66245474-7f7e-47e0-8fab-2e631c805771">



-----

## User testing

User 1: The use of voice is interesting, but I’d like to see a clearer link between the vocal input and the game’s narrative or thematic meaning.

User 2: Shouting-based control might make some players uncomfortable or shy; consider designing around lower-volume alternatives for better accessibility.

User 3: Speaking repeatedly may cause vocal fatigue. The system could benefit from better pacing or shorter vocal inputs to reduce strain over time.

User 4: I was impressed by how the game integrates diverse interaction styles. Switching perspectives across scenes kept the gameplay dynamic and fresh.

User 5: The emotional impact stood out to me—especially how the interactivity and story structure worked together to create a cohesive and immersive world.

-----

## Future Plans

1. Implement a character progression system unlocking new keywords, levels, and gameplay styles as players advance.
2. Expand skill activation by combining voice volume thresholds with semantic recognition for more nuanced control.
3. Allow players to customize voice commands, enhancing immersion and personal agency.
4. Develop combat systems with combo trees, ultimate attacks, diverse enemy AI, and boss mechanics using modular scripting.
5. Improve UI with combo counters, ranking, audio feedback, cinematic effects, and navigation aids for better player experience.
6. Enrich the narrative through cutscenes and voice-triggered events, such as shouting passwords to NPCs, deepening story engagement.

---

Lab 01: https://git.arts.ac.uk/24010286/Responsive-Environments-Blog-2024/blob/main/week2.md

Lab 02: https://git.arts.ac.uk/24010286/Responsive-Environments-Blog-2024/blob/main/week13.md

https://git.arts.ac.uk/24010286/Responsive-Environments-Blog-2024/blob/main/week4.md

Lab 03: https://git.arts.ac.uk/24010286/Responsive-Environments-Blog-2024/blob/main/week14.md

Sprint 1：https://git.arts.ac.uk/24010286/Responsive-Environments-Blog-2024/blob/main/week5-Sprint1.md

Sprint 2: https://git.arts.ac.uk/24010286/Responsive-Environments-Blog-2024/blob/main/week10-Sprint2.md