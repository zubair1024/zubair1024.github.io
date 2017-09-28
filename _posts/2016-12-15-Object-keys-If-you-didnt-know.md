---
layout: post
title:  "Object.keys – If you didn’t know"
date:   2016-12-15
banner_image: javascript.jpg
tags: [javascript]
---

I love JavaScript objects! Having said that I extensively use objects in my code since they keys provide another level of structure and information that gives flexibility making it invaluable. The usual way that we iterative over the properties and methods of an object was always with a for loop with a hasOwnProperty check (that is what I always did) which was a bit ugly and I, out of most people, hate it when my code gets messy or ugly.

<!--more-->

I recently stumbled upon Object.keys which provides an array of Object properties, which we can iterate over:

{% highlight javascript %}
var jedi= {
    firstName: 'Anakin',
    lastName: 'Skywalker',
    // ...
};
{% endhighlight %}

Now we use Object.keys:

{% highlight javascript %}
Object.keys(jedi).forEach(function(trait) {
  console.log('Jedi ', trait,': ', jedi[trait]);
});
{% endhighlight %}

If you (like me) love working with JSON or simply raw JavaScript objects, and you haven’t been using Objects.keys, now it is time to start using it!