import React, { useEffect, useState } from "react";

import "./style.css";

const AboutImages = ({ blogs }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 460);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="container-fluid AboutImages">
      {/* Images */}
      <div className="row my-5x first-mg">
        <div className="row">
          <div className="col-md-7 col-sm-6">
            <img
              src="./about_img-1.png"
              alt=""
              className="w-100 "
              style={{
                height: "350px",
                margin: "1rem",
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
                margin: "1rem",
              }}
            />
          </div>
        </div>
        <div className="row my-4x">
          <div className="col-md-5 col-sm-6">
            <img
              src="./about_img-3.png"
              alt=""
              className="w-100"
              style={{
                height: "350px",
                margin: "1rem",
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
                margin: "1rem",
              }}
            />
          </div>
        </div>
        <div className="row my-4x">
          <div className="col-md-7 col-sm-6">
            <img
              src="./about_img-5.png"
              alt=""
              className="w-100"
              style={{
                height: "350px",
                margin: "1rem",
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
                margin: "1rem",
              }}
            />
          </div>
        </div>
        <div className="row my-4x">
          <div className="col-md-5 col-sm-6">
            <img
              src="./about_img-7.png"
              alt=""
              className="w-100"
              style={{
                height: "350px",
                margin: "1rem",
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
                margin: "1rem",
              }}
            />
          </div>
        </div>
      </div>

      {/* Our Agent */}
      <div className="row my-4 AboutImages_our_agent">
        <div className="row my-4 ">
          <div className="col d-flex justify-content-center">
            <h2>Our Agents</h2>
          </div>
        </div>
        <div className="row my-2 img_padding">
          {blogs?.slice(0, 3).map((item, index) => (
            <div
              key={index}
              className="col-md-4 col-sm-6 d-flex flex-column justify-content-center align-items-center px-0"
            >
              <img
                src={item?.image}
                // src="./our_agent-1.png"
                alt="sds"
                className="fit-content"
                style={{
                  height: "auto",
                }}
              />
              <h6 className="font_18 mt-4">{item?.title}</h6>
              <p className="font_12">{item?.body}</p>
            </div>
          ))}
        </div>
        {/*  */}
        <div className="row my-4 img_padding">
          {blogs?.slice(3, 6).map((item, index) => (
            <div
              key={index}
              className="col-md-4 col-sm-6 d-flex flex-column justify-content-center align-items-center px-0"
            >
              <img
                src={item?.image}
                // src="./our_agent-1.png"
                alt="sds"
                className="fit-content"
                style={{
                  height: "auto",
                }}
              />
              <h6 className="font_18 mt-4">{item?.title}</h6>
              <p className="font_12">{item?.body}</p>
            </div>
          ))}
        </div>
        <div className="row my-4 img_padding">
          {blogs?.slice(6, 9).map((item, index) => (
            <div
              key={index}
              className="col-md-4 col-sm-6 d-flex flex-column justify-content-center align-items-center px-0"
            >
              <img
                src={item?.image}
                // src="./our_agent-1.png"
                alt="sds"
                className="fit-content"
                style={{
                  height: "auto",
                }}
              />
              <h6 className="font_18 mt-4">{item?.title}</h6>
              <p className="font_12">{item?.body}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Work With Us */}
    </div>
  );
};

export default AboutImages;
