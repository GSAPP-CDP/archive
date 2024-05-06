---
layout: project
title: "Structural Optimization of Composite Bamboo Beams"
author: Kevin Liberman
advisor: David Benjamin
year: 2024
image: /img/2024/composite-bamboo-beams/cover.jpg
---

# Structural Optimization of Composite Bamboo Beams and Columns

The built environment is responsible for about **42%** of annual global CO2 emissions. Cement, iron, steel, and aluminum alone contribute **15%**[^1]. Furthermore, 40-50% of a building's embodied carbon is its structure[^2]. At the same time, until 2060, the world is expected to add about 2.6 trillion ft2 (241 billion m2) of new floor area to the global building stock, the equivalent of adding an entire New York City to the world, every month, for 40 years. **Three-quarters of the infrastructure that will exist in 2050 has yet to be built.**

In order to meet the demands of both population growth and carbon emission reduction targets, we need to work towards using lower carbon materials in cnstruction. One of the most promising and viable alternatives to concrete, steel, and even mass timber is bamboo. Compared to the hardwoods typically used in timber construction, it is more widely available, emits less carbon in its production/processing per unit weight and sequesters much more carbon in its lifecycle due to its quick growth rate. Bamboo can be harvested in 3-5 years compared to decades for trees such as the douglas fir or eastern white pine. The challenge to working with bamboo is that it is a much more variable material: 
- *structurally* - it is an anisotropic material

- *genetically* - there are over 1400 species of bamboo and only six are widely used in construction

- *epistemically* - even for the same species, published data on mechanical properties vary or are lacking across individuals and habitats. 

Further research and computational methods for design and structural analysis need to be developed and tailored to work with these more variable materials.

This research focuses on heterogenous construction methods with minimally processed bamboo with the goal of expanding the design space to include more species and to reduce the amount of offcuts and emissions associated with material selection and processing for construction use. There are several heterogeneous structural systems available. In order to compare them, we must first create a baseline structural analysis and optimized topology in abstract space to help guide us. This project borrows from cutting-edge research in evolutionary algorithms and freeform additive manufacturing[^3] to solve for a material distribution of a non-uniform multi-material 3D structure. To model the structural loads of non-uniform, anisotropic cantilever beam, a custom Finite Element Method solver was developed using Python. The project then maps this optimized distribution to a structural system: a truss or lattice system consisting of two types of bamboo and generatively-designed 3D-printed joints. This system was chosen for ease of assembly and additional structural analysis. Future research may compare the performance of this truss system to a full-culm bundle or split/lidl bundle system. 

![workflow diagram](/img/2024/composite-bamboo-beams/workflow_diagram.png)

![Material distribution genotypes](/img/2024/composite-bamboo-beams/material_distribution_genotypes.gif)

![Structural system variants](/img/2024/composite-bamboo-beams/structural_variations.gif)

![Fabrication: joint detail](/img/2024/composite-bamboo-beams/cover.jpg)


[^1]: [Architecture 2030](https://www.architecture2030.org/why-the-built-environment/)

[^2]: (https://www.archdaily.com/960388/how-to-approach-embodied-carbon-reduction-within-an-architectural-project?ad_medium=gallery)

[^3]: [Multi material topological optimization of structures and mechanisms](https://www.researchgate.net/publication/220743155_Multi_material_topological_optimization_of_structures_and_mechanisms)