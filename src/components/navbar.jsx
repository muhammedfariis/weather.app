import { Plus, HomeIcon, LocateIcon } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";
import { getLocationWeather } from "../api/weatherapi";
import { useState } from "react";

const Navbar = () => {
const [animate , setanimate] = useState(true)
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
    <div className="h-20 w-full p-2 bg-linear-to-bl from-15% from-blue-600">
      <nav className="h-14 flex justify-between backdrop-blur-3xl items-center w-full rounded-2xl  shadow-2xl p-5 ">
        <div className="rounded-full border-2 h-10 w-10 flex justify-center items-center border-blue-500 hover:border-2 hover:border-black hover:bg-linear-to-tr from-30% from-red-500 shadow-2xl">
          <button onClick={getCurrentLocation}>
            <LocateIcon size={30} color="blue" />
          </button>
        </div>
        <div className="rounded-full border-2 h-10 w-10 flex justify-center items-center border-blue-500 hover:border-2 hover:border-black hover:bg-linear-to-tr from-30% from-red-500 shadow-2xl">
          <Link to="/search">
            <Plus size={30} color="blue"  />
          </Link>
        </div>
        <div className="rounded-full border-2 h-10 w-10 flex justify-center items-center border-blue-500 hover:border-2 hover:border-black hover:bg-linear-to-tr from-30% from-red-500 shadow-2xl">
          <Link to="/">
            <HomeIcon size={27} color="blue" />
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
