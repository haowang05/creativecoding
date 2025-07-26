# Assignment #2
>  [Recall the Assignment](https://git.arts.ac.uk/dhowe/Critical-Coding-1-2024/blob/main/assignments/assignment2.md)
> 
> Deadline: October 28th

## Reading

Discussions about fairness and equality occur every day, and I think we all understand that there is no absolute fairness in this world. Computer science, like law, public utilities, and literary works, is merely a mirror reflecting societal fairness rather than a weight to tip the scales of justice.

I believe that at their core, our discussions about computer science and AI are the same: technology itself is not to blame. Just as the person who discovers nuclear fusion is not at fault, nor is the one who invents the atomic bomb, but the one who launches it is certainly guilty. The difficulty lies in the lack of a court or judge within the realm of computer science. There is no single entity or institution to determine what is right or wrong. It's perfectly fine to advance computer science from different cultural backgrounds and motivations, but when advanced algorithms and ethical considerations intertwine, we find ourselves in the realm of Critically Conscious Computing. Given that the field of computing is highly globalized, drawing a line that everyone in the world can agree upon is a challenging task.

Therefore, this presents a significant test for developers. It is necessary to engage in thorough thinking and research before taking action and to clearly articulate the motivations behind the development of a tool and the purposes for which it is permitted to be used. Overthinking is always better than making mistakes due to a lack of consideration.


---

## Coding

### Sketch #1: Chaotic Rain

[>> Click to preview the project and source code <<](https://editor.p5js.org/HaoWang010/sketches/jnHR34Aas)

<img height="600" alt="image" src="https://git.arts.ac.uk/24010286/Critical-Coding-Notebook/assets/1333/b4071f3e-2b3d-4722-a124-454680af2ebe">

**Description:**

The inspiration comes from observing the effect of rain falling while waiting for the bus. It simulates the effect of raindrops descending from the sky; because the raindrops are light, they glide and tumble in the air, transitioning from free-falling at the beginning to gradually drifting.
<img width="400" alt="image" src="https://git.arts.ac.uk/24010286/Critical-Coding-Notebook/assets/1333/3ef1251e-f3ba-4272-847a-6cdf7d65d31b">




---

## **Reflecting**

To increase the effect of chaos, a simple loop could only make the increments increase linearly, but I needed to introduce values that would increase with the Y-axis, along with an increasing randomness. What was needed was a mapping relationship, and I eventually found the map() function in the references, which was a great help.
```
let offsetX = map(y, 0, height, 0, maxOffset) * (random(-1, 1));
```

The overall effect met my expectations very well, as the length, position, and rotation angle of the lines all increased in randomness as the Y-axis increased. Finally, I found a satisfying color scheme and applied it.

**For future improvements:**

I want to simulate the natural effect of "wind" so that the entire "rain" can tilt and shift left or right as a whole under the control of the keyboard's arrow keys. After a simple attempt, the effect was quite rigid and stiff. I think there are still some subtle parameters that I haven't adjusted properly yet.

