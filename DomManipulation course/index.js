function printBros(names) {
  return `${names[0].toUpperCase().concat(names.slice(1))} is my brother`;
}
/*
console.log(printBros("uchechukwu"));

console.log(document.querySelector(".message").textContent);

document.querySelector(".message").textContent = "🎉 Correct number";

document.querySelector(".score").textContent = 10;

document.querySelector(".scores").textContent = 13;

console.log((document.querySelector(".guess").value = 20));

document.querySelector(".guess").value = 20;


*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

let score = 20;
let highScore = 0;
document.querySelector(".btn-check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  if (!guess) {
    /*document.querySelector(".message").textContent = "⛔ No Number";*/
    displayMessage("⛔ No Number");
  } else if (guess === secretNumber) {
    /* when the number is correct */
    /*document.querySelector(".message").textContent = "🎉 Correct number";*/
    displayMessage("🎉 Correct number");
    document.querySelector(".scores").textContent = secretNumber;
    score = score + 1;
    document.querySelector(".score").textContent = score;

    document.querySelector("body").style.backgroundColor = "#60b347";

    document.querySelector(".scores").style.width = "20rem";

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      /*document.querySelector(".message").textContent =
        guess > secretNumber
          ? "📈 Too High Not in 'RANGE'"
          : "📉 Too Low Not in 'RANGE'";*/
      displayMessage(
        guess > secretNumber
          ? "📈 Too High Not in 'RANGE'"
          : "📉 Too Low Not in 'RANGE'"
      );
      score = score - 1;
      document.querySelector(".score").textContent = score;
    } else {
      /*document.querySelector(".message").textContent = "🥺 Game Over!";*/
      displayMessage("🥺 Game Over!");
      document.querySelector(".score").textContent = 0;
    }
  }
  /*else if (guess > secretNumber) {
    /* when the number is high 
    if (score > 1) {
      document.querySelector(".message").textContent =
        "📈 Too High Not in 'RANGE'";
      score = score - 1;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "🥺 Game Over!";
      document.querySelector(".score").textContent = 0;
    }
  } else if (guess < secretNumber) {
    /* when the number is low 
    if (score > 1) {
      document.querySelector(".message").textContent =
        "📉 Too Low Not in 'RANGE'";
      score = score - 1;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "🥺 Game Over!";
      document.querySelector(".score").textContent = 0;
    }
  } */
});

document.querySelector(".button-again").addEventListener("click", function () {
  score = 20;
  /*highScore = 0;*/
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  /*document.querySelector(".message").textContent = "Start guessing...";*/
  displayMessage("Start guessing...");
  document.querySelector(".score").textContent = score;
  /* document.querySelector(".highscore").textContent = highScore;*/
  document.querySelector(".scores").textContent = "?";
  document.querySelector(".scores").style.width = "10rem";
  document.querySelector("body").style.backgroundColor = "#fff";
  document.querySelector(".guess").value = "";
});
