/* Description: 
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
 

Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false
*/

let isValid = (s) => {
  if (s.length % 2 !== 0) return false;
  const stack = [];
  const map = new Map([
    ["(", ")"],
    ["[", "]"],
    ["{", "}"],
  ]);

  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) stack.push(map.get(s[i]));
    else if (s[i] !== stack.pop()) return false;
  }
  return stack.length === 0;
};
console.log(isValid("()[]{}"));
