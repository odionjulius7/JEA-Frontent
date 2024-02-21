import React, { useState } from "react";
import "./LocationProps.css";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";
import LocationSlider from "../Slider/LocationSlider";
import { Link } from "react-router-dom";

const LocationProps = () => {
  return (
    <div className="container-fluid location-props">
      <h2 className="card-title-1">properties by location</h2>
      <div className="row text-align-right div_1">
        <div className="col-12">
          <LocationSlider />
        </div>
      </div>
    </div>
  );
};

export default LocationProps;
