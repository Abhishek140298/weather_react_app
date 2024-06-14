import React,{useEffect} from 'react'
import axios from 'axios'
import {useLocationWeatherDispatch} from '../pages/Admin/actions'
import { useAppSelector } from '../hooks/useAppSelector'


interface IWeatherDisplay{
  
    longitude: string | undefined;
    latitude: string | undefined;
   
  }



const WeatherDisplay:React.FC<IWeatherDisplay> =({
    longitude,latitude
})=>{

    const dispatcher = useLocationWeatherDispatch();
    const weatherData=useAppSelector((state)=>state.appReducer.weatherData)

console.log("Weathere",weatherData)


useEffect(()=>{

dispatcher.fetchwetherForLocation(latitude,longitude)

},[])


return (  <div className='weatherMainContainer'>
    <h1>Weather Data</h1>
      {weatherData && weatherData.daily && weatherData.daily.temperature_2m_max ? (
        <div>
            <h3>Date: {weatherData.daily.time[0]}</h3>
          <h4>Max Temperature: {weatherData.daily.temperature_2m_max[0]}°C</h4>
          <h4>Min Temperature: {weatherData.daily.temperature_2m_min[0]}°C</h4>
        </div>
      ) : (
        <div>No weather data available</div>
      )}
  </div>

    
);


}

export default WeatherDisplay