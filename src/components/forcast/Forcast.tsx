import ForcastCard from "../forcastCard/ForcastCard";
import "./Forcast.scss";
import { WeatherContext } from "../../context/WeatherContext";
import { useContext } from "react";

function Forcast() {
  const { weeklyWeather, changeCurrentWeatherIndex } =
    useContext(WeatherContext);

  return (
    <ul className="forcast-container">
      <div className="forcast-list-container">
        {weeklyWeather.map((dayData, index) => {
          return (
            <ForcastCard
              index={index}
              onClick={() => changeCurrentWeatherIndex(index)}
              key={index}
              dayData={dayData}
            />
          );
        })}
      </div>
    </ul>
  );
}

export default Forcast;
