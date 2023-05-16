# Javascript

Adding <script> element into the <head> is the most used implementation of javascript.

`<script src="my-js-file.js" defer></script>`

The 'defer' attribute will tell the script to wait until the HTML is fullo loaded. This is very common.

Adding a <script> element within <body> -- preferrably before the </body> closing tag will have the same effect that the CSS file which defines changes to the content visible on the page.

`<script src="scripts/main.js"></script>`

Everything defined in the .js file above is going to impact on the content within the page.

I accidentally pasted the above line to the <header> and the script didn't have any effect on the page.

it's good practice to have semicolons at the end of each statement.

## Variables

There are 2 ways to assign values to variables.

One using `let myVariable = 108;`

The other `myVariable = 108;`

## Comments

Single line goes like this:

// some random comment

Multilines:

/*
And here a bunch of things.
You. Can. Write.
*/

## Operators

The typical and trivial ones:

+ - * / =

The nontrivial, specific to JS:

=== strictly equal

!= does not equal / is different than

## Conditional

No news.

`if` and `else`

## Functions

Have a name and arguments. Just like any formula in Excel. 

`functionName(argumentA, argumentB, ...);`

## Events

Here is where the fun begins. Events are code structures that listen to activity in the browser and run code in response.

Here is an example.

`document.querySelector("html").addEventListener("click", function () {
  alert("Ouch! Stop poking me!");
});`

It is interesting to note the syntax of addEventLister. It looks like a function, but it isn't. It uses an anonymous function as an argument in order to execute the `alert`, as the name of the function doesn't really matter in the context of the event, as long as it runs as expected.

`alert` is a properly built function placed inside the anonymous function.

 






























