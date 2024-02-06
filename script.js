// Sets first slide to 1
let slideIndex = 1;
showSlides(slideIndex);

// button controls
function nextSlide(n) {
    showSlides(slideIndex += n);
}

// Thumbnail controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

// Displays the current slide & caption
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("demo");
    let captionText = document.getElementById("caption");
    if (n > slides.length) { // Goes to first slide if at last slide
        slideIndex = 1;
    }
    if (n < 1) { // Goes to last slide if index less than 1
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) { // Hides all slides
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) { // Sets all other slides as inactive
        dots[i].className = dots[i].className.replace("active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += "active";
    captionText.innerHTML = dots[slideIndex-1].alt;
}