import React from 'react'
import "./App.css"
import min from "./Assets/Min.png"
import Hours from "./Assets/Hours.png"
import Sec from "./Assets/Sec.png"
import Minutes from "./Assets/Minutes.png"



const App = () => {
  return (
    <div className='mainContainer'>
        <img src={min} className='minStyle' />
        <img src={Sec} className='secStyle'/>
        <img src={Hours} className='hoursStyle'/>
        <img src={Minutes} className='minutseStyle'/>
    </div>
  )
}

export default App