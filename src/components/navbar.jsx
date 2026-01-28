import { Plus , HomeIcon , LocateIcon} from "lucide-react";
import { useNavigate, Link } from "react-router-dom";
import { getLocationWeather } from "../api/weatherapi";

const Navbar = () => {
  const navigate = useNavigate();

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition =
      (async,
      (pos) => {
        const { latitude, longitude } = pos.coords;

        const res = getLocationWeather(latitude, longitude);

        localStorage.setItem("WeatherData", JSON.stringify(res.data));
        navigate("/");
      });
  };

  return (
    <>
      <nav className="flex h-14 w-full rounded-2xl shadow-2xl">
        <div className="flex justify-between items-center">
          <div>
            <button onClick={getCurrentLocation}>
              <LocateIcon size={22} />
            </button>
          </div>
          <div>
            <Link to="/search">
              <Plus size={22} />
            </Link>
          </div>
          <div>
            <Link to="/">
              <HomeIcon size={22} />
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar
