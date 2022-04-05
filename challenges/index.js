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

// * Franks Sticky Calculator
/*
Description
Frank just bought a new calculator. But, this is no normal calculator. This is a 'Sticky Calculator.

Whenever you add add, subtract, multiply or divide two numbers the two numbers first stick together:

For instance:

50 + 12 becomes 5012
and then the operation is carried out as usual:

(5012) + 12 = 5024
*/
function stickyCalc(operation, val1, val2) {
  if (val1 % 1 !== 0 || val1 % 1 !== 0) {
    val1 = Math.round(val1);
    val2 = Math.round(val2);
  }
  let sticky = val1.toString() + val2.toString();

  if (operation === "+") {
    return Math.floor(sticky) + val2;
  } else if (operation === "-") {
    return Math.floor(sticky - val2);
  } else if (operation === "*") {
    return Math.floor(sticky * val2);
  } else {
    return Math.round(sticky / val2);
  }
}

// * Are They the 'same'
/*
Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) that checks whether the two arrays have the "same" elements, with the same multiplicities (the multiplicity of a member is the number of times it appears). "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.

Examples
Valid arrays
a = [121, 144, 19, 161, 19, 144, 19, 11]  
b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]
*/
function comp(arr1, arr2) {
  if (!arr1 || !arr2 || arr1.length !== arr2.length) return false;
  return (
    arr1
      .map((x) => x * x)
      .sort()
      .toString() === arr2.sort().toString()
  );
}

// * The SUpermarket Queue
/*
  There is a queue for the self-checkout tills at the supermarket. Your task is write a function to calculate the total time required for all the customers to check out!

input
customers: an array of positive integers representing the queue. Each integer represents a customer, and its value is the amount of time they require to check out.
n: a positive integer, the number of checkout tills.
output
The function should return an integer, the total time required.
*/

function queueTime(customers, n) {
  let tills = Array(n).fill(0);

  customers.forEach((customer) => {
    let nextTill = tills.indexOf(Math.min(...tills));
    tills[nextTill] += customer;
  });

  return Math.max(...tills);
}

// * Two Sum
/* Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in a tuple / list (depending on your language) like so: (index1, index2).

For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted.

The input will always be valid (numbers will be an array of length 2 or greater, and all of the items will be numbers; target will always be the sum of two different items from that array).

Based on: http://oj.leetcode.com/problems/two-sum/
*/

function twoSum(numbers, target) {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === target) {
        return [i, j];
      }
    }
  }
}

// * Convert String to Camel Case
/*
  Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

Examples
"the-stealth-warrior" gets converted to "theStealthWarrior"
"The_Stealth_Warrior" gets converted to "TheStealthWarrior"
*/

function toCamelCase(str) {
  return str
    .split(/[,_-]+/)
    .map((word, index) =>
      index !== 0 ? word.charAt(0).toUpperCase() + word.slice(1) : word
    )
    .join("");
}

// * 6 kyu Does my number look big in this?

/*
A Narcissistic Number is a positive number which is the sum of its own digits, each raised to the power of the number of digits in a given base. In this Kata, we will restrict ourselves to decimal (base 10).

For example, take 153 (3 digits), which is narcisstic:

    1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
    */
function narcissistic(value) {
  //the arr variable turns a string of integers into an array of numbers
  let arr = Array.from(String(value), Number);
  let sum = 0;
  arr.forEach((x) => (sum += Math.pow(x, arr.length)));
  if (sum === value) {
    return true;
  }
  return false;
}
