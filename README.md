[![build status](https://secure.travis-ci.org/beatak/TypeCast.png)](http://travis-ci.org/beatak/TypeCast)
TypeCast.js
===========

JavaScript is weakly typed.  It handles the type very generously, but sometimes you want to make sure each variable's type without hassle.  TypeCast will help you cast the type as you think.

Example:
--------

In the following examples, I assume you use TypeCast via npm.

    var cast = require('TypeCast');

    // for boolean casting
    // certain string is converted to what it represents.
    // such as: "false", "undefined' and "null"
    console.log( Boolean('false') === false ); // returns false
    console.log( cast.boolean('false') === false ); // returns true

    // for number casting
    // default raddix is 10.
    console.log( Number('010') ); // returns 8, since heading 0 makes it octat
    console.log( cast.number('010') ); // returns 10. default raddix is 10

    // and never returns NaN.
    console.log( Number('foo') ); // returns NaN
    console.log( Number(undefined) ); // returns NaN
    console.log( cast.number('foo') ); // returns 0
    console.log( cast.number(undefined) ); // returns 0

Next line, this is a browser case:

    // for string casting
    // when you cast an object, it calls valueOf() first to see if it returns string.
    console.log( String(document.createTextNode('foo')) ); // returns "[object Text]"
    console.log( cast.number(document.createTextNode('foo')) ); // returns "foo"

