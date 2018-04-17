var computerScore = 0;
var userScore = 0;
// Random Choice for Computer
function computerPlay () {
  let c_choice = Math.floor(Math.random()*3);
  return  (c_choice === 2) ? "rock" : (c_choice === 1) ? "paper" : "scissors";
}

// Input from user
function userPlay () {
  let u_choice = prompt ('Please enter your choice rock, paper or scissors ');
  u_choice = u_choice.toLowerCase();
  // Check for appropriate input
  if (u_choice === "rock" || u_choice === "paper" || u_choice === "scissors") {
    return u_choice;
  } else {
    console.log("Please, enter one of them: Rock, Paper, Scissors");
    userPlay();
  }
    }

  function round(){
    let computer = computerPlay();
    let user = userPlay();

    if (user === "rock"     && computer === "scissors" ||
        user === "paper"    && computer === "rock"     ||
        user === "scissors" && computer === "paper") {
        userScore++;
        console.log("You chose: " + user + ", Computer chose: " + computer + " ===>   You won ! ");
   } else if (computer === "rock"     && user === "scissors" ||
              computer === "paper"    && user === "rock"     ||
              computer === "scissors" && user === "paper") {
        computerScore++;
        console.log("You chose: " + user + ", Computer chose: " + computer + " ===>   You lost ! ");
      } else {
        console.log("You chose: " + user + ", Computer chose: " + computer + " ===>   It's a Draw ! ");
      }
        }

  function game () {
  // Round Number(i) = 5
  let i;
  for (i = 1; i < 6; i++) {
    round();
    console.log("Round Number: " + i + "/5")
    console.log("Your Score: " + userScore);
    console.log("Computer Score: " + computerScore);
  }
    // Final Decision for Winner of the Game
    if (userScore > computerScore) { console.log("YOU WON :) ")    }
    else if (userScore < computerScore) { console.log("YOU LOST :( ")    }
    else { console.log("A BORING DRAW")   }
    }

    //Execute Game in the Console
    game();
