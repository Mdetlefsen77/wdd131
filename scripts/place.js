const windchill = document.querySelector('#wind-chill');
const temperature = 32;
const windspeed = 18;
function calculateWindChill(temperature, windspeed) {
    const chill = 35.74 + (0.6215 * temperature) - 35.75 * (Math.pow(windspeed, 0.16)) + 0.4275 * temperature * (Math.pow(windspeed, 0.16));
    return chill;
}
const windchillNumber = calculateWindChill(temperature, windspeed);
if (temperature <= 20 && windspeed > 4.8) {
    windchill.textContent = windchillNumber.toFixed(2);
} else {
    windchill.textContent = "N/A";
}
