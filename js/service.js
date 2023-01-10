function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");

            if (i == 0) {
                currentSlide(1);
            }

            // Note: Why does it not display 2 & 3 if this is uncommented?
            // if (i == 1) {
            //     lion_currentSlide(1);
            // }

            if (i == 2) {
                gdpt_currentSlide(1);
            }

            if (i == 3) {
                viet_currentSlide(1);
            }
        } else {
            reveals[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", reveal);

// Lion dance slideshow
let lion_slideIndex = 1;
function lion_plusSlides(n) {
    lion_showSlides((lion_slideIndex += n));
}

function lion_currentSlide(n) {
    lion_showSlides((lion_slideIndex = n));
}

function lion_showSlides(n) {
    let i;
    var slides = document.getElementsByClassName("lion__slide");
    var dots = document.getElementsByClassName("lion__dot");

    if (n > slides.length) {
        lion_slideIndex = 1;
    }
    if (n < 1) {
        lion_slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[lion_slideIndex - 1].style.display = "block";
    dots[lion_slideIndex - 1].className += " active";
}

// Gdpt slideshow
let gdpt_slideIndex = 1;
function gdpt_plusSlides(n) {
    gdpt_showSlides((gdpt_slideIndex += n));
}

function gdpt_currentSlide(n) {
    gdpt_showSlides((gdpt_slideIndex = n));
}

function gdpt_showSlides(n) {
    let i;
    var slides = document.getElementsByClassName("gdpt__slide");
    var dots = document.getElementsByClassName("gdpt__dot");

    if (n > slides.length) {
        gdpt_slideIndex = 1;
    }
    if (n < 1) {
        gdpt_slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[gdpt_slideIndex - 1].style.display = "block";
    dots[gdpt_slideIndex - 1].className += " active";
}

// Viet Ngu slideshow
let viet_slideIndex = 1;
function viet_plusSlides(n) {
    viet_showSlides((viet_slideIndex += n));
}

function viet_currentSlide(n) {
    viet_showSlides((viet_slideIndex = n));
}

function viet_showSlides(n) {
    let i;
    var slides = document.getElementsByClassName("viet__slide");
    var dots = document.getElementsByClassName("viet__dot");

    if (n > slides.length) {
        viet_slideIndex = 1;
    }
    if (n < 1) {
        viet_slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[viet_slideIndex - 1].style.display = "block";
    dots[viet_slideIndex - 1].className += " active";
}
