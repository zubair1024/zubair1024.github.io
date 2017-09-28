---
layout: post
title:  "Quickie on ES6"
date:   2016-10-06
banner_image: javascript.jpg
tags: [tips and tricks, javascript, es6]
---

## A quick overview of the new functionalities that are being shipped with ES6

> There has been an inception of the 6th edition of the language and here is a quickie for the noobs

As you might already know that JavaScript is an implementation of the general purpose client-side scripting language specification called ECMAScript. There has been an inception of the 6th edition of the language and here is a quickie for the noobs, if you know it please move along:

<!--more-->
I have “cheery-picked” a few features to get yourself introduced to the new capabilities it provides a developer:

+ ```let```

The new standard introduces the new let keyword, which lets you declare and initialize variables in the scope of a block. A block can be a programmatic enclosure such as a statement, an expression or function.

{% highlight javascript %}
for ( let i = 0 ; i< 100; i ++) {
console.log (i);
}

if ( x != y) {
let i = x * y
}
{% endhighlight %}

Using the let keyword leads to cleaner, more scope controlled and usable code. The difference between let and var is in the scope, for example a local variable defined by the var keyword can be used in the entire enclosing function, while variables defined by let only work in their own block.

+ `const`

As you might expect from the sound of the keyword itself that it makes it possible to declare constants ( immutable variables).

{% highlight javascript %}
const powerful = 'vader';
powerful = 'maul'; //Slient error, cause darth vader is more powerful than darth maul, duh!
{% endhighlight %}

Though, constants cannot be considered to be fully immutable, because if the constant holds an object the properties and methods can still be altered

+ `=>`

This featues let us write anonymous functions in a better manner. Instead of writing the function keyword we can removed it with the =>. This automatically return the resolved value of the statement that comes right after.

{% highlight javascript %}
value = (a, b) => a + b;

//which is the same as
var value = function(a, b ) {
return a + b;
};
{% endhighlight %}

+ `…`

ES6 comes with a new operator called spread signified by `…`, which is generally a sign to place multiple expected items. A better way to understand it is by an example where you add or `spread` an array to include more elements.

{% highlight javascript %}
var Skywalkers = ['Anakin' , 'Padame' ];

Skywalkers = [...Skywalkers, 'Luke', 'Leia'];

console.log (Skywalkers);
// ["Anakin", "Padame", "Luke", "Leia"]

//I believe she is Luke's daughter
var possibleFamily = [...Skywalkers , 'Ray' ];

console.log (possibleFamily);
// ["Anakin", "Padame", "Luke", "Leia", "Ray"]
{% endhighlight %}

+ Default Parameter Value(s)

In ES6 we can add default values to parameters, which makes life much easier, especially if you’re writing more graceful and defensive code.

{% highlight javascript %}
var order66 = function (a = 'Emperor' , b = 'Palpatine' ) {
return a + b;
}

console.log ( order66() );

//Sidious was in fact Palpatine
console.log ( order66('Darth','Sidious' ) );
{% endhighlight %}

+ Rest Parameters

The rest parameters come in handy when you do not know how many arguments will be passed in a function.

{% highlight javascript %}
function sum(... args) {

var result = 0 ;
for(let i = 0 ; i < args .legth; i++){
result += args[ i];
}

return result ;
}

let value = sum(1 ,2, 3,5 );
{% endhighlight %}

+ for…. of

If you’ve know loops such as for..each, this will make sense. When we use the for…of statement, the code inside the block is executed for each element of the iterable object.

{% highlight javascript %}
var Skywalkers = ["Anakin" , "Padame" , "Luke" , "Leia" ];

for ( let i of Skywalkers) {
console.log (i)
}
{% endhighlight %}

+ Template Literals

Template literals allow us to easily create strings out of templates which can embed different content.

{% highlight javascript %}
var truth = { first : 'Emperor' , last: 'Palpatine' , actualfirst: 'Darth', actuallast: 'Sidious' };

var template = `Obi-Wan was right ! ${ truth.first } ${ truth.last } is actually ${truth. actualfirst} $ {truth. actuallast}!` ;

console.log (template);
//Obi-Wan was right! Emperor Palpatine is actually Darth Sidious!
{% endhighlight %}

+ Classes

Well, classes in ES6 are built on top of the prototypical inheritance concept. It makes more sense for javascript noobs and people coming from class-based languages.

{% highlight javascript %}
class Darth {
//class constructor
constructor(name) {
this.first = 'Darth' ;
this.last = name;
}

getName(){
console .log( 'I am'+ this.first +' '+ this.last );
}
}
{% endhighlight %}

+ Module

I guess this has to be one of the best features of ES6. Just like what you have done with AMD using RequireJS before, now ES6 comes with modules as native features. The idea here is to define each module in its own file, then use to “export” it out to other files, and accordingly “import” them from other files.

{% highlight javascript %}
//otherController.js

function callName (a) {
return 'He is ' +a;
}

function callRealName (a) {
if(a =='Palpatine'){
return 'He is Sidious' ;
}else{
return 'He is not Sidious' ;
}
}

export { callName, callRealName}

//mainController.js

import { callName, callRealName } from 'otherController' ;

console.log (callName('Anakin'));
console.log (callName('Palpatine'));
{% endhighlight %}

I guess that was good enough to get started.

Here is a good documentation for most of the features if you would like to dwell into ES6 further

Plus, here is a compatibility chart, which I believe is really import to keep a track on to know exactly when is the “future”.