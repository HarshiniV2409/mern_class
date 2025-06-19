const userScoreSpan = document.getElementById('user-score');
const computerScoreSpan = document.getElementById('computer-score');
const resultText = document.getElementById('result');
const choices = document.querySelectorAll('.choice');

let userScore = 0;
let computerScore = 0;

choices.forEach(choice => {
  choice.addEventListener('click', () => {
    const userChoice = choice.id;
    playGame(userChoice);
  });
});

function playGame(userChoice) {
  const computerChoice = getComputerChoice();
  const result = getResult(userChoice, computerChoice);
  updateUI(userChoice, computerChoice, result);
}

function getComputerChoice() {
  const options = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
}

function getResult(user, computer) {
  if (user === computer) return 'draw';
  if (
    (user === 'rock' && computer === 'scissors') ||
    (user === 'paper' && computer === 'rock') ||
    (user === 'scissors' && computer === 'paper')
  ) return 'win';
  return 'lose';
}

function updateUI(user, computer, result) {
  if (result === 'win') {
    userScore++;
    resultText.textContent = `You chose ${user}, computer chose ${computer}. You win! 🎉`;
  } else if (result === 'lose') {
    computerScore++;
    resultText.textContent = `You chose ${user}, computer chose ${computer}. You lose! 😢`;
  } else {
    resultText.textContent = `You both chose ${user}. It's a draw! 🤝`;
  }

  userScoreSpan.textContent = userScore;
  computerScoreSpan.textContent = computerScore;
}
