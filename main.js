import "./cookieconsent.js";

import "font-awesome/css/font-awesome.css"


// BOOTSTRAP START
import "./scss/custom-variables.scss";
import "./scss/style.scss";
import "bootstrap/js/dist/collapse.js";



// BOOTSTRAP END

// AOS (animate on scroll) START
import Aos from "aos";
Aos.init();
// AOS (animate on scroll) END

// SWIPER START

// core version + navigation, pagination modules:
import Swiper, { Navigation, Pagination } from "swiper";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// init Swiper:
const testimonialsSwiper = new Swiper(".testimonial-swiper", {
    // configure Swiper to use modules
    modules: [Navigation, Pagination],
    spaceBetween: 30,
    slidesPerView: 1,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});
// SWIPER END

// scroll START

const navbar = document.querySelector('.navbar')
const hasInitialDarkClass = navbar.classList.contains("navbar-dark")

function scrollClassOnBody() {
    const distanceScrolled = document.documentElement.scrollTop;
    if (distanceScrolled > 0) {
        document.body.classList.add("scrolled")
        if (hasInitialDarkClass) {
            navbar.classList.remove("navbar-dark")
        }
        
    } else {
        document.body.classList.remove("scrolled")
        if (hasInitialDarkClass) {
            navbar.classList.add("navbar-dark")
        }
    }
} 

window.addEventListener("scroll", scrollClassOnBody, true) 