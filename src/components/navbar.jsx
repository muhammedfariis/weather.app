import { Plus, HomeIcon, LocateIcon } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";
import { getLocationWeather } from "../api/weatherapi";

const Navbar = () => {
  const navigate = useNavigate();

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;

        const url = `https://www.google.com/maps/@${latitude},${longitude},16z`;

        window.open(url, "_blank");
      },
      (err) => {
        alert("Location permission denied");
      },
      {
        enableHighAccuracy: true,
      },
    );
  };

  return (
    <>
      <nav className="h-14 flex justify-between items-center w-full rounded-2xl shadow-2xl p-5">
        <div className="rounded-full border-2 h-10 w-10 flex justify-center items-center border-yellow-500 shadow-2xl">
          <button onClick={getCurrentLocation}>
            <LocateIcon size={30} />
          </button>
        </div>
        <div className="rounded-full border-2 h-10 w-10 flex justify-center items-center border-yellow-500 shadow-2xl">
          <Link to="/search">
            <Plus size={30} />
          </Link>
        </div>
        <div className="rounded-full border-2 h-10 w-10 flex justify-center items-center border-yellow-500 shadow-2xl">
          <Link to="/">
            <HomeIcon size={27} />{" "}
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
