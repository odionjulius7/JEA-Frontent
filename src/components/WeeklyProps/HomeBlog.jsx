import React from "react";

import "./WeeklyProps.css";
import HomeBlogSlide from "../Slider/HomeBlogSlide";

const HomeBlog = () => {
  return (
    <div className="container-fluid home-blog">
      <div
        className="row mb-4 ml-2"
        style={{
          fontWeight: 800,
          fontSize: "50px",
        }}
      >
        <h2>From Our Blog</h2>
      </div>
      <div className="row">
        <div className="row ">
          <div className="col d-flex  text-align-center justify-content-center">
            <HomeBlogSlide />
          </div>
        </div>
        <div className="row my-5">
          <div className="col-3 mx-auto search-home ">
            <button
              id="search-btn"
              className="button fit-content"
              style={{
                background: "#FBC344",
                width: "100%",
                color: "#000000",
                fontWeight: "500",
              }}
            >
              VIEW ALL Blog Posts
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBlog;
