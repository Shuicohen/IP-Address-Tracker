import React from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import L from "leaflet";
import locationIcon from "../assets/icon-location.svg";
import "leaflet/dist/leaflet.css";
import "../styles/MapDisplay.css";

// Define the custom icon for the marker
const customIcon = L.icon({
  iconUrl: locationIcon,
  iconSize: [32, 40], // Adjust size as needed
  iconAnchor: [16, 40], // Anchor the icon at the bottom center
});

const MapDisplay = ({ lat, lng }) => {
  return (
    <div className="map-display">
      <MapContainer center={[lat, lng]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {/* Use the custom icon for the marker */}
        <Marker position={[lat, lng]} icon={customIcon} />
      </MapContainer>
    </div>
  );
};

export default MapDisplay;
