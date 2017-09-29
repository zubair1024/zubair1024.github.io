---
layout: post
title:  "Quick Introduction to Hapi"
date:   2016-12-12
banner_image: hapi.jpg
tags: [tips and tricks, javascript, node]
---

Just a disclaimer before we start, I have worked with Express and will definitely not say it is a better framework but just a different one. Hapi.js is a web framework for rapidly building web applications, REST API and services.

> Hapi was created around the idea that configuration is better than code, that business logic must be isolated from the transport later. – <cite>Erin Hammer</cite>



Since, it is quite similar to Express, let us compare the syntax between Express and Hapi for some common functionality that the frameworks will be used to implement.

<!--more-->

#### Express:

{% highlight javascript %}
var express = require('express');
var app = express();

var server = app.listen(3000, function() {
    console.log('Express is listening to http://localhost:3000');
});
{% endhighlight %}

We require express and then instantiate it by assigning it to the variable app. Then instantiate a server to listen to a port, port 3000. The app.listen() is actually just a wrapper around node’s http.createServer().

#### Hapi:

{% highlight javascript %}
var Hapi = require('hapi');
var server = new Hapi.Server(3000);

server.start(function() {
    console.log('Hapi is listening to http://localhost:3000');
});
{% endhighlight %}

hapi is required but instead of instantiating a hapi app, you create a new Server and specify the port. In Express we get a callback function but in Hapi we get a new server object. Then once we call server.start() we start the server on port 3000 which then returns a callback.

Now since the web server is created, let us create a few routes that can be served by the http server.

Express:

{% highlight javascript %}
var express = require('express');
var app = express();

//When GET request has been made through http://localhost:3000/
app.get('/', function(req, res) {
    res.send('Hello world');
});

var server = app.listen(3000, function() {
    console.log('Express is listening to http://localhost:3000');
});
{% endhighlight %}

We are using the get() method to catch the incoming request of “GET /” and then invoke a callback function that handles two parameters req and res. The following are some of the more commonly used methods that are supported by Express (but not all of the methods): get, post, put, head, delete etc.

Hapi:

{% highlight javascript %}
var Hapi = require('hapi');
var server = new Hapi.Server(3000);

server.route({
    method: 'GET',
    path: '/',
    handler: function(request, reply) {
        reply('Hello world');
    }
});

server.start(function() {
    console.log('Hapi is listening to http://localhost:3000');
});
{% endhighlight %}

First impressions of the routes in Hapi are how clean and readable they are compaired to the other frameworks. Even the required options method, path, handler, and replay for the routes are easy to the eye.

I believe this is enough introduction to get you guys started. “Hapi” Coding!