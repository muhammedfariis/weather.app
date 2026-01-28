export const imageWeathers = (weather) => {
  const main = weather.weather[0].main;
  const isNight = weather.weather[0].icon.inlcude("n");

  if (main === "Tornado") {
    return "/public/images/Tornado.png";
  }

  if (main === "Rain") {
    if (isNight) return "/public/images/moon-rain.png";
    return "/public/images/sun-rain-angle.png";
  }

  if (main === "Clouds") {
    if (isNight) return "/public/images/moon-windy.png";
    return "/public/images/moon-windy.png";
  }

  if (main === "Clear") {
    if (isNight) return "/public/images/moon-windy.png";
    return "/public/images/moon-windy.png";
  }
};
