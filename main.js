// BOOTSTRAP START
import "./scss/style.scss";
import "bootstrap/js/dist/collapse.js";
import "bootstrap/js/dist/dropdown.js";
import '@justinribeiro/lite-youtube';

//import "bootstrap/js/dist/";
// BOOTSTRAP END

import "./price.js";

// AOS (animate on scroll) START
import Aos from "aos";
Aos.init();
console.log("hello", Aos);
// AOS (animate on scroll) END

// SWIPER START

// core version + navigation, pagination modules:
import Swiper, { Navigation, Pagination } from "swiper";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


export function randomColor() {
    return defaultColors[Math.floor(Math.random() * defaultColors.length)];
  }
  
  
  export const defaultColors = [
    {
      color: "rojo", primary: "#E57373", secondary: "#FFCDD2", variants:
        ["#FFEBEE", "#FFCDD2", "#EF9A9A", "#E57373", "#EF5350", "#F44336", "#E53935", "#D32F2F", "#C62828"]
    },
    {
      color: "rosa", primary: "#F06292", secondary: "#F8BBD0", variants:
        ["#FCE4EC", "#F8BBD0", "#F48FB1", "#F06292", "#EC407A", "#E91E63", "#D81B60", "#C2185B", "#AD1457"]
    },
    {
      color: "purpura", primary: "#BA68C8", secondary: "#E1BEE7", variants:
        ["#F3E5F5", "#E1BEE7", "#CE93D8", "#BA68C8", "#AB47BC", "#9C27B0", "#8E24AA", "#7B1FA2", "#6A1B9A"]
    },
    {
      color: "purpura oscuro", primary: "#9575CD", secondary: "#D1C4E9", variants:
        ["#EDE7F6", "#D1C4E9", "#B39DDB", "#9575CD", "#7E57C2", "#673AB7", "#5E35B1", "#512DA8", "#4527A0"]
    },
    {
      color: "indigo", primary: "#7986CB", secondary: "#C5CAE9", variants:
        ["#E8EAF6", "#C5CAE9", "#9FA8DA", "#7986CB", "#5C6BC0", "#3F51B5", "#3949AB", "#303F9F", "#283593"]
    },
    {
      color: "azul", primary: "#64B5F6", secondary: "#BBDEFB", variants:
        ["#E3F2FD", "#BBDEFB", "#90CAF9", "#64B5F6", "#42A5F5", "#2196F3", "#1E88E5", "#1976D2", "#1565C0"]
    },
    {
      color: "celeste", primary: "#4FC3F7", secondary: "#B3E5FC", variants:
        ["#E1F5FE", "#B3E5FC", "#81D4FA", "#4FC3F7", "#29B6F6", "#03A9F4", "#039BE5", "#0288D1", "#0277BD"]
    },
    {
      color: "cyan", primary: "#4DD0E1", secondary: "#B2EBF2", variants:
        ["#E0F7FA", "#B2EBF2", "#80DEEA", "#4DD0E1", "#26C6DA", "#00BCD4", "#00ACC1", "#0097A7", "#00838F"]
    },
    {
      color: "fountain blue", primary: "#4DB6AC", secondary: "#B2DFDB", variants:
        ["#E0F2F1", "#B2DFDB", "#80CBC4", "#4DB6AC", "#26A69A", "#009688", "#00897B", "#00796B", "#00695C"]
    },
    {
      color: "verde", primary: "#81C784", secondary: "#C8E6C9", variants:
        ["#E8F5E9", "#C8E6C9", "#A5D6A7", "#81C784", "#66BB6A", "#4CAF50", "#43A047", "#388E3C", "#2E7D32"]
    },
    {
      color: "verde claro", primary: "#AED581", secondary: "#DCEDC8", variants:
        ["#F1F8E9", "#DCEDC8", "#C5E1A5", "#AED581", "#9CCC65", "#8BC34A", "#7CB342", "#689F38", "#558B2F"]
    },
    {
      color: "lima", primary: "#DCE775", secondary: "#F0F4C3", variants:
        ["#F9FBE7", "#F0F4C3", "#E6EE9C", "#DCE775", "#D4E157", "#CDDC39", "#C0CA33", "#AFB42B", "#9E9D24"]
    },
    {
      color: "amarillo", primary: "#FFF176", secondary: "#FFF9C4", variants:
        ["#FFFDE7", "#FFF9C4", "#FFF59D", "#FFF176", "#FFEE58", "#FFEB3B", "#FDD835", "#FBC02D", "#F9A825"]
    },
    {
      color: "ambar", primary: "#FFD54F", secondary: "#FFECB3", variants:
        ["#FFF8E1", "#FFECB3", "#FFE082", "#FFD54F", "#FFCA28", "#FFC107", "#FFB300", "#FFA000", "#FF8F00"]
    },
    {
      color: "naranja", primary: "#FFB74D", secondary: "#FFE0B2", variants:
        ["#FFF3E0", "#FFE0B2", "#FFCC80", "#FFB74D", "#FFA726", "#FF9800", "#FB8C00", "#F57C00", "#EF6C00"]
    },
    {
      color: "naranja oscuro", primary: "#FF8A65", secondary: "#FFCCBC", variants:
        ["#FBE9E7", "#FFCCBC", "#FFAB91", "#FF8A65", "#FF7043", "#FF5722", "#F4511E", "#E64A19", "#D84315"]
    },
    {
      color: "marron", primary: "#A1887F", secondary: "#D7CCC8", variants:
        ["#EFEBE9", "#D7CCC8", "#BCAAA4", "#A1887F", "#8D6E63", "#795548", "#6D4C41", "#5D4037", "#4E342E"]
    },
    {
      color: "escala de grises", primary: "#E0E0E0", secondary: "#FAFAFA", variants:
        ["#FAFAFA", "#F5F5F5", "#EEEEEE", "#E0E0E0", "#BDBDBD", "#9E9E9E", "#757575", "#616161", "#424242"]
    },
    {
      color: "azul gris", primary: "#90A4AE", secondary: "#CFD8DC", variants:
        ["#ECEFF1", "#CFD8DC", "#B0BEC5", "#90A4AE", "#78909C", "#607D8B", "#546E7A", "#455A64", "#37474F"]
    }];


document.addEventListener("DOMContentLoaded", function () {
    // init Swiper:
    
    const testimonialsSwiper = new Swiper(".testimonial-swiper", {
        // configure Swiper to use modules
        modules: [Navigation, Pagination],
        spaceBetween: 30,
        slidesPerView: 1,
        loop: document.querySelectorAll('.testimonial-swiper .swiper-slide').length > 1,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
    const contenSwiper = new Swiper(".signup-swiper", {
        // configure Swiper to use modules
        modules: [Navigation, Pagination],
        spaceBetween: 30,
        slidesPerView: 1,
        autoHeight: true,
        loop: document.querySelectorAll('.signup-swiper .swiper-slide').length > 1,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
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


    // quicksignup
    const quickSignUpForm = document.getElementById("quick-signup-form");
    let quickSignUpSend = false;

    quickSignUpForm?.addEventListener("submit", (event) => {
        event.preventDefault()
        event.stopPropagation()
        quickSignUpForm.classList.add('was-validated')
        if (!quickSignUpForm.checkValidity() || quickSignUpSend) {
            return;
        }


        const formData = new FormData(quickSignUpForm);

        const xhr = new XMLHttpRequest();
        xhr.open("POST", "https://jh7yib3aub.execute-api.eu-central-1.amazonaws.com/api/quick-signup", true);
        xhr.setRequestHeader('Content-Type', 'application/json');

        xhr.onreadystatechange = function () {
            if (this.readyState != 4) return;
        
            if (this.status == 201 || this.status == 200) {
                const submitButton = quickSignUpForm.querySelector("[type=submit]")
                submitButton.disabled = true
                submitButton.classList.add("disabled")
                quickSignUpForm.querySelector(".send-alert").classList.remove("d-none")
                quickSignUpForm.querySelector(".send-spinner").classList.add("d-none");
                quickSignUpSend = true;

                document.querySelector('.signup-form-box').classList.add("d-none");
                document.querySelector('.after-signup').classList.remove("d-none");
                console.log(this)

            } else {
                console.log("something went wrong")
                quickSignUpForm.querySelector(".send-error").classList.remove("d-none")
            }
            
        
        };
        quickSignUpForm.querySelector(".send-spinner").classList.remove("d-none");

        xhr.send(
            JSON.stringify({
                name: formData.get("businessNameInput"),
                maxEmployees: formData.get("numberOfUserInput"),
                testOrBuy: "buy",
                duration: undefined,
                notes: undefined,
                administrator: {
                    alias: formData.get("emailInput").split('@')[0],
                    firstName: '',
                    lastName: '',
                    phoneNumber: formData.get("telInput"),
                    emailAddress: formData.get("emailInput"),
                    canLogin: true,
                    color: randomColor(),
                },
                contactMe: false
            })
          );
    })
})
