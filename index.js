function reloadHomePage() {
    window.location.href = 'index.html';
}

// slideshow code // 
let slideIndex = 0; // This is creating a variable called slideIndex and assigning it a value of 0.

function showSlides() {
    let slides = document.getElementsByClassName("slide"); //This line gets all the classname elements of slide and stores them in the let slides variable in an array like collection.
    let dots = document.getElementsByClassName("dot"); // This line is doing the exact same but for the class names of dot.

    for (let i = 0; i < slides.length; i++) { //this is a for loop. creating a varibale of i and assigning 0 to it. Then for every time i is less than the length of the slide i++ which adds 1. 
        slides[i].style.display = "none"; // slides[i]: Refers to the current slide element in the loop. .style: Accesses the style property of the element, which allows you to change its CSS properties.
    }

    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}

    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";  
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}

function changeSlide(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}