import { imageWeathers } from "../lib/images";

function Weekly({ daily }) {
  return (
    <div className="mt-4">
      <h3 className="mb-2 opacity-70">Weekly Forecast</h3>

      {daily.slice(0, 7).map((d, i) => (
        <div
          key={i}
          className="flex justify-between items-center bg-indigo-900/50 p-3 rounded-xl mb-2"
        >
          <p>
            {new Date(d.dt * 1000).toLocaleDateString("en-US", {
              weekday: "short",
            })}
          </p>
          <img src={imageWeathers(d)} className="w-8" />
          <p>{Math.round(d.temp.day)}°</p>
        </div>
      ))}
    </div>
  );
}

export default Weekly;
