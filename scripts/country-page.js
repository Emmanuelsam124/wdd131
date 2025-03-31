let windchill = document.getElementById("windChill");

const windchillFunc = (wind, temp) => 35.74 + 0.6215 * temp - 35.75 * (wind ** 0.16) + 0.4275 * temp * (wind ** 0.16);

const wind = 5;
const temp = 10;

if (wind > 3  || temp <= 50) {
    windChill.textContent = "N/A"
}else{
windChill.textContent = windchillFunc(wind, temp)
}