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
    "half-year": {
        1: 22.00,
        2: 27.00,
        3: 31.00,
        4: 36.00,
        5: 40.00,
        6: 45.00,
        7: 49.00,
        8: 54.00,
        9: 58.00,
        10: 63.00
    },
    "year": {
        1: 20.00,
        2: 24.00,
        3: 28.00,
        4: 32.00,
        5: 36.00,
        6: 40.00,
        7: 44.00,
        8: 48.00,
        9: 52.00,
        10: 56.00
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

