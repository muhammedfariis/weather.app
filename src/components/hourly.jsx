import { imageWeathers } from "../lib/images";

const Hourly = ({ hourly }) => {
  return (
    <div>
      <h1>Hourly Forecast</h1>
      <div>
        {hourly.slice(0, 12).map((hour, i) => (
          <div key={i}>
            <p>{new Date(hour.dt * 1000).getHours()}</p>
            <img src={imageWeathers(hour)} className="h-10 w-20" />
            <p>{Math.round(hour.temp)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hourly;
