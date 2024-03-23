import Weathy from './components/Weathy'
import TopNav from './components/TopNav'
import { useState } from 'react'

function App() {
  const [location,setLocation]=useState("new york")

  return (
    // <div className="h-[100vh] bg-cover bg-no-repeat bg-[#2f2a2a44] bg-[url(`https://source.unsplash.com/1080x1800/?${location}`)] md:bg-[url('https://source.unsplash.com/1920x1080/?${location}')]">
      <div className="h-screen bg-cover bg-no-repeat bg-[#2f2a2a44]" style={{ backgroundImage: `url(https://source.unsplash.com/1920x1080/?${location})` }}>


    {/* <div className=" h-[100vh] bg-cover bg-no-repeat bg-[url('./assets/067.jpg')]"> */}
    <TopNav/>
    <Weathy updateParentLocation={setLocation}/>
    </div>
  )
}

export default App
