// ===1
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColorBtn = document.querySelector(".change-color");
const outputText = document.querySelector(".color");

changeColorBtn.addEventListener("click", changeBodyColor);

function changeBodyColor() {
  const newColor = getRandomHexColor();
  document.body.style.backgroundColor = newColor;
  outputText.textContent = newColor;
  // console.log(document.body.style.backgroundColor);
}

// ====2
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }

// const refs = {
//   BODY: document.body,
//   BTN: document.querySelector(".change-color"),
//   TEXT: document.querySelector(".color"),
// };

// refs.BTN.addEventListener("click", changeBodyColor);

// function changeBodyColor() {
//   const newColor = getRandomHexColor();
//   refs.BODY.style.backgroundColor = newColor;
//   refs.TEXT.textContent = newColor;
// }
