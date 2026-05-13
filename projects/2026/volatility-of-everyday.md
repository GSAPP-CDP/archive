---
layout: project
title: "Volatility of Everyday"
author: Ji-in Kang
advisor: William Martin
year: 2026
image: /img/2026/volatility-of-everyday/capstone1.png
links:
  - text: GitHub
    url: https://github.com/jkdesu
  - text: Project
    url: https://jkdesu.github.io/thesis/
---

<style>
  .project,
  .project h1,
  .project h2,
  .project h3,
  .project h4,
  .project h5,
  .project h6,
  .project .h1,
  .project .h2,
  .project .h3,
  .project .h4,
  .project figcaption,
  .project dd,
  .project dt {
    font-family: Futura, "Futura PT", "Century Gothic", "Trebuchet MS", Arial, sans-serif;
  }

  .project .voe-header-banana {
    background-color: #ffeb3b;
    color: #4e342e;
    padding: 0.15em 0.5em;
    border-radius: 4px;
    display: inline-block;
  }

  .project .voe-header-sandwich {
    background-color: #81c784;
    color:rgb(216, 249, 0);
    padding: 0.15em 0.5em;
    border-radius: 4px;
    display: inline-block;
  }

  .project .voe-black-captions figcaption {
    color: #000000;
  }

  /*
    Figures here live inside a wrapper div, so they do NOT get .content > * margin-between.
    Use column gap for space after each caption → next image; match image → caption with same rhythm.
  */
  .project .voe-black-captions {
    display: flex;
    flex-direction: column;
    gap: var(--space);
    align-items: stretch;
  }

  .project .voe-black-captions figure {
    gap: var(--space);
    margin: 0;
  }

  .project .voe-black-captions figure > figcaption {
    margin-block-start: 0;
  }
</style>

**Volatility of Everyday** explores everyday volatility, subtle yet persistent fluctuations that shape daily life. The work begins from a personal orientation: sensitivity to change in my surroundings, and a tendency to register differences in environments quickly. That sensitivity intensified after relocating to New York City, where patterns of variation across places, systems, and lived experiences became impossible to ignore.

A formative experience came during an internship at a cryptocurrency exchange, where I encountered digital assets such as NFTs and blockchain standards. That exposure deepened an interest in algorithmic systems and in how digital artworks are generated, circulated, and valued, and prompted questions about the sustainability of highly volatile digital assets that often derive worth from speculative and extrinsic mechanisms rather than intrinsic qualities.

Over time, my attention moved from financial volatility alone toward volatility in everyday life. Having lived in major commercial cities, including Seoul, Tokyo, and Manhattan, I noticed how the same essential goods can bear sharply different prices across urban contexts. Accustomed to relative price stability in Tokyo, encountering nearly doubled costs for basic commodities in New York City became an entry point for thinking about volatility not only as an economic condition but as an embodied and emotional experience.

The project frames everyday volatility as a lived condition shaped by perception, environment, and systems of value, asking how decentralization and digitalization intersect with human sensitivity and interpretation.

**Research Question:**

"How can economic volatility be translated into a sensory experience through an everyday object?"

**Context:**

Everyday Objects as Cultural $ymbols

Throughout art history, artists have used ordinary objects to reveal invisible systems of value, labor, consumption, and desire. By transforming familiar materials into symbolic forms, they invite viewers to reconsider the emotional and political meanings embedded in everyday life.

**Volatility of Everyday** extends this lineage by using accessible objects, such as **bananas** and **sandwiches** to investigate how economic instability is felt as much as it is measured.

I wanted to translate that experience into a more shared and quantitative form. Computation and everyday objects become the means to move private sensation toward something tangible and more universal.

<strong style="color:rgb(0, 0, 0);">Precedents:</strong>

A major precedent is Andy Warhol’s transformation of mass-produced consumer goods into artistic representations. Works such as _Campbell’s Soup Cans_ and **banana** imagery blurred the line between commercial products and cultural symbols. Warhol’s repetition of everyday objects reflected industrial production, media saturation, and the normalization of consumerism.

In this project, the **banana** and the **sandwich** function similarly: as widely recognizable objects tied to global trade, accessibility, and consumption.

Many contemporary artists use food to address labor, identity, migration, class, and consumption. Felix Gonzalez-Torres used edible candy piles to symbolize loss, participation, and bodily presence: the audience’s act of taking candy became part of the work, and the installation slowly disappeared over time.

The **sandwich** module applies a related logic: repetitive acts of purchasing and consuming food form a performative system, what I call it a “Bought Experience”—a slowly accumulated record of cost, habit, and constraint.

<strong style="color: #000;">Three Digital Exhibitions:</strong>

<strong style="color:rgb(255, 0, 0);">1. Immersive Simulation</strong>

An interactive comparison of everyday item pricing and emotional response to cost change. Users move through bodega inspired panels of accessible goods and see how facial expression shifts while viewing items.

The piece combines real-time price visualization with facial-expression analytics to study emotional responses to price differences between Tokyo and New York.

<div class="voe-black-captions">

![User experience within the immersive simulation.](/img/2026/volatility-of-everyday/user_experience.png)

![Living cost comparison_Tokyo](/img/2026/volatility-of-everyday/livingcost1.jpeg)

![Living cost comparison_NYC](/img/2026/volatility-of-everyday/livingcost2.jpeg)

</div>

<iframe
  src="https://www.youtube.com/embed/3l9D0h2IwUY"
  frameborder="0"
  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; web-share"
  allowfullscreen
  style="aspect-ratio: 16 / 9; width: 100%;">
</iframe>

<strong class="voe-header-banana">2. The BANANA as a Data Lens</strong>

The **banana** operates as a central medium: mass-produced, globally distributed, and universally recognizable. It carries associations of accessibility, affordability, and comfort, while remaining entangled with labor histories, trade systems, and capital flows.

By placing the **banana** as a central medium in translating emotional layers: comfort, accessibility, feasibility, and fairness, the work asks how economic volatility reshapes not only prices but also feelings of stability and attachment.

Presenting a **banana** to the camera triggers a “sensory awakening”: a non-linear, algorithmic collage of philosophical texts I scraped (e.g. Georg Simmel, Karl Marx, Sara Ahmed). The overlap of theory and object detection mirrors the disorder of value systems in a volatile digital landscape.

<video controls playsinline style="aspect-ratio: 16 / 9; width: 100%;">
  <source src="/img/2026/volatility-of-everyday/bananana.m4v" type="video/mp4" />
</video>

<strong class="voe-header-sandwich">3. Sandwich: Value Deconstruction</strong>

We live in a transactional world: we work to pay bills and pursue credentials for recognition; nothing in life feels free. Food is a rare “controlled” variable. People can, in theory, shape what they eat around health or dietary needs, and it is one of the only necessities in life that humans cannot live without .

Under strict constraints, I pre-set a diet built around a **sandwich** with a limited set of toppings, then repeated visits to **sandwich** shops to sustain what I call the "Bought Experience", linking repetitive consumption to measurable economic and emotional patterning.

From my performative acts of pursuing "Bought Experience", I translated this experience into a web-interface.

![Bought Experience](/img/2026/volatility-of-everyday/boughtexperience.png)

<video controls playsinline style="aspect-ratio: 16 / 9; width: 100%;">
  <source src="/img/2026/volatility-of-everyday/sandwich.m4v" type="video/mp4" />
</video>

## CDP Thesis Video

<iframe
  src="https://www.youtube.com/embed/Hy12MKMtTVA"
  title="CDP Thesis Video"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  referrerpolicy="strict-origin-when-cross-origin"
  allowfullscreen
  style="aspect-ratio: 16 / 9; width: 100%;">
</iframe>

**Reflection:**

By combining everyday objects, interaction design, economic data, and emotional response, **Volatility of Everyday** situates itself within a tradition that uses ordinary materials to expose hidden systems in contemporary life.

The aim is to help people living in an increasingly automated digital era reclaim creative agency through sensitivity to volatility, not only as a market metric but as a felt condition.
