function reloadHomePage() {
    window.location.href = 'index.html';
}

// slideshow code // 
let slideIndex = 0; // This is creating a variable called slideIndex and assigning it a value of 0.
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("slide"); //This line gets all the classname elements of slide and stores them in the let slides variable in an array like collection.
    let dots = document.getElementsByClassName("dot"); // This line is doing the exact same but for the class names of dot.

    for (let i = 0; i < slides.length; i++) { //this is a for loop. creating a varibale of i and assigning 0 to it. Then for every time i is less than the length of the slide i++ which adds 1. 
        slides[i].style.display = "none"; // slides[i]: Refers to the current slide element in the loop. .style: Accesses the style property of the element, which allows you to change its CSS properties.
    }

    slideIndex++; // this is saying take whatever slideIndex is and +1. it is incrementing the value by 1.
    if (slideIndex > slides.length) {slideIndex = 1} //if statement and is a condition check. It checks if slideIndex has exceeded the number of slides. 

    for (let i = 0; i < dots.length; i++) {  //loop declaration. (let i = 0;)This part initializes a variable i and sets its initial value to 0. i is typically used as a loop counter. (i < dots.length;): this part is the condition. 
        dots[i].className = dots[i].className.replace(" active", ""); //dots is referring to an array of elements and is being selected by it's class name. dots[i] accesses the element at index i within this collection.
    }

    slides[slideIndex - 1].style.display = "block";  // slideIndex -1 accesses the slide element at position slideIndex - 1. The style stuff is changing the css. It overrides previous declarations. 
    dots[slideIndex - 1].className += " active"; // 
    setTimeout(showSlides, 2000); //  functions can be passed as parameters to other functions. 2000 is 2 seconds.
}

function changeSlide(n) { // the n represents the amount by which the slide index should be changed. 
    slideIndex += n; // This expression adds n to the current value of slideIndex. The += operator.
}

function currentSlide(n) { // 
    slideIndex = n; // Here, slideIndex = n is an assignment operation that sets the value of slideIndex to the value of n.
}

// slideshow code end //
