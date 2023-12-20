import { ReactNode, createContext, useState } from "react";

const initialValue = {
  chosenCity: "",
  changeChosenCity: (city: string) => {},
};

export const WeatherContext = createContext(initialValue);

export function WeatherContextProvider({ children }: { children: ReactNode }) {
  const [chosenCity, setChosenCity] = useState("tel aviv");

  const changeChosenCity = (city: string) => {
    setChosenCity(city);
  };

  return (
    <WeatherContext.Provider value={{ chosenCity, changeChosenCity }}>
      {children}
    </WeatherContext.Provider>
  );
}
