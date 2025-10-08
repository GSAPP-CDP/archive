---
layout: project
title: Pet Emotion Recognition
author: Zihe Wang
advisor: Danil Nagy
year: 2025
image: /img/2025/Pet-Emotion-Recognition/Cover.png
links:
  - text: Explore
    url: https://www.zihewang.com/feelfur
---

# FeelFur: A Real-Time Pet Emotion Recognition System

<br>

![](/img/2025/Pet-Emotion-Recognition/Poster.png)

<br>

**FeelFur** is a cross-species emotion recognition application designed to address the emotional disconnect between pets and their owners—especially during extended separations. 

<br>

<video src="/img/2025/Pet-Emotion-Recognition/feelfur-demo.mp4" controls style="aspect-ratio: 16 / 9; width: 100%;"></video>

<br>

Initial user research revealed a clear pain point: owners often feel anxiety when away from home due to the inability to understand or respond to their pets’ emotions in real time. While current monitoring tools provide physical indicators like heart rate or motion, they lack emotional depth. FeelFur fills this gap by offering **real-time emotional insight and interaction**.

<br>
<br>

**Problem & Opportunity** 

Many pet owners install smart cameras to alleviate separation anxiety, but these tools merely provide passive video feeds requiring constant user attention. FeelFur proposes a shift from passive monitoring to *active emotional awareness*, helping owners understand and respond to their pets’ feelings in real-time.

<br>

**Technical Route**  

FeelFur combines smart hardware, responsive software, and real-time AI recognition into a unified system:

*Hardware*: A smart tracking camera streams video to a computer in real-time.

*Software*: A React-based web dashboard and mobile app display emotional feedback and allow interaction.

*Machine Learning*: A dual-model system—facial and body-based—analyzes video frames. A Flask API connects the recognition backend with the interface.

<br>

![Technical Workflow](/img/2025/Pet-Emotion-Recognition/TechnicalRoute.png)

<br>

**Emotion Classification Logic**  

The core classification model focuses on feline tail posture and spine curvature, defining five emotional states:  
*Overjoyed*, *Friendly*, *Neutral*, *Anxious*, and *Fearful*.  

This body-based approach is more consistent across breeds than facial recognition, which is used as a complementary model. The facial model identifies:  *Happy*, *Neutral*, *sad*, and *angry* expressions using transfer learning via MobileNetV2.

<br>

**Model Training**  

The emotion recognition models were trained through:

 1.Manually annotated pose data using DeepLabCut (markerless animal pose estimation)

 2.Transfer-learned facial data sourced from platforms like Kaggle

 3.Accuracy optimized to 90%+ across validation sets

Some markers may appear subtle in display but provide precise classification when processed.

<br>

**Final Output & Features**  

The end-to-end prototype includes:

A real-time rotating emotion wheel,  Live facial/body emotion stream charts,   Embedded live video feed,   Historical emotion trend recording,   Adjustable smart camera settings  

<br>

**Future Vision & Customization**  

The system is designed to expand into mobile platforms with enhanced features:

1.Voice interaction feedback based on emotional results  

2.Owner-driven model tuning based on pet-specific behavior  

3.Intelligent alerts when emotions suggest stress or discomfort  

<br>

**FeelFur** is more than a monitoring system—it’s an empathetic assistant that empowers pet owners to remotely care for and emotionally connect with their pets in meaningful ways.

<br>

**More** on https://www.zihewang.com/feelfur