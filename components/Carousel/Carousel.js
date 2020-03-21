function createCarousel() {
  let carousel = document.createElement("div");
  let leftBtn = document.createElement("div");
  let image = document.createElement("img");
  let rightBtn = document.createElement("div");

  carousel.classList.add("carousel");
  leftBtn.classList.add("left-button");
  rightBtn.classList.add("right-button");
  image.classList.add("current-img");

  image.src = "./assets/carousel/mountains.jpeg";

  carousel.append(leftBtn, image, rightBtn);

  return carousel;
}

const carouselContainer = document.querySelector(".carousel-container");
carouselContainer.append(createCarousel());

const leftButton = document.querySelector(".left-button");
const rightButton = document.querySelector(".right-button");
let image = document.querySelector(".current-img");
// images src array
const images = [
  "./assets/carousel/mountains.jpeg",
  "./assets/carousel/computer.jpeg",
  "./assets/carousel/trees.jpeg",
  "./assets/carousel/turntable.jpeg"
];

let currentIndex = 0;

function nextImage() {
  if (currentIndex < images.length - 1) {
    currentIndex++;
  } else {
    currentIndex = 0;
  }
  image.src = images[currentIndex];
}

rightButton.addEventListener("click", e => {
  nextImage();
  e.stopPropagation();
});

function prevImage() {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = images.length - 1;
  }
  image.src = images[currentIndex];
}

leftButton.addEventListener("click", e => {
  prevImage();
  e.stopPropagation();
});
