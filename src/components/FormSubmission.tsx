import React, { useEffect, useState, Dispatch, SetStateAction } from "react";
import axios from "axios";
import { useLocationWeatherDispatch } from "../pages/Admin/actions";
import { useAppSelector } from "../hooks/useAppSelector";
import "../App.css";

interface FormSubmissionProps {
  locationName: string | undefined;
  longitude: string;
  latitude: string;
  setLocationName: Dispatch<SetStateAction<string | undefined>>;
  setLongitude: Dispatch<SetStateAction<string>>;
  setLatitude: Dispatch<SetStateAction<string>>;
}

const FormSubmission: React.FC<FormSubmissionProps> = ({
  locationName,
  longitude,
  latitude,
  setLocationName,
  setLatitude,
  setLongitude,
}) => {
  const dispatcher = useLocationWeatherDispatch();

  const latLong = useAppSelector((state) => state.appReducer.latLong);
  useEffect(() => {
    if (locationName) {
      dispatcher.fetchLocationLatLong(locationName);
    }
  }, [locationName]);

  useEffect(() => {
    if (Object.keys(latLong).length > 0) {

      setLatitude(latLong?.lat);
      setLongitude(latLong?.lon);
    }
  }, [latLong]);

  useEffect(() => {
    console.log("JKDJksk", longitude, latitude);
  }, [longitude, latitude]);

  const handleSubmit = () => {
    console.log("Lat lon number", typeof longitude, latitude);
  };

  const hanleLocationNameChange = (event: any) => {
    setLocationName(event.target.value);
  };

  const hanleLocationLatChange = (event: any) => {
    setLatitude(event.target.value);
  };

  const hanleLocationLonChange = () => {};

  return (
    <div className="formMainComponent">
      <div className="inputBoxContainer">
        {" "}
        <div >
          {" "}
          <label >Latitude*</label>
          <br />
          <input
            value={latitude}
            type="text"
            onChange={hanleLocationLatChange}
          />
        </div>
        <div >
          {" "}
          <label >Latitude*</label>
          <br />
          <input
            value={longitude}
            type="text"
            onChange={hanleLocationLonChange}
          />
        </div>
        <div>
          <label>Location Name</label> <br />{" "}
          <input type="text" onChange={hanleLocationNameChange} />
        </div>
      </div>
      <div>
        {" "}
        <button className="buttonDiv" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default FormSubmission;
