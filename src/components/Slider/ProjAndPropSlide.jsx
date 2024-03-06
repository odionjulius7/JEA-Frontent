import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import SwiperCore, { Navigation, Autoplay } from "swiper/core";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import Card from "react-bootstrap/Card";

SwiperCore.use([Navigation, Autoplay]);

const ProjAndPropSlide = ({ homePage, propertyDetail }) => {
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
      spaceBetween={isMobile ? 3 : 5}
      slidesPerView={isMobile ? 3 : 5}
      navigation
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      style={{ width: "95%" }}
    >
      {propertyDetail?.images?.map((image, i) => {
        return (
          <SwiperSlide key={i}>
            <Card
              className="card_img_selc"
              style={{ width: homePage ? "24rem" : "266px", height: "178px" }}
            >
              <Card.Img
                variant="top"
                src={image}
                style={{ width: "100%", height: "100%" }}
              />
            </Card>
          </SwiperSlide>
        );
      })}

      {/* Add more slides as needed */}
    </Swiper>
  );
};

export default ProjAndPropSlide;
