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
    <>
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
      <div className="container-fluid  bg-boss-1 ">
        <div className="row">
          <div className="col-md-5 py-5x px-5x">
            <h2 className="my-5x">Meet The Founder</h2>
            <p className="font_15">
              Keen, attentive, and versatile are clear adjectives that describe
              Mr. Chidi Etoniru. A real estate aficionado with over two decades
              of experience in facility management, real estate brokerage,
              valuation and property development. Mr. Etoniru began his career
              as head of a facility management unit in Prime Atlantic Cegelec
              (PACE), an oil and gas company in Victoria Island, Lagos and from
              there transitioned to Real Estate in 2012. Having developed an eye
              for quality service and customer satisfaction through his career.
              He launched Joe Etoniru and Associates in Lagos State to carve out
              a better and more convenient path for people to find good homes.
              After this, Mr. Etoniru started developing contemporary properties
              to set a standard for luxury home construction in Lagos. He also
              branched into other aspects of the value chain including moving,
              renting, pest control and home/facility cleaning. A graduate of
              University of Lagos where he got a bachelors in Estate Management.
              Mr. Etoniru sets himself apart by constant self improvement, smart
              investments, and a constant need to stay in the know as the Real
              Estate market evolves. He is a chartered Estate Surveyor and
              Valuer with the Nigerian Institution of Estate Surveyors and
              Valuers (NIESV). He is also a member of the Certified Institute of
              Auctioneers
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutBanner;

// new_prop_about.png
