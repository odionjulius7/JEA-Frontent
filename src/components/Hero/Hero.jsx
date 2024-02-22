import { useEffect, useState } from "react";
import Header from "../Header/Header";

import { FaLongArrowAltLeft } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";

import "./Hero.css";
const Hero = () => {
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
    <div className="App text-white">
      <div>
        <div className="white-gradient" />
        <Header />
        <section className="hero-wrapper">
          <div className="container-fluid">
            <div className="row py-5x">
              <div className="col-md-2 col-sm-3 mx-auto d-flex justify-content-center home_img_wrap">
                <div
                  className="my-3"
                  style={{
                    width: "198px",
                    height: "184px",
                  }}
                >
                  <img src="./sixtus-svg.svg" alt="img" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid py-4 hero-img-down">
            <div className="row px-5x justify-content-between align-items-center">
              <div
                className="col-md-5 col-sm-12 d-flex flex-column dflex_2nd"
                style={{ marginBottom: isMobile ? "2rem" : "6rem" }}
              >
                <p className="text-white italic_p ">
                  The Sixtus contains 4 Bedroom Terrace houses and two fully
                  detached homes which brings it to six units. This development
                  is a sleek contemporary work of art, designed specially for
                  the ones who have chosen a luxurious life.
                </p>
                <div
                  className="d-flex gap-4 hero-btn"
                  style={{ marginTop: isMobile ? "3rem" : "8rem" }}
                >
                  <button className="btn btn-outline-light">
                    VIEW THIS PROJECT
                  </button>
                  <button className="btn btn-outline-light">
                    VIEW ALL PROJECTS
                  </button>
                </div>
              </div>
              <div className="col-md-6 col-sm-12 dflex_1st">
                {/* <img src="./hero-img-1.png" alt="hero-img" className="pb-4" /> */}
                <div id="carouselExample" className="carousel slide">
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img
                        src="./hero-img-1.png"
                        className="d-block w-100x"
                        alt="..."
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="./hero-img-1.png"
                        className="d-block w-100x"
                        alt="..."
                      />
                    </div>
                  </div>
                </div>
                <div className="row py-4 px-5x align-items-center text-center d-md-flex ">
                  <div className="row less460 justify-content-center">
                    <div
                      className="col d-flex justify-content-center align-items-center gap-2 mt-1 mb-3"
                      style={{
                        marginLeft: "0.2rem",
                      }}
                    >
                      <span>01</span>
                      <img src="./div_line.svg" alt="" />
                      <span>03</span>
                    </div>
                  </div>
                  <div className="col">
                    <button
                      className="btn btn-outline-light line-img "
                      type="button"
                      data-bs-target="#carouselExample"
                      data-bs-slide="prev"
                    >
                      <img src="./arrow_left_svg.svg" alt="line-img" />
                      {/* <FaLongArrowAltLeft /> */}
                    </button>
                  </div>
                  <div className="col d-flex justify-content-center align-items-center gap-3 mt-2 div_btn">
                    <span>01</span>
                    <img src="./div_line.svg" alt="" />
                    <span>03</span>
                  </div>
                  <div className="col">
                    <button
                      className="btn btn-outline-light line-img"
                      type="button"
                      data-bs-target="#carouselExample"
                      data-bs-slide="next"
                    >
                      {/* <FaLongArrowAltRight /> */}
                      <img src="./arrow_right_svg.svg" alt="line-img" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Hero;
