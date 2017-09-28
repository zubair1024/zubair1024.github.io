---
layout: post
title:  "GET query string parameters – Cheat"
date:   2016-12-14
banner_image: javascript.jpg
tags: [javascript]
---

> A utility function to get the value of any query string parameter

We all know that the query string parameters are available for us through window.location (JavaScript Window Location Object). But query string usually turns up as a string and has to be parsed to get the necessary attribute out. There is an easy way through a utility function given below, this can be included in any web deployment:

<!--more-->

{% highlight javascript %}
function getParameterByName(name, url) {
if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\"\\ "\\$&"amp;"amp;");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}
// Usage for query string: ?sith=vader
var foo = getParameterByName('sith'); // "vader"
{% endhighlight %}

Enjoy!