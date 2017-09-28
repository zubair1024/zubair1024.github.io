---
layout: post
title:  "Sticky Footer"
date:   2016-10-06
banner_image: css1.png
tags: [tips and tricks, css, stylesheet]
---

When a footer is placed at the end of the body, we usually tend to have an issue with it when there isn’t much content in the body. This leaves room for alot of whitepace below the footer.
The quickest way to resolve this issue is through the use of flexbox, which is an advanced CSS3 tool for building adaptive layouts.

<!--more-->

Let’s create a simple layout:

{% highlight html %}
<body>
    <header>Hello World</header>
    <section class="main-content">The quick brown fox jumps over the lazy dog</section>
    <footer>Bye World</footer>
</body>
{% endhighlight %}

To enable flex mode we add `display:flex` to the body and the flex direction as columns for horizontal layout.

{% highlight css %}
html{
    height: 100%;
}

body{
    display: flex;
    flex-direction: column;
    height: 100%;
}
{% endhighlight %}

Now, the next step is to adjust how much space each section/part will take. This is done through flex properties:

{% highlight css %}
    flex-grow
    flex-shrink
    flex-basis
{% endhighlight %}

The “flex-grow” property defines how much of the available free space in the container goes to an element. Then “flex-shrink” property decides on how much an element will shrink when there isn’t enough space for everything. Finally, the “flex-basis” property sets the default size of an element.

{% highlight css %}
header{
    /* We want the header to have a static height,
    it will always take up just as much space as it needs. */
    /* 0 flex-grow, 0 flex-shrink, auto flex-basis */
    flex: 0 0 auto;
}

.main-content{
    /* By setting flex-grow to 1, the main content will take up
    all of the remaining space on the page.
    The other elements have flex-grow: 0 and won't contest the free space. */
    /* 1 flex-grow, 0 flex-shrink, auto flex-basis */
    flex: 1 0 auto;
}

footer{
    /* Like the header, the footer will have a static height - it shouldn't grow or shrink. */
    /* 0 flex-grow, 0 flex-shrink, auto flex-basis */
    flex: 0 0 auto;
}
{% endhighlight %}

I believe that is quite straight forward way of implementing sticky footer using CSS3.