import { weatherData } from "./call-apis.js";

//  TODO cambiar la ciudad y el pais
const city = document.querySelector(".todayWeather__city");
const country = document.querySelector(".todayWeather__country");

const temperature = document.querySelector(".todayWeather__temperature");
const weatherStatus = document.querySelector(".todayWeather__weatherStatus");

const forecastMinTemperature = [...document.querySelectorAll(".weatherForecast__temperature--min")];
const forecastMaxTemperature = [...document.querySelectorAll(".weatherForecast__temperature--max")];

const windStatistic = document.getElementById("windStatus");
const humidityStatidtic = document.getElementById("humidity");
const visibilityStatistic = document.getElementById("visibility");
const airPressureStatistic = document.getElementById("airPressure");

export const changeData = function () {
	temperature.childNodes[0].textContent = weatherData[0].main.feels_like;
	weatherStatus.textContent = weatherData[0].weather[0].main;

	forecastMinTemperature.forEach((item, index) => {
		// NOTE añadir el grado dinamicamente == ${}
		item.textContent = `${weatherData[1].daily[index].temp.min}ºC`;
	});

	forecastMaxTemperature.forEach((item, index) => {
		// NOTE añadir el grado dinamicamente == ${}
		item.textContent = `${weatherData[1].daily[index].temp.max}ºC`;
	});

	// NOTE cambia las unidades de todos estas estaditicas
	windStatistic.childNodes[0].textContent = weatherData[0].wind.speed;
	humidityStatidtic.childNodes[0].textContent = weatherData[0].main.humidity;
	visibilityStatistic.childNodes[0].textContent = weatherData[0].visibility;
	airPressureStatistic.childNodes[0].textContent = weatherData[0].main.pressure;
};
