

## Assignment #2

### READING



### CODING

Sketch
[view code](https://editor.p5js.org/HaoWang010/sketches/Ws3093gNX)

I’m trying to simulate the effect of flowing sand creating patterns on a canvas. The process starts by randomly generating curves on the screen. Then, for each point on the curve, I sample the color of the corresponding pixel from the original image. Finally, I draw small circles with a radius of 8 at those positions.

The result is a painting that closely resembles the original image, with a texture that even has a slight oil painting feel.

![image](https://git.arts.ac.uk/24010286/CCI-Course-Notebook-2/assets/1333/b7ce8044-2e43-4a6b-b4d7-aa10af357e75)

For better performance, the canvas is kept small. To ensure the image maps correctly, I resized it in advance.

Reference：
1. [Video](https://www.xiaohongshu.com/explore/672b3f770000000019015f1d?source=webshare&xsec_token=ABB19ymDrdfHqWC55zEtw8JQ9v0ZF3IdEtHgmN7RyMj90=&xsec_source=pc_share)：The drawing effect of physical sand in the real world.
2. [Image](https://pin.it/5tzaxzbi8): The original image before processing.


### REFLECTING

I’ve been debugging performance issues. At first, I was reading the color of each pixel in real time, but it was too slow. I tried reducing the number of lines generated per second, which helped a little.

Now, I suspect that noise is affecting performance. But using pure randomness doesn’t look good, and using sin/cos patterns feels too predictable.

For now, I don’t have a good solution for this part.
