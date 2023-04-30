/*

Abstraction, in general, is a fundamental concept in computer science and software development. The process of abstraction can also be referred to as modeling and is closely related to the concepts of theory and design. Models can also be considered types of abstractions per their generalization of aspects of reality.

Abstraction in computer science is closely related to abstraction in mathematics due to their common focus on building abstractions as objects, but is also related to other notions of abstraction used in other fields such as art. https://en.wikipedia.org/wiki/Abstraction_(computer_science)

*/

/*

In computer science, function composition is an act or mechanism to combine simple functions to build more complicated ones. Like the usual composition of functions in mathematics, the result of each function is passed as the argument of the next, and the result of the last one is the result of the whole. https://en.wikipedia.org/wiki/Function_composition_(computer_science)

*/

/*

A collection pipeline lays out a sequence of operations that pass a collection of items between them. Each operation takes a collection as an input and emits another collection (except the last operation, which may be a terminal that emits a single value). The individual operations are simple, but you can create complex behavior by stringing together the various operations, much as you might plug pipes together in the physical world, hence the pipeline metaphor. https://martinfowler.com/articles/collection-pipeline/#DefiningCollectionPipeline

*/

/* 

# Composition

This is an exercise to practice composition.

## Instructions

1. Define a `compose(..)` that takes any number of functions (as individual arguments) and composes them right-to-left.

2. Define a `pipe(..)` that takes any number of functions (as individual arguments) and composes them left-to-right.

*/

const increment = (x) => x + 1;

const decrement = (x) => x - 1;

const double = (x) => x * 2;

const half = (x) => x / 2;

const compose =
  (...arg) =>
  (val) =>
    [...arg].reverse().reduce((acc, fn) => fn(acc), val);

const pipe =
  (...arg) =>
  (val) =>
    arg.reduce((acc, fn) => fn(acc), val);

const f1 = compose(increment, decrement);
const f2 = pipe(decrement, increment);
const f3 = compose(decrement, double, increment, half);
const f4 = pipe(half, increment, double, decrement);
const f5 = compose(increment);
const f6 = pipe(increment);

console.log(f1(3) === 3);
console.log(f1(3) === f2(3));
console.log(f3(3) === 4);
console.log(f3(3) === f4(3));
console.log(f5(3) === 4);
console.log(f5(3) === f6(3));
