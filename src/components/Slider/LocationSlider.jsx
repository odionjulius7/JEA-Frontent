import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// import SwiperCore, { Navigation, Autoplay } from "swiper/core";

import LocatioCards from "../Cards/LocatioCards";

// import "swiper/swiper.min.css";
// import "swiper/swiper-bundle.min.css";

// SwiperCore.use([Navigation, Autoplay]);

const LocationSlider = () => {
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

  // console.log(isMobile);

  return (
    <Swiper
      spaceBetween={11}
      slidesPerView={isMobile ? 3 : 5}
      navigation
      // autoplay={{ delay: 3000, disableOnInteraction: false }}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((Item, i) => {
        return (
          <SwiperSlide key={i} className="mx-3">
            <LocatioCards />
          </SwiperSlide>
        );
      })}
      {/* Add more slides as needed */}
    </Swiper>
  );
};

export default LocationSlider;
