//1f04563dcabd6e972cc8ee0c2d94c9d4

const weatherForm = document.querySelector("#weather-form");
const searchInput = document.querySelector("#city-input");
const temperatureDisplay = document.querySelector("#temperature");
const descriptionDisplay = document.querySelector("#description");
const fetchStatus = document.querySelector("#status");

async function fetchWeather(cityName) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=1f04563dcabd6e972cc8ee0c2d94c9d4&units=metric`
    );

    const weatherData = await response.json();

    console.log(weatherData);
    temperatureDisplay.textContent = `Temperature: ${weatherData.main.temp}°C`;
    fetchStatus.textContent = "";
  } catch (error) {
    fetchStatus.textContent = "Error fetching weather data. Please try again.";
    fetchStatus.style.color = "red";
  }
}
fetchWeather(searchInput.value);

weatherForm.addEventListener("submit", function (event) {
  event.preventDefault();
  fetchWeather(searchInput.value);
});
