# Sprint 1 Documentation - Skiing Adventure

## Overview & Project Description
This is a simple skiing game where the player controls the character’s direction using a potentiometer.

The idea came during the midterm break when I planned a ski trip to Switzerland. While talking with friends, we realized that skiing often feels like an exclusive sport. On social media, people rarely talk about the sport itself. Instead, the focus is often on the gear, how expensive it is, the resort, the overall experience, and even the accommodation.

> We wanted to reflect some of these consumerism issues through the game. Originally, we planned to add more elements related to consumption into the scene, but due to limited time, we were only able to build the basic gameplay environment.

## Supplies & Materials
**Hardware:**
* Potentiometer (used for gameplay control)
* Arduino (for hardware-software communication)
* Keyboard (for controlling game settings)

**Software:**
* Unity
* TRIPO AI



## Process
### 1. (Hao Wang) Connecting Arduino and Unity
   * Used a B100k potentiometer as an input device to control the character’s left and right movements, aiming to create a virtually immersive skiing experience.
   * <img width="300"  src="https://git.arts.ac.uk/24010286/Responsive-Environments-Blog-2024/assets/1333/c4ef8042-9fd8-4c0a-bfd1-9a4d10234774">
   * Reference for connection code:
https://git.arts.ac.uk/lplowden/ResponsiveEnvironmentsUnityExamples/blob/main/SerialReader.cs


### 2. (Hao Wang) Unity Collision System
![image](https://git.arts.ac.uk/24010286/Responsive-Environments-Blog-2024/assets/1333/eccd95a3-b598-4eda-bcef-fd8814db5229)


### 3. (Hao Wang) Game Interaction Design & File Packaging
   * ![image](https://git.arts.ac.uk/24010286/Responsive-Environments-Blog-2024/assets/1333/b6cb68a8-9ae4-47e4-9f5e-38a2bfd4ac00)
   * <img width="641" alt="image" src="https://git.arts.ac.uk/24010286/Responsive-Environments-Blog-2024/assets/1333/a0c5d4ff-1e40-4a69-b265-8d9e1a6a4944">



### 4. (Jiayi Qian) Scene Construction from Image to 3D 
 ![Frame 9](https://git.arts.ac.uk/24004306/24-25-Computational-Creativity-and-Responsive-Environments/assets/1338/994a49bd-c2bd-4546-82b7-d85f262f62a0)
**TRIPO AI Generate Dinosaur Bone**
 ![Tripo AI](https://git.arts.ac.uk/24004306/24-25-Computational-Creativity-and-Responsive-Environments/assets/1338/ff40febf-d70c-4281-ab88-06dd0cbdf854)
   

### 5. (Jiayi Qian) Character Animation and Camera Binding
* Click to start the animation and move the character
* Loop charactern skiing pose animation
* Space to trigger a character backflip pose
* Setting the character's initial state speed
* Add potentiometer and linked with Unity
* Setting motion camera
* Add background music
 <img width="1138" alt="截屏2025-03-04 22 51 53" src="https://git.arts.ac.uk/24004306/24-25-Computational-Creativity-and-Responsive-Environments/assets/1338/114b71f0-7424-403a-a4a8-871985de6d19">
<img width="1080" alt="截屏2025-03-04 22 50 23" src="https://git.arts.ac.uk/24004306/24-25-Computational-Creativity-and-Responsive-Environments/assets/1338/8159dd14-3590-460d-8683-bc61ac334532">

![3月4日 (1)](https://git.arts.ac.uk/24004306/24-25-Computational-Creativity-and-Responsive-Environments/assets/1338/d83eba45-cab7-4979-9e19-4247d034925d)


### 6. (Jiayi Qian) Particle Effects and Ambient Lighting
<img width="1792" alt="截屏2025-02-14 00 22 45" src="https://git.arts.ac.uk/24004306/24-25-Computational-Creativity-and-Responsive-Environments/assets/1338/1b16c208-6ff3-48e4-a3f6-d47ba8adc5e9">



## Video Demonstration

https://git.arts.ac.uk/24004306/24-25-Computational-Creativity-and-Responsive-Environments/assets/1338/e7beb1a1-5b16-4ad1-bf3c-4c7ebe4e184a


## Final Images
![Movie_005 - 01](https://git.arts.ac.uk/24004306/24-25-Computational-Creativity-and-Responsive-Environments/assets/1338/2a68c753-ab99-44d8-ac46-269c15f7662d)

![Group 12](https://git.arts.ac.uk/24004306/24-25-Computational-Creativity-and-Responsive-Environments/assets/1338/8149df0b-2d32-4f8e-a924-de6d1dab03f6)

![Whole Scene](https://git.arts.ac.uk/24004306/24-25-Computational-Creativity-and-Responsive-Environments/assets/1338/ce410723-e52e-42b9-a02b-7be6ea4bcf10)



## Arduino Code

```
#include <SoftwareSerial.h>
//#include <SerialCommand.h>
//int potValue = 0; 

void setup() {
  Serial.begin(9600); 
}

void loop() {
  int potValue = analogRead(A1); 
  Serial.println(potValue);
  //Serial.print("\n");
  delay(100); 
```

## Link to Unity Files

[https://drive.google.com/drive/folders/1AWGPPNTIb6_hFKOUFmPewLFucMQzr_Iz?usp=sharing
](https://drive.google.com/drive/folders/1AWGPPNTIb6_hFKOUFmPewLFucMQzr_Iz?usp=sharing)
## Design Justification 

### Peer Feedback
* The scene is large and impressive; the overall visual style is consistent and imaginative.
* There’s a lot of potential to expand the hardware controls — for example, adding new sensors to control speed.
* Collision detection in the game feels a bit inaccurate and needs optimization.

### Plan After Group Discussion
* VR Integration – Especially the first-person experience, image ski goggles combined with VR head-mounted displays can better give the user a better & immersive sports experience.
* Hand-Tracking or Gesture Control – Simulates the real movements of skiing, and can provide and set up teaching courses.


 
