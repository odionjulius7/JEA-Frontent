import React from "react";
import "./LocationProps.css";
import LocationSlider from "../Slider/LocationSlider";

const LocationProps = ({ uniqueLocations }) => {
  return (
    <div className="container-fluid location-props">
      <h2 className="card-title-1">Properties by location</h2>
      <div className="row text-align-right div_1">
        <div className="col-12">
          <LocationSlider uniqueLocations={uniqueLocations} />
        </div>
      </div>
    </div>
  );
};

export default LocationProps;
