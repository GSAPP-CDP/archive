---
layout: project
title: Spatial Resonance
author: Sebastian Schloesser
year: 2025
image: /img/2025/spatial_resonance/resonators-front.jpg
links:
  - text: Fall Colloquium Proposal
    url: /img/2025/spatial_resonance/poster.png
  - text: Download the App
    url: https://testflight.apple.com/join/cfVqfe6g
  - text: Portfolio
    url: https://sebs.gallery
---

# Provocation

## "Indeed, it [the cell phone] has taken over much of what used to be defined as the responsibility of shelter in terms of sense of security, space, orientation, and representation." [^1] Both at home and in public, we are often absorbed by our devices, dissociated from physical reality and algorithmically siloed off to our assigned echo chambers. How can we feel safer and more comfortable in the world, so as to not require constant shielding and distraction from it? How can we consume digital content together and avoid polarization? What role can the built environment play in the pursuit of these goals?

<iframe
    src="https://www.youtube.com/embed/3uu9KT1T774?si=0IIEud-UnVXOmwkH&amp;controls=0"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
    referrerpolicy="strict-origin-when-cross-origin"
    allowfullscreen
    style="aspect-ratio: 16 / 9; width: 100%;">
</iframe>

![Supercut emphasizing prominence of phone addiction as a theme in public discourse and product development]()

<br></br>
We can observe from Google Trends that people are concerned about their phone use, and likely find it problematic. Interest in terms such as "phone addiction" and "digital detox" are on a steady climb. It is interesting to note the dip in the former during the COVID pandemic and a sharp rise in the latter right thereafter.

<img src="/img/2025/spatial_resonance/google_trends.png" alt="Google Trends data showing interest in 'phone addiction' and 'digital detox' over time" style="border: 1px solid #ccc; padding: 10px;">



---
<br><br>

# Attempts at Addressing the Problem

![](/img/2025/spatial_resonance/attempts.png)


- Editorializing and awareness [^2]
- Prohibiting phone use in certain spaces
- Apps to track and limit phone use [^3]

---

<br><br>


# Spatial Resonance

## Let the built environment serve as an expansive, embodied interface to the digital world.

The technology to display information at a variety of sites is readily available: projectors, TVs, monitors, speakers… but pairing them to a person’s unique digital world can be a cumbersome process. The challenge here is securely providing these displays and interfaces access to a person’s information in a fully consensual way.

I propose the development of a system for such device pairing and information sharing. It will be employed by a mobile application that allows users to create a profile, as they would at a social media platform, and selectively expose data to authorized peripherals called Resonators. These peripherals will broadcast BLE iBeacon[^4] signals, alerting the application of their proximity and their capabilities, at which point the application can broker data exchange over cloud infrastructure. The peripherals are now able to activate context-aware experiences based on the people present.

![Resonator Family](/img/2025/spatial_resonance/family.png)

<iframe
    src="https://www.youtube.com/embed/-YOvgWOdf3Q?si=jsLYDcE5UDdsZgeU&amp;controls=0"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
    referrerpolicy="strict-origin-when-cross-origin"
    allowfullscreen
    style="aspect-ratio: 16 / 9; width: 100%;">
</iframe>

![Icebreaker Resonator in Action]()

<br></br>

## The App

The first step for the system to work is the app, which serves as sensor and initial information interface. The user goes through a typical social media onboarding experience, and is asked to give the necessary iOS permissions to detect iBeacons. **This Swift application is fully functional and available for download on Test Flight as a Beta.** Here you can see screen recordings run on an iPhone, detailing the functionality of the app, or you may download it and try for yourself [here](https://testflight.apple.com/join/cfVqfe6g).

<div style="display: flex; flex-direction: column; gap: 1rem; align-items: center;">

  ## Onboarding Flow

  <img src="/img/2025/spatial_resonance/onboarding.gif" alt="Onboarding Flow" style="width: 40%; border: 1px solid #ccc; border-radius: 4px;">
  <br></br>

  ## Filling out your profile with voice AI assistant
  
  <img src="/img/2025/spatial_resonance/profile.gif" alt="Filling out your profile with voice AI assistant" style="width: 40%; border: 1px solid #ccc; border-radius: 4px;">
  <br></br>

  ## Saving a web link to your media library

  <img src="/img/2025/spatial_resonance/app.gif" alt="Saving a web link to your media library" style="width: 40%; border: 1px solid #ccc; border-radius: 4px;">
  <br></br>
</div>



## Icebreaker

Once your profile is complete, you can approach Resonators in the wild and interact with them. The first one in the family is the Icebreaker. It breaks the ice or brings friends even closer by printing out a perfectly curated prompt for those present to start an engaging conversation.

Get small talk out of the way by going straight to the interesting topics! Make sure to fill out your profile with juicy details to make these prompts unforgettable.

![Icebreaker Rendering](/img/2025/spatial_resonance/ib.png)

When you approach the Icebreaker, your profile photo will be displayed with the projector on the bottom of its enclosure. This lets you know that you have been recognized and that the device is ready for interaction. This is achieved by a React web application connected to firebase, authenticated as a special user, which grants it access to the nearby information associated to it's beacon UUID. Then it fetches the user profile photo from Firebase and displays it as a dynamically floating bubble.

By pressing the button at the top, the prompt is produced via the thermal printer. This is achieved by a python backend service hosted on Heroku, authenticated as an admin to Firebase, which can fetch the profile information of users nearby and send to OpenAI's API for processing, with a system prompt I have perfected to obtain interesting conversation starters based on people's interests.

![Icebreaker Resonator](/img/2025/spatial_resonance/ib4.jpeg)

![Icebreaker Resonator](/img/2025/spatial_resonance/receipt.jpeg)

<br></br>

## Link Exchange

Once you have been introduced to the environment and how Spatial Resonance works, participants can engage in more interactive ways. Here is where Link Exchange comes in. It is a forum to tangibly share links and online content, things you would typically do on your phone, but this time you may do so spatially and IRL. As you approach, your library of Media will appear on the table. Use the buttons to put Media Cards up for trade with someone else. 

Links are globally unique, and retain their trade history. Make sure you snag all your favorite web links before someone else does!


![Link Exchange Rendering](/img/2025/spatial_resonance/lx.png)

![Link Exchange Resonator](/img/2025/spatial_resonance/lx2.jpeg)

The UI is a Rect web application projected onto the table. The table is equipped with a separate raspberry pi, detecting the arcade button presses, and interfacing with the receipt printer. This pi is authenticated and uses the python admin interface to communicate with the Firebase backend. Users can use the buttons to interact with the web app. Because some websites refuse to be iFramed, I use URLBox's API to produce snapshots of sites so that they can be visualized. Once the trade button is pressed, the links actually are changed to the other person's library (URLs are globally unique so they are not copied) and a receipt with the binary encoding of the transaction is printed as a memento. If users were to check the app on their phones, they would see the new link they have obtained. Each URL retains its history of owners and how many times it has been traded, which could be used in the future to produce a dashboard of popular links.

![Link Exchange Interface in Action](/img/2025/spatial_resonance/lxaction.gif)

---
<br><br>

# Computational Design Practice

This project is the culmination of my discovery and development of a computational design practice throughout the year.

## Speculation

I am interested in researching spatial, tangible, and collaborative interfaces, and wish to push this inquiry further by applying ideas and practices developed for communal living to a newly imagined communal digital space. In communal living, people have varying preferences of where their boundary of privacy lies, such as being comfortable sharing a kitchen, but not a bathroom. This work is speculative and participatory in nature, as it aims to expand the boundary of digital privacy people are comfortable with through a co-lived experience. The effects of such an experience might be restorative and lead to strengthened social connection[^5] and pave the way for people to more deeply engage with each other in public. [^6][^7]

Looking at existing work and references is a key part of the process. Dynamicland and Folk Computer were a big inspiration, both creating interactive environments leveraging tangible affordances. 

![Dynamicland Communal Computer](/img/2025/spatial_resonance/dynamicland.png)

Part of the speculative process is attempting to foresee what kinds of problematic dynamics creating a new system could enable. BLE Beacons have been used in the past to surveil shoppers in retail locations.[^8][^9] Spatial Resonance clearly explains how data is used and gives participants control. Resonators could be a vector of attack, so they are securely authenticated by Firebase with credentials, no public API's are used in this project. Due to the proximity requirement, users are held more accountable for their behavior, and something like a Zoom Bombing is less likely to occur.

<img src="/img/2025/spatial_resonance/opinion.png" alt="Google Trends data showing interest in 'phone addiction' and 'digital detox' over time" style="border: 1px solid #ccc; padding: 10px;">

![Kwet's Piece on Bluetooth Surveillance]()

<br></br>

## Function

At the core, this system is enabled by Bluetooth Low Energy beacon technology. iOS devices, such as iphones, have the ability to scan for them in the background. The app I created performs this search, and when it detects a Resonator nearby, it communicates with the Firebase backend, logging itself in that Resonator's nearby users' list. Then the Resonator is able to fetch information related to that user and use it for context aware interactions.

![System Diagram](/img/2025/spatial_resonance/System.png)

Spatial Resonance is comprised of several software and hardware components:

1. Swift iOS application
2. Icebreaker ESP32 microcontroller script and hardware connections
2. Icebreaker React Application on projector
3. Icebreaker python backend for OpenAi interaction
4. Link Exchange Raspberry Pi Script for hardware connections
5. Link Exchange React Application on projector
6. Firebase authentication, realtime DB, firestore, and storage services for backend functions


<br></br>

## Form

In order for the project to be successful, I also needed to make Resonators attractive and approachable. Inspired by the Calm Technology[^10] movement, I decided to use raw wood and projectors in order to achieve a softer, less abrasive information display. I also use paper and hardware buttons in order to create a tangible experience. The paper, in particular, has the added affordance of being a memento of the interaction, something you could keep and put in a scrapbook. In order to avoid boxiness, I explored wood bending techniques, using a CNC mill with a tapered bit, and using hot water. I went through many concept iterations in Rhino as well to determine the perfect form.

![Design Iterations](/img/2025/spatial_resonance/iterations-pen.png)

![Wood Bending Techniques](/img/2025/spatial_resonance/wood.png)

<br></br>

## Interaction

Because the focus of interface work is how interactions unfold, I started developing the system early and testing it through prototypes and proofs of concept. For example, I developed a lamp that communicates with the phone through this technology for Metatool. This gave me the confidence that the interaction was satisfying and had potential to be further explored.

<iframe
    src="https://www.youtube.com/embed/bS5pCx5V8x4?si=YC9hKQjjf8dp912u&amp;controls=0"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
    referrerpolicy="strict-origin-when-cross-origin"
    allowfullscreen
    style="aspect-ratio: 16 / 9; width: 100%;">
</iframe>

![Proof of Concept: Cellular Disturbance Lamp]()

This semester, I got to improving the app for an actual user experience and started testing onboarding early, as this was likely going to be the biggest bottleneck and friction of the whole experience. The first version of the Icebreaker was designed to accommodate the throw of a projector facing upward to display the profile pictures through fabric. In the end, I decided the results were not ideal, and flipped it around, to project the image on the wooden floor of the enclosure.

![First Icebreaker Form](/img/2025/spatial_resonance/proto2.jpeg)

Some of the first prompts produced by Icebreaker:

## "Sebastian and Badriyah, if you were tasked with designing a new form of interactive art that could only be experienced under the vast expanse of the night sky, what would you create and how would you invite others to engage with it?"

## "Hey Manas and Vaibhav, if you could design a movie in which the world of art and architecture comes alive and starts interacting with humans, what wild and whimsical story would you both dream up? 🎨🏛️📽️"

![First Icebreaker Prompts](/img/2025/spatial_resonance/proto.jpeg)

<br></br>

## Resonators in the Wild

My vision for this project is that people would download the app and fill out their profile in the comfort of their home, and then would encounter Resonators in public spaces, such as restaurants, bars, college campuses, etc. Members of the Spatial Resonance network users could then meet and interact in such spaces.

![Icebreaker in a Bar](/img/2025/spatial_resonance/atthebar.png)

![Link Exchange in a Coworking Center](/img/2025/spatial_resonance/laguna.png)


<br></br>


[^1]: Beatriz Colomina, Mark Wigley. _Are We Human? Notes on an Archaeology of Design_ Zürich, Switzerland: Lars Müller Publishers, 2016.
[^2]: Nick Bilton. _Disruptions: More Connected, Yet More Alone_ https://archive.nytimes.com/bits.blogs.nytimes.com/2013/09/01/disruptions-more-connected-yet-more-alone/
[^3]: _Clearspace_ https://www.getclearspace.com/
[^4]: Getting Started with iBeacon. (2014). Apple https://developer.apple.com/ibeacon/Getting-Started-with-iBeacon.pdf

[^5]: Cheong, Jin Hyun, Zainab Molani, Sushmita Sadhukha, and Luke J. Chang. "Synchronized Affect in Shared Experiences Strengthens Social Connection." _Communications Biology_ 6, no. 1 (October 28, 2023): 1099. https://doi.org/10.1038/s42003-023-05461-2
[^6]: Kearns, M., & Roth, A. (2020). The ethical algorithm: The science of socially aware algorithm design. Oxford University Press.
[^7]: Pouw, W. T. J. L., Van Gog, T., & Paas, F. (2014). An Embedded and Embodied Cognition Review of Instructional Manipulatives. Educational Psychology Review, 26(1), 51–72. https://doi.org/10.1007/s10648-014-9255-5

[^8]: Kwet, M. (2019, June 14). Opinion | In Stores, Secret Bluetooth Surveillance Tracks Your Every Move. The New York Times. https://www.nytimes.com/interactive/2019/06/14/opinion/bluetooth-wireless-tracking-privacy.html
[^9]: Schimanski, C.-E. (2018, March 6). Location Awareness in IoT with Beacon Technology. Medium. https://medium.com/@cayeric/location-awareness-in-iot-with-beacon-technology-2803f48a4e8c

[^10]: https://calmtech.com/


