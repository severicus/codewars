// * Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

function doubleChar(str) {
  let newString = "";
  for (let i = 0; i < str.length; i++) {
    newString += str[i] + str[i];
  }
  return newString;
}

// * Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

const XO = (str) => {
  str = str.toLowerCase().split("");
  return (
    str.filter((x) => x === "x").length === str.filter((o) => o === "o").length
  );
};

// * In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

//.map(Number) converts the give value into an integer
//Here i used the spread operator which turns any expression into an array which lets me use the Math methods
function highAndLow(numbers) {
  let nums = numbers.split(" ").map(Number);
  return `${Math.max(...nums)} ${Math.min(...nums)}`;
}

/*Create a function named divisors/Divisors that takes an 
integer n > 1 and returns an array with all of the integer's 
divisors(except for 1 and the number itself), from smallest to largest. 
If the number is prime return the string '(integer) is prime' 
(null in C#) (use Either String a in Haskell and Result<Vec<u32>, 
String> in Rust).*/

/*
Here i first made a variable that takes in an empty array so that i can later push the divisors into it
After that I started a loop that will iterate from 2 to the integer value, in every iteration 
I'll check if "i" is divisible by the integer, and if it is I'll push it to the "result" array.
Because prime numbers are only divisible by 1 and itself, that condition will never be reached by our for loop and subsequently the array will be empty
After that I'll check for the length of my array, if it contains any divisors they will be printed, and if not then this means our user entered a prime number
*/

function divisors(num) {
  let result = [];
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      result.push(i);
    }
  }
  let res = result.length !== 0 ? result : `${num} is prime`;
  return res;
}
