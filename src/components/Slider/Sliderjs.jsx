import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import SwiperCore, { Navigation, Autoplay } from "swiper/core";
import "swiper/swiper.min.css";
import "swiper/swiper-bundle.min.css";

//
import "swiper/css/navigation";

import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

SwiperCore.use([Navigation, Autoplay]);

const MySwiper = ({ blogPage, url_str, homeBg }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 640);

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
    <Swiper
      className="swiper-container"
      spaceBetween={25}
      slidesPerView={isMobile ? 1 : 3}
      navigation
      autoplay={{ delay: 4000, disableOnInteraction: false }}
      // onSlideChange={() => console.log("slide change")}
      // onSwiper={(swiper) => console.log(swiper)}
    >
      {[1, 2, 3, 4, 5].map(() => {
        return (
          <SwiperSlide>
            <Link to={`/${url_str}`}>
              <Card
                className="swipe_card_with"
                // style={{ width: isMobile ? "24rem" : "" }}
              >
                <Card.Img variant="top" src="./first-slide-img.png" />
                <Card.Body
                  style={{
                    backgroundColor: "#f9f9f9",
                    padding: isMobile ? "1rem 0.9rem" : "1rem 2rem",
                  }}
                  className="card_body py-3"
                >
                  <Card.Title>
                    <b
                      style={{
                        display: !blogPage ? "inline" : "none",
                        fontSize: isMobile ? "16px" : "21px",
                        fontWeight: "700",
                      }}
                    >
                      4 Bedroom Terrace
                    </b>
                    <span
                      style={{
                        display: blogPage ? "inline" : "none",
                        fontSize: "12px",
                        fontWeight: "400",
                      }}
                    >
                      October 31, 2023
                    </span>
                  </Card.Title>
                  <div className="py-3 d-flex gap-2">
                    {!blogPage && <img src="./location_icon.svg" alt="" />}
                    <span
                      style={{
                        display: !blogPage ? "inline" : "none",
                        fontSize: isMobile ? "13px" : "15px",
                      }}
                    >
                      Osapa London |{" "}
                      <b
                        style={{
                          fontWeight: "700",
                        }}
                      >
                        ₦140,000,000
                      </b>{" "}
                    </span>
                    <span
                      style={{
                        display: blogPage ? "inline" : "none",
                        fontSize: "20px",
                        fontWeight: "700",
                      }}
                    >
                      <b>
                        How urban greening projects affect sustainable cities
                      </b>{" "}
                    </span>
                  </div>

                  <div
                    className={`my-2`}
                    style={{
                      borderBottom: blogPage ? "2px solid #D7D7D7" : "",
                    }}
                  ></div>

                  <Card.Text
                    className=" py-1"
                    style={{
                      fontSize: homeBg ? "13px" : "15px",
                      fontWeight: "400",
                    }}
                  >
                    <b
                      style={{
                        fontSize: "700",
                      }}
                    >
                      Features:
                    </b>{" "}
                    Nicely finished, Fully fitted Kitchen, All rooms ensuite,
                    Serene Neighbourhood , Secured Estate, BQ ...
                  </Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default MySwiper;
