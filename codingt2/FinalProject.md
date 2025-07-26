# Mechanical Self
> The Struggle of Becoming


**Student Name (Id#)**: Hao Wang #24010286#

**Sketch Link**: [Website](https://git.arts.ac.uk/pages/24010286/Mechanical-Self/)

**Code**: [Source Code](https://git.arts.ac.uk/24010286/CCI-Course-Notebook-2/tree/main/code)


**Project Video**: editing


https://git.arts.ac.uk/24010286/CCI-Course-Notebook-2/assets/1333/9a5bf46e-5255-4705-a3cd-5087a6fa7624



## Project Description 
This is an interactive artwork exploring the tension between individuality and societal optimization. Inspired by Neon Genesis Evangelion (EVA), this work questions the increasingly blurred boundary between humans and machines in a world driven by efficiency.

As technology advances, the pressure to conform grows stronger. Society often equates structure with success, leaving little room for spontaneity or creativity. This work challenges the notion of optimization—if becoming more structured means losing what makes us unique, is it truly an improvement?

"I can become more structured, but what do I lose in the process?"


## Project Images   
![image](https://git.arts.ac.uk/24010286/CCI-Course-Notebook-2/assets/1333/0969c116-67ea-450b-a37d-7fb39ba8b92d)

<img width="1022" alt="image" src="https://git.arts.ac.uk/24010286/CCI-Course-Notebook-2/assets/1333/75324543-edc5-49aa-b481-ee1f37d74250">

![image](https://git.arts.ac.uk/24010286/CCI-Course-Notebook-2/assets/1333/0fa6a589-e462-4e66-854e-99d45bfeb96f)


## Process
### Face Mapping Test
To position key facial landmarks, I used ml5’s official examples and reference images from its documentation.

The initial approach was to index the keypoints outlining the target area and then map the texture onto this region.

At first, the mapping worked relatively well on the forehead. However, when applied to other areas, issues such as incomplete display and misalignment occurred.
![image](https://git.arts.ac.uk/24010286/CCI-Course-Notebook-2/assets/1333/ffcbc30b-64ac-4706-b3b6-994f87755597)


**Challenges:** The nose and mouth have complex shapes, making it difficult to map textures accurately using keypoints.
The available reference images with labeled keypoints are unclear. I had to manually capture my own face in P5.js to find the keypoints, which was inefficient.

Initially, I tried a 3D-based approach, mapping textures onto the face using texture(NORMAL). However, this default method left gaps around the eyes and mouth, which didn’t meet my expectations. I eventually discarded this approach.
![image](https://git.arts.ac.uk/24010286/CCI-Course-Notebook-2/assets/1333/98a519f2-3a14-47c6-8ac7-b98c3ddedd27)


Instead, I switched to a bounding box approach. I identified the top, bottom, left, and right keypoints for each facial region and mapped images within these boundaries. While this worked in most cases, it wasn’t perfect—when the user tilts or turns their head, the mapped images don’t align perfectly with the face. Still, the results were generally acceptable in most scenarios.
![image](https://git.arts.ac.uk/24010286/CCI-Course-Notebook-2/assets/1333/b7611f1d-8a3f-48b7-a1de-b06922db4e93)


### Performance & Lag Issues
Frame Rate Optimization – The face mapping process initially caused lag when the user shook their head. I reduced the detection frequency from every frame to every five frames to improve performance.
Tinting Issue – After troubleshooting, I found that the lag wasn’t due to face detection efficiency but rather the tint() function. After testing multiple solutions, I optimized transparency adjustments by using:
> drawingContext.globalAlpha = alpha / 255;

### Mask Design & Interaction Optimization

![image](https://git.arts.ac.uk/24010286/CCI-Course-Notebook-2/assets/1333/73b6ad8f-ed34-4650-b61c-314f1f130e74)

The interaction design was planned from the beginning. During iterations, I refined the "SHAKE HEAD" prompt by adding a slight bouncing effect for better visibility. Initially, the background was drawn using text(), but it appeared too cluttered, so I replaced it with a static image.

The project's visual inspiration comes from Neon Genesis Evangelion (EVA). Its core aesthetics align with the overall concept of the work. To enhance the mechanical feel, I overlaid transparent black and purple hues onto the visuals and incorporated geometric structures.

![image](https://git.arts.ac.uk/24010286/CCI-Course-Notebook-2/assets/1333/df4081a1-394f-40c5-ba0e-1788995f3b09)


### Future Optimizations
* Progressive Mask Display – I plan to make different mask sections appear gradually.
* Sound Effects – Adding effects similar to Iron Man’s voice modulation for a more immersive experience.
* Mask Refinement – The current hand-drawn mask is quite rough. There is still room for improvement in facial details and texture effects.

### Reference

[faceMesh-parts-bounding-box](https://editor.p5js.org/ml5/sketches/F9jRILxn2)
[faceMesh-keypoints](https://editor.p5js.org/ml5/sketches/lCurUW1TT)
