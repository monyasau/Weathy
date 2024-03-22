import { useEffect, useState } from "react";

const WeatherInfo = ({ loading, weatherData }) => {
  const [time, setTime] = useState("");
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  useEffect(() => {
    const timeInterval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

  }, []);
  const updateTime = () => {
  let currentTime = new Date((weatherData.dt + weatherData.timezone) * 1000);
  return currentTime.toLocaleTimeString()
}
  return (
    <div>
      {!loading? (
        <div aria-label="weather info">
            {weatherData && weatherData.weather && weatherData.weather.length > 0 && 
(
<div aria-label="Weather info main" className="my-4 ">
            <h1 className=" gap-5  my-6  font-semibold capitalize flex  items-center">
              <div className=" rounded-full" aria-label="Weather info">
                <img
                  src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`}
                  className="w-full h-full"
                  alt=""
                />
              </div>

              <div className=" h-10 text-3xl inline-flex md:text-4xl mr-4">
                {weatherData.weather[0].description}
              </div>
            </h1>
            <div className=" rounded-xl text-3xl" aria-label="temp">
              {Math.round(weatherData.main.temp)} °C |{" "}
              {Math.round((weatherData.main.temp * 9) / 5 + 32)} °F
            </div>
            <div
              className=" h-5 rounded-md my-3 w-3/5 inline-flex font-semibold"
              aria-label="location"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 mr-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                />
              </svg>{" "}
              {weatherData.name + ", " + weatherData.sys.country}
            </div>
          </div>
)
            }
          
          <div className="text-xl my-4 font-semibold">
            Time: {updateTime()}
          </div>
          <div className="">{weekday[new Date().getDay()]}, {new Date().toLocaleDateString()}</div>
        </div>
      ) : (
        <div aria-label="skeleton weather info">
          <div aria-label="Weather info main" className="my-4">
            <h1 className="text-3xl font-semibold flex gap-5 my-4 items-center">
              <div
                className="bg-slate-200 h-[50px] w-[50px] rounded-full animate-pulse"
                aria-label="Weather info"
              ></div>
              <div className="bg-slate-200 h-12 rounded-xl w-[70%] mr-4 animate-pulse"></div>
            </h1>
            <div
              className="bg-slate-200 h-10 rounded-xl w-2/5 animate-pulse"
              aria-label="temp"
            ></div>
            <div
              className="bg-slate-200 h-6 rounded-md my-3 w-3/5 animate-pulse"
              aria-label="location"
            ></div>
            {/* {useEffect(() => {
    
    
      return () => {
        
    <Backend location={userInput}/>
      }
    }, [userInput])} */}
          </div>
          <div className="h-8 w-1/2 my-4 text-center bg-slate-200  animate-pulse rounded-md"></div>
          <div className="h-5 w-1/5 text-center bg-slate-200 animate-pulse rounded-md"></div>
        </div>
      )}
    </div>
  );
};

export default WeatherInfo;
