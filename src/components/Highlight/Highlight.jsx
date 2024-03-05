import React, { useEffect, useState } from "react";

import "./Highlight.css";
import Inputs from "../Inputs";

const Highlight = () => {
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
    <div className="container-fluid Highlight">
      <div className="row py-4 mb-5 flex-row justify-content-between align-items-center">
        <div className="col-md-3 col-sm-6">
          <h2
            className=""
            style={{
              marginBottom: isMobile ? "2rem" : "",
            }}
          >
            Highlights
          </h2>
        </div>
        <div className="col-md-5 col-sm-6">
          <Inputs text={"Search for an article"} />
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-md-6 col-sm-12 pt-5">
          <p
            className="mt-2"
            style={{
              fontSize: "12px",
              fontWeight: "400",
            }}
          >
            October 31, 2023
          </p>
          <h5
            className="mt-2"
            style={{
              fontSize: isMobile ? "18px" : "24px",
              fontWeight: "700",
            }}
          >
            Futuristic Floating Cities: The Next Frontier in Luxury Real Estate
          </h5>
          <p
            className="mt-2 span_12"
            style={{
              fontSize: "15px",
              fontWeight: "400",
            }}
          >
            In a groundbreaking and imaginative leap forward in real estate, the
            concept of "Floating Cities" is taking the industry by storm.
            Imagine a world where entire commu ...
          </p>
          <button
            className="btn btn-outline-light mt-5 px-5"
            style={{
              fontSize: "15px",
              fontWeight: "500",
              padding: "10px 20px",
            }}
          >
            READ MORE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Highlight;
