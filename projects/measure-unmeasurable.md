---
layout: project
title: Materialfolio
author: Junling Zhuang
year: 2023
image: img/junling/Materialfolio.jpg
links:
  - text: Project Website
    url: https://www.junling-design.com/materialfolio
  - text: Video
    url: https://vimeo.com/824803627?share=copy
---

Materialfolio
![Materialfolio](/img/junling/Materialfolio.jpg)

——A New Muti-dimensional Crowdsourcing Platform to Build Material Archive

### **Project Description**

Kevin Lynch's 1960 book "The Image of the City" is considered a classic of urban image theory, but the scientific rigor of the theory of urban form is controversial. Marshall (2012) argues that Lynch's theory has not been significantly tested, and much subsequent research has simply taken Lynch's claims for granted. However, the emergence of computer vision-related deep learning algorithms is changing this situation. The Perceptions concept model proposed by Reid Ewing and Susan Handy (2009) established a connection between objective environmental elements and subjective urban experiences, laying the foundation for a machine-readable perceptual model.

Based on algorithms and using street view as a dataset, algorithm-based research on urban perception challenges the objectivity of priori-based urban image theory and has gradually become the mainstream of research. However, the emergence of digital technology poses both a threat and an opportunity to urban image research. Machines have become "agents" in the field of urban perception research, and Google Street View has become the darling of urban perception research.

Unfortunately, the uneven distribution of Google Street View, insufficient data for disadvantaged communities, lack of real-time data, and commercial interests have led to data set unfairness. This can result in potential uncertainty and unfairness in research based on these data sets in the long run. To address these issues, this project aims to establish a user-friendly and user-incentivized program for collecting data and visualizing it, supplementing the shortcomings of the Google Street View dataset by crowdsourcing street views. Additionally, by taking important architectural materials in urban perception as a clue, the project will provide real-time updates for more image modalities in urban image research.

### **Part one: Urban Peception Development**

#### Kevin Lynch:urban image theory

![Kevin Lynch - The Image of the City](/img/junling/Collquium2.jpg)

#### The Perceptions concept model (2009)

![Perceptions concept model by Reid Ewing & Susan Handy 2009](/img/junling/Collquium3.jpg)

#### Machine as Perception Agent

![Urban Perception Methodology Development](/img/junling/Collquium3.jpg)

Online social networking sites are increasingly location-based.
Social media are increasingly location-based. Social media, led by MySpace, Facebook, Twitter, LinkedIn, and so on, have been described as one of the defining characteristics of Web 2.0 technologies. This offers new opportunities and perspective to study the relationship between the urban physical environments and location-based social media networks

### **Part Two: Part Two: The limitations of the Google Street View as Urban perception dataset**

#### News from CNN

![Google Street view dataset maldistribution in Lake Providence ](/img/junling/Collquium8.jpg)

John D. Sutter is a columnist for CNN Opinion. There is a Lake Providence, which is an oxbow lake that separates a predominantly wealthy neighborhood from a mostly impoverished one. After the article was published, a reader pointed out to me that, at the time, it was impossible to search the poorer side of Lake Providence using Google Street View.

#### The worldwide distribution of google Street View

![The worldwide distribution Map of google Street View ](/img/junling/Collquium9.jpg)

- Inadequate data coverage

In some remote areas and developing countries, GIS data coverage and updates may be relatively low. This is due to the relatively low level of infrastructure and information technology in these areas and the high cost of data collection and updating. In addition, the relatively low commercial value and user demand in these areas may lead to bias in resource allocation by data providers.

- Insufficient data for disadvantaged communities

Some disadvantaged communities (e.g., low-income, minorities, etc.) may be underrepresented in GIS. This is because the geographic location, living environment, and cultural characteristics of these communities may differ from those of the mainstream society, leading to difficulties in data collection and analysis. In addition, the political status and economic power of these communities are weak, which may affect their rights and interests in the GIS.

- Limitations of data time and location

Street view images are usually taken at specific times and locations, and these images may not fully reflect the overall characteristics of a city. In addition, the frequency of updating streetscape images may also affect the accuracy of the study results.

- Acquisition angle and occlusions limitation

Even in areas where street view data is abundant, some urban features may be difficult to capture in their entirety due to limitations such as acquisition angles, occlusions or lighting conditions.

#### Location-based social media has changed

##### How citizens use urban space

![useUrbanSpace](/img/junling/useUrbanSpace.png)
_“Food culture today is spread as much by visuals as it is by word of mouth or written reviews,” —David Sax_

This article illustrates the phenomenon of how food images exposed on social media have increased customer traffic to restaurants, thus changing the environment of the restaurant<br><br>

##### How architects design buildings

![archiUseSM](/img/junling/archiUseSM.png)
Social media posts have challenged, inspired, and guided contemporary architecture practices. Other than having their buildings stand as illustrious backdrops for photographs, the use of geotagging and hashtags have helped architects develop a more thorough site and post-occupancy analysis. UNStudio, for instance, is now looking at occupants’ Instagram posts to analyze how they are appropriating the space, which are oftentimes different to what they had initially expected. According to the architects at OMA/AMO, the more the building is able to engage its visitors, in a program beyond what it was meant for, the more successful the building is.

##### How decision makers plan cities

![planCityTSM](/img/junling/planCityTSM.png)
For example, researchers leveraged social data to understand land use in three major metropolitan cities — London, Manhattan, and Madrid. Based on the aggregated tweets and check-ins, they were able to categorize land used for different activities such as business, residential, daytime leisure, nightlife, and so on.

#### Gain more insight of Built Environment through Social Media Lens

It is a common idea that buildings and spaces we live and work in influence our feelings and behaviors. when we consider the current research, thinking, and the development of the field of architecture, it’s clear he was onto something. Buildings and the urban environment have been found to affect our general mood and wellbeing. Our social media behavior is influenced and stimulated by the environment, psychology and situation. We are likely to publish an instagram because of a beautiful street scene. I believe that the built environment affects people's digital twin behavior to a certain extent

Social media community-related practices can have in modifying how citizens experience their cities as local places and relational entities. These effects also influence the perception of the built environment and the way people transform the built environment.

#### The risk of social media misinformation

Information on social media greatly influences people's judgment of urban space. We are easily attracted by a well-designed Instagram post, so as to explore the urban space where the picture is located.

Maybe the non-native population pieced together a picture of the entire city from fragmented information on social media.

As digital public spaces host more of our public lives, a wave of scholars and commentators are raising concerns about these spaces’ effects on us as individuals and as a polis. Veterans of the tech industry warn us that these spaces are addictive and manipulate our emotions for the benefit of platforms and advertisers. Social scientists worry that interactions on these platforms may be increasing political polarization and spreading misinformation and disinformation,  potentially damaging our ability to operate a functioning democracy. News providers warn us that by shifting advertising dollars from journalism to social networks, we risk losing critical oversight of government, businesses, and all other institutions.

### Methodology Development

#### Geo- based DataSet

Street view Image - Build environment side
I use Google Static API to get street view images with location and time information,
Flickr Image and data - Social media side
Flickr API to collect outdoor images with location and time information. The next step of processing will use these data.

#### DataSet Process

##### Visualize Social Media Data

I use data around CU are for testing the methodology, not the data I will use in the final study, these are Flickr data I collected in the past two years.Then I transformed this  map into a heat map according to the density. From heat map, we can figure out that the density of data varies greatly, and I call the areas with high data density as hotspots are  and those with low density as non-hotspots.

##### Grasp Google Street view image

Then I used QGIS to set street points every 100m in the test area, and overlap the hotspots and non-hotspots on them to get the locations of street points near the hotspots and non-hotspots.Then I used google static API to get the street view near these two kinds of  areas. And for reasonable analysis, I set the angle and heading parameter of the street to get better street view.

##### Comparsion

In order to compare the difference between the influence of social media on street view changes in hotspots and non-hotspots, I need to download the historical street view images corresponding to each street view point

Then I put them on the timeline,  to analyze the similarity between each two images to evaluate the ratio of street view changes. When all the similarities are analyzed, we can have a hypothesis that if social media data contributed to the streetview change, then the value of street view similarity near the hotspot should be lower,I wrote the code and  downloaded the historical images.

##### Computer Vision process

After we have the history of Street Views, But how we evaluate  similarity ratio , I analyze the similarity from two aspects: machine perception and human perception. For machine perception, SSIM I think is very suitable for street views  comparison, because it can minimize the impact of image scaling, rotation, and cropping , because each time the historical street points will have a little offset in position, and it also can contrast the brightness and structure very well.

MSE is often discussed together with SSIM, which is the opposite of SSIM in that it can evaluate pixel differences but has no other characteristics.

As for human perception, here is an important theory to establish a link between street view elements and human feelings, so all we need to do is to provide the elements, So I will first use image segmentation techniques, It was able to analyze the ratio of various elements in the street view, which is a general study of my study area

Assuming that all the street  images of the past years have been obtained and processed accordingly, we can easily obtain the proportional changes of various street view elements in the past for each location , which is also a rate of change. Similarly, we can use the object recognition algorithm to get the change of the history street elements number.

<!-- <iframe
  src="https://vimeo.com/824803627?share=copy"
  frameborder="0"
  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; web-share"
  allowfullscreen
  style="aspect-ratio: 16 / 9; width: 100%;">
</iframe> -->

<div style="padding:57.65% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/824803627?h=f7dadb878e&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Materialfolio-Junling Zhuang"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>

[^1]: Johna Hjerpe, “Fantastic Perspective,” _Serving Library_ #12 (2017).
[^2]: Caitlin Jones, “The function of the studio (when the studio is a laptop),” Art Lies 67 (2010).
[^3]: ann haeyoung, “How to work within power structures that don't work for you,” _The Creative Independent_ (2019).
[^4]: WBYA?, _Who Builds Your Architecture? A Critical Field Guide_ (2017).
[^5]: Jason Alderman, Tega Brain, Taeyoon Choi, Luisa Pereira, “A Field Guide to Debugging,” p5.js (2015).
[^6]: Keller Easterling, “A losing game: harnessing failure,” _The Architectural Review_ 1458 (2019).
