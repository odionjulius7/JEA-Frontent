import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import SwiperCore, { Navigation, Autoplay } from "swiper/core";
import "swiper/swiper.min.css";
import "swiper/swiper-bundle.min.css";

import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

SwiperCore.use([Navigation, Autoplay]);

const MySwiper = ({ blogPage, url_str }) => {
  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={3}
      navigation
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {[1, 2, 3, 4, 5].map(() => {
        return (
          <SwiperSlide>
            <Link to={`/${url_str}`}>
              <Card style={{ width: "26rem" }}>
                <Card.Img variant="top" src="./first-slide-img.png" />
                <Card.Body
                  style={{
                    backgroundColor: "#f9f9f9",
                  }}
                >
                  <Card.Title>
                    <b
                      style={{
                        display: !blogPage ? "inline" : "none",
                      }}
                    >
                      4 Bedroom Terrace
                    </b>
                    <span
                      style={{
                        display: blogPage ? "inline" : "none",
                        fontSize: "15px",
                        fontWeight: "400",
                      }}
                    >
                      October 31, 2023
                    </span>
                  </Card.Title>
                  <div className="py-2">
                    <img src="" alt="" />
                    <span
                      style={{
                        display: !blogPage ? "inline" : "none",
                      }}
                    >
                      Osapa London | <b>₦140,000,000</b>{" "}
                    </span>
                    <span
                      style={{
                        display: blogPage ? "inline" : "none",
                      }}
                    >
                      <b>
                        How urban greening projects affect sustainable cities
                      </b>{" "}
                    </span>
                  </div>

                  <div
                    className={`my-3`}
                    style={{
                      borderBottom: blogPage ? "2px solid grey" : "",
                    }}
                  ></div>

                  <Card.Text className="fs-6 py-1">
                    <b>Features:</b> Nicely finished, Fully fitted Kitchen, All
                    rooms ensuite, Serene Neighbourhood , Secured Estate, BQ ...
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
