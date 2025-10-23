const btnSubmit = document.getElementById("btnSubmit");
const pText = document.getElementById("pText");
const inputSubmit = document.querySelector(".inputSubmit");

btnSubmit.addEventListener("click", displayText);
function displayText() {
  const inputValue = inputSubmit.value;

  pText.style.color = "red";

  pText.style.fontWeight = "bold";

  pText.innerHTML = inputValue;
}
