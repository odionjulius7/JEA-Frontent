import React, { useEffect } from "react";
import mapboxgl from "mapbox-gl";

const SelectedProjMap = ({ projectDetail }) => {
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
        container: "map-container",
        style: "mapbox://styles/mapbox/streets-v11",
        center: [longitude, latitude],
        zoom: 9,
      });

      // Create a marker and add it to the map
      new mapboxgl.Marker().setLngLat([longitude, latitude]).addTo(map);
    } else {
      console.error("Invalid coordinates provided:", projectDetail);
    }
  }, [projectDetail]);

  return <div id="map-container" style={{ width: "100%", height: "400px" }} />;
};

export default SelectedProjMap;
