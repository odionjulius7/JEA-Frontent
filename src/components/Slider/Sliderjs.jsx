import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import SwiperCore, { Navigation, Autoplay } from "swiper/core";
import "swiper/swiper.min.css";
import "swiper/swiper-bundle.min.css";

//
import "swiper/css/navigation";

import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { FaSolarPanel } from "react-icons/fa";

SwiperCore.use([Navigation, Autoplay]);

const MySwiper = ({ blogPage, url_str, homeBg, propertyOfTheWeek }) => {
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
      spaceBetween={30}
      slidesPerView={isMobile ? 1 : 3}
      navigation
      autoplay={{ delay: 4000, disableOnInteraction: false }}
      style={{
        minWidth: !isMobile ? "900px" : "",
      }}
    >
      {propertyOfTheWeek.map((property, index) => {
        return (
          <SwiperSlide key={index}>
            <Link to={`/${url_str}/${property.slug}`}>
              <Card
                className="swipe_card_with"
                style={{ width: isMobile ? "20rem" : "414px" }}
              >
                {/* <Card.Img
                  variant="top"
                  src={propertyOfTheWeek?.images[0] || "./first-slide-img.png"}
                /> */}
                {property?.images && property.images.length > 0 && (
                  <Card.Img
                    variant="top"
                    src={property.images[0]}
                    style={{
                      width: "inherit",
                      height: "100%",
                    }}
                  />
                )}
                <Card.Body
                  style={{
                    backgroundColor: "#f9f9f9",
                    padding: isMobile ? "1rem 0.9rem" : "1rem 1rem",
                  }}
                  className="card_body py-3"
                >
                  <Card.Title>
                    <b
                      style={{
                        fontSize: isMobile ? "16px" : "21px",
                        fontWeight: "700",
                      }}
                    >
                      {property?.title}
                    </b>
                  </Card.Title>
                  <div className="py-3 d-flex gap-2">
                    <img src="./location_icon.svg" alt="" />
                    <span
                      style={{
                        fontSize: isMobile ? "13px" : "15px",
                        color: "#121212",
                      }}
                    >
                      {property?.location} |{" "}
                      <b
                        style={{
                          fontWeight: "700",
                          color: "#121212",
                        }}
                      >
                        {new Intl.NumberFormat("en-NG", {
                          style: "currency",
                          currency: "NGN",
                        }).format(property?.price)}
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
                      fontSize: "13px",
                      fontWeight: "400",
                      color: "#121212",
                    }}
                  >
                    <b
                      style={{
                        fontSize: "700",
                        color: "#121212",
                      }}
                    >
                      Features:
                    </b>{" "}
                    {/* {property?.description.slice(0, 80)} ... */}
                    {property?.description?.slice(0, 72) ?? ""} ...
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
