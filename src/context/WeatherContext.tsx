import { ReactNode, createContext, useState } from "react";

type initialValueTypes = {
  chosenCity: string;
  changeChosenCity: (city: string) => void;
  changeCurrentWeatherIndex: (number: number) => void;
  changeWeeklyWeather: (weeklyWeather: []) => void;
  currentWeatherIndex: number;
  weeklyWeather: any;
};

const initialValue: initialValueTypes = {
  chosenCity: "",
  changeChosenCity: () => {},
  changeCurrentWeatherIndex: () => {},
  changeWeeklyWeather: () => {},
  currentWeatherIndex: 0,
  weeklyWeather: [],
};

export const WeatherContext = createContext(initialValue);

export function WeatherContextProvider({ children }: { children: ReactNode }) {
  const [chosenCity, setChosenCity] = useState("Tel Aviv");
  const [currentWeatherIndex, setCurrentWeatherIndex] = useState(0);
  const [weeklyWeather, setWeeklyWeather] = useState([]);

  console.log(weeklyWeather);

  const changeCurrentWeatherIndex = (dayIndex: number) => {
    setCurrentWeatherIndex(dayIndex);
  };

  const changeWeeklyWeather = (weeklyWeather: []) => {
    setWeeklyWeather(weeklyWeather);
  };

  const changeChosenCity = (city: string) => {
    setChosenCity(city);
  };

  return (
    <WeatherContext.Provider
      value={{
        chosenCity,
        changeChosenCity,
        changeCurrentWeatherIndex,
        changeWeeklyWeather,
        currentWeatherIndex,
        weeklyWeather,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
}
