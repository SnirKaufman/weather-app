import { getDates } from "../../utils/getDates";
import "./forcastCard.scss";
import { WeatherContext } from "../../context/WeatherContext";
import { useContext } from "react";

function ForcastCard({ dayData, onClick, index }: any) {
  const { currentWeatherIndex } = useContext(WeatherContext);

  if (!dayData) return;
  const { temp } = dayData;
  const { day: dayTemp } = temp;
  const { weather } = dayData;
  const [{ icon }] = weather;
  console.log(index);

  const iconsUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;

  const currentDate = new Date();
  currentDate.setDate(currentDate.getDate() + index);
  const { dayName, dayOfMonth, monthName } = getDates(currentDate);

  return (
    <div
      id={currentWeatherIndex === index ? `selected-forcast` : ""}
      className="forcast-card-list-item"
      onClick={onClick}
    >
      <h3>{dayName}</h3>
      <p>
        {dayOfMonth} {monthName}
      </p>
      <div className="forcast-card-bottom">
        <img src={iconsUrl} />
        <p>{Math.round(dayTemp)} °</p>
      </div>
    </div>
  );
}

export default ForcastCard;
