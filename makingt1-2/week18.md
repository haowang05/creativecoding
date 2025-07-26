# Week 18 



## Overview

This week focused on **final integration and full-system testing** across all modules. We aimed to ensure smooth performance and reliable interactivity before the upcoming presentation.


## Audio Module Tuning @Hao Wang

1. **Noise Calibration**
   - Due to the noisy classroom environment during testing, we increased the `VOLUME_THRESHOLD` parameter to improve voice command stability.
    ![](/file/w18/image.png)

2. **Keyword Recognition Optimization**
   - We refined the fuzzy-matching logic for keyword detection based on the variations in different team members' pronunciations, allowing for greater fault tolerance without compromising recognition accuracy.


## Game Module Refinement @Chuyao Wang

1. **Testing Accessibility**
   - Added a `Restart` button to each game scene to facilitate faster iteration during testing.

2. **Gameplay Balance Adjustments**
   - After real playthrough testing, we made the following refinements:
     - **Jumping Level**: Slowed down the path-generation speed to make the timing more manageable
     - **Attack Level**: Due to the limited frequency of voice response, we significantly increased the damage of each successful attack and slightly reduced enemy HP to maintain pacing and player satisfaction
