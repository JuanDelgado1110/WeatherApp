import { changeData } from "./change-data.js";

const API_KEY = "b94d5db42f8cfa0c403d42148f688715";

export const weatherData = [];

export const CallAPI = function () {
	const onSucces = function (position) {
		fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${API_KEY}`)
			.then((response) => response.json())
			.then((data) => {
				weatherData.push(data);

				changeData();
			})
			.catch((error) => {
				// TODO hacer algo con los errores
				alert("se produjo un error");

				console.log(error);
			});

		fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${API_KEY}`)
			.then((response) => response.json())
			.then((data) => weatherData.push(data))
			.catch((error) => console.log(error));
	};

	const onError = function (error) {
		console.log(error);
	};

	navigator.geolocation.getCurrentPosition(onSucces, onError);
};
