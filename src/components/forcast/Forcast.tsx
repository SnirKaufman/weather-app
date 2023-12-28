import { Swiper, SwiperSlide } from "swiper/react";
import "./Forcast.scss";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { useContext } from "react";
import { WeatherContext } from "../../context/WeatherContext";
import ForcastCard from "../forcastCard/ForcastCard";

export default function Forcast() {
  const { weeklyWeather, changeCurrentWeatherIndex } =
    useContext(WeatherContext);
  return (
    <>
      <div className="forcast-container">
        <Swiper
          slidesPerView={2}
          breakpoints={{
            640: {
              slidesPerView: 4,
            },
            1352: {
              slidesPerView: 4,
            },
            1500: {
              slidesPerView: 7,
            },
          }}
          pagination={true}
          modules={[Pagination]}
          className="mySwiper"
        >
          {weeklyWeather.map((dayData: any, index: number) => {
            return (
              <SwiperSlide key={index}>
                <ForcastCard
                  index={index}
                  onClick={() => changeCurrentWeatherIndex(index)}
                  key={index}
                  dayData={dayData}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
}
