import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import SwiperCore, { Navigation, Autoplay } from "swiper/core";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import Card from "react-bootstrap/Card";

SwiperCore.use([Navigation, Autoplay]);

const HomeBlogSlide = ({ homePage }) => {
  return (
    <Swiper
      spaceBetween={homePage ? 10 : 1}
      slidesPerView={homePage ? 3 : 5}
      navigation
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      // onSlideChange={() => console.log("slide change")}
      // onSwiper={(swiper) => console.log(swiper)}
    >
      {[1, 2, 3, 4, 5, 6, 7].map((slide, i) => {
        return (
          <SwiperSlide key={i}>
            <Card style={{ width: homePage ? "26rem" : "17rem" }}>
              <Card.Img variant="top" src="./first-slide-img.png" />
              {homePage && (
                <Card.Body
                  style={{
                    backgroundColor: "#f9f9f9",
                  }}
                >
                  <div className="py-1">
                    <span>October 31, 2023</span>
                  </div>
                  <h6 className="fs-5">
                    <b>How urban greening projects affect sustainable cities</b>
                  </h6>
                  <Card.Text className="fs-6 py-1">
                    Learn how real estate technology can drive value in
                    commercial real estate by enhancing...
                  </Card.Text>
                </Card.Body>
              )}
            </Card>
          </SwiperSlide>
        );
      })}

      {/* Add more slides as needed */}
    </Swiper>
  );
};

export default HomeBlogSlide;
