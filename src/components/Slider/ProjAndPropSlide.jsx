import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import SwiperCore, { Navigation, Autoplay } from "swiper/core";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import Card from "react-bootstrap/Card";

SwiperCore.use([Navigation, Autoplay]);

const ProjAndPropSlide = ({ homePage }) => {
  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={5}
      navigation
      autoplay={{ delay: 3000, disableOnInteraction: false }}
    >
      {[1, 2, 3, 4, 5, 6, 7, 8].map((slide, i) => {
        return (
          <SwiperSlide key={i}>
            <Card style={{ width: homePage ? "26rem" : "17rem" }}>
              <Card.Img variant="top" src="./selected-pro.png" />
            </Card>
          </SwiperSlide>
        );
      })}

      {/* Add more slides as needed */}
    </Swiper>
  );
};

export default ProjAndPropSlide;
