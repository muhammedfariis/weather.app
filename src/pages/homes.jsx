import { useEffect, useState } from "react";
import Hourly from "../components/hourly";
import Weekly from "../components/weekly";

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

  if (!data)
    return <p className="text-center mt-20">Search or use location 📍</p>;

  const current = data.current;
  return (
    <div className="max-w-md mx-auto p-6 flex flex-col items-center">
      <div className="text-center mt-10">
        <h1 className="text-3xl font-semibold">
          {data.city || "Current Location"}
        </h1>
        <h2 className="text-7xl font-bold">{Math.round(current.temp)}°</h2>
        <p className="opacity-80">{current.weather[0].description}</p>
      </div>

      <img
        src={`/public/images/${current.weather[0].main}.png`}
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
