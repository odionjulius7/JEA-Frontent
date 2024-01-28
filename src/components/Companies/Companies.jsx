import React from "react";
import "./Companies.css";
const Companies = () => {
  return (
    <section
      className="c-wrapper py-5"
      style={{
        backgroundColor: "#000000",
      }}
    >
      <div className="row">
        <div className="col-2 my-4 mx-auto">
          <h2
            style={{
              fontWeight: "600",
              fontSize: "32px",
              color: "#ffffff",
            }}
          >
            Features
          </h2>
        </div>
      </div>
      <div
        className="paddings innerWidth flexCenter c-container py-5"
        style={{
          color: "white",
        }}
      >
        <div className="col d-flex flex-column align-items-center justify-content-center">
          <img src="./gym-img.png" alt="" className="fit-content" />
          <span>Gym</span>
        </div>
        <div className="col d-flex flex-column align-items-center  justify-content-center">
          <img src="./electric_meter.png" alt="" className="fit-content" />
          <span>Power</span>
        </div>
        <div className="col d-flex flex-column align-items-center  justify-content-center">
          <img src="./wifi.png" alt="" className="fit-content" />
          <span>High Speed Internet</span>
        </div>
        <div className="col d-flex flex-column align-items-center  justify-content-center">
          <img src="./nest_cam_iq_outdoor.png" className="fit-content" alt="" />
          <span>High Speed Internet</span>
        </div>
      </div>
      <div
        className="paddings innerWidth flexCenter c-container py-5"
        style={{
          color: "white",
        }}
      >
        <div className="col d-flex flex-column align-items-center justify-content-center">
          <img src="./smartphone.png" alt="" className="fit-content" />
          <span>Smart Home</span>
        </div>
        <div className="col d-flex flex-column align-items-center justify-content-center">
          <img src="./ev_station.png" alt="" className="fit-content" />
          <span>Charging Dock</span>
        </div>
        <div className="col d-flex flex-column align-items-center justify-content-center">
          <img src="./bath_private.png" alt="" className="fit-content" />
          <span>Spa</span>
        </div>
        <div className="col d-flex flex-column align-items-center justify-content-center">
          <img src="./other_houses.png" className="fit-content" alt="" />
          <span>Gazebo</span>
        </div>
      </div>
      <div
        className="paddings innerWidth flexCenter c-container py-5"
        style={{
          color: "white",
        }}
      >
        <div className="col d-flex flex-column align-items-center  justify-content-center">
          <img src="./countertops-1.png" alt="" className="fit-content" />
          <span>Wine Chiller</span>
        </div>
        <div className="col d-flex flex-column align-items-center">
          <img
            src="./wine_bar.png"
            alt=""
            className="fit-content  justify-content-center"
          />
          <span>Wine Chiller</span>
        </div>
        <div className="col d-flex flex-column align-items-center  justify-content-center">
          <img src="./book_4.png" alt="" className="fit-content" />
          <span>Study</span>
        </div>
        <div className="col d-flex flex-column align-items-center  justify-content-center">
          <img src="./heat.png" className="fit-content" alt="" />
          <span>Heat Extractor</span>
        </div>
      </div>
    </section>
  );
};

export default Companies;
