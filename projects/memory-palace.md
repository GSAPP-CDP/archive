---
layout: project
title: MENtal AmbIvalence
author: Ziyu Zhang
year: 2023
image: /img/cover.png
---

I. Background

GPT-3 has become a hot topic recently, with AI technology playing a variety of roles in people's lives. This project can be seen as an extension of the summer colloquium, which continues to explore the interaction between human memory and AI technology and the future direction between them. With the current trends, the integration of AI into our daily lives and even helping us manage stored memories is no longer a fiction scenario. So what is the current AI technology's processing mechanism for human memory, which can be specified as emotional text, image, sound, smell, touch, perception, etc.? And what will be the future attitude of human beings to deal with third-party technology to interfere with human personalized privacy, emotions and memories? These are the questions that should be explored and considered in this project. 

So, what is GPT-3? GPT-3 is a neural network machine learning model trained using internet data to generate any type of text. In simpler words, it requires a small amount of input text and will generate large volumes of relevant and sophisticated machine-generated text. There are a variety of functionality in GPT-3 which includes, text completion, code, completion and chat assistance, etc. The GPT-3's simulation of human speech intonation, content, and logic is derived from a large amount of data training. But it is not difficult to see from the conversation with it that the context of its dialect is indeed machine-like and designed to be rational. The official GPT-3 does not understand the details of the user's emotional input and can only respond with plain and general answers, which inspires me to think whether the result will be more human if we use more personalized and emotional text data to train GPT-3.

Then how to define memory? Quoted from Epistemology of Memory, memory is an approximation of some facts. In other words, memory generally alters significantly what enters it. When we recall some episodes of the past, those recollecting are not the retrieving, but rather the generating of representations of the past. It actually generates new beliefs about the past. There are two common categories of memory, which are Semantic memory that indicates proposition of memory, and Episodic memory that refers to actual events of memory. Epistemic theory, therefore, mainly focuses on these two kinds of memory and illustrates an interesting concept, that is whether practical knowledge can be fully understood in terms of various propositions. In simpler words, the goal is to explore whether knowledge-how is reducible to knowledge-that, and how to use various knowledge-that to build knowledge-how.

II. Research recipes

i. Research Question
Through the experiment on interactions between different types of language models and different functional human prompts, this project aims to explore how artificial intelligence parse and interpret emotional-constructed texts, what human obtain and are influenced by these process on how they observe the technologically mediated entities.

ii. Training Dataset:

-Vincent Van Gogh’s diary from Arles to Auvers (50,000 tokens); 
-Ziyu’s personal diary (10,000 tokens); 
-GSAPP website News section from 2018 to 2023(40,000 tokens).

iii. Medium:

Processing(Java) & Google Colab(Python)

III. Behavioural diagram

<img src="bd.png" alt="Italian Trulli">


IV. Math in GPT Architecture

<img src="math.gif" >

GPT operates on a linguistic unit known as a token, which is comprised of a sequence of characters that can represent a full word or a fragment of a word. The tokenization of GPT allow it to have its own dictionary to generate the result. Then how AI choose words, the reason behind it is the attention/ Occurrence in Token, which is the purpose of attention is to predict which input tokens to focus on and how much for each output in the sequence.Futher, how to quantify those attention, there are Logistic Probability behind this Guessingprocess. GPT-3 uses the principles of probability to determine the likelihood of each word’s appearance through its training, and then selects the next word accordingly.

V. Sketch

<img src="cover.png" >

VI. Architecture in GPT
<img src="0.1.gif" >
Unfinetuned GPT with temperature = 0.1
<img src="3.0.gif" >
Unfinetuned GPT with temperature = 0.3
<img src="general.gif" >
ChatGPT 
<img src="van.gif" >
Van Gogh dataset trained GPT
<img src="me.gif">
Personal diary trained GPT
<img src="gsapp.gif" >
GSAPP dataset trained GPT


