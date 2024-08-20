function convertCelsiusToFahrenheit() {
    // Get the Celsius temperature from the input field
    const celsius = parseFloat(document.getElementById("celsius").value);

    // Calculate the Fahrenheit temperature
    const fahrenheit = (celsius * 9 / 5) + 32;

    // Display the Fahrenheit temperature in the paragraph element
    document.getElementById("fahrenheit").innerHTML = "Fahrenheit temperature: " + fahrenheit.toFixed(2);
  }