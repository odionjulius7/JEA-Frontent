import React, { useEffect, useState } from "react";
import ReactMapGl, { Marker } from "react-map-gl";
import { CiLocationOn } from "react-icons/ci";

const SelectedProjMap = ({ projectDetail }) => {
  const [newPlace, setNewPlace] = useState({ lat: 0, long: 0 }); // Initialize with default values
  const [viewPort, setViewPort] = useState({
    latitude: 6.5244,
    longitude: 3.3792,
    zoom: 12,
  });

  useEffect(() => {
    if (projectDetail?.longitude && projectDetail?.latitude) {
      setViewPort((prevViewport) => ({
        ...prevViewport,
        latitude: parseFloat(projectDetail?.latitude),
        longitude: parseFloat(projectDetail?.longitude),
      }));
    }
  }, [projectDetail?.latitude, projectDetail?.longitude]);

  function handleClick(e) {
    if (e.lngLat) {
      const { lng, lat } = e.lngLat;
      setNewPlace({ lat, long: lng });
    }
  }

  console.log(viewPort);

  return (
    <div
      style={{
        width: "100vw",
        height: "80vh",
        zIndex: 999,
      }}
    >
      <ReactMapGl
        {...viewPort}
        mapboxApiAccessToken="pk.eyJ1Ijoib2Rpb25qdWxpdXM3IiwiYSI6ImNsdHB0NnR4MzBxd2oya21ld2hidGoxcHAifQ.cKBjjsBDVcsUjTFxMfSHFw"
        width="100%"
        height="100%"
        mapStyle="mapbox://styles/mapbox/streets-v11"
        onViewportChange={(viewPort) => setViewPort(viewPort)}
        onDblClick={handleClick}
        interactive
      >
        {newPlace && ( // Check if newPlace is defined before rendering Marker
          <Marker
            latitude={newPlace.lat}
            longitude={newPlace.long}
            offsetLeft={-3.5 * viewPort.zoom}
            offsetTop={-7 * viewPort.zoom}
          >
            <div>
              <CiLocationOn
                style={{
                  fontSize: "24px",
                  color: "tomato",
                }}
              />
            </div>
          </Marker>
        )}
      </ReactMapGl>
      {/* no map */}
    </div>
  );
};

export default SelectedProjMap;
