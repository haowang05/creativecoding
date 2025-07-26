# Week 7



### Arduino Heart Rate Sensor Debugging

This week, we began testing the Arduino heart rate sensor, but encountered technical difficulties.

The main issue is:  
The IR data from the heart rate sensor varies significantly depending on the subject's skin tone, causing inconsistent data ranges. Multiple data processing attempts in TouchDesigner failed to resolve this.

---

### Solution: Data Preprocessing on Arduino

We decided to handle data normalization and heartbeat validation directly on the Arduino. The approach is:

- Collect all IR data points over the past 1.5 seconds  
- Calculate the average as the baseline (mapped to 0)  
- Map the maximum value to +50, and minimum to -50  
- This normalizes the output to the range [-50, 50], regardless of skin tone differences

Although this introduces minor error, it greatly improves stability and cross-subject applicability, effectively solving the previous data deviation problem.
![](/file/w7/image.png)

---

### Current Outcome

With unified data ranges, heartbeat detection accuracy improved significantly, and system response became more stable, fulfilling real-time interaction requirements.



https://git.arts.ac.uk/24010286/Responsive-Environments-Blog-2024/assets/1333/350f94a9-c536-4be1-b244-388c16eee103

