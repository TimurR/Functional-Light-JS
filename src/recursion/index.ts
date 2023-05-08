import "./properTailCalls";
/*
# Recursion

Recursion occurs when the definition of a concept or process depends on a simpler version of itself.

Recursion is the process of defining a problem (or the solution to a problem) in terms of (a simpler version of) itself.

For example, we can define the operation "find your way home" as:

    If you are at home, stop moving.

    Take one step toward home.

    "find your way home".

Here the solution to finding your way home is two steps (three steps). First, we don't go home if we are already home. Secondly, we do a very simple action that makes our situation simpler to solve. Finally, we redo the entire algorithm. 
*/

/*
This is an exercise to practice recursion techniques.

## Instructions

1. Define a recursive `isPalidrome(..)` function that returns `true` if the string passed in is a palindrome -- same string when written forwards or backwards -- or `false` otherwise.

2. An empty string and a single character string are both defined as base-condition palindromes. The strings "aba" and "abba" are also palindromes.

3. All the test cases at the bottom of the exercise file should print `true`.

4. Hint: Consider "abcdcba". A handy recursive definition for a palindrome is that the first and last character of a string (ie, the "a" and "a") must be the same character, and the substring in between (ie, "bcdcb") must also be a palindrome.
*/

function isPalindrome(str: string) {
  if (str.length <= 1) return true;

  const first = str[0];
  const last = str[str.length - 1];

  if (first === last) {
    return isPalindrome(str.substring(1, str.length - 1));
  }

  return false;
}

console.log(isPalindrome("") === true);
console.log(isPalindrome("a") === true);
console.log(isPalindrome("aa") === true);
console.log(isPalindrome("aba") === true);
console.log(isPalindrome("abba") === true);
console.log(isPalindrome("abccba") === true);

console.log(isPalindrome("ab") === false);
console.log(isPalindrome("abc") === false);
console.log(isPalindrome("abca") === false);
console.log(isPalindrome("abcdba") === false);
