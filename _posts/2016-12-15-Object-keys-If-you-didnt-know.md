---
layout: post
title:  "Node.js 8: util.promisify()"
date:   2017-09-29
banner_image: node.png
tags: [node]
---

Node.js 8 has a new utility function: util.promisify(). It converts a callback-based function to a Promise-based one. Since we are on this topic I would like to highlight one of the most straight forward explanation for promises that I have come across by [Jecelyn Yeen](https://scotch.io/@jecelyn)

> Imagine you are a kid. Your mom promises you that she'll get you a new phone next week. You don't know if you will get that phone until next week. Your mom can either really buy you a brand new phone, or stand you up and withhold the phone if she is not happy :(. <cite>Jecelyn Yeen</cite>

##### So now, what does util.promisify do?

In a very abstract way, it does the following:

> Takes a function following the common Node.js callback style, i.e. taking a `(err, value) => ...` callback as the last argument, and returns a version that returns promises.

<!--more-->

and

> `promisify(original)` assumes that original is a function taking a callback as its final argument in all cases, and the returned function will result in undefined behaviour if it does not.

If you haven't got it already, it basically, a utility function that takes a regular function and converts it to a function that returns a `promise`.

It has the following syntax:

const wait = (delay, callback) => { /* … */ };

1. The last parameter of the function passed to `promisify` must be a callback
2. The callback must follow Node's callback style


##### Lets see it in action!


{% highlight javascript %}
const {promisify} = require('util');

const fs = require('fs');
const readFileAsync = promisify(fs.readFile); // (A)

//some path
const filePath = process.argv[2];

readFileAsync(filePath, {encoding: 'utf8'})
  .then((text) => {
      console.log('CONTENT:', text);
  })
  .catch((err) => {
      console.log('ERROR:', err);
});
{% endhighlight %}

 us implement the same using `asnyc` function:

{% highlight javascript %}
const {promisify} = require('util');

const fs = require('fs');
const readFileAsync = promisify(fs.readFile);

const filePath = process.argv[2];

async function main() {
    try {
        const text = await readFileAsync(filePath, {encoding: 'utf8'});
        console.log('CONTENT:', text);
    }
    catch (err) {
        console.log('ERROR:', err);
    }
}
main();
{% endhighlight %}

There are a few changes and qwirks you should adher to before implementing promisify, they are:

###### Promisifying functions whose callbacks have more than two parameters

he callbacks of the following functions receive more than one result value (in addition to the error value):

{% highlight javascript %}
child_process.exec
child_process.execFile
dns.lookup
dns.lookupService
fs.read
fs.write
{% endhighlight %}

If you promisify one of these functions, it returns an object of values (not a single value). For example, the callback of dns.lookup() has the following callback parameters:

* err : Error
* address : string
* family : integer

{% highlight javascript %}
const util = require('util');
const dns = require('dns');
const lookupAsync = util.promisify(dns.lookup);

lookupAsync('nodejs.org')
    .then(obj => console.log(obj));
    // { address: '104.20.23.46', family: 4 }
{% endhighlight %}

###### A polyfill for older versions of Node.js

There is a polyfill avaliable to take care of the older version of node servers you'll be running your application on. It can be installed via npm in the following manner:

{% highlight javascript %}
npm install util.promisify
{% endhighlight %}

Now you can patch module utl on older versions of Node

{% highlight javascript %}
const util = require('util');
require('util.promisify').shim();

const fs = require('fs');
const readFileAsync = util.promisify(fs.readFile);
{% endhighlight %}










