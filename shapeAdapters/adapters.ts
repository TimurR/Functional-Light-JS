/*
  Intuitively, partial function application says "if you fix the first arguments of the function, you get a function of the remaining arguments". For example, if function div(x,y) = x/y, then div with the parameter x fixed at 1 is another function: div1(y) = div(1,y) = 1/y. This is the same as the function inv that returns the multiplicative inverse of its argument, defined by inv(y) = 1/y.

  The practical motivation for partial application is that very often the functions obtained by supplying some but not all of the arguments to a function are useful; for example, many languages have a function or operator similar to plus_one. Partial application makes it easy to define these functions, for example by creating a function that represents the addition operator with 1 bound as its first argument. https://en.wikipedia.org/wiki/Partial_application
*/
/*
  In mathematics and computer science, a higher-order function (HOF) is a function that does at least one of the following:

    # takes one or more functions as arguments (i.e. a procedural parameter, which is a parameter of a procedure that is itself a procedure),
    # returns a function as its result.

    https://en.wikipedia.org/wiki/Higher-order_function
*/

function unary(fn) {
  return function one(...arg) {
    return fn(arg[0]);
  };
}

function binary(fn) {
  return function two(...arg) {
    return fn(arg[0], arg[1]);
  };
}

function reverseArgs(fn) {
  return function reversed(...args) {
    return fn(...args.reverse());
  };
}

function spreadArgs(fn) {
  return function spread(...args) {
    return fn(args.reduce((acc, curr) => acc + curr, 0));
  };
}

function f(...args) {
  return args;
}

const g = unary(f);
const h = binary(f);
const r = reverseArgs(f);
const s = spreadArgs(f);

console.log(g(1, 2, 3, 4));
console.log(h(1, 2, 3, 4));
console.log(r(1, 2, 3, 4));
console.log(s(1, 2, 3, 4));
