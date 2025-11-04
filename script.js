/* const btnSubmit = document.getElementById("btnSubmit");
const pText = document.getElementById("pText");
const inputSubmit = document.querySelector(".inputSubmit");

btnSubmit.addEventListener("click", displayText);
function displayText() {
  const inputValue = inputSubmit.value;

  pText.style.color = "red";

  pText.style.fontWeight = "bold";

  pText.innerHTML = inputValue;
}

let name = prompt("What is your name?");
 alert(`Hi ${name}, how are you?`); 
let color = prompt("What is your favortie color?");
if (color === "blue") {
  alert(`That is my favorite color too!`);
} else {
  alert(`That is a nice color!`);
} */

const numberInp = document.querySelector("inputSubmit");
const guessBtn = document.querySelector("btnGuess");
const attemptConst = document.querySelector("attemptSpan");

let secretNumber = Math.floor(Math.random() * 10) + 1;
guessBTn.addEventListener("click", onGuess);
function onGuess() {
  attemptConst++;
  const inputValue = Number(numberInp.value);
}
if (secretNum === inputValue) {
}
