---
title: 'That Time I Broke Everything'
published: true
date: '2015-09-13 21:42'
metadata:
    keywords: 'home theater, HTPC, KODI, rpi, raspberry pi, static electrity'
author: 'Chris Loewer'
---

And learned a valuable lesson about static electricity.

Turns out that static and motherboards are an unhealthy combination. So this is the story of how I completely ruined one of my more promising projects. This is the story of the life and death of CraigBox, my onestop media box.

===

My tale begins with my old laptop. It was clearly on its last legs and could hardly handle something as basic as a simple Skype call without complaint. Here was where I had the brilliant idea of converting it into a home theatre PC (HTPC) and using it to stream all of our media to our television. Finally our days of manually connecting a laptop to the TV like a filthy casual would be behind us.

> I had the brilliant idea of converting it into a home theatre PC

Looking back, I had great dreams for the CraigBox. Not only would this control our media and stream my much coveted Premier League matches, it would also become the central server for all of my networking projects. Alas it was not to be.

I decided to do what any sensible computer scientist would do when trying to stretch the life of a pc with an overheating problem; I pulled out all the components and installed Linux. I measured all of the parts and constructed a new wooden case with improved airflow. I even wired up some extra case fans that were lying around from a previous project. Finally I had my hardware set up, and everything worked fabulously.

> I pulled out all the components and installed Linux

The flavor of Linux I used was Elementary OS, a lightweight distro reminiscent of OS X. I used Kodi (formerly XBMC) to handle the media. Unfortunately, the all of the remote control apps available for Kodi looked absolutely terrible, so I decided to create my own. It was fairly simple android app sending UDP packets to a Java program running on the CraigBox. A huge benefit of this was since the remote was something I created myself and not tied to Kodi, I could use it to control other applications as well.

So at this point I had a well-cooled box containing the guts of my laptop running a media center fully navigable from my custom app. What a time to be alive.

Only one problem remained: the birchwood case stood out like a sore thumb next to our other primarily black devices. My solution to this was to take everything out of the case and stain the wood. After a separate and rather messy endeavor in staining I finally had it: one beautiful wooden case.

On to the final step! Unfortunately when I was putting everything back together I forgot to ground myself, brushed against something important, caused a spark, and ended up with one thoroughly dead motherboard. As soon as I saw the spark I knew. Welp, there goes a week's worth of work.

> I forgot to ground myself ... and ended up with one thoroughly dead motherboard

It's fascinating how clearly I entered the 5 stages of grief over something of such relatively trivial importance. There were several minutes of silent denial. Surely I couldn't have made such a stupid mistake! Then anger. WHY! Then bargaining with the powers that be. Then depression. What sort of computer guy am I if I can't even perform a simple task. I'm hopeless. Then acceptance. I suppose it's almost a rite of passage to fry a motherboard. I'm just glad it wasn't anything more important.

This is a story of a time I failed. Despite the ending, I do not consider it a week of wasted effort. I was able to finally apply much of what I had learned in my classes in addition to what I found through the all-knowing Google in a practical way. And next time (there will be a next time!), I will succeed.

CraigBox 2.0 will rise.