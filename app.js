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
  //I need to create more than one thumbnail --> I can use a loop
  //You can use different ways to loop thorugh your array: for loop / forEach()
  //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
  //i used the above to understand how to use the for each.
  imagesArray.forEach((images) => {
    //Inside the loop, we have a few steps to do:
    //create an image element
    const newImage = document.createElement("img");
    //we need assign values to the image element properties
    newImage.src = images.src;
    newImage.alt = images.alt;
    //we also need to assign a value to the className property
    newImage.className = "ImageStyle";
    //we need add an event to the image elements we are creating here
    newImage.addEventListener("click", function () {
      largeContainer.appendChild(newImage);
    });

    //we need to append the images to the thumbnail container
    thumbnail.appendChild(newImage);
  });
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
