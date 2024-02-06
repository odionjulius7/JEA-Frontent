import Header from "../Header/Header";

import { FaLongArrowAltLeft } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";

import "./Hero.css";
const Hero = () => {
  return (
    <div className="App text-white">
      <div>
        <div className="white-gradient" />
        <Header />
        <section className="hero-wrapper">
          <div className="container-fluid">
            <div className="row py-5">
              <div className="col-2 mx-auto">
                <img src="./sixtus-svg.svg" alt="img" className="img-fluid" />
              </div>
            </div>
          </div>
          <div
            className="container-fluid py-3 hero-img-down"
            // style={{
            //   backgroundImage: `url("./home-hero-img.png")`,
            //   backgroundSize: "cover",
            //   backgroundRepeat: "no-repeat",
            // }}
          >
            <div className="row px-5 justify-content-between">
              <div className="col-5 d-flex flex-column justify-content-around">
                <p className="text-white">
                  The Sixtus contains 4 Bedroom Terrace houses and two fully
                  detached homes which brings it to six units. This development
                  is a sleek contemporary work of art, designed specially for
                  the ones who have chosen a luxurious life.
                </p>
                <div className="d-flex gap-4 hero-btn">
                  <button className="btn btn-outline-light">
                    VIEW THIS PROJECT
                  </button>
                  <button className="btn btn-outline-light">
                    VIEW THIS PROJECT
                  </button>
                </div>
              </div>
              <div className="col-6">
                {/* <img src="./hero-img-1.png" alt="hero-img" className="pb-4" /> */}
                <div id="carouselExample" className="carousel slide">
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img
                        src="./hero-img-1.png"
                        className="d-block w-100"
                        alt="..."
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="./hero-img-1.png"
                        className="d-block w-100"
                        alt="..."
                      />
                    </div>
                  </div>
                </div>
                <div className="row py-4 px-5 align-items-center text-center">
                  <div className="col">
                    <button
                      className="btn btn-outline-light line-img "
                      type="button"
                      data-bs-target="#carouselExample"
                      data-bs-slide="prev"
                    >
                      {/* <img src="./Line-1.png" alt="line-img" /> */}
                      <FaLongArrowAltLeft />
                    </button>
                  </div>
                  <div className="col">01 - 03</div>
                  <div className="col">
                    <button
                      className="btn btn-outline-light line-img"
                      type="button"
                      data-bs-target="#carouselExample"
                      data-bs-slide="next"
                    >
                      <FaLongArrowAltRight />
                      {/* <img src="./Line-2.png" alt="line-img" /> */}
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
