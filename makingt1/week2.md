# week2

> October 11th - October 17th


## Labs

> [Tinkercad links](https://www.tinkercad.com/things/2N2fG5ywvSR/editel?sharecode=cORO1Mzn2AY-3Jw96_Fg5R7nuXhqdBkUvsy2dVP3hX0) for all projects

### Lab1-1: Arduino Project Book - #3

![image](https://git.arts.ac.uk/24010286/CreativeMaking-Blog-2024/assets/1333/afa24d7d-b166-4349-affc-62838a4f8a05)

[CODE](https://git.arts.ac.uk/24010286/CreativeMaking-Blog-2024/blob/main/arduino-code/labs/week2-Lab1-1.ino)

The temperature is measured by the temperature sensor, and the temperature level is displayed by the number of LED lights.

I learned to convert the ADC reading to voltage, and remap the data collected by the simulator from 0-1024 to 0-5. I feel that this technique will be often used when using other sensors in the future. There are many calculations involved in the middle. Different electronic components have different characteristics. For example, the temperature sensor displays Celsius and needs to be converted.

The program finally has continuous if else judgments to distinguish different temperature conditions.

Modification ideas:

1. Expand the application scenarios of the input end. The temperature sensor can be placed in different scenarios, such as measuring the temperature of the palm of the hand and the temperature of the water cup.

2. Expand the display form of the output end, such as replacing it with RGB LED, and different colors convey different information

### Lab1-2: Arduino Project Book - #4

![image](https://git.arts.ac.uk/24010286/CreativeMaking-Blog-2024/assets/1333/1468cb8a-1c92-4856-ade8-db6b3b624914)

[CODE](https://git.arts.ac.uk/24010286/CreativeMaking-Blog-2024/blob/main/arduino-code/labs/week2-Lab1-2.ino)

I think this is a very interesting project. In addition to the coding knowledge, I learned to flexibly apply sensors. For example, when the photoresistors are covered with a gel, they only react to light of a certain wavelength.

Another interesting thing about this project is that in order to control the RGB LED, there are three pins that need to be controlled, so three input terminals are artificially replicated through the sensor. And because the photosensitive sensor cannot sense a specific color of light, it needs to be used with gel.

So when using RGB LED as an output terminal in subsequent projects, it is also important to match it with what kind of input component. I also thought that RGB LED is actually very suitable for status indicators, such as red for error, green for correct, yellow for waiting, etc.


### Lab2: Playing with Neopixels
|![IMG_0433](https://git.arts.ac.uk/24010286/CreativeMaking-Blog-2024/assets/1333/c43e34d3-642d-4293-a81f-624e9d9b27c0)|![IMG_0434](https://git.arts.ac.uk/24010286/CreativeMaking-Blog-2024/assets/1333/89ebbce8-3686-4405-b705-0ddc1a98709f)|
|---|---|

**Level 1&2**

![image](https://git.arts.ac.uk/24010286/CreativeMaking-Blog-2024/assets/1333/97d769ca-c496-4aa7-9924-6ee07a113ae3)

**Level 3: Make a Game**

![image](https://git.arts.ac.uk/24010286/CreativeMaking-Blog-2024/assets/1333/6191c622-0f61-42dd-8c4d-13e61f9f1f08)

[CODE](https://git.arts.ac.uk/24010286/CreativeMaking-Blog-2024/blob/main/arduino-code/labs/week2-Lab2.ino)


This is a very torturous little project for me. I encountered two problems:

1. I can't tell the high and low levels of the switch. The small four pins can be connected to many possibilities. I tested the switch mode alone for a long time.

2. At the beginning, the prefix of both the positive and reverse order was `int i=0; i<NUMPIXELS; i++`, which resulted in only one loop. Finally, I put the statement declaring the variable at the beginning of the loop to solve it. I added a `currentPixel` variable.

Finally, I felt quite accomplished, but there is still a small drawback. I want the order of lights to change immediately after pressing the button, regardless of which light is currently on. At the same time, I also hope that the switch is a toggle button, rather than having to keep pressing it to change the order of lights. I may start to optimize this problem in the next few weeks.

I feel that printing the current program status through the serial port is a very useful troubleshooting technique. In this little project, it helped me locate the loop problem at once.


### Lab3: Use the Potentiometer to dim an LED
![IMG_0573](https://git.arts.ac.uk/24010286/CreativeMaking-Blog-2024/assets/1333/4a585a7f-bab9-453e-90d2-dd970e0412d4)
![IMG_0572](https://git.arts.ac.uk/24010286/CreativeMaking-Blog-2024/assets/1333/a3e7194c-cb4a-45f1-a9f9-c4c69d9dabed)

![image](https://git.arts.ac.uk/24010286/CreativeMaking-Blog-2024/assets/1333/364a5ee6-e962-49d2-bf70-c228483c6034)

[CODE](https://git.arts.ac.uk/24010286/CreativeMaking-Blog-2024/edit/main/week2.md)

With the foundation of the first experiment, it is actually very simple. Just remap the output analog signal.

### Lab4: Series and Parallel Circuits

![image](https://git.arts.ac.uk/24010286/CreativeMaking-Blog-2024/assets/1333/0d2b0f2d-e3a0-495d-ad74-a7601014485c)

Obviously the diodes in parallel are brighter. Simple physics.

---

## Course content highlight

1. Learned some color theories and understood the important role of design in some large-scale installation projects
2. Using Neopixel to achieve different color effects in the installation is a skill (also learned how to install the library in Arduino IDE)

Learned about a useful color matching tool. Color matching has always been a headache for me in my projects
https://coolors.co/

---

## Peer Support

Last week, we formed a peer group. After a brief self-introduction, we have already had a basic understanding of each other. In the classroom experiment, we completed the Neopixels experiment together. We came up with many interesting ideas for different lighting effects. By changing the original parameters of the program, we achieved effects such as changing color and order.

Cecilia shared some interesting art exhibitions she noticed in the slack group after the class. I think I will participate in a few of them with her.

---

## Project Development

I am still studying the mid-term project documents and want to learn about each project carefully before making a decision. I also made an appointment for the Digital Fabrication Lab introduction this week. I am really looking forward to making some cool things with these devices.
