import { weatherData } from "./call-apis.js";

//  TODO cambiar la ciudad y el pais
const city = document.querySelector(".todayWeather__city");
const country = document.querySelector(".todayWeather__country");

const temperature = document.querySelector(".todayWeather__temperature");
const temperatureUnit = document.querySelector(".todayWeather__temperature--unitType");
const weatherStatus = document.querySelector(".todayWeather__weatherStatus");

const forecastMinTemperature = [...document.querySelectorAll(".weatherForecast__temperature--min")];
const forecastMaxTemperature = [...document.querySelectorAll(".weatherForecast__temperature--max")];

const windStatistic = document.getElementById("windStatus");
const humidityStatidtic = document.getElementById("humidity");
const visibilityStatistic = document.getElementById("visibility");
const airPressureStatistic = document.getElementById("airPressure");

const UNITS = {
	kelvin: "ºK",
	fahrenheit: "ºF",
	celsius: "ºC",
};

export const changeData = function () {
	temperature.childNodes[0].textContent = Math.round(weatherData[0].main.feels_like);
	temperatureUnit.textContent = `${UNITS.kelvin}`;

	weatherStatus.textContent = weatherData[0].weather[0].main;

	forecastMinTemperature.forEach((item, index) => {
		item.textContent = `${Math.round(weatherData[1].daily[index].temp.min)}${UNITS.kelvin}`;
	});

	forecastMaxTemperature.forEach((item, index) => {
		item.textContent = `${Math.round(weatherData[1].daily[index].temp.max)}${UNITS.kelvin}`;
	});

	windStatistic.childNodes[0].textContent = weatherData[0].wind.speed.toFixed(1);
	humidityStatidtic.childNodes[0].textContent = weatherData[0].main.humidity;
	visibilityStatistic.childNodes[0].textContent = (weatherData[0].visibility / 1609).toFixed(1);
	airPressureStatistic.childNodes[0].textContent = weatherData[0].main.pressure;
};
