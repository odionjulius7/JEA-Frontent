import React from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

const SelectedProjMap2 = ({ google }) => {
  const mapStyles = {
    width: "100%",
    height: "350px",
    marginBottom: "2rem",
    overflow: "hidden",
  };

  return (
    <Map
      google={google}
      zoom={8}
      style={mapStyles}
      initialCenter={{ lat: 28.70406, lng: 77.102493 }} // Initial center of the map
    >
      {/* <Marker position={{ lat: 37.7749, lng: -122.4194 }} />{" "} */}
      {/* Marker position */}
    </Map>
  );
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyBVUFcyQX9Pizz7L13GSc_LMdGtbzE9T9o", // Replace with your Google Maps API key
})(SelectedProjMap2);
