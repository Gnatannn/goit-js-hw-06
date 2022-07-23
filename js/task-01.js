const categoryList = document.querySelector("#categories");
const categoryItems = document.querySelectorAll(".item");
const titleItems = document.querySelectorAll(".item>h2");
const listItems = document.querySelectorAll(".item>ul");
// console.log(categoryItems);
// console.log(listItems);
// console.log(titleItems[2].textContent);
// console.log(listItems[0].firstElementChild.textContent);

const calculate = () => {
  console.log(`Number of categories: ${categoryItems.length} `);
  const res = listItems.forEach((el) => {
    // console.log(el);
    console.log(`Category: ${el.parentNode.firstElementChild.textContent} `);
    console.log(`Elements: ${el.childElementCount} `);
  });
  return res;

  // console.log(`Category: ${titleItems[0].textContent} `);
  // console.log(`Elements: ${listItems[0].childElementCount} `);
  // console.log(`Category: ${titleItems[1].textContent} `);
  // console.log(`Elements: ${listItems[1].childElementCount} `);
  // console.log(`Category: ${titleItems[2].textContent} `);
  // console.log(`Elements: ${listItems[2].childElementCount} `);
};

calculate();
