---
layout: project
title: EmotionEcho.exe
author: Skylar (Siqi) Zhang
advisor: Seth Thompson
year: 2025
image: /img/2025/EmotionEcho/Cover.png
links:
  - text: Background Research
    url: https://gsapp-cdp.github.io/colloquium-2-2024/work/skylar/
  - text: Skylar Zhang
    url: https://skylarz7.github.io/portfolio/
---

![EmotionEcho.exe](/img/2025/EmotionEcho/1.png)

EmotionEcho.exe is a three-stage interactive experience that visualizes how emotional landscapes are shaped and echoed by algorithmic systems like TikTok.
<br>
<div style="padding:56.25% 0 0 0; position:relative;">
  <iframe 
    src="https://player.vimeo.com/video/1081913325?badge=0&autopause=0&player_id=0&app_id=58479" 
    frameborder="0" 
    allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" 
    style="position:absolute; top:0; left:0; width:100%; height:100%;" 
    title="EmotionEcho">
  </iframe>
</div>
<br>

_"Have you ever clicked on one video...
and suddenly, your feed was filled with the same kind of content, over and over again?
At first, it feels natural—maybe even comforting.
But slowly, it becomes harder to remember what existed outside that bubble.
The space narrows. The emotions loop.
Until you're not just watching the content—you're living inside it."_

## What is Echo Chamber?

![Filtered Bubbles](/img/2025/EmotionEcho/0.gif)

Based on existing research, echo chambers can be understood through three dimensions: Social Network, Emotion Homogeneity, and Self-Posted Similarity. Each represents a different way that online environments reinforce selective exposure. In this project, I focused on Emotion Homogeneity, which analyzes whether content consistently triggers similar emotional responses. This dimension allowed for quantifiable analysis of emotional clustering within algorithmically curated spaces.

![Echo Chamber Definition](/img/2025/EmotionEcho/ee.jpg)

---

## Data Preparation

![TikTok Posts Data Scrapping](/img/2025/EmotionEcho/1.gif)

To begin the analysis, I scraped TikTok video pages using [BeautifulSoup](https://pypi.org/project/beautifulsoup4/). From each post, I collected a range of data—including basic video metrics like duration, textual content such as captions and hashtags, and author information like fan count and verification status. But the most important layer was the comments section. That’s where I focused my analysis of emotion homogeneity—looking at whether users responded with similar emotional tones, which could indicate the presence of an emotional echo chamber. This scraping process allowed me to turn a qualitative feed into structured data for further analysis.

![Emotion Homogeneity Equation](/img/2025/EmotionEcho/token.jpg)

After collecting the data, I used a [multilingual sentiment analysis model](https://huggingface.co/tabularisai/multilingual-sentiment-analysis) to classify each comment into five levels: from very negative to very positive. Before this, I applied tokenization to break down the text into analyzable units. The goal here was to measure emotion homogeneity—whether users in the same post responded with similar emotional tones.

I then combined this emotional data with other features, like video metrics, topics, and author characteristics, and used Ordinary Least Squares (OLS) regression to explore how these variables influenced emotional responses. This helped quantify how emotional clustering happens across different types of content and creators.

---

## Game Prototype

![P5.js 2D prototype](/img/2025/EmotionEcho/proto.gif)

Before building the 3D game, I created a 2D prototype in p5.js, where white dots represent social media users and colored bubbles represent emotional filters—users get pulled in by emotional gravity. I tested three different topics—[Work](https://editor.p5js.org/SkylarZ7/full/_hVaPh05A), [Entertainment](https://editor.p5js.org/SkylarZ7/full/tFluJa2gD), and [Social Issues](https://editor.p5js.org/SkylarZ7/full/f0f1tnxbJ)—and this form of data visualization made me wonder: what if we could explore data playfully by gamifying it?

![Game Topic](/img/2025/EmotionEcho/topic.jpg)
This project reimagines data visualization as a playable experience, allowing users to explore emotional data from the inside. The same framework could be adapted to other topics—for instance, this demo uses TikTok reactions to Elon Musk as gravitational fields, turning viral content into emotional singularities.
---
## Game Design
![Level Design](/img/2025/EmotionEcho/level.jpg)
EmotionEcho.exe was developed using Unreal Engine 5 with a combination of real comment datasets, gravity-based physics simulation, and sentiment classification. Each “bubble” in the game represents an **emotional node**, whose properties—like size, pull, and color—are mapped to data-derived values (e.g., sentiment score, homogeneity index). By making data feel **physical**, the game challenges how we emotionally and spatially experience digital platforms.
# Level 1 — Storytelling Tutorial
![Level 1](/img/2025/EmotionEcho/level-1.png)

The experience begins with a narrated, ambient tutorial space where players drift through emotional fragments. These fragments are drawn from real online comments, algorithmically clustered and embedded in floating bubbles. The goal is not to escape, but to **observe**: how emotion spreads, accumulates, and creates feedback loops in seemingly neutral environments.

---

# Level 2 — Emotional Gravity
![Level 2](/img/2025/EmotionEcho/level-22.png)

Once immersed, players navigate a distorted emotional terrain shaped by algorithmic influence. Each floating bubble represents a viral post, pulling the player with a gravity proportional to the emotional homogeneity of its comment section. High emotional agreement leads to stronger pull—**positive or negative**. This is where the player begins to feel trapped, looping in the same affective orbit.

![Environment Design](/img/2025/EmotionEcho/level-2.png)
I collaborated with Manas Bhatia for environment design. To construct the environment, we began by placing discrete points in space—each representing the origin of an echo chamber or ideological bubble. These acted as repulsive forces, symbolizing the desire to move away from isolated thinking. In contrast, the spaces between them became zones of attraction, forming a magnetic-like field of positive forces. Drawing inspiration from the behavior of magnetic fields, we used Rhino and Grasshopper to generate field lines within these neutral zones. These lines served as guides for designing connective pathways that bridge the divide between bubbles. Recognizing the need for spatial complexity and accessibility, we introduced vertical variation by elevating portions of the pathways, enhancing both navigability and immersive experience.
![Evolution of environment](/img/2025/EmotionEcho/envir.gif)
![](/img/2025/EmotionEcho/view.jpg)
![Sectional Views](/img/2025/EmotionEcho/sec.png)
The Rhino model was exported using Datasmith plugin and imported into Unreal Engine for further development. Within Unreal, we sculpted the landscape, integrated contextual 3D building assets, applied materials, and adjusted the atmospheric conditions through fog and lighting effects. To enhance immersion, we incorporated animated flipbooks using GIFs and positioned images of cyberpunk cities behind the buildings, adding visual depth and a layered narrative to the environment.
![Cyber Punk Vibe](/img/2025/EmotionEcho/cyber.png)
---

# Level 3 — Control Room
![Level 3](/img/2025/EmotionEcho/level-3.png)

Finally, players enter a space that mirrors the social media algorithm itself—a control interface where they can manipulate emotional parameters, observe bubble behavior, and trace how algorithmic curation shapes the emotional spectrum of their feed. This room blends **quantitative data** with **subjective emotional responses**, completing the circle from passive observer to active participant in the system.


---

## Game Mechanics Walkthrough
The game unfolds within a defined bounding box that contains all emotional bubbles, generated at the start of each session based on input data. Each bubble represents a distinct emotion, visualized through color, with its size and movement governed by the intensity of the data it embodies. Surrounding each bubble is a collision field that influences the player-controlled character—when the avatar nears a bubble, it is pulled toward it, simulating emotional attraction or entrapment through a shift in gravity direction. Sliders dynamically adjust emotional parameters in real time, reshaping the behavior and scale of corresponding bubbles. Throughout the environment, interactive elements such as learning points trigger prompts upon collision, while props activate UI overlays like sliders and real-time surveillance footage. Teleport nodes shift the character’s position within the world, allowing traversal between spatial zones and emotional states.
![Game Mechanics](/img/2025/EmotionEcho/mec.gif)
![BluePrints](/img/2025/EmotionEcho/bp.gif)

---
## Data Analysis 
![Qualitative + Subjective ](/img/2025/EmotionEcho/sub.gif)
![Quantitative + Objective](/img/2025/EmotionEcho/ob.png)
![](/img/2025/EmotionEcho/a.png)
![](/img/2025/EmotionEcho/b.png)
![](/img/2025/EmotionEcho/c.png)

---


## Reflection

Through layered design, EmotionEcho.exe proposes a shift in how we interact with online emotion—not as a passive byproduct of scrolling, but as a **space we move through, shape, and are shaped by**. It’s a speculative tool, a critical toy, and a visualization of the architectures we often inhabit without seeing.
![Where data becomes a game, and emotion has gravity](/img/2025/EmotionEcho/fin.png)

## Google Slides
<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vSvyuQd3XgYD--3-Upa_lR16mkQX7izHULyax-leflD3gs7L4MsMVrL8TJHfu9wB1gLuPfAjLWNnjL5/pubembed?start=false&loop=false&delayms=3000" frameborder="0" width="960" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>

---

## Credits

Concept, design, and development by **Skylar (Siqi) Zhang**  
Advised by **Seth Thompson**, GSAPP  
Built using **Unreal Engine 5** 

## References

- [Birds of a Feather: How TV Fandoms End Up as Twitter Echo Chambers](https://honoursreview.com/blog/2019/4/25/birds-of-a-feather-how-tv-fandoms-end-up-as-twitter-echo-chambers)

- [Social Media Echo Chambers: Public Health Implications](https://pmc.ncbi.nlm.nih.gov/articles/PMC8271428/?utm_source=chatgpt.com) — *Published on PubMed Central*

- [The Gamification of Social Media](https://www.brame.io/blog/social-media-gamification)

- [BERT Multilingual Emotion Classifier (Hugging Face)](https://huggingface.co/SchuylerH/bert-multilingual-go-emtions)

- [YouTube – Custom Gravity Tutorial in UE5](https://www.youtube.com/watch?v=vR6zGI4NC6I)

- [Unreal Engine Forum – Custom Gravity in UE 5.4 (Tutorial)](https://forums.unrealengine.com/t/tutorial-custom-gravity-in-ue-5-4/1765303)

## Special Thanks

This project would not have been possible without the guidance, teaching, and support from the following people:

**Course Instructors**  
- *Computational Design Workflows* – Celeste Layne  
- *Methods as Practices* – William Martin and Violet Whiteney  
- *Explore, Explain, Propose* – Laura Kurgan and Snoweria Zhang  
- *Design in Action* – Catherine Griffiths and Seth Thompson   
- *Virtual Architecture* – Nitzan Bartov  
- *Spatial AI* – William Martin  

**Collaborators & Friends**  
- Junyin Chen and Rui Wang (Southeast University), whose early conversations helped spark the foundation of this inquiry  
- Manas Bhatia, Yilin Zheng, and Catherine Ye (Columbia University), for their continuous support, feedback, and camaraderie throughout the process

**Advisor**  
A special thank you to **Seth Thompson**, whose mentorship, encouragement, and critical insight guided this project from concept to execution. His role as an advisor has been instrumental in shaping both the vision and the rigor of this work.