const fontRange = document.querySelector("#font-size-control");
const textOutput = document.querySelector("#text");

fontRange.addEventListener("input", (event) => {
  textOutput.style.fontSize = `${Number(event.currentTarget.value)}px`;
  //   console.log(event.currentTarget.value);
  //   console.log(Number(event.currentTarget.value));
});
