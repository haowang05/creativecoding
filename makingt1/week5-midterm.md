# Mid-Term Project: Exploration of Shift Registers 
Project Title - Light Show  
---

## Overview

### Original Project:  
[Arduino Chandelier From Jars](https://www.instructables.com/Arduino-Chandelier-from-Jars/)

### Project Description:  
The original project uses an Arduino to drive 50 RGB LEDs, making them change at certain time intervals. An external Arduino connected to three 74HC595 shift registers drives 8 RGB LEDs. The input side uses a photoresistor to control the number of RGB LEDs that are lit and a potentiometer to change the color of the lights, supporting 4 modes.

---
## Revision Overview

### Element Chosen for Revision:  
I expanded the project's input components by adding a photoresistor and a potentiometer.

* The more light the photoresistor receives, the more LEDs will be lit.
* The potentiometer allows switching between light colors, providing 4 color modes.
  
### Reason for Revision:  
* The original lighting was completely unresponsive to external inputs. The lighting patterns were entirely pre-set, which was quite boring. Therefore, I wanted to add an input variable to drive changes in the LEDs.
* One of the key characteristics of RGB LEDs is their ability to emit many different types of light. So, I added a potentiometer to switch between the light colors.

---
## Supplies & Materials

### Components Used:  
- **Arduino Board**: Arduino
- **Input Components**: Photoresistor, potentiometer  
- **Output Components**: RGB LED * 8 
- **Additional Materials**: Wires, breadboard, cardboard, 74HC595 * 8, acrylic (laser cut)


---

## Process

1. I first tested and learned how to use the 74HC595 on Tinkercad, conducting both circuit and code tests.
   <img width="1433" alt="image" src="https://git.arts.ac.uk/24010286/CreativeMaking-Blog-2024/assets/1333/be42f139-9f76-49ae-847a-f61718254a85">

3. Based on the project requirements, I completed the circuit design and code feasibility testing on Tinkercad, and everything ran smoothly (16 RGB LED version).
   <img width="1383" alt="image" src="https://git.arts.ac.uk/24010286/CreativeMaking-Blog-2024/assets/1333/888dc255-6bb3-4b71-b576-a030ece00a6a">

5. I went to the lab to collect the necessary materials and connect the circuit.
6. (The nightmare began here) After completing the circuit connections, I found that the LEDs would not light up despite trying various methods.
   ![IMG_0739](https://git.arts.ac.uk/24010286/CreativeMaking-Blog-2024/assets/1333/578e4208-5e13-44fe-b62a-54c82a0c57a8)

7. I made some hypotheses:
 * Wiring errors: I spent a day checking and reconnecting, but found no issues.
 *  Faulty jumper wires/registers: I replaced them with normal LEDs and found that they worked properly.
 *  Insufficient power supply: Reducing to 8 RGB LEDs still did not solve the issue.
 *  The RGB LEDs were common anode instead of common cathode.
6. I eventually discovered that all the RGB LEDs in the lab were common anode, which was completely opposite to my designed circuit. Therefore, I immediately reconnected the circuit and rewrote the code.
7. Since the 16 LED version was difficult to move and there were not enough breadboards, I decided to use the 8 LED version. After making the changes, the LEDs passed the test and worked properly.
  ![IMG_0752](https://git.arts.ac.uk/24010286/CreativeMaking-Blog-2024/assets/1333/477ec741-4d90-49c2-b4ac-f4e60008dc9e)

8. For the casing and packaging, I initially used a cardboard box. However, the cardboard was not transparent, causing the photoresistor to require separate stimulation each time to change the number of lit LEDs.
  ![IMG_0753](https://git.arts.ac.uk/24010286/CreativeMaking-Blog-2024/assets/1333/0fe433cc-ccff-4fb6-83bf-43e1ae2da764)

9. I purchased acrylic sheets and used a laser cutter to cut them to the appropriate size. I replaced the top part of the casing with transparent acrylic.
    ![IMG_0760](https://git.arts.ac.uk/24010286/CreativeMaking-Blog-2024/assets/1333/8cd423ec-8b75-4447-b6fe-4ddaa84e6bf0)

11. I uploaded the code and conducted the final tests.
    ![IMG_0751](https://git.arts.ac.uk/24010286/CreativeMaking-Blog-2024/assets/1333/c5bc09dd-1f81-4bc1-b5cb-71ae9367edbc)
    <img width="796" alt="image" src="https://git.arts.ac.uk/24010286/CreativeMaking-Blog-2024/assets/1333/ca7986ef-227b-4909-be60-020831104098">



---

## Video Demonstration

[Watch the video demonstration here](images/mid-vi.mp4)

---

## Final Project Images

![mid_副本](https://git.arts.ac.uk/24010286/CreativeMaking-Blog-2024/assets/1333/4679a4a2-ab63-4822-996d-675747a965c0)
![IMG_0899](https://git.arts.ac.uk/24010286/CreativeMaking-Blog-2024/assets/1333/7f279213-7e30-4a79-8c7c-2b72f33d016c)
![IMG_0898](https://git.arts.ac.uk/24010286/CreativeMaking-Blog-2024/assets/1333/65909577-9fdf-475d-85cd-f22a844d7bc3)



---

## Arduino Code

The Arduino code for this project is available [here](https://git.arts.ac.uk/24010286/CreativeMaking-Blog-2024/blob/main/arduino-code/labs/mid.ino).

---

## Design Justification 

It's always hard to resist the attraction of glowing objects. This is an ambient light that can adaptively adjust its brightness in response to different environmental lighting conditions and supports manual adjustment of four colors. By changing the parameters, it can adapt to various scenarios, such as supplementing indoor lighting or enhancing the atmosphere for a party. Theoretically, the number of lights can be infinitely expanded to handle extreme scenes. In later stages, jumpers can be replaced with PCB boards to change the arrangement of the small lights, making them better suited to the usage environment.

---

## Feedback

### Conclusion
* Many people mentioned that this is a very cool project.
* The complex wiring caught the attention of many.
* The use of registers provided new ideas to everyone.
* It was suggested to add music control.
* Complex but with a simple and effective presentation.

### Summary
* Optimize the entire device's casing.
* Expand the forms of input sensors based on specific usage scenarios.

---

## Reflecting

At the beginning, when I was choosing a project, I really wanted to challenge myself with the use of registers. I had encountered them in my previous studies but never fully understood them. Taking advantage of this mid-term project opportunity, I finally achieved my goal and felt a great sense of accomplishment. The wiring process was extremely complex, and the debugging was consistently challenging, which greatly improved my hands-on skills and patience.

What gave me the most food for thought in this mid-term project were actually my classmates' projects. I realized that I had been too focused on the technical complexity and neglected the importance of creativity. I saw many of my classmates' projects that used very simple input components but produced very impressive results, such as the electric penguin and the heart-fluttering robot. I could easily predict that their project codes and wiring were quite simple, yet they were more memorable than mine. Even with the same project, different material choices, or even the delay parameters, significantly impact the final presentation of the device.

I am not trying to devalue my work; technology itself is very interesting. However, how to use technology to express ideas and project creativity is something I hadn't considered much before. During the demo day, I had very thorough discussions with everyone and gained a lot. 

