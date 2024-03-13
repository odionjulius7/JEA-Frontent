import { useEffect, useState } from "react";
import "./Hero.css";
import Header from "../Header/Header";
import ProjAndPropSlide from "../Slider/ProjAndPropSlide";
import { Link } from "react-router-dom";

const SelectedProjHero = ({ projectDetail }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 640);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  //
  const [homePage, setHomePage] = useState(false);

  return (
    <div className="App--selected-projs text-white">
      <div>
        <div className="white-gradient" />
        <Header />
        <div className="container-fluid py-5">
          <div
            className="row py-5x px-4 sel_project_wrap"
            style={{
              marginBottom: "6.5rem",
            }}
          >
            <div
              className=" brk_none "
              style={{
                marginLeft: "1.1rem",
                position: "absolute",
              }}
            >
              <Link to="/projects">
                <button
                  className="btn btn-outline-light line-img"
                  type="button"
                  data-bs-target="#carouselExample"
                  data-bs-slide="prev"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "11px 27px",
                    marginBottom: "1.19rem",
                    cursor: "pointer",
                  }}
                >
                  <img src="/Line-1.png" alt="line-img" />
                </button>
              </Link>
            </div>
            <div
              className="col-md-12 col-sm-12 d-flex  justify-content-center align-items-center"
              style={{
                marginBottom: "4rem",
              }}
            >
              <h1 className="h1-one">{projectDetail?.title}</h1>
            </div>
          </div>

          <div
            className="row pt-5 sel_project_wrap-2"
            style={{
              paddingLeft: !isMobile ? "30px" : "8px",
              marginRight: !isMobile ? "-23%" : "0px",
              // marginTop: "3rem",
            }}
          >
            <div className="col-md-10 col-sm-12 d-flex  text-align-center justify-content-center">
              <ProjAndPropSlide
                widthxs={!isMobile ? "98%" : "90%"}
                propertyDetail={projectDetail}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SelectedProjHero;
