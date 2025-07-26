# Generating Fake News via Real-Time Emotion Recognition

Student Name (Id#): Hao Wang #24010286#
|<img width="1280" alt="image" src="https://git.arts.ac.uk/24010286/codingt3/assets/1333/03662043-d2bb-4e5c-b5ec-a2cde35f4652">|<img width="1280" alt="image" src="https://git.arts.ac.uk/24010286/codingt3/assets/1333/b8585660-efce-48f2-a012-e1104f735e28">
|---|---|


|Content|Links|
|-|-|
|**Video**|[https://ual.cloud.panopto.eu/Panopto/Pages/Viewer.aspx?id=4b84835b-b06d-4cf1-94ff-b2ff01362516](https://ual.cloud.panopto.eu/Panopto/Pages/Viewer.aspx?id=4b84835b-b06d-4cf1-94ff-b2ff01362516)|
|**ONLY Code**|[https://git.arts.ac.uk/24010286/codingt3/tree/main/Emotion](https://git.arts.ac.uk/24010286/codingt3/tree/main/Emotion)|
|**3 Python notebooks**|[https://git.arts.ac.uk/24010286/codingt3/tree/main/Assignment](https://git.arts.ac.uk/24010286/codingt3/tree/main/Assignment)|
|**Full Code and Model**|[https://drive.google.com/file/d/1JHqu4amubyePl5ajdBf9FtNb--6eojHw/view?usp=sharing](https://drive.google.com/file/d/1JHqu4amubyePl5ajdBf9FtNb--6eojHw/view?usp=sharing)|
|**Another Experimental Project I Built**|[https://git.arts.ac.uk/24010286/codingt3/tree/main/Attempts](https://git.arts.ac.uk/24010286/codingt3/tree/main/Attempts)|

*Due to GitHub's upload limitations (I only uploaded the code to Git), I have synced the complete project files — including the trained models — to Google Drive.*

**What I Did**

I used a webcam to perform real-time facial emotion recognition. Based on the detected emotion, I then generated a fake news title using a language model, with the generated content intentionally reflecting the opposite of the detected emotion.


-----


## Background
This project originates from my degree thesis, which focuses on the concept of information cocoons (or filter bubbles). The goal is to generate personalized fake information based on visitor data such as gender, age, emotion, and location, in order to illustrate how big data systems weave these information cocoons.

The project explores the following questions:
* How do people in modern society, while contributing their data, lose the freedom to explore information?
* At the same time, how do various data technologies flourish amid people’s increasing surrender of control?
* What is the evolving relationship between the development of data technologies and the boundaries of human information exploration?




> This final assignment serves as a minimal viable attempt related to my degree project. I aim to simplify the problem into two main parts:
> 1. Camera-based Emotion Recognition: Primarily addressing AI processing of video data.
> 2. Custom Text Generation Based on Input Labels: Allowing me to generate tailored fake information by inputting different combinations of gender, age, emotion, location, and so on.
> 
> Based on this foundation, through multiple rounds of training and testing, I expect to eventually achieve the outcomes required for my full degree project.

## Process
### 1. Integrating Emotion Analysis Model
Model I use: https://github.com/serengil/deepface

I integrated the DeepFace library to enable real-time facial emotion recognition using a webcam.

The main steps included:

* Activating the webcam to capture live video input.

* Running real-time emotion analysis on the detected faces.

* Since the detection runs continuously, I made several performance optimizations to improve efficiency and reduce lag.

After these adjustments, the system was successfully tested and performed as expected.

> The specific test script is located in: [face.ipynb](https://git.arts.ac.uk/24010286/codingt3/blob/main/Emotion/test/face.ipynb) 

### 2. Text Generation Testing
#### Local Language Models

Initially, I attempted to generate fake news titles by directly feeding prompts into local language models. However, the generated outputs often had little to no relation to the given prompts.

   <img width="500" alt="image" src="https://git.arts.ac.uk/24010286/Exploring-Machine-Intelligence/assets/1333/20c1e511-47d6-4947-b3c1-d25965d62ff3">



I tested several versions of GPT-2:

* Both gpt2 and distilgpt2 frequently crashed during output with the error: Disposing session as kernel process died ExitCode.

* Only sshleifer/tiny-gpt2 could run without crashing, but its outputs were irrelevant to the prompts and lacked coherence.

#### Large Language Models via API
Given these issues, I decided to switch to using large language models via API, since running them locally was not feasible due to their size.
|![image](https://git.arts.ac.uk/24010286/Exploring-Machine-Intelligence/assets/1333/16bcdd65-1e03-42e1-b553-86bd7816714b)|![image](https://git.arts.ac.uk/24010286/Exploring-Machine-Intelligence/assets/1333/8717f4c3-d97f-4948-9af5-0423d4a67136)|
|---|---|

However, this approach introduced new problems:

* The generation speed via API was extremely slow.

* If the timeout value was set too low, it would result in errors; if set too high, the waiting time became impractical for real-time use.

* The generated titles were often too realistic, making it hard for users to immediately recognize them as fake news, which undermined the satirical or critical purpose of the project.
  


I conducted several tests using the Qwen/QwQ-32B model, primarily by adjusting the prompt and generation parameters.


> The specific test script is located in: [fake-news.ipynb](https://git.arts.ac.uk/24010286/codingt3/blob/main/Emotion/test/fake-news.ipynb)

### 3. Overall Initial Testing
I combined the emotion recognition and the initial fake news title generation into a single script for testing.
The main goal was to ensure that both modules use the same set of emotion labels and that they can work together seamlessly.

Another key objective was to test performance, since both real-time emotion classification and text generation require responsive speeds.
|![image](https://git.arts.ac.uk/24010286/Exploring-Machine-Intelligence/assets/1333/e0f5e38f-3b36-484f-8cb2-955da6fb9a0e)|![image](https://git.arts.ac.uk/24010286/Exploring-Machine-Intelligence/assets/1333/cfbd5b9b-3415-4bf9-879d-4e5dcdaf7e85)|
|---|---|

Areas for Improvement:
* The fake news title generation still needs targeted fine-tuning. In its current state, the results are not acceptable.

* The application window layout and UI could be slightly optimized for better usability.
  
> The specific test script is located in: [output.ipynb](https://git.arts.ac.uk/24010286/codingt3/blob/main/Emotion/ouput.ipynb)

### 4. Train Local Language Models - GPT2

####  Data Processing

> Dataset:[https://www.kaggle.com/datasets/gpreda/bbc-news/data](https://www.kaggle.com/datasets/gpreda/bbc-news/data)
>
> The dataset contains around 40,000 BBC news articles, including information such as title, date, author, link, and description.
>
> --==--
>
> To classify the emotional tone of the text: [https://huggingface.co/logasanjeev/emotions-analyzer-bert](https://huggingface.co/logasanjeev/emotions-analyzer-bert)

I downloaded the dataset from Kaggle and used Python to process the data, saving the results as a CSV file. I performed the following processing steps:

1. Kept only the news titles.

2. Used an AI model to classify the emotions of all 40,000 news titles, and saved the results as a CSV file.
   ![image](https://git.arts.ac.uk/24010286/Exploring-Machine-Intelligence/assets/1333/4dfdedf4-6bb1-47b3-a3fb-7108b01a7137)
   <img width="677" alt="image" src="https://git.arts.ac.uk/24010286/Exploring-Machine-Intelligence/assets/1333/db3e4039-f8c7-4b11-8b98-cbf8dc09dc9b">



4. Mapped the model's 28 emotion labels to 7 facial expression categories.
  
   ![image](https://git.arts.ac.uk/24010286/codingt3/assets/1333/c62b7e8d-abc5-4496-853f-14889b79f7fc)


5. Saved the data with news titles and their corresponding emotion labels into a new CSV file.

6. Converted the CSV file into TXT format for easier training with GPT-2.
   ![image](https://git.arts.ac.uk/24010286/Exploring-Machine-Intelligence/assets/1333/9ae86f85-62eb-4fe6-bcfd-e7a1b73528ce)


#### Model Testing

1. During the initial data processing phase, I split the original dataset into three subsets for feasibility testing: one with around 1,000 entries, another with around 3,000, and the full set with 40,000 entries.

2. I tested three different GPT-2 models and saved the results under separate output paths:
   
      ![image](https://git.arts.ac.uk/24010286/Exploring-Machine-Intelligence/assets/1333/d1ad5fcd-1906-4f3b-9ce0-c501cde3d6a6)

|sshleifer/tiny-gpt2|gpt2|gpt2-medium|
|---|---|---|
|![image](https://git.arts.ac.uk/24010286/Exploring-Machine-Intelligence/assets/1333/f10f14fa-7b43-4931-931f-6c728e21bbaf)|![image](https://git.arts.ac.uk/24010286/Exploring-Machine-Intelligence/assets/1333/c9b04f6c-c5b0-43a5-8f4e-cd969c00cfa1)|       ![image](https://git.arts.ac.uk/24010286/Exploring-Machine-Intelligence/assets/1333/a70b817c-5cd9-4f81-9be6-c9ad337738ae)|
|The generated content was often incoherent and sometimes consisted of non-English words, though it was extremely fast to generate.|The output resembled fake news quite well and remained mostly readable in English. However, the generation speed was slightly slower.|This model pushed my computer to its limits. The generated text was highly readable and felt more realistic, but the generation speed was noticeably slower.|

       
3. In the end, I decided to use the gpt2 model for training.

> The specific test script is located in: [news](https://git.arts.ac.uk/24010286/codingt3/tree/main/Emotion/news)
> 
> Since the generated model is too large, it is not included on GitHub — only the source code is available there.
> 
> You can find the complete project files, including the trained models, on [Google Drive](https://drive.google.com/file/d/1JHqu4amubyePl5ajdBf9FtNb--6eojHw/view?usp=sharing).


### 5. Final Testing

<img width="799" alt="image" src="https://git.arts.ac.uk/24010286/codingt3/assets/1333/58d4cca5-c125-4351-8493-7edcc63e790b">

Building upon the Overall Initial Testing, I integrated my own trained model and made slight optimizations to the application window. I also focused on performance tuning during both the emotion recognition and text generation steps.

Currently, there is a slight lag when generating fake news titles after emotion recognition, but it is fully acceptable. For the final project, I plan to use this small lag as part of an interactive effect.

## Other Attempts
Throughout the semester, all AI training and usage were done locally. Considering that many interactive experiences are web-based in practice, I wanted to try deploying the AI model on the cloud and accessing it via API. This way, anyone can try the tool simply by opening a link.

This project originated from my coding final last semester. The initial goal was to detect facial keypoints using a webcam and overlay textures (stickers) on specific facial areas. When the user shook their head, the overlay would disappear.

Preview link: [https://git.arts.ac.uk/pages/24010286/Mechanical-Self/](https://git.arts.ac.uk/pages/24010286/Mechanical-Self/)

Description: [https://git.arts.ac.uk/24010286/CCI-Course-Notebook-2/blob/main/FinalProject.md](https://git.arts.ac.uk/24010286/CCI-Course-Notebook-2/blob/main/FinalProject.md)

Below is a brief description of my attempts (the unsuccessful version):

### Project Expansion
What I wanted to achieve next was to detect the user's emotion during the head-shaking motion, and then generate Danmaku-style subtitling (bullet comments) in the background based on the current emotion.

|![image](https://git.arts.ac.uk/24010286/codingt3/assets/1333/54ebf237-80f0-4752-b158-cdbc14e5c4d5)|![image](https://git.arts.ac.uk/24010286/codingt3/assets/1333/5fb44212-cdea-4c57-9ee6-6d9f26d4fc43)|
|---|---|


### What I Managed to 

1. P5.js Testing - [sketch.js](https://git.arts.ac.uk/24010286/codingt3/blob/main/Attempts/sketch.js)
   
   I started by modifying only the p5.js code. I was able to switch between different Danmaku subtitling modes as a test. The Danmaku content was pre-written and stored in a JSON file.

2. Danmaku Generated by LLM - [fakeNews.js](https://git.arts.ac.uk/24010286/codingt3/blob/main/Attempts/fakeNews.js)
   
   I successfully connected to a large language model API to generate and write Danmaku subtitles into the JSON file. However, the generation process is still very slow, which prevents real-time interaction.

2. Emotion Detection - [main.js](https://git.arts.ac.uk/24010286/codingt3/blob/main/Attempts/main.js)
   
   I successfully used face-api.js to detect facial emotions in real time.

>  All of the above worked individually when tested in separate JS files.

### Problems Encountered

I found that I couldn't get the different JavaScript modules to communicate with each other smoothly. Specifically:

* Emotion detection and the fake news generation module couldn't pass data efficiently.
* The emotion recognition was already relatively slow.
* The fake news generation via the language model was even slower, which made real-time background display of Danmaku subtitles unfeasible.

Still, I consider these efforts valuable experiments in trying to connect multiple AI models through JavaScript.

## About the Assignments


I have included the work from Week 3, Week 4, and Week 5:

* [Week 3](https://git.arts.ac.uk/24010286/codingt3/tree/main/Assignment/week-3): This focused on image classification using CNNs. Although I didn’t train a CNN model from scratch, I used the DeepFace library, which is implemented with CNN.

* [Week 4](https://git.arts.ac.uk/24010286/codingt3/tree/main/Assignment/week-4): I created a custom classifier to recognize characters from The Simpsons. While the accuracy wasn't very high, it was a fun experiment. I also tweaked some parameters and found that training an AI model is really about balancing performance and architecture.

* [Week 5](https://git.arts.ac.uk/24010286/codingt3/tree/main/Assignment/week-5): I worked on text generation. In my final project, I trained my own text generation model as well. Overall, I’m very satisfied with the results.

