function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const inputElement = document.querySelector('input');

const buttonCreate = document.querySelector('button[data-create]');

const buttonDestroy = document.querySelector('button[data-destroy]');

const divBoxes = document.querySelector('#boxes');

buttonCreate.addEventListener("click", createBoxes);

buttonDestroy.addEventListener("click", (event) => {
  divBoxes.innerHTML = '';
});

function createBoxes(amount) {

    const inputValue = inputElement.value;

    if (inputValue >= 1 && inputValue <= 100) {
      divBoxes.innerHTML = '';
  
      let size = 30;
      let arrayDiv = [];
      
      for (let i = 1; i <= inputValue; i++) {
        const newDiv = document.createElement("div");
        newDiv.style.height = size + "px";
        newDiv.style.width = size + "px";
        newDiv.style.backgroundColor = getRandomHexColor();
        size += 10;
        arrayDiv.push(newDiv);
      }

      divBoxes.append(...arrayDiv);

      inputElement.value = '';

    }
}