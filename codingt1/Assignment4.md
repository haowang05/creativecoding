# Assignment #4
>  [Recall the Assignment](https://git.arts.ac.uk/dhowe/Critical-Coding-1-2024/blob/main/assignments/assignment4.md)
> 
> Deadline: November 11th

## Reading

The article is written in a rather disorganized manner.

I particularly agree with the description of large corporations: "Big companies win by sucking less than other big companies." The creativity within large companies is an industrial product, and capitalists are fundamentally driven by the financial gains that come from creativity. However, I believe that what truly endures is creativity itself—the self-fulfillment that comes from the interaction with various users during the creation of a product. Money is just a means of monetizing that creativity. Large companies that prioritize profit over the essence of creativity often lose a lot of their human touch in the process.

However, I think the overall theme of the article is about the identity of hackers? Perhaps, at the beginning of the 21st century, the term "hacker" carried more of a negative connotation. But I feel that the perception of "hacker" has become more neutral, and in my view, hacker = programmer. Still, I see a significant difference between hackers and painters. The author consistently emphasizes that hackers, like painters, should also create beautiful things and products, using this as an analogy. However, I believe this point applies to any profession. For example, teachers need to convey knowledge in a clear and concise manner, and lawyers must present their arguments in a clear and precise way.


---

## Coding

### Sketch #1: Outside the window

[>> Click to preview the project and source code <<](https://editor.p5js.org/HaoWang010/sketches/-6TsThbzT)

<img width="399" alt="image" src="https://git.arts.ac.uk/24010286/Critical-Coding-Notebook/assets/1333/b0169004-3f06-4756-81e9-12854a456cd4">

**Description:**

Outside the window, it's just the time of sunset, with mountains in the distance and a pond right outside. The water's surface gently ripples, with fish swimming freely in it. I hope that when people view this image, they can feel a sense of inner peace.

**Reference:**

<img width="323" alt="image" src="https://git.arts.ac.uk/24010286/Critical-Coding-Notebook/assets/1333/1aaf67c2-51e6-48e5-802c-b23adea52767">

[source](https://www.pinterest.com/pin/3025924743184963/)


[https://p5js.org/zh-Hans/reference/p5/noise/](https://p5js.org/zh-Hans/reference/p5/noise/)

---

## **Reflecting**

In order to achieve a layered visual effect, a window was chosen as a prop to separate the depth of field. Originally, I wanted to use a window from a traditional Chinese garden for the display, but describing an irregular shape with code proved to be quite challenging for me.

Referencing the original poster design, I kept the main elements: the sun, the water surface, the mountains, and the window. To add some interest to the scene, I decided to introduce some randomness to the water surface using `noise`, and then added fish to the water, controlling their movement with `random`.

Finally, by managing the layer effects, the topmost layer is the window, followed by the sun and mountains in the middle, and at the bottom, the water surface with the fish.
