function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const bodyBackgroundColor = document.querySelector('body');
const spanBackgroundColor = document.querySelector(".color");

const buttonChangeColor = document.querySelector(".change-color");

buttonChangeColor.addEventListener("click", (event) => {
  bodyBackgroundColor.style.backgroundColor = getRandomHexColor();
  spanBackgroundColor.textContent = `${bodyBackgroundColor.style.backgroundColor}`;
});









