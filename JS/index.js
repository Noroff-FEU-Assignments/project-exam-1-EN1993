
const galleryOne = document.querySelector(".one");

const galleryTwo = document.querySelector(".two");

const galleryThree = document.querySelector(".three");

const prevButton = document.querySelector(".prev");

const nextButton = document.querySelector(".next");

function prevChange() {
  
  galleryOne.style.display ="flex"
  galleryTwo.style.display ="none"
}

prevButton.onclick = prevChange;


function nextChange() {
  
  galleryTwo.style.display ="flex"
  galleryOne.style.display ="none"
  
}

nextButton.onclick = nextChange;