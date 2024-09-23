// https://api.openweathermap.org/data/2.5/weather?q=egypt&appid=3c1f263d66e9cac7d4afc929d74aa7eb&units=metric

let apiKey = "3c1f263d66e9cac7d4afc929d74aa7eb";
let apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

async function checkWeather(city) {
  let response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  let data = await response.json();
  // console.log(data);

  document.querySelector(".city").innerHTML = `${data.name}`;
  let temp = document.querySelector(".temp");
  temp.innerHTML = `${Math.round(data.main.temp)} °c`;
  document.querySelector(".humidity").innerHTML = `${data.main.humidity}% `;
  document.querySelector(".wind").innerHTML = `${data.wind.speed} km/h`;

  let weatherIcon = document.querySelector(".weather-icon");
  if (data.weather[0].main == "Clouds") {
    weatherIcon.setAttribute("src", "images/clouds.png");
  } else if (data.weather[0].main == "Clear") {
    weatherIcon.setAttribute("src", "images/clear.png");
  } else if (data.weather[0].main === "Drizzle") {
    weatherIcon.setAttribute("src", "images/drizzle.png");
  } else if (data.weather[0].main === "Mist") {
    weatherIcon.setAttribute("src", "images/mist.png");
  } else if (data.weather[0].main === "Rain") {
    weatherIcon.setAttribute("src", "images/rain.png");
  } else {
    weatherIcon.setAttribute("src", "images/snow.png");
  }
}

let searchBtn = document.getElementById("btn-search");
let valueSearch = document.querySelector(".search input");

// checkWeather();
checkWeather("sohag");
searchBtn.addEventListener("click", () => {
  if (valueSearch.value === "") {
    alert("Must Enter City");
  } else {
    checkWeather(valueSearch.value);
  }
  valueSearch.value = "";
});

valueSearch.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    if (valueSearch.value === "") {
      alert("Must Enter City");
    } else {
      let inputValue = valueSearch.value;
      // console.log(inputValue);
      checkWeather(inputValue);
    }
    valueSearch.value = "";
  }
});
