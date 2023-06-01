// BOOTSTRAP START
import "./scss/style.scss";
import "bootstrap/js/dist/collapse.js";
import '@justinribeiro/lite-youtube';

//import "bootstrap/js/dist/";
// BOOTSTRAP END

import "./price.js";

// AOS (animate on scroll) START
import Aos from "aos";
Aos.init();
// AOS (animate on scroll) END

// SWIPER START

// core version + navigation, pagination modules:
// import Swiper, { Navigation, Pagination } from "swiper";
// // import Swiper and modules styles
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

document.addEventListener("DOMContentLoaded", function () {
    // init Swiper:
    // const testimonialsSwiper = new Swiper(".testimonial-swiper", {
    //     // configure Swiper to use modules
    //     modules: [Navigation, Pagination],
    //     spaceBetween: 30,
    //     slidesPerView: 1,
    //     loop: true,
    //     pagination: {
    //         el: ".swiper-pagination",
    //         clickable: true,
    //     },
    // });
    // SWIPER END
    
    // scroll START
    
    const navbar = document.querySelector('.navbar')
    
    function scrollClassOnBody() {
        const distanceScrolled = document.documentElement.scrollTop;
        if (distanceScrolled > 0) {
            document.body.classList.add("scrolled")
        } else {
            document.body.classList.remove("scrolled")
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
    let contactSend = false;

    contactForm?.addEventListener("submit", (event) => {
        event.preventDefault()
        event.stopPropagation()
        contactForm.classList.add('was-validated')
        if (!contactForm.checkValidity() || contactSend) {
            return;
        }


        const formData = new FormData(contactForm);

        const xhr = new XMLHttpRequest();
        xhr.open("POST", "https://jh7yib3aub.execute-api.eu-central-1.amazonaws.com/api/contact", true);
        xhr.setRequestHeader('Content-Type', 'application/json');

        xhr.onreadystatechange = function () {
            if (this.readyState != 4) return;
        
            if (this.status == 201 || this.status == 200) {
                const submitButton = contactForm.querySelector("[type=submit]")
                submitButton.disabled = true
                submitButton.classList.add("disabled")
                contactForm.querySelector(".send-alert").classList.remove("d-none")
                contactForm.querySelector(".send-spinner").classList.add("d-none");
                contactSend = true;
            } else {
                console.log("something went wrong")
                contactForm.querySelector(".send-error").classList.remove("d-none")
            }
            
        
        };
        console.log(contactForm)
        contactForm.querySelector(".send-spinner").classList.remove("d-none");
        xhr.send(
            JSON.stringify({
                "firstName": formData.get("firstName"),
                "lastName": formData.get("lastName"),
                "emailAddress": formData.get("emailAddress"),
                "phoneNumber": formData.get("phoneNumber"),
                "name": formData.get("companyName"),
                "notes": formData.get("notes"),
                "postalAddress": {
                    "addressLine1": formData.get("addressLine1"),
                    "city": formData.get("city"),
                    "zip": formData.get("zip"),
                    "country": formData.get("country")
                }
            })
          );


    })

})
