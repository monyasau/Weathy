import { useState, useEffect } from 'react'
import Backend from './Backend';
import weatherConditionImage from "../assets/overcastClouds.svg";

let Weathy=()=> {
  const [searchClick, setSearchClick]=useState(false);
  const [loading, setLoading]=useState(false);
  const [userInput, setUserInput]=useState("");
  const checkInput = (event)=>{(event.keyCode===13)?(fetchWeather(userInput)):(setUserInput(event.target.value));}
  const fetchWeather = (location)=>{console.log(userInput);}// aso zip op meji,ori mefa
    return (
        <div className='w-full mt-8 h-[80%]'>
        <div className="max-w-screen-xl text-[whitesmoke] mx-auto  items-center md:px-0 px-[2%] h-full flex">
<div className=' px-10 p-14 mx-auto max-w-[500px] shadow-lg rounded-[30px] bg-[#000000d0] h-[470px] w-[100%] '>
<div aria-label='search container' className='flex justify-between bg-[#96969633] p-4 rounded-2xl'>
<input type="text" placeholder='Enter a city name' autoFocus onKeyUp={()=>checkInput(event)} className='focus:outline-none text-[#eee] text-2xl py-4 w-[90%] bg-transparent rounded-xl'/>
<button onClick={()=>searchClick?setSearchClick(false):setSearchClick(true)}>
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
{loading?
(
<div aria-label='weather info'>
<div aria-label='Weather info main' className='my-4 '>
    <h1 className='text-3xl font-semibold flex items-center'>
      <div className=' h-10 w-[70%] mr-4'>Scattered Clouds</div>
      <div className='h-[90px] w-[90px] rounded-full' aria-label='Weather info'><img src={weatherConditionImage} className='w-full h-full' alt="" /></div>
    </h1>
      <div className=' rounded-xl w-2/5 text-3xl' aria-label='temp'>37.89°C </div>
      <div className=' h-5 rounded-md my-3 w-3/5 inline-flex ' aria-label='location'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-4">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
</svg> Katsina, NG
</div>
{useEffect(() => {


  return () => {
    
<Backend location={userInput}/>
  }
}, [userInput])}


</div>
<div aria-label='weather info footer' className=' flex text-2xl items-cent justify-ce font-semibold w-full '>
  {/* <div className='h-10 text-center p-12  rounded-md'> */}
    <div className='w-[50%]'>Feels like 36°C</div>
  {/* </div> */}
  {/* <div className='h- text-center p-12  rounded-md'> */}
  <div className='w-[50%] text-right'>Feels like 36°C</div>
  </div>
{/* </div> */}
</div>
)
:(
 <div aria-label='skeleton weather info'>

<div aria-label='Weather info main' className='my-4'>
    <h1 className='text-3xl font-semibold flex items-center'>
      <div className='bg-slate-200 h-12 rounded-xl w-[70%] mr-4 animate-pulse'></div>
      <div className='bg-slate-200 h-[90px] w-[90px] rounded-full animate-pulse' aria-label='Weather info'></div>
    </h1>
      <div className='bg-slate-200 h-10 rounded-xl w-2/5 animate-pulse' aria-label='temp'></div>
      <div className='bg-slate-200 h-6 rounded-md my-3 w-3/5 animate-pulse' aria-label='location'></div>
{useEffect(() => {


  return () => {
    
<Backend location={userInput}/>
  }
}, [userInput])}


</div>
<div aria-label='weather info footer' className=' grid grid-cols-2 gap-3 w-full animate-pulse'>
  <div className='h-10 text-center p-12 border-r bg-slate-200  rounded-md'>
    <div className='h-8 animate-pulse rounded-lg'></div>
  </div>
  <div className='h-10 text-center p-12 border-l bg-slate-200 rounded-md'>
    <div className='h-8 animate-pulse rounded-lg'></div>
  </div>
</div>
</div> 
)
}
</div>
        </div>
        </div>
    );
}

export default Weathy;