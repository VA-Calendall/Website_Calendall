import 'cmel_cookieconsent/src/style.scss';

import { Consent } from 'cmel_cookieconsent/src/core/consent';
import config from 'cmel_cookieconsent/src/testconfigs/basic.json';

config.cookie.domain = "localhost"
console.log(config.cookie.domain)

window.consent = new Consent(config);

var cookieconsentElement = document.createElement("div")
cookieconsentElement.classList.add("cookieconsent", "cookieconsent__position--right")
cookieconsentElement.setAttribute("id", "cookieconsent")

console.log(window.consent.acceptedCategories.length)

if (window.consent.acceptedCategories.length > 0) {
    cookieconsentElement.classList.add("cookieconsent__hide")
}

cookieconsentElement.innerHTML = `<div class="cookieconsent__container">
<div class="cookieconsent__header">
    <h3>${config.general.headline}</h3>
    <p>${config.general.description}</p>
</div>
<form id="cookieconsent__form">
    <div class="cookieconsent__form__categories">
    
    </div>
    <div class="cookieconsent__form__buttons">
        <button>
            Speichern
        </button>
    </div>
</form>
</div>`


document.querySelector('body').append(cookieconsentElement)


const categories = config.possibleCookies.map(category => {
    const categoryStatus = window.consent.getStatus(category)
    return `
        <div class="cookieconsent__form__category">
            <label class="cookieconsent__form__category__heading">
                ${category.name}
                <div class="cookieconsent__form__category__switch">
                    <input name="category_${category.id}" type="checkbox" ${category.required ? 'checked="true" disabled' : (categoryStatus ? 'checked="true"': '')} />
                </div>
            </label>
            <div class="cookieconsent__form__category__details">
                ${category.description}
            </div>
        </div>
    `
})

document.querySelector('.cookieconsent__form__categories').innerHTML = categories.join("");



const formElement = document.querySelector('#cookieconsent__form')
formElement?.addEventListener("submit", function (e) {
    e.preventDefault();
    e.stopPropagation();
    config.possibleCookies.forEach(category => {
        const checkbox = formElement.elements.namedItem("category_" + category.id)
        console.log(checkbox.checked)
        if (checkbox && checkbox.checked) {
            window.consent.accept(category)
        } else {
            window.consent.deny(category)
        }

    })

    cookieconsentElement.classList.add("cookieconsent__hide")
})