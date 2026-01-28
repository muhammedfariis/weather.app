import axios from "axios";

const apikey = import.meta.env.VITE_WEATHER_API_KEY;


export const getCityWeather = (city) => {
  return axios.get("https://api.openweathermap.org/data/2.5/weather", {
    params: {
      q: city,
      appid: apikey,
      units: "metric",
    },
  });
};

export const getLocationWeather = (lat, lon) => {
  return axios.get("https://api.openweathermap.org/data/2.5/forecast", {
    params: {
      lat,
      lon,
      appid: apikey,
      units: "metric",
    },
  });
};
