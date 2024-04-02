import React from "react";
import "./LocationProps.css";
import LocationSlider from "../Slider/LocationSlider";

const LocationProps = ({ uniqueLocations }) => {
  return (
    <div className="container-fluid location-props">
      <h2 className="card-title-1">Properties by location</h2>
      <div className="row text-align-right div_1">
        <div className="col-12">
          {uniqueLocations?.length > 0 ? (
            <LocationSlider uniqueLocations={uniqueLocations} />
          ) : (
            <h4
              style={{
                margin: "8rem",
              }}
            >
              Please! Check Back
            </h4>
          )}
        </div>
      </div>
    </div>
  );
};

export default LocationProps;
