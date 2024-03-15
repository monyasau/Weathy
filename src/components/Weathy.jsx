import { useState, useEffect } from 'react'
import Backend from './Backend';
import WeatherInfo from './WeatherInfo';

let Weathy=()=> {
  const responseTemplate={
    "coord": {
        "lon": 87.3167,
        "lat": 23.4833
    },
    "weather": [
        {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
        }
    ],
    "base": "stations",
    "main": {
        "temp": 21.24,
        "feels_like": 20.02,
        "temp_min": 21.24,
        "temp_max": 21.24,
        "pressure": 1015,
        "humidity": 23,
        "sea_level": 1015,
        "grnd_level": 1007
    },
    "visibility": 10000,
    "wind": {
        "speed": 0.49,
        "deg": 330,
        "gust": 0.69
    },
    "clouds": {
        "all": 0
    },
    "dt": 1710102726,
    "sys": {
        "country": "IN",
        "sunrise": 1710116612,
        "sunset": 1710159488
    },
    "timezone": 19800,
    "id": 1272175,
    "name": "Durgapur",
    "cod": 200
}
  const apiKey = "b74985d4dc308902bd425a0afcda30ec";
  let fallBackApiResponse={
    "coord": {
        "lon": 87.3167,
        "lat": 23.4833
    },
    "weather": [
        {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
        }
    ],
    "base": "stations",
    "main": {
        "temp": 22.98,
        "feels_like": 22.09,
        "temp_min": 22.98,
        "temp_max": 22.98,
        "pressure": 1011,
        "humidity": 29,
        "sea_level": 1011,
        "grnd_level": 1003
    },
    "visibility": 10000,
    "wind": {
        "speed": 1.01,
        "deg": 177,
        "gust": 1.16
    },
    "clouds": {
        "all": 4
    },
    "dt": 1710275556,
    "sys": {
        "country": "IN",
        "sunrise": 1710289296,
        "sunset": 1710332336
    },
    "timezone": 19800,
    "id": 1272175,
    "name": "Durgapur",
    "cod": 200
}
  const [searchClick, setSearchClick]=useState(false);
  const [apiResponse, setApiResponse]=useState();
  const [loading, setLoading]=useState(false);
  const [userInput, setUserInput]=useState("");
  const checkInput = (event) => {
    if (event.keyCode===13) {
        console.log(loading);
      fetchWeather()
    } else {
      setUserInput(event.target.value)
    }
  };
  const fetchWeather=(location)=>{
    
      // fetchWeather(userInput)
      setLoading(!loading)
        // fetch(`https://api.openweathermap.org/data/2.5/weather?q=${userInput}&appid=${apiKey}`).then(response=>response.json()).then(data=>console.log(data)).catch(error=>console.error('Error:', error))
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${userInput}&appid=${apiKey}`).then(response=>response.json()).then(data=>setApiResponse(data)).catch(()=>setApiResponse(fallBackApiResponse))
  }
    return (
        <div className='w-full mt-8 h-[80%]'>
            
        <div className="max-w-screen-xl text-[whitesmoke] mx-auto  items-center md:px-0 px-[2%] h-full flex">
<div className=' px-10 p-14 mx-auto max-w-[500px] shadow-lg rounded-[30px] bg-[#000000d0] h-[470px] w-[100%] '>
<div aria-label='search container' className='flex justify-between bg-[#96969633] p-4 rounded-2xl'>
<input type="text" placeholder='Enter a city name' autoFocus onKeyUp={()=>checkInput(event)} className='focus:outline-none text-[#eee] text-2xl py-4 w-[90%] bg-transparent rounded-xl'/>
<button onClick={()=>loading?setLoading(false):setLoading(true)}>
    {
        searchClick?(
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="#ddd" className="w-6 h-6 animate-spin">
  <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
</svg>

        ):(
            
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="#ddd" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
                    )

    }

</button>
</div>
<WeatherInfo loading={loading} weatherData={apiResponse?apiResponse:fallBackApiResponse} />
</div>
        </div>
        </div>
    );
}

export default Weathy;