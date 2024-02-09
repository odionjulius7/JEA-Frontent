import React from "react";

import "./style.css";

const AboutImages = () => {
  return (
    <div className="container-fluid AboutImages">
      {/* Images */}
      <div className="row my-5">
        <div className="row">
          <div className="col-md-7 col-sm-6">
            <img
              src="./about_img-1.png"
              alt=""
              className="w-100 "
              style={{
                height: "350px",
              }}
            />
          </div>
          <div className="col-md-5 col-sm-6">
            <img
              src="./about_img-2.png"
              alt=""
              className="w-100"
              style={{
                height: "350px",
              }}
            />
          </div>
        </div>
        <div className="row my-4">
          <div className="col-md-5 col-sm-6">
            <img
              src="./about_img-3.png"
              alt=""
              className="w-100"
              style={{
                height: "350px",
              }}
            />
          </div>
          <div className="col-md-7 col-sm-6">
            <img
              src="./about_img-4.png"
              alt=""
              className="w-100"
              style={{
                height: "350px",
              }}
            />
          </div>
        </div>
        <div className="row my-4">
          <div className="col-md-7 col-sm-6">
            <img
              src="./about_img-5.png"
              alt=""
              className="w-100"
              style={{
                height: "350px",
              }}
            />
          </div>
          <div className="col-md-5 col-sm-6">
            <img
              src="./about_img-6.png"
              alt=""
              className="w-100"
              style={{
                height: "350px",
              }}
            />
          </div>
        </div>
        <div className="row my-4">
          <div className="col-md-5 col-sm-6">
            <img
              src="./about_img-7.png"
              alt=""
              className="w-100"
              style={{
                height: "350px",
              }}
            />
          </div>
          <div className="col-md-7 col-sm-6">
            <img
              src="./about_img-8.png"
              alt=""
              className="w-100"
              style={{
                height: "350px",
              }}
            />
          </div>
        </div>
      </div>

      {/* Our Agent */}
      <div className="row my-4">
        <div className="row my-4 ">
          <div className="col d-flex justify-content-center">
            <h2>Our Agents</h2>
          </div>
        </div>
        <div className="row my-2 img_padding">
          <div className="col-md-4 col-sm-6 d-flex flex-column justify-content-center align-items-center px-0">
            <img
              src="./our_agent-1.png"
              alt=""
              className="fit-content"
              style={{
                height: "auto",
              }}
            />
            <h6 className="font_18 mt-4">John Doe</h6>
            <p className="font_12">Realtor</p>
          </div>
          <div className="col-md-4 col-sm-6 d-flex flex-column justify-content-center align-items-center px-0">
            <img
              src="./our_agent-2.png"
              alt=""
              className="fit-content"
              style={{
                height: "auto",
              }}
            />
            <h6 className="font_18 mt-4">John Doe</h6>
            <p className="font_12">Realtor</p>
          </div>
          <div className="col-md-4 col-sm-6 d-flex flex-column justify-content-center align-items-center  px-0">
            <img
              src="./our_agent-1.png"
              alt=""
              className="fit-content"
              style={{
                height: "auto",
              }}
            />
            <h6 className="font_18 mt-4">John Doe</h6>
            <p className="font_12">Realtor</p>
          </div>
        </div>
        <div className="row my-4 img_padding">
          <div className="col-md-4 col-sm-6 d-flex flex-column justify-content-center align-items-center  px-0">
            <img
              src="./our_agent-2.png"
              alt=""
              className="fit-content"
              style={{
                height: "auto",
              }}
            />
            <h6 className="font_18 mt-4">John Doe</h6>
            <p className="font_12">Realtor</p>
          </div>
          <div className="col-md-4 col-sm-6 d-flex flex-column justify-content-center align-items-center px-0">
            <img
              src="./our_agent-1.png"
              alt=""
              className="fit-content"
              style={{
                height: "auto",
              }}
            />
            <h6 className="font_18 mt-4">John Doe</h6>
            <p className="font_12">Realtor</p>
          </div>
          <div className="col-md-4 col-sm-6 d-flex flex-column justify-content-center align-items-center  px-0">
            <img
              src="./our_agent-2.png"
              alt=""
              className="fit-content"
              style={{
                height: "auto",
              }}
            />
            <h6 className="font_18 mt-4">John Doe</h6>
            <p className="font_12">Realtor</p>
          </div>
        </div>
      </div>

      {/* Work With Us */}
    </div>
  );
};

export default AboutImages;
