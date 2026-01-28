import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getCityWeather } from "../api/weatherapi";
import {SearchIcon , } from "lucide-react"

const Search = ({ setWeatherData }) => {
  const [city, setCity] = useState("");
  const navigate = useNavigate();

  const searchCity = async () => {
    try {
      if (!city.trim()) return;

      const res = await getCityWeather(city);

      const data = {
        city: res.data.name,
        temp: res.data.main.temp,
        weather: res.data.weather[0],
      };

      localStorage.setItem("weatherData", JSON.stringify(data));
      setWeatherData(data);
      navigate("/");
    } catch (err) {
      alert("City not found");
    }
  };

return (
  <div className="min-h-screen  p-5 flex justify-center items-center w-full">
    <div className="flex items-center justify-center gap-2">
      <SearchIcon className="relative left-8" size={20} />

      <input
        className="outline-none rounded-2xl w-100 h-10 pl-7 bg-red-400"
        type="text"
        placeholder="Search City.."
        required
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />

      <button
        className="rounded-2xl h-9 w-20 bg-green-700"
        onClick={searchCity}
      >
        Search
      </button>
    </div>
  </div>
);

};

export default Search;
