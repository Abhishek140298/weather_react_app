import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import MapDisplay from "./components/MapDisplay";
import FormSubmission from "./components/FormSubmission";
import WeatherDisplay from "./components/WeatherDisplay";

const App: React.FC = () => {
  const [locationName, setLocationName] = useState<string>();
  const [longitude, setLongitude] = useState<string>("74.0060");
  const [latitude, setLatitude] = useState<string>("40.7128");
  return (
    <div className="App">
 
      <div className="subAppBox" >  <FormSubmission
          locationName={locationName}
          longitude={longitude}
          latitude={latitude}
          setLocationName={setLocationName}
          setLongitude={setLongitude}
          setLatitude={setLatitude}
        />
        <WeatherDisplay longitude={longitude} latitude={latitude} /></div>
        <MapDisplay longitude={longitude} latitude={latitude} />
   
    
    </div>
  );
};

export default App;
