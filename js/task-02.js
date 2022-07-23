const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ul = document.querySelector("#ingredients");
// console.log(ul);
const elements = [];
ingredients.forEach((ingredient) => {
  const li = document.createElement("li");
  li.textContent = ingredient;
  li.classList.add("item");
  elements.push(li);
  // console.log(li);
});
console.log(elements);
ul.append(...elements);

// const list = ingredients.map(
//   (ingredient) => `<li class="item">${ingredient}</li>`
// );
// ul.insertAdjacentHTML("beforeend", list.join(""));
// console.log(list);
