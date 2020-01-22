---
title: 'Up and Running with Grav'
media_order: 'theme-select.png,grav-install.png'
published: true
date: '2020-01-21 21:36'
publish_date: '2020-01-21 21:36'
metadata:
    keywords: 'GRAV, CMS, tutorial, guide'
visible: true
author: 'Chris Loewer'
---

As I've previously shared, Grav has been my CMS of choice. It's an open-source project that packs a massive number of features into an incredibly light-weight package. In response to a recent request, I'm putting together a quick tutorial on how to get up and running with Grav.

===

As a helpful side note, the official [Grav Documentation](https://learn.getgrav.org/) is excellent if you get stuck at any point during this guide.

First things first, we need to install Grav. Installation is straightforward but there are a few prerequisites. We'll need a webserver running at least PHP 7.1.3 with composer and command line access. I host a droplet on Digital Ocean, but practically any web server will work. Log in and navigate to the directory where you want to set up your site. To install Grav, clone the repo into your directory.

<pre><code>git clone https://github.com/getgrav/grav.git</code></pre>

Go into the folder that was just created and run a composer install. When this completes, we will have access to the Grav cli tool. We can use this newly available tool to install the Grav specific dependencies.

<pre><code>cd grav
composer install --no-dev -o
bin/grav install
</code></pre>

At this point we can check if the installation was successful. In your browser, go to the URL your server is pointing at and you should see something like below.

![success](grav-install.png?resize=500,415)

Grav does not ship with any sort of gui out of the box because it is entirely usable from the command line. That said, it is a much easier experience if you install the admin-panel plugin. This can be done through the Grav package manager:

<pre><code>bin/gpm install admin</code></pre>

At this point, Grav + admin panel has been installed but there is no content, so it isn't particularly helpful to us. Let's change that. Content is stored in markdown files referred to as pages. It is important to note that the pages themselves should be thought of as content only - they do not drastically impact the layout or styling. That is controlled by the theme. This content lives in the user/pages folder.

If we look in that user folder, we will see a number of other sub-directories. These are where any customizations we make will live. Aside from the pages, the folder we will spend the most time in is the themes folder. The theme controls the layout and styling of the page.

> Pages control the content. Themes control the layout and styling.

Grav comes with a basic theme to help you get started and there are plenty of examples other Grav themes out there, including [the one I use to power this blog](https://github.com/chrisloewer/blog-grav). Look at one of the folders of the existing themes and we will see a folder called templates. For those of us coming here with backgrounds in JS frameworks, we can sort of think of templates as components. There are partial templates that are reusable and almost empty templates that are used for organizing layouts. You'll notice on my theme, I have a template for each post as well as a template for the home page that displays all the posts and a little blurb about each of them.

Templates are powered by a template engine called Twig. This is a powerful tool that lets us use variables and simple logic to control what is displayed. For example, on my home page I have a for loop that loops through all of the posts in my 'blog collection' and displays the title, author, and a blurb about the post. This reduces the amount of markup to a tiny file, even though it is populating an entire page. When I create a new page, I choose the template I want to populate, as pictured below.

![Pages can choose from the templates in the selected theme](theme-select.png?resize=320,157)

The theme I created for this site is simple, but it provides a good example of how to set up reusable templates. If you look at the files in the templates folder you will see how variables from the page object can be used to populate the template. You will also see that there is a separate styles folder for my css. With only these simple tools, it is possible to create a sophisticated site.

This brief guide is intended to present a starting point for how to get up and running with Grav. It is not intended to show everything that can be done. For more resources, check out the [Grav Documentation](https://learn.getgrav.org/). If you have any questions, feel free to reach out on twitter @loewermeup.




