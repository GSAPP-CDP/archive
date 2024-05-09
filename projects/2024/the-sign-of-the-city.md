---
layout: project
title: "The Sign of the City"
author: Hongqian Li
year: 2024
image: /img/2024/the-sign-of-the-city/cover.png
links:
  - text: Project Website
    url: https://hongqianli101.github.io/signageproject/
---

# Background

## The development of urban visual information study

![The development of urban visual information study](/img/2024/the-sign-of-the-city/development.png)

The tradition of incorporating visual information runs through the entire history of modern urban studies. In the late 1900s, Camilo Sitte and Ebenezer Howard started to study the sensory experience of citizens, emphasizing the shape and proportion of beauty in the public space. In the 1970s, Kevin Lynch started to study structure and human perceptions in the city. As they lay the foundation of many urban visual information studies, most of these are more focused on the physical aspects like shape, proportion, and human perceptions but do not much extend beyond these traditional dimensions to explore other aspects such as cultural, economic, and political aspects. With the development of AI, which could potentially open new opportunities in urban visual study, how can we utilize it to build up on the previous studies?

## Adding more to the Image of the City?

![Adding more to the Image of the City](/img/2024/the-sign-of-the-city/imageofcity.gif)

In the book The Image of the City by Kevin Lynch, he stated that a well-designed city incorporating 5 elements - paths, edges, districts, nodes, and landmarks - would obviate the need for additional signages, as the urban structure itself would inherently guide and inform. As long as people need signage, the image of the city fails...

However in modern cities, are there any cities with no signs? As one of the few elements in urban street views containing words and texts, signs offer a unique opportunity to glean insights beyond physical attributes, extending into more cultural, commercial, and political aspects. Therefore, this thesis seeks to explore a new way of urban visual information study, by taking what previous research overlooked and what Kevin Lynch considers a "failure" - signage - as an advantage, and leveraging new AI technology, to add more to the images of the city.

# Research Questions

What AI technologies can help extract more information from urban images?
What do signs tell us about the city?
What types of information signs can add to our understanding of the city(Cultural, Financial, Temporary, Informal, Lexicon...)?

# Methodology

![Research methodology](/img/2024/the-sign-of-the-city/methodology.gif)

The research methodology consists of two steps: first, web-scraping to gather Street View images from Google Maps of the designated research site; second, analyzing these images using Deep Learning algorithms to classify the signs. After classification, the sign areas are extracted for further analysis. Optical Character Recognition (OCR) algorithms are then employed to decipher the content and language displayed in the signs.

# Findings

![Signs type & language in NYC](/img/2024/the-sign-of-the-city/index.png)

19 signage types were identified in New York City and can be grouped into three main categories. The first group is street signs, which include Don't Block signs, Do Not Enter signs, and All Traffic signs, etc. The second group consists of business-related signs, including Shop signs, For rent signs, Promotion signs, etc. The third category is public infrastructure signs, including Bus stop signs, Scaffolding signs, Subway signs, etc. 7 signage languages were identified, including 6 non-English languages: Spanish, Chinese, French, Italian, Korean, and Russian.

![A Scroll of NYC signs](/img/2024/the-sign-of-the-city/result-long.png)

Signs tell us about different neighborhoods' financial, cultural, and lexical layers... In Midtown and Flushing, diverse shop signs point to vibrant local commercial hubs. Lease signs, particularly prominent in Midtown South, indicate ongoing rental activity. Sign language reflects the ethnic composition of each area, with Chinese signage prevalent in Flushing, Italian in Ocean Hill, and Spanish in Woodhaven, which notably also features a significant number of Korean signs. Sign content reveals varied local lexicons, with phrases like "best" commonly seen in Flatbush and Brownsville, and "lucky" prevalent in Chinatown...

<iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="100%" height="500" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FzL1qBQFPCK9l037VB3h42e%2FFinal-Review%3Fpage-id%3D0%253A1%26type%3Ddesign%26node-id%3D2006-40%26viewport%3D243%252C190%252C0.11%26t%3D8EePfsTsTnWo5ECh-1%26scaling%3Dscale-down%26mode%3Ddesign" allowfullscreen></iframe>
