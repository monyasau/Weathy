import Weathy from './components/Weathy'
import TopNav from './components/TopNav'
import { useState } from 'react'

function App() {
  const [location,setLocation]=useState("random")

  return (
    <div>
      <div className="h-[100vh] bg-cover bg-no-repeat bg-[#2f2a2a44]  bg-[url('https://source.unsplash.com/1920x1080/?london')]"  style={{ backgroundImage: `url(https://source.unsplash.com/1920x1080/?${location})` }}>


    <TopNav/>
    <Weathy updateParentLocation={setLocation}/>
    </div>
    </div>
  )
}

export default App
