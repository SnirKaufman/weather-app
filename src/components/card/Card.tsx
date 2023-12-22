import { useContext } from "react";
import "./Card.scss";
import { WeatherContext } from "../../context/WeatherContext";

function Card({ cardData }: any) {
  const { chosenCity } = useContext(WeatherContext);
  if (!cardData) return;
  const { current = {} } = cardData;
  const { timezone } = cardData;
  const {
    temp,
    humidity,
    feels_like: feelsLike,
    wind_speed: windSpeed,
    clouds,
    weather = [{}],
  } = current;
  const [{ main: cloudiness }] = weather;
  console.log(cardData);

  return (
    <>
      <div className="temp-info">
        <span>{Math.round(temp)}° </span>
        <h3>{cloudiness}</h3>
      </div>

      <div className="card-container">
        <div className="card">
          <div className="card-header">
            <p>Firday</p>
            <p>22 Dec</p>
          </div>
          <div className="card-city">
            <h2>{chosenCity}</h2>
          </div>
          <div className="card-humidity-wind">
            <p>Humidity: {humidity}%</p>
            <p>Wind: {windSpeed} mph</p>
          </div>
          <div className="card-bottom">
            <span>Feels Like : {Math.round(feelsLike)} °</span>
            <span>Clouds : {clouds}</span>
            <span>Timezone : {timezone}</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
