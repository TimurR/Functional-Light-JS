/*
 * Tacit programming, also called point-free style, is a programming paradigm in which function definitions do not identify the arguments (or "points") on which they operate. Instead the definitions merely compose other functions, among which are combinators that manipulate the arguments. Tacit programming is of theoretical interest, because the strict use of composition results in programs that are well adapted for equational reasoning.[1] It is also the natural style of certain programming languages, including APL and its derivatives,[2] and concatenative languages such as Forth. The lack of argument naming gives point-free style a reputation of being unnecessarily obscure, hence the epithet "pointless style".[1] 
 https://en.wikipedia.org/wiki/Tacit_programming
 */

/**
  * The kind of reasoning we will performing about our programs is called equational reasoning. In other words, we will be proving that one expression is equal to another. For example, we might want to prove that for any list l, l == reverse (reverse l)
  https://www.cs.princeton.edu/~dpw/courses/cos326-12/notes/reasoning.php
  */

//https://ramdajs.com/docs/#complement

export function not(fn) {
  return function negated(...args) {
    return !fn(...args);
  };
}

function isOdd(v) {
  return v % 2 === 1;
}

const isEven = not(isOdd);

console.log(isEven(6));
