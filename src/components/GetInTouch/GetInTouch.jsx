import React, { useEffect, useState } from "react";

import GetInTInput from "../GetInTInput/GetInTInput";
import Textareas from "../GetInTInput/Textareas";
import { FaWhatsapp } from "react-icons/fa";

import "./GetInTouch.css";
const GetInTouch = ({ homePage }) => {
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
    <div
      className="container-fluid get-in-touch"
      style={{
        backgroundColor: homePage ? "#ffffff" : "#E3E3E3",
        padding: isMobile ? "20px" : "",
      }}
    >
      <div className="row">
        <div className="col-md-5 col-sm-12 display_none p-0">
          <img
            src="./get-in-touch.png"
            alt=""
            className="w-100"
            // className="fit-content"
            style={{
              height: "100%",
            }}
          />
        </div>
        <div className="col-md-7 col-sm-12 input-side d-flex flex-column justify-content-center">
          {/* <div className="container"> */}
          <div className="row">
            <h2
              style={{
                fontWeight: "600",
              }}
            >
              Get in Touch
            </h2>
            <p className="">
              Have an inquiry or some feedback for us?
              <br />
              Fill out the form below and our team will get in touch with you.
            </p>
          </div>
          <div className="row py-5">
            <div className="col-md-6 col-sm-12 my-2">
              <GetInTInput text={"First name"} bordr={"input-styles"} />
            </div>
            <div className="col-md-6 col-sm-12 my-2">
              <GetInTInput text={"Last name"} bordr={"input-styles"} />
            </div>
          </div>
          <div className="row py-5x">
            <div className="col-md-6 col-sm-12 my-2">
              <GetInTInput text={"Email address"} bordr={"input-styles"} />
            </div>
            <div className="col-md-6 col-sm-12 my-2">
              <GetInTInput text={"Phone number"} bordr={"input-styles"} />
            </div>
          </div>
          <div className="row py-3">
            <div className="col-12">
              <Textareas />
            </div>
          </div>
          <div className="row my-4">
            <div className="col-md-4 col-sm-6">
              <button
                type="button"
                class="btn btn-outline-dark font_15"
                style={{
                  fontWeight: 500,
                  fontSize: "15px",
                  padding: "10px 20px",
                }}
              >
                GET IN TOUCH
              </button>
            </div>
          </div>
          {/* <div className="row align-items-right justify-content-end">
            <div className="col-md-6 col-sm-6 d-flex justify-content-end align-items-center gap-3">
              {" "}
              <button
                id="search-btn"
                className="button fit-content my-4"
                style={{
                  background: "#25D366",
                  //   width: "50%",
                  color: "#ffffff",
                  fontWeight: "600",
                  borderRadius: "90px",
                }}
              >
                Chat with us
              </button>
              <div
                className="d-flex align-items-center justify-content-center"
                style={{
                  cursor: "pointer",
                  padding: "10px",
                  backgroundColor: "#075E54",
                  borderRadius: "200px",
                  fontSize: "32px",
                  color: "#fff",
                }}
              >
                <FaWhatsapp
                  style={{
                    color: "",
                  }}
                />
              </div>
            </div>
          </div> */}
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
