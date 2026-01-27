import { useEffect, useState } from "react";
import axios from "axios";
const Weather = () => {
  const [city, setCity] = useState("kozhikode");
  const [loading, setLoading] = useState(false);
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    weatherlogic();
  }, [city]);

  const weatherlogic = () => {
    if (!city) return;

    try {
      setLoading(true);

      const res = axios.get("https://api.openweathermap.org/data/2.5/weather", {
        params: {
          q: city,
          appid: import.meta.env.VITE_WEATHER_API_KEY,
          units: "matrics",
        },
      });

      setWeather(res.data);
      setError("");
    } catch (err) {
      setError("api not working");
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  return(
       

  )
};
