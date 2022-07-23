// ======= 1st option

const counter = document.querySelector("#counter");
const decBtn = document.querySelector('[data-action="decrement"]');
const incBtn = document.querySelector('[data-action="increment"]');
const counterValue = document.querySelector("#value");

var value = 0;
const decrement = () => {
  //   console.log("click dec");
  value -= 1;
  document.getElementById("value").innerHTML = value;
  console.log(value);
};
const increment = () => {
  //   console.log("click inc");
  value += 1;
  document.getElementById("value").innerHTML = value;
  console.log(value);
};

decBtn.addEventListener("click", decrement);
incBtn.addEventListener("click", increment);

// ======= 2nd option
// const counter = {
//   value: 0,
//   increment() {
//     this.value += 1;
//   },
//   decrement() {
//     this.value -= 1;
//   },
// };

// const decBtn = document.querySelector('[data-action="decrement"]');
// const incBtn = document.querySelector('[data-action="increment"]');
// const counterValue = document.querySelector("#value");

// incBtn.addEventListener("click", () => {
//   counter.increment();
//   counterValue.textContent = counter.value;
// });

// decBtn.addEventListener("click", () => {
//   counter.decrement();
//   counterValue.textContent = counter.value;
// });
// console.log(counterValue);
