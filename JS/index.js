

var galleryIndex = 1;
galleryShow(galleryIndex);

function plusSlides(n) {
  galleryShow(galleryIndex += n);
}

function plusSlides(n) {
  galleryShow(galleryIndex = n);
}



function galleryShow(n) {

  var i;
  
  var slide = document.getElementsByClassName("slides");
  var dots = document.getElementsByClassName("dot");
  
  if (n > slide.length) {galleryIndex = 1}

  if (n < 1){galleryIndex = slide.length} 
  
  for (i = 0; i < slide.length; i++) {
      slide[i].style.display ="none";
  } 
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" activeSlide", "");
  }
  slide[galleryIndex-1].style.display = "flex";
  dots[galleryIndex-1].className += " activeSlide";
}

