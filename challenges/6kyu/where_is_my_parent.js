/*
Description 
Mothers arranged a dance party for the children in school. At that party, there are only mothers and their children. All are having great fun on the dance floor when suddenly all the lights went out. It's a dark night and no one can see each other. But you were flying nearby and you can see in the dark and have ability to teleport people anywhere you want.

Legend:
-Uppercase letters stands for mothers, lowercase stand for their children, i.e. "A" mother's children are "aaaa".
-Function input: String contains only letters, uppercase letters are unique.
Task:
Place all people in alphabetical order where Mothers are followed by their children, i.e. "aAbaBb" => "AaaBbb".
*/

function findChildren(dancingBrigade) {
  let str = dancingBrigade.toLowerCase();
  //   beeeebb
  let arr = str.split("");
  //   [ 'b', 'e', 'e', 'e', 'e', 'b', 'b' ]
  var r = "";
  let letters = [...new Set(arr)].sort();
  //   ['b','e']

  for (let i = 0; i < letters.length; i++) {
    //     Will iterate ['b','e']
    for (let j = 0; j < str.length; j++) {
      //       Will iterate //   [ 'b', 'e', 'e', 'e', 'e', 'b', 'b' ]
      if (letters[i] == arr[j]) r += arr[j];
    }
  }
  return r
    .split("")
    .map((x, i) => (x !== r[i - 1] ? (x = x.toUpperCase()) : x))
    .join("");
}

// Refactored Code
/*
    function findChildren(dancingBrigade) {
 return dancingBrigade.split("")
                       .sort((a,b)=>a.localeCompare(b,"kf",{caseFirst:"upper"}))
                       .join("");}
                       */
