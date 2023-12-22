import ForcastCard from "../forcastCard/ForcastCard";
import "./Forcast.scss";

function Forcast({ forcastData }: any) {
  const icon = "";
  const iconsUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;

  return (
    <div className="forcast-container">
      <ForcastCard />
    </div>
  );
}

export default Forcast;
