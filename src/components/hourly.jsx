import { imageWeathers } from "../lib/images";
const Hourly = ({ hourly }) => {
  return (
    <div>
      <div>
        <h1>Hourly Forcast</h1>

        <div>
          {hourly.slice(0, 12).map((hour, index) => (
            <div key={index} className="">
              <p>{new Date(hour.dt * 1000).getDate()}</p>

              <img className="h-10 w-20" src={imageWeathers(hour)} alt="" />

              <p>{Math.round(hour.temp)}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


export default Hourly