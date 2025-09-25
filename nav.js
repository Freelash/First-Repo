const hamburger = document.querySelector(".hamburger");
const burgerMenu = document.querySelector(".burger-menu");

hamburger.addEventListener("click", () => {
  burgerMenu.classList.toggle("show-menu");
});
