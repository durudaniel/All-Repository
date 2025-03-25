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
/*const bookLibrary = [];*/

// 1. add new book to the library

const library = [];
const booksCollection = function (title, author, status) {
  return library.push({ title, author, status });
};
booksCollection("A Way Home", "Obi Francis", "unavailable");
booksCollection("Commitments", "Mark Davis", "available");
booksCollection("Thousands", "Williams", "available");
booksCollection("Forever Gold", "Angel Betty", "available");
console.log(library);

// 2. track available books and unavailable books
/*
const trackAvailableBooks = library.filter(
  (book) => book.status === "available"
);

console.log(trackAvailableBooks);

const trackunavailableBooks = library.filter(
  (book) => book.status === "unavailable"
);

console.log(trackunavailableBooks);
*/
const trackAvailableAndUnavailable = Object.groupBy(library, (book) => {
  if (book.status === "available") return "available books";
  if (book.status === "unavailable") return "unavailable books";
});
console.log(trackAvailableAndUnavailable);

// 3. Allow user to borrow books
const allowUserToBorrowBook = function (title, firstName, lastName, date) {
  const borrowBook = library
    .filter((book) => book.title === title && book.status === "available")
    .map((book) => {
      return book.status === "available"
        ? library.push({
            ...book,
            status: "unavailable",
            user: { firstName, lastName, date },
          })
        : `${book.title} has been borrowed`;
    });
  return borrowBook;
};
console.log("-----------borrow books------------");

console.log(library);
allowUserToBorrowBook("Commitments", "derek", "muller", new Date());

// 4. Allow user to return book
const allowUserToReturnBook = function (title, firstName, lastName, date) {
  const returnBook = library
    .filter((book) => book?.title === title && book.status === "unavailable")
    .map((book) => {
      return book.status === "unavailable"
        ? library.push({
            ...book,
            status: "available",
            user: { firstName, lastName, date },
          })
        : `you can't return book that haven't been borrowed`;
    });

  return returnBook;
};
console.log("------------return books------------");
console.log(library);
allowUserToReturnBook("Commitments", "Michael", "Owen", new Date());
allowUserToReturnBook("A Way Home", "Gnabry", "Peters", new Date());

/* ARRAY SORTING EXERCISE */
console.log("-------------------------- sorting array-----------------------");
const sortData = [
  { name: "wilson", age: 13 },
  { name: "william", age: 45 },
  { name: "kassie", age: 20 },
  { name: "katie", age: 20 },
  { name: "michael", age: 17 },
];
// sorting by name

const sortName = function (arr) {
  //const sortArr = arr.map((element) => element);
  const sortArr = arr
    .map((element) => element)
    .sort((a, b) => (a.name > b.name ? 1 : -1));
  return sortArr;
};

console.log(sortName(sortData));

// sorting by age (ASCENDING ORDER)

const sortAgeAscendingOrder = function (arr) {
  const sortArr = arr.map((element) => element).sort((a, b) => a.age - b.age);

  return sortArr;
};

console.log(sortAgeAscendingOrder(sortData));

// sort age in a (descending order)

const sortAgeDescendingOrder = function (arr) {
  const sortArr = arr
    .map((element) => element)
    .sort((a, b) => (b.age > a.age ? 1 : -1));

  return sortArr;
};

console.log(sortAgeDescendingOrder(sortData));
