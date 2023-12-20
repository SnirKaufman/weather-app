import { useGetWeatherData } from "../../utils/api/useGetWeatherData";
import "./Card.scss";

function Card() {
  const { data } = useGetWeatherData();
  //make a loader and an error component and render them based of the state from the api get request
  console.log(data);
  if (!data) return;
  const {
    sys: { country },
    name,
    dt: dataTime,
    timezone,
    main,
    weather,
    wind,
  } = data;
  const { temp, feels_like } = main;
  const [{ icon }] = weather;
  const { speed: windSpeed } = wind;
  console.log(data);
  const iconsUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;

  return (
    <div className="card-container">
      <div className="card">
        <h2>
          {name} , {country}
        </h2>

        <div className="modal-temp-icon">
          <span className="card-temp">{Math.round(temp)}°</span>
          <img src={iconsUrl} />
        </div>
        <div>
          <p>Feels Like : {feels_like}°</p>
          <br />
          <p>Wind Speed: {windSpeed} mph</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
