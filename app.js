console.log("test");

//TODO: I want to store my images
const images = [
  { src: "./images/deer.jpg", alt: "a picture of a red deer in the woods" },
  {
    src: "./images/elephant.jpg",
    alt: "a picture of an elephant in the forest",
  },
  {
    src: "./images/european-shorthair-cat.jpg",
    alt: "a picture of a european shorthair cat",
  },
  { src: "images/fox.jpg", alt: "an image of a fox taken during winter" },

  {
    src: "images/parrot-yellow-macau.jpg",
    alt: "a beautiful yellow macau parrot",
  },
];

//TODO: I want to create my thumbnail images
//STEP 1: Select the DOM element we are manipulating

const thumbnail = document.getElementById("thumbnail-container");
const largeContainer = document.getElementById("large-image-container");

function createThumbnails(imagesArray) {
  //b4 i was passing the whole image data i needed to make sure the  createLargeImagesHandler recived the single image data being clicked. hence the imageData parameter.
  imagesArray.forEach((imageData, index) => {
    const newImage = document.createElement("img");
    newImage.src = imageData.src;
    newImage.alt = imageData.alt;
    newImage.className = "ImageStyle";
    newImage.addEventListener("click", function () {
      createLargeImagesHandler(imageData, index);
    });

    thumbnail.appendChild(newImage);
  });
}
createThumbnails(images);
//!commit your work!

//TODO: I want to create my larger images
//The larger images will be created when the user triggers the thumbnail images event
//This function will be event handler for our images
function createLargeImagesHandler(imageData, currentIndex) {
  console.log(imageData);
  largeContainer.innerHTML = null;
  const largeImage = document.createElement("img");
  largeImage.src = imageData.src; //use the clicked images's src
  largeImage.alt = imageData.alt;
  largeImage.className = "largeImageStyle";

  // Create Previous Button
  const prevButton = document.createElement("button");
  prevButton.innerText = "Previous";

  prevButton.addEventListener("click", () => {
    const prevIndex = (currentIndex - 1 + images.length) % images.length;

    createLargeImagesHandler(images[prevIndex], prevIndex);
  });

  // Create Next Button
  const nextButton = document.createElement("button");
  nextButton.innerText = "Next";

  nextButton.addEventListener("click", () => {
    const nextIndex = (currentIndex + 1) % images.length;

    createLargeImagesHandler(images[nextIndex], nextIndex);
  });

  largeContainer.appendChild(prevButton);
  largeContainer.appendChild(largeImage);
  largeContainer.appendChild(nextButton);
}

createLargeImagesHandler(images[0], 0);
