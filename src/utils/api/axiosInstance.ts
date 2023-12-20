import axios from "axios";

export const axiosInstance = axios.create({
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  baseURL: "https://api.openweathermap.org",
});

axiosInstance.interceptors.request.use(
  (config) => {
    config.params = {
      ...config.params,
      apikey: import.meta.env.VITE_WEATHER_API_KEY,
      units: "metric",
    };

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
