import { showDate, fullDate, forecastDates, daysData } from "./functions/dates.js";

showDate(fullDate, daysData[0].day, daysData[0].date, daysData[0].month);

forecastDates.map((item, index) => showDate(item, daysData[index + 1].day, daysData[index + 1].date, daysData[index + 1].month));
