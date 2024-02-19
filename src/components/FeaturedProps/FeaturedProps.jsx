import React from "react";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";

import "./FeaturedProps.css";
import CommonSlide from "../CommonSlide";

const FeaturedProps = () => {
  return (
    <div className="container-fluid FeaturedProps">
      <div className="row">
        <div className="col-12 d-flex justify-content-between align-items-center weekly-props-header">
          <h2 className="mb-0">Featured Properties</h2>
          <div className="d-flex gap-5x display-none">
            <button
              className="btn btn-outline-dark"
              style={{
                border: "1px solid #000000",
                padding: "0.3rem 1.4rem",
                borderRadius: "2rem",
              }}
            >
              {/* <img src="./Line-1.png" alt="line-img" /> */}
              <FaLongArrowAltLeft />
            </button>
            <button
              className="btn btn-outline-dark "
              style={{
                border: "1px solid #000000",
                padding: "0.3rem 1.4rem",
                borderRadius: "2rem",
              }}
            >
              {/* <img src="./Line-2.png" alt="line-img" /> */}
              <FaLongArrowAltRight />
            </button>
          </div>
        </div>
      </div>
      <CommonSlide
        px={"5px"}
        colr={"#000000"}
        gbColr={"#ffffff"}
        stlr={"none"}
      />
      {/* </div> */}
    </div>
  );
};

export default FeaturedProps;
