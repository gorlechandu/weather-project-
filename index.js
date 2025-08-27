const apiKey = "7b61e4417e40eb392bf7c75e277f0cff";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  //   console.log(response);

  if (response.status == 404) {
    document.querySelector(".city").innerHTML = "City Not Found";
    document.querySelector(".temp").innerHTML = "-- °C";
    document.querySelector(".humidity").innerHTML = "--%";
    document.querySelector(".wind").innerHTML = "-- km/h";
    weatherIcon.src = "images/mist.png"; // default error icon
    return;
  }

  const data = await response.json();

  //   console.log(data);

  // Update UI
  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

  // Change weather icon
  if (data.weather[0].main == "Clouds") {
    weatherIcon.src = "images/clouds.png";
  } else if (data.weather[0].main == "Clear") {
    weatherIcon.src = "images/clear.png";
  } else if (data.weather[0].main == "Rain") {
    weatherIcon.src = "images/rain.png";
  } else if (data.weather[0].main == "Drizzle") {
    weatherIcon.src = "images/drizzle.png";
  } else if (data.weather[0].main == "Mist") {
    weatherIcon.src = "images/mist.png";
  }
}

// Search button click
searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});

// function CalculateAge(dob) {
//   let age = dob;
//   let sub = 2025;
//   return sub - age;
// return 2025 - dob;
// }

// console.log(CalculateAge(2002));
// console.log(CalculateAge(2000));

// function Calc(r) {
//   let a = 2 * 3.14 * r;

//   return a;
// }

// console.log(Calc(3));
// console.log(Calc(10));

// function PrintName(n) {
//   let a = "goodmorning";

//   return a + "kumar";
// }
// console.log(PrintName("kumar"));

// console.log(PrintName("chandu"));

function PrintName(b) {
  let a = "goodmorning";
  return a + b;
}

console.log(PrintName("kumar"));
console.log(PrintName("chandu"));
console.log(PrintName("mahesh"));
