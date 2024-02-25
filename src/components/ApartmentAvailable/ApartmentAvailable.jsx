import React, { useEffect, useState } from "react";
import "./ApartmentAvailable.css";
import CommonSlide from "../CommonSlide/CommonSlide";
// import Cards from "../Cards/Cards";

const ApartmentAvailable = ({ homePage }) => {
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

  return (
    <div className="container-fluid apartment-available">
      <h2
        className="card-title-1"
        style={{ marginLeft: !isMobile ? "1.1rem" : "" }}
      >
        Available Luxury Apartments <img src="./long.svg" alt="" />
      </h2>
      <CommonSlide
        px={"10px"}
        colr={"#ffffff"}
        gbColr={"#000000"}
        homePage={homePage}
      />
    </div>
  );
};

export default ApartmentAvailable;
