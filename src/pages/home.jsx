import { useEffect, useState } from "react";
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

  if (!data) {
    return <p className="text-center mt-20">Search city or use location 📍</p>;
  }

  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-3xl">{data.city}</h1>
      <h2 className="text-6xl">{Math.round(data.temp)}°</h2>
    </div>
  );
}

export default Home;
