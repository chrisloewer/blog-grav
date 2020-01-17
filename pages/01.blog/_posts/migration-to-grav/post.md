---
title: 'Migration to Grav'
published: true
date: '2017-04-13 16:24'
metadata:
    keywords: 'blog, grav, cms, minimalism'
visible: true
author: 'Chris Loewer'
---

While I enjoyed the process of creating my own minimalist blog platform with Ruby, it quickly became apparent that it was impractical to maintain in its current state.  Specifically, I did not have an editor to add new posts.  Instead I had to create my posts in a text editor and manually add them to my database.  My options where to either improve my custom CMS, or to adapt an existing solution to my needs.

===

> My options where to either improve my custom CMS, or to adapt an existing solution to my needs.
 
This was an internal debate that went back and forth for months in my mind.  On the one hand, I love the idea of a custom solution.  Here I can have a product that fits my needs exactly, since I would be the one designing it.  On the other hand, it feels like re-inventing the wheel.  Why spend weeks of development trying to create a tool that already exists?  Plus, there is a huge community of developers creating high quality plugins for these Content Management Systems.  It would be nice to easily use these resources.

During my decision-making process, I tried several CMS solutions.  [Respond CMS](https://respondcms.com/) was appealing for its ultra-minimalist approach.  However, I ran into a number of issues that indicated problems I would encounter later.  There were constant console errors and a general lack of quality documentation.  There was also not as much of a community as I would hope for an open-source project.  Next, I tried [Grav](https://getgrav.org/).  I was thoroughly impressed with both the looks and the documentation.

> It was Grav that made me want to give a pre-built CMS a try.

It was Grav that made me want to give a pre-built CMS a try.  Not only was there active development going on and a brilliant knowledge base, the entire project is open-source.  This would let me make any custom adjustments I might need in the future.  There is also a plethora of plugins available if I ever need any.

This blog is now running completely off Grav, and so far, I'm a big fan.  It was not too much effort to create a theme to match the styling of my old blog, and Twig templates are incredibly powerful.  In fact, I have created this post completely through the admin panel.  I'm not sure if I will continue to use Grav, but I'm thoroughly enjoying it so far.