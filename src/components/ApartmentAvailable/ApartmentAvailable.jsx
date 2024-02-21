import React from "react";
import "./ApartmentAvailable.css";
import CommonSlide from "../CommonSlide/CommonSlide";
// import Cards from "../Cards/Cards";

const ApartmentAvailable = ({ homePage }) => {
  return (
    <div className="container-fluid apartment-available">
      <h2 className="card-title-1">
        Available Luxury Apartments <img src="./long.svg" alt="" />
      </h2>
      <CommonSlide
        px={"10px"}
        colr={"#ffffff"}
        gbColr={"#000000"}
        homePage={homePage}
      />
    </div>
  );
};

export default ApartmentAvailable;
