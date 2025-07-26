# Assignment #3
>  [Recall the Assignment](https://git.arts.ac.uk/dhowe/Critical-Coding-1-2024/blob/main/assignments/assignment3.md)
> 
> Deadline: November 4th

## Reading

I believe that art has a special quality that makes it difficult for people to express their honest opinions. I have been to various art exhibitions with different people, but we rarely engage in sharp discussions about the shortcomings of a particular work. Many artworks exhibit a trait that suggests, "You think I'm bad because you don't understand me."

Food, physical goods, and software are businesses driven by the number of users. The more people use them, the more reviews they receive, and the better products tend to drive out the inferior ones. However, art works are often the opposite. The more niche and esoteric an artist is, the more likely their work can be packaged as high-end, and the less likely it is to be criticized. Moreover, many installation and media art pieces, limited by their modes of expression, are hard for a large audience to see and evaluate. The methods of dissemination are also very limited, gradually forming a vicious cycle.

I agree with the author's perspective, but it is difficult for me to change the current situation in the short term.


---

## Coding

### Sketch #1: spotlight

[>> Click to preview the project and source code <<](https://editor.p5js.org/HaoWang010/sketches/zm6YyJQKz)

<img width="599" alt="image" src="https://git.arts.ac.uk/24010286/Critical-Coding-Notebook/assets/1333/e10ef4a6-0238-4443-9e8e-5e6cc46007fd">

**Description:**

Visually displaying the trajectory of an object's movement is a bit boring, so I want to reflect the movement process by changing the properties of the static object itself. I consulted some reference pictures of patterns and gave up the boring circles, directions, and triangles. In the end, I used arcs. I reflected the position of the mouse by changing the transparency and direction of the original arc.



---

## **Reflecting**

[Code](http://www.complexification.net/gallery/machines/substrate/applets/substrate_s.pde)

**Generation Process:**

* Create a canvas and extract colors from a predefined image.
* Generate cracks near the mouse click.
* Once the crack seed finds a suitable position, it starts growing slightly offset from the starting point.
* Each crack has its own direction and speed.
* They change direction when they encounter other cracks or boundaries.
* Draw transparent sand particles based on the position of the cracks to enhance the visual effect.
* The color, transparency, and other properties of the sand particles are dynamically changing.

**Inspiration:**

* Changing the transparency and color can add many detailed effects to the image. Extracting colors from a predefined image can ensure the uniformity of the overall tone of the picture.
* For the detection methods of boundaries and other cracks, they ensure the continuity of the image and can also effectively prevent overlapping rendering effects.
