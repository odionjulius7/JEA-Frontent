import React from "react";
import Cards from "../components/Cards/Cards";

import { FaLongArrowAltLeft } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";

const CommonSlide = ({ px, colr, gbColr, stlr }) => {
  return (
    <div
      className="row rower_wrap"
      style={{
        marginLeft: px,
        // overflowX: "hidden",
      }}
    >
      <div className="col-12">
        {/* <div
          className="ms-auto d-flex gap-5x "
          style={
            {
              // overflowX: "scroll",
              // maxWidthidth: "100vw",
            }
          }
        > */}
        <div className="row my-5 gap-3x">
          <div className="col-md-3 col-sm-10 ms-auto">
            <Cards text={"01"} colr={colr} gbColr={gbColr} />
          </div>
          <div className="col-md-3 col-sm-10 ms-auto">
            <Cards text={"01"} colr={colr} gbColr={gbColr} />
          </div>
          <div className="col-md-3 col-sm-10 ms-auto">
            <Cards text={"01"} colr={colr} gbColr={gbColr} />
          </div>
          <div className="col-md-3 col-sm-10 ms-auto">
            <Cards text={"01"} colr={colr} gbColr={gbColr} />
          </div>
        </div>
        {/* </div> */}
      </div>
      <div
        className="row"
        style={{
          display: stlr,
        }}
      >
        <div className="col-3 mx-auto d-flex justify-content-center gap-5x">
          <button
            className="btn btn-outline-light line-img "
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <FaLongArrowAltLeft />
          </button>
          <button
            className="btn btn-outline-light line-img"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <FaLongArrowAltRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CommonSlide;
