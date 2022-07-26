const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const gallery = document.querySelector(".gallery");
gallery.style.display = "grid";
gallery.style.gridTemplateColumns = "1fr 1fr 1fr";
// console.log(gallery);
const galleryItems = images.map(
  (image) =>
    `<li list-style='none'><img height="200px"src=${image.url} alt=${image.alt} class="img"></img></li>`
);
// console.log(galleryItems);

gallery.insertAdjacentHTML("afterbegin", galleryItems.join(""));
