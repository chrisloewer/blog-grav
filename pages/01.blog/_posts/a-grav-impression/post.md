---
title: 'A Grav Impression'
published: true
date: '2017-05-09 21:01'
metadata:
    keywords: 'Grav, Blog, CMS, User Experience'
author: 'Chris Loewer'
---

This blog was my first project in Grav, and provides what may be the ideal use-case.  As a blog, it is a simple, content driven application.  The layout is straightforward with a clearly defined flow:  simply set the content and it will be rendered.  There is little to no interaction requiring user input.  The admin panel is gorgeously designed, covers most of the basic needs of site management and is a delight to navigate.

===

That said, I find myself looking for more advanced tools.  The admin panel is (purposefully) limited to avoid clutter, but as a result I find myself avoiding it in lieu of more powerful alternatives.  I'm comfortable working via vim in a remote terminal, but my workflow has evolved to developing locally and using git to deploy.  While I love that I have this option, it is not realistic for non-technical clients.

> I find myself wishing for more advanced tools

As with practically any CMS, Grav consists of different layouts and compononents that can be filled with content and arranged in a number of ways.  This is both a blessing and a curse.  On the one hand, it is fabulous to be able to write a component to be reused and maintained from a single file.  On the other hand, anything that the user will define content for needs to be abstracted out into a separate layout.  This gets immensely irritating as I find myself ending up with a number of single-use layouts that really did not need to be separated out.

While working on a recent website, I ran into this exact issue.  I have a flex-box driven layout with three main sections: an intro blurb, a left column, a right column. In order to keep this layout, each section has to be defined as a non-routable sub-page.  This turned a simple About Us page into a set of three sub-pages.  While Grav handles subpages beautifully, this process added additional overhead that I find irritating.  However, I may need to accept this as the cost of using a flexible CMS.

![Three Part Layout](layout.jpg?resize=268,300)

Quite simply, if I were working on a project solely for myself, I would write everything in static HTML and have complete control over every line of code without abstracting it out.  However, this is not practical for a project I want to market to a client.  They need the option to have control of their own content.  This is where Grav is a good fit.  Once a layout is defined, it is relatively simple to add and maintain content.

> Once a layout is defined, it is relatively simple to add and maintain content

My main goal in switching to a more defined CMS was to provide clients with a way to feel as if they are in control of their own website.  Despite the shortcomings of the Admin Panel, and the impression I get that Grav was designed for developers, I believe I will be able to continue to use this CMS to provide non-technical clients a way to manage their own content.