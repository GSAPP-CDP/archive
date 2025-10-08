---
layout: project
title: "TriEmojiMap: Three-fold Embedding Analysis of Emoji Space"
author: Chengxiu Yin
year: 2025
image: /img/2025/Tri_Emoji_Map/cover.jpg
links:
  - text: Live Demo
    url: https://chengxiucdp.github.io/TriEmoji/
  - text: Source Code
    url: https://github.com/ChengxiuCDP/TriEmoji
---

## Introduction

This project presents TriEmojiMap, a multi-layer embedding analysis of emojis, integrating semantic, visual, and language-model perspectives. Emojis are ubiquitous in online communication—recent analyses find that “nearly one in five tweets contains an emoji”[^1]—yet their meaning emerges from both their pictorial form and usage context[^2]. TriEmojiMap compares how each modality represents emoji meaning: it embeds emoji definitions (semantic layer), emoji images (visual layer), and LLM-internal token representations (LLM layer). An interactive Scrollama interface (“Start Guided Tour” button) lets users explore each layer on demand, rather than auto-scrolling, highlighting differences and complements among layers.

![Data source](/img/2025/Tri_Emoji_Map/Unicode%20list.gif)
## Data

I filtered over 5k emojis to 1,810 for analysis, drawn from Unicode’s list by frequency in Twitter data. I follow prior methodology to filter this list: removing purely numeric or non-standard symbols, skin-tone modifiers, and rarely used variants, focusing on base emoji types. This follows the practice of ranking emojis by public usage[^3] and then pruning out modifiers and non-pictographic entries. For each emoji in this list, I gather the following data:

- **Text definitions:** I use EmojiNet[^4], the largest machine-readable emoji sense inventory, which links over 2,300 Unicode emoji to English definitions and keywords. Each emoji’s definition(s) from EmojiNet provide the semantic description for embedding.
- **Images:** I collect the standard 72×72 PNG image for each emoji from a consistent platform (e.g., Twemoji). These pictorial renderings capture the visual appearance of each emoji.
- **LLM tokens:** For the LLM layer, I use the token-level representation of each emoji symbol from a TinyLlama 1.1B model. Each emoji (as a Unicode codepoint) is input to the model and its final hidden-state vector is extracted.

Data processing is entirely done by us: I do not rely on EmojiNet for any clustering or embedding, only its definitions to construct semantic embeddings.

![Data processing workflow](/img/2025/Tri_Emoji_Map/process-data.png)

## Semantic Embedding Layer

I encode each emoji’s meaning using its textual definition. Concretely, the textual description from EmojiNet is fed into the OpenAI text embedding model text-embedding-3-small[^5] (1536 dimensions). This model maps natural language to a dense vector space, so semantically similar definitions yield similar vectors. I do not fine-tune the embedding model, using it as-is. This yields an embedding matrix \$E_{\text{sem}}\in\mathbb{R}^{1810\times1536}\$ (one vector per emoji).

To visualize and cluster these high-dimensional semantics, I reduce \$E_{\text{sem}}\$ with PCA to three dimensions. In this reduced space I apply k-means clustering (with cluster count chosen by the silhouette score and interpretability). The result is a 3D scatter of emojis labeled by cluster. **Fig. 1 (semantic scatter)** shows one 3D projection: distinct clusters emerge for conceptual categories (e.g. facial expressions, animals, flags). For example, one cluster contains many smiley faces, reflecting that “happy/laugh” definitions are grouped together. I interpret the first PCA axis as roughly positive–negative emotion, and the second axis as concrete vs abstract meanings. Because I used human-readable definitions, the resulting clusters are interpretable: one can inspect the keywords in each cluster (e.g. a cluster of heart emoji has “love, affection” terms), confirming semantic cohesion.

![Semantic embedding scatter](/img/2025/Tri_Emoji_Map/semantic-scatter.png)

## Visual Embedding Layer

Each emoji is also analyzed as an image. I feed each 72×72 PNG into a pretrained ResNet-50 (ImageNet weights)[^6]. Specifically, I take the 2048-dimensional activation from the network’s penultimate layer (global pooling) as the visual feature vector. This yields an \$1810\times2048\$ visual embedding matrix \$E_{\text{vis}}\$. Intuitively, emojis that look similar (similar shapes, colors, or motifs) will have similar ResNet features.

As with semantics, I apply PCA to \$E_{\text{vis}}\$ and k-means. The resulting 3D scatter tends to group emojis by graphical style. For example, many flags (rectangular solid-color shapes) cluster together, separate from complex pictorial icons. **Fig. 2 (visual scatter)** highlights this: one sees, e.g., a tight cluster of flag emojis on one side and clusters of colorful objects or hand-gesture shapes elsewhere. The PCA dimensions roughly capture broad visual factors (e.g. color vs form). This purely data-driven analysis often yields clusters that match expected visual categories: soccer balls group by round shape, fruits by color patterns, etc.

![Visual embedding scatter](/img/2025/Tri_Emoji_Map/visual-scatter.png)

## LLM Token Embedding Layer

The third layer uses an LLM. I input each emoji symbol to a pre-trained 1.1B-parameter LLaMA-derived model (TinyLlama[^7]) and extract its final token embedding (the hidden-state vector). The intuition is that the model’s internal representation of an emoji should reflect how it uses or relates the emoji during language modeling. This yields an \$1810\times d\$ matrix of LLM embeddings (here \$d\$ = hidden-unit count). We again apply PCA and k-means.

The LLM clusters often mirror semantic themes: emojis with related roles or concepts cluster together because the language model has learned to use them in similar contexts. For instance, a cluster might contain various heart emojis and another cluster might contain vehicle emojis. However, some idiosyncrasies appear: because the model was trained on text, it may not distinguish visually-similar emojis if they are used similarly in text. TinyLlama performed surprisingly well for its size, significantly improving on earlier small models. **Fig. 3 (token view)** displays the 2D PCA projection of the LLM embeddings. One notes broad alignment with semantic clusters (emotion vs object), but also evidence of the model’s biases. This layer is somewhat of a “black box,” but by clustering I can still interpret groups (e.g. a cluster of food emojis all have similar token vectors in the model’s space).

![LLM embedding scatter](/img/2025/Tri_Emoji_Map/llm-scatter.png)

## Interactive Visualization Interface

I built a web-based exploration interface (D3 + React + Scrollama) to tie together the three layers. The interface is not an automatic scrolling story; instead, it provides a **“Start Guided Tour”** button that triggers each section on demand. The user can switch between Semantic View, Visual View, and Token View, and also highlight subsets of emojis. A screenshot is shown in **Fig. 4**: the interface lists emoji clusters and definitions on the left, and shows the 2D scatter in the main panel with tooltips. Users can click an emoji to see its definition (sourced from EmojiNet) and highlight related emojis, exploring correspondences across views. This interactive guided tour ensures that users actively click through each analysis step, rather than passively scrolling.

![Demo interface screenshot](/img/2025/Tri_Emoji_Map/demo-screenshot.png)

## Insights

Comparing the three layers yields several insights:

- **Semantic vs Visual:** Many emojis that are semantically related are visually dissimilar. For example, animal emojis cluster by meaning (zoo vs farm) semantically, but scatter visually by color or posture.  
- **Semantic vs LLM:** The LLM layer largely aligns with definitions but sometimes merges distinctions due to usage patterns (e.g. flags used in similar textual contexts).  
- **Visual vs LLM:** Purely visual clusters (by color/form) often do not correspond to semantic or textual clusters, showing that image-only embeddings miss meaning.

<iframe
  src="https://www.youtube.com/embed/NHe92fQrW-s"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  allowfullscreen
  style="aspect-ratio: 16 / 9; width: 100%;">
</iframe>

Overall, these comparisons show the complementarity of modalities: semantic embeddings capture dictionary-like meaning, visual embeddings capture appearance, and LLM embeddings capture usage context. By showing them side by side, TriEmojiMap helps us see where they agree (e.g. faces) and disagree (e.g. flags), informing emoji interpretation.

## Limitations

Our analysis has several limitations. The emoji set (1 810) excludes some niche or platform-specific symbols; extending to all Unicode emojis (> 3 000) might reveal new clusters. I rely on EmojiNet definitions, which may not capture every nuance. The visual embeddings use ResNet-50 trained on natural images; fine-tuned icon models might differ. The LLM layer uses TinyLlama-1.1B; larger or fine-tuned models could yield richer embeddings. I did not include multi-modal (CLIP) embeddings, which could bridge semantic–visual gaps. Finally, PCA and k-means are linear and unsupervised; other methods (t-SNE, UMAP, hierarchical clustering) might expose different structures.

## Future Work

Future improvements include:

- Expanding to more emojis and languages (EmojiNet covers English only).  
- Incorporating real-world corpora (e.g. Twitter contexts) for dynamic embeddings.  
- Adding CLIP-style joint embeddings to integrate image and text simultaneously.  
- Enhancing the interface with user-driven controls (cluster count sliders, keyword search).  
- Conducting user studies on emoji selection and interpretation aided by TriEmojiMap.

## References

[^1]: Analysis on Twitter emoji usage: “nearly one in five tweets contains an emoji,” Emojipedia.  
[^2]: Data filtering methodology based on Twitter frequency, Emojipedia.  
[^3]: Practices of ranking emojis by public usage, Emojipedia.  
[^4]: Wijeratne et al., “EmojiNet: An Open Service and API for Emoji Sense Discovery,” *WWW Companion* (2017).  
[^5]: OpenAI, “text-embedding-3-small” model card (2024).  
[^6]: He et al., “Deep Residual Learning for Image Recognition,” *CVPR* (2016).  
[^7]: Zhang et al., “TinyLlama: An Open-Source Small Language Model” (2024).  