---
layout: project
title: Materialfolio
author: Junling Zhuang
year: 2023
image: img/junling/Collquium.jpg
---

How Social Media shapes the Built Environment

——Can we create a tool that narrows down the gap between social media and the built environment

### **Research Process**

#### Social Media as GIS

Online social networking sites are increasingly location-based.
Social media are increasingly location-based. Social media, led by MySpace, Facebook, Twitter, LinkedIn, and so on, have been described as one of the defining characteristics of Web 2.0 technologies. This offers new opportunities and perspective to study the relationship between the urban physical environments and location-based social media networks

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
