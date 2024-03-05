import React, { useEffect, useState } from "react";

import "./WeeklyProps.css";
import { Button } from "react-bootstrap";
import Buttons from "../Buttons";
import MySwiper from "../Slider/Sliderjs";
import { Link } from "react-router-dom";

const WeeklyProps = ({ blogPage, url_str, homeBg, propertyOfTheWeek }) => {
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

  console.log(propertyOfTheWeek);

  return (
    <div
      className="container-fluid home-weekly-props"
      style={{
        backgroundColor: homeBg ? "#ffffff" : "#ffffff",
        // backgroundColor: homeBg ? "#e1e1e1" : "#ffffff",
      }}
    >
      <div className="row">
        {!blogPage && (
          <>
            <div className="col-12 d-flex justify-content-between align-items-center weekly-props-header mb-3">
              <h2>Properties of the Week</h2>
              <div className="display-none">
                <Link to="/properties">
                  <Button variant="outline-dark py-2 px-5">
                    VIEW ALL PROPERTIES
                  </Button>
                </Link>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 col-sm-12 d-flex gap-3 my-4 row-btn">
                <Buttons
                  text="Buy"
                  style={{
                    width: "100px",
                    background: "#FBC344",
                    color: "#121212",
                    fontSize: "15px",
                    fontWeight: "400 !important",
                    border: "1px solid #D7D7D7",
                  }}
                  variant={"outline-light"}
                />
                <Buttons
                  text="Rent"
                  style={{
                    width: "100px",
                    color: "#121212",
                    fontSize: "15px",
                    fontWeight: "400 !important",
                    border: "1px solid #D7D7D7",
                  }}
                  variant={"outline-dark"}
                />
                <Buttons
                  text="Short Let"
                  style={{
                    width: "100px",
                    color: "#121212",
                    fontSize: "15px",
                    fontWeight: "400 !important",
                    border: "1px solid #D7D7D7",
                  }}
                  variant={"outline-dark"}
                />
                <Buttons
                  text="Lands"
                  style={{
                    width: "100px",
                    color: "#121212",
                    fontSize: "15px",
                    fontWeight: "400 !important",
                    border: "1px solid #D7D7D7",
                  }}
                  variant={"outline-dark"}
                />
              </div>
            </div>
          </>
        )}
        <div className="row pt-3 pb-4">
          {/* {homeBg && <h2 className="mb-5 mt-2">From Our Blog</h2>} */}
          <div
            className="col d-flex text-align-center justify-content-center"
            style={{
              padding: isMobile ? "0px" : "",
            }}
          >
            <MySwiper
              propertyOfTheWeek={propertyOfTheWeek}
              homeBg={homeBg}
              blogPage={blogPage}
              url_str={url_str}
            />
          </div>
        </div>
        {/* {homeBg && (
          <div className="row mb-4 mt-5">
            <div className="col-md-3 col-sm-3 d-flex justify-content-center  mx-auto search-home ">
              <Link
                to="/blogs"
                style={{
                  width: "100%",
                }}
              >
                <button
                  id="search-btn"
                  className="button fit-content"
                  style={{
                    background: "#FBC344",
                    width: "100%",
                    color: "#000000",
                    fontWeight: "500",
                    fontSize: "15px",
                    borderRadius: "9px",
                  }}
                >
                  VIEW ALL BLOG POSTS
                </button>
              </Link>
            </div>
          </div>
        )} */}
      </div>
    </div>
  );
};

export default WeeklyProps;
