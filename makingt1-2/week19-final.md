# DreamSpeaker

>Team members: Chuyao Wang, Hao Wang, Jiayi Qian
>
> Keywords:Voice-Driven Interaction /Multi-Modal Level Design/ Speech Recognition/ Audio Perception

![屏幕截图 2025-06-12 191519](https://git.arts.ac.uk/24009771/Responsive-Environments-Blog-2024/assets/1290/819c09fc-96e0-417f-9646-a5b725ecac4f)


## Project Description
DREAMSPEAKER is a multi-scene game developed in Unity, featuring three distinct gameplay levels. It uses a modular architecture where each level is an independent scene sharing core components and management modules. The game innovatively employs voice as the main interaction method, integrating speech recognition and real-time audio input. Players use a microphone to speak keywords (e.g., “light,” “attack”) or modulate voice volume and duration to control actions. To ensure responsiveness and stability, a hybrid Python-Unity system maps voice inputs to simulated keyboard commands, replacing unstable UDP communication.

###  Link to Presentation Files:[Google Slides](https://docs.google.com/presentation/d/1iKRceydPBMdKuS9RoRelc1O5xFCXdlnfLxekmIMtIQg/edit?usp=sharing)

###  Link to Unity Files: [Unity](https://drive.google.com/file/d/1omo0ZM2WHZjTN4iV4WyiyC0PHqxM3seZ/view?usp=sharing)

###  Link to Python cod: [Code](https://git.arts.ac.uk/24010286/Responsive-Environments-Blog-2024/tree/main/file/final-code)

###  Link to Video: [Video](https://youtu.be/eJ3_juaHRJQ?si=eVY-SFnDxIPMQ27L)



# Progress
## Background Research

> Topic ：How can voice act as an interaction tool that deeply engages and drives gameplay experiences?


###  Reference Cases
|Game|Interaction|Technology|
|----|-----------|----------|
|In Verbis Virtus|The developers created a fictional magical language called **Maha'ki**. Players cast spells by reciting incantations through a microphone.|Utilizes **CMU PocketSphinx** for speech-to-text. It matches user input with predefined phonemes via a pronunciation dictionary to trigger spell effects.|
|Lurking|In a completely dark environment, players emit sounds (speaking or pulsing noise) to "illuminate" their surroundings, at the cost of attracting enemy attention.|Real-time microphone **volume monitoring** is used to generate visual feedback and light radius. It does **not involve semantic recognition**, only amplitude-based interaction.|
|Phoenix Wright: Ace Attorney|On platforms like the Nintendo DS, players can shout commands like “Objection!”, “Hold it!”, or “Take that!” into the microphone instead of pressing buttons, enhancing drama.|Implements **simple keyword detection** to recognize predefined phrases, primarily boosting narrative immersion rather than deep interaction.|
|Escape The Ayuwoki|In a horror scenario, players must stay silent. Microphone picks up **breathing or footstep noises**, which can alert and summon enemies.|Monitors **real-time mic volume** to determine if the player is making noise and triggers events accordingly.|
|Bot Colony|Players engage in open-ended **dialogue with robots**, issuing complex commands or solving puzzles through natural speech.|Combines speech-to-text and early **natural language processing** (NLP) for command interpretation, though recognition accuracy is inconsistent.|


<img width="1231" alt="image" src="https://git.arts.ac.uk/24010286/Responsive-Environments-Blog-2024/assets/1333/06d51989-c519-4341-8f56-44bc46a3b9f3">

### Summary of Voice Interaction Modes in Games

Based on the research into existing games, voice interaction in games typically falls into **two categories**:

1. **Voice Input with Semantic Meaning**  
   Players speak **actual commands or sentences**. The system uses **speech recognition** and optionally **AI-based intent understanding** to parse the content and trigger actions accordingly.  
   - Example: Saying `"Objection"` to trigger a combat move  
   - **Pros:** Rich expression and complex instruction capability  
   - **Cons:** High latency, **not suitable for fast-paced or real-time actions**

2. **Non-Semantic Sound Control**  
   Players simply **make sounds** (e.g., shouting, humming, clapping). The system uses **volume**, **pitch**, or **frequency** as real-time input to control in-game events or mechanics.  
   - Example: Shouting to trigger a jump or push  
   - **Pros:** Fast response, low latency, suitable for action or rhythm gameplay  
   - **Cons:** Limited expression; cannot convey complex emotions or commands


## Game Architecture Overview



The project is structured with modular components for better scalability and separation of logic:

- **Input Management Module**: Handles mapping of keyboard and controller inputs.

- **Character Control and State Module**: third-person movement and animation state transitions.

- **Voice Interaction Module** : A Python-based external script that simulates keyboard events and communicates with the Unity engine for audio-driven control.

- **Physics and Collision Module**: Utilizes Unity’s Rigidbody and Collider systems for interactions.

- **UI Module**: Manages HUD, prompts, and user interface elements.
  <img width="1203" alt="image" src="https://git.arts.ac.uk/24010286/Responsive-Environments-Blog-2024/assets/1333/ac53581b-898f-48ca-b8d0-d850e00bc71a">


- **Global Game Manager**: Maintains settings and handles cross-scene transitions.

This modular approach ensures clean separation between global systems and scene-specific logic, making the system easier to expand and maintain.



The game follows a **linear structure**:

### Level 1 – Puzzle and Exploration Stage

<img width="1256" alt="image" src="https://git.arts.ac.uk/24010286/Responsive-Environments-Blog-2024/assets/1333/6eea9014-3f3c-4cba-8ff2-2bc1081eb38c">

- **Control**: Movement via **WASD**
- **Voice Command**: Saying `"light"` triggers ambient lights to turn on for 1 second.
- **Mechanics**:
  - Repeatedly speak to illuminate dark areas and search for a hidden **keycard**.
  - Use the card to open an exit door.
- **Technical Highlights**:
  - Third-person control
  - Voice-triggered lighting
  - Trigger zone interactions
  - Basic puzzle flow and scene switching

---

### Level 2 – Platform Jumping Challenge Stage

<img width="1259" alt="image" src="https://git.arts.ac.uk/24010286/Responsive-Environments-Blog-2024/assets/1333/76724937-da25-4020-b034-94ad0ecefe05">

- **Mechanics**:
  - The player stands on floating platforms over a void.
  - Making a sound emits a **beam line**; the **length of the sound** determines jump distance.
  - Missing the platform results in level reset.
- **Progression**:
  - Score increases with each successful jump.
  - Level clears when a score threshold is reached.
- **Technical Highlights**:
  - Duration-based voice control
  - Procedural platform generation
  - Camera tracking system
  - Jump physics and score tracking

---

### Level 3 – Side-Scrolling Combat Stage

<img width="1260" alt="image" src="https://git.arts.ac.uk/24010286/Responsive-Environments-Blog-2024/assets/1333/ad9a90e3-1362-4cab-95a2-61052b48f350">


- **Control**: Movement via **WASD**
- **Voice Command**: Saying `"attack"` performs a combat action.
- **Objective**:
  - Defeat waves of enemies.
  - The level ends once all enemies are eliminated.
- **Technical Highlights**:
  - Combo-based melee system
  - Character animation state machine
  - Collision detection
  - Basic AI for enemies


## Technical Architecture & Implementation

 Pipeline：**User Voice Input** → Python Audio Stream → **Vosk Semantic Recognition / Volume Analysis** → Command Decision → **Simulated Keystrokes via PyAutoGUI** → Unity Input System → **Game Events Triggered**

<img width="1239" alt="image" src="https://git.arts.ac.uk/24010286/Responsive-Environments-Blog-2024/assets/1333/66245474-7f7e-47e0-8fab-2e631c805771">


### Python-based Voice Interaction

#### 1. Setup and Initialization
- Create Python virtual environment
- Install dependencies: `vosk`, `pyautogui`, `sounddevice`
- Detect and bind to the correct microphone input device


#### 2. Control Strategies

| Mode | Description | Pros | Cons |
|------|-------------|------|------|
| **Keyword Recognition** | Player says a command (e.g., "attack", "light") to trigger an event | Supports semantic control | Higher latency (0.5–2s) |
| **Volume-Based Detection** | Controls actions based on how loud/long the player makes a sound | Highly responsive | Cannot convey complex intent |


#### 3. Implementation Versions


- Keyword Recognition Version A: Google API 
  - Uses `recognize_google()`  
  - Pros: Accurate  
  - Cons: Requires internet, rate-limited, slower  

- Keyword Recognition Version B: Local Vosk Model 
  - Offline and customizable  
  - Needs dictionary tuning for higher accuracy

- Volume Detection Version A: Duration-based Hold
  - Long sustained sounds simulate holding a key (e.g., jump charge)
- Volume Detection Version B: Real-time Mapping**
  - Immediate trigger on any detected voice


#### 4. Mapping & Expansion
- Map recognized keywords to virtual key presses (e.g., "light" → `key_press('p')`)
- Fine-tune model thresholds
- Test with extended command dictionaries


###  Unity Integration & Level Design

#### Communication:
- Unity receives inputs via UDP from Python  
- Commands mapped to Unity's input system

https://git.arts.ac.uk/24004306/24-25-Computational-Creativity-and-Responsive-Environments/assets/1338/b421419d-ed05-4bd3-8aa9-6ef87f318a3b


#### Level 1 – Puzzle & Exploration (Top-down View)
- Top-down camera with WASD movement
- Voice commands (e.g., “light”) control environment interactions
- Real-time UDP integration from Python for speech results

#### Level 2 – Platform Jumping (Third-person Follow)
- Third-person view, dynamic camera
- Voice duration = jump charge
- Jump physics via Rigidbody (best gravity: 50)
- Procedural platform generation with scoring system

#### Level 3 – Combat Stage (2D Side-Scrolling)
- 2.5D visual style
- Voice command “attack” triggers combat moves
- Combat driven by Animator and Collider
- Real-time HP bar and combo feedback






## Key Technical Solutions

- ✅ **Dual Voice Input**  
  - **Keywords** (e.g., `"jump"`, `"attack"`) via **Vosk**: local model, fast, offline.  
  - **Volume-based charging**: voice duration = jump strength, enabling real-time control without waiting for keyword recognition.

- ✅ **PyAutoGUI Input Bridge**  
  Replaced unstable **UDP communication** with **simulated keypresses**, ensuring reliable Unity interaction without packet loss or delay.

- ✅ **Platform Generation with Object Pooling**  
  - Dynamic zigzag platform spawning (left/right/forward).  
  - Recycles old platforms using a pooling system to avoid performance drop in infinite levels.

- ✅ **Combo Attack System**  
  - Built with **Animator State Machine** and **input timing detection**.  
  - Supports smooth combo transitions (Punch1 → Punch2 → Punch3) with interrupt and reset logic.  
  - Separate sequences for light/heavy attacks to simplify control.

- ✅ **Physics and Performance Optimization**  
  - Fine-tuned **gravity (e.g., set to 50)**, **jump forces**, and **charging interpolation**.  
  - Applied **LOD**, **Occlusion Culling**, and set **non-essential Rigidbodies to Kinematic**.  
  - UI optimized via canvas pooling and reduced redraws.  
  - Replaced heavy particles with sprite effects to stabilize framerate.

- ❌ **Voice Emotion Recognition** *(Planned)*  
  - Current models require long audio for accurate emotion detection, unsuitable for real-time input.  
  - Future use: enrich narrative, trigger emotional responses or branching paths.

# Testing and Roadmap
## User Testing

![Group 1000007025](https://git.arts.ac.uk/24004306/24-25-Computational-Creativity-and-Responsive-Environments/assets/1338/15d2b2b6-a400-42b9-9465-f3d59cfd3312)

![Frame 207](https://git.arts.ac.uk/24004306/24-25-Computational-Creativity-and-Responsive-Environments/assets/1338/2d88bf48-6bf5-4d7f-ba6f-c34fa7105376)

**👎🏻 Suggestions & Concerns**

- Would like to see more conceptual connection of voice to theme
> “I want to know more about the conceptual connection between the voice input and the game theme.”

- May cause imbalance of excessive volume
> “People might be too shy to scream, maybe this could be thought about.”

- Sound control may cause fatigue
> “How do you balance things like the time it might take to speak and fatigue from speaking?” 

**🎮 Highlight**

- The combination of multiple perspectives and gameplay is impressive
- The interactive form evokes emotional experience
- The story structure and world building are considered very complete
  



## Future Plans


1. **Character Progression and Level Expansion**  
   Introduce a character growth system that unlocks more keywords and develops new levels and gameplay types (e.g., puzzles, vehicle escape) based on players’ acquired interactions and skills. Enable easy addition of new levels and scenes by developers, reducing expansion risk.

2. **Diverse Skill Triggering**  
   Expand skill activation methods by combining volume threshold detection with semantic recognition for more flexible interactions.

3. **Custom Voice Commands**  
   Ultimately allow players to create custom voice commands to interact with the game—for example, saying “left” opens the left door or “truth” triggers floor reactions—enhancing immersion and player freedom.

4. **Combo and Combat System Enhancements**  
   Extend the combo system with more moves, special abilities (energy-consuming ultimate attacks, counters/parries), and support animation branching (aerial combos, combo trees). Diversify enemy AI (ranged, melee, healer) and boss fight mechanics. Adjust enemy types primarily via parameter tuning and behavior scripting without disrupting the core system.

5. **UI and Feedback Improvements**  
   Add combo counters and ranking systems (e.g., “S-rank” for long combos), richer audio cues for attacks and hits, cinematic camera effects like slow-motion kill shots, and navigation aids (mini-maps, directional arrows) to help players locate targets, improving overall user experience.

6. **Narrative and Voice Integration**  
   Layer storytelling into levels via cutscenes, dialogues, and event triggers. Use the voice system to let players trigger events by speaking commands—such as passwords to NPCs or shouting skill names. This requires high voice recognition accuracy and close coordination with the voice subsystem.

