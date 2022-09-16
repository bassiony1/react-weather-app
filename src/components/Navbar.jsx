import React from 'react'
import { useState ,useContext , useEffect } from 'react'
import WeatherContext from '../WeatherContext'


export default function Navbar() {
  const {state} =useContext(WeatherContext)
   const [classList, setClassList] = useState("nav")
   useEffect( ()=>{
     if (state != null) {
       if (state.temp < 20)
         {
           setClassList("nav dark")
           document.body.style.background = "rgb(34, 33, 33)";
         }
     }
    }
    , [state])
  return (
    <div className= {classList}>
    <h1 className="logo">Weather</h1>
   </div>
  )
}
