import React from "react";
import Cards from "../components/Cards/Cards";

import { FaLongArrowAltLeft } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";

const CommonSlide = ({ px, colr, gbColr, stlr }) => {
  return (
    <div
      className="row text-align-right "
      style={{
        marginLeft: px,
        // overflowX: "hidden",
      }}
    >
      <div className="col-12 justify-content-right my-5  d-flex">
        <div className="ms-auto d-flex gap-5 ">
          <Cards text={"01"} colr={colr} gbColr={gbColr} />
          <Cards text={"02"} colr={colr} gbColr={gbColr} />
          <Cards text={"03"} colr={colr} gbColr={gbColr} />
          <Cards text={"04"} colr={colr} gbColr={gbColr} />
        </div>
      </div>
      <div
        className="row"
        style={{
          display: stlr,
        }}
      >
        <div className="col-3 mx-auto d-flex justify-content-center gap-5">
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
