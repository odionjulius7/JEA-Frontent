import React, { useEffect } from "react";
import mapboxgl from "mapbox-gl";

import "./SelectedProjVideo.css";

const SelectedProjMap = ({ projectDetail }) => {
  console.log(projectDetail?.longitude);
  useEffect(() => {
    if (projectDetail) {
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

      // const longitude = convertToNumber(projectDetail.longitude);
      // const latitude = convertToNumber(projectDetail.latitude);

      const latitude = 6.4524638;
      const longitude = 3.4197735;
      console.log(longitude);
      console.log(latitude);
      if (isValidCoordinate(longitude) && isValidCoordinate(latitude)) {
        const map = new mapboxgl.Map({
          container: "map-container", // HTML element ID where you want to render the map
          // style: "mapbox://styles/odionjulius7/cltqow30y00x201pk92j103dq", // Map style URL
          style: "mapbox://styles/mapbox/streets-v11", // Map style URL
          center: [longitude, latitude], // Specify longitude and latitude here
          zoom: 12, // Initial zoom level
        });

        // Add a marker to the map
        new mapboxgl.Marker({
          // offset: [-10, -25], // Adjust the offset as needed
        })
          .setLngLat([latitude, longitude])
          .addTo(map);
      } else {
        console.error("Invalid coordinates provided:", projectDetail);
      }
    }
  }, [projectDetail]); // Include projectDetail as a dependency

  return (
    <div style={{ width: "100%", minheight: "350px" }}>
      {projectDetail ? (
        <div
          id="map-container"
          style={{ width: "100%", height: "350px", overflow: "hidden" }}
        />
      ) : (
        <h4>No Coordinate</h4>
      )}
    </div>
  );
};

export default SelectedProjMap;

// AIzaSyBVUFcyQX9Pizz7L13GSc_LMdGtbzE9T9o

// AIzaSyA4tav6MnHiVziVsTILw33Nd4Q6Nt8LqqI
