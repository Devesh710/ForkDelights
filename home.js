// Nav Bg Change when Scroll :- 440

const bookTable = document.getElementById("book-table");
let tableNumber = document.getElementById("table-num-option");

function disableScroll() {
    // Get the current page scroll position
    scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop;
    scrollLeft =
        window.pageXOffset ||
        document.documentElement.scrollLeft,

        // if any scroll is attempted,
        // set this to the previous value
        window.onscroll = function () {
            window.scrollTo(scrollLeft, scrollTop);
        };
}

function enableScroll() {
    window.onscroll = function () { };
}



function changeBg(){
    let scrollValue = window.scrollY;
 //   console.log(scrollValue);
    if(scrollValue < 440){
        document.querySelector('nav').style.background = 'transparent';
        document.querySelector('.nav').style.background = 'transparent';

    }
    else{
        document.querySelector('nav').style.background = 'silver';
        document.querySelector('.nav').style.background = 'silver';
    }
}

window.addEventListener('scroll', changeBg);



// Book a table select option

bookTable.addEventListener("click", () => {
    const tableImg = document.getElementById("hidden-img");
    tableImg.style.display = 'block';
});

// tableNumber.innerText = "";


function showBookATablePopup() {
    disableScroll();
    const popup = document.querySelector('.BookATable-popup');
    const windowHeight = window.innerHeight;
    const popupHeight = popup.offsetHeight;
    const scrollTop = window.scrollY;
    const middlePoint = scrollTop + (windowHeight / 2) - (popupHeight / 2);

    popup.style.display = 'block';
    popup.style.top = `${middlePoint}px`;
    popup.style.position = 'absolute';
    popup.style.zIndex = '1'; // Ensure the popup is above other elements

    document.querySelector('nav').style.display = 'none';
    document.querySelector('.nav').style.display = 'none';

    // Prevent scrolling
    document.body.style.overflow = 'hidden';
   
}

// Event listener for the close button
document.querySelector("#BookATable-popup-close-btn").addEventListener("click", function() {
    enableScroll();
    location.reload();
    document.querySelector('.BookATable-popup').style.display = "none";
    document.querySelector('nav').style.display = "block";
    document.querySelector('.nav').style.display = "block";

    // Allow scrolling again
    document.body.style.overflow = 'auto';
    
});



// Home Slider 

const slides = document.querySelectorAll(".slide");

let counter = 0;

slides.forEach(
    (slide,index) => {
        slide.style.left = `${index * 100}%`
    }
)

const goNext = () => {
    counter++;
    slideImage();
    // reset counter if it exceeds the number of slides
    if (counter >= slides.length) {
        counter = 0;
    }
}

const goPrev = () => {
    counter--;
    slideImage();
    // reset counter if it's less than 0
    if (counter < 0) {
        counter = slides.length - 1;
    }
}

const slideImage = () => {
    slides.forEach(
        (slide) => {
            slide.style.transform = `translateX(-${counter * 100}%)`
        }
    )
}

window.onload = function() {
    // call goNext every 5 seconds
    setInterval(goNext, 5000);
   // document.querySelector('nav').classList.remove('hide');
};