/*
Tail call

In computer science, a tail call is a subroutine call performed as the final action of a procedure. If the target of a tail is the same subroutine, the subroutine is said to be tail recursive, which is a special case of direct recursion. Tail recursion (or tail-end recursion) is particularly useful, and is often easy to optimize in implementations.

Tail calls can be implemented without adding a new stack frame to the call stack. Most of the frame of the current procedure is no longer needed, and can be replaced by the frame of the tail call, modified as appropriate (similar to overlay for processes, but for function calls). The program can then jump to the called subroutine. Producing such code instead of a standard call sequence is called tail-call elimination or tail-call optimization. Tail-call elimination allows procedure calls in tail position to be implemented as efficiently as goto statements, thus allowing efficient structured programming. In the words of Guy L. Steele, "in general, procedure calls may be usefully thought of as GOTO statements which also pass parameters, and can be uniformly coded as [machine code] JUMP instructions." 
https://en.wikipedia.org/wiki/Tail_call
*/
/*
For better or worse, it looks like automatic tail call elimination is a de-facto dead feature in JavaScript, and TypeScript is not going to revive it for us. 
Apr 2022.
https://stackoverflow.com/questions/71909776/how-can-i-get-typescript-to-perform-tail-recursion-optimization
*/

export function isVowel(chr: string) {
  return ["a", "e", "i", "o", "u"].includes(chr);
}

function countVowelsNotPTC(str: string): number {
  const first = isVowel(str[0]) ? 1 : 0;
  if (str.length <= 1) return first;
  return first + countVowelsNotPTC(str.slice(1));
}

const countVowelsPTC = (str: string, count: number = 0): number => {
  count += isVowel(str[0]) ? 1 : 0;
  if (str.length <= 1) return count;
  return countVowelsPTC(str.slice(1), count);
};

console.log(
  "countVowels not proper tail calls",
  countVowelsNotPTC("The quick brown fox jumps over the lazy dog")
);

console.log(
  "countVowels proper tail calls",
  countVowelsPTC("The quick brown fox jumps over the lazy dog")
);
