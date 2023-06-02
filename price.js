const PriceList = {
    "base": {
        1: 24.50,
        2: 31.50,
        3: 38.50,
        4: 45.50,
        5: 52.50,
        6: 59.50,
        7: 66.50,
        8: 73.50,
        9: 80.50,
        10: 87.50
    },
    "month": {
        1: 24.50,
        2: 31.50,
        3: 38.50,
        4: 45.50,
        5: 52.50,
        6: 59.50,
        7: 66.50,
        8: 73.50,
        9: 80.50,
        10: 87.50
    },
    "half-year": {
        1: 22.00,
        2: 28.00,
        3: 35.00,
        4: 41.00,
        5: 47.00,
        6: 54.00,
        7: 60.00,
        8: 66.00,
        9: 72.00,
        10: 79.00
    },
    "year": {
        1: 20.00,
        2: 25.00,
        3: 31.00,
        4: 36.00,
        5: 42.00,
        6: 48.00,
        7: 53.00,
        8: 59.00,
        9: 64.00,
        10: 70.00
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

