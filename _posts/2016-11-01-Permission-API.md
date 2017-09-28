---
layout: post
title:  "Permission API"
date:   2016-11-01
banner_image: javascript.jpg
tags: [tips and tricks, javascript]
---

The browser by itself packs alot of powerful API functionalities. But most of the time these APIs that are provided can leak sensitive user information to the public. Think about geolocation, audio/video access (get camera access) etc and you’ll get an idea of the insecurities that it packs. Hence, there have been initiatives to make the use of these APIs more secure (I recently faced a problem at my company when chrome decided to deprecate the use of “Powerful Features” on insure origins). But most of the time the user has to prompted to gain access to these APIs. Actually, it seems to be not so.

<!--more-->

Permission API provides a method to query the permission level for an API without triggering a request to the user for access. The simple example given below illustrates the mechanism:

{% highlight javascript %}
// Get the geolocation status (starts out as "prompt")
// ... meaning the user will be shown an access request if we want it
navigator.permissions.query({ name: 'geolocation' }).then(function(result) {
    /* result.status = "prompt" */
});

// Request geolocation access if we really want it
navigator.geolocation.getCurrentPosition(function(result) { /* ... */ })

// Assuming the user requested access, the permission is now "granted"
navigator.permissions.query({ name: 'geolocation' }).then(function(result) {
    /* result.status = "granted" */
});

// Push notifications require options:
navigator.permissions.query({ name: 'push', userVisibleOnly:true }).then(function(result) { /* ... */ });
{% endhighlight %}

Well, this allows us to check if the permission level is negative, if so we don’t ask the user permission to do something. We can also prompt the user in a less obstructive ways if needed.