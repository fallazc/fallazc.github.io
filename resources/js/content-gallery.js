// Open the Modal
let openModal = function() {
	var elements = document.getElementsByClassName("hover-shadow");
	 
	for (var i = 0; i < elements.length; i++) {
		elements[i].style.display = "none";
	}
	
	document.getElementById('myModal').style.display = "block";
}

// Close the Modal
let closeModal = function() {
	var elements = document.getElementsByClassName("hover-shadow");
	 
	for (var i = 0; i < elements.length; i++) {
		elements[i].style.display = "block";
	}
	 
	document.getElementById('myModal').style.display = "none";
}

let slideIndex = 1;

// Next/previous controls
let plusSlides = function(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
let currentSlide = function(n) {
  showSlides(slideIndex = n);
}

let showSlides = function(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  console.log(slideIndex);
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  var desc = dots[slideIndex-1].getAttribute("data-desc");
  captionText.innerHTML = desc;
}