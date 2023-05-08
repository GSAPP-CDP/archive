# Computational Design Practices Project Archive

This respository hosts the source code and site content for the [Computational Design Practices](https://www.arch.columbia.edu/programs/15-m-s-computational-design-practices) project archive.

This site is built with the static site generator [Eleventy](https://www.11ty.dev/docs/).
Site content is written in [Markdown](https://www.markdownguide.org/) and rendered with additional
support for [footnotes](https://github.com/markdown-it/markdown-it-footnote) and
[implicit figures](https://github.com/arve0/markdown-it-implicit-figures).

## Development

```
npm install
npx @11ty/eleventy --serve
```

Browse to [http://localhost:8080/](http://localhost:8080/) (port 8080 is default but it will switch
to a new port if that one is taken, so use whatever port shows up when you run the `--serve` command).


## Directory Structure

Site content files can be found in the following locations:

```
projects/
├── project-1.md
├── project-2.md
├── project-3.md
├── project-4.md
└── *.md
public/
└── img/
    ├── image-1.jpg
    └── image-2.png
about.md
index.md
```

All content files are [Markdown](https://www.markdownguide.org/) files with the `.md` extension.
[Eleventy](https://www.11ty.dev/docs/) template files are [Liquid](https://liquidjs.com/) templates
with the `.html` extension in the `/_includes/` directory. All other site assets are located in the
`/public/` directory and are copied to the root of the output folder on site build. The output folder
is `/_site.`, but this is a temporary build artifact that is not checked into source control.

## Example Project

A new project can be added by creating a new Markdown file in the `/projects/` directory with the `.md` extension.

Projects should have the following [YAML](https://yaml.org/) frontmatter:

```yaml
---
layout: project
title: "Example Project: My Subtitle"
author: Seth Thompson
year: 2023
image: /img/diomede-islands.jpg #optional
---
```

If the project title contains a colon or other special character, it should be enclosed in quotes in order to form
valid YAML.

The project thumbnail image should be located in the `/public/img/` directory. Since the public folder is copied to
the root of the output folder on site build, the image path should start with `/img/` rather than `/public/img/`.

## Markdown Features

All site content files can contain [standard Markdown syntax](https://www.markdownguide.org/basic-syntax/).
The default Markdown parser for Eleventy is [markdown-it](https://github.com/markdown-it/markdown-it).

### Footnotes

Site content can additionally include footnotes:

```md
Fusce et sapien rhoncus, tristique nisi ultrices, dictum tellus[^1].

[^1]: Example footnote content.
```

For more information, see the [markdown-it-footnote](https://github.com/markdown-it/markdown-it-footnote) plugin.

### Implicit Figures & Captions

All block-level images in markdown are converted to figures & figure captions:

```md
![This is my image caption.](/img/image-1.jpg)

<!--- <figure><img src="/img/image-1.jpg"><figcaption>This is my image caption.</figcaption></figure> -->
```

For more information, see the [markdown-it-implicit-figures](https://github.com/arve0/markdown-it-implicit-figures) plugin.

### Videos

Youtube, Vimeo, and HTML5 videos are supported via Markdown's built-in HTML support.

```html
<!--- YouTube -->
<iframe
  src="https://www.youtube.com/embed/laiVuCmEjlg"
  frameborder="0"
  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; web-share"
  allowfullscreen
  style="aspect-ratio: 16 / 9; width: 100%;">
</iframe>

<!--- Vimeo -->
<iframe
  src="https://player.vimeo.com/video/158673446?h=30e98ac368&title=0&byline=0&portrait=0"
  frameborder="0"
  allow="autoplay; fullscreen; picture-in-picture"
  allowfullscreen
  style="aspect-ratio: 16 / 9; width: 100%;">
</iframe>

<!--- HTML5 video -->
<video
  src="/img/earth.mp4"
  controls
  style="aspect-ratio: 16 / 9; width: 100%;">
</video>
```

Note that each element has a `style` attribute that sets the aspect ratio and the width to 100%. This allows videos
to be responsive and fill the width of the container.

Most videos will have an aspect ratio of 16:9, but this can be changed by modifying the `style` attribute.

HTML5 video files should be added to the the `/public/img/` directory and referenced with the `src` attribute.

## Deployment

This repository is automatically deployed to GitHub Pages whenever a new commit is pushed to the `main` branch, using
a GitHub workflow, located at `.github/workflows/deploy.yml`.