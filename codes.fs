# 🌤️ React + Tailwind Weather WebApp (Full Working Project)

This is a **fully working responsive Weather WebApp** using:

* React
* Tailwind CSS
* Axios
* React Router DOM
* OpenWeather API
* Hourly + Weekly Forecast
* GPS Location

---

## 🔹 1. Install & Setup

```bash
npm create vite@latest weather-app
cd weather-app
npm install
npm install axios react-router-dom react-icons
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

---

## 🔹 2. tailwind.config.js

```js
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: { extend: {} },
  plugins: [],
};
```

---

## 🔹 3. index.css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

---

## 🔹 4. .env

```
VITE_WEATHER_API_KEY=YOUR_OPENWEATHER_KEY
```

Restart server after adding `.env` 🔁

---

## 🔹 5. main.jsx

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
```

---

## 🔹 6. API Setup – `src/api/weatherApi.js`

```js
import axios from "axios";

const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

export const getCityWeather = (city) => {
  return axios.get("https://api.openweathermap.org/data/2.5/weather", {
    params: {
      q: city,
      appid: apiKey,
      units: "metric",
    },
  });
};

export const getLocationWeather = (lat, lon) => {
  return axios.get("https://api.openweathermap.org/data/3.0/onecall", {
    params: {
      lat,
      lon,
      appid: apiKey,
      units: "metric",
      exclude: "minutely,alerts",
    },
  });
};
```

---

## 🔹 7. App.jsx (Router Setup)

```jsx
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Navbar from "./components/Navbar";

function App() {
  const [weatherData, setWeatherData] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 to-purple-800 text-white">
      <Routes>
        <Route path="/" element={<Home weatherData={weatherData} />} />
        <Route path="/search" element={<Search setWeatherData={setWeatherData} />} />
      </Routes>

      <Navbar />
    </div>
  );
}

export default App;
```

---

## 🔹 8. Navbar.jsx (Bottom Floating Bar)

```jsx
import { FaHome, FaPlus, FaLocationArrow } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { getLocationWeather } from "../api/weatherApi";

function Navbar() {
  const navigate = useNavigate();

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition(async (pos) => {
      const { latitude, longitude } = pos.coords;
      const res = await getLocationWeather(latitude, longitude);

      localStorage.setItem("weatherData", JSON.stringify(res.data));
      navigate("/");
    });
  };

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 bg-indigo-950 px-6 py-3 rounded-full flex gap-8 shadow-xl">
      <Link to="/"><FaHome size={20} /></Link>

      <Link
        to="/search"
        className="bg-white text-black p-3 rounded-full -mt-6 shadow-lg"
      >
        <FaPlus size={22} />
      </Link>

      <button onClick={getCurrentLocation}>
        <FaLocationArrow size={20} />
      </button>
    </div>
  );
}

export default Navbar;
```

---

## 🔹 9. Search Page – `pages/Search.jsx`

```jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getCityWeather, getLocationWeather } from "../api/weatherApi";

function Search({ setWeatherData }) {
  const [city, setCity] = useState("");
  const navigate = useNavigate();

  const searchCity = async () => {
    const cityRes = await getCityWeather(city);
    const { lat, lon } = cityRes.data.coord;

    const res = await getLocationWeather(lat, lon);

    const fullData = {
      ...res.data,
      city: cityRes.data.name,
    };

    localStorage.setItem("weatherData", JSON.stringify(fullData));
    setWeatherData(fullData);
    navigate("/");
  };

  return (
    <div className="max-w-md mx-auto p-6">
      <input
        type="text"
        placeholder="Search for a city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="w-full p-3 rounded-xl bg-indigo-900 outline-none"
      />

      <button
        onClick={searchCity}
        className="mt-3 w-full bg-white text-black py-2 rounded-xl"
      >
        Search
      </button>
    </div>
  );
}

export default Search;
```

---

## 🔹 10. Home Page – `pages/Home.jsx`

```jsx
import { useEffect, useState } from "react";
import Hourly from "../components/Hourly";
import Weekly from "../components/Weekly";

function Home({ weatherData }) {
  const [data, setData] = useState(weatherData);

  useEffect(() => {
    if (!weatherData) {
      const saved = localStorage.getItem("weatherData");
      if (saved) setData(JSON.parse(saved));
    } else {
      setData(weatherData);
    }
  }, [weatherData]);

  if (!data) return <p className="text-center mt-20">Search or use location 📍</p>;

  const current = data.current;

  return (
    <div className="max-w-md mx-auto p-6 flex flex-col items-center">
      <div className="text-center mt-10">
        <h1 className="text-3xl font-semibold">{data.city || "Current Location"}</h1>
        <h2 className="text-7xl font-bold">{Math.round(current.temp)}°</h2>
        <p className="opacity-80">{current.weather[0].description}</p>
      </div>

      <img
        src={`/images/${current.weather[0].main}.png`}
        className="w-60 my-6"
      />

      <div className="bg-indigo-950/60 rounded-3xl p-4 w-full">
        <Hourly hourly={data.hourly} />
        <Weekly daily={data.daily} />
      </div>
    </div>
  );
}

export default Home;
```

---

## 🔹 11. Hourly Forecast – `components/Hourly.jsx`

```jsx
function Hourly({ hourly }) {
  return (
    <div>
      <h3 className="mb-2 opacity-70">Hourly Forecast</h3>

      <div className="flex gap-4 overflow-x-auto">
        {hourly.slice(0, 12).map((h, i) => (
          <div
            key={i}
            className="bg-indigo-900 rounded-2xl p-3 min-w-[70px] flex flex-col items-center"
          >
            <p className="text-sm">{new Date(h.dt * 1000).getHours()}:00</p>
            <img src={`/images/${h.weather[0].main}.png`} className="w-8 my-2" />
            <p>{Math.round(h.temp)}°</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Hourly;
```

---

## 🔹 12. Weekly Forecast – `components/Weekly.jsx`

```jsx
function Weekly({ daily }) {
  return (
    <div className="mt-4">
      <h3 className="mb-2 opacity-70">Weekly Forecast</h3>

      {daily.slice(0, 7).map((d, i) => (
        <div
          key={i}
          className="flex justify-between items-center bg-indigo-900/50 p-3 rounded-xl mb-2"
        >
          <p>{new Date(d.dt * 1000).toLocaleDateString("en-US", { weekday: "short" })}</p>
          <img src={`/images/${d.weather[0].main}.png`} className="w-8" />
          <p>{Math.round(d.temp.day)}°</p>
        </div>
      ))}
    </div>
  );
}

export default Weekly;
```

---

## 🔹 13. Weather Images Folder

Create:

```
public/images/
  Clear.png
  Rain.png
  Clouds.png
  Snow.png
  Mist.png
```

Names must match API `weather[0].main`

---

## 🔹 14. Run Project 🚀

```bash
npm run dev
```

---

## ✅ FINAL FEATURES

✔ Real city search
✔ GPS current location
✔ Real hourly forecast
✔ Real weekly forecast
✔ Weather based images
✔ React Router navigation
✔ Tailwind responsive UI
✔ Portfolio ready 🔥

---

Super 😎🔥
This is now **complete professional Weather WebApp**.

If you want next I can give:

* GitHub repo structure
* Animation effects
* Loading skeletons
* Error handling
* Deployment guide (Vercel / Netlify)
