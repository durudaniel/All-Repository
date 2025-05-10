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

const data = [
  {
    id: 1,
    title: "The Lord of The Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El senor de los anillos",
      chinese: "##",
      french: "Le seigneur des anneaux",
    },
    reviews: {
      goodReads: {
        ratings: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },

      libraryThing: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 457,
      },
    },

    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-0-01",
    author: "Stanislaw lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodReads: {
        ratings: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },

      libraryThing: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 8,
      },
    },

    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodReads: {
        ratings: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },

    id: 4,
    title: "Harry Porter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "##",
      bengali: "##",
      portuguese: "Le seigneur des anneaux",
    },
    reviews: {
      goodReads: {
        ratings: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140025,
      },

      libraryThing: {
        rating: 4.39,
        ratingsCount: 120943,
        reviewsCount: 1400,
      },
    },

    id: 5,
    title: "A Game of Throne",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "fiction", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      korean: "####",
      polish: "Gra o tron",
      french: "A Guerra dos Tremos",
      spanish: "Juogo de tramos",
    },
    reviews: {
      goodReads: {
        ratings: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },

      libraryThing: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1995,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook() {
  return data.find((d) => d.id === id);
}

c;
