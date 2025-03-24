"use strict";
// Data
const account1 = {
  owner: "Duru Daniel",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2,
  pin: 1111,
  type: "premium",
};

const account2 = {
  owner: "Paul Chukwuebuka",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
  type: "premium",
};

const account3 = {
  owner: "Emmanuel Duru",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
  type: "moderate",
};

const account4 = {
  owner: "David Uche",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
  type: "basics",
};

const accounts = [account1, account2, account3, account4];
/************* SIMPLE ARRAY METHODS *************/

/*********** THE ARRAY SLICE METHOD ************/

let arr = ["a", "b", "c", "d", "e"];
//console.log(arr.slice(2, 4));
//console.log(arr.slice(2));
//console.log(arr.slice(1, -2));
//console.log(arr.slice(-2));

/************ THE ARRAY SPLICE METHOD **********/

//arr.splice(-1);
//console.log(arr);
//arr.splice(1, 2);
//console.log(arr);

/********** THE ARRAY REVERSE METHOD *********/
const arr2 = ["j", "i", "h", "g", "f"];
console.log(arr2.reverse());

/********* THE ARRAY CONCAT METHOD **********/
const letters = arr.concat(arr2);
console.log(letters);

/********* THE ARRAY AT METHOD ************/

const arrs = [23, 45, 3];
console.log(arrs.at(1));
/***************************************** */

/******** THE FOREACH METHOD ***********/
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//for (const movement of movements) {
for (const [index, movement] of movements.entries()) {
  if (movement > 0) {
    //console.log(`Movement ${index + 1}: You deposited ${Math.abs(movement)}`);
  } else {
    //console.log(`Movement ${index + 1}: You withdrew ${Math.abs(movement)}`);
  }
}

console.log("-----forEach METHOD-----");

movements.forEach(function (movement, i, arr) {
  if (movement > 0) {
    //console.log(`Movement ${i + 1}: You deposited ${Math.abs(movement)}`);
  } else {
    //console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
  }
});

/*********** FOREACH WITH MAPS AND SETS ****************/
// MAPS
const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound Sterling"],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

// SETS
const currenciesUnique = new Set(["USD", "GBP", "USD", "EUR", "EUR"]);
//console.log(currenciesUnique);
currenciesUnique.forEach(function (value, _, map) {
  //console.log(`${value}: ${value}`);
  //console.log(map);
});

/***************************CODING CHALLANGES*******************/

//const dogsKate = [4, 1, 15, 8, 3];
//const dogsJulia = [3, 5, 2, 12, 7];
//const dogsJulia2 = [9, 16, 6, 8, 3];
//const dogsKate2 = [10, 5, 6, 1, 4];

const checkDogs = function (dogsJulia, dogsKate) {
  const dogsJuliaCorrected = dogsJulia.slice();
  dogsJuliaCorrected.splice(0, 1);
  dogsJuliaCorrected.splice(-2);
  const joinDogs = dogsJuliaCorrected.concat(dogsKate);
  console.log("-------------------------------------------");
  joinDogs.forEach(function (age, i) {
    if (age >= 3) {
      console.log(
        `Dog number ${i + 1} is an adult 🐕‍🦺, and is ${age} years old ${
          age < 3 ? "❌" : "✅"
        }`
      );
    } else {
      console.log(
        `Dog number ${i + 1} is a puppy 🐶, and is ${age} years old ${
          age < 3 ? "❌" : "✅"
        }`
      );
    }
  });
};

checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
checkDogs([4, 1, 15, 8, 3], [10, 5, 6, 1, 4]);

const calcAverageHumanAge = function (dogsAges) {
  const humanAge = dogsAges.map((age) => (age <= 2 ? age * 2 : 16 + age * 4));
  const adult = humanAge.filter((age) => age >= 18);
  const average = adult.reduce((acc, age) => acc + age / adult.length, 0);
  return Math.round(average);
};

console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));

const calcAverageHumanAge2 = function (dogs) {
  const computeDogsToHumanAge = dogs
    .map((dogsAge) => (dogsAge <= 2 ? dogsAge * 2 : 16 + dogsAge * 4))
    .filter((dogsAge) => dogsAge >= 18)
    .reduce((acc, age, i, arr) => {
      return acc + age / arr.length;
    }, 0);
  return Math.round(computeDogsToHumanAge);
};
console.log(calcAverageHumanAge2([5, 2, 4, 1, 15, 8, 3]));
console.log(calcAverageHumanAge2([16, 6, 10, 5, 6, 1, 4]));
/*
const ages = function (dogs) {
  let humanAges;
  return dogs.map((dogsAge) => {
    //console.log(dogsAge);
    if (dogsAge <= 2) return (humanAges = 2 * dogsAge);
    else return (humanAges = 16 + dogsAge * 4);
  });
};
console.log("DOGS AGE:", ages([5, 2, 4, 1, 15, 8, 3]));
*/

const breeds = [
  {
    breed: "German Shepherd",
    averageWeight: 32,
    activities: ["fetch", "swimming"],
  },
  {
    breed: "Dalmatian",
    averageWeight: 24,
    activities: ["running", "fetch", "agility"],
  },
  {
    breed: "Labrador",
    averageWeight: 28,
    activities: ["fetch", "swimming"],
  },
  {
    breed: "Beagle",
    averageWeight: 12,
    activities: ["fetch", "digging"],
  },
  {
    breed: "Husky",
    averageWeight: 26,
    activities: ["running", "agility", "swimming"],
  },
  {
    breed: "Bulldog",
    averageWeight: 36,
    activities: ["sleeping"],
  },
  {
    breed: "Poodle",
    averageWeight: 18,
    activities: ["fetch", "agility"],
  },
];
// 1.
const huskyWeight = breeds.find((dogs) => dogs.breed === "Husky").averageWeight;

console.log("Husky Weight", huskyWeight);

// 2.
const dogBothActivities = breeds.find(
  (dogs) =>
    dogs.activities.includes("running") && dogs.activities.includes("fetch")
).breed;
console.log("Dogs with both activities:", dogBothActivities);

// 3.
const allActivities = breeds.flatMap((dogs) => dogs.activities);
console.log(allActivities);

// 4.
const uniqueActivities = new Set([...allActivities]);
console.log(uniqueActivities);

// 5.
const swimmingAdjacent = [
  ...new Set(
    breeds
      .filter((dogs) => dogs.activities.includes("swimming"))
      .flatMap((dogs) => dogs.activities)
      .filter((activity) => activity !== "swimming")
  ),
];
console.log(swimmingAdjacent);

// 6.
const averageWeights = breeds.every((dog) => dog.averageWeight >= 10);
console.log(averageWeights);

// 7.
const active = breeds.some((dogs) => dogs.activities.length >= 3);
console.log(active);

// 8. BONUS
const averageHeaviest = breeds
  .filter((dogs) => dogs.activities.includes("fetch"))
  .map((dogs) => dogs.averageWeight);

const fetchHeaviestBreed = Math.max(...averageHeaviest);
console.log(fetchHeaviestBreed);

// challange 4

const dogs = [
  { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
  { weight: 8, curFood: 200, owners: ["Matilda"] },
  { weight: 13, curFood: 275, owners: ["Sarah", "John", "Leo"] },
  { weight: 18, curFood: 244, owners: ["Joe"] },
  { weight: 32, curFood: 340, owners: ["Michael"] },
];
// 1.
dogs.forEach((dogs) => (dogs.recFood = Math.floor(dogs.weight ** 0.75 * 28)));
console.log(dogs);
// 2.
const SarahDog = dogs.find((owner) => owner.owners.includes("Sarah"));
console.log(
  `The dog is eating too ${
    SarahDog.curFood > SarahDog.recFood ? "much" : "little"
  }`
);
// 3.
const ownerTooMuch = dogs
  .filter((dogs) => dogs.curFood > dogs.recFood)
  .flatMap((dogs) => dogs.owners);
console.log(ownerTooMuch);
// 4.
const ownerTooLitte = dogs
  .filter((dogs) => dogs.curFood <= dogs.recFood)
  .flatMap((dogs) => dogs.owners);
console.log(ownerTooLitte);
// 5.
const exactlyAmountOfFood = dogs.some((dogs) => dogs.curFood === dogs.recFood);
console.log(exactlyAmountOfFood);
//6.
const checkEatingOkay = (dogs) =>
  dogs.curFood < dogs.recFood * 1.1 && dogs.curFood > dogs.recFood * 0.9;
const okayAmountOfFood = dogs.every((dogs) => checkEatingOkay(dogs));
console.log(okayAmountOfFood);

// 7.
const eatingOkayFood = dogs.filter(checkEatingOkay);
console.log(eatingOkayFood);
// 8.
const groupDogsData = Object.groupBy(dogs, (data) => {
  const dogsData = data.curFood;
  if (dogsData === data.recFood) return "Exact";
  if (dogsData > data.recFood) return "too-much";
  if (dogsData < data.recFood) return "too-little";
});
console.log(groupDogsData);
// 9.

const groupByOwner = Object.groupBy(
  dogs,
  (dog) => `Dogs with ${dog.owners.length}-Owners`
);
console.log(groupByOwner);

// 10.
const sortRecFood = dogs.toSorted((a, b) => a.recFood - b.recFood);
console.log(sortRecFood);
/************************** DATA TRANSFORMATION: map, filter and reduce */

// MAP METHODS

const movements2 = [200, 450, -400, 3000, -650, -130, 70, 1300];
// let's assume that the movements are in eur and we wanna convert them to usd, knowing well that 1 eur is 1.1 usd
const eurToUsd = movements2.map((value) => Math.abs(value * 1.1));
//console.log(eurToUsd);

const movements2Description = movements2.map(
  (mov, i, arr) =>
    `movement ${i + 1}: You ${mov > 0 ? "deposited" : "withdrew"} ${Math.abs(
      mov
    )}$`
);
//console.log(movements2Description);

// FILTER METHOD

const deposits = movements2.filter((value) => value >= 0);
//console.log(deposits);

const withdrawals = movements2.filter((value) => value < 0);
//console.log(withdrawals);
const pushWithdawals = [];
for (const mov of movements2) {
  if (mov < 0) pushWithdawals.push(mov);
}
//console.log(pushWithdawals);

// REDUCE METHOD

const balance = movements2.reduce((acc, cur, i, arr) => {
  return acc + cur;
}, 0);
//console.log(balance);

let balance2 = 0;
for (const mov of movements2) {
  balance2 += mov;
}
//console.log(balance2);

const max = movements2.reduce((acc, mov) => {
  if (acc > mov) return acc;
  else return mov;
}, movements2[0]);
//console.log(max);

/*************** POWER OF CHAIINING ARRAY METHODS ***************/

const convertToUsd = movements2
  .filter((mov) => mov > 0)
  .map((mov) => mov * 1.1)
  .reduce((acc, mov) => acc + mov, 0);

//console.log(convertToUsd);

/******************** THE FIND METHOD *********************/

const firstWithdrawal = movements2.find((mov) => mov < 0);
//console.log(firstWithdrawal);

const getAccountOwner = accounts.find(
  (user) => user.owner === "Paul Chukwuebuka"
);
//console.log(getAccountOwner);
const getAccountOwner2 = [];
for (const acc of accounts) {
  //console.log(acc);
  getAccountOwner2.push(acc.owner === "Paul Chukwuebuka");
}

const arrTofind = [1, 2, 3, 4, 5];

//console.log(getAccountOwner);

/******************* THE FINDLAST AND THE FINDLASTINDEX METHOD ***********************/
//FINDLAST METHOD
//console.log(movements2);

const lastWithdrawal = movements2.findLast((mov) => mov < 0);
//console.log(lastWithdrawal);

const latestlargeMovementsIndex = movements2.findLastIndex(
  (mov) => Math.abs(mov) > 100
);

//console.log(latestlargeMovementsIndex);
/*console.log(
  `Your lastest large movement was ${
    movements2.length - latestlargeMovementsIndex
  } movements ago`
);

/********************* SOME AND EVERY METHODS ********************/
//SOME
const checkForSomeDeposit = movements2.some((mov) => mov > 0);
//console.log(checkForSomeDeposit);

//EVERY
//console.log(movements2.every((mov) => mov > 0));
//console.log(account4.movements.every((mov) => mov > 0));

/******************* FLAT AND FLAT ARRAY METHOD ********************/
// FLAT
const arrToFlat = [1, 2, 5, 6, [6, 78, 9], [12, 3], 9];

//console.log(arrToFlat.flat());

const arrDeeper = [
  1,
  3,
  4,
  5,
  [12, 5, 6, [1, 89, 0], 3],
  [12, 4, 5, [12, 3, 5, 6, [12, 78]]],
  90,
];

//console.log(arrDeeper.flat(10));

const accountMovements = accounts
  .map((acc) => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0);
//console.log(accountMovements);

// FLAPMAP()
const flatMapAccMovements = accounts
  .flatMap((acc) => acc.movements)
  .reduce((acc, mov) => acc + mov, 0);

//console.log(flatMapAccMovements);

/*****************SORTING OF AN ARRAY***************/
// with string
const owners = ["gregor", "Gregor", "michael", "gregoa", "willy"];

//console.log(owners.sort());

//with numbers

//console.log(movements2);
//console.log(movements2.sort());

// if we return < 0, A will be sorted before B
// if we return > 0, B will be sorted before A

// sort in ascending order
const sortAscendingMov = movements2.sort((a, b) => a - b);
//console.log(sortAscendingMov);
/*
const sortData = [{
  name: "jskjskjsj",
  age: 13,
  
}]
  sort age using ascending and descending order
// sort in descending order
const sortDescendingMov = movements2.sort((a, b) => b - a);
//console.log(sortDescendingMov);

/**************** ARRAY GROUPING *****************/

const arrayGrouping = Object.groupBy(movements2, (movement) =>
  movement >= 0 ? "Deposits" : "Withdrawals"
);
//console.log(arrayGrouping);

const groupAccountMovements = Object.groupBy(accounts, (account) => {
  const movementAcc = account.movements.length;

  if (movementAcc >= 8) return "Very active";
  if (movementAcc >= 4) return " Active";
  if (movementAcc >= 1) return "Moderate";
  return "Inactive";
});
//console.log(groupAccountMovements);

const groupAcc = Object.groupBy(accounts, (account) => account.type);
//console.log(groupAcc);

/****************** WAYS OF CREATING AND FILLIING ARRAYS PROGRAMMATICALLY *******************/

const num = new Array(3).fill(4);
//console.log(num);

// FROM METHOD

const fillDice = Array.from({ length: 100 }, (_, i) => i + 1);
//console.log(fillDice);

/***************** NON-DESTRUCTIVE ALTERNATIVES: TOREVERSED, TOSORTED, TOSPLICED *********************/
// toReversed
//console.log(movements2);

const reversedMov = movements2.toReversed();
//console.log(reversedMov);
//console.log(movements2);

// toSorted, sort(), toSplice splice()

// with
/*movements2[1] = 400;
console.log(movements2);*/

const newMovements = movements2.with(1, 2000);
//console.log(newMovements);
//console.log(movements2);

/************* MORE ARRAY PRACTICES *************/

//console.log(accounts);

const bankDepositSum = accounts
  .map((acc) => acc.movements)
  .flat()
  .filter((acc) => acc > 0)
  .reduce((acc, mov) => acc + mov, 0);

//console.log(bankDepositSum);

/*2.
const numDepositOver1000 = accounts
  .flatMap((acc) => acc.movements)
  .filter((mov) => mov >= 1000).length;
console.log(numDepositOver1000);
*/
// getting deposits thats over 1000 using reduce method
const numDepositOver1000 = accounts
  .flatMap((acc) => acc.movements)
  .reduce((count, cur) => (cur >= 1000 ? count + 1 : count), 0);
//console.log(numDepositOver1000);
/*
let as = 10;
const bs = as//++;
console.log(bs) // 10;
console.log(as) // 11;
*/
/*
let a = 10;
const b = ++a;
console.log(b); // 11
console.log(a); // 11
*/

// 3. sum of deposit and withdrawal

const sums = accounts
  .flatMap((acc) => acc.movements)
  .reduce(
    (acc, cur) => {
      cur > 0 ? (acc.deposit += cur) : (acc.withdrawal += cur);
      return acc;
    },
    { deposit: 0, withdrawal: 0 }
  );

//console.log(sums);

// 4.
//converting strings to title case => this a nice title ---> This Is a Nice Title

const convertTitleCase = function (title) {
  const exception = ["a", "an", "the", "and", "but", "or", "on", "in", "with"];

  const titleCase = title
    .toLowerCase()
    .split(" ")
    .map((word) =>
      exception.includes(word)
        ? word
        : word[0].toUpperCase().concat(word.slice(1))
    )
    .join(" ");
  return titleCase.replace(titleCase[0], titleCase[0].toUpperCase());
};
//console.log(convertTitleCase("this is a nice title"));
//console.log(convertTitleCase("this a LONG title but not too long"));
//console.log(convertTitleCase("but here is another title with an EXAMPLE"));
