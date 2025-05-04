---
layout: project
title: Co-Design Canvas
author: Manas Bhatia
advisor: David Benjamin
year: 2025
image: /img/2025/nyc-building-materials/thumbnail.png
links:
  - text: Explore
    url: https://nycbuildingmaterials.com/
---

![A map that allows us to discover more about NYC-it's full range of materials, buildings, and histories across all five boroughs.](/img/2025/nyc-building-materials/nyc-MLmap-20250502.png)

I've always taken a fondness on how Karl Popper approaches science in terms of replication. Since [this program](https://www.arch.columbia.edu/programs/15-m-s-computational-design-practices) resides in the "of sciences" realm, it makes sense to adhere to this line of thinking when producing and structuring the design:

_We do not take even our own observations quite seriously, or accept them as scientific observations, until we have repeated and tested them. Only by such repetitions can we convince ourselves that we are not dealing with a mere isolated ‘coincidence,' but with events which, on account of their regularity and reproducibility, are in principle inter-subjectively testable[^1]._

With that in mind, this article is geared towards explaining how this project came to fruition and documenting it in a way that is clear and concise. 

<video
  src="/img/2025/nyc-building-materials/NYCBuildingMaterials-20250426.mp4"
  controls
  style="aspect-ratio: 16 / 9; width: 100%;">
</video>

<br><br>

**What is NYC Building Materials?**<br>
A computational "census" for buliding materials.
<br><br>

<br>

_An Old Fascination_<br>
I’ve always been fascinated by old buildings. Watching them get torn down and replaced by glass towers made me wonder: how many materials are packed into these structures, and how can we begin to grasp the scale of it all through visualization? How can we reintroduce ourselves to our built environment all through a material lens? That curiosity led me to the idea of building a platform where people could explore this question through interactive layers. It is about creating a holistic, interactive map of building material footprints—something that makes visible what’s often overlooked, and invites everyone to think critically about what we’re building, and what we’re losing.

![The three stages of my project workflow.](/img/2025/nyc-building-materials/concept-diagram.png)

<br>

_Strategy Games and Shower Thoughts_<br>
Since this is a personal project, it’s only natural that my own interests would find their way in. I’m an avid gamer—the kind with thousands of hours logged on Steam alone. As someone who’s spent a lot of time playing RimWorld and the Civilization series, I kept thinking about how those games communicate complex systems through intuitive tile-based layouts. What if I could "borrow" these designs and utilize them in my architectural projects? What if these interactive designs could lend to more communitive projects? These evening hours role-playing historical figures and AI overseers eventually became a key influence for how I approach the data structure, visualization methods, and UI for a lot of projects.

![In Civilization, each tile has different attributes affecting movement, production output, and even building availability.<br>Screenshot courtesy of Firaxis Games / 2K Games. Source: <a href="https://store.steampowered.com/app/289070/Sid_Meiers_Civilization_VI/">Steam</a>.](/img/2025/nyc-building-materials/game_civilization.jpg)

![In RimWorld, each playerbase is subjected to a tile's temperature, rainfall, terrain, and other natural/artificial factors.<br>Screenshot courtesy of Ludeon Studios. Source: <a href="https://store.steampowered.com/app/294100/RimWorld/">Steam</a>.](/img/2025/nyc-building-materials/game_rimworld.jpg)

_The basic proposition employed is that any place is the sum of historical, physical and biological processes, that these are dynamic, that they constitute social values, that each area has an intrinsic suitability for certain land uses and finally, that certain areas lend themselves to multiple coexisting land uses[^2]._

<br><br>

**Why Is This Important?**<br>
Another Window to Our Built Environment.
<br><br>

<br>

_Urbex in Taichung_<br>
I like to think this project actually started back in 2019, when I was doing field research for my undergrad thesis. It focused on an abandoned theater complex in Taichung’s old entertainment hub—the Central District. It was bulit in 1954 and was abandoned in 2003 during the Taiwan SARS pandemic. The building was ten stories tall, now completely empty except for the basement, which had been converted into a parking rental for the neighborhood. I ended up talking my way in—playing my student card with the security guard to get 30 minutes inside. I wandered the whole building, floor by floor, from the basement to the rooftop.

![A section of Tunghai Theater, or 東海戲院 in Mandarin.](/img/2025/nyc-building-materials/taichung-diagram.png)

Urban exploration—or Urbex, as some of us call it—is an emotionlly intense experience. Your senses sharpen because of the secrecy (or semi-secrecy, in my case), and you notice so much more than you would in a normal setting. It feels like stepping into an alternate reality where everything is still and silent, and you’re the only thing moving—slipping through layers of forgotten slices of life. The furniture was gone or trashed, fixtures torn out, and what remained were surfaces—tiles, textures, the bare bones of the hustle that once was. These were materials that couldn’t be salvaged, so they just sat there for a decade.

![The now emptied-out complex. Word of advice: don't go solo-urbexing.](/img/2025/nyc-building-materials/taichung.png)

Now that the building has been demolished, taken apart and hauled away (in 2020, just one year after I graduated,) I feel an urge to tell a story. One about the identity of a city and how it’s shaped by its parts—its buildings. People come and go, interiors shift, and memories change, but the materials that linger hold a kind of silent presence. That deserves to be celebrated, and I knew, someday in the future, I'd have the opportunity to do so.

_We need more pluralism in design, not of style but of ideology and values[^3]._

<br>

_Creating A Local Building Material Platform_<br>
Fast foward six years later, I'm studying computational design in GSAPP Columbia. In my Colloquium class, there’s a reading I keep coming back to, mainly because of how the author frames local data as something shaped by dynamic, ongoing societal participation. Out of all the great readings in that class, that one really stuck with me:<br>
_All data are local. Indeed, data are cultural artifacts created by people, and their dutiful machines, at a time, in a place, and with the instruments at hand for audiences that are conditioned to receive them[^4]._
<br>
This got me thinking: how can I take an instrument I know how to play and write a song that resonates—not just with an audience, but with myself? How can I create a platform that reveals how building materials shape the identity of our local environments? The challenge is, I don’t know the instrument yet. I’m an architect, and web development and coding are still very new to me. So where do I begin?

<br><br>

**Why Is This Important?**<br>
Another Window to Our Built Environment.
<br><br>

<br>

_Where This Project Began_<br>
One of my first projects in the M.S. CDP program was to build an interactive website that mapped out the broad strokes of my potential capstone. Gorilla Urbanism used layered masks to create an x-ray effect—revealing Manhattan’s building floor-area-ratios alongside their respective occupancies. Not bad for a first-time web dev, right? You can already sense something brewing here—something about usage, visibility, and x-ray ways of seeing the city.

![A mock-up of what's to come in later semesters.](/img/2025/nyc-building-materials/layout-00.gif)

In the Fall semester, I also made an attempt at documenting NYC's building age and demolition using data from NYC OpenData. A simple static map that shows the "birth, life, and death" of NYC buildings. Now it's more about lifecycles and materials.

![Class assignments for GIS for Design Practics by Dare Brawley and Mario Giampieri.](/img/2025/nyc-building-materials/layout-collage.png)

Finally, during Colloquium II by Laura Kurgan and Snoweria Zhang, they showed a case study on how computational design could be utilized in AEC and adjacent industries: [Climate—Conflict—Vulnerability Index by Moritz Stefaner](https://climate-conflict.org/www). 

![A beautifully clean approach to visualizing multiple layers—using opacity and blending modes to evoke a chromatic aberration effect.](/img/2025/nyc-building-materials/case-ccvi.png)

This project became the final push behind NYC Building Materials. I realized I could build a web platform that reintroduces users to New York City through a purely material lens: combining interactive tools like x-ray masks, GIS data analysis, and web-based visualization techniques. It'll invite users to engage with critical questions of sustainability and urban identity, presenting those data in an interactive, participatory manner.

![NYC Building Materials as of April 2025.](/img/2025/nyc-building-materials/layout-final.png)


<br><br>

**How Does It Work?**<br>
Open Data + Machine Learning + D3.JS
<br><br>

<br>

_Missing Data_<br>
At its core, this project functions like a city-wide BIM model; looser in scope, but built for comparison and exploration. To make something like this work, I needed data. While NYC Open Data offers a wide range of public datasets, none mapped building materials at the lot* level. So, I decided to build that dataset myself.
<br><br>
*Lot (building lot): a plot of land designated for constructing a building, often a house or other structure.

![An overview of the data processing and visualization structure.](/img/2025/nyc-building-materials/data-structure.png)

_Part 1 of 4: Clustering Buildings And Assigning Material Profiles_<br>
To estimate building materials across NYC, I first needed to cluster buildings by type. This step helps define the range of building typologies before assigning material compositions using external datasets. While it's possible to categorize buildings directly using PLUTO data, such as age, use type, land use, and ownership, clustering provides a more holistic view of the city's building landscape that also helps prioritize which clusters to flesh out in more detail for accurate material estimation.<br>
By using Python's scikit-learn K-Prototype clustering, NYC buildings could be defined in six clusters, and their general characteristics are as follows:<br>
1. One- and Two-Family Residential Homes (70.64%)<br>
The vast majority of buildings in this category are located in residential zones, primarily constructed between the 1920s and 1960s. These low-rise homes make up over 70% of the building stock, reflecting suburban-style developments across the outer boroughs.
<br><br>
2. Multi-Family Elevator and Mixed Residential-Commercial Buildings (16.33%)<br>
Found mainly in residential zones, these structures blend residential units with ground-floor retail or community use, and most were built between 1910 and 1930.
<br><br>
3. Commercial and Office Buildings (7.53%)<br>
Concentrated in commercial zones, these mid-20th-century buildings—dating from roughly 1925 to 1970, representing a mix of retail corridors, office blocks, and business centers.
<br><br>
4. Multi-Family Walk-Up Apartments (2.61%)<br>
These buildings, lacking elevators and generally rising three to five stories, are a staple of older residential neighborhoods built between 1910 and 1960.
<br><br>
5. Industrial and Manufacturing Facilities (1.58%)<br>
Located in industrial zones, these buildings were largely constructed between 1930 and 1970. They speak to NYC’s industrial past, now often adapted for creative or logistical uses.
<br><br>
6. Public Facilities and Institutional Buildings (1.31%)<br>
Schools, churches, libraries, and other civic structures make up this final category. Though placed within residential zones, their functions stand apart. Most were built between 1925 and 1965, during periods of public infrastructure expansion.

![A comparison between estimating building data with and without clustering first. The top figure highlights a section of Queens; the bottom, Brooklyn.](/img/2025/nyc-building-materials/comparison-collage.png)

For the next step, I’m combining the Regional Assessment of buildings’ Material Intensities (RASMI) by Tomer Fishman et al.—a dataset that blends empirical material studies with synthetic estimates expanded through a random forest model—with my own building clusters. Each cluster is then further divided by building age, borough, height, ownership, and use type to define more precise material profiles. The result is a custom dataset that assigns estimated quantities of timber, glass, concrete, masonry, and steel to every land lot in the city, effectively creating BIM-like data for the entire built environment of NYC.

_All things are related, but nearby things are more related than distant things. - Walter Tobler, First Law of Geography[^5]._

_Part 2 of 4: Visualizing Material Data_<br>
Now that I had the data, the next step was figuring out how to visualize all five materials on a single map. One of my main goals was to make sure users could clearly distinguish and interact with each material layer. At first, I experimented with heatmaps and dot density maps, taking cues from Jia Zhang’s excellent [Asian American Dot Density Map](https://centerforspatialresearch.github.io/asianAmericans/),but they didn’t quite translate, either contextually or visually, for mapping building materials.

![The first phase of visualization experiments in QGIS included heatmaps, dot-density maps, and grid-based approaches.](/img/2025/nyc-building-materials/viz-history-1.png)

Then, I remembered how Civilization uses hex grids for both gameplay and visualization (old habits die hard,) especially its adjacency mechanics, both on a gameplay and theoretical level. Wanting to emphasize a purely material lens for NYC, and to move away from the rigidity of gridiron layouts from common map visualizations, I settled on a hexagon grid with overlapping dots as the core visual language for this project.

![The second phase of visualization experiments, ranging from single-color and two-tone maps to five-color palettes and finally a chromatic aberration effect.](/img/2025/nyc-building-materials/viz-history-2.png)

_Part 3 of 4: Platform Interactions_<br>
Earlier, I mentioned how strategy games influenced this project (by now, it’s probably clear I’m really a huge gamer.) Two UI features that really stood out to me were X-ray views—layer toggles that follow your cursor with a mask—and info panels, which dynamically update based on what feature you’re hovering over. These tools make it easy to compare layers and tiles at a glance, and I wanted to bring that same sense of clarity and interactivity into this platform.

![An early iteration of the hover interaction featured a rose chart using Chart.js to visualize tile details.](/img/2025/nyc-building-materials/demo-hover.gif)

![An early iteration of the x-ray function.](/img/2025/nyc-building-materials/demo-xray.gif)

_Part 4 of 4: Story Markers_<br>
During playtesting, one piece of feedback stood out: users weren’t always sure what the platform was trying to communicate. It lacked enough context and didn’t clearly convey its purpose. That led me to develop a system of ‘story markers’—small, material-themed monikers that feature quotes from The New York Times, tied to the material history of specific regions. These markers reveal their names, backstories, and references on hover, adding a layer of narrative and discovery. They help users explore the distribution of materials and understand the why and how behind them, essentially telling NYC’s story through the lens of what it’s made of.

![The markers also change appearance after being viewed, adding a sense of progression and discovery—like uncovering clues in a city-wide investigation.](/img/2025/nyc-building-materials/markers.gif)

![An early Illustrator study of distributing the markers.](/img/2025/nyc-building-materials/markers.png)

<br><br>

**Who's Behind NYC Building Materials?**<br>
Architect & First-time coder with help from a bunch of lovely GSAPP folks.
<br><br>

<br>

_A Three-Semester Support_<br>
I'm [Hao Lee](https://halfward.github.io/haoLee/), a licensed Taiwanese architect, artist, translator, film enthusiast, and heavy gamer. NYC Building Materials is a project I developed during my [Master of Science in Computational Design Practices (M.S.CDP)](https://www.arch.columbia.edu/programs/15-m-s-computational-design-practices) at Columbia University’s Graduate School of Architecture, Planning, and Preservation (GSAPP). The CDP program is structured around a three-semester core course—Colloquium I, II, and III—which serves as the foundation for developing a capstone project throughout the program.
<br>
Over the course of three semesters, I shaped NYC Building Materials from concept to execution. In the first semester, I focused on defining the project's core ideas, while the second and third semesters were dedicated to implementation and refinement. With this structure in mind, I intentionally selected electives that would support and enhance the project.
<br>
The electives that directly contributed to NYC Building Materials include, but are not limited to, the following (listed in semester and alphabetical order):

Computational Design Workflows by Celeste Layne;<br>
Computational Modeling by Meli Harvey and Luc Wilson;<br>
Mapping Systems by Mario Giampieri; and<br>
Methods As Practices by William Martin and Violet Whiteney.<br>
<br>
Data Visualization For Architecture, Urbanism, and the Humainties by Jia Zhang;<br>
Explore, Explain, Propose by Laura Kurgan and Snoweria Zhang; and<br>
GIS For Design Practices by Dare Brawley and Mario Giampieri.<br>
<br>
Design in Action by Catherine Griffiths and Seth Thompson;<br>
Exploring Urban Data with Machine Learning by Jonathan Stiles;<br>
Footprint: Carbon & Design by David Benjamin; and<br>
Spatial Design Narratives by Josh Begley.<br>

<br><br>

**References**
<br><br>

<br>

_Material Estimate & Tile Data_
Fishman, Tomer, Alessio Mastrucci, Yoav Peled, Shoshanna Saxe, and Bas van Ruijven. 2023. The Regional Assessment of Buildings’ Material Intensities (RASMI). https://doi.org/10.5281/zenodo.10124952.<br>
New York City Department of City Planning. n.d. MapPLUTO Data. Accessed May 2, 2025. https://www.nyc.gov/site/planning/data-maps/open-data/dwn-pluto-mappluto.page.<br>
Carbon Leadership Forum. 2023. Material Baselines for North America (August 2023). https://carbonleadershipforum.org/clf-material-baselines-2023/.<br>
National Historical Geographic Information System (NHGIS). 2020. NYC Census Data (2020). https://data2.nhgis.org/.<br>
New York City Department of Buildings. 2022–2024. NYC Building Energy and Water Data Disclosure for Local Law 84. https://data.cityofnewyork.us/Environment/NYC-Building-Energy-and-Water-Data-Disclosure-for-/5zyy-y8am/about_data.<br>
New York City Department of City Planning. 2020. NYC Census Tracts (2020). https://data.cityofnewyork.us/City-Government/2020-Census-Tracts-Mapped/weqx-t5xr.<br>
Lerner, Sam (Dreamer). n.d. NYC Neighborhoods Map. Accessed May 2, 2025. https://www.google.com/maps/d/u/0/viewer?mid=1c8sYYoYTy-_b7ml3O5Y5ArkS3eRM1W0&ll=40.73677714231287%2C-73.8026375970926&z=14.<br>

<br>

_Marker Shapes & Background_
New York City Department of Parks and Recreation. n.d. Parks Properties. https://nycopendata.socrata.com/Recreation/Parks-Properties/enfh-gkve/about_data.<br>
New York State GIS Resources. n.d. New York State Civil Boundaries. https://gisdata.ny.gov/GISData/State/Civil_Boundaries/NYS_Civil_Boundaries.shp.zip.<br>
New Jersey Office of Information Technology, Office of GIS (NJOGIS). n.d. NJ Counties. https://njogis-newjersey.opendata.arcgis.com/datasets/middlesexcounty::nj-counties/about.<br>

<br>

_X-Ray Layers_
New York City Department of City Planning. n.d. NYC GIS Zoning Features. https://www.nyc.gov/site/planning/data-maps/open-data/dwn-gis-zoning.page.<br>
Metropolitan Transportation Authority. n.d. NYC Subway Lines. https://data.cityofnewyork.us/Transportation/Subway-Lines/3qz8-muuu.<br>
University of Texas at Austin, Texas GeoData Portal. n.d. 2019 LIRR Routes & Stops; 2019 Metro-North Routes & Stops; and 2017 PATH Train Routes & Stops. https://geodata.lib.utexas.edu/?f%5Bdct_isPartOf_sm%5D%5B%5D=NYC+Mass+Transit+Spatial+Layers&page=2.<br>
GIS Lab, Newman Library, Baruch College (CUNY). 2019. New York City Bus Routes, December 2019. https://archive.nyu.edu/jspui/handle/2451/60058.<br>
New York City Department of City Planning. 2025. DCM Arterials and Major Streets, March 2025. https://hub.arcgis.com/datasets/DCP::dcm-arterials-and-major-streets/about.<br>
Kevin Brown. n.d. New York City Bus Stops by New York Startup Index. GitHub. https://github.com/kevin-brown/nyc-open-geojson/blob/master/transportation/bus-stops.geojson.<br>


Most, if not all, of this project is built on open data. Without the availability of pre-existing data and online documentation, at least 95% of my development time would have been spent on field research alone. While field research is invaluable, relying solely on it would limit the possibilities of creating a comprehensive computational project within just three semesters at Columbia. To me, one of the greatest strengths of America’s scientific community is its commitment to transparency and the willingness to investigate and document data. This openness to sharing information has not only fueled scientific and creative breakthroughs but also played a crucial role in uncovering and combating social injustices and inequalities. With NYC Building Materials, I aim to honor the government bodies, non-profits, academics, and individuals who contribute to this vital data-sharing ecosystem. It is through their dedication to open data that we can drive progress and stability.

[^1]: Karl Popper, _The Logic of Scientific Discovery_ (London: Hutchinson, 1959), 23.
[^2]: Ian McHarg, “Processes as Values,” in _Design with Nature_ (New York: Wiley, 1970), 102–115.
[^3]: Anthony Dunne and Fiona Raby, _Speculative Everything_ (Cambridge, MA: MIT Press, 2013), 1–47.
[^4]: Yanni Loukissas, “From Data Sets to Data Settings,” in _All Data Are Local_ (Cambridge, MA: MIT Press, 2019), 1–24.
[^5]: Waldo Tobler, “A Computer Movie Simulating Urban Growth in the Detroit Region,” _Economic Geography_ 46, no. S1 (1970): 234–240.