import React from "react";

import GetInTInput from "../GetInTInput/GetInTInput";
import Textareas from "../GetInTInput/Textareas";
import { FaWhatsapp } from "react-icons/fa";

import "./GetInTouch.css";
const GetInTouch = ({ homePage }) => {
  return (
    <div
      className="container-fluid get-in-touch"
      style={{
        backgroundColor: homePage ? "#ffffff" : "#E3E3E3",
      }}
    >
      <div className="row">
        <div className="col-5">
          <img src="./get-in-touch.png" alt="" className="fit-content" />
        </div>
        <div className="col-6 input-side">
          <div className="container">
            <div className="row">
              <h2>Get in Touch</h2>
              <p className="fs-6">
                Have an inquiry or some feedback for us?
                <br />
                Fill out the form below and our team will get in touch with you.
              </p>
            </div>
            <div className="row py-5">
              <div className="col-6">
                <GetInTInput text={"First name"} bordr={"input-styles"} />
              </div>
              <div className="col-6">
                <GetInTInput text={"Last name"} bordr={"input-styles"} />
              </div>
            </div>
            <div className="row py-5">
              <div className="col-6">
                <GetInTInput text={"Email address"} bordr={"input-styles"} />
              </div>
              <div className="col-6">
                <GetInTInput text={"Phone number"} bordr={"input-styles"} />
              </div>
            </div>
            <div className="row py-3">
              <div className="col-12">
                <Textareas />
              </div>
            </div>
            <div className="row my-4">
              <div className="col-4">
                <button
                  type="button"
                  class="btn btn-outline-dark "
                  style={{
                    fontWeight: 500,
                    fontSize: "15px",
                  }}
                >
                  GET IN TOUCH
                </button>
              </div>
            </div>

            <div className="row align-items-right justify-content-end">
              <div className="col-6 d-flex align-items-center gap-3">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
