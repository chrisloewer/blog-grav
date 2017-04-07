---
title: 'My Switch to Droplets'
author: 'Chris Loewer'
---

I finally had enough of the hellish ordeal that is shared server space and made the swap to a Digital Ocean droplet. For those unfamiliar with droplets, they are cloud based virtual machines. Basically it’s a linux machine that you can do whatever you want with. They are simply phenomenal.

===

> Droplets are cloud based virtual machines

I looked at alternatives to DO, and while Vultr offers better specs for the same price, I was won over by DO’s brilliant documentation, uptime guarantee, and vastly superior web sense of web design. I’m only slightly ashamed of how much their choice of fonts affected my decision.

The setup is a bit of an annoyance since the default installations come with almost nothing other than ssh access, but since you have root access you can install whatever you need. This is vastly better than the alternative and I’m still salty from having to cross-compile every single thing that I want to add to my previous shared server space.

> You have root access

I wanted to experiment with something other than apache so I installed nginx. From there it was fairly straightforward to redirect nameservers and the like. The only real difficulty was setting up subdomains correctly since I had to do that manually in the nginx configuration files - something I had never messed with before.

I was suddenly grateful for the linux knowledge I have spent time accruing recently. Droplets have shown me the light, and I can never look back.