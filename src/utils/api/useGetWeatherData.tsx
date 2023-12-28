import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "./axiosInstance";
import { useContext } from "react";
import { WeatherContext } from "../../context/WeatherContext";

export function useGetWeatherData() {
  const { chosenCity, changeCurrentWeatherIndex, changeWeeklyWeather } =
    useContext(WeatherContext);

  const cityCordinats = useQuery({
    queryKey: ["weather", chosenCity],
    queryFn: ({ queryKey: [, chosenCity] }) => {
      return axiosInstance
        .get(
          `/data/2.5/weather?q=${chosenCity}
          `
        )
        .then(({ data }) => data);
    },
  });

  const { data } = cityCordinats;

  const weatherData = useQuery({
    queryKey: ["weeklyWeather"],
    queryFn: () => {
      return axiosInstance
        .get(
          `/data/3.0/onecall?lat=${data?.coord?.lat}&lon=${data?.coord?.lon}`
        )
        .then(({ data }) => {
          changeCurrentWeatherIndex(0);
          changeWeeklyWeather(data.daily.slice(0, -1));
          return data;
        });
    },
    enabled: !!data?.coord?.lon && !!data?.coord?.lat,
  });

  return weatherData;
}
