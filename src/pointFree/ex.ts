import { not } from './index';
/*
# Point-Free

This is an exercise to practice point-free style.

## Instructions

1. Refactor the `output(..)`, `printIf(..)`, and `isLongEnough(..)` functions to use point-free style.

2. Hints:
	- Some browsers require `console.log(..)` to run against the `console` context , so `f = console.log; f(..)` fails (because of lost `this` binding).

	Use `.bind(..)` to be safe.

	- `printIf(..)` can be expressed in terms of a `when(..)` that looks like:

	```js
	function when(fn) {
		return function(predicate){
			return function(...args){
				if (predicate(...args)) {
					return fn(...args);
				}
			};
		};
	}
	```

	- `isLongEnough(..)` is the negation of `isShortEnough(..)`.

*/

// function output(txt) {
//   console.log(txt);
// }

// function printIf(shouldPrintIt) {
//   return function (msg) {
//     if (shouldPrintIt(msg)) {
//       output(msg);
//     }
//   };
// }

// function isLongEnough(str) {
//   return !isShortEnough(str);
// }

function when(fn) {
  return function (predicate) {
    return function (...args) {
      if (predicate(...args)) {
        return fn(...args);
      }
    };
  };
}

function isShortEnough(str) {
  return str.length <= 5;
}

const output = console.log;
const printIf = when(output);
const isLongEnough = not(isShortEnough);

var msg1 = 'Hello';
var msg2 = msg1 + ' World';

printIf(isShortEnough)(msg1); // Hello
printIf(isShortEnough)(msg2);
printIf(isLongEnough)(msg1);
printIf(isLongEnough)(msg2); // Hello World
