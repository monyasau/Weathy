let WeatherInfo=({loading, weatherData})=> {
    return (
        <div>

{loading?
    (
    <div aria-label='weather info'>
    <div aria-label='Weather info main' className='my-4 '>
        <h1 className='text-3xl font-semibold flex items-center'>
          <div className=' h-10 w-[70%] mr-4'>{weatherData.weather[0].description}</div>
          <div className='h-[90px] w-[90px] rounded-full' aria-label='Weather info'><img src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`} className='w-full h-full' alt="" /></div>
        </h1>
          <span className=' rounded-xl w-2/5 text-3xl' aria-label='temp'>{weatherData.main.temp} °C | {((weatherData.main.temp) * 9/5) + 32} °F</span>
          <div className=' h-5 rounded-md my-3 w-3/5 inline-flex ' aria-label='location'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-4">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
    </svg> {weatherData.name +", "+ weatherData.sys.country}
    </div>
    {
      console.log(weatherData)
    }
    {/* {useEffect(() => {
    
      
    
      return () => {
        
    <Backend location={userInput}/>
      }
    }, [userInput])} */}
    
    </div>
    <div aria-label='weather info footer' className=' flex text-2xl items-cent justify-ce font-semibold w-full '>
        <div className='w-[50%]'>Feels like 36°C</div>
      <div className='w-[50%] text-right'>Feels like 36°C</div>
      </div>
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
    {/* {useEffect(() => {
    
    
      return () => {
        
    <Backend location={userInput}/>
      }
    }, [userInput])} */}
    
    
    </div>
    <div aria-label='weather info footer' className=' grid grid-cols-2 gap-3 w-full animate-pulse'>
      <div className='h-10 text-center p border-r bg-slate-200  rounded-md'>
        <div className='h-8 animate-pulse rounded-lg'></div>
      </div>
      <div className='h-10 text-center border-l bg-slate-200 rounded-md'>
        <div className='h-8 animate-pulse rounded-lg'></div>
      </div>
      <div className='h-10 text-center p border-r bg-slate-200  rounded-md'>
        <div className='h-8 animate-pulse rounded-lg'></div>
      </div>
      <div className='h-10 text-center border-l bg-slate-200 rounded-md'>
        <div className='h-8 animate-pulse rounded-lg'></div>
      </div>
    </div>
    </div> 
    )
    }
        </div>
    );
}

export default WeatherInfo;