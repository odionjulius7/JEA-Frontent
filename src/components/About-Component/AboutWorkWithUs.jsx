import React from "react";

import Buttons from "../Buttons";

const AboutWorkWithUs = () => {
  return (
    <div className="container-fluid work_us p-0">
      <div className="row my-4">
        <div className="col-md-6 col-sm-12 work_us-img">
          <img
            src="./lets_connect.png"
            alt=""
            className="fit-content"
            style={{
              height: "auto",
            }}
          />
        </div>
        <div className="col-md-6 col-sm-12 d-flex flex-column justify-content-center gap-4x work_us-text">
          <h4
            className="my-2"
            style={{
              fontWeight: "600",
            }}
          >
            Work With Us
          </h4>
          <p className="my-4 font_15">
            As part of Joe Etoniru & Associates (A team), our team of dedicated
            real estate agents is committed to making the home buying and
            selling process as smooth as possible. We listen to your needs and
            criteria in finding you your "Dream House" and are dedicated to
            keeping you informed throughout each step. Your satisfaction and
            peace of mind are our top priorities as we guide you through the
            real estate journey.
          </p>
          <Buttons
            text={"LET’S CONNECT"}
            style={{
              backgroundColor: "#FBC344",
              border: "1px solid #FBC344",
              color: "#000",
              width: "50%",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default AboutWorkWithUs;
