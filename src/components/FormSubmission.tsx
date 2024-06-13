import React, { useEffect } from 'react'
import axios from 'axios'


const FormSubmission:React.FC=()=>{

useEffect(()=>{
const options={
    method:'GET',
    url:"https://nominatim.openstreetmap.org/search",
    params:{
        q: "New York",
        format: 'json',
    }
}

const response=axios.request(options)
console.log("Response",response)

},[])

    return(
        <div><input type='text'/>
        <button>Submit</button></div>
    )
}

export default FormSubmission