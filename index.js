"use strict";

// computer value function
function computerPlay1(computerPlay) {
  // randomize the computer play
  const array = ["rock", "paper", "scissor"];
  computerPlay = array[Math.floor(Math.random() * array.length)];
  return computerPlay;
}
// functionality for when player choose a rock value
function rock(computerPlay, PlayerSelection) {
  if (computerPlay === "rock") {
    return `it's a tie because ${computerPlay} equals to ${PlayerSelection} , so let's play again`;
  } else if (computerPlay === "paper") {
    return `Computer is the winner because ${computerPlay} beats ${PlayerSelection} `;
  } else if (computerPlay === "scissor") {
    return `Player is the winner because ${PlayerSelection} beats ${computerPlay}`;
  }
}
// functionality for when player choose a scissor value
function scissor(computerPlay, PlayerSelection) {
  if (computerPlay === "scissor") {
    return `it's a tie because ${computerPlay} equals to ${PlayerSelection} , so let's play again`;
  } else if (computerPlay === "paper") {
    return `Player is the winner because ${computerPlay} can't beat ${PlayerSelection} `;
  } else if (computerPlay === "rock") {
    return `Computer is the winner because ${PlayerSelection} can't beat ${computerPlay}`;
  }
}
// functionality for when player choose a paper value
function paper(computerPlay, PlayerSelection) {
  if (computerPlay === "paper") {
    return `it's a tie because ${computerPlay} equals to ${PlayerSelection} , so let's play again`;
  } else if (computerPlay === "scissor") {
    return `Computer is the winner because ${computerPlay} beats ${PlayerSelection} `;
  } else if (computerPlay === "rock") {
    return `Player is the winner because ${PlayerSelection} beats ${computerPlay}`;
  }
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
    // return rock functionality
    return rock(computerPlay, PlayerSelection);
  } else if (
    PlayerSelection === "scissor" ||
    PlayerSelection === "Scissor" ||
    PlayerSelection === "SCISSOR"
  ) {
    // return scissor functionality
    return scissor(computerPlay, PlayerSelection);
  } else if (
    PlayerSelection === "paper" ||
    PlayerSelection === "Paper" ||
    PlayerSelection === "PAPER"
  ) {
    // return paper functionality
    return paper(computerPlay, PlayerSelection);
  }
}
// ============================================================================================================
// round function to keep track of who wins each round

// function round(gameLogic) {
//   let logic = game(gameLogic);
//   return logic;
// }

//UI function

function ui() {
  //create buttons
  const paperButton = document.createElement("button");
  const rockButton = document.createElement("button");
  const scissorButton = document.createElement("button");

  //adding styles to buttons
  paperButton.style.cssText = `margin-right: 10px; padding:10px; font-size:16px; color:white; background:black; cursor:pointer`;
  rockButton.style.cssText = `margin-right: 10px; padding:10px; font-size:16px; color:white; background:black; cursor:pointer`;
  scissorButton.style.cssText = `margin-right: 10px; padding:10px; font-size:16px; color:white; background:black; cursor:pointer`;

  //The textNode that will be inside each buttons
  const textPaper = document.createTextNode("Paper");
  const textRock = document.createTextNode("Rock");
  const textScissor = document.createTextNode("Scissor");

  // add textNode inside each respective buttons
  paperButton.appendChild(textPaper);
  rockButton.appendChild(textRock);
  scissorButton.appendChild(textScissor);

  //create a div for buttons
  const buttonDiv = document.createElement("div");
  document.body.appendChild(buttonDiv);
  buttonDiv.appendChild(paperButton);
  buttonDiv.appendChild(rockButton);
  buttonDiv.appendChild(scissorButton);
  buttonDiv.style.cssText = `margin-bottom:10px`;

  //ading classes to buttons
  paperButton.className = "paper-btn";
  rockButton.setAttribute("class", "rock-btn");
  scissorButton.setAttribute("class", "scissor-btn");

  // making buttons into array for selection
  const allButtons = document.querySelectorAll("button");

  //create a div element which display the result
  const resultDiv = document.createElement("div");

  // create paragraph element which display score
  const pointDiv = document.createElement("div");
  pointDiv.className = "point-Div";
  const p1 = document.createElement("p");
  const p2 = document.createElement("p");
  const p3 = document.createElement("p");

  document.body.appendChild(resultDiv);
  document.body.appendChild(pointDiv);
  pointDiv.appendChild(p1);
  pointDiv.appendChild(p2);
  pointDiv.appendChild(p3);

  // keeping score
  let computerpoints = 0;
  let Playerpoints = 0;

  p1.textContent = `Computerpoints = ${computerpoints}`;
  p2.textContent = `Playerpoints = ${Playerpoints}`;

  ////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////

  // selecting each buttons
  allButtons.forEach(function (buttons) {
    // select the diferent buttons

    // =============================================================================================================

    //paper button implementation

    if (buttons.className === "paper-btn") {
      buttons.addEventListener("click", function (e) {
        e.preventDefault();
        e.stopPropagation();

        const roundResult = game("paper");
        const score = roundResult;
        resultDiv.textContent = roundResult;

        //keeping score base on the result of round
        if (score.includes("Player is the winner"))
          p2.textContent = `Playerpoints = ${++Playerpoints}`;
        else if (score.includes("Computer is the winner"))
          p1.textContent = `Computerpoints = ${++computerpoints}`;

        // comparing points
        if (computerpoints === 5) {
          p3.textContent = `The winner is The computer with ${computerpoints} points`;
          computerpoints = 0;
          Playerpoints = 0;
          p1.textContent = `Computerpoints = ${computerpoints}`;
          p2.textContent = `PlayerPoints = ${Playerpoints}`;
        } else if (Playerpoints === 5) {
          p3.textContent = `The winner is the Player with ${Playerpoints} points`;
          computerpoints = 0;
          Playerpoints = 0;
          p1.textContent = `Computerpoints = ${computerpoints}`;
          p2.textContent = `PlayerPoints = ${Playerpoints}`;
        }

        // making sure p3 is clear when we start the next game
        if (
          computerpoints > 0 ||
          Playerpoints > 0 ||
          resultDiv.textContent.includes("tie")
          // p3.textContent.includes("5")
        ) {
          p3.textContent = "";
        }
        //

        //
      });
    } //end of paper statement

    // =============================================================================================================

    //Rock button implementation
    else if (buttons.className === "rock-btn") {
      buttons.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        const roundResult = game("rock");
        const score = roundResult;
        resultDiv.textContent = roundResult;

        //keeping score base on the result of round
        if (score.includes("Player is the winner"))
          p2.textContent = `Playerpoints = ${++Playerpoints}`;
        else if (score.includes("Computer is the winner"))
          p1.textContent = `Computerpoints = ${++computerpoints}`;

        // comparing points
        if (computerpoints === 5) {
          p3.textContent = `The winner is The computer with ${computerpoints} points`;
          computerpoints = 0;
          Playerpoints = 0;
          p1.textContent = `Computerpoints = ${computerpoints}`;
          p2.textContent = `PlayerPoints = ${Playerpoints}`;
        } else if (Playerpoints === 5) {
          p3.textContent = `The winner is the Player with ${Playerpoints} points`;
          computerpoints = 0;
          Playerpoints = 0;
          p1.textContent = `Computerpoints = ${computerpoints}`;
          p2.textContent = `PlayerPoints = ${Playerpoints}`;
        }

        // making sure p3 is clear when we start the next game
        if (
          computerpoints > 0 ||
          Playerpoints > 0 ||
          resultDiv.textContent.includes("tie")
          // p3.textContent.includes("5")
        ) {
          p3.textContent = "";
        }
      });
    }

    // =============================================================================================================

    //Scissor button implementation
    else if (buttons.className === "scissor-btn") {
      buttons.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();

        const roundResult = game("scissor");
        const score = roundResult;
        resultDiv.textContent = roundResult;

        //keeping score base on the result of round
        if (score.includes("Player is the winner"))
          p2.textContent = `Playerpoints = ${++Playerpoints}`;
        else if (score.includes("Computer is the winner"))
          p1.textContent = `Computerpoints = ${++computerpoints}`;

        // comparing points
        if (computerpoints === 5) {
          p3.textContent = `The winner is The computer with ${computerpoints} points`;

          computerpoints = 0;
          Playerpoints = 0;
          p1.textContent = `Computerpoints = ${computerpoints}`;
          p2.textContent = `PlayerPoints = ${Playerpoints}`;
        } else if (Playerpoints === 5) {
          p3.textContent = `The winner is the Player with ${Playerpoints} points`;

          computerpoints = 0;
          Playerpoints = 0;
          p1.textContent = `Computerpoints = ${computerpoints}`;
          p2.textContent = `PlayerPoints = ${Playerpoints}`;
        }

        // making sure p3 is clear when we start the next game
        if (
          computerpoints > 0 ||
          Playerpoints > 0 ||
          resultDiv.textContent.includes("tie")
          // p3.textContent.includes("5")
        ) {
          p3.textContent = "";
        }
      });
    }
  });
}

ui();
