import React from "react";
import Cards from "../components/Cards/Cards";

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
        <div className="col-3 mx-auto d-flex gap-5">
          <button
            className="btn btn-outline-light line-img "
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <img src="./Line-1.png" alt="line-img" />
          </button>
          <button
            className="btn btn-outline-light line-img"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <img src="./Line-2.png" alt="line-img" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CommonSlide;
