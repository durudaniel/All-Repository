/************  CHECKING AND CONVERTING NUMBERS IN JAVASCRIPT ************/

console.log(0.1 + 0.2);
console.log(parseInt("23ls"));

/*************** MATH AND ROUNDING ******************/

console.log(Math.trunc(Math.random() * 6) + 1);

const randomInt = (min, max) =>
  Math.trunc(Math.random() * (max - min) + 1 + min);

console.log(randomInt(10, 20));
//randomInt(0, 3);

/************** THE REMAINDER OPERATOR ****************/
console.log(10 % 4); // 4 * 2 = 8 + 2
console.log(10 / 4);

// return boolean if it's an even number or NOT
const isEven = (num) => num % 2 === 0;
console.log(isEven(10));
console.log(isEven(100));
console.log(isEven(245));
console.log(isEven(15));

/************** NUMERIC SEPERATOR *************/

const diameter = 1507895757;

const numses = 23445n;
console.log(typeof numses === "bigint");

/*************** DATE AND TIME IMPLIMENTATION *****************/
console.log(new Date());

let getDate = new Date("Dec 20 2025 00:47:01");
console.log(getDate);

getDate = new Date("dec 15 2025");
console.log(getDate);

const arraySplice = [1, 3, 4, 6, 8];
console.log(arraySplice.at(2));
console.log(arraySplice);
