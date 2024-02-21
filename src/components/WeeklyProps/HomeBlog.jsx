import React, { useEffect, useState } from "react";

import "./WeeklyProps.css";
import HomeBlogSlide from "../Slider/HomeBlogSlide";
import { Link } from "react-router-dom";
import MySwiper from "../Slider/Sliderjs";

const HomeBlog = ({ homeBg, blogPage, url_strblog }) => {
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
    <div className="container-fluid home-blog">
      <div className="row">
        <h2 className="mb-5 mt-2">From Our Blog</h2>
        <div className="row ">
          {/* <div className="col d-flex  text-align-center justify-content-center">
            <HomeBlogSlide />
          </div> */}
          <div className="col d-flex text-align-center justify-content-center">
            <MySwiper
              homeBg={homeBg}
              blogPage={blogPage}
              url_str={url_strblog}
            />
          </div>
        </div>

        <div className="row mb-4 mt-5">
          <div className="col-md-3 col-sm-3 d-flex justify-content-center  mx-auto search-home ">
            <Link
              to="/blogs"
              style={{
                width: "100%",
              }}
            >
              <button
                id="search-btn"
                className="button fit-content mt-3"
                style={{
                  background: "#FBC344",
                  width: "100%",
                  color: "#000000",
                  fontWeight: "500",
                  fontSize: "15px",
                  borderRadius: "9px",
                  padding: isMobile ? "10px 0" : "",
                }}
              >
                VIEW ALL BLOG POSTS
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBlog;
