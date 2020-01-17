---
title: 'Brintic - A Custom CMS'
published: true
date: '2018-05-25 16:25'
publish_date: '2018-05-25 16:25'
metadata:
    Keywords: 'Brintic, CMS, Wordpress, Grav, AWS, Angular, Content Management System'
author: 'Chris Loewer'
---

It's finally here!  I'm excited to announce the soft launch of my latest project: [Brintic](https://brintic.com).  Brintic is a content management system designed to make maintaining a website's content as easy as possible.  It has a serverless architecture powered by AWS and an Angular front end.

===

In the past, I have created websites for a number of clients.  One of the more common requests was for a way for them to update their website themselves without needing to contact me.  This is a reasonable requirement - a site owner should always be able to update their site.  To address this I would set up a CMS (typically Wordpress or Grav) for them to use.  The problem arose when they felt overwhelmed with all of the options presented to them - the tools were too powerful for the less tech-savvy.  When attempting simple changes, they would occasionally completely mess up their website.  This is the problem that Brintic sets out to solve.

> The goal of Brintic is to provide an ultra simple way to update a website's content

The goal of Brintic is this:  to provide an ultra simple way for a user to update their website's content.  It accomplishes this goal by separating the layout from the content.  Unlike other CMSs,  Brintic does not allow the user to change the layout from the admin panel.  This limitation is intentional to prevent user error.  Instead, the site will have pre-selected sections which can be edited by the user.

The general workflow is a user logs in, and clicks on the page they want to edit.  They are presented with a two column layout.  One column has all of the sections that they can edit.  The other is a live preview of what the page looks like.  As the make changes to the first column, the preview will update in real time.  When they are happy with their changes, they can click "Save" and the website is updated.  It's a pain-free process and they get to see exactly what their changes will look like before they save them.  This lowers the chance of user error.

![live preview](https://s3-us-west-2.amazonaws.com/brintic/1526153748.gif)

> Users get to see exactly what their changes will look like before they save them

There are still some ongoing tweaks being made to the project, but the [flagship site](https://brintic.com) is live!  See it in action on the [Demo Page](https://brintic.com/demo).