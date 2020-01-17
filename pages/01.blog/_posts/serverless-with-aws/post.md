---
title: 'Serverless with AWS'
published: true
date: '2018-04-27 15:17'
publish_date: '2018-04-27 15:17'
metadata:
    keywords: 'AWS, serverless, Amazon Web Services, server, backend'
visible: true
author: 'Chris Loewer'
---

For my newest project, I had settled on an Angular front end, but I hadn't decided how I wanted to handle the server side of things.  I had finished a rough draft of a Node powered API using Express when a coworker recommended I look into Amazon Web Services.  Turns out AWS is fantastic.  It allows users to create a completely serverless solution.  Let's dig into what that means.

===

> AWS allows users to create a completely serverless solution

**But what is serverless architecture?**  Essentially this means there is not a dedicated server running all the time.  Users' code is saved as a function and run in a container that is only active when it is needed.  When the function is called, a container is set aside and the function is executed.  After the function is no longer needed, the container is freed up for other functions to use.  If the function is called again, another container will be set aside and the process is repeated.  The benefit is that it is incredibly cost effective since the user is only charged for when the function is in use.  In addition, they do not have to maintain any dedicated servers - this saves a huge amount of time and effort!

In my case, I have a Node function that queries a database and returns a JSON.  I created a AWS Lambda Function with a Node runtime environment.  Using Amazon's API Gateway (side-note: everything in their ecosystem plays nicely with each other and makes life easier) I set up an API endpoint that triggers this Lambda function.  When triggered, AWS provides a container, runs the function and returns the result.  As the user, the only maintenance I have to do is to declare what version of Node I want it to run on.

> Everything in the AWS ecosystem plays nicely with each other

Apart from Lambda, AWS provides a number of services that I use to make my life easier.  My current project is a CMS and is a prime use case for a document driven database.  I used DynamoDB and it was exactly as convenient as I hoped.  Their S3 buckets provided a cheap, reliable storage solution for my images.  As I mentioned previously, I used their API gateway to route url paths to Lambda functions.  This includes Authorizers, which call a Lambda function before allowing access to an API route.  This let me protect certain API routes while checking permissions in an easily reusable manner.

And to top it all off, once I had all this in place, there was little-to-no maintenance required.  I compare this to other projects I've done, and it seems that every time I log in to do something small, I spend a fair portion of time managing updates.  It's a pain, but AWS makes this a thing of the past.  In the span of a couple months, I have become a strong serverless advocate.  I have found AWS to be a better solution for almost all of my usages than manually maintaining a dedicated server.

I've seen the light, and I'm not turning back.