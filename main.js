import "font-awesome/css/font-awesome.css"


// BOOTSTRAP START
import "./scss/custom-variables.scss";
import "./scss/style.scss";
import "bootstrap/js/dist/collapse.js";
// BOOTSTRAP END

import "./price.js";

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

document.addEventListener("DOMContentLoaded", function () {
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
    scrollClassOnBody()
    window.addEventListener("scroll", scrollClassOnBody, true) 
    
    
    
    // Navigation mobile toggle

    const toggleNavigationOpenClass = function (){
        document.body.classList.toggle("navigation-open")
    }
    
    const navbarId = document.getElementById("navbarNavDropdown");

    navbarId.addEventListener("show.bs.collapse", toggleNavigationOpenClass)
    navbarId.addEventListener("hide.bs.collapse", toggleNavigationOpenClass)

    // contact form submit
    const contactForm = document.getElementById("contact-form");

    contactForm?.addEventListener("submit", (event) => {
        event.preventDefault();

        const formData = new FormData(contactForm);

        
        const xhr = new XMLHttpRequest();
        xhr.open("POST", yourUrl, true);
        xhr.setRequestHeader('Content-Type', 'application/json');

        xhr.onreadystatechange = function () {
            if (this.readyState != 4) return;
        
            if (this.status == 200) {
                var data = JSON.parse(this.responseText);
        
                // we get the returned data
                console.log("data received after post", data)
            } else {
                console.log("something went wrong")
            }
            
        
        };
        
        xhr.send(JSON.stringify({
            value: value
        }));


    })

})
