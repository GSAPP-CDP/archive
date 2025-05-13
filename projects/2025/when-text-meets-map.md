---
layout: project
title: When Text Meets Map
author: Yuxi Dai (Sissie)
advisor: Juan Francisco Saldarriaga
year: 2025
image: /img/2025/when-text-meets-map/map.png
links:
  - text: Explore
    url: https://daisissie.github.io/whentextmeetmap/
  - text: About
    url: https://daisissie.github.io/whentextmeetmap/about.html
---

**What if you could read Literature not just linearly, but geographically?**<br>

When Text Meets Map explores how non spatial texts, literature and personal narratives, become spatial narratives when mapped.

How might mapping the locations reshape your understanding of these stories?

![A new way to explore literature by reading it on a map](/public/img/2025/when-text-meets-map/map.png)

**Reading can go beyond pages! Treating literature as data and space.**

These are foundational U.S. texts, all based on true stories.

-Walden by Henry David Thoreau is a reflection on living alone in the woods, exploring solitude, nature, and self-reliance. The entire book emphasizes a deep communion with the natural world.
  
-On the Road by Jack Kerouac is considered the bible of the Beat Generation. The characters roam across America in search of freedom, identity, and meaning.

-Into the Wild by Jon Krakauer tells the story of Chris McCandless, who leaves society behind to seek truth in the Alaskan wilderness—grappling with themes of individualism and risk.

Each reference becomes a point within an interactive constellation of ponds, mountain passes, wilderness trails, towns, cities, and country.


![Reading can go beyond pages.](/public/img/2025/when-text-meets-map/real_book_story.png)



**Can this tool change the way you experience these books?**



As the user enters the interface, a number of icons appear, which can be toggled off if desired. Each white dot represents a location mentioned in the books. The fainter the dot, the fewer times that place is referenced. Even at a glance, the user begins to gain a visual understanding of each book's geographic landscape.

![Overview_whitedot_background](/public/img/2025/when-text-meets-map/white_dot_intense.png)

Users can then filter the map by theme—such as Freedom, Road Trips, Nature as Solace, Against Materialism, and more. By mixing and matching these filters, users can uncover which locations resonate most strongly with each theme. Notice how some areas light up under certain filters, revealing new patterns.

![With filters](/public/img/2025/when-text-meets-map/web_screenshot.png)

![Example of Popup](/public/img/2025/when-text-meets-map/popup_example.png)

Seeing all these snippets together highlights unexpected overlaps and contrasts, inspired by the surrealist art game *Exquisite Corpse*. Each entry reveals a moment, a mood, or a scene, sometimes contradictory, sometimes unexpected, emphasizing the layered and diverse ways people engage with space. These patterns stay hidden until text meets map.


**Methodology**


![Methodology Diagram](/public/img/2025/when-text-meets-map/methdology.png)

The platform was developed through a reproducible data pipeline.

Using spaCy, the text was tokenized and segmented to identify candidate place names. Large language model was then employed to refine and disambiguate these references across hundreds of pages. Custom scripts automated the processes of chunking, thematic filtering, and error handling.

Next, the Google Maps API geocoded each validated location into precise latitude–longitude coordinates, while also capturing relevant contextual snippets. The resulting data was categorized by physical objects and thematic concepts. Sentiment analysis was also tested—grouping content by positive, neutral, and negative tones with confidence scores—but it was ultimately not included, as it did not yield meaningful interpretive insight.

Finally, the data was visualized using Mapbox, employing dynamic clustering, zoom-based icon scaling, and scrollable pop-ups. This ensured a consistent interactive experience across all three literary works.

Through this pipeline, unstructured narrative text is transformed into structured spatial data, enabling a different way of literary exploration.

**Demo Video**
<iframe
  src="https://www.youtube.com/embed/J2hMkFJYO7Y"
  frameborder="0"
  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; web-share"
  allowfullscreen
  style="aspect-ratio: 16 / 9; width: 100%;">
</iframe>

<span style="font-size: 1.5em;">**By treating literature as data and space, the project opens new modes of reading. It encourages us to read the world not just linearly, but through spatial, deeply personal experiences and interaction.**</span>

<br><br>

Reference:
1. Site of Thoreau's Walden Pond cabin, marked by a cairn, circa 1908.(Public domain image courtesy of the Library of Congress.)
2. Jack Kerouac and Gian Pieretti, 1966. (Public Domain via Wikimedia Commons.)
3. The Alaska Army National Guard airlifted "Bus 142," made famous by Into the Wild, for public safety in June 2020.
(Public domain image courtesy of Alaska National Guard / Department of Natural Resources via DVIDS Hub.)

