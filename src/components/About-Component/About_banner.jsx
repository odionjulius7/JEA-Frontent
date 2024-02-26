import React, { useEffect, useState } from "react";

import Buttons from "../Buttons";

const AboutBanner = () => {
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
    <div className="container-fluid about_banner p-5 ">
      <div className="row mt-5">
        <div
          className="justify-content-between"
          style={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            gap: isMobile ? "2rem" : "",
          }}
        >
          <h2 style={{ textAlign: isMobile ? "center" : "" }}>
            Find Your Dream Home
          </h2>
          <Buttons
            text={"LET’S CONNECT"}
            style={{
              backgroundColor: "#FBC344",
              border: "1px solid #FBC344",
              color: "#000",
              width: isMobile ? "250px" : "400px",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default AboutBanner;

// new_prop_about.png
