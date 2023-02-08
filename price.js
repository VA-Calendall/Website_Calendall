const PriceList = {
    "base": {
        1: 39.98,
        2: 59.98,
        3: 79.98,
        4: 99.98,
        5: 119.98,
        6: 139.98,
        7: 159.98,
        8: 179.98,
        9: 199.98,
        10: 219.98
    },
    "month": {
        1: 29.98,
        2: 44.98,
        3: 59.98,
        4: 74.98,
        5: 89.98,
        6: 104.98,
        7: 119.98,
        8: 134.98,
        9: 149.98,
        10: 164.98
    },
    "half-year": {
        1: 25.98,
        2: 38.98,
        3: 51.98,
        4: 64.98,
        5: 77.98,
        6: 90.98,
        7: 103.98,
        8: 116.98,
        9: 129.98,
        10: 142.98
    },
    "year": {
        1: 19.98,
        2: 29.98,
        3: 39.98,
        4: 49.98,
        5: 59.98,
        6: 69.98,
        7: 79.98,
        8: 89.98,
        9: 99.98,
        10: 109.98
    }
};

const changePrice = function (element, price) {
    let priceDecimals = price.toFixed(2);
    element.innerHTML = priceDecimals
}

const handlePriceInput = function (employeeInput) {
    

    if (parseInt(employeeInput.value) <= 0) {
        employeeInput.value = 1
    }


    const employees = employeeInput.value
    let index =  employees;
    if (employees >= 10) {
        index = 10
    } else if (employees <= "") {
        index = 1
    }
    
    const basePrices = document.querySelectorAll('.base-price-per-month');
    for (let i = 0; i < basePrices.length; i++) {
        changePrice(basePrices[i], PriceList["base"][index])
    }
    
    // monthly
    changePrice(document.getElementById("monthly-payment-price-per-month"), PriceList["month"][index])
    //changePrice(document.getElementById("monthly-payment-price-per-year"), PriceList["month"][index] * 12)

    // half year
    changePrice(document.getElementById("half-yearly-payment-price-per-month"), PriceList["half-year"][index])
    //changePrice(document.getElementById("half-yearly-payment-price-per-year"), PriceList["half-year"][index] * 12)

    // year
    changePrice(document.getElementById("yearly-payment-price-per-month"), PriceList["year"][index])
    //changePrice(document.getElementById("yearly-payment-price-per-year"), PriceList["year"][index] * 12)
    
}


document.addEventListener("DOMContentLoaded", function () {
    const employeeInput = document.querySelector('#employee-input')
    const value = document.querySelector("#employee_value")

    if (value && employeeInput) {
        handlePriceInput(employeeInput)
        employeeInput.addEventListener("input", () => handlePriceInput(employeeInput))

        value.textContent = employeeInput.value
        employeeInput.addEventListener("input", (event) => {
            value.textContent = event.target.value
        })
    }
});


//Value

