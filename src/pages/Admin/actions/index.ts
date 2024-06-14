import { GET_LAT_LONG_RESPONSE,GET_LOCATION_WEATHER } from "../actionsTypes"
import { useDispatch } from 'react-redux';
import axios from 'axios'



interface ILocationResponse{
    fetchLocationLatLong:(locationName:string)=>void
    fetchwetherForLocation:(lat:any,long:any)=>void
}

//Action defined for getting lat and long from the location
export const getLatLongResponse=(data:any)=>{
    return{
        type:GET_LAT_LONG_RESPONSE,
        payload:data
    }
}

const getLocationWeatherResponse=(data:any)=>{
    return{
        type:GET_LOCATION_WEATHER,
        payload:data
    }
}


export const useLocationWeatherDispatch=(

):ILocationResponse=>{
    const dispatch=useDispatch()

const fetchLocationLatLong =async(locationName:string)=>{
    const options={
        method:'GET',
        url:"https://nominatim.openstreetmap.org/search",
        params:{
            q: locationName,
            format: 'json',
        }
    }
    
    const response= await axios.request(options)
    console.log("Store data",response)
 dispatch(getLatLongResponse(response.data[0]))



}


const fetchwetherForLocation=async(lat:any,long:any)=>{

const options={
    method:'GET',
    url:"https://api.open-meteo.com/v1/forecast",
    params:{
        latitude:lat,
        longitude:long,
        daily:"temperature_2m_max,temperature_2m_min"
    }
}

const response=await axios.request(options)
console.log("Resposne for data",response.data)
dispatch(getLocationWeatherResponse(response.data))
}


return {
    fetchLocationLatLong,
    fetchwetherForLocation
}
}