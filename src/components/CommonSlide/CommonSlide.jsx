import React, { useEffect, useState } from "react";
import Cards from "../Cards/Cards";

import { FaLongArrowAltLeft } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";

import "./CommonSlide.css";

const CommonSlide = ({
  px,
  colr,
  gbColr,
  stlr,
  homePage,
  featuredProp,
  availableLuxury,
}) => {
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

  // Slide
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [1, 2, 3, 4, 5, 6, 7, 8];

  // Calculate the transform percentage
  const slideWidthPercent = 100 / slides.length;
  const transformPercentage = -(currentIndex * slideWidthPercent);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
      {featuredProp && (
        <div className="row">
          <div className="col-12 d-flex justify-content-between align-items-center weekly-props-header">
            <h2 className="mb-0">Featured Properties</h2>
            <div
              className="d-flex gap-5x hover_btn"
              style={{
                marginTop: isMobile ? "30px" : "",
              }}
            >
              <button
                className="btn btn-outline-dark prev"
                onClick={prevSlide}
                style={{
                  border: "1px solid #000000",
                  padding: "0.8rem 2rem",
                  borderRadius: "2rem",
                  //
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img src="./arrow_left_svg_dk.svg" alt="line-img" />
                {/* <FaLongArrowAltLeft /> */}
              </button>
              <button
                className="btn btn-outline-dark next"
                onClick={nextSlide}
                style={{
                  border: "1px solid #000000",
                  padding: "0.8rem 2rem",
                  borderRadius: "2rem",
                  //
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img src="./arrow_right_svg_db.svg" alt="line-img" />
                {/* <FaLongArrowAltRight /> */}
              </button>
            </div>
          </div>
        </div>
      )}
      <div
        className="row rower_wrap mt-5"
        style={{
          marginLeft: isMobile ? "" : px,
        }}
      >
        <div className="col-12">
          {/* <div className="row my-5 gap-3x">
          <div className="col-md-3 col-sm-8 col-xs-12 my-2 ms-auto">
            <Cards text={"01"} colr={colr} gbColr={gbColr} />
          </div>
        </div> */}
          <div className="swiper">
            <div
              className="swiper-slides"
              style={{ transform: `translateX(${transformPercentage}%)` }}
            >
              {availableLuxury.length > 0 ? (
                availableLuxury.map((slide, index) => (
                  <div key={index} className="slide">
                    <Cards
                      slide={slide}
                      text={`0${index + 1}`}
                      colr={colr}
                      gbColr={gbColr}
                    />
                  </div>
                ))
              ) : (
                <h4>Not Property Yet!</h4>
              )}
            </div>
          </div>
        </div>
        {homePage && (
          <div
            className="row mt-5 mb-3"
            style={{
              display: stlr,
            }}
          >
            <div className="col-3 mx-auto d-flex justify-content-center gap-5x">
              <button
                className="btn btn-outline-light line-img prev"
                type="button"
                data-bs-target="#carouselExample"
                data-bs-slide="prev"
                onClick={prevSlide}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "0.8rem 1.5rem",
                }}
              >
                <img src="./arrow_left_svg.svg" alt="" />
                {/* <FaLongArrowAltLeft /> */}
              </button>
              <button
                className="btn btn-outline-light line-img next"
                type="button"
                data-bs-target="#carouselExample"
                data-bs-slide="next"
                onClick={nextSlide}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "0.8rem 1.5rem",
                }}
              >
                <img src="./arrow_right_svg.svg" alt="" />
                {/* <FaLongArrowAltRight /> */}
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CommonSlide;
