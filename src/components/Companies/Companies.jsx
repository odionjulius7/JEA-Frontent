import React from "react";
import "./Companies.css";
const Companies = ({ featuresAndLogos }) => {
  return (
    <section
      className="c-wrapper py-5"
      style={{
        backgroundColor: "#000000",
      }}
    >
      <div className="row">
        <div className="col-md-2 col-sm-12 my-4 mx-auto d-flex justify-content-center">
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
      {featuresAndLogos.length > 0 && (
        <div
          className="paddings innerWidth flexCenter c-container py-5"
          style={{
            color: "white",
          }}
        >
          {featuresAndLogos.slice(0, 4).map((item, index) => (
            <div
              key={index}
              className="col d-flex flex-column align-items-center justify-content-center"
            >
              <img src={item?.image} alt="" className="fit-content comp_img" />
              <span>{item?.title}</span>
            </div>
          ))}
        </div>
      )}

      {featuresAndLogos.length > 4 && (
        <div
          className="paddings innerWidth flexCenter c-container py-5"
          style={{
            color: "white",
          }}
        >
          {featuresAndLogos.slice(4, 8).map((item, index) => (
            <div
              key={index}
              className="col d-flex flex-column align-items-center justify-content-center"
            >
              <img src={item?.image} alt="" className="fit-content comp_img" />
              <span>{item?.title}</span>
            </div>
          ))}
        </div>
      )}

      {featuresAndLogos.length > 8 && (
        <div
          className="paddings innerWidth flexCenter c-container py-5"
          style={{
            color: "white",
          }}
        >
          {featuresAndLogos.slice(8, 12).map((item, index) => (
            <div
              key={index}
              className="col d-flex flex-column align-items-center justify-content-center"
            >
              <img src={item?.image} alt="" className="fit-content comp_img" />
              <span>{item?.title}</span>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Companies;
