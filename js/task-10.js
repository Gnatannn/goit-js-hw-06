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

// console.log(refs.createBtn);
// console.log(refs.destroyBtn);

let inputNumber = 0;

function onClickInput(event) {
  inputNumber = Number(event.currentTarget.value);
  console.log(inputNumber);
}

function createBoxes(amount) {
  let divArr = [];
  // for (let i = 0; i < 6; i += 1) {
  //   divArr.push(
  //     `<div width="30px" height="30px" backgroud-color="${getRandomHexColor()}">a</div)`
  //   );
  // }

  for (let i = 0; i < 6; i += 1) {
    const initialSize = 30;
    let addSize = initialSize + i * 10;
    const boxItem = `<div style="width:${addSize}px;
    height:${addSize}px; background-color:${getRandomHexColor()}" ></div>`;
    divArr.push(boxItem);
  }

  // console.log(divArr);
  boxes.insertAdjacentHTML("afterbegin", divArr.join(""));
}

refs.input.addEventListener("input", onClickInput);
refs.createBtn.addEventListener("click", createBoxes);
refs.destroyBtn.addEventListener("click", destroyBoxes);

function destroyBoxes() {
  refs.boxes.innerHTML = "";
}
