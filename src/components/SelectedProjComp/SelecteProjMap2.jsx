import React, { useEffect, useState } from "react";
// import Header from "../components/Header";
import Map, {
  Marker,
  NavigationControl,
  FullscreenControl,
  ScaleControl,
} from "react-map-gl";
import mapboxgl from "mapbox-gl";

import "./SelectedProjVideo.css";
// import axios from "axios";
// import { NotificationManager } from "react-notifications";
// import Footer from "../components/Footer";
/* eslint-disable import/no-webpack-loader-syntax */
mapboxgl.workerClass =
  require("worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker").default;

export default function Contact({ projectDetail }) {
  const [longitude, setLongitude] = useState(null);
  const [latitude, setLatitude] = useState(null);

  useEffect(() => {
    if (projectDetail) {
      const isValidCoordinate = (coord) => {
        return typeof coord === "number" && !isNaN(coord);
      };

      const convertToNumber = (coord) => {
        if (typeof coord === "string") {
          return parseFloat(coord);
        }
        return coord;
      };

      const longitudeValue = convertToNumber(projectDetail.longitude);
      const latitudeValue = convertToNumber(projectDetail.latitude);

      if (
        isValidCoordinate(longitudeValue) &&
        isValidCoordinate(latitudeValue)
      ) {
        setLongitude(longitudeValue);
        setLatitude(latitudeValue);
      } else {
        // If coordinates are not available, handle accordingly
        setLongitude(null);
        setLatitude(null);
      }
    }
  }, [projectDetail]);

  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <section className="map2">
      {longitude !== null && latitude !== null ? (
        <Map
          initialViewState={{
            //   longitude: 5.6027986,
            //   latitude: 6.4672911,
            longitude: longitude,
            latitude: latitude,
            zoom: 12,
            bearing: 0,
            pitch: 0,
          }}
          mapboxAccessToken="pk.eyJ1Ijoiam9zaDQzMjQiLCJhIjoiY2tiemoyYmN2MGJ6ODJ2bXJmM25pbjN1dSJ9.veWU3GwQOzzf0OSAA_TRNg"
          width="100%"
          height="100%"
          transitionDuration="200"
          mapStyle="mapbox://styles/mapbox/streets-v11"
          // mapStyle="mapbox://styles/mapbox/streets-v9"
        >
          <FullscreenControl position="top-left" />
          <NavigationControl position="top-left" />
          <ScaleControl />
          <Marker
            longitude={longitude.toString()}
            latitude={latitude.toString()}
            //   longitude="5.6027986"
            //   latitude="6.4672911"
            offsetLeft={-3.5 * 12}
            offsetTop={-7 * 12}
          ></Marker>
        </Map>
      ) : (
        <div>No coordinates available</div>
      )}
    </section>
  );
}

// import React, { useEffect, useState } from "react";
// import Map, {
//   Marker,
//   NavigationControl,
//   FullscreenControl,
//   ScaleControl,
// } from "react-map-gl";
// import mapboxgl from "mapbox-gl";

// // Use a require statement to import the Mapbox worker
// const MapboxWorker = require("worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker");

// export default function Contact({ projectDetail }) {
//   const [longitude, setLongitude] = useState(null);
//   const [latitude, setLatitude] = useState(null);

//   useEffect(() => {
//     if (projectDetail) {
//       const isValidCoordinate = (coord) => {
//         return typeof coord === "number" && !isNaN(coord);
//       };

//       const convertToNumber = (coord) => {
//         if (typeof coord === "string") {
//           return parseFloat(coord);
//         }
//         return coord;
//       };

//       const longitudeValue = convertToNumber(projectDetail.longitude);
//       const latitudeValue = convertToNumber(projectDetail.latitude);

//       if (
//         isValidCoordinate(longitudeValue) &&
//         isValidCoordinate(latitudeValue)
//       ) {
//         setLongitude(longitudeValue);
//         setLatitude(latitudeValue);
//       } else {
//         // If coordinates are not available, handle accordingly
//         setLongitude(null);
//         setLatitude(null);
//       }
//     }
//   }, [projectDetail]);

//   return (
//     <div>
//       <section
//         className="map2"
//         style={{ width: "100%", height: "70vh", overflow: "hidden" }}
//       >
//         {longitude !== null && latitude !== null ? (
//           <Map
//             initialViewState={{
//               longitude: longitude,
//               latitude: latitude,
//               zoom: 12,
//               bearing: 0,
//               pitch: 0,
//             }}
//             mapboxAccessToken="pk.eyJ1Ijoiam9zaDQzMjQiLCJhIjoiY2tiemoyYmN2MGJ6ODJ2bXJmM25pbjN1dSJ9.veWU3GwQOzzf0OSAA_TRNg"
//             width="100%"
//             height="100%"
//             transitionDuration="200"
//             mapStyle="mapbox://styles/mapbox/streets-v9"
//             mapboxWorker={MapboxWorker}
//           >
//             <FullscreenControl position="top-left" />
//             <NavigationControl position="top-left" />
//             <ScaleControl />
//             <Marker
//               longitude={longitude.toString()}
//               latitude={latitude.toString()}
//               offsetLeft={-3.5 * 12}
//               offsetTop={-7 * 12}
//             ></Marker>
//           </Map>
//         ) : (
//           <div>No coordinates available</div>
//         )}
//       </section>
//     </div>
//   );
// }
