import "./Hero.css";
import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import Header from "../Header/Header";
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
                <img src="./The-sixtus.png" alt="img" className="img-fluid" />
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
              <div className="col-4 d-flex flex-column justify-content-around">
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
                <div className="row py-3 px-5 align-items-center text-center">
                  <div className="col">
                    <button
                      className="btn btn-outline-light line-img "
                      type="button"
                      data-bs-target="#carouselExample"
                      data-bs-slide="prev"
                    >
                      <img src="./Line-1.png" alt="line-img" />
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
                      <img src="./Line-2.png" alt="line-img" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="paddings innerWidth flexCenter hero-container">
        
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <div className="orange-circle" />
            <motion.h1
              initial={{ y: "2rem", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 2,
                type: "ease-in",
              }}
            >
              Discover <br />
              Most Suitable
              <br /> Property
            </motion.h1>
          </div>
          <div className="flexColStart secondaryText flexhero-des">
            <span>Find a variety of properties that suit you very easilty</span>
            <span>Forget all difficulties in finding a residence for you</span>
          </div>

          <div className="flexCenter search-bar">
            <HiLocationMarker color="var(--blue)" size={25} />
            <input type="text" />
            <button className="button">Search</button>
          </div>

          <div className="flexCenter stats">
            <div className="flexColCenter stat">
              <span>
                <CountUp start={8800} end={9000} duration={4} /> <span>+</span>
              </span>
              <span className="secondaryText">Premium Product</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp start={1950} end={2000} duration={4} /> <span>+</span>
              </span>
              <span className="secondaryText">Happy Customer</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp end={28} /> <span>+</span>
              </span>
              <span className="secondaryText">Awards Winning</span>
            </div>
          </div>
        </div>

        <div className="flexCenter hero-right">
          <motion.div
            initial={{ x: "7rem", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 2,
              type: "ease-in",
            }}
            className="image-container"
          >
            <img src="./hero-image.png" alt="houses" />
          </motion.div>
        </div>
      </div> */}
        </section>
      </div>
    </div>
  );
};

export default Hero;
