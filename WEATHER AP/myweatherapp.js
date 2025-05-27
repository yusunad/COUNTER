const weatherForm = document.querySelector(".weatherForm");
const searchInput = document.querySelector(".searchInput");
const searchButton = document.querySelector(".searchButton");
const city = document.querySelector(".city");
const cityTemperature = document.querySelector(".cityTemperature");
const weathercondition = document.querySelector(".weathercondition");
const humidity = document.querySelector(".humidity");
const pressure = document.querySelector(".pressure");
const temperature = document.querySelector(".temperature");
const showWeather = document.querySelector(".tohide");

async function getWeather(cityName) {
  try {
    const weatherResponse = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=1f04563dcabd6e972cc8ee0c2d94c9d4&units=metric`
    );
    const weatherData = await weatherResponse.json();
    console.log(weatherData);
    cityTemperature.textContent = `${weatherData.main.temp}°C`;
    city.textContent = `Location: ${weatherData.name}`;
    temperature.textContent = `Temperature: ${weatherData.main.temp}°C`;
    weathercondition.textContent = `Weather Condition: ${weatherData.weather[0].description}`;
    humidity.textContent = `Humidity: ${weatherData.main.humidity}%`;
    pressure.textContent = `Pressure: ${weatherData.main.pressure}hPa`;
    // fetchStatus.textContent = "Weather data fetched successfully!";

    fetchStatus.textContent = "";
  } catch (error) {
    fetchStatus.textContent = "Error fetching weather data. Please try again.";
    fetchStatus.style.color = "red";
  }
}

getWeather(searchInput.value);

addEventListener("submit", function (event) {
  event.preventDefault();
  getWeather(searchInput.value);
  showWeather.classList.remove("tohide");
});

/*
"weather": [
    {
      "id": 804,
      "main": "Clouds",
      "description": "overcast clouds",
      "icon": "04d"
    }
*/

/* async function fetchWeather(cityName) {
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
*/
