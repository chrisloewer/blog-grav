---
title: 'CSS Methodology and BEM'
published: true
date: '2018-05-07 16:08'
publish_date: '2018-05-07 16:08'
visible: true
author: 'Chris Loewer'
---

My projects, both at work and at home, have recently reached the point where there are too many styles to handle without some sort of system in place.  I've dabbled with various ways of structuring my stylesheets in the past, but have never firmly adopted any single methodology.  After much research, twitter threads, and several trial runs, I settled on BEM and am in the process of a grand restructure.

===

Previously, I have followed what I have referred to as the common sense naming convention.  I figured if I picked descriptive class names, and nested my classes appropriately, I would have maintainable stylesheets.  This worked for me on smaller projects, but as my projects grew, it became more and more difficult to stay on top of all the places I had overridden my styles.  Nested classes were difficult to track down, so I ended up with super specific overrides.  Reused class names meant different things when applied to different elements and were dependant on their parent elements.  On top of that, it became frustrating to find where in the world I defined that stupid class.

> My markup and styles quickly became an unstructured mess and I saw the need for a change

Overall my markup and styles quickly became an unstructured mess and I saw the need for a change.  BEM was my answer.  There are a thousand guides teaching you how to implement BEM in your project, so I won't go into detail, but the gist is to group everything by block, element, and modifier.  This, while admittedly more verbose, enforces some much needed structure.

The basis of BEM is that each Block is completely independent of it's parent.  Its nested Elements can only exist within that Block and include the Block name (block-name__element-name).  Modifiers can be applied, but also include the name of the Block/Element (block-name--modifier).  By following, it is easy to tell at a glance what purpose a class serves, and what Block it applies to.

> The basis of BEM is that each Block is completely independent of it's parent

This can get a little complicated when dealing with nested elements.  One should never apply multiple levels of nesting (block\__element\__element).  The whole purpose of BEM is to avoid this issue.  Again, there are many guides on how to deal with this issue so I won't go into depth, but it was one of the frustrations I encountered when converting the projects I am working on.

My goal in converting to BEM is two-fold.  One, it is always a good idea to follow a proven methodology.  People far smarter than I have spent far more time and have come up with a solution that is used all over the world - they must have done something right.  Two, I would like to leave my code in a maintainable state using standard methodologies.  I want anyone who know what they are doing to be able to jump onboard and be able to see what is going on without an intimate knowledge of the project.

Converting to BEM should help me accomplish both of these goals and leave my code in a maintable state.