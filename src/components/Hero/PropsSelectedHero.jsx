import { useState } from "react";
import Header from "../Header/Header";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaShareAlt } from "react-icons/fa";

import { IoIosCall } from "react-icons/io";

import "./Hero.css";
import ProjAndPropSlide from "../Slider/ProjAndPropSlide";

const PropsSelectedHero = () => {
  const [homePage, setHomePage] = useState(false);
  return (
    <div className="App--props-selected text-white">
      <div>
        <div className="white-gradient" />
        <Header />
        <div className="container-fluid px-5">
          <div className="row py-5">
            <div className="col-7">
              <div className="row my-4">
                <div className="col-6">
                  <button
                    type="button"
                    class="btn btn-outline-dark px-4"
                    style={{
                      fontWeight: 500,
                      fontSize: "15px",
                      borderRadius: "90px",
                    }}
                  >
                    VIEW ALL PROPERTIES
                  </button>
                </div>
              </div>
              <div className="row my-4">
                <h2 className="fw-bold">4 Bedroom Terrace</h2>
                <div
                  className="input-styles w-50 my-3"
                  style={{
                    borderBottom: "2px solid grey",
                  }}
                ></div>
                <span>
                  Osapa London | <b>₦140,000,000</b>
                </span>
              </div>
              <div className="row d-flex my-4">
                <div className="col-6 d-flex gap-4">
                  <div className="row gap-3">
                    <button
                      type="button"
                      className="btn btn-outline-dark fit-content "
                      style={{
                        fontWeight: "600",
                      }}
                    >
                      <IoIosCall className="fs-4" /> Call Agent
                    </button>

                    <button
                      type="button"
                      className="btn btn-outline-dark fit-content"
                      style={{
                        // width: "50%",
                        fontWeight: "600",
                      }}
                    >
                      <IoLogoWhatsapp className="fs-4" /> Message Agent
                    </button>
                  </div>
                </div>
              </div>
              <div className="row my-3">
                <button
                  type="button"
                  className="btn btn-outline-dark fit-content"
                  style={{
                    fontWeight: "600",
                  }}
                >
                  <FaShareAlt className="fs-4 mx-4" /> Share this property
                </button>
              </div>
            </div>
            <div className="col-4 px-5">
              <div>
                <img
                  src="./props-selected-hero-img.png"
                  className="fit-content"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div
            className="row mb-5"
            style={{
              marginTop: "-16%",
              marginRight: "-15%",
            }}
          >
            <div className="col d-flex  text-align-center justify-content-center">
              <ProjAndPropSlide />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropsSelectedHero;
