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
//I need to select both the thumbnail container and the large image container
const thumbnail = document.getElementById("thumbnail-container");
const largeContainer = document.getElementById("large-image-container");

function createThumbnails(imagesArray) {
  //I need to create more than one thumbnail --> I can use a loop
  //You can use different ways to loop thorugh your array: for loop / forEach()
  imagesArray.forEach((images) => {
    const newImage = document.createElement("img");
    newImage.src = images.src;
    newImage.alt = images.alt;

    thumbnail.appendChild(newImage);
  });
  //Inside the loop, we have a few steps to do:
  //create an image element
  //we need assign values to the image element properties
  //we also need to assign a value to the className property
  //we need add an event to the image elements we are creating here
  //we need to append the images to the thumbnail container
}
createThumbnails(images);

//!commit your work!

//TODO: I want to create my larger images
//The larger images will be created when the user triggers the thumbnail images event
//This function will be event handler for our images
function createLargeImagesHandler(largeImage) {
  //I want to remove the image that's in the full screen, and create a new image with new properties
  // largeImageContainer.innerHTML = null / ""
  //create an image element
  //assign values to the image element
  //add a className to style the large image
  //append the image to the largeImageContainer
}
//!we don't call the createLargeImagesHandler in here. It is an event handler!

//!commit your work!
