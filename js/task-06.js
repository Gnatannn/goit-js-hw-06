const textInput = document.querySelector("#validation-input");
// console.log(textInput.getAttribute(["data-length"]));
// console.log(textInput.dataset.length);

textInput.addEventListener("blur", (event) => {
  textInput.classList.remove("invalid", "valid");
  //   console.log(event.currentTarget.value.length);
  //   console.log(Number(textInput.getAttribute(["data-length"])));
  if (
    event.currentTarget.value.length ===
    Number(textInput.getAttribute(["data-length"]))
  ) {
    textInput.classList.add("valid");
    // textInput.style.borderColor = "#4caf50";
    console.log("hurraw");
  } else {
    textInput.classList.add("invalid");
    // textInput.style.borderColor = "#f44336";
    console.log("not good");
  }
});
