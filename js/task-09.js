function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColorBtn = document.querySelector(".change-color");
// const body = document.querySelector("body");
const outputText = document.querySelector(".color");

const changeBodyColor = (event) => {
  event.preventDefault();
  const newColor = getRandomHexColor();
  console.log(newColor);
  document.body.style.backgroud = newColor;
  outputText.textContent = newColor;
  // document.querySelector("body").style.backgroudColor = `${newColor}`;
  console.log(document.body.style.backgroud);
};

changeColorBtn.addEventListener("click", changeBodyColor);
