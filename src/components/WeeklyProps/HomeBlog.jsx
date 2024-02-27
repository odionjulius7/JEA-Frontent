import React, { useEffect, useRef, useState } from "react";

import "./WeeklyProps.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import MySwiper from "../Slider/Sliderjs";
import Slide2 from "../Slider/Slide2";

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

  // frame motion
  const headingRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (headingRef.current) {
        const headingTop = headingRef.current.offsetTop;
        const scrollPosition = window.scrollY + window.innerHeight;

        if (scrollPosition > headingTop) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="container-fluid home-blog">
      <div className="row">
        <motion.h2
          initial={{ opacity: 0, x: 220 }}
          animate={isVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-5 mt-2"
          ref={headingRef}
        >
          From Our Blog
        </motion.h2>
        <div className="row ">
          {/* <div className="col d-flex  text-align-center justify-content-center">
            <HomeBlogSlide />
          </div> */}
          <div
            className="col d-flex text-align-center justify-content-center"
            style={{
              padding: isMobile ? "0px" : "",
            }}
          >
            <Slide2 homeBg={homeBg} blogPage={blogPage} url_str={url_strblog} />
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
