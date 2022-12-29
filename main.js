// BOOTSTRAP START
import "bootstrap/dist/css/bootstrap-grid.css";
import "bootstrap/dist/css/bootstrap-utilities.css";
import "./style.scss";
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

function scrollClassOnBody() {
    const distanceScrolled = document.documentElement.scrollTop;
    if (distanceScrolled > 0) {
        document.body.classList.add("scrolled")
    } else {
        document.body.classList.remove("scrolled")
    }
} 

window.addEventListener("scroll", scrollClassOnBody, true) 