/*
In object-oriented and functional programming, an immutable object (unchangeable object) is an object whose state cannot be modified after it is created. This is in contrast to a mutable object (changeable object), which can be modified after it is created. In some cases, an object is considered immutable even if some internally used attributes change, but the object's state appears unchanging from an external point of view. For example, an object that uses memoization to cache the results of expensive computations could still be considered an immutable object.

Strings and other concrete objects are typically expressed as immutable objects to improve readability and runtime efficiency in object-oriented programming. Immutable objects are also useful because they are inherently thread-safe.Other benefits are that they are simpler to understand and reason about and offer higher security than mutable objects. https://en.wikipedia.org/wiki/Immutable_object
*/

/*
# Immutability

This is an exercise to practice with assignment and value immutability.

## Instructions

1. Define `pickNumber(..)` so that it's a pure function. It should the list of lottery numbers and a new lottery number (randomly generated using `lotteryNum()`) to add to the list.

2. `pickNumber(..)` should always keep the list of lottery numbers sorted in ascending order. Also, no duplicates!

3. Hint: Array's `sort()` (with no argument) does not do numeric sorting but alphanumeric sorting. You'll need to pass a custom compartor function to get true numeric sorting.

## Bonus

Instead of a read-only array (via `Object.freeze(..)`), use Immutable.js's `List` data structure to manage the additions to `luckyLotteryNumbers`.
*/

function lotteryNum() {
  return (Math.round(Math.random() * 100) % 58) + 1;
}

function pickNumber(num, numbers) {
  numbers = numbers.slice();
  return numbers;
}

var luckyLotteryNumbers = [];
const NUM_COUNT = 6;

while (luckyLotteryNumbers.length < NUM_COUNT) {
  luckyLotteryNumbers = pickNumber(
    lotteryNum(),
    Object.freeze(luckyLotteryNumbers)
  );
}

console.log(luckyLotteryNumbers);
