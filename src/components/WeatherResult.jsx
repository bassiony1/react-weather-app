import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import WeatherContext from '../WeatherContext'
import day from './day.svg'
import night from './night.svg'
export default function WeatherResult() {
   const {state , getStatus} =useContext(WeatherContext)
    const [text , setText] = useState('')

    const handleSubmit = async (e)=>{
        e.preventDefault()
        await getStatus(text)
    }
   
  return (
    <>
    <form className="form" onSubmit={handleSubmit}>
    <label htmlFor="weather">Enter a location for weather information</label>
    <div className="input-group">
        <input type="text" name="" onChange={(e)=>{setText(e.target.value)}} id="weather" value={text}></input>
        <button type="submit" className="form-btn">Show</button>
    </div>
</form>
{state != null && <div className="card container">
            <div className="card-header">
                <img src={state.temp > 20 ? day : night} alt=""></img>
            </div>
            <div className="card-content mt-4">
                <h3>{text}</h3>
                <h1>{state.desc}</h1>
                <p>{(state.temp)} C</p>
            </div>
        </div>}
    </>
  )
}
