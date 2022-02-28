const date = new Date();

const weekDays = ["Sun", "Mon", "Tue", "Wed", "Tru", "Fri", "Sat"];
const monthsName = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export const forecastDates = [...document.querySelectorAll(".weatherForecast__date")];
export const fullDate = document.querySelector(".todayWeather__date--fullDate");

export function showDate(element, day, date, month) {
	return (element.textContent = `${day}, ${date} ${month}`);
}

export const daysData = [];

for (let i = 0; i < weekDays.length; i++) {
	const dayData = {
		seconds: date.getSeconds(),
		minutes: date.getMinutes(),
		hours: date.getHours(),
		day: weekDays[date.getDay()],
		date: date.getDate(),
		month: monthsName[date.getMonth()],
		year: date.getFullYear(),
	};

	date.setDate(date.getDate() + 1);

	daysData.push(dayData);
}
