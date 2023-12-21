import "./Card.scss";

function Card({ cardData }: any) {
  console.log(cardData);

  return (
    <div className="card-container">
      <div className="card">
        <h2>{/* {name} , {country} */}</h2>

        <div className="card-temp-icon">
          <span className="card-temp">{"Math.round(temp)"}°</span>
          {/* <img /> */}
        </div>
        <div className="card-feels_like">
          <p>Feels Like : {"Math.round(feels_like)"}°</p>
          <br />
          <p>Wind Speed: {"Math.round(windSpeed)"} mph</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
