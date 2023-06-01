const PriceList = {
    "base": {
        1: 24.50,
        2: 29.50,
        3: 34.50,
        4: 39.50,
        5: 44.50,
        6: 49.50,
        7: 54.50,
        8: 59.50,
        9: 64.50,
        10: 69.50
    },
    "month": {
        1: 19.5,
        2: 26.5,
        3: 33.5,
        4: 40.5,
        5: 47.5,
        6: 54.5,
        7: 61.5,
        8: 68.5,
        9: 75.5,
        10: 82.5
    },
    "half-year": {
        1: 18.00,
        2: 24.00,
        3: 30.00,
        4: 36.00,
        5: 43.00,
        6: 49.00,
        7: 55.00,
        8: 62.00,
        9: 68.00,
        10: 74.00
    },
    "year": {
        1: 16.00,
        2: 21.00,
        3: 27.00,
        4: 32.00,
        5: 38.00,
        6: 44.00,
        7: 49.00,
        8: 55.00,
        9: 60.00,
        10: 66.00
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

