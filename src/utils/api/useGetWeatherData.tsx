import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "./axiosInstance";
import { useContext } from "react";
import { WeatherContext } from "../../context/WeatherContext";

export function useGetWeatherData() {
  const { chosenCity } = useContext(WeatherContext);

  const weatherQuery = useQuery({
    queryKey: ["weather", chosenCity],
    queryFn: ({ queryKey: [, chosenCity] }) => {
      return axiosInstance
        .get(
          `/data/2.5/weather?q=${chosenCity}
          `
        )
        .then((res) => res.data);
    },
  });

  return weatherQuery;
}
