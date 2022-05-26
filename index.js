// user vs computer
// computer needs to be a random
// return winner
// rock beats scissor
// scissor beats paper
// paper beats rock;
"use strict";

function playgame() {
  return round();
}
// call this function if you would like to play;
// console.log(playgame());

// computer value function
function computerPlay1(computerPlay) {
  // first randomize the computer play
  const array = ["rock", "paper", "scissor"];
  computerPlay = array[Math.floor(Math.random() * array.length)];
  return computerPlay;
}

// game functionality
function game(PlayerSelection, computerPlay) {
  computerPlay = computerPlay1();

  // conditions for game
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
      return `Player is the winner because ${computerPlay} can't beat ${PlayerSelection} `;
    } else if (computerPlay === "rock") {
      return `Computer is the winner because ${PlayerSelection} can't beat ${computerPlay}`;
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
// round function to keep rack ofwho wins each round
function round() {
  let computerpoints = 0;
  let Playerpoints = 0;
  let tie = 0;

  // calling the game so player can pick a move
  let logic = game(prompt("Please Enter either rock, paper, or scissor"));
  // number of rounds
  for (let i = 1; i < 6; i++) {
    console.log(logic);
    // to check wether player or computer wins
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
    // stop calling the function for more than five times
    if (i !== 5)
      logic = game(prompt("Please Enter either rock, paper, or scissor"));
  }
  // compare points
  return computerpoints > Playerpoints
    ? `Computer wins this round: ${computerpoints} out 5`
    : computerpoints < Playerpoints
    ? `Player wins this round: ${Playerpoints} out 5`
    : `It's a tie of ${tie} rounds, nobody wins`;
}
