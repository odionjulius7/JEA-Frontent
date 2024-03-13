import React, { useEffect } from "react";
import mapboxgl from "mapbox-gl";

const SelectedProjMap = ({ projectDetail }) => {
  console.log(projectDetail?.longitude);
  useEffect(() => {
    mapboxgl.accessToken =
      "pk.eyJ1Ijoib2Rpb25qdWxpdXM3IiwiYSI6ImNsdHB0NnR4MzBxd2oya21ld2hidGoxcHAifQ.cKBjjsBDVcsUjTFxMfSHFw";

    const isValidCoordinate = (coord) => {
      return typeof coord === "number" && !isNaN(coord);
    };

    const convertToNumber = (coord) => {
      if (typeof coord === "string") {
        return parseFloat(coord);
      }
      return coord;
    };

    const longitude = convertToNumber(projectDetail?.longitude);
    const latitude = convertToNumber(projectDetail?.latitude);

    if (isValidCoordinate(longitude) && isValidCoordinate(latitude)) {
      const map = new mapboxgl.Map({
        container: "map-container", // HTML element ID where you want to render the map
        style: "mapbox://styles/mapbox/streets-v11", // Map style URL
        center: [longitude, latitude], // Specify longitude and latitude here
        zoom: 9, // Initial zoom level
      });
    } else {
      console.error("Invalid coordinates provided:", projectDetail);
    }
  }, [projectDetail]); // Include projectDetail as a dependency

  return <div id="map-container" style={{ width: "100%", height: "400px" }} />;
};

export default SelectedProjMap;

// import React from "react";
// import { GoogleMap, Marker, LoadScript } from "@react-google-maps/api";

// const SelectedProjMap = ({ location }) => {
//   const mapStyles = {
//     height: "400px",
//     width: "100%",
//   };

//   const defaultCenter = {
//     lat: location.latitude,
//     lng: location.longitude,
//   };

//   return (
//     <LoadScript googleMapsApiKey="YOUR_API_KEY">
//       <GoogleMap mapContainerStyle={mapStyles} zoom={10} center={defaultCenter}>
//         <Marker position={defaultCenter} />
//       </GoogleMap>
//     </LoadScript>
//   );
// };
