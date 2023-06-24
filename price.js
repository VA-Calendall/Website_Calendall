const PriceList = {
    "base": {
        1: 19.50,
        2: 24.50,
        3: 29.50,
        4: 34.50,
        5: 39.50,
        6: 44.50,
        7: 49.50,
        8: 54.50,
        9: 59.50,
        10: 64.50
    },
    "month": {
        1: 19.50,
        2: 24.50,
        3: 29.50,
        4: 34.50,
        5: 39.50,
        6: 44.50,
        7: 49.50,
        8: 54.50,
        9: 59.50,
        10: 64.50
    },
    "half-year": {
        1: 17.50,
        2: 22.00,
        3: 26.50,
        4: 31.00,
        5: 35.50,
        6: 40.00,
        7: 44.50,
        8: 49.00,
        9: 53.50,
        10: 58.00
    },
    "year": {
        1: 15.50,
        2: 19.50,
        3: 23.50,
        4: 27.50,
        5: 31.50,
        6: 35.50,
        7: 39.50,
        8: 43.50,
        9: 47.50,
        10: 51.50
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

