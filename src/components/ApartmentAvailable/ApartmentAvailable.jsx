import React from "react";
import "./ApartmentAvailable.css";
import CommonSlide from "../CommonSlide";
// import Cards from "../Cards/Cards";

const ApartmentAvailable = () => {
  return (
    <div className="container-fluid apartment-available">
      <h2 className="card-title-1">Available Luxury Apartments</h2>
      <CommonSlide px={"10px"} colr={"#ffffff"} gbColr={"#000000"} />
    </div>
  );
};

export default ApartmentAvailable;
