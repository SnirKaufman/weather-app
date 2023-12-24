import { useContext } from "react";
import "./Card.scss";
import { WeatherContext } from "../../context/WeatherContext";
import { getDates } from "../../utils/getDates";

function Card() {
  const { chosenCity, weeklyWeather, currentWeatherIndex } =
    useContext(WeatherContext);
  if (!weeklyWeather[currentWeatherIndex]) return;

  const {
    humidity,
    summary,
    wind_speed: windSpeed,
    temp,
    weather,
  } = weeklyWeather[currentWeatherIndex];
  const { day: dayTemp } = temp;
  const [{ main: cloudiness }] = weather;

  const currentDate = new Date();
  currentDate.setDate(currentDate.getDate() + currentWeatherIndex);
  const { dayName, dayOfMonth, monthName } = getDates(currentDate);

  return (
    <>
      <div className="temp-info">
        <span>{Math.round(dayTemp)}° </span>
        <h3>{cloudiness}</h3>
      </div>

      <div className="card-container">
        <div className="card">
          <div className="card-header">
            <p>{dayName}</p>
            <p>
              {dayOfMonth} {monthName}
            </p>
          </div>
          <div className="card-city">
            <h2>{chosenCity}</h2>
          </div>
          <div className="card-humidity-wind">
            <p>Humidity: {humidity}%</p>
            <p>Wind: {windSpeed} mph</p>
          </div>
          <div className="card-bottom">
            <p>Summary : {summary} day</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
