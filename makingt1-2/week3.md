# Week 3｜Work Log

---

## 🔧 Labs｜Debugging Unity & Arduino Communication

The primary goal this week was to establish serial communication between Unity and Arduino.

- **Initial Research:**
  I explored several tutorials:
  - [Alan Zucconi: Integrating Arduino with Unity](https://www.alanzucconi.com/2015/10/07/how-to-integrate-arduino-with-unity/)
  - [Ardity Plugin Site](https://ardity.dwilches.com/)
  - [YouTube Guide](https://www.youtube.com/watch?v=SD3iUnLNjY0)

  Unfortunately, none of these methods worked for me. The main issue seemed to be that **Arduino was sending data too fast**, which caused Unity to crash or freeze due to processing delays.

- **Debugging Attempts:**
  1. **Thread-Based Parser**: I tried processing serial data in a separate thread. This reduced blocking but resulted in slow processing and frequent data loss.
  2. **Delay Adjustments**: I tested various `delay()` values in Arduino to slow down transmission, but Unity would often freeze after a few lines.

> These debugging steps took 2–3 days and were very frustrating.

- **Breakthrough:**
  Fortunately, I found a working demo shared by Luke on Slack. It ran successfully and provided a solid reference for the next steps.

  ![image](/file/w3/image.png)
  ![unity](/file/w3/image%20copy%203.png)

---

## Peer Support｜Controller Choices and Lab Interaction

  ![image](/file/w3/image%20copy.png)

We are currently using a **potentiometer** as the input controller. It’s ideal for early testing because:
- It produces simple signals
- It makes it easy to simulate sensor behavior for serial communication

While working in the lab, I spoke with classmates who were testing various sensors and game ideas.  
Some used **accelerometers**, which output multiple types of data and offered great inspiration.

---

## Reading & Reflections｜The Value of Prototyping in Game Design

I found strong parallels between **game world-building** and my previous experience in product development. One concept I strongly agree with is **prototyping early and often**.

- Unlike utility software, games do not follow a consistent interaction model  
- Game genres vary widely, and players have diverse backgrounds and preferences

Personally, I’m often first drawn in by a game’s **art style**, then by its mechanics.  
Therefore, testing with prototypes in each phase of development is crucial to ensuring a well-rounded experience.

> Many game documentaries describe completely restarting projects during development — highlighting just how vital prototyping really is.


