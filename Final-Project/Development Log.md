
## Week 22 (November 24) — Submission & Presentation Prep

* Final edits based on supervisor feedback:

  * Expanded literature review.

  * Added process documentation.

* Created the presentation slides and recorded the video.

* Edited both short and full-length versions of the video.

* Submitted final coursework.


## Week 21 (November 17)

* Converted the Word document into LaTeX.
* Organized all final media assets (images, tables).
* Wrote Abstract and Acknowledgements.
* Completed the final thesis.

## Week 20 (November 10)

* Studied LaTeX tools → used Overleaf.
* Learned basic LaTeX formatting, especially citations.
* Reviewed all references for accuracy.
* Regenerated charts and tables based on updated analysis.
* Added explanation for removing Q20 in the data analysis chapter.
* Completed second full draft.




## Week 19 (November 3)

* Used AI as a peer reviewer for critique:
https://chat.deepseek.com/share/szag16k5on60ra07gq

  * AI questioned ANOVA due to small sample size → found similar studies confirming this.

* Revised analysis plan:

  * Replaced ANOVA with t-tests appropriate for small datasets.
  * Added path analysis code.
  * Selected new visualization methods.

* Rewrote Methods and Results sections accordingly.
  * Identified patterns like “Privacy Paradox” and “Skepticism”.


## Week 18 (October 27)

* Completed Critical Design Practice chapter.

* Wrote the Abstract.

* Finished Discussion.

* Thesis draft nearly complete except Acknowledgements and Appendices.




## Week 17 (October 20)

* Wrote the Introduction and Conclusion.

  * Needed references for integrating critical design projects into academic writing.

  * Useful references:
    * https://arxiv.org/abs/2403.19174
    * https://arxiv.org/abs/2011.11375

* Drafted Limitations & Future Work.

* Refined Identity Fragmentor visuals, interactions, and abnormal-state warnings.




## Week 16 (October 13)

* Continued Identity Fragmentor development:

  * Prompt tuning was difficult—GPT generated only business-style intros.
  * DeepSeek was better but too slow for real-time use.
  * Planned to try Gemini.
  * Attempted confidence-score visualization—but AI-generated confidence didn’t match actual model confidence.
  * face-api.js also doesn’t output alternative-class probabilities → removed confidence display.

* Used AI to generate data visualizations for the thesis.
  * Used Cursor, but forgot to save history.

## Week 15 (October 6)

* Consolidated qualitative analysis results; created a “Misrecognition Hierarchy” (gender/age).

* Completed the Results chapter of the thesis.

* Tried AI-generated self-portraits:

  * Local models too difficult.
  * Online services unstable → decided to stick to text-based generation.

* Organized all data analysis, completed quantitative results and qualitative draft.

* Tested Identity Fragmentor’s technical pipeline:

  * Multiple-tag generation logic.
  * Randomized spatial distribution.
  * Added AR-style glitch overlays.
  * Tested performance under concurrent tag rendering.
  * Highlighted gender misrecognition based on research findings.
  * Added face landmarks and expanded literature review on face recognition.




## Week 14 (September 29)

* Completed quantitative data analysis.
  * Cleaned and processed data.
  * Ran ANOVA based on the original research plan.
  * Obtained several initial findings.
* Planned a new installation concept inspired by insights from the data:
  * Identity Fragmentor
  * “Self-introduction” as a narrative format to trigger self-reflection.
  * Exploring how to visualize the “machine gaze.” Developed the concept of a “data-mirrored identity.”

* Cleaned more interview transcripts and scheduled sessions with additional participants, especially those whose gender was misidentified by the system.

* Held discussions on critical AI art practices, consulting AI tools on technical feasibility: https://gemini.google.com/share/2f587a5c43c9


## Week 13 (September 22)

* Conducted interviews based on the structured guidelines.

* Began writing the qualitative analysis section—considering different coding frameworks.

* Cleaned raw data and standardized all measurement items (e.g., ad skepticism scores).
Set up a data storage workflow (database/CSV).

* Drafted the first version of the Methodology chapter.


## Week 12 (September 15)

* Continued user recruitment with attention to balancing age and gender distribution.

* Tested various speech-to-text tools for transcribing interview recordings.
Final choice: https://www.feishu.cn/product/minutes

* Data collection in progress.

## Week 11 (September 8)

* Conducted initial pilot tests; users reported several interaction issues:

  * Camera captured their image before they felt prepared.
  * The generated text sometimes had formatting or coherence issues.

* face-api.js detected gender too accurately, making it difficult to test the “misrecognition” condition.
→ I manually introduced randomness to increase error rates.

* Improved UI interactions and optimized performance.




## Week 10 (September 1)

* Published the testing platform on Render, enabling cross-region user access.

* Completed and tested the questionnaire.

* Designed structured interview guidelines.

* Finalized the experimental workflow (Webcam → Ad Generation → Survey).

* Developed a mixed-method research plan (online experiment + interviews).
  * Drafted participant information sheets and consent forms.
  * Submitted ethics application.



## Week 9 (August 25)

* Discovered that commercial ads often use Content Taxonomy for classification—important for realistic ad construction.
Redesigned the UI and added more taxonomy-based controls.

* Redesigned the questionnaire. The previous version lacked academic rigor.
Integrated five validated measurement scales from the following references:

  * https://doi.org/10.2753/JOA0091-3367410105
  * https://doi.org/10.4018/ijesma.296575

## Week 8 (August 25)

* Began building the testing platform.

  * Experimented with prompt engineering for commercial-style ads.
  * Analyzed common advertising structures: product benefits → product description → call-to-action.
  * Created structured prompts such as “Generate an advertisement for a [age]-year-old [gender] user.”
  * Considered API latency and fallback logic.
  * Because the survey includes purchase intention and engagement intention, CTA elements became essential.

* face-api.js only supports binary gender, which must be noted clearly in the limitations section.

* Deployment considerations:
  * Running everything locally would severely restrict user testing
  * Looked into hosting options and methods for hiding API keys.



## Week 7 (August 18)

* Designing the development platform
  * I previously worked with face-api.js and am familiar with its capabilities—lightweight, real-time performance, easy web integration.
  * Its accuracy is relatively low, which conveniently aligns with my experimental needs (testing perception of recognition errors).
  * Tested DeepSeek API with a fixed prompt to generate intentionally sarcastic or stylized ad content—results were surprisingly effective.
  * Created high-fidelity commercial-style mockups to simulate real advertising environments.

* Confirmed the technology stack: JavaScript + face-api.js + DeepSeek.





## Week 6 (August 11)

* After extensive reading, I clarified my specific research goals:

  * To what extent does facial attribute recognition accuracy (e.g., age, gender) influence perceived ad relevance and user acceptance?
  * Can a transparency tool that explicitly displays detected user “tags” increase acceptance and trust in AI-generated ads?

* Discussed these ideas with my supervisor and gathered feedback regarding technical feasibility and potential risks.


## Weeks 3–5 (August 4)

Mostly dedicated to reading academic papers. Below are the key works and brief notes:

* Seeing Ad Transparency More Clearly: Public Perception, Use of Ad Transparency Tools, and Responses to Dataveillance
Highly relevant to my topic. Their experimental design can be adapted by introducing AI elements into ad transparency.
* When AI Moderates Online Content: Effects of Human Collaboration and Interactive Transparency on User Trust
Valuable for understanding variable design and analysis methods. Topic relevance is lower, but methodology is inspirational.

* Transparency Without Trust
A project from a research lab; the themes are highly aligned with my research direction, particularly around transparency tools for user-facing systems.

* Towards Human-centered Explainable AI: A Survey of User Studies for Model Explanations
A survey paper. Not very useful overall but introduces a structural framework that could be referenced.

* Fairness and Transparency in Recommendation: The Users’ Perspective
Investigates how users perceive fairness in recommendation systems.
Proposes three elements essential for fairness-aware design:

   1. Clear articulation of fairness goals.
   2. Avoiding manipulation of user choices.
   3. Explaining why fairness matters in the system’s design.



* Exploring the Application of Synchronous Analysis of Physiological Signals and Facial Expressions in Emotion Recognition
Useful for understanding multimodal analysis and framing the literature review.

* Exploring Motivations for Online Privacy Protection Behavior: Insights From Panel Data
Based on Protection Motivation Theory (PMT). Offers rigorous statistical analysis. Provides solid theoretical grounding for privacy-related user behavior.



## Week 2 (July 14)

This week focused on refining the research direction and conducting an initial feasibility review.

* I conducted a preliminary scan of related literature on personalized advertising, algorithmic transparency, and AI ethics to ensure that the research gap is clear.
* Began outlining potential experimental frameworks—especially how real-time facial attribute recognition could be integrated into an advertising generation pipeline.
* Considered different technical approaches (e.g., MediaPipe, face-api.js, or commercial APIs) and assessed feasibility in terms of performance, accuracy, cost, and controllability.
* Drafted an early version of the research question and hypothesis, focusing on how attribute detection accuracy and transparency mechanisms may influence user trust and perceived relevance.
* Communicated these early ideas with peers to collect feedback, mainly about ethical considerations and whether users might feel uncomfortable with camera-based data collection.
* Concluded the week by narrowing my focus to a “lightweight, browser-based” system for rapid prototyping.

## Week 1 (July 7)

After discussing with my supervisor, we identified several possible research directions. I proposed two main approaches I would like to explore:

* Interaction with the body / data visualization.
I have worked on similar themes in previous semesters and always found them compelling. I want to further explore how bodily signals or facial features can be translated into interactive, visual forms within an AI-generated advertising context.

* Privacy concerns in the context of AI-generated advertising.
Although privacy is a widely discussed topic in the arts, I want to specifically focus on advertising generation, where privacy misuse is particularly prominent. Most personal data collected by various systems is ultimately used for targeted or personalized advertising. This makes it a highly relevant and meaningful angle for both artistic and academic inquiry.
