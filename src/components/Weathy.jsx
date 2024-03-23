import { useState, useEffect } from "react";
import Backend from "./Backend";
import WeatherInfo from "./WeatherInfo";

let Weathy = ({ updateParentLocation }) => {
  const apiKey = "b74985d4dc308902bd425a0afcda30ec";
  const [apiResponse, setApiResponse] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [networkError, setNetworkError] = useState(false);
  const [userInput, setUserInput] = useState("london");
  const checkInput = (event) => {
    if ((event.keyCode === 13 || event.type === "click") && userInput !== "") {
      fetchWeather();
      setLoading(true);
    } else {
      setUserInput(event.target.value);
    }
  };
  const fetchWeather = async () => {
    try {
      let response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${userInput}&appid=${apiKey}&units=metric`
      );
      let jsonResponse = await response.json();
      if (jsonResponse.cod == 200) {
        setApiResponse(jsonResponse);
        updateParentLocation(jsonResponse.name);
        console.log(jsonResponse);
        setError(false);
      } else {
        setNetworkError(false);
        setError(true);
      }
      setLoading(false);
    } catch (error) {
      // console.log("error:", error);
      setTimeout(() => {
        setError(true);
        setLoading(false);
        setNetworkError(true);
      }, 1200);
    }
  };

  return (
    <div className="w-full mt-8 h-[80%]">
      <div className="max-w-screen-xl text-[whitesmoke] mx-auto  items-center md:px-0 px-[2%] h-full flex">
        <div className=" px-10 p-14 mx-auto max-w-[500px] shadow-lg rounded-[30px] bg-[#000000d0] h-[470px] w-[100%] ">
          <div
            aria-label="search container"
            className="flex justify-between bg-[#96969633] p-4 rounded-2xl"
          >
            <input
              type="text"
              placeholder="Enter a location"
              autoFocus
              onKeyUp={() => checkInput(event)}
              className="focus:outline-none text-[#eee] text-2xl py-4 w-[90%] bg-transparent rounded-xl"
            />
            <button onClick={() => checkInput(event)}>
              {loading ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="#ddd"
                  className="w-6 h-6 animate-spin"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="#ddd"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                  />
                </svg>
              )}
            </button>
          </div>
          {!error ? (
            <WeatherInfo loading={loading} weatherData={apiResponse} />
          ) : (
            <>
              {networkError && error ? (
                <div aria-label="network error" className="my-10 text-center">
                  {/* <img src={Wifi} alt="" /> */}
                  <div className="flex items-center justify-center gap-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="50"
                      height="50"
                      fill="currentColor"
                      className="text-[#fffffff2]"
                      viewBox="0 0 16 16"
                    >
                      <path d="M10.706 3.294A12.6 12.6 0 0 0 8 3C5.259 3 2.723 3.882.663 5.379a.485.485 0 0 0-.048.736.52.52 0 0 0 .668.05A11.45 11.45 0 0 1 8 4q.946 0 1.852.148zM8 6c-1.905 0-3.68.56-5.166 1.526a.48.48 0 0 0-.063.745.525.525 0 0 0 .652.065 8.45 8.45 0 0 1 3.51-1.27zm2.596 1.404.785-.785q.947.362 1.785.907a.482.482 0 0 1 .063.745.525.525 0 0 1-.652.065 8.5 8.5 0 0 0-1.98-.932zM8 10l.933-.933a6.5 6.5 0 0 1 2.013.637c.285.145.326.524.1.75l-.015.015a.53.53 0 0 1-.611.09A5.5 5.5 0 0 0 8 10m4.905-4.905.747-.747q.886.451 1.685 1.03a.485.485 0 0 1 .047.737.52.52 0 0 1-.668.05 11.5 11.5 0 0 0-1.811-1.07M9.02 11.78c.238.14.236.464.04.66l-.707.706a.5.5 0 0 1-.707 0l-.707-.707c-.195-.195-.197-.518.04-.66A2 2 0 0 1 8 11.5c.374 0 .723.102 1.021.28zm4.355-9.905a.53.53 0 0 1 .75.75l-10.75 10.75a.53.53 0 0 1-.75-.75z" />
                    </svg>
                    <h1 className="text-3xl font-semibold my-4">
                      Connect to the Internet
                    </h1>
                  </div>
                  <div className="my-4 font-medium">
                    You're offline. Check your connection
                  </div>
                  <button
                    className="my-4 border-[2px] px-4 py-1 rounded-md"
                    onClick={() => checkInput(event)}
                  >
                    Retry
                  </button>
                </div>
              ) : (
                <div aria-label="404 error" className="my-10 text-center">
                  <div className="flex items-center justify-center gap-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="#888888" viewBox="0 0 16 16">
  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
</svg>
                    <h1 className="text-3xl font-semibold my-4">
                     Location not  found
                    </h1>
                  </div>
                  <div className="my-4 font-medium">
                    Check the spelling/location and try again
                  </div>
                  <button
                    className="my-4 border-[2px] px-4 py-1 rounded-md"
                    onClick={() => checkInput(event)}
                  >
                    Retry
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Weathy;
