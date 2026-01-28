export const imageWeathers = (data) => {
  if (!data || !data.weather || !data.weather[0]) return "";

  const main = data.weather[0].main;
  

  if (main === "Tornado") {
    return "/images/Tornado.png";
  }

  if (main === "Rain") {
    return "/images/sun-rain-angle.png";
  }

  if (main === "Clouds") {
    return "/images/sun-rain.png"
     ;
  }

  if (main === "Clear"){
    return "/images/moon-rain.png"
  }

  
};
