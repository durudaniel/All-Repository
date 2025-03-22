"use strict";
/****************************
STARTING A NEW PROJECT ON JAVASCRIPT
LETS GOO!!!!!!!!💪👊
*/

const Name = "daniel";
//console.log(Name[0].toUpperCase().concat(Name.slice(1)));

/*************************
 write a javascript code that take an array of numbers, letters, booleans 

 STEP1: check if the number is even add it 3 else print number like that 
 STEP2: capitalize the 0 index of every string
 STEP3: change the subject of the booleans e.g [false -> true and otherwise]
 */

function variableType(array) {
  const numberValue = array
    .filter((Number) => {
      const type1 = typeof Number;
      return type1 === "number";
    })
    .map((numberTest) => {
      if (numberTest % 2 === 0) return numberTest + 3;
      else return numberTest + " is not an even number";
    });

  const stringValue = array
    .filter((string) => {
      const type2 = typeof string;
      return type2 === "string";
    })
    .map((stringTest) => {
      return stringTest[0].toUpperCase().concat(stringTest.slice(1));
    });

  const boolValue = array
    .filter((booleans) => {
      const type3 = typeof booleans;
      return type3 === "boolean";
    })
    .map((boolTest) => {
      if (boolTest === true) return false;
      if (boolTest === false) return true;
    });

  return [numberValue, stringValue, boolValue];
}
/*console.log(
  variableType([2, 4, 6, 9, 17, 20, "clinton", "david", true, false])
);*/

/****************
write a javascript function that will contain two arrays of numbers and sums up each
index in the array no matter the length of the array
*/

function sumArray(arr1, arr2) {
  const containerArray = [];
  let summerArray = 0;
  const lengthOfArray = Math.max(arr1.length, arr2.length);
  for (var i = 0; i < lengthOfArray; i++) {
    const absoluteSum1 = Math.abs(arr1[i]);
    const absoluteSum2 = Math.abs(arr2[i]);
    summerArray = (absoluteSum1 || 0) + (absoluteSum2 || 0);
    containerArray.push(summerArray);
  }

  return containerArray;
}

//console.log(sumArray([12, 23, 6, 9, 0], [78, 39, 10, 3, 938, 8]));

/****************
Write a javascript code that concats two arrays of number together and return the min and max 
of the numbers in the arrays
TEST CODE: [23,4,76,100], [1,200,150,24] 
 */

const returnMinAndMax = function (arr1, arr2) {
  const concatMinAndMax = arr1.concat(arr2);
  let minArr = concatMinAndMax[0];
  let maxArr = concatMinAndMax[0];

  for (let arrIndex = 0; arrIndex < concatMinAndMax.length; arrIndex++) {
    //console.log(concatMinAndMax[arrIndex]);
    if (concatMinAndMax[arrIndex] < minArr) minArr = concatMinAndMax[arrIndex];
    if (concatMinAndMax[arrIndex] > maxArr) maxArr = concatMinAndMax[arrIndex];
  }
  return [minArr, maxArr];
};
//console.log(returnMinAndMax([23, 1, 0, 4, 76, 100], [11, 200, 150, 24]));

/***********
Write a javascript code that contains an arrays of numbers and string but; filter only the 
string values, change the index[0] to an upperCase letter and sort alphabetically
TEST CODE: [12,34,5,6,"Opay","flutterWave","gullible"]
*/

function numberAndStringArray(numAndStrArr) {
  return numAndStrArr
    .filter((STRs) => {
      const strType = typeof STRs;
      return strType === "string";
    })
    .map((strToUpper) => {
      return strToUpper[0].toUpperCase().concat(strToUpper.slice(1));
    })
    .sort((value1, value2) => {
      if (value1 < value2) return -1;
      if (value2 < value1) return 1;
    });
}

/*console.log(
  numberAndStringArray([12, 34, 5, 6, "Opay", "flutterWave", "gullible"])
);*/

/*******************
 Write a javascript that contains an array and a number
STEP1: find the index of the number in the array and remove it
step2: then print the result 
TESTCODE: [4,5,6,0,1] , 5
 */

function findIndexNumberInArray(arr, number) {
  const arrayForPushing = [].splice();

  for (let index = 0; index < arr.length; index++) {
    let indexTargeter = arr.indexOf(number);
    if (indexTargeter > -1) arr.splice(indexTargeter, 1);

    arrayForPushing.push(arr[index]);
  }

  return arrayForPushing;
}

//console.log(findIndexNumberInArray([4, 5, 6, 0, 1], 6));

// Given an array of objects representing products, write a function that
// filters out products with a price greater than $50
// and returns an array of product names in uppercase.
// For example, if the input is:
// [
//   { name: "Laptop", price: 800 },
//   { name: "Smartphone", price: 600 },
//   { name: "Headphones", price: 30 },
//   { name: "Tablet", price: 120 },
// ]
// The function should return ["LAPTOP", "SMARTPHONE", "TABLET"].

function productsAndPrice(objects) {
  return objects
    .filter((key) => key.price > 50)
    .map((value) => value.Name.toUpperCase());
}
/*console.log(
  productsAndPrice([
    { Name: "Laptop", price: 800 },
    { Name: "Headphones", price: 30 },
    { Name: "Smartphone", price: 600 },
    { Name: "Tablet", price: 120 },
  ])
);*/

/**********************
Now re-write the same javascript code and change only the first index of the strings to
 an upperCase 
 the Function should return ["Laptop","Smartphone","Tablets"]
*/

const productAndPrice = function (objProducts) {
  return objProducts
    .filter((keys) => keys.price > 50)
    .map((values) => values.name[0].toUpperCase().concat(values.name.slice(1)));
};

/*console.log(
  productAndPrice([
    { name: "laptop", price: 800 },
    { name: "headphones", price: 30 },
    { name: "smartphone", price: 600 },
    { name: "tablet", price: 120 },
  */

const getEqualElement = function (array, element) {
  for (var index = 0; index < array.length; index++) {
    const getter = array[index] === element;
    return getter;
  }
};

//console.log(getEqualElement(["horse", "pigeon", "rat"], "horse"));

function sortByAge(array) {
  return array
    .filter((value) => value.age > 1)
    .sort((age1, age2) => {
      if (age1.age < age2.age) return -1;
      if (age2.age < age1.age) return 1;
    })
    .map((Name) => Name.name[0].toUpperCase().concat(Name.name.slice(1)));
}

const array_sorting = [
  { name: "prisca", age: 20, level: "level1" },
  { name: "precious", age: 24, level: "level1" },
  { name: "michael", age: 19, level: "level3" },
];
//console.log(sortByAge(array_sorting));

/********************************************
 * ** solving code with AI : lets say you're building a time tracking for freelancer. at some
 * point  in building this app, you need a function that receives daily work hours for a certain
 * week, and return :
 * Total ours worked
 * Average daily hours
 * the days with the most hours worked
 * Number of days worked
 * Whether the week was full-time (worked 35 hours or more)
 *
 * TEST DATA: [7.5, 8, 6.5, 0, 8.5, 4, 0]
 */

function analyzeWorkWeek(dailyHour) {
  const daysOfWeek = [
    "monday",
    "tuesday",
    "wednessday",
    "thursday",
    "friday",
    "saturday",
    "sunday",
  ];

  if (!Array.isArray(dailyHour) || dailyHour.length !== 7) {
    throw new Error("Input must must be exactly 7 daily working hours");
  }

  //sum total hours worked
  const totalTime = Math.round(
    dailyHour.reduce((sum, hours) => sum + hours, 0)
  );

  // average daily worked
  const averageTime = Math.round(totalTime / dailyHour.length);

  // the days with the most hours worked
  const maxHour = Math.max(...dailyHour);
  const maxDayIndex = dailyHour.indexOf(maxHour);
  const maxDayArray = daysOfWeek[maxDayIndex];
  const maxDay = maxDayArray[0].toUpperCase().concat(maxDayArray.slice(1));

  //Number of days worked

  const daysWorked = dailyHour.filter((days) => days > 0).length;

  //Whether the week was full-time (worked 35 hours or more)
  const isFullTime = totalTime >= 35;

  return {
    totalTime,
    averageTime,
    maxDay,
    daysWorked,
    isFullTime,
  };
}

/*const dailyTimeArray = [10, 4, 4.5, 0, 0, 7, 15];
const analyzedOutput = analyzeWorkWeek(dailyTimeArray);
console.log(analyzedOutput);
/*const dailyTimeArray2 = [10, 4, 4.5, 0, 0, 7];
const analyzedOutput2 = analyzeWorkWeek(dailyTimeArray2);
console.log(analyzedOutput2);

/************* HOW HOISTING WORKS ****************/
hoistingTest(2005);
function hoistingTest(birthYear) {
  const currentYear = 2025;
  const realAge = currentYear - birthYear;
  const job = "teacher";
  /*console.log(
    `you're a ${job[0]
      .toUpperCase()
      .concat(job.slice(1))} at the age ${realAge}`
  );*/
  //console.log(undefined);
  //var job = "pilot";
  //const job = "teacher";
  //let job = "programmer";
}

//console.log(arrowHoist(3, 5));
/*console.log(declHoist(4, 6));

const arrowHoist = (a, b) => a + b;

const declHoist = function (a, b) {
  return a + b;
};
*/

/*
function second(x, y) {
  return x + y;
}
//console.log(second());

const first = () => {
  let a = 4;
  const b = second(7, 9);
  a += b;
  return a;
};

console.log(first());

//console.log(second());
*/
/// SCOPING
function calcAge(birthYear) {
  const currentAge = 2025;
  const age = currentAge - birthYear;
  if (age >= 20) {
    return `you're ${age} years old and also an adult`;
  } else {
    return `you're ${age} years old and still a baby that needs to be taking care of`;
  }
}

const ageResults = calcAge(2009);
//console.log(ageResults);

/***************************
 * JAVASRIPT: SCOPING
 */
/*function ageCalc(birthYear) {
  const currentAge = 2025;
  const age = currentAge - birthYear;
  console.log(string);
  console.log(firstName);
  return age;
console.log(string);
}
// what happened in this line of code is that javascript did a variable lookUp and
// executes once the agecalc is called
    console.log(millenian);
const firstName = "Duru";
ageCalc();*/
// var is a function scope , let and const are block scope
function ageCalc(birthYear) {
  const currentAge = 2025;
  const age = currentAge - birthYear;

  function printAge() {
    const output = `${firstName}, you're ${age}-years old, born in ${birthYear}`;
    //console.log(output);

    if (birthYear <= 1996 && birthYear >= 1981) {
      var millenian = true;
      const string = `wow!! ${firstName}!!!, is a millenial`;
    } else {
      var millenian = false;
      const string = `sorry ${firstName}!!, you're absolutely not a millenial`;
    }
    //console.log(string); : refference error string is not defined, this happens because string
    //is a block scope
    /** this is gonna work because variable declared with var
    are accessible even outside the block they are compiled in, due to its a function scope */
  }
  //console.log(millenian); Error
  printAge();
  return age;
}
const firstName = "Duru";
//console.log(age) : age is not defined because it's a function scope
//console.log(millenian); refference error
ageCalc(1994);
ageCalc(2005);

/*****************
 * THE THIS KEYWORD
 */
/*console.log(this);

function calcAge2(birthYear) {
  //const currentAge = 2025 - birthYear;
  console.log(2025 - birthYear);
  console.log(this);
}
calcAge2(2005);

const calcAge2Decl = function (birthYear) {
  //const currentAge = 2025 - birthYear;
  console.log(2025 - birthYear);
  console.log(this);
};
calcAge2Decl(2002);

const calcAge2Arrow = (birthYear) => {
  //const currentAge = 2025 - birthYear;
  console.log(2025 - birthYear);
  console.log(this);
};
calcAge2Arrow(2000);

const duru = {
console.log(2025 - birthYear);
  year: 2005,
  calcAge: function () {
    console.log(2025 - this.year);
    console.log(this);
  },
};

  console.log(2025 - this.year);
duru.calcAge();

const alvin = {
  year: 1978,
};

alvin.calcAge = duru.calcAge;
alvin.calcAge();
*/
//var firstNames = "daniel";

function calcAge2(birthYear) {
  //const currentAge = 2025 - birthYear;
  //console.log(this);
}
calcAge2(2005);
//console.log(2025 - this.year);

const davidsAge = {
  year: 1879,
  calcAge: function () {},
};

davidsAge.calcAge();

const matildasAge = {
  year: 1967,
};

matildasAge.calcAge = davidsAge.calcAge;
matildasAge.calcAge();

const duru = {
  firstName: "daniel",
  year: 1992,
  calcAge: function () {
    //console.log(this);
    /*
    const self = this;
    const ismillenian = function () {
      /*console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996); Error
      console.log(self);
      console.log(self.year >= 1981 && self.year <= 1996);
    };
    ismillenian();
    */

    const ismillenian = () => {
      //console.log(this);
      //console.log(this.year >= 1981 && this.year <= 1996);
    };
    ismillenian();
  },
  // ARROW FUNCTION VS REGULAR FUNCTION
  greeting: function () {
    //console.log(`Hey ${this.firstName}`);
  },

  /*greeting: () => {
    console.log(`Hey ${this.firstNames}`);
  },*/
};
duru.greeting();
duru.calcAge();

/********** OBJECT DEEP AND SHALLOW COPY ********************* */
const duruBio1 = {
  firstName: "Daniel",
  lastName: "Duru",
  age: 20,
};

function marryPerson(originalPerson, newLastName) {
  originalPerson.lastName = newLastName;
  return originalPerson;
}

const whenMarried = marryPerson(duruBio1, "Wilson");
/*console.log(duruBio);
const whenMarried = duruBio1;
whenMarried.lastName = "wilson";
/*console.log(
  whenMarried.lastName[0].toUpperCase().concat(whenMarried.lastName.slice(1))
);
console.log("Before:", duruBio1);
console.log("After:", whenMarried);
*/

//console.log("Before:", duruBio1);
//console.log("After:", whenMarried);

const duruBio = {
  firstName: "Daniel",
  lastName: "Duru",
  age: 20,
  family: ["Uche", "Chisom"],
};
/*************SHALLOW COPY******** */
const copyDuruBio = { ...duruBio };
copyDuruBio.lastName = "Wilson";
/*copyDuruBio.family.push("Ify", "Ebuka");

/*console.log("Before:", duruBio);
console.log("After:", copyDuruBio);

/********* DEEP CLONE************ */

const cloneDuruBio = structuredClone(duruBio);
cloneDuruBio.lastName = "emeka";
cloneDuruBio.family.push("Ify", "Ebuka");

//console.log("Before Clone:", duruBio);
//console.log("After Clone:", cloneDuruBio);

/*************** DESTRUCTURING ARRAYS****************** */

const restaurant = {
  name: "Classical Naija",
  location: "via Ikoyi, Lagos road, Nigeria",
  categories: ["Naija Soup", "Vegeterian", "white Dishes", "pizzeria"],
  starterMenu: ["Focaccia", "Bruscheta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  orders: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

const arr = [1, 2, 4];
arr[0];
let [a, b, c] = arr;
//console.log(a, b, c);

const personalInfo = {
  myName: "duru",
  age: 19,
};

const { myName, age, lastName = "emmanuel" } = personalInfo;
//console.log("properties", myName, age, lastName);
const newPersonalInfo = { ...personalInfo, lastName: "emmanuel" };
//console.log("personal", newPersonalInfo);
const [firstDes, , secondDes] = restaurant.categories;

//console.log(firstDes, secondDes);
//console.log(secondDes, firstDes);

//console.log(restaurant.orders(1, 2));

const [starter, main] = restaurant.orders(1, 2);
//console.log(starter, main);
//console.log(main, starter);

/*let [starter1, main1] = [main, starter];
console.log(starter1, main1);*/

/***************** DESTRUCTURING NESTED ARRAYS********************** */

const nestedArr = [2, 4, [5, 6]];
/*const [j, , o] = nestedArr;

console.log(j, o);*/

const [j, , [o, l]] = nestedArr;
//console.log(j, o, l);

/********************* OBJECT DESTRUCTURING******************* */

const restaurant1 = {
  names: "Classical Naija",
  location: "via Ikoyi, Lagos road, Nigeria",
  categories: ["Naija Soup", "Vegeterian", "white Dishes", "pizzeria"],
  starterMenu: ["Focaccia", "Bruscheta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  openingHour: {
    thur: {
      open: 12 + "am",
      close: 22 + "pm",
    },

    fri: {
      open: 12 + "am",
      close: 24 + "pm",
    },

    sat: {
      open: 12 + "am",
      close: 20 + "pm",
    },
  },

  orders: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
    console.log(
      `Orders Received: ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be 
delivered at ${address} by ${time}`
    );
  },

  orderpasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta made with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza: function (mainIngredients, ...otherIngredients) {
    console.log(mainIngredients);
    console.log(otherIngredients);
  },
};

restaurant1.orderDelivery({
  time: "22:00pm",
  address: "via ikoyi, street1",
  starterIndex: 1,
  mainIndex: 2,
});

const { names, openingHour, categories } = restaurant1;
//console.log(names, categories, openingHour);

//change in variables names of the destructured object

const {
  names: restaurantName,
  openingHour: openingCloseHour,
  categories: tags,
} = restaurant1;
//console.log(restaurantName, openingCloseHour, tags);
//console.log(restaurant1);

// setting default values in the destructured object

const { menu = ["Focaccia", "Bruscheta"], starterMenu: starters = [] } =
  restaurant1;

//console.log(menu, starters);

// MUTATING

/*const obj = { a: 24, b: 81, c: 12 };
({ a, b, c } = obj);
console.log(a, b);
*/
// DESTRUCTURING OF A NESTED OBJ

/*const { fri } = openingHour;
console.log(fri);
*/

const {
  fri: { open, close },
} = restaurant1.openingHour;
//console.log(open, close);

/************************** SPREAD OPERATOR ****************************/

const arrayToSpread = [7, 6, 7, 8, 3];
const spreadIn = [4, 5, ...arrayToSpread];
//console.log(spreadIn);
//console.log(...spreadIn);

const newMenu = [...restaurant1.categories, "Ghana Jollof"];
//console.log(newMenu);
//console.log(...newMenu);

// COPY ARRAYS
const copyNewArr = { foundedIn: 2011, ...restaurant, founder: "Emeka Ofor" };
copyNewArr.name = "EmmyContinentals";
//console.log(copyNewArr);
//console.log(copyNewArr.name);
//console.log(restaurant.name);
const mainMenuCopy = [...restaurant1.mainMenu];
//console.log(mainMenuCopy);

// merging two arrays together

const menu1 = [...restaurant1.mainMenu, ...restaurant1.starterMenu];
//console.log(menu1);
//console.log(...menu1);

// MAKING USE OF SPREAD OPERATORS ON ITERABLES(string,array,sets,maps)

const str = "jonas";
const strLetter = [...str, "", "D."];
//console.log(strLetter);
//console.log(...strLetter);
//console.log(`${[...strLetter]}`);

const ingredients = [
  /*prompt("let's make pasta! ingredient 1?"),
  prompt("Ingredient 2?"),
  prompt("Ingredient 3?"),
  */
  "salt",
  "tomatoe",
  "pepper",
];

restaurant1.orderpasta(...ingredients);

/**************************** REST PATTERNS **********************/
//  REST PATTERNS FOR DESTRUCTURING
const num = [1, 2, 3, 4, 5, 6];
const [firstNum, secondNum, ...others] = num;
//console.log(firstNum, secondNum, others);

const [pizza, , Risotto, ...otherElements] = [
  ...restaurant1.mainMenu,
  ...restaurant1.starterMenu,
];
//console.log(pizza, Risotto, otherElements);

// REST IN OBJECTS

const { fri, ...weekDays } = restaurant1.openingHour;
//console.log("Friday: ", fri, "other weeks: ", weekDays);

// 2) REST PATTERNS FOR FUNCTIONS()
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    let add = numbers[i] + 2;
    // console.log(add);

    //sum += numbers[i];
    //console.log(numbers[i + 1]);
  }
};
add(1, 2, 3);
add(5, 6, 7, 8, 9);
add(2, 9, 97, 6);

restaurant1.orderPizza("mushroom", "tomatoe", "fresh pepper", "carrot");

/***************************** SHORT CIRCUITING (&& AND ||) *********************************/
console.log("-------- OR --------");
//console.log(0 || null);
//console.log(undefined || "" || 0 || null || "mela" || 78);
const setObj = { num: 12, num2: 34 };
const guest = (setObj.numGuest = 15);
const guest2 = !guest || 90;
//console.log(guest2);

console.log("---------- AND -----------");
//console.log(false && "rat");

/********************** NULLISH COALESCING OPERATOR *************************/

const setObj2 = { num: 12, num2: 34 };
setObj2.numGuest = 0;
const guest1 = setObj2.numGuest ?? 17;
//console.log(guest1);

/********************* OPTIONAL CHAINING *********************************/
const daysInWeek = ["mon", "tue", "wed", "thur", "fri", "sat", "sun"];

for (const day of daysInWeek) {
  const open = restaurant1.openingHour[day]?.open ?? "20pm";
  //console.log(`On ${day} we open by ${open}`);
}

/*************************** OPTIONAL CHAINING ON METHODS ******************************/
const chainMethod = restaurant1.orders?.(0, 2) ?? "orders does not exist";
//console.log(chainMethod);

/************************ OPTIONAL CHAINING IN ARRAY **********************/
const user = [{ name: "Daniel", email: "name@gmail.com" }];
const chainArr = user[0]?.name ?? "user array empty";
//console.log(chainArr);

/****************************** LOOPING OBJECT: Object keys, Values, Entries ****************************/
// OBJECT KEYS
const properties = Object.keys(openingHour);
//console.log(properties);
let openStr = `We are open in ${properties.length} days: `;
for (const day of Object.keys(openingHour)) {
  openStr += `${day} `;
}
//console.log(openStr);

// OBJECT VALUES
const values = Object.values(openingHour);
//console.log(values);

// ENTRIES TO LOOP THE ENTIRE OBJECT
const entries = Object.entries(openingHour);
//console.log(entries);

for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open by ${open} and close at ${close}`);
}

/************************************* SETS *******************************/
const arrNum = ["we", "we", 1, 3, 4, 5, 1, 2, 3, 4, 2, "set"];
const ingredientArr = new Set([...arrNum]);
//console.log(ingredientArr);
//console.log(ingredientArr.has("we"));
//console.log(ingredientArr.has("me"));
//console.log(ingredientArr.size);

for (const num of ingredientArr) {
  //console.log(num);
}
const ordersSet = new Set(["Pasta", "Rissoto", "Pizza", "Pasta", "Rissoto"]);
ordersSet.add("Ginger Drink");
ordersSet.add("Garlic Bread");
ordersSet.delete("Rissoto");
//console.log(ordersSet);

// NEW OPERATIONS TO MAKE SETS USEFUL
const italianFoods = new Set([
  "pasta",
  "gnocchi",
  "tomatoes",
  "olive oil",
  "garlic",
  "basil",
]);
const mexicanFoods = new Set([
  "tortillas",
  "beans",
  "rice",
  "tomatoes",
  "avocado",
  "garlic",
]);

const commonFoodElements = italianFoods.intersection(mexicanFoods);
const combineFoodElements = mexicanFoods.union(italianFoods);
//const [toma, garl] = commonFoodElements;
//console.log(toma, garl);
//console.log("Common: ", [...commonFoodElements]);

/*************************** MAPS ***************************/

const mapRestuarant = new Map();
mapRestuarant
  .set("Categories", ["Italian", "Pizzerian", "Vegeteria", "Organic"])
  .set("Open", 11)
  .set("Close", 23)
  .set(true, "We are open:")
  .set(false, "We are closed:");
//console.log(mapRestuarant);

//mapRestuarant.has("Categories");
//mapRestuarant.delete("Open");
//console.log(mapRestuarant);
//console.log([...mapRestuarant]);

/***************************** MAPS ITERATIONS *******************************/
const questions = new Map([
  ["question", "What's the best programming language in the world?"],
  [1, "C"],
  [2, "Java"],
  [3, "JavaScript"],
  ["answer", 3],
  [true, "correct 🎉 "],
  [false, "try again ⛔"],
]);
//console.log(questions);

console.log(Object.entries(openingHour));

const hourMap = new Map(Object.entries(openingHour));
//console.log(hourMap);

// MAP ITERATION
//console.log(questions.get("question"));
for (const [key, value] of questions) {
  if (typeof key === "number") {
    console.log(`Answer ${key}: ${value}`);
  }
}

//const answer = Number(prompt("what's your answer?"));
//console.log(questions.get(answer === questions.get("answer")));

// CONVERT MAP TO ARRAY

//console.log([...questions]);

/*********************************** WORKING WITH STRINGS #1 *********************************/

const airLine = "TAP Air Nigeria";
const airPlane = "N345";

const getStringPosition = airPlane[0];
const getStringLength = "N230".length;
//console.log(getStringLength, getStringPosition);

//METHODS IN STRINGS

const indexOfStringMethod = airLine.indexOf("A");
//console.log(indexOfStringMethod);

const sliceStringMEthod = airLine.slice(1);
//console.log(airLine[0].concat(sliceStringMEthod));

function checkMiddleSeats(seats) {
  const seat = seats.slice(-1);
  if (seat === "B" || seat === "E") console.log("You got the middle seat 😐");
  else console.log("You got a lucky seat 😎");
}

//checkMiddleSeats("11B");
//checkMiddleSeats("23C");
//checkMiddleSeats("10E");

// CHANGING STRING CASES
//console.log(airLine.toLowerCase());
//console.log(airLine.toUpperCase());
//challange change this string data (JoHNbull) to (Johnbull)
//FIX CAPITALIZATION IN NAME
const problem = "JoHNbull";
const fixStep1 = problem.toLowerCase();
const fixStep2 = fixStep1[0].toUpperCase().concat(fixStep1.slice(1));
//console.log(fixStep2);

// COMPARING EMAILS

const email = "daniel@hello.com";
const loginEmail = " Daniel@Hello.coM \n";
/*
const correctEmail = loginEmail.toLowerCase();
const trimmedEmail = correctEmail.trim();
console.log(trimmedEmail);
*/
const easyCorrectEmail = loginEmail.toLowerCase().trim();
//console.log(email === easyCorrectEmail);

function checkEmails(email, loginEmail) {
  const easyCorrectEmail = loginEmail.toLowerCase().trim();
  //console.log(easyCorrectEmail === email);
}
checkEmails("daniel@hello.com", " Daniel@Hello.coM \n");

// REPLACING STRINGS
const FlightPriceInRand = "288,34R";
const flightPriceInDollar = FlightPriceInRand.replace("R", "$").replace(
  ",",
  "."
);
//console.log(flightPriceInDollar);

const announcement =
  "All passangers should come to boarding door 23. Boarding door 23";
//console.log(announcement.replaceAll("door", "gate"));

// STRING METHOD THAT RETURN BOOLEANS

//console.log(email.includes("daniel"));
//console.log(email.startsWith("dan"));
//console.log(email.endsWith(".com"));

// check item in a bag

const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes("pocket knife") || baggage.includes("gun"))
    console.log("items cannot be allowed in the plane ⛔");
  else console.log("items are allowed ✔");
};
//checkBaggage("I have a laptop, some foods and a pocket knife");
//checkBaggage("Socks and camera");
//checkBaggage("Got some snacks and a gun for protection");

// SPLIT METHOD

const splitStr = "apple cherry pawpaw";
//console.log(splitStr.split(" "));
const [firstIndex, secondIndex, thirdIndex] = splitStr.split(" ");
/*console.log(
  [
    firstIndex.toUpperCase(),
    secondIndex.toUpperCase(),
    thirdIndex.toUpperCase(),
  ].join("+")
);*/

const [index1, index2] = "Duru Daniel".split(" ");

const newFruit = ["MR.", index1.toUpperCase(), index2.toUpperCase()].join("_");
//console.log(newFruit);

// WORKING WITH STRINGS #3

const capitalizeName = function (name) {
  const passenger = name.split(" ");
  const pushPassengerName = [];
  for (const index of passenger) {
    //console.log(passenger[index]);
    pushPassengerName.push(index[0].toUpperCase().concat(index.slice(1)));
  }
  console.log(pushPassengerName.join(" "));
};

//capitalizeName("duru daniel");
//capitalizeName("nmesoma david uchechuckwu duru");

//PADDING A STRING

const message = "please make sure you fasten your seat belts!!";
//console.log(message.length);
//console.log(message.padStart(50, "#"));

const maskCreditCard = function (number) {
  const convertToStr = String(number);
  const lastNumber = convertToStr.slice(-6);
  return lastNumber.padStart(convertToStr.length, "*");
};
//console.log(maskCreditCard(23456784));
//console.log(maskCreditCard("12345678998"));
//console.log(maskCreditCard(120987345612345));

//REPEAT A STRING
const message2 = "Bad weather... All departures delayed... ";
//console.log(message2.repeat(3));

function message3(numberOfTruck) {
  return `${numberOfTruck} trucks ${"🚒".repeat(
    numberOfTruck
  )}, are yet to be loaded`;
}
//console.log(message3(2));
//console.log(message3(7));
const flights = `_Delayed_Departure;fao85999303;tx3999384982;11:25 
+_Arrival;bru3889283902;fao89928910;11:45 
+_Delayed_Arrival;hel7382989229;fao29030222;12:05
+_Departure;fao39023039;lis8909385878;12:30
`;

for (const flight of flights.split("+")) {
  const [type, from, to, time] = flight.trim().split(";");
  const output = `${type.includes("Delayed") ? "🔴" : ""}${type.replaceAll(
    "_",
    " "
  )} from ${from.slice(0, 3).toUpperCase()} to ${to
    .slice(0, 3)
    .toUpperCase()} (${time.replace(":", "h")})`;
  //console.log(output.padStart(38));
}
//////////////////////////////////////////////////////////////////////////////////////////////////
// CODING CHALLANGE #1
/*
we're building a football betting app (soccer for my nigerian friends 😂)

Supposed we get data from a website service about a certain game (below). In this challange we're gonna work
with the data. So here are your task

1. Create one player array for each team (variables "player1" and "player2")
2. The first player in any player array is the goalkeeper and the others are field players. for Bayern Munich (team 1)
Create one variable ('gk') with the goalkeepers name, and one array ('fieldPLayers') with all the remaining 10 field
players
3. Create an array "allPlayers" containing all players of both teams (22 teams)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ("playerFinal") containing
all the oringinal team1 plus "thiago", "Coutinho", and "perisic"
5. based on the game.odds object, create one variables for each odd (called "team1", "draw" , "team2")
6. Write a function ("printGoals") that recieves an arbitary number of players (NOT an array) and print each of them to
the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the more lower odd are more likely to win. Print to the console which tean is more likely to win,
WITHOUT using an if/else statement or ternary operator

TEST DATA FOR 6: Use players "Davies", "Muller", "Lewandowski", "Kimmich". then call the function again with players
from game.scored
*/
const betGame = {
  team1: "Bayern Munich",
  team2: "Borussia Dortmond",
  players: [
    [
      "Nuer",
      "Alaba",
      "Gnaby",
      "Goretzka",
      "Coman",
      "Mulller",
      "Kimmich",
      "Lewandowski",
      "Davies",
      "Martinez",
      "Pavard",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Mallen",
      "Sancho",
      "Gotze",
    ],
  ],
  odd: { team1: 1.35, X: 3.55, team2: 6.85 },
  score: "4 : 0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: new Date(),
};
// 1
const [players1, players2] = betGame.players;
//console.log(players1, players2);
//2
const [gk1, ...fieldPLayers1] = players1;
const [gk2, ...fieldPLayers2] = players2;
//console.log(gk2, fieldPLayers2);
//3
const allPlayers = [...players1, ...players2];
//console.log(allPlayers);
//4
const player1Final = [...players1, "Coutinho", "Thiago", "Perisic"];
//console.log(playerFinal);
//5
const { team1, X: draw, team2 } = betGame.odd;
//console.log(team1, draw, team2);
//6
const printGoal = function (...players) {
  return `${players.length} goals was scored by`;
};
printGoal("Lewandowski", "kimmich", "Lewandowski", "Muller");
printGoal("Davies", "Alaba", "Lewandowski");
printGoal(...betGame.scored);
//7
//team1 < team2 && console.log(`${betGame.teamClub1} is more likely to win`);
//team1 > team2 && console.log(`${betGame.teamClub2} is more likely to win`);

/*
CODING CHALLANGE #2
let's continue with our football betting app!!

1. loop over the game.scored array and print each players name to the console, along with the goal number (Example:
"Goal 1: lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages,
you can go check is you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
              Odd of victory Bayern Munich: 1.33
              Odd of draw: 3:25
              Odd of victory Borussia Dortmond: 6.5
Get the teams name directly from the game object, don't hardcode them (except for "draw") .Hint: Note how the odds and
the game objects have the same property names

BONUS: Create an object called "scorers" which contains the names of the players who scored as properties, and the
number of goals as the value. In this game, it will look like this:
         {
            Gnarby: 1
            Hummels: 1
            lewandowski: 2
         }
*/

//1
const scorers = Object.entries(betGame.scored);
console.log(scorers);
for (const [key, value] of scorers) {
  //console.log(`Goal ${Number(key) + 1}: ${value}`);
}
//2
const gameOdds = Object.values(betGame.odd);
let average = 0;
for (const odd of gameOdds) average = average + odd;
average /= gameOdds.length;
//console.log(average);

//3
for (const [team, odd] of Object.entries(betGame.odd)) {
  const teamStr = team === "X" ? "draw" : `Victory ${betGame[team]}`;
  //console.log(`Odd of ${teamStr}: ${odd}`);
}
/* 
CODING CHALLANGE #3
let's continue with our football bettig app! This line, we have a map with a log of the events that happened during the
game. The values are the events themseles, and the key are the minutes in which each events happened (a football game has
90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2.After the game has finished, it was found that the yellow card from minute 64 was unfair. So remove this events from 
the game events log
3. Print the following string to the console: "An event happened, on average, every 9 minutes"(keep in mind that a game 
has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half(after 45 min
) of the game, like this [first half] 17: ⚽ GOAL
*/

const gameEvents = new Map([
  [17, "⚽ GOAL"],
  [36, "🔁 Substitution"],
  [47, "⚽ GOAL"],
  [61, "🔁 Substitution"],
  [64, "🔶 Yellow card"],
  [69, "🟥 Red card"],
  [70, "🔁 Substitution"],
  [72, "🔁 Substitution"],
  [76, "⚽ GOAL"],
  [80, "⚽ GOAL"],
  [92, "🔶 Yellow card"],
]);
//1
const events = new Set([...gameEvents.values()]);

// 2
gameEvents.delete(64);

//3
const time = [...gameEvents.keys()].pop();
const averageEvent = `An event happened, on average, every ${Math.round(
  time / gameEvents.size
)} minutes`;
//console.log(averageEvent);
// 4
let half = 0;
for (const [mins, events] of gameEvents) {
  half = mins <= 45 ? "FIRST" : "SECOND";
  //console.log(`[${half} HALF] ${mins}: ${events}`);
}
/*
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase


The iput will come from a textarea inserted into the DOM (see code below), and conversion will commence when 
the button is clicked

THIS TEST DATA (pasted to textarea)
underscore_case
first_name
Some_Variable
calculate_Age
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 seperate console.log outputs)
underscoreCase
firstName
someVariable
calculateAge
delayedDeparture

HINT 1: remember which character defines a new line in the textarea*/
/*
document.body.append(document.createElement("textarea"));
document.body.append(document.createElement("button"));
const text = document.querySelector("textarea").value;
*/

const button = document.querySelector(".btn");
button.addEventListener("click", function () {
  const text = document.querySelector(".textarea").value;
  const rows = text.split("\n");
  //console.log(rows.split("\n"));

  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split("_");
    //console.log(row, first, second);

    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    //console.log(`${output.padEnd(20)} ${"✅".repeat(i + 1)}`);
  }
});
const word = " weak_up ";
const [word1, word2] = word.toLowerCase().trim().split("_");
console.log(`${word1}${word2.replace(word2[0], word2[0].toUpperCase())}`);

/**
 * You are tasked with building a small library management system in 
 * JavaScript. The system should manage a collection of books, allowing 
 * you to add new books to the library, track whether a book is available
 *  or borrowed, and allow users to borrow or return books. Each book 
 * should have a title, an author, and a status indicating if it is 
 * currently available for borrowing. When a user borrows a book, 
 * its status should change to indicate it is unavailable. Similarly, 
 * when a user returns a book, its status should update to available again. If an operation is 
 * invalid, such as trying to borrow a book that is already borrowed or returning a book that 
 * hasn’t been borrowed, the system should display appropriate error messages.

The library should also provide functionality to display all available 
books and all borrowed books. As an optional challenge, you can enhance 
the system to track which user borrowed a book and add a timestamp for 
when the book was borrowed or returned.

To get started, you can initialize an empty array to represent the library. Each book can be 
represented as an object with properties like title, author, and isAvailable. Use functions to
 perform operations such as adding books, borrowing books, returning books, and listing books.
  For instance, you might create a function called addBook that takes a title and an author as 
  arguments and adds a new book object to the library.
 */
// function that takes the collection of books
// add new books collections to the library
// track book availability in the library
// when the book is borrowed
// a function that allows users to borrow and return book
// track all available books and all borrowed books
/*const bookLibrary = [];

const addBookToTheLibrary = ({ title, author, status }) => {
  console.log({ title, author, status });
  //return bookLibrary.push({ title, author, status });
};
addBookToTheLibrary({
  title: "Ant Ages",
  author: "Peter",
  status: false,
});
addBookToTheLibrary({
  title: "sword night",
  author: "Peter",
  status: false,
});
//console.log(bookLibrary);

const userNames = [];

const addUserName = function ({ firstName, lastName }) {
  return userNames.push({ firstName, lastName });
};
addUserName({
  firstName: "Anderson",
  lastName: "Michael",
  date: "10/04/2024",
  time: "12:35",
});

const isAvailable = (title) => {
  return bookLibrary.find((book) => {
    if (book.title === title && book.status === true) {
      console.log("AVAILABLE BOOKS: ", `all books are available`);
    } else {
      console.log("UNAVAILABLE BOOKS: ", book);
    }
  });
};
isAvailable("Ant Ages");
isAvailable("sword night");
const isUnavailable = (title) => {
  return bookLibrary.find((book) => {
    if (book.title === title && book.status === false) {
      console.log("UNAVAILABLE BOOKS: ", `book is not available`);
    } else {
      console.log("AVAILABLE BOOKS: ", book);
    }
  });
};
//isUnavailable("Ant Ages");

const toBorrow = (title) => {
  return bookLibrary.map((book) => {
    if (book.title === title && book.status === true) {
      console.log("toBorrow: ", { ...bookLibrary, status: false });
    } else {
      console.log("toBorrow: ", `No book was borrowed`);
    }
  });
};
toBorrow("Ant Ages");
console.log("BOOK LIBRARY: ", bookLibrary);

const toReturn = (title) => {
  return bookLibrary.map((book) => {
    if (book.title === title && book.status === false) {
      return { ...bookLibrary, status: true };
    } else {
      return `no book was returned`;
    }
  });
};
//console.log("toReturn: ", toReturn("Ant Ages"));

const returnNonBorrowedBook = (title) => {
  return bookLibrary.filter((book) => {
    if (book.title === title && book.status === true) {
      console.log(
        "returnNon: ",
        "Sorry you can't return book that haven't been borrowed yet"
      );
    } else {
      console.log("returnNon: ", book);
    }
  });
};
//returnNonBorrowedBook("Ant Ages");

const borrowBorrowedBook = (title) => {
  return bookLibrary.filter((book) => {
    if (book.title === title && book.status === false) {
      console.log(
        "borrowBorrowed: ",
        "Sorry you can't borrow book that have been borrowed"
      );
    } else {
      console.log(
        "borrowBorrowed: ",
        "You're free to borrow any book of your choice"
      );
    }
  });
};
borrowBorrowedBook("Ant Ages");
borrowBorrowedBook("sword night");

const showAvailableAndUnavailableBooks = (title) => {
  return bookLibrary.map((book) => {
    if (book.title === title && book.status === true) {
      console.log("Available Books: ", { ...bookLibrary });
    } else {
      console.log("Unavailable Books: ", { ...bookLibrary, status: false });
    }
  });
};
//showAvailableAndUnavailableBooks("Ant Ages");

/* And now a new task: when a book is not available i will like to know more 
information about it.
1. When a book is borrowed i will like to know the date it it borrowed and ideally time also
2. And i will like to know the user's first and last name thta borrowed it 
*/
// Function that track date and time when a book was borrowed
// A function show user names that borrowed it

/*const addBorrowingInfo = (title, firstName, lastName, time, date) => {
  return bookLibrary.find((book) => {
    if (book.title === title && book.status === true) {
      return `${book.title} was borrowed by ${firstName} ${lastName}
by ${time} on ${date}`;
    } else {
      return "No user info about this book";
    }
  });
};
//const otherInfo = ["Anderson", "Michael", "12:34", "10/04/2024"];
addBorrowingInfo("Ant Ages");
/*
const addUserName = {
  firstName: "Anderson",
  lastName: "Michael",
  date: "10/04/2024",
  time: "12:34",

  addBorrowingInfo: function (title) {
    return bookLibrary.find((book) => {
      if (book.title === title && book.status === true) {
        return `${book.title} was borrowed by ${this.firstName} ${this.lastName}
by ${this.time} on ${this.date}`;
      } else {
        return "No user info about this book";
      }
    });
  },
*/
//console.log("ADD USER: ", addUserName.addBorrowingInfo("Ant Ages"));

/*const addBorrowingInfo1 = (title) => {
  return bookLibrary.find((book) => {
    if (book.title === title && book.status === true) {
      console.log({ book, ...userNames, date: new Date() });
    } else {
      console.log("No personal info");
    }
  });
};
addBorrowingInfo1("Ant Ages");
console.log(firstName);
/*const bookInfo = (title) => {
  return bookLibrary.map((book) => {
    if (book.title === title && book.status === false) {
      return {
        ...bookLibrary,
        ...userNames,
        date: new Date(),
      };
    } else {
      return "there's no info concerning this book";
    }
  });
};
console.log("Book Info: ", bookInfo("Ant Ages"));

/*const collectionsOfObject = {
  school: "winners model",
  location: "irete",
  attended: true,
};

arrayToPushSchools.push(collectionsOfObject);

const arrayToPushSchools = [];
const collectionsOfObject = ({ school, location, attended }) => {
  return arrayToPushSchools.push({ school, location, attended });
};
collectionsOfObject({
  school: "winners model",
  location: "irete",
  attended: true,
});
const mapSchool = (school) => {
  return arrayToPushSchools.find((data) => {
    if (data.school === school && data.attended === true) {
      console.log("available school:", data);
    } else {
      console.log("Unavailable school:", {
        ...arrayToPushSchools,
        attended: false,
      });
    }
  });
};
mapSchool("winners model");
*/

const library = [];

const addBook = ({ title, author, isAvailable }) => {
  return library.push({ title, author, isAvailable });
};
addBook({ title: "ant ages", author: "Michael", isAvailable: true });
addBook({
  title: "things fall apart",
  authur: "Chinua Achebe",
  isAvailable: true,
});
addBook({ title: "sword night", authur: "Bernard", isAvailable: true });

const borrowBook = (title, firstName, lastName, date) => {
  const book = library.find((book) => {
    return book.title === title && book.isAvailable === true;
  });

  if (book && book.isAvailable) {
    const updateBook = library.map((book) => {
      return book.title === title
        ? library.push({
            ...book,
            isAvailable: false,
            user: { firstName, lastName, date },
          })
        : `${book.title} not found or have been borrowed`;
    });
    return updateBook;
  }
};

//console.log(borrowBook("ant ages", "ben", "duru", new Date()));
//console.log(borrowBook("sword night", "Dappa", "Schemadtmann", new Date()));
//console.log(borrowBook("things fall apart", "emma", "duru", new Date()));
//console.log(library);
