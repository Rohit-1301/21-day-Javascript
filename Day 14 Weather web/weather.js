const search = document.querySelector(".search-box button");
const weatherbox = document.querySelector(".weather-box");
const weatherdetail = document.querySelector(".weather-details");

search.addEventListener("click", () => {
  const apikey = "6f735268dec32373145f152d6a7f4433";
  const city = document.querySelector(".search-bar").value;

  if (city === "") {
    return;
  }

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apikey}`
  )
    .then((response) => response.json())
    .then((json) => {
      const image = document.querySelector(".weather-box img");
      const temperature = document.querySelector(".weather-box .temperature");
      const description = document.querySelector(".weather-box .description");
      const humidity = document.querySelector(
        ".weather-details .humidity span"
      );
      const wind = document.querySelector(".weather-details .wind span");

      // Get the weather icon code from the API response
      const iconCode = json.weather[0].icon;
      // Construct the full URL for the weather icon
      const iconUrl = `http://openweathermap.org/img/wn/${iconCode}@2x.png`;
      // Set the src attribute of the img tag to the icon URL
      image.src = iconUrl;

      temperature.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`;
      description.innerHTML = json.weather[0].description;
      humidity.innerHTML = `${json.main.humidity}%`;
      wind.innerHTML = `${json.wind.speed} km/h`;

      // Ensure the weather box and details are displayed
      weatherbox.style.display = "block";
      weatherdetail.style.display = "block";
    });
});
