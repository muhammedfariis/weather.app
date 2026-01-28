import Home from "../pages/search";
import ROUTES from "../common/path";
import { Route, Routes } from "react-router-dom";
import Search from "../pages/search";
import {useState} from "react"

const AppRouters = () => {
  const [weatherData, setWeatherData] = useState("");

  return (
    <>
      <Routes>
        <Route path={ROUTES.HOME} element={<Home weatherData = {weatherData} />} />
        <Route path={ROUTES.SEARCH} element={<Search setWeatherData={setWeatherData} />} />
      </Routes>
    </>
  );
};

export default AppRouters;

