

## **Survey Design**


| Category | Question Nos. | ReferenceLink |
| --- | --- | --- |
| **Ad Skepticism** | **1-9** | https://doi.org/10.2753/JOA0091-3367410105 |
| **Perceived Personalization** | **10-14** | https://doi.org/10.2753/JOA0091-3367410105 |
| **Perceived Relevance** | **15-19** | https://doi.org/10.4018/ijesma.296575 |
| **Online Purchase Intention** | **20-22** | https://doi.org/10.4018/ijesma.296575 |
| **Perceived Intrusiveness** | **23-27** | https://doi.org/10.4018/ijesma.296575 |

### Interview Structure

About the free text/interview part — I haven’t really done this kind of qualitative analysis before, but here’s what I’m hoping to capture:

1. More detailed feedback on the ad content itself — like whether it feels natural, persuasive, or annoying. Since I have control over how the ad is designed, it’d be helpful to hear what people really think.
2. Emotional reactions to the age/gender aspect — especially if the recognition is way off. Strong reactions (whether positive or negative) could give interesting insights, and might even inspire some visual or interaction ideas later on.
3. Other thoughts — like how creative, novel, uncomfortable, or trustworthy the ad feels. Some of these might not fit well into a Likert scale. I also want to identify people who have a lot to say — maybe follow up with them for a deeper interview. Could spark some new ideas!

## Raw data

[optimized_data_final.csv](attachment:618272b4-de6e-44a5-b96e-3d6130aae1d4:optimized_data_final.csv)

## Analysis Report - Impact of Ad Recognition Accuracy on User Responses

### 1. Data Overview

- **Sample Size**: 25 participants
- **Variables**: 33 variables including demographics, accuracy ratings, and psychological scales
- **Key Variables**:
    - Gender_accuracy, Age_accuracy (independent variables)
    - Five psychological constructs (dependent variables)

### 2. Scale Reliability

| Scale | Alpha Coefficient | Reliability Level |
| --- | --- | --- |
| Ad Skepticism | 0.813 | Excellent |
| Perceived Personalization | 0.634 | Acceptable |
| Perceived Relevance | 0.655 | Acceptable |
| Online Purchase Intention | 0.401 | Insufficient |
| Perceived Intrusiveness | 0.576 | Insufficient |

### 3. Descriptive Statistics

| Statistic | Skepticism | Personalization | Relevance | Purchase Intention | Intrusiveness | Gender Accuracy | Age Accuracy | Interest |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Mean | 23.12 | 19.92 | 19.00 | 11.52 | 11.88 | 3.80 | 3.40 | 3.60 |
| Std Dev | 5.88 | 2.69 | 2.84 | 1.78 | 2.93 | 0.71 | 1.15 | 1.38 |
| Min | 11.00 | 14.00 | 14.00 | 8.00 | 8.00 | 3.00 | 1.00 | 1.00 |
| Max | 34.00 | 25.00 | 25.00 | 14.00 | 19.00 | 5.00 | 5.00 | 5.00 |

### 4. Correlation Analysis

- **Gender Accuracy → Ad Skepticism**: r = -0.845 (strong negative)
- **Gender Accuracy → Personalization**: r = 0.801 (strong positive)
- **Gender Accuracy → Intrusiveness**: r = -0.795 (strong negative)
- **Age Accuracy → Purchase Intention**: r = 0.239 (weak positive)

![correlation_matrix.png](/correlation_matrix.png)

### 5. ANOVA Results (2×2 Factorial Design)

- Gender Accuracy:
    - Ad Skepticism: F=33.82, p<0.001***
    - Perceived Personalization: F=17.43, p<0.001***
    - Perceived Intrusiveness: F=20.99, p<0.001***
- Age Accuracy:
    - Ad Skepticism: F=5.80, p=0.025*
    - Online Purchase Intention: F=5.37, p=0.031*

### 6. Effect Size Comparison

| Dependent Variable | Gender Effect | Age Effect | Effect Ratio |
| --- | --- | --- | --- |
| Ad Skepticism | 9.535 | 5.699 | 1.67 |
| Personalization | 3.868 | 1.929 | 2.00 |
| Relevance | 3.472 | 2.244 | 1.55 |
| Purchase Intention | 2.028 | 1.801 | 1.13 |
| Intrusiveness | 4.354 | 2.635 | 1.65 |

**Average Effect Ratio**: Gender accuracy effects are 1.6 times stronger than age accuracy effects

![main_effects.png](/main_effects.png)

### 7. Mediation Analysis

Significant Mediation Paths:

1. **Gender Accuracy → Ad Skepticism → Purchase Intention**
    - Indirect effect: 1.597 (115% mediation)
    - a-path: -7.033 (p<0.001), b-path: -0.227 (p=0.018)
2. **Gender Accuracy → Perceived Intrusiveness → Purchase Intention**
    - Indirect effect: 1.289 (93% mediation)
    - a-path: -3.300 (p<0.001), b-path: -0.391 (p=0.022)
    
    ![mediation_effects.png](/mediation_effects.png)
    

## Conclusion

A total of 25 valid samples were collected in this experiment, followed by a chi-square analysis. In addition, semi-structured interviews were conducted with 8 participants, revealing that users had multi-layered reactions to the "content generated based on facial analysis." 

### Quantitative Analysis

**Key Findings**

1. **Gender accuracy has the most significant impact**: Lower gender accuracy leads to higher skepticism and perceived intrusiveness of advertisements.
2. **Age accuracy also has a significant impact**: The accuracy of age recognition significantly affects user responses, though it is weaker than gender accuracy.
3. The impact of gender accuracy is 1.1-2.0 times stronger than the impact of age accuracy!

**Key Data**

- Impact of gender accuracy (very significant):
    - Advertisement skepticism: p = 0.000009*** (F=33.82)
    - Perceived personalization: p = 0.0004*** (F=17.43)
    - Perceived relevance: p = 0.0011** (F=14.18)
    - Online purchase intention: p = 0.0145* (F=7.09)
    - Perceived intrusiveness: p = 0.0002*** (F=20.99)

- Impact of age accuracy (significant but weaker):
    - Advertisement skepticism: p = 0.0253* (F=5.80) ✓
    - Online purchase intention: p = 0.0307* (F=5.37) ✓
    - Other variables: marginally significant or not significant

- Effect size comparison:
    - Advertisement skepticism: 1.67 times
    - Perceived personalization: 2.00 times
    - Perceived relevance: 1.55 times
    - Online purchase intention: 1.13 times
    - Perceived intrusiveness: 1.65 times

### **Qualitative Analysis**

1. Privacy Concerns
    
    Half of the users expressed concerns about data storage, despite being clearly informed at the start that no data would be retained.
    
2. Assumption of AI-Generated Ads
    
    During interviews, users generally assumed the ads were AI-generated, even without explicit labeling. This may be due to the interaction design's resemblance to real AI conversations, reflecting broad acceptance of AI technology.
    
3. Gender Recognition Errors
    
    Code review revealed that while gender recognition involves probabilistic uncertainty, errors often occur in cases of marginal probability differences. This is because gender is processed as a Boolean value in the algorithm, making it susceptible to minor variations.
    
4. User Feedback & Suggestions
    
    Many users showed strong interest in the project and expressed desire for more interactive or generative formats. Selected feedback includes:
    
    1. The ads feel somewhat impersonal and, compared to traditional ads, lack imagery and context, which may undermine credibility.
    2. The system misidentified my gender and recommended skincare ads I'd never seen before. Some were interesting, but I wonder if I'd have seen them without being labeled female.
    3. When the system identified me as younger than I am, I felt surprisingly connected — it reminded me of my younger self, and I found the ads unexpectedly engaging.
    4. I was curious not just about the ads, but about how the AI perceived me. It felt like being assessed by a stranger, almost like a character in a short film.
    5. The generated ads have a literary quality. It would feel more poetic if they could directly generate poetry.

# 7. Discussion
## 7.1 Why Gender Accuracy Matters More

* Gender is interpreted categorically and socially essential

* Misgendering causes identity threat

* Age misestimation is socially common and less offensive

## 7.2 AI Errors Increase Skepticism and Intrusiveness

Recognition errors make ads feel careless, untrustworthy, and invasive.

## 7.3 Human–AI Identity Negotiation

Users compare self-perception with AI-perception, creating a psychological tension.

## 7.4 Algorithmic Misrecognition as an Artistic Material

The “gap” between AI’s understanding and reality produces:
* Discomfort
* Narrative potential
* Reflective experiences

## 7.5 Implications for Design

* Avoid binary gender classification
* Provide user agency to correct or override recognition
* Consider designing intentional “controlled misrecognition” for artistic or reflective experiences

# 8. Limitations

* Sample size (N=25)
* Single model (face-api.js)
* Demographic imbalance
* Text-only ads
* Artificial study environment

# 9. Conclusion

The study shows that recognition errors—especially gender errors—substantially influence user trust, personalization perception, and intrusion. Qualitative insights reveal that misrecognition is emotionally rich, often unsettling, and reveals the tension between algorithmic interpretation and personal identity. This opens a path toward critical and artistic design approaches that explore this “misalignment” as an experiential resource.

# 10. Appendix

* Full survey
* Interview script
* System interface screenshots
* Prompt templates
* Statistical outputs
* Consent forms