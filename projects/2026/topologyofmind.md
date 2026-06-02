---
layout: project
title: Topology of Mind
author: Minsup Chung
advisor: Adam Vosburgh
year: 2026
image: /img/2026/topologyofmind/thumbnail.png
links:
  - text: Explore
    url: https://topologyofmind.com/
  - text: About the Author
    url: https://minsupchung.com/
---

<style>
  .project-content .tom-math-inline,
  .project-content mjx-container:not([display="true"]) {
    display: inline-block;
    white-space: nowrap;
    vertical-align: baseline;
  }

  .project-content .tom-math-display,
  .project-content mjx-container[display="true"] {
    display: block;
    width: 100%;
    margin: var(--space) auto;
    overflow-x: auto;
    overflow-y: hidden;
    text-align: center;
  }

  .project-content mjx-container > svg {
    display: inline;
    margin-left: auto;
    margin-right: auto;
    vertical-align: middle;
  }
</style>

<script>
  window.MathJax = {
    tex: {
      inlineMath: [['$', '$'], ['\\(', '\\)']],
      displayMath: [['$$', '$$'], ['\\[', '\\]']],
      processEscapes: true
    },
    svg: {
      fontCache: 'global'
    }
  };
</script>
<script async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js"></script>

## Introduction

_Topology of Mind_ begins with a technological premise: a system that could generate architectural space in response to a specified emotional state. As affective computing, neural signal interpretation, and generative AI continue to mature, this possibility no longer belongs only to fiction. A future tool might read physiological or brain-derived signals, infer an affective condition, and produce spatial configurations calibrated to that condition.

![Conventional architectural process in which feedback returns through post-occupancy evaluation](/img/2026/topologyofmind/Post%20Occupancy%20Evaluation.png)

The project is not primarily concerned with building that tool. It uses the possibility of such a tool as a lens. If emotional and spatial mapping becomes automatable, what does this reveal about the way this era understands emotion, knowledge, and design? What kind of world must be assumed before feeling can be treated as data, space as output, and experience as something that can be optimized?

This speculative artifact therefore works less as a solution than as a conceptual probe. It constructs a chain between visual stimuli, neural activity, topological structure, prediction, and image generation in order to ask how human experience becomes legible to machines, and how machine-scale representations might be returned to human perception.

## Knowing as Relation

Human knowledge is often described through two complementary procedures. Deduction extends relations inside an existing logical structure. It strengthens coherence, but it does not introduce fundamentally new information. Induction moves in the opposite direction: it extracts relational patterns from repeated experience, filters noise, and builds models from observed regularities.

From this perspective, knowledge is not the accumulation of isolated facts. It is the ability to grasp relational structure. A thing does not carry meaning by itself; it gains meaning through its position in a field of other things. A line becomes a boundary, a gradient becomes atmosphere, a repeated transition becomes rhythm, and a stimulus becomes significant because it participates in a wider pattern of relations.

Biological and artificial neural systems operate in this relational manner. They do not store "sky" as a fixed image. They learn configurations: color gradients, spatial orientation, edges, horizons, depth cues, atmospheric context, and repeated associations. In both cognition and machine learning, induction builds the relational field, while reasoning navigates it.

The difficulty is that these relational fields now exceed the scale of ordinary human intuition. Human perception evolved for low-dimensional sensory environments. Neural recordings and artificial intelligence systems, by contrast, operate in high-dimensional spaces where thousands of signals may change together. Their internal structures may be mathematically tractable while remaining perceptually inaccessible.

_Topology of Mind_ treats this gap as a design problem. Topological Data Analysis offers one strategy for translating high-dimensional relations into forms that can be seen, compared, and interpreted. In this project, topology is not only a visualization technique. It becomes an interface between machine-scale structure and human-scale comprehension.

## Data: Visual Experience as Neural Activity

The project uses the Allen Brain Observatory Visual Coding Neuropixels dataset, a large-scale record of neural activity from mice viewing controlled visual stimuli. The selected session is `779839471`, from mouse `760960653`. The analysis focuses on seven exported regions: VISp, VISl, VISam, VISpm, VISrl, CA1, and DG. These regions create a field that includes visual cortical areas as well as hippocampal structures associated with memory, transition, and contextual organization.

The working dataset contains 477 target units from the initial session selection. For the website export, the project prepares 135,275 source unit rows, 114,359 positioned and exported units, 284 probe tracks, and 170 stimulus conditions. The stimuli include drifting gratings, flashes, gabors, natural movie one, natural movie three, natural scenes, and static gratings. Spontaneous activity is excluded from the site-facing stimulus set so that the interface can focus on the relation between visual input and evoked neural structure.

![Dataset interface showing stimulus selection, brain anatomy, and neural signal traces](/img/2026/topologyofmind/Dataset%20Demo.gif)

<div style="display: grid; grid-template-columns: repeat(6, minmax(0, 1fr)); gap: 8px; align-items: start; margin: 1.25rem 0;">
  <figure style="margin: 0; display: flex; flex-direction: column;">
    <img src="/img/2026/topologyofmind/stimulus-drifting-grating.png" alt="Drifting grating stimulus" style="width: 100%; aspect-ratio: 1 / 1; object-fit: contain; display: block;">
    <figcaption style="font-size: 0.75rem; line-height: 1.2; min-height: 1.8rem; margin-top: 0.35rem; text-align: center;">Drift</figcaption>
  </figure>
  <figure style="margin: 0; display: flex; flex-direction: column;">
    <img src="/img/2026/topologyofmind/stimulus-flash.png" alt="Flash stimulus" style="width: 100%; aspect-ratio: 1 / 1; object-fit: contain; display: block;">
    <figcaption style="font-size: 0.75rem; line-height: 1.2; min-height: 1.8rem; margin-top: 0.35rem; text-align: center;">Flashes</figcaption>
  </figure>
  <figure style="margin: 0; display: flex; flex-direction: column;">
    <img src="/img/2026/topologyofmind/stimulus-gabor.png" alt="Gabor stimulus" style="width: 100%; aspect-ratio: 1 / 1; object-fit: contain; display: block;">
    <figcaption style="font-size: 0.75rem; line-height: 1.2; min-height: 1.8rem; margin-top: 0.35rem; text-align: center;">Gabors</figcaption>
  </figure>
  <figure style="margin: 0; display: flex; flex-direction: column;">
    <img src="/img/2026/topologyofmind/stimulus-natural-movie.png" alt="Natural movie frame stimulus" style="width: 100%; aspect-ratio: 1 / 1; object-fit: contain; display: block;">
    <figcaption style="font-size: 0.75rem; line-height: 1.2; min-height: 1.8rem; margin-top: 0.35rem; text-align: center;">Natural movie</figcaption>
  </figure>
  <figure style="margin: 0; display: flex; flex-direction: column;">
    <img src="/img/2026/topologyofmind/stimulus-natural-scene.png" alt="Natural scene stimulus" style="width: 100%; aspect-ratio: 1 / 1; object-fit: contain; display: block;">
    <figcaption style="font-size: 0.75rem; line-height: 1.2; min-height: 1.8rem; margin-top: 0.35rem; text-align: center;">Natural scene</figcaption>
  </figure>
  <figure style="margin: 0; display: flex; flex-direction: column;">
    <img src="/img/2026/topologyofmind/stimulus-static-grating.png" alt="Static grating stimulus" style="width: 100%; aspect-ratio: 1 / 1; object-fit: contain; display: block;">
    <figcaption style="font-size: 0.75rem; line-height: 1.2; min-height: 1.8rem; margin-top: 0.35rem; text-align: center;">Static grating</figcaption>
  </figure>
</div>

The dataset is not treated as a collection of images with labels. It is treated as a sequence of transformations: visual conditions produce patterns of spikes; spikes become population activity; population activity becomes a manifold; the manifold is tested for topological structure; that structure becomes a coordinate system that can be predicted, manipulated, and decoded.

## Process: From Spikes to Shape

![Topology workflow showing signal, state space, projection, Vietoris-Rips construction, and topological form](/img/2026/topologyofmind/Topology%20Demo.gif)

![VISp example showing PCA, UMAP, Vietoris-Rips neighborhood construction, and persistent homology](/img/2026/topologyofmind/visp-topology-process.png)

*A VISp example makes the passage from spikes to shape visible: the same regional population activity is projected as a PCA state space, reorganized through UMAP, connected as a Vietoris-Rips neighborhood graph, and read through persistent homology as a diagram of births and deaths.*

The processing pipeline begins with session selection and loading through the AllenSDK. Spike times are organized by brain region and aligned to stimulus presentations. These spike events are then binned into 50 ms windows, smoothed, and z-score normalized to form population activity matrices. At this point, the object of study is no longer a single neuron, but the changing state of a regional neural population.

Mathematically, the first transformation converts spike events into a population vector. For neuron <span class="tom-math-inline">$i$</span> in region <span class="tom-math-inline">$r$</span>, spike times <span class="tom-math-inline">$s_{i,k}$</span> are counted inside a time bin of width <span class="tom-math-inline">$\\Delta t = 50\\,\\mathrm{ms}$</span>:

<div class="tom-math-display">
\[
n_{r,i}(t)=\sum_k \mathbf{1}\left[t \leq s_{i,k} < t+\Delta t\right]
\]
</div>

Those counts are smoothed and normalized so that each time point becomes a comparable regional state vector:

<div class="tom-math-display">
\[
x_{r,i}(t)=\frac{(G_\sigma * n_{r,i})(t)-\mu_{r,i}}{\sigma_{r,i}},
\qquad
\mathbf{x}_r(t)=\left[x_{r,1}(t),\ldots,x_{r,N_r}(t)\right]
\]
</div>

Stacking these vectors through time produces the matrix analyzed downstream:

<div class="tom-math-display">
\[
X_r=\begin{bmatrix}
\mathbf{x}_r(t_1) \\
\mathbf{x}_r(t_2) \\
\vdots \\
\mathbf{x}_r(t_T)
\end{bmatrix}
\in \mathbb{R}^{T\times N_r}
\]
</div>

Dimensionality reduction then translates those population states into manifold spaces. PCA provides three-dimensional trajectories for visualization and higher-dimensional projections for topology; UMAP offers an additional view of neighborhood structure. These projections do not claim to show the brain directly. They make relational patterns in neural activity available to inspection.

The PCA projection is written as:

<div class="tom-math-display">
\[
\mathbf{z}_r(t)=W_{r,k}^{\mathsf{T}}\left(\mathbf{x}_r(t)-\bar{\mathbf{x}}_r\right),
\qquad
W_{r,k}=\arg\max_{W^{\mathsf{T}}W=I}\operatorname{Tr}\left(W^{\mathsf{T}}\Sigma_r W\right)
\]
</div>

Here <span class="tom-math-inline">$\\mathbf{z}_r(t)$</span> is not a picture of a brain state, but a lower-dimensional coordinate for the relation among many neurons at that moment.

Persistent homology is then used to ask what kinds of structures persist inside those manifolds. The analysis looks for connected components, loops, and higher-dimensional features, and it validates them through parameter sweeps, bootstrap stability, and null model comparisons. This matters because topology can easily become decorative if it is not tested. The project therefore treats topological form as something that must earn its interpretive force.

<p>For a projected point cloud <span class="tom-math-inline">$P_r=\{\mathbf{z}_r(t_j)\}_{j=1}^{T}$</span>, the Vietoris-Rips complex at scale <span class="tom-math-inline">$\epsilon$</span> is:</p>

<div class="tom-math-display">
\[
\operatorname{VR}_\epsilon(P_r)=
\left\{\sigma\subseteq P_r\;\middle|\;\lVert p_a-p_b\rVert_2\leq\epsilon
\;\text{for all}\;p_a,p_b\in\sigma\right\}
\]
</div>

As <span class="tom-math-inline">$\\epsilon$</span> grows, this creates a filtration of spaces. Persistent homology records when a topological feature is born and when it dies:

<div class="tom-math-display">
\[
D_q(P_r)=\left\{(b_j,d_j)\right\}_{j=1}^{m_q},
\qquad
\operatorname{pers}_j=d_j-b_j
\]
</div>

Long-lived features, such as stable <span class="tom-math-inline">$H_1$</span> loops, become candidates for meaningful relational structure rather than momentary noise.

After validation, each region receives a topology-specific coordinate policy. VISpm and VISrl are represented through circular coordinates derived from single dominant loops. CA1 is modeled through transition diffusion coordinates, reflecting a less stable, state-like geometry. DG is represented through density and diffusion coordinates. VISp, VISl, and VISam use principal component coordinates when their topology is better understood as local graph fragments than as a single clean loop. These policies are merged into a canonical table of topological coordinates, allowing each visual condition to be read as a position within a regional relational structure.

For loop-like regions, the coordinate is circular:

<div class="tom-math-display">
\[
\phi_r(t)=\operatorname{atan2}(z_{r,2}(t),z_{r,1}(t)),
\qquad
c_r(t)=\frac{\phi_r(t)\bmod 2\pi}{2\pi}
\]
</div>

The encoding model receives this circular variable as a continuous target:

<div class="tom-math-display">
\[
\mathbf{y}_r(t)=\left[\sin\phi_r(t),\cos\phi_r(t)\right]
\]
</div>

For regions better described by transitions or density, diffusion coordinates summarize neighborhood flow:

<div class="tom-math-display">
\[
K_{ij}=\exp\left(-\frac{\lVert \mathbf{z}_i-\mathbf{z}_j\rVert_2^2}{\alpha}\right),
\qquad
P=D^{-1}K,
\qquad
\mathbf{c}_{\mathrm{diff}}(i)=\left[\lambda_1\psi_1(i),\lambda_2\psi_2(i)\right]
\]
</div>

Across these policies, the project translates neural activity into a coordinate language: not an explanation of consciousness, but a structured surface on which visual experience can be compared, predicted, and eventually designed with.

## Encoding and Decoding

![Encoding interface showing image input translated into predicted regional topological coordinates](/img/2026/topologyofmind/Encoding%20Demo.gif)

![Latent diffusion reconstructions generated from coordinate-conditioned neural representations](/img/2026/topologyofmind/latent-diffusion-grid.png)

The predictive models ask whether this topological coordinate system can become operational. The encoding model translates image stimulus into neural coordinate. A frozen CNN-style visual encoder extracts image features, and region-specific heads predict the appropriate coordinate targets for each brain region. The target format changes with the topology of the region: sin and cos for circular coordinates, diffusion coordinates for unstable structures, and PC coordinates for regions whose usable geometry remains more fragmentary.

This is not presented as a final theory of perception. The validation metrics show a partial and uneven mapping. Visual cortical regions produce modest positive predictive structure, while less stable regions reveal the difficulty of compressing biological dynamics into controllable coordinates. That unevenness is important. It keeps the project from turning the brain into a simple input-output device.

The decoding model reverses the direction. Instead of predicting neural coordinates from images, it explores whether a coordinate vector can condition image reconstruction or generation. A conditional VAE and a latent diffusion prior become ways to ask what kind of visual field is implied by a point in topological neural space. The generated images are not the goal in themselves. They are evidence that the coordinate system can become a medium: a manipulable structure through which perception can be composed, varied, and returned as image.

![Conditional VAE reconstructions of natural scene stimuli](/img/2026/topologyofmind/conditional-vae-natural-scenes-grid.png)

## The Website as Interface

The website is the project's public-facing research artifact. It does not simply document the pipeline; it presents the pipeline as an interface.

On the home screen, _Topology of Mind_ is introduced as a mapping of visual experience into the hidden geometry of neural activity. The page foregrounds the scale of the data: seven regions, 222,537 visual rows, and 182,703 samples per region. The manifold selector lets the viewer move between PCA, UMAP, and topological coordinate fields, presenting the dataset as a set of navigable spatial hypotheses rather than a static chart.

The Dataset tab links stimulus conditions to brain anatomy and neural signal traces. It places natural scenes, gratings, and other controlled inputs beside regional units and probe positions, making the apparatus of measurement visible. The Topology tab turns the analysis into a visible transformation: signal, neural state space, PCA/UMAP, Vietoris-Rips construction, and topology. The user watches spikes become shape.

![Website decoding interface for selecting topological states and generating image output](/img/2026/topologyofmind/Decoding%20Demo.gif)

The Encoding tab tests the forward relation from image to coordinate. An uploaded image or webcam frame can be interpreted through the trained model, producing predicted coordinates for each region and highlighting their positions within the topology atlas. The Decoding tab moves in the reverse direction. It lets the viewer adjust region-specific coordinates and request an image implied by that configuration. Together, these tabs make the central question tangible: if experience can be placed in a coordinate system, what kinds of authorship become possible?

## Design After Induction

Design and art can be understood as practices that shape structures capable of eliciting emotional responses. Traditionally, designers develop this capacity through long cycles of exposure, intuition, feedback, and revision. This is an inductive process. In architecture, it is especially slow because feedback often arrives only after construction, occupation, and use.

<div style="display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 16px; align-items: start; margin: 1.25rem 0;">
  <figure style="margin: 0; display: flex; flex-direction: column;">
    <img src="/img/2026/topologyofmind/Post%20Occupancy%20Evaluation.png" alt="Conventional architectural feedback loop in which post-occupancy evaluation returns slowly to future projects" style="width: 100%; aspect-ratio: 16 / 10; object-fit: contain; display: block;">
    <figcaption style="font-size: 0.85rem; line-height: 1.25; min-height: 2.2rem; margin-top: 0.5rem; text-align: center;">Conventional post-occupancy feedback</figcaption>
  </figure>
  <figure style="margin: 0; display: flex; flex-direction: column;">
    <img src="/img/2026/topologyofmind/Evolved%20Design%20Process.png" alt="Evolved design process in which neural response modeling and live sensing can update design decisions continuously" style="width: 100%; aspect-ratio: 16 / 10; object-fit: contain; display: block;">
    <figcaption style="font-size: 0.85rem; line-height: 1.25; min-height: 2.2rem; margin-top: 0.5rem; text-align: center;">Evolved affective feedback loop</figcaption>
  </figure>
</div>

The contrast between these two diagrams marks the architectural stakes of the project. In a conventional design process, meaningful feedback often arrives late: after a building is commissioned, occupied, evaluated, and translated into lessons for future projects. The architect works with delayed evidence. Experience becomes knowledge only after a long interval of use, measurement, and institutional memory. _Topology of Mind_ asks whether another process can be imagined: one in which desired affective states, predicted neural coordinates, generative spatial proposals, and live post-occupancy sensing are placed in a more continuous loop. This is not presented as a completed workflow, but as a speculative process model opened by the experiment.

## Discussion: Limits and Open Proposal

The experiment does not prove that emotion can be computed from neural activity, nor that architecture can be deterministically generated from such a model. Its evidence is deliberately narrower. The data come from mice viewing visual stimuli, not from humans occupying architectural spaces or reporting emotional states. The analysis also works with selected brain regions rather than a complete account of perception, memory, body, environment, and affect.

The prediction results reflect this limit. Visual cortical regions show modest positive predictive structure, while CA1 and DG remain much weaker. In the encoding summary, CA1 has a mean Pearson correlation of approximately 0.13 and an R² near zero; DG has a mean Pearson correlation near zero and a negative R². This is consistent with their role in the project as region-specific, less stable structures rather than direct control variables for design. They are not evidence that a single neural coordinate can determine an emotional or spatial outcome.

For this reason, _Topology of Mind_ should be read less as a deterministic design engine than as an experiment in legibility. It tests whether visual experience, neural activity, topological structure, and generative modeling can be placed into relation, and whether those relations can suggest another design process. In that process, computational models do not replace intuition or authorship. They become instruments for asking what can be inferred, what remains ambiguous, and where the designer must continue to interpret, select, and question the translation between feeling, data, and form.

