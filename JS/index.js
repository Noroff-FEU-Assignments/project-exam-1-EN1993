const slideIndex = 1;
showSlide(slideIndex);

function plusSlides(n) {
  showSlide(slideIndex += n);
}


function showSlide(n) {
  
  const slide = document.querySelector(".slides");
  
  if (n > slide.length)
  slideIndex = 1
  
  if (n < 1)
  slideIndex = slide.length 
  
  for (i = 0; i < slide.length; i++) {
      slide[i].display="none";
  } 
  slide.style.display ="block";
}

