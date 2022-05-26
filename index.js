// user vs computer
// computer needs to be a random
// return winner
// rock beats scissor
// scissor beats paper
// paper beats rock;
"use strict";

// console.log(round("rock"));
// function playRoundvalue() {
//   let input = prompt("Please Enter either rock, paper, or scissor");
//   return round(input);
// }
// console.log(playRoundvalue());

// computer function
function computerPlay1(computerPlay) {
  const array = ["rock", "paper", "scissor"];
  computerPlay = array[Math.floor(Math.random() * array.length)];
  return computerPlay;
}

// game functionality
function game(PlayerSelection, computerPlay) {
  // first randomize the computer play
  // playerSelected.toLowerCase()
  computerPlay = computerPlay1();

  // conditions
  if (
    PlayerSelection === "rock" ||
    PlayerSelection === "Rock" ||
    PlayerSelection === "ROCK"
  ) {
    if (computerPlay === "rock") {
      return `it's a tie because ${computerPlay} equals to ${PlayerSelection} , so let's play again`;
    } else if (computerPlay === "paper") {
      return `Computer is the winner because ${computerPlay} beats ${PlayerSelection} `;
    } else if (computerPlay === "scissor") {
      return `Player is the winner the because ${PlayerSelection} beats ${computerPlay}`;
    }
  } else if (
    PlayerSelection === "scissor" ||
    PlayerSelection === "Scissor" ||
    PlayerSelection === "SCISSOR"
  ) {
    if (computerPlay === "scissor") {
      return `it's a tie because ${computerPlay} equals to ${PlayerSelection} , so let's play again`;
    } else if (computerPlay === "paper") {
      return `Computer is the loser because ${computerPlay} can't beat ${PlayerSelection} `;
    } else if (computerPlay === "rock") {
      return `Player is the loser because ${PlayerSelection} can't beat ${computerPlay}`;
    }
  } else if (
    PlayerSelection === "paper" ||
    PlayerSelection === "Paper" ||
    PlayerSelection === "PAPER"
  ) {
    if (computerPlay === "paper") {
      return `it's a tie because ${computerPlay} equals to ${PlayerSelection} , so let's play again`;
    } else if (computerPlay === "scissor") {
      return `Computer is the winner because ${computerPlay} beats ${PlayerSelection} `;
    } else if (computerPlay === "rock") {
      return `Player is the winner the because ${PlayerSelection} beats ${computerPlay}`;
    }
  }
}
// =========================================================
// round function
function round() {
  let computerpoints = 0;
  let Playerpoints = 0;
  let tie = 0;

  // calling the  game
  let logic = game(prompt("Please Enter either rock, paper, or scissor"));
  for (let i = 1; i < 6; i++) {
    console.log(logic);
    if (logic.includes("Player is the winner")) {
      Playerpoints++;

      console.log(Playerpoints);
    }
    if (logic.includes("Computer is the winner")) {
      computerpoints++;

      console.log(computerpoints);
    }
    if (logic.includes("equals")) {
      tie++;
      console.log(tie);
    }
    /////
    if (i !== 5)
      logic = game(prompt("Please Enter either rock, paper, or scissor"));
  }

  return computerpoints > Playerpoints
    ? `Computer wins this round: ${computerpoints} out 5`
    : computerpoints < Playerpoints
    ? `Player wins this round: ${Playerpoints} out 5`
    : `It's a tie of ${tie} rounds, nobody wins`;
}
console.log(round());
