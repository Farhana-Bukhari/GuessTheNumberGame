"use strict";

let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};
const displayScore = function (score) {
  document.querySelector(".score").textContent = score;
};
const displayInput = function (input) {
  document.querySelector(".input").style.backgroundColor = input;
};

document.querySelector(".button_check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".input").value);
  if (!guess) {
    if (score > 1) {
      // document.querySelector(".message").textContent = "⛔no number!";
      displayMessage("⛔no number!");
      score--;
      // document.querySelector(".score").textContent = score;
      displayScore(score);
    } else {
      // document.querySelector(".message").textContent = "you lost the game";
      displayMessage("you lost the game");
      // document.querySelector(".score").textContent = 0;
      displayScore(0);
    }
  } else if (guess === number) {
    // document.querySelector(".message").textContent = "🎉correct number!";
    displayMessage("🎉correct number!");
    document.querySelector(".question_mark").textContent = number;

    document.querySelector(".mainn").style.backgroundColor = "#60b347";
    // document.querySelector(".input").style.backgroundColor = "#60b347";
    displayInput("#60b347");
    document.querySelector(".question_mark").style.width = "12.5rem";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  }

  //guess is wrong
  else if (guess !== number) {
    if (score > 1) {
      // document.querySelector(".message").textContent =
      // guess > number ? "!📈too high" : "!📉too low";
      displayMessage(guess > number ? "!📈too high" : "!📉too low");
      score--;
      //document.querySelector(".score").textContent = score;
      displayScore(score);
    } else {
      // document.querySelector(".message").textContent = "you lost the game";
      displayMessage("you lost the game");
      // document.querySelector(".score").textContent = 0;
      displayScore(0);
    }
    //   else if (guess > number) {
    //     if (score > 1) {
    //       document.querySelector(".message").textContent = "!📈too high";
    //       score--;
    //       document.querySelector(".score").textContent = score;
    //     } else {
    //       document.querySelector(".message").textContent = "you lost the game";
    //       document.querySelector(".score").textContent = 0;
    //     }
    //   } else if (guess < number) {
    //     if (score > 1) {
    //       document.querySelector(".message").textContent = "!📉too low";
    //       score--;
    //       document.querySelector(".score").textContent = score;
    //     } else {
    //       document.querySelector(".message").textContent = "you lost the game";
    //       document.querySelector(".score").textContent = 0;
    //     }
  }
});
document.querySelector(".khushboo").addEventListener("click", function () {
  score = 20;
  number = Math.trunc(Math.random() * 20) + 1;
  // document.querySelector(".message").textContent = "start guessing...";
  displayMessage("start guessing...");
  document.querySelector(".question_mark").textContent = "?";
  //document.querySelector(".score").textContent = score;
  displayScore(score);
  document.querySelector(".input").value = "";
  document.querySelector(".mainn").style.backgroundColor = "#222";
  //document.querySelector(".input").style.backgroundColor = "#000";
  displayInput("#000");
  document.querySelector(".question_mark").style.width = "6.25rem";
});
