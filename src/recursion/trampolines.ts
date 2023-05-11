import { isVowel } from "./properTailCalls";
/*
    As used in some Lisp implementations, a trampoline is a loop that iteratively invokes thunk-returning functions (continuation-passing style). A single trampoline suffices to express all control transfers of a program; a program so expressed is trampolined, or in trampolined style; converting a program to trampolined style is trampolining. Programmers can use trampolined functions to implement tail-recursive function calls in stack-oriented programming languages.

    Continuation-passing style is a popular intermediate format for compilers of functional languages, because many control flow constructs can be elegantly expressed and tail call optimization is easy. When compiling to a language without optimized tail calls, one can avoid stack growth via a technique called trampolining. The idea is to not make the final continuation call inside the function, but to exit and to return the continuation to a trampoline. That trampoline is simply a loop that invokes the returned continuations. Hence, there are no nested function calls and the stack won’t grow.
    https://en.wikipedia.org/wiki/Trampoline_(computing)
*/

function trampoline(fn) {
  return (...args) => {
    let result = fn(...args);

    while (typeof result === "function") {
      result = result();
    }

    return result;
  };
}

const countVowels = trampoline((str: string, count: number = 0) => {
  count += isVowel(str[0]) ? 1 : 0;
  if (str.length <= 1) return count;
  return () => countVowels(str.slice(1), count);
});

console.log(
  "countVowels with trampoline",
  countVowels("The quick brown fox jumps over the lazy dog")
);
