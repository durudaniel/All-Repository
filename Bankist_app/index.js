"use strict";

// BANKIST APP

// Data
const account1 = {
  owner: "Duru Daniel",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2,
  pin: 1111,

  movementsDate: [
    "2025-11-18T21:31:17.178Z",
    "2025-12-23T07:42:02.383Z",
    "2025-01-28T09:15:04.984Z",
    "2024-04-01T10:17:24.185Z",
    "2024-05-08T14:11:59.684Z",
    "2023-07-26T17:01:17.194Z",
    "2025-07-28T23:36:17.929Z",
    "2025-08-01T10:51:36.790Z",
  ],
  currency: "EUR",
  locale: "pt-PT",
};

const account2 = {
  owner: "Paul Chukwuebuka",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDate: [
    "2025-11-18T13:15:33.035Z",
    "2025-11-23T09:48:36.867Z",
    "2025-12-28T06:04:23.907Z",
    "2024-01-01T14:18:46.235Z",
    "2024-02-08T16:33:06.386Z",
    "2023-04-27T14:43:26.374Z",
    "2025-06-11T18:49:59.371Z",
    "2025-07-12T12:01:20.894Z",
  ],
  currency: "USD",
  locale: "en-US",
};

const account3 = {
  owner: "Emmanuel Duru",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,

  movementsDate: [
    "2025-11-18T21:31:17.178Z",
    "2025-12-23T07:42:02.383Z",
    "2025-01-28T09:15:04.984Z",
    "2024-04-01T10:17:24.185Z",
    "2024-05-08T14:11:59.684Z",
    "2023-05-27T17:01:17.194Z",
    "2025-07-11T23:36:17.929Z",
    "2025-07-12T10:51:36.790Z",
  ],
  currency: "NGN",
  locale: "en-NG",
};

const account4 = {
  owner: "David Uche",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,

  movementsDate: [
    "2025-11-18T13:15:33.035Z",
    "2025-11-23T09:48:36.867Z",
    "2025-12-28T06:04:23.907Z",
    "2024-01-01T14:18:46.235Z",
    "2024-02-08T16:33:06.386Z",
    "2023-04-27T14:43:26.374Z",
    "2025-06-11T18:49:59.371Z",
    "2025-07-12T12:01:20.894Z",
  ],
  currency: "GBP",
  locale: "en-GB",
};

const accounts = [account1, account2, account3, account4];

// ELEMENTS
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance_value");
const labelSumIn = document.querySelector(".summary_value_in");
const labelSumOut = document.querySelector(".summary_value_out");
const labelSumInterest = document.querySelector(".summary_value_interest");

const containerApp = document.querySelector(".app");
const containerMovement = document.querySelector(".movements");

const btnLogin = document.querySelector(".login_btn");
const btnTransfer = document.querySelector(".form_btn_transfer");
const btnLoan = document.querySelector(".form_btn_loan");
const btnClose = document.querySelector(".form_btn_close");

const btnSort = document.querySelector(".btn_sort");
const inputLoginUsername = document.querySelector(".login_input_user");
const inputLoginPin = document.querySelector(".login_input_pin");
const inputTransferTo = document.querySelector(".form_input_to");
const inputTransferAmount = document.querySelector(".form_input_amount");
const inputLoanAmount = document.querySelector(".form_input_loan_amount");
const inputCloseUsername = document.querySelector(".form_input_user");
const inputClosePin = document.querySelector(".form_input_pin");

const labelTimer = document.querySelector(".timer");

const formatMovementDate = function (date, locale) {
  const calcDaysPassed = (day1, day2) =>
    Math.round(Math.abs(day1 - day2) / (1000 * 60 * 60 * 24));

  const daysPassed = calcDaysPassed(new Date(), date);
  //console.log(daysPassed);
  const options = {
    hour: "numeric",
    minute: "numeric",
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    weekday: "short",
  };

  if (daysPassed === 0) return "Today";
  if (daysPassed === 1) return "Yesterday";
  if (daysPassed <= 7) return `${daysPassed} Days ago`;
  else {
    //const getDate = `${date.getDate()}`.padStart(2, 0);
    //const getMonth = `${date.getMonth() + 1}`.padStart(2, 0);
    //const getYear = date.getFullYear();
    return Intl.DateTimeFormat(locale, options).format(date);
  }
};

const formatCur = function (value, locale, currency) {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency,
  }).format(value);
};

const displayMovements = function (acc, sort = false) {
  containerMovement.innerHTML = "";

  const movs = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;
  movs.forEach(function (mov, i) {
    const type = mov > 0 ? "deposit" : "withdrawal";
    const date = new Date(acc.movementsDate[i]);
    const displayDate = formatMovementDate(date, acc.locale);

    const formattedMov = formatCur(mov, acc.locale, acc.currency);

    const html = `
         <div class="movements_row">
              <div class="movements_type movements_type_${type}">${type}</div>
               <div class="movements_date">${displayDate}</div>
              <div class="movements_value">${formattedMov}</div>
        </div>
        `;

    containerMovement.insertAdjacentHTML("afterbegin", html);
  });
};

//displayMovements(account1.movements);

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);

  const formattedMov = formatCur(acc.balance, acc.locale, acc.currency);
  /*const formattedMov = new Intl.NumberFormat(acc.locale, {
    style: "currency",
    currency: acc.currency,
  }).format(acc.balance);
  */
  labelBalance.textContent = `${formattedMov}`;
};

//calcDisplayMovements(account1.movements);

const calcDisplaySummary = function (acc) {
  const income = acc.movements
    .filter((mov) => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = formatCur(income, acc.locale, acc.currency);
  const outcome = acc.movements
    .filter((mov) => mov < 0)
    .reduce((acc, mov) => acc + Math.abs(mov), 0);
  labelSumOut.textContent = formatCur(outcome, acc.locale, acc.currency);
  /*
  const interest = income * account1.interestRate;
  labelSumInterest.textContent = `${interest}$`;
  */

  const interest = acc.movements
    .filter((mov) => mov > 0)
    .map((deposit) => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      //console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = formatCur(interest, acc.locale, acc.currency);
};

//calcDisplaySummary(account1.movements);

const createUserName = function (accs) {
  accs.forEach(function (acc) {
    acc.userName = acc.owner
      .toLowerCase()
      .split(" ")
      .map((value) => value[0])
      .join("");
  });
};
createUserName(accounts);

const updateUi = function (acc) {
  // display movements
  displayMovements(acc);
  //display balance
  calcDisplayBalance(acc);
  //dsiplay summary
  calcDisplaySummary(acc);
};

//log out user timer
const starLogOutTimer = function () {
  const tick = function () {
    const min = String(Math.trunc(time / 60)).padStart(2, 0);
    const sec = String(time % 60).padStart(2, 0);
    // in each call, print the remaining time to Ui
    labelTimer.textContent = `${min}:${sec}`;

    // when 0 secs, stop timer log user out
    if (time === 0) {
      clearInterval(timer);
      containerApp.style.opacity = 0;
      labelWelcome.textContent = `Log in to get started!`;
    }
    // decrease 1 sec
    time--;
  };
  // setting the time to 5min
  let time = 120;
  // call timer every secs
  tick();
  const timer = setInterval(tick, 1000);
  return timer;
};
// EXPERIMENTING WITH INTERNATIONALIZATION API

// EVENTS HANDLERS

let currentAccount, timer;
btnLogin.addEventListener("click", function (e) {
  // prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    (acc) => acc.userName === inputLoginUsername.value.toLowerCase()
  );
  //console.log(currentAccount);

  if (currentAccount?.pin === +inputLoginPin.value) {
    // display ui and welcome message
    containerApp.style.opacity = 100;
    labelWelcome.textContent = `Welcome to grey, ${
      currentAccount.owner.split(" ")[0]
    }!`;
    const now = new Date();
    //const locale = navigator.language;
    const options = {
      hour: "numeric",
      minute: "numeric",
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      weekday: "short",
    };
    labelDate.textContent = new Intl.DateTimeFormat(
      currentAccount.locale,
      options
    ).format(now);
    //const now = new Date();
    //const getDate = `${now.getDate()}`.padStart(2, 0);
    //const getMonth = `${now.getMonth() + 1}`.padStart(2, 0);
    //const getYear = now.getFullYear();
    //const getHour = `${now.getHours()}`.padStart(2, 0);
    //const getMin = `${now.getMinutes()}`.padStart(2, 0);
    //labelDate.textContent = `${getDate}/${getMonth}/${getYear}, ${getHour}:${getMin}`;
    if ((inputLoginPin.value = "")) alert("Please fill out all form");
    // clear the input fields
    inputLoginPin.value = "";
    inputLoginUsername.value = "";
    inputLoginPin.blur();

    if (timer) clearInterval(timer);
    timer = starLogOutTimer();
    // Update UI
    updateUi(currentAccount);
  } else {
    alert("Sorry!!!, account not found");
  }
});

btnTransfer.addEventListener("click", function (e) {
  e.preventDefault();
  const amount = +inputTransferAmount.value;
  const receiveAcc = accounts.find(
    (acc) => acc.userName === inputTransferTo.value
  );
  //console.log(amount, receiveAcc);
  if (
    amount > 0 &&
    receiveAcc &&
    currentAccount.balance >= amount &&
    receiveAcc?.userName !== currentAccount.userName
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiveAcc.movements.push(amount);
    //Add transfer and recievers date
    currentAccount.movementsDate.push(new Date().toISOString());
    receiveAcc.movementsDate.push(new Date().toISOString());
    // Update UI
    updateUi(currentAccount);
    inputTransferAmount.value = "";
    inputTransferTo.value = "";

    // Reset timer
    clearInterval(timer);
    timer = starLogOutTimer();
  }
});

btnLoan.addEventListener("click", function (e) {
  //e.preventDefault();
  const amount = Math.floor(inputLoanAmount.value);

  if (
    amount > 0 &&
    currentAccount.movements.some((mov) => mov >= amount * 0.1)
  ) {
    setTimeout(function () {
      currentAccount.movements.push(amount);
      //update loan date
      currentAccount.movementsDate.push(new Date().toISOString());
      //Update UI
      updateUi(currentAccount);
      // Reset timer
      clearInterval(timer);
      timer = starLogOutTimer();
    }, 4000);
  }
  inputLoanAmount.value = "";
});

btnClose.addEventListener("click", function (e) {
  e.preventDefault();
  //console.log("delete");
  //labelWelcome.textContent = "Login to get started!";
  if (
    inputCloseUsername.value === currentAccount.userName &&
    +inputClosePin.value === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      (acc) => acc.userName === currentAccount.userName
    );

    //console.log(index);

    //keep user logged out
    accounts.splice(index, 1);
    containerApp.style.opacity = 0;
    labelWelcome.textContent = "Log in to get started!";
  }

  inputCloseUsername.value = inputClosePin.value = "";
});

let sorted = false;
btnSort.addEventListener("click", function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
  //displayMovements(currentAccount.movements);
});

//console.log(Math.floor(23.8));
