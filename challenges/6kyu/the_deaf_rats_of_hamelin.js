/*
Story
The Pied Piper has been enlisted to play his magical tune and coax all the rats out of town.

But some of the rats are deaf and are going the wrong way!

Kata Task
How many deaf rats are there?

Legend
P = The Pied Piper
O~ = Rat going left
~O = Rat going right
Example
ex1 ~O~O~O~O P has 0 deaf rats

ex2 P O~ O~ ~O O~ has 1 deaf rat

ex3 ~O~O~O~OP~O~OO~ has 2 deaf rats
*/

var countDeafRats = function (town) {
  /*First we remove ay white space in the string, and then we remove P which causes our steing to be split into an array of two elements
    then we use map so we can extract the first two elements. However, if its blank we ppush to an empty array.
    Now we use filter to seperate the rats which are facing the wrong direction
    */
  const result = town
    .replace(/\s+/g, "")
    .split("P")
    .map((r, index) => {
      const rats = r.match(/../g) || [];
      return rats.filter((rat) => rat[index] == "O").length;
    });
  return result[0] + result[1];
};
