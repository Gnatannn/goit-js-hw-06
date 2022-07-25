function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  controls: document.querySelector("#controls"),
  input: document.querySelector("input"),
  createBtn: document.querySelector("button[data-create]"),
  destroyBtn: document.querySelector("button[data-destroy]"),
  boxes: document.querySelector("#boxes"),
};

refs.createBtn.addEventListener("click", () => {
  const inputNumber = Number(refs.input.value);
  console.log(inputNumber);
  createBoxes(inputNumber);
  refs.input.value = "";
});
refs.destroyBtn.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  refs.boxes.innerHTML = "";
  let divArr = [];

  for (let i = 0; i < amount; i += 1) {
    const initialSize = 30;
    let addSize = initialSize + i * 10;
    const boxItem = `<div style="width:${addSize}px;
    height:${addSize}px; background-color:${getRandomHexColor()}" ></div>`;
    divArr.push(boxItem);
  }
  boxes.insertAdjacentHTML("afterbegin", divArr.join(""));
}

function destroyBoxes() {
  refs.boxes.innerHTML = "";
}
