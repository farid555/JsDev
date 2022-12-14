let playGame = confirm("Shall we play rock, paper or scissors?");

if (playGame) {
  //Play

  while (playGame) {
    const playerChoice = prompt("Please enter rock, paper, or scissor.");

    if (playerChoice || playerChoice === "") {
      const playerOne = playerChoice.trim().toLowerCase();

      if (
        playerOne === "rock" ||
        playerOne === "paper" ||
        playerOne === "scissor"
      ) {
        const computerChoice = Math.floor(Math.random() * 3 + 1);
        const computer =
          computerChoice === 1
            ? "rock"
            : computerChoice === 2
            ? "paper"
            : "scissors";

        const result =
          playerOne === computer
            ? "Tie game!"
            : playerOne === "rock" && computer === "paper"
            ? `playerOne: ${playerOne}\nComputer: ${computer} \nComputer wins!`
            : playerOne === "paper" && computer === "scissors"
            ? `playerOne: ${playerOne}\nComputer: ${computer} \nComputer wins!`
            : playerOne === "scissors" && computer === "rock"
            ? `playerOne: ${playerOne}\nComputer: ${computer} \nComputer wins!`
            : `playerOne: ${playerOne}\nComputer: ${computer} \nPlayer wins!`;
        alert(result);
        playGame = confirm("Play Again");
        if (!playGame) alert("Ok, thanks for playing ");
        continue;
      } else {
        alert("You didn't enter rock paper or scissors.");
        continue;
      }
    } else {
      alert("I guess you changed your mind. Maybe next time...");
      break;
    }
  }
} else {
  alert("Ok we can play next time...");
}
