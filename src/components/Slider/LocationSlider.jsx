import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// import SwiperCore, { Navigation, Autoplay } from "swiper/core";

import LocatioCards from "../Cards/LocatioCards";

// import "swiper/swiper.min.css";
// import "swiper/swiper-bundle.min.css";

// SwiperCore.use([Navigation, Autoplay]);

const LocationSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={5}
      navigation
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide className="mx-3">
        <LocatioCards />
      </SwiperSlide>
      <SwiperSlide className="mx-3">
        <LocatioCards />
      </SwiperSlide>
      <SwiperSlide className="mx-3">
        <LocatioCards />
      </SwiperSlide>
      <SwiperSlide className="mx-3">
        <LocatioCards />
      </SwiperSlide>
      <SwiperSlide className="mx-3">
        <LocatioCards />
      </SwiperSlide>
      <SwiperSlide className="mx-3">
        <LocatioCards />
      </SwiperSlide>
      <SwiperSlide className="mx-3">
        <LocatioCards />
      </SwiperSlide>
      {/* Add more slides as needed */}
    </Swiper>
  );
};

export default LocationSlider;
