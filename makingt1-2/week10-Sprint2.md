# Sprint 2 Documentation

**Visualization of X-ray Heart Images with Arduino** 
---

Team members: Jiayi Qian, Hao Wang

##  Project Description

This project uses the Max30102 heart rate monitoring sensor and Arduino to transmit real-time heart rate data to the touch designer and visualize the X-rays taken in the radiology department to help doctors better understand the patient's physical condition and develop more scientific treatment plans. It also helps patients monitor their own physical condition and abnormal reactions (from macroscopic body monitoring to microscopic human tissue) to transmit health status and changes in heartbeat signs, bringing the audience the visualization of concepts such as science, medical treatment, radiological images and physiological changes through the visualization of heart rate and heartbeat 2D+3D information and heart rate sensors

### Key Features: ###

1. 💓Hand-on Experience:

Every user has a unique heartbeat rhythm, which we visualize and place in the center of the screen.

2. 🫀Heart Rate Visualisation:

Usually CT/MRI images are in black and white. We try to enhance these images through particle point cloud so that users can see their own hearts beating and fellowing movement.

![d702b9cc-0c54-4d86-ba8d-b778491be677 1](https://git.arts.ac.uk/24004306/24-25-Computational-Creativity-and-Responsive-Environments/assets/1338/d675ee58-606a-4cd7-9d58-6b1346051dec)


![X-ray heart image with Arduino](https://git.arts.ac.uk/24004306/24-25-Computational-Creativity-and-Responsive-Environments/assets/1338/83703dc9-0166-49d8-842e-ca4957d507f7)

![Rhythm Record_5](https://git.arts.ac.uk/24004306/24-25-Computational-Creativity-and-Responsive-Environments/assets/1338/9276d549-8fb4-437f-843b-3d6bb3a6bfc0)

---
## Supplies & Materials

### Components Used:  

**Hardware:**
* Arduino: Used to read data from the Max30102.
* Max30102 heart rate monitoring sensor: Inputting user heart beat data.
* LED Strip WS2812: Laser-illuminated engrave 3mm Acrylic
* Jump Wires: For connecting the Arduino and Max30102.
 

**Software:**
* Touchdesigner
* Rhino
* [Kling AI](https://app.klingai.com/cn/)
* [Pika AI](https://pika.art/about)

---
## Process

![Detection Flowchart2](https://git.arts.ac.uk/24004306/24-25-Computational-Creativity-and-Responsive-Environments/assets/1338/fa0be0cd-33c9-4f0b-8084-f4a785b6c226)

**1.Initial Research** 

***🖐️Inspiration***

During an internship in the imaging department of a hospital, I noticed that doctors often rely on black and white X-rays or CT images to communicate with patients, but for most non-professional users, these images are often difficult to understand and even alienating. At the same time, I was also thinking about how to transform the highly personal and physiological signal of "heartbeat" into a more emotionally resonant and visually attractive expression. As the palm is the most intimate part between people and products, the heart rate on the fingers can be effectively collected. 

So, I hit it off and tried to achieve 3D visualization through Touch designer's point cloud and particle system. I hope to make abstract physiological processes (such as heartbeat and breathing) "visible and tangible", thereby breaking the established impression of "coldness" and "mechanicalness" in traditional medical equipment, and instead creating a digital health interactive experience that integrates technology and humanity.

![Final_5dff67f59d8d9300145440a4_3](https://git.arts.ac.uk/24004306/24-25-Computational-Creativity-and-Responsive-Environments/assets/1338/4198e56b-c6ab-48f6-acd8-8b94e19c9af9)

![Detection Flowchart](https://git.arts.ac.uk/24004306/24-25-Computational-Creativity-and-Responsive-Environments/assets/1338/35246eb7-bcd7-47bf-b74f-4aa4b0c3be3e)

***Design Goals***

- Data Visualisation: Convert 2D medical image or 3D scan data into 3D volumetric renderings.
- Interactive Experience: Provide user-controlled perspective adjustments to view data from multiple angles.
- Colour mapping: Assign different colours based on data intensity or density to highlight key areas.

![Frame 65](https://git.arts.ac.uk/24004306/24-25-Computational-Creativity-and-Responsive-Environments/assets/1338/ba436382-4a85-4819-9a75-950c717a31a2)

After comparing the effects of these three pictures, I finally chose the picture of ‘Pneumonia’. By identifying the RGB colors, the darker particles have a larger shift on the vertical axis.

<img width="258" alt="截屏2025-06-14 22 44 02" src="https://git.arts.ac.uk/24004306/24-25-Computational-Creativity-and-Responsive-Environments/assets/1338/86fd6d56-9072-46ea-92fe-0f44481e3611">

**2.Familiarity with Touchdesigner** 

- This is my first time to use TD in a project. First, put it in a square box with an outer contour, particle it, and then rotate it left and right.

![Group 3556](https://git.arts.ac.uk/24004306/24-25-Computational-Creativity-and-Responsive-Environments/assets/1338/73fd6c87-6d4c-479d-a07a-9d61ef437b85)

- I later tried to add a GIF to simulate the dynamics of the heart, but the effect was not ideal. The rapid dynamic changes and heart rate could not accurately and effectively convey the information of the picture, so I gave up this plan.
![Screen Recording 2025-03-19 at 11 51 40](https://git.arts.ac.uk/24004306/24-25-Computational-Creativity-and-Responsive-Environments/assets/1338/042b93df-e387-4751-929c-4ff505c4b7c2)

- I also tried to use a CT scan of the head, but I felt that it was far from the topic, so I gave up.

https://git.arts.ac.uk/24004306/24-25-Computational-Creativity-and-Responsive-Environments/assets/1338/571e1a81-d907-4fc3-8058-7a63a2613510

**3.Collect Expert Feedback** 

> 🏥Expert Feedback_' United Medical R&D Innovation Manager ': For example, in some high-end clinics or when facing some vvip customers or users consulting, the users actually do not read the film, so the doctor can explain with them through this method: input the black, white and grey images into the touchdesigner program, and then demonstrate to the user, try to persuade and visualise the medical diagnosis and treatment plan.

**5.Sound &Visual Effect** 

- I really personally like [IBM Design System](https://carbondesignsystem.com), combining this component to make this dashboard, trying to provide users with a clear and interactive User Interface through this dashboard.
- Complete the Gif design of the flowing galaxy through Kling AI

![Rhythm health UI with Background2](https://git.arts.ac.uk/24004306/24-25-Computational-Creativity-and-Responsive-Environments/assets/1338/dbdd0abb-9242-47b5-bb71-e48b689aec95)

https://git.arts.ac.uk/24004306/24-25-Computational-Creativity-and-Responsive-Environments/assets/1338/069d9577-8147-4ce7-81ae-4c88b34a591d

**6.Testing in Dark Lab** 

<img width="1904" alt="截屏2025-06-12 21 40 58" src="https://git.arts.ac.uk/24004306/24-25-Computational-Creativity-and-Responsive-Environments/assets/1338/46d6d7b5-e32e-4117-962f-59aab4fd40bf">

<img width="1904" alt="截屏2025-06-12 21 41 05" src="https://git.arts.ac.uk/24004306/24-25-Computational-Creativity-and-Responsive-Environments/assets/1338/a65189bb-5697-47f0-a2cc-183baf0a81e8">

https://git.arts.ac.uk/24004306/24-25-Computational-Creativity-and-Responsive-Environments/assets/1338/54d46063-b909-48aa-b34a-007d8d6539f9

https://git.arts.ac.uk/24004306/24-25-Computational-Creativity-and-Responsive-Environments/assets/1338/63b117ee-330d-4c71-97b8-2087ca3d5baf

<img width="1292" alt="Screenshot 2025-03-20 at 23 02 20" src="https://git.arts.ac.uk/24004306/24-25-Computational-Creativity-and-Responsive-Environments/assets/1338/d9efb748-a703-4dda-b061-377a4156378d">

- Add a thin line of heart rate, map the read heart rate value and suspend it on the interface, so that users can see their heart rate fluctuations in real time

https://git.arts.ac.uk/24004306/24-25-Computational-Creativity-and-Responsive-Environments/assets/1338/9563fdb7-846c-470c-bfaf-7a9eb995f6e1

![截屏2025-04-22 23 54 36 1](https://git.arts.ac.uk/24004306/24-25-Computational-Creativity-and-Responsive-Environments/assets/1338/330ad307-6c16-4b29-9d89-5613a6df6f8b)
**7.Arduino & MAX30102** 

How do you design the appearance and shape of the product? Why do you engrave it? Why do you design it as a palm print?

We want to guide users to put their hands on the device, so we engraved the palm print on the acrylic, and wa nted to use light to highlight the palm, and made a hollow groove in the acrylic to place the heart rate sensor

![Group 3950](https://git.arts.ac.uk/24004306/24-25-Computational-Creativity-and-Responsive-Environments/assets/1338/c64e27b4-081f-4d46-aa43-a82833b25feb)

![Rhythm Record_6](https://git.arts.ac.uk/24004306/24-25-Computational-Creativity-and-Responsive-Environments/assets/1338/c62470b7-2d39-4c3d-abc0-6d8f5063a45e)


reference:Photoplethysmography of the thumb by off-axis digital holography[https://en.wikipedia.org/wiki/Photoplethysmogram].

[Music]https://sound-effects.bbcrewind.co.uk/search?q=07070016

---

## Arduino Code

```
/*
  Optical Heart Rate Detection (PBA Algorithm) using the MAX30105 Breakout
  By: Nathan Seidle @ SparkFun Electronics
  Date: October 2nd, 2016
  https://github.com/sparkfun/MAX30105_Breakout

  This is a demo to show the reading of heart rate or beats per minute (BPM) using
  a Penpheral Beat Amplitude (PBA) algorithm.

  It is best to attach the sensor to your finger using a rubber band or other tightening
  device. Humans are generally bad at applying constant pressure to a thing. When you
  press your finger against the sensor it varies enough to cause the blood in your
  finger to flow differently which causes the sensor readings to go wonky.

  Hardware Connections (Breakoutboard to Arduino):
  -5V = 5V (3.3V is allowed)
  -GND = GND
  -SDA = A4 (or SDA)
  -SCL = A5 (or SCL)
  -INT = Not connected

  The MAX30105 Breakout can handle 5V or 3.3V I2C logic. We recommend powering the board with 5V
  but it will also run at 3.3V.
*/

#include <Wire.h>
#include "MAX30105.h"

#include "heartRate.h"

MAX30105 particleSensor;

const byte RATE_SIZE = 4; //Increase this for more averaging. 4 is good.
byte rates[RATE_SIZE]; //Array of heart rates
byte rateSpot = 0;
long lastBeat = 0; //Time at which the last beat occurred

float beatsPerMinute;
int beatAvg;

void setup()
{
  Serial.begin(115200);
  Serial.println("Initializing...");

  // Initialize sensor
  if (!particleSensor.begin(Wire, I2C_SPEED_FAST)) //Use default I2C port, 400kHz speed
  {
    Serial.println("MAX30105 was not found. Please check wiring/power. ");
    while (1);
  }
  Serial.println("Place your index finger on the sensor with steady pressure.");

  particleSensor.setup(); //Configure sensor with default settings
  particleSensor.setPulseAmplitudeRed(0x0A); //Turn Red LED to low to indicate sensor is running
  particleSensor.setPulseAmplitudeGreen(0); //Turn off Green LED
}

void loop()
{
  long irValue = particleSensor.getIR();

  if (checkForBeat(irValue) == true)
  {
    //We sensed a beat!
    long delta = millis() - lastBeat;
    lastBeat = millis();

    beatsPerMinute = 60 / (delta / 1000.0);

    if (beatsPerMinute < 255 && beatsPerMinute > 20)
    {
      rates[rateSpot++] = (byte)beatsPerMinute; //Store this reading in the array
      rateSpot %= RATE_SIZE; //Wrap variable

      //Take average of readings
      beatAvg = 0;
      for (byte x = 0 ; x < RATE_SIZE ; x++)
        beatAvg += rates[x];
      beatAvg /= RATE_SIZE;
    }
  }

  Serial.print("IR=");
  Serial.print(irValue);
  Serial.print(", BPM=");
  Serial.print(beatsPerMinute);
  Serial.print(", Avg BPM=");
  Serial.print(beatAvg);

  if (irValue < 50000)
    Serial.print(" No finger?");

  Serial.println();
}
```

## Link to Touchdesigner Files

[Google Documation](https://drive.google.com/file/d/1veDj-r2Zimfc8dBFqa5LR8E-GXmRjgMo/view?usp=share_link)

---
## Design Justification 

### 💡Self-esteem

This is the first time I have brought cross-media integration into the project. I combined Arduino hardware with Max30102 heart rate sensor and TouchDesigner software to open up the chain of data collection-processing-visualization, and added iterative records of ideas at stages, which made me understand and figure out that the direction of medical treatment is what I always like, and I will continue to learn in depth.

### 👎🏻Project Weakness

**Currently, the sensor source is single, just a heart rate point; medical imaging uses static X-rays**

- Add multiple patients/multiple types of data (different ages, health conditions) to expand the data visualization level;
- Try to introduce CT/MRI dynamic image sequences (such as DICOM format) to enhance realism.
- Poor multi-person interactive experience mode (comparing multiple heartbeats or synchronous visualization)
- Add floating labels such as "left atrium" and "right ventricle" to the point cloud to improve teaching and comprehensibility

**Add more bindings for physiological signals and interactive feedback**

- Heart rate changes control point cloud particle density, color changes, and breathing effects;
- Abnormal values ​​(tachycardia/bradycardia) trigger system feedback prompts.

### 🛠️ Expanded Design Justification

The project has laid a good foundation for my future exploration, finding a balance between artistry, interactivity and medical application scenarios. I may advance in these three directions next.

- From "visualization" to "explainability" (adding medical semantic tags and prompt systems)
- From "single-person single-point data" to "multi-dimensional perception interaction" (adding more sensors or behavioral feedback)
- From "display project" to "immersive experience product" (space layout + XR gesture + sound and light synchronization)

---

## 🤔Future improvement

| Improvement | Timeline | Solution | 
|---|---|---|
|1.Particle effects|March 21-28|Let the particles spread out randomly again, which can go beyond this square box (expanding outward is fine)|Camera movement|April 1-4|Try again to add different switching modes, such as connecting the camera and being able to control Zoom in/out with gestures|
|2.Camera movement|April 1-5|Try again to add different switching modes, for example, the ability to control Zoom in/out with gestures|
|3.Microinteraction|April 7-14|Some micro-interactions (why is it designed this way?) Functions that allow the viewer to see more details of the image (clearer) / prepared from the viewer's point of view.

---
🚀🚀🚀

Fortunately, we were selected for the next exhibition, so I continued to polish it in the following time.[week11 Exhibition](https://git.arts.ac.uk/24004306/24-25-Computational-Creativity-and-Responsive-Environments/blob/61f98df11ff6b4dc13532b3a717363191c5b8ded/week11%20Exhibition.md)