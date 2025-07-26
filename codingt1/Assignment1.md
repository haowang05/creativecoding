# Assignment #1
>  [Recall the Assignment](https://git.arts.ac.uk/dhowe/Critical-Coding-1-2024/blob/main/assignments/assignment1.md)
> 
> Deadline: October 21st

## Reading

Although Thorp mentions that artists might unintentionally get involved in the misuse of user data, I think it's important to distinguish between artists and big companies. Artists generally aim for artistic expression and sharing personal insights, whereas big companies are more focused on making money. These two motivations are completely different, which means artists can maintain a certain level of moral independence.

Take Google's Arts and Culture app, for example. This project is essentially about public relations rather than pure artistic creation or deep social commentary. This distinction is actually quite important because it helps us understand what responsible use of user data looks like. Nowadays, many new forms of art rely heavily on support from big companies, like the collaboration between Jeff Koons and Snapchat. 

I don't think artists need to overreact about data security issues. Actually, by carefully tracing back to the original purpose of the project, it's not so hard to determine what constitutes reasonable use of user data.



---

## Coding

### Sketch #1: Contrasts in Motion

[>> Click to preview the project and source code <<](https://editor.p5js.org/HaoWang010/sketches/dAsH9-gwb)

<img width="609" alt="image" src="https://git.arts.ac.uk/24010286/Critical-Coding-Notebook/assets/1333/a623fa6f-3e36-4ef1-bd08-49b422f2c90d">

**Description:**

The contrast in colors and patterns represents the mental states of two types of people. The left side shows five fast-moving balls that collide with the boundaries and each other, while the right side has a single slow-moving ball that collides with the edges.

**Reference:**
 [P5.js-Array](https://p5js.org/reference/p5/Array/)
| [P5.js-Game-Pingpong](https://p5js.org/examples/games-ping-pong/)
| [MDN-Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
  

---
### Sketch #1: Self-portrait

[>> Click to preview the project and source code <<](https://editor.p5js.org/HaoWang010/sketches/fPpKmZibH)


<img width="437" alt="image" src="https://git.arts.ac.uk/24010286/Critical-Coding-Notebook/assets/1333/eb66f666-b827-409a-9f3d-177665cb2dba">

**Description:**

Most of my friends say that my personality is like a kitten, so the main body of the picture is a cat. The spiral line represents my state of confusion in an unfamiliar environment. But I think one day I will figure out, so the kitten shows an unconvinced expression.

**Reference:** [Spiral line](https://stackoverflow.com/questions/70693417/p5-js-make-an-animated-spiral-with-line-instead-of-ellipse)

---

## **Reflecting**

Initially, I manually defined five balls, but when it came to checking the collision conditions between them, Just to check for collisions between the balls, I would need to write 10 if statements. Eventually, I decided to use arrays. Since I hadn't worked with arrays before, I wasn't familiar with their predefined properties like `length` and methods like `push()`. It took a lot of documentation reading to understand how they work. Even now, the simulation isn't perfectly smooth; the balls can sometimes get stuck at the edges or corners. The current solution is to set up an invisible boundary, and if a ball goes beyond this boundary, its position is reset.

I also made many attempts with the parameters for the initial speed and position of the balls to prevent them from getting stuck together at the start. If they move too fast, the trajectory becomes unclear; if they move too slowly, it fails to accurately convey the intended emotion. The initial speeds must be different to express this sense of chaos.


