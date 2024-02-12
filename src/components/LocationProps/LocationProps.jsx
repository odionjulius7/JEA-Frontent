import React from "react";
import "./LocationProps.css";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";
import LocationSlider from "../Slider/LocationSlider";

const LocationProps = () => {
  return (
    <div className="container-fluid location-props">
      <h2 className="card-title-1">properties by location</h2>
      <div
        className="row text-align-right div_1"
        // style={{
        //   marginRight: "-80px",
        // }}
      >
        <div className="col-12 justify-content-right my-5x gap-5 d-flex">
          {/* <div className="ms-auto d-flex gap-3 "> */}
          <LocationSlider />
          {/* </div> */}
        </div>
        <div className="row justify-content-center my-2 display-none">
          <div
            className="col-3 d-flex justify-content-center gap-5x"
            // style={{
            //   marginRight: "-10%",
            // }}
          >
            <button
              className="btn btn-outline-dark"
              style={{
                border: "1px solid #000000",
                padding: "0.3rem 1.3rem",
                borderRadius: "2rem",
              }}
            >
              {/* <img src="./Line-1.png" alt="line-img" /> */}
              <FaLongArrowAltLeft />
            </button>
            <button
              className="btn btn-outline-dark "
              style={{
                border: "1px solid #000000",
                padding: "0.3rem 1.3rem",
                borderRadius: "2rem",
              }}
            >
              {/* <img src="./Line-2.png" alt="line-img" /> */}
              <FaLongArrowAltRight />
            </button>
          </div>
        </div>
        <div className="row my-4">
          <div className="col-md-3 col-sm-3 d-flex justify-content-center  mx-auto search-home ">
            <button
              id="search-btn"
              className="button fit-content"
              style={{
                background: "#FBC344",
                width: "100%",
                color: "#000000",
                fontWeight: "500",
              }}
            >
              VIEW ALL PROPERTIES
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationProps;
