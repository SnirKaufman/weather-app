import ForcastCard from "../forcastCard/ForcastCard";
import "./Forcast.scss";
import { WeatherContext } from "../../context/WeatherContext";
import { useContext } from "react";

function Forcast() {
  const { weeklyWeather, changeCurrentWeatherIndex } =
    useContext(WeatherContext);
  console.log(weeklyWeather);
  return (
    <ul className="forcast-container">
      {weeklyWeather.map((dayData, index) => {
        return (
          <ForcastCard
            onClick={() => changeCurrentWeatherIndex(index)}
            key={index}
            dayData={dayData}
          />
        );
      })}
    </ul>
  );
}

export default Forcast;
