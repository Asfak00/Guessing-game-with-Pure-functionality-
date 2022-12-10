onload = () => {
  main();
};

let storePreviousGuesses = [];
let buttonSound = new Audio("./audios/button sound.mp3");
let lostSound = new Audio("./audios/lost sound.mp3");
let winSound = new Audio("./audios/win sound.mp3");

// all html elements reference here
const easyBtn = document.getElementById("easy-btn");
const hardBtn = document.getElementById("hard-btn");
const gameArea = document.getElementById("game-area");
const welcomeScreen = document.getElementById("welcome-screen");
const newGameBtn = document.getElementById("new-game-btn");
const message = document.getElementById("message");
const inputBox = document.getElementById("number-input");
const totalAttemptsLeft = document.getElementById("total-attempts-left");
const previousGuess = document.getElementById("previous-guess-number");

// The main function here
function main() {
  let randomNumber = Math.floor(Math.random() * 49) + 1;

  // adding all event listener here
  easyBtn.addEventListener("click", function () {
    maxAttempts = 9;
    startGame();
  });
  hardBtn.addEventListener("click", function () {
    maxAttempts = 4;
    startGame();
  });

  inputBox.addEventListener("change", function (e) {
    const inputValue = Number(e.target.value);

    // checking the value and random number do that correct
    if (inputValue > 50) {
      alert("Please Inter number between 1-50");
    } else {
      if (storePreviousGuesses.length < maxAttempts) {
        if (inputValue > randomNumber) {
          message.style.display = "block";
          lostSound.play();
          message.innerText = "You Are High";
          inputBox.value = "";
        } else if (inputValue < randomNumber) {
          message.style.display = "block";
          lostSound.play();
          message.innerText = "You Are Low";
          inputBox.value = "";
        } else {
          message.style.display = "block";
          winSound.play();
          message.innerText = "You Are Correct Hurray";
          inputBox.value = "";
          newGameBtn.style.display = "block";
        }
      } else {
        if (inputValue > randomNumber) {
          message.style.display = "inline";
          lostSound.play();
          message.innerText = `You are lose!! Your random number is ${randomNumber}`;
          inputBox.value = "";
          newGameBtn.style.display = "block";
        } else if (inputValue < randomNumber) {
          message.style.display = "inline";
          lostSound.play();
          message.innerText = `You are lose!! Your random number is ${randomNumber}`;
          inputBox.value = "";
          newGameBtn.style.display = "block";
        } else {
          message.style.display = "block";
          winSound.play();
          message.innerText = "You Are Correct Hurray";
          inputBox.value = "";
          newGameBtn.style.display = "inline";
        }
        inputBox.setAttribute("disabled", true);
      }
      storePreviousGuesses = [...storePreviousGuesses, `(${inputValue})`];
      previousGuess.innerHTML = storePreviousGuesses;
      totalAttemptsLeft.innerHTML = storePreviousGuesses.length;
    }
  });

  newGameBtn.addEventListener("click", function () {
    buttonSound.play();
    window.location.reload();
  });
}

// Start game function here
function startGame() {
  buttonSound.play();
  welcomeScreen.style.display = "none";
  gameArea.style.display = "block";
}
