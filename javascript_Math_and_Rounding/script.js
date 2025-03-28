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

/************************* OPERATIONS WITH DATES ***************************/

const future = new Date(2037, 10, 19, 15, 23);
console.log(future);

const calcDaysPassed = (day1, day2) =>
  Math.abs(day1 - day2) / (1000 * 60 * 60 * 24);

const days1 = calcDaysPassed(new Date(2025, 2, 26), new Date(2025, 2, 10));
console.log(days1 + " days");

const now = new Date();
const locale = navigator.language;
console.log(locale);
const options = {
  hour: "numeric",
  minute: "numeric",
  day: "numeric",
  month: "long",
  year: "numeric",
  weekDay: "long",
};
const formatCountry = new Intl.DateTimeFormat(locale, options).format(now);
console.log("Last Login As Of", formatCountry);

// INTERNATIONALIZING OF NUMBER
const options1 = {
  style: "currency",
  unit: "celsius",
  currency: "CAD",
};
const numData = 10000009.34572;

const formatNumData1 = new Intl.NumberFormat("en-NG").format(numData);
const formatNumData2 = new Intl.NumberFormat("en-US").format(numData);
const formatNumData3 = new Intl.NumberFormat("en-UK").format(numData);
const formatNumData4 = new Intl.NumberFormat("pt-PT").format(numData);
const formatNumData5 = new Intl.NumberFormat("ar-SY").format(numData);
const formatNumData6 = new Intl.NumberFormat("de-DE").format(numData);
console.log(formatNumData1);
console.log(formatNumData2);
console.log(formatNumData3);
console.log(formatNumData4);
console.log(formatNumData5);
console.log(formatNumData6);

console.log(
  navigator.language,
  new Intl.NumberFormat(navigator.language, options1).format(numData)
);

// TIMEOUT: SETTIMEOUT & SETINTERVALS
const ingredients = ["spinach", "ketchUp"];
const pizzaTimer = setTimeout(
  (ingredient1, ingredient2) =>
    console.log(`Here is your pizza 🍕 with ${ingredient1} and ${ingredient2}`),
  3000,
  ...ingredients
);
console.log("Waiting".padEnd(12, "."));
if (ingredients.includes("spinach")) clearTimeout(pizzaTimer);
else
  setTimeout(
    (ing) => console.log(`Here is your pizza 🍕 with ${ing}`),
    3000,
    "Ketchup"
  );

//SET INTERVALS
/*
const clockTimeInterval = setInterval(function () {
  const now = new Date();
  const hour = now.getHours();
  const minute = now.getMinutes();
  const seconds = now.getSeconds();
  console.log(
    `${`${hour}`.padStart(2, 0)}: ${`${minute}`.padStart(
      2,
      0
    )}: ${`${seconds}`.padStart(2, 0)}`
  );
}, 3000)*/
