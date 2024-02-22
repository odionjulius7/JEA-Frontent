import React, { useEffect, useState } from "react";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";

import "./LocationSlide.css";

const LocationSlider = ({ homePage }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 640);
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
    // <Swiper
    //   spaceBetween={11}
    //   slidesPerView={isMobile ? 2 : 5}
    //   navigation
    //   autoplay={{ delay: 4000, disableOnInteraction: false }}
    //   onSlideChange={() => console.log("slide change")}
    //   onSwiper={(swiper) => console.log(swiper)}
    // >
    //   {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((Item, i) => {
    //     return (
    //       <SwiperSlide key={i} className="mx-2">
    //         <div className="location_wrap">
    //           <img src="./location-img.png" alt="" className="w-100" />
    //           <div className="location_rotate">
    //             <span>VICTORIA ISLAND</span>
    //           </div>
    //         </div>
    //       </SwiperSlide>
    //     );
    //   })}
    // </Swiper>
    //
    <>
      <div className="row location_slide_wrap mt-5">
        <div className="col-12">
          <div className="swiper">
            <div
              className="swiper-slides"
              style={{ transform: `translateX(${transformPercentage}%)` }}
            >
              {slides.map((slide, index) => (
                <div key={index} className="slide">
                  <div className="location_wrap">
                    <img src="./location-img.png" alt="" className="w-100" />
                    <div className="location_rotate">
                      <span>VICTORIA ISLAND</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="row justify-content-center my-2 mt-5">
            <div className="col-3 d-flex justify-content-center gap-5x mt-4">
              <button
                className="btn btn-outline-dark"
                style={{
                  border: "1px solid #000000",
                  // padding: "0.3rem 1.3rem",
                  borderRadius: "2rem",

                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "0.8rem 1.5rem",
                }}
                onClick={prevSlide}
              >
                <img src="./arrow_left_svg_dk.svg" alt="line-img" />
                {/* <FaLongArrowAltLeft /> */}
              </button>
              <button
                onClick={nextSlide}
                className="btn btn-outline-dark "
                style={{
                  border: "1px solid #000000",
                  // padding: "0.3rem 1.3rem",
                  borderRadius: "2rem",

                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "0.8rem 1.5rem",
                }}
              >
                <img src="./arrow_right_svg_db.svg" alt="line-img" />
                {/* <FaLongArrowAltRight /> */}
              </button>
            </div>
          </div>
          <div className="row  mb-4 mt-5">
            <div
              className="col-md-3 col-sm-3 d-flex justify-content-center  mx-auto search-home"
              style={{
                padding: "0 2rem",
              }}
            >
              <Link
                to="/properties"
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
                    padding: isMobile ? "10px 0" : "",
                  }}
                >
                  VIEW ALL PROPERTIES
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LocationSlider;
