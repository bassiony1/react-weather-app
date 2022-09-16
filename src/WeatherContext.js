import { useState } from "react";
import { createContext } from "react";

const WeatherContext = createContext();



export const WeatherProvider = ({children})=>{
    const [state , setState] = useState(null);

    const getStatus = async (text)=>{
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${text}&APPID=${process.env.REACT_APP_WEATHER_TOKEN}`)

        const data = await response.json();
        setState({desc : data.weather[0].description ,
            temp : (data.main.temp ) - 273.15
    })
    }
    return <WeatherContext.Provider value={{
state ,
getStatus,
    }}
    >{children}</WeatherContext.Provider>
}

export default WeatherContext;