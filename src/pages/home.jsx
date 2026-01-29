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

  const tempimage = () => {
    const DATA = data.temp;
    if (DATA <= 20) {
      return "/images/snow.png";
    } else if (DATA <= 30) {
      return "/images/cloudy.png";
    } else {
      return "/images/sun.png";
    }
  };

  return (
    <div
      className="min-h-screen  bg-cover bg-center flex flex-col justify-center p-5 items-center"
      style={{ backgroundImage: "url('/images/bg.jpg')" }}
    >
      {" "}
      <div
        className="h-110 rounded-3xl flex flex-col justify-center gap-10 items-center  w-200 bg-no-repeat bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/img2.png')",
        }}
      >
        <div className="backdrop-blur-3xl rounded-4xl w-fit h-fit p-5">
          <h1 className="font-bold text-5xl">Weather⛅</h1>
        </div>
        <div
          className="backdrop-blur-3xl gap-2 flex flex-col items-center justify-center rounded-4xl w-50 h-50   transform
         transition-all
        duration-300
              ease-out
      hover:scale-105
       hover:-translate-y-2 "
        >
          <h1 className="text-3xl font-bold">{data.city} </h1>
          <h2 className="text-5xl font-bold">{Math.round(data.temp)}°</h2>
          <img
            className="h-15 w-15 "
            src={tempimage()}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
