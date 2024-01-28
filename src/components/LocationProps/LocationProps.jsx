import React from "react";
import "./LocationProps.css";

import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";
import LocationSlider from "../Slider/LocationSlider";

const LocationProps = () => {
  return (
    <div className="container-fluid location-props">
      <h2 className="card-title-1">properties by location</h2>
      <div
        className="row text-align-right "
        style={{
          marginRight: "-80px",
        }}
      >
        <div className="col-12 justify-content-right my-5 gap-5 d-flex">
          {/* <div className="ms-auto d-flex gap-3 "> */}
          <LocationSlider />
          {/* </div> */}
        </div>
        <div className="row justify-content-center my-2">
          <div
            className="col-3 d-flex gap-5"
            style={{
              marginRight: "-10%",
            }}
          >
            <button
              className="btn btn-outline-dark"
              style={{
                border: "1px solid #000000",
                padding: "0.3rem 1.4rem",
                borderRadius: "2rem",
              }}
            >
              {/* <img src="./Line-1.png" alt="line-img" /> */}
              <ArrowLeftOutlined />
            </button>
            <button
              className="btn btn-outline-dark "
              style={{
                border: "1px solid #000000",
                padding: "0.3rem 1.4rem",
                borderRadius: "2rem",
              }}
            >
              {/* <img src="./Line-2.png" alt="line-img" /> */}
              <ArrowRightOutlined />
            </button>
          </div>
        </div>
        <div className="row my-4">
          <div className="col-3 mx-auto search-home ">
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
