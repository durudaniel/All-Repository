"use strict";
/****************** FUNCTION: DEFAULT PARAMETER *********************/
const bookings = [];
const createFlightBooking = function (
  flightNum = "PRT23",
  numPassenger = 10,
  price = 200
) {
  const FlightProfit = numPassenger * price;
  const booking = {
    flightNum,
    numPassenger,
    price,
    FlightProfit: `$${Number(FlightProfit)}`,
  };
  //console.log(typeof FlightProfit);
  bookings.push(booking);
  console.log(bookings);
};
//createFlightBooking("NG289");
//createFlightBooking("NG456", 30, 150);

const flight = "NG389";
const passenger = {
  name: "Duru Daniel",
  passport: 1234567843,
};

/*************************** HOW PASSING ARGUMENTS WORKS: VALUE VS. REFERENCES **************************/
const checkIn = function (flightNum, passengers) {
  flightNum = "NG456";
  passengers.name = "Mr." + passengers.name;

  if (passengers.passport === 1234567843) alert("Checked in✅👍");
  else {
    alert("Wrong passport!!");
  }
};
//checkIn(flight, passenger);
//console.log(flight);
//console.log(passenger);

const numeric = { num: 10 };
const randF = function (num) {
  numeric.num = numeric.num * 2;
  if (numeric.num === 20) {
    alert("number is twenty");
  } else {
    alert("number is not twenty");
  }
};
//randF(numeric);
//console.log(numeric);

const newPassport = function (person) {
  return (person.passport = Math.trunc(Math.random() * 1000000000));
};
//console.log(newPassport(passenger));
//checkIn(flight, passenger);

/************* HIGER ORDER FUNCTION: FUNCTIONS ACCEPTING CALLBACK FUNTIONS************************/

const replaceEmptySpace = function (str) {
  return str.replace(/ /g, "").toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(" ");
  return [first.toUpperCase(), ...others].join(" ");
};

const transformerFunction = function (str, fn) {
  //console.log(`Transformed String: ${fn(str)}`);
};

transformerFunction("javaScript is the best", upperFirstWord);

/************** FUNCTION RETURNING FUNCTIONS ******************/

const greet = function (greetings) {
  const [first, last] = greetings.split(" ");
  return [
    first.replace(first[0], first[0].toUpperCase()),
    last.replace(last[0], last[0].toUpperCase()),
  ].join(" ");
};

const returnGreeting = function (message) {
  return greet(message);
};
//console.log(returnGreeting("hello daniel"));

const greeting = function (greetingMessage) {
  return function (name) {
    //console.log(`${greetingMessage} ${name}`);
  };
};

greeting("Hey")("Daniel");

const returnGreeting2 = (greetingMessage) => (name) =>
  //console.log(`${greetingMessage} ${name}`);

  returnGreeting2("hey")("chichi");

/************ THE CALL AND APPLY METHOD *****************/

const lufthansa = {
  airLine: "lufthansa",
  iataCode: "NG",
  booking: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airLine} flight ${this.iataCode}${flightNum}`
    );
    this.booking.push({
      flight: `${this.airLine} flight ${this.iataCode}${flightNum}`,
      name,
    });
  },
};
//lufthansa.book(23, "Daniel Duru");
//lufthansa.book(489, "Chisom Atuonye");
//console.log(lufthansa);
const eurowing = {
  airLine: "eurowings",
  iataCode: "EW",
  booking: [],
};
// CALL METHODS
const book = lufthansa.book;
//does not work
//book.book(234, "Anthony Williams")

//book.call(eurowing, 280, "Anthony Williams");
//console.log(eurowing);
//book.call(lufthansa, 267, "Angel Star");
//console.log(lufthansa);

/************ THE APPLY METHOD *****************/

const flightData = [345, "Gregory Goerge"];

//book.apply(eurowing, flightData);
//console.log(eurowing);

/************ THE BIND METHOD ***************/
const swiss = {
  airLine: "Swiss",
  iataCode: "SW",
  booking: [],
};

const bookEW = book.bind(eurowing);
const bookLF = book.bind(lufthansa);
const bookSW = book.bind(swiss);
//bookEW(156, "Stevenn Gerard");
//console.log(eurowing);
//bookLF(90, "Michael Erling");
//console.log(lufthansa);
//bookSW(146, "Jubrilee James");
//console.log(swiss);

// BIND METHOD WITH EVENT LISTENER
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  //console.log(this);
  //this.planes++;

  console.log(`Total airPlane 🛬: ${this.planes++}`);
};
//lufthansa.buyPlane();
document
  .querySelector(".buy")
  .addEventListener("click", lufthansa.buyPlane.bind(lufthansa));

// Partial application

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVat = addTax.bind(null, 0.23);
console.log(addVat(100));

const addTaxRate = (rate, value) => Math.round(rate * value + value);
const addVat2 = function () {
  return addTaxRate(0.1, 300);
};
console.log(addVat2());

// OR

const addtaxRate2 = (rate) => (value) => value + value * rate;

const addVat3 = addtaxRate2(0.1);
console.log(addVat3(150));

// Coding Challange #1

/*
let's build a simple poll app!


A poll has a question, an array of options from which people can chosose, and an array with the number of replies
for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called "registerNewAnswer" on the "poll" object. The method does 2 things: 
  1.1 Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
       What is your programming language?
       0: JavaScript
       1: Python
       2: Rust
       3: C++
       (write option number)

1.2 Based on the input number, update the answers array. For example, if he option is 3, increase the value At POSITION 3
of the array by 1. Make sure to check if the input is a number and if the number makes sense e.g answer 23 wouldn't
make sense right?!

2. call this method whenever the user clicks on the "Answer poll" btn
3. Create a method "displayResults" which displays the poll results. the method takes a string as an input called (type)
which can be either "string" or an "array". If type is an "Array", simply display the result array as it is, using
console.log(). This should be the default option, if type is "string" display a string like "poll results are
2,3,5,6"

4. Run the display method on the end of each "registerNewAnwser" method call

HINT: Use manyof the tools you learned about in this and the last section

BONUS: Use the "displayResults" methos to display the 2 arrays in the test data. Use the boths "array" and "string"
option. Do NOT put the arrays in the poll object! So what should the this keyword look like in this situation

BONUS TEST DATA 1: [5,2,3]
BONUS TEST DATA 2: [1,5,3,9,6,1]
*/
/*
const poll = {
  question: "What is your programming language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],

  answers: new Array(4).fill(0),

  registerNewAnswer() {
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join("\n")} \n(Write your option)`
      )
    );
    //console.log(answer);

    typeof answer === "number" &&
      answer < this.answers.length &&
      this.answers[answer]++;

    //console.log(this.answers);
    this.displayResults();
    this.displayResults("string");
  },

  displayResults(type = "array") {
    if (type === "array") {
      console.log(this.answers);
    } else if (type === "string") {
      console.log(`Poll Results Are: ${this.answers.join(", ")}`);
    } else {
      console.log("NO Poll Answer");
    }
  },
};
poll.registerNewAnswer();

document
  .querySelector(".answer")
  .addEventListener("click", poll.registerNewAnswer.bind(poll));

/*
const bestFootBaller = {
  question: "Who is the GOAT 🐐.",
  options: ["0 : Messi", "1 : Ronaldo"],
  answers: new Array(2).fill(0),
  promptAnswer(type = "array") {
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join("\n")}\n(choosed any option)`
      )
    );
    typeof answer === "number" &&
      answer < this.answers.length &&
      this.answers[answer]++;
    if (type === "array") console.log(this.answers);
    else if (type === "string")
      console.log(
        answer === 0 && answer === 1
          ? "Messi " + this.answers.join("\n")
          : "Ronaldo " + this.answers.join("\n")
      );
    else {
      console.log("NO POLL ANSWER!!!");
    }
    //this.promptResult();
    //this.promptResult("string");
  },
  /*
  promptResult(type = "array") {
    if (type === "array") console.log(this.answers);
    else if (type === "string")
      console.log(
        answer === 0
          ? "Messi " + this.answers.join("\n")
          : "Ronaldo " + this.answers.join("\n")
      );
    else {
      console.log("NO POLL ANSWER!!!");
    }
  },
  
};

bestFootBaller.promptAnswer("string");
*/
const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};
const booker = secureBooking();
booker();
//booker();
//booker();

let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};
g();
f();

const boardPassengers = function (numOfPassengers, wait) {
  const perGroup = numOfPassengers / 3;

  setTimeout(function () {
    console.log(`We're now boarding all ${numOfPassengers} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);
  console.log(`We will start boarding in ${wait} seconds`);
};

boardPassengers(210, 3);

/********* #Coding Challange ************/

(function () {
  const header = document.querySelector(".header");
  header.style.color = "red";

  document.querySelector(".body").addEventListener("click", function () {
    const header = document.querySelector(".header");
    header.style.color = "blue";
  });
})();
