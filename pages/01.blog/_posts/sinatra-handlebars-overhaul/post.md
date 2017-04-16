---
title: 'A Sinatra Handlebars Overhaul'
published: true
date: '14-10-2015 21:55'
metadata:
    keywords: 'ruby, cms, sinatra, handlebars, blog'
author: 'Chris Loewer'
---

Static pages are a poor design choice for blogs for a number of reasons. There are simply better ways. I decided to explore some of these options as I revamped this blog’s infrastructure. I settled on using Sinatra as my framework, Handlebars for templating, and SQLite to store the content.

===

> Using Sinatra as my framework, Handlebars for templating, and SQLite to store the content

First off: Sinatra. Sinatra is fabulous and and quickly becoming my go-to when throwing together a web application. For those that are unfamiliar, it is a ruby based framework running off of a Rack web server interface.

But why use Sinatra over Rails? Sinatra is lightweight to the extreme, making it an ideal candidate for small scale applications and APIs. It is NOT a full mvc, but its flexibility makes it a valuable option when all of the benefits (and bloat) of Rails are not needed. Plus I find its minimalism refreshing.

> Sinatra is lightweight to the extreme

Handlebars was my first real excursion into the realm of HTML templating. I had used erb to some extent due to the ease it blends with Sinatra, but I didn’t love the syntactic structure. While researching alternatives, I came across HAML, but I have a hard time loving whitespace sensitive languages *cough* python *cough*. I did however love the Handlebars/Mustache structure which lets me do exactly what I want, dropping in data straight from JSON.

While I’m happy with my results for this project, there are obvious weaknesses. The foremost problem is SEO. While I love of the convenience and speed of my precompiled Handlebars templates, these templates are still inserted with javascript asynchronously. This means when a search engine attempts to index my blog, none of the post content is there, leaving the search engine thinking it found a rather useless page.

> The foremost problem is SEO

There are ways around this issue by compiling and combining pages on the server before shipping them to the client. The other issue is that Handlebars still feels clunky in combination with a ruby based stack. Both of these problems could be alleviated by switching to node and developing this project as an isomorphic js app. I’m not convinced to board that hype-train yet, but I will most likely experiment with it once my Sinatra fixation wears off.

I used git to deploy, and as always this is available on my github.