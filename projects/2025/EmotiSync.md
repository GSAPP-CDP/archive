---
layout: project
title: EmotiSync
author: Catherine Ye
year: 2025
advisor: William Martin
---

# EmotiSync

**Emotion-Sensing Adaptation for Your Schedule**  
EmotiSync is an intelligent scheduling assistant that adapts your daily flow based on your emotional state—restoring focus and emotional balance in a distracted world.

Rather than optimizing for productivity, EmotiSync listens to how you feel. It offers gentle task guidance that helps you recover from stress, maintain flow, and reconnect with your inner rhythm.

![Intro](/img/2025/emotisync/intro.jpg)  


---

## Concept

EmotiSync harnesses Hume AI’s Empathic Voice Interface (EVI) to analyze users' emotional expressions in real-time through voice input. Based on these signals, it dynamically suggests tasks that either relieve, sustain, or gently shift your emotional state.

This system challenges conventional productivity tools by prioritizing emotional well-being over rigid planning—empowering users to work with their moods rather than against them.

![Diagram](/img/2025/emotisync/diagram.jpg)  
*Spatial concept rendering: an ambient room where suggested tasks are projected contextually on the wall, enabling passive yet interactive engagement.*

---

## Features

- 🎙️ **Emotion Detection with Hume AI EVI**  
  Real-time voice analysis for 53 nuanced emotional states.

- 🔁 **Adaptive Task Suggestions**  
  Tasks adjust dynamically based on emotional feedback—categorized by stress levels (High, Moderate, Low), relaxation, and focus.

- 🌈 **Emotion-Mapped UI**  
  A color-coded interface that visualizes emotions and schedules with clarity and empathy.

  ![Demo UI](/img/2025/emotisync/ui.jpg)  
*Emotion-adaptive interface with chained task suggestions: the system activates with human presence, listens, and adapts tasks based on user input.*

- 🕰️ **Circadian Rhythm Integration**  
  Task timing suggestions align with natural energy cycles using a trained LSTM model.

- 🎵 **Ambient Response**  
  Music and visuals shift to support recovery, focus, or relaxation.

![Product Journey](/img/2025/emotisync/emotion-map.jpg)  
*A visual walkthrough of EmotiSync’s logic: from detecting presence and analyzing emotions, to adaptive suggestions and ambient responses for stress relief.*

---
## Screenshots

![Output](/img/2025/emotisync/output.jpg)  
*Task interface visualization: showing before/after emotion states, task duration, and emotional progression through dynamic color gradients.*

---

## Demo Video

<iframe width="560" height="315" src="https://youtu.be/jEhTO1tYgZU" frameborder="0" allowfullscreen></iframe>

---

## Development Highlights

- Implemented emotion-task mapping using JSON logic tied to EVI API outputs
- Designed an interactive UI with animated task chaining, progress visualization, and stress-level feedback
- Built with React (Next.js), integrated with TouchDesigner for emotion-reactive ambient visuals
- Trained an LSTM model for emotion-to-time alignment based on user rhythms

