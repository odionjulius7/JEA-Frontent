import React, { useEffect, useState } from "react";

import "./WeeklyProps.css";
import { Button } from "react-bootstrap";
// import Buttons from "../Buttons";
import MySwiper from "../Slider/Sliderjs";
import { Link } from "react-router-dom";

const WeeklyProps = ({ blogPage, url_str, homeBg, propertyOfTheWeek }) => {
  const [category, setCategory] = useState("buy");
  // console.log(propertyOfTheWeek);
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

  // console.log(propertyOfTheWeek);

  const [activeButton, setActiveButton] = useState("Buy"); // Set the default active button

  const handleButtonClick = (text) => {
    console.log(text.toLowerCase());
    setActiveButton(text);

    // You can use setCateroy(text) here or perform any other actions based on the clicked button
    // setCateroy(text);
  };

  const buttonsData = [
    {
      text: "Buy",
      variant: "outline-light",
      // background: "#FBC344",
      color: "#121212",
    },
    {
      text: "Rent",
      variant: "outline-dark",
      // background: "#ffffff",
      color: "#121212",
    },
    {
      text: "Shortlet",
      variant: "outline-dark",
      // background: "#ffffff",
      color: "#121212",
    },
    {
      text: "Land",
      variant: "outline-dark",
      // background: "#ffffff",
      color: "#121212",
    },
  ];

  const filteredProperties = propertyOfTheWeek.filter(
    (item) => item.category.toLowerCase() === activeButton.toLowerCase()
  );

  return (
    <div
      className="container-fluid home-weekly-props"
      style={{
        backgroundColor: homeBg ? "#ffffff" : "#ffffff",
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
                {buttonsData.map((button) => (
                  <button
                    key={button.text}
                    className={`btn btn-${button.variant} ${
                      activeButton === button.text ? "active" : ""
                    }`}
                    style={{
                      width: "100px",
                      color: button.color,
                      fontSize: "15px",
                      fontWeight: "400 !important",
                      border:
                        activeButton === button.text
                          ? "2px solid #FBC344"
                          : "1px solid #D7D7D7",
                      background:
                        activeButton === button.text ? "#FBC344" : "#fff",
                    }}
                    onClick={() => handleButtonClick(button.text)}
                  >
                    {button.text}
                  </button>
                ))}
              </div>
            </div>
          </>
        )}
        <div
          className="row pt-3 pb-4"
          style={{
            margin: isMobile ? "0 1rem " : "",
          }}
        >
          {/* {homeBg && <h2 className="mb-5 mt-2">From Our Blog</h2>} */}
          {filteredProperties.length > 0 ? (
            <div
              className="col d-flex text-align-center justify-content-center"
              style={{
                padding: isMobile ? "0px" : "",
              }}
            >
              <MySwiper
                propertyOfTheWeek={filteredProperties}
                homeBg={homeBg}
                blogPage={blogPage}
                url_str={url_str}
              />
            </div>
          ) : (
            <h4
              style={{
                margin: !isMobile ? "8rem" : "2rem",
              }}
            >
              Please! Check Back
            </h4>
          )}
        </div>
      </div>
    </div>
  );
};

export default WeeklyProps;
