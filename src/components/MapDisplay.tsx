// src/Map.js or src/Map.tsx
import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';


// Fix for default marker icons
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';


interface IMapDisplay {
  
  longitude: string | undefined;
  latitude: string | undefined;
 
}

let DefaultIcon = L.icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow
});

L.Marker.prototype.options.icon = DefaultIcon;

const MapDisplay:React.FC<IMapDisplay> = ({
  longitude,latitude
}) => {

  console.log("Longitude",latitude,longitude)

  return (
  <div className='mapContainer'>
    <MapContainer center={[Number(latitude),Number(longitude) ]} zoom={10} style={{width:'100%',height:'60vh'}}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={[Number(latitude), Number(longitude)]}>
        <Popup>
          Weather Report <br /> 
        </Popup>
      </Marker>
    </MapContainer></div>
  );
};

export default MapDisplay;


