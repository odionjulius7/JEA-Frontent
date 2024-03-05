import { useState } from "react";
import Header from "../Header/Header";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaShareAlt } from "react-icons/fa";

import { IoIosCall } from "react-icons/io";

import "./Hero.css";
import ProjAndPropSlide from "../Slider/ProjAndPropSlide";
{
  /* <div dangerouslySetInnerHTML={{ __html: propertyDetail?.property_details }} /> */
}
const PropsSelectedHero = ({ propertyDetail }) => {
  const [homePage, setHomePage] = useState(false);
  return (
    <div className="App--props-selected text-white">
      <div>
        <div className="white-gradient" />
        <Header />
        <div className="container-fluid px-5no">
          <div className="row py-5x">
            <div className="col-md-7 col-sm-12 dflex_2nd">
              <div className="row my-4">
                <div className="col-md-6 col-sm-12">
                  <button
                    type="button"
                    class="btn btn-outline-dark px-4 font_15"
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
                <h2 className="fw-bold font_30">{propertyDetail?.title}</h2>
                <div
                  className="input-styles w-50 my-3"
                  style={{
                    borderBottom: "2px solid grey",
                  }}
                ></div>
                <span
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <img
                    src="/location_icon.svg"
                    alt="hehvs"
                    style={{
                      marginRight: "5px",
                    }}
                  />
                  {propertyDetail?.location} |{" "}
                  <b>
                    {new Intl.NumberFormat("en-NG", {
                      style: "currency",
                      currency: "NGN",
                    }).format(propertyDetail?.price)}
                  </b>
                </span>
              </div>
              <div className="row d-flex my-4">
                <div className="col-md-6 col-sm-12 d-flex gap-4">
                  <div className="row gap-3">
                    <button
                      type="button"
                      className="btn btn-outline-dark fit-content font_15"
                      style={{
                        fontWeight: "600",
                      }}
                    >
                      <IoIosCall className="fs-4" /> Call Agent
                    </button>

                    <button
                      type="button"
                      className="btn btn-outline-dark fit-content font_15"
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
                  className="btn btn-outline-dark fit-content font_15"
                  style={{
                    fontWeight: "600",
                  }}
                >
                  <FaShareAlt className="fs-4 mx-4" /> Share this property
                </button>
              </div>
            </div>
            <div className="col-md-4 col-sm-12 dflex_1st px-5no">
              <div>
                {propertyDetail?.images && propertyDetail.images.length > 0 && (
                  <img
                    src={propertyDetail.images[0]}
                    className="fit-content"
                    alt=""
                    style={{
                      height: "550px",
                      width: "500px",
                    }}
                  />
                )}
              </div>
            </div>
          </div>
          <div
            className="row mb-5 display-none"
            style={{
              marginTop: "-15%",
              marginRight: "-15%",
            }}
          >
            <div className="col d-flex  text-align-center justify-content-center">
              <ProjAndPropSlide propertyDetail={propertyDetail} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropsSelectedHero;
