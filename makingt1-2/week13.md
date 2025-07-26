# Week 13 Tech week



## Labs｜Exhibition Adaptation & HTML Integration in TouchDesigner

This week we began preparing for **London Tech Week**, focusing on adapting our project for the **extremely large display (approx. 8m x 3m)**.

Originally, we planned only to scale up visual elements. However, after discussion, we realized that our previous visual content **did not align well with the exhibition theme**.

As a result, we decided to **retain the heartbeat interaction as the core mechanic**, but **completely redesign the visual layer**.

---

### Introducing 2D Visual Layers with HTML in TouchDesigner

We wanted to introduce **2D graphical elements** into the scene. However, adjusting such layers inside a 3D TouchDesigner space proved to be time-consuming—especially if the screen's aspect ratio changes.

After consulting **James**, we discovered that TouchDesigner supports **embedding HTML layers**.

> Data Flow Overview:  
> Arduino → TouchDesigner (Python processing) → HTML → JavaScript visual control → TouchDesigner renders live HTML

Reference tutorial: [YouTube – TouchDesigner + HTML](https://youtu.be/McM4tHl2_dM?si=loulLokGUhit5pi8)

---

### Implemented Interactions

1. **Typing Effect**  
   - Serial data controls the character-by-character rendering speed  
   - JavaScript is used to simulate the rhythm of a typewriter, synced with heartbeat data
     

https://git.arts.ac.uk/24010286/Responsive-Environments-Blog-2024/assets/1333/dc8ea1f2-587b-4830-aecf-445ffea7495f



2. **Red Border Pulse Effect**  
   - Heartbeat intensity dynamically influences red glow around a central frame  
   - Enhances feedback and visual immersion
  
   

https://git.arts.ac.uk/24010286/Responsive-Environments-Blog-2024/assets/1333/7d3e0960-b008-4740-aa8a-328020c0e22c





## Reading & Reflections｜The Decline of VR Hype

In recent years, interest in **VR** seems to have peaked and then declined. Except during major product announcements (like Apple’s Vision Pro), discussion around VR appears to have faded.

As I previously noted in earlier reflections:  
**VR has indeed expanded how people interact with media**, but it's still quite similar to early gaming consoles—solving specific interaction problems but limited in scalability.

Capital has perhaps been **too optimistic about the pace of VR’s commercial viability**. Key technological limitations remain:

- Insufficient GPU power for high-quality VR rendering  
- Poor wearability and comfort for prolonged use

The same caution can apply to **other hyped technologies**, such as AR, XR, and blockchain. Innovation is valuable, but readiness is key.
