// Corrected query selector variable names
const celcius = document.querySelector("#celcius");
const kelvin = document.querySelector("#kelvin");
const farenheit = document.querySelector("#farenheit");

// Event listener for Celsius input
celcius.addEventListener("input", function (e) {
    let c = parseFloat(e.target.value);
    if (!isNaN(c)) {
        let f = (c * 9 / 5) + 32; // Calculate Fahrenheit
        let k = c + 273.15; // Calculate Kelvin
        farenheit.value = f; // Set the Fahrenheit input value
        kelvin.value = k; // Set the Kelvin input value
    }
});

// Event listener for Kelvin input
kelvin.addEventListener("input", function (e) {
    let k = parseFloat(e.target.value);
    if (!isNaN(k)) {
        let c = k - 273.15; // Calculate Celsius
        let f = (c * 9 / 5) + 32; // Calculate Fahrenheit
        celcius.value = c; // Set the Celsius input value
        farenheit.value = f; // Set the Fahrenheit input value
    }
});

// Event listener for Fahrenheit input
farenheit.addEventListener("input", function (e) {
    let f = parseFloat(e.target.value);
    if (!isNaN(f)) {
        let c = (f - 32) * 5 / 9; // Calculate Celsius
        let k = (f - 32) * 5 / 9 + 273.15; // Calculate Kelvin
        celcius.value = c; // Set the Celsius input value
        kelvin.value = k; // Set the Kelvin input value
    }
});
