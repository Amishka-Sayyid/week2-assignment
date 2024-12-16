console.log("test");

//TODO: I want to store my images
const images = [
  {
    src: "./images/dalmatian-dog.jpg",
    alt: "a picture of a dalmatian dog pet playing with falling leaves on a path of a park during autumn.",
  },
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
  { src: "images/leopard.jpg", alt: "a leopard lying on a tree branch" },
  {
    src: "images/parrot-yellow-macau.jpg",
    alt: "a beautiful yellow macau parrot",
  },
  {
    src: "images/peafowl-peacock.jpg",
    alt: "a peafowl peacock with its feathers spread open",
  },
];

//TODO: I want to create my thumbnail images
//STEP 1: Select the DOM element we are manipulating

const thumbnail = document.getElementById("thumbnail-container");
const largeContainer = document.getElementById("large-image-container");

function createThumbnails(imagesArray) {
  //b4 i was passing the whole image data i needed to make sure the  createLargeImagesHandler recived the single image data being clicked. hence the imageData parameter.
  imagesArray.forEach((imageData) => {
    const newImage = document.createElement("img");
    newImage.src = imageData.src;
    newImage.alt = imageData.alt;
    newImage.className = "ImageStyle";
    newImage.addEventListener("click", function () {
      createLargeImagesHandler(imageData);
    });

    thumbnail.appendChild(newImage);
  });
}
createThumbnails(images);
//!commit your work!

//TODO: I want to create my larger images
//The larger images will be created when the user triggers the thumbnail images event
//This function will be event handler for our images
function createLargeImagesHandler(imageData) {
  console.log(imageData);
  largeContainer.innerHTML = null;
  const largeImage = document.createElement("img");
  largeImage.src = imageData.src; //use the clicked images's src
  largeImage.alt = imageData.alt;
  largeImage.className = "largeImageStyle";
  largeContainer.appendChild(largeImage);
}
//!we don't call the createLargeImagesHandler in here. It is an event handler!

//!commit your work!
