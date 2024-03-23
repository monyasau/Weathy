import { useState, useEffect } from 'react'
import Backend from './Backend';
import WeatherInfo from './WeatherInfo';

let Weathy=()=> {
  const apiKey = "b74985d4dc308902bd425a0afcda30ec";
  const [apiResponse, setApiResponse]=useState({});
  const [loading, setLoading]=useState(true);
  const [userInput, setUserInput]=useState("");
  const checkInput = (event) => {
    if ((event.keyCode === 13 || event.type === "click") && userInput !== "") {

      
      fetchWeather()
      setLoading(true)
    } else {
      setUserInput(event.target.value)
    }
  };
  const fetchWeather=async ()=>{
    try {
      let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${userInput}&appid=${apiKey}&units=metric`);
        let jsonResponse = await response.json()
        setApiResponse(jsonResponse)
        console.log(jsonResponse);
        setLoading(false)
      } catch (error) {
        console.log("error:",error)
      }
        // fetch(`https://api.openweathermap.org/data/2.5/weather?q=${userInput}&appid=${apiKey}`).then(response=>response.json()).then(data=>console.log(data)).catch(error=>console.error('Error:', error))
//         fetch(`https://api.openweathermap.org/data/2.5/weather?q=${userInput}&appid=${apiKey}&units=metric`).then(response=>response.json()).then(data=>setApiResponse(data)).catch(()=>setApiResponse())
// setTimeout(() => {
//     setLoading(true)
// }, 2000);
    }
    return (
        <div className='w-full mt-8 h-[80%]'>
        <div className="max-w-screen-xl text-[whitesmoke] mx-auto  items-center md:px-0 px-[2%] h-full flex">
<div className=' px-10 p-14 mx-auto max-w-[500px] shadow-lg rounded-[30px] bg-[#000000d0] h-[470px] w-[100%] '>
<div aria-label='search container' className='flex justify-between bg-[#96969633] p-4 rounded-2xl'>
<input type="text" placeholder='Enter a location' autoFocus onKeyUp={()=>checkInput(event)}  className='focus:outline-none text-[#eee] text-2xl py-4 w-[90%] bg-transparent rounded-xl'/>
<button onClick={()=>checkInput(event)}>
    {
        loading?(
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
<WeatherInfo loading={loading} weatherData={apiResponse} />
</div>
        </div>
        </div>
    );
}

export default Weathy;