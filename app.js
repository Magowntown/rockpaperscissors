const game = () => {
  let pScore = 0;
  let cScore = 0;

  const startGame = () => {
    const playBtn = document.querySelector(".intro button");
    const introScreen = document.querySelector(".intro");
    const match = document.querySelector(".match");

    playBtn.addEventListener("click", () => {
      introScreen.classList.add("fadeOut");
      match.classList.add("fadeIn");
    });
  };

  const playMatch = () => {
    const options = document.querySelectorAll(".options button");
    const playerHand = document.querySelector(".player-hand");
    const computerHand = document.querySelector(".computer-hand");
    const hands = document.querySelectorAll(".hands img");

    hands.forEach((hand) => {
      hand.addEventListener("animationend", function () {
        this.style.animation = "";
      });
    });

    const computerOptions = ["rock", "paper", "scissors"];

    options.forEach((option) => {
      option.addEventListener("click", function () {
        const computerNumber = Math.floor(Math.random() * 3);
        const computerChoice = computerOptions[computerNumber];

        setTimeout(() => {
          compareHands(this.textContent, computerChoice);

          playerHand.src = `./assets/${this.textContent}.png`;
          computerHand.src = `./assets/${computerChoice}.png`;
        }, 1000);

        playerHand.style.animation = "shakePlayer 2s ease";
        computerHand.style.animation = "shakeComputer 2s ease";
      });
    });
  };

  const updateScore = () => {
    const playerScore = document.querySelector(".player-score p");
    const computerScore = document.querySelector(".computer-score p");
    playerScore.textContent = pScore;
    computerScore.textContent = cScore;

    if (pScore === 5) {
      alert("Player Wins!");
      pScore = 0;
      cScore = 0;
      playerScore.textContent = pScore;
      computerScore.textContent = cScore;
    }
    if (cScore === 5) {
      alert("Computer Wins!");
      pScore = 0;
      cScore = 0;
      playerScore.textContent = pScore;
      computerScore.textContent = cScore;
    }
  };

  const compareHands = (playerChoice, computerChoice) => {
    const winner = document.querySelector(".winner");
    let result;

    switch (playerChoice) {
      case computerChoice:
        result = "It is a tie!";
        break;
      case "rock":
        result =
          computerChoice === "scissors" ? "Player Wins!" : "Computer Wins!";
        break;
      case "paper":
        result =
          computerChoice === "scissors" ? "Computer Wins!" : "Player Wins!";
        break;
      case "scissors":
        result = computerChoice === "rock" ? "Computer Wins!" : "Player Wins!";
        break;
    }

    winner.textContent = result;

    if (result === "Player Wins!") {
      pScore++;
    } else if (result === "Computer Wins!") {
      cScore++;
    }

    updateScore();
  };

  startGame();
  playMatch();
};

game();
