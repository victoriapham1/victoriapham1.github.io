function clickNavBar() {
    if (
        document.getElementById("navbar-click").src ==
        "https://d33wubrfki0l68.cloudfront.net/79e75114856ae61628d2ad26504e3ff4ab2c71b6/f06a4/assets/svg/ham-menu.svg"
    ) {
        document.getElementById("navbar-click").src =
            "https://d33wubrfki0l68.cloudfront.net/de2a681c8ca1630b29949b3a34bf158a686a0554/6a0ec/assets/svg/ham-menu-close.svg";

        var tmp = document.getElementById("sm-menu-open");
        const custom_style = {
            visibility: "visible",
            opacity: "1",
        };
        Object.assign(tmp.style, custom_style);
    } else {
        document.getElementById("navbar-click").src =
            "https://d33wubrfki0l68.cloudfront.net/79e75114856ae61628d2ad26504e3ff4ab2c71b6/f06a4/assets/svg/ham-menu.svg";

        var tmp = document.getElementById("sm-menu-open");
        const custom_style = {
            visibility: "hidden",
            opacity: "0",
        };
        Object.assign(tmp.style, custom_style);
    }
}

window.addEventListener("resize", function () {
    if (window.innerWidth > 797) {
        var tmp = document.getElementById("sm-menu-open");
        const custom_style = {
            visibility: "hidden",
            opacity: "0",
        };
        Object.assign(tmp.style, custom_style);
        document.getElementById("navbar-click").src =
            "https://d33wubrfki0l68.cloudfront.net/79e75114856ae61628d2ad26504e3ff4ab2c71b6/f06a4/assets/svg/ham-menu.svg";
    }
});

window.onload = function () {
    currentSlide(1);
    lion_currentSlide(1);
    // Note: Why does it not work?
    // gdpt_currentSlide(1);
    // viet_currentSlide(1);
};

document.addEventListener("DOMContentLoaded", function (event) {
    // Get time for Banner
    var curHour = new Date().getHours();
    var tmp = "";
    if (curHour < 12) {
        tmp = "Good morning";
    } else if (curHour < 18) {
        tmp = "Good afternoon";
    } else {
        tmp = "Good evening";
    }

    // array with texts to type in typewriter
    tmp = tmp + ", I'm Victoria Pham";
    var dataText = [tmp];

    // type one text in the typwriter
    // keeps calling itself until the text is finished
    function typeWriter(text, i, fnCallback) {
        // check if text isn't finished yet
        if (i < text.length) {
            // add next character to h1
            document.querySelector("h1").innerHTML =
                text.substring(0, i + 1) + '<span aria-hidden="true"></span>';

            // wait for a while and call this function again for next character
            setTimeout(function () {
                typeWriter(text, i + 1, fnCallback);
            }, 100);
        }
        // text finished, call callback if there is a callback function
        else if (typeof fnCallback == "function") {
            // call callback after timeout
            setTimeout(fnCallback, 700);
        }
    }
    // start a typewriter animation for a text in the dataText array
    function StartTextAnimation(i) {
        if (typeof dataText[i] == "undefined") {
            setTimeout(function () {
                StartTextAnimation(0);
            }, 20000);
        }
        // check if dataText[i] exists
        if (i < dataText[i].length) {
            // text exists! start typewriter animation
            typeWriter(dataText[i], 0, function () {
                // after callback (and whole text has been animated), start next text
                StartTextAnimation(i + 1);
            });
        }
    }
    // start the text animation
    StartTextAnimation(0);
});

let slideIndex = 1;
// showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides((slideIndex = n));
}

function showSlides(n) {
    let i;

    var slides = [];
    var dots = [];
    var index;
    // Note: Using if else will fail bc document.getElementById will always hold true, therefore it will only reach the first if else.
    if (document.getElementById("about__slides")) {
        slides = document.getElementsByClassName("about__slide");
        dots = document.getElementsByClassName("about__dot");
    }
    if (document.getElementById("tt__slides")) {
        slides = document.getElementsByClassName("tt__slide");
        dots = document.getElementsByClassName("tt__dot");
    }

    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}
