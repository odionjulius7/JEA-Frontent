import "./Hero.css";
import Header from "../Header/Header";
import { useState } from "react";
import ProjAndPropSlide from "../Slider/ProjAndPropSlide";
import { Link } from "react-router-dom";

const SelectedProjHero = ({ projectDetail }) => {
  const [homePage, setHomePage] = useState(false);

  return (
    <div className="App--selected-projs text-white">
      <div>
        <div className="white-gradient" />
        <Header />
        <div className="container-fluid py-5">
          <div
            className="row py-5 px-4 sel_project_wrap"
            style={{
              marginBottom: "6.5rem",
            }}
          >
            <div className="col-md-8 col-sm-12 d-flex  justify-content-between align-items-center gap-3 center-display mb-4">
              <Link to="/projects" style={{ marginLeft: "20px" }}>
                <button
                  className="btn btn-outline-light line-img brk_none "
                  type="button"
                  data-bs-target="#carouselExample"
                  data-bs-slide="prev"
                >
                  <img src="/Line-1.png" alt="line-img" />
                </button>
              </Link>

              <h1 className="h1-one">Our Projects</h1>
            </div>
          </div>
          <div
            className="row pt-5 sel_project_wrap-2"
            style={{
              paddingLeft: "30px",
              marginRight: "-25%",
              // marginTop: "3rem",
            }}
          >
            <div className="col-md-10 col-sm-12 d-flex  text-align-center justify-content-center">
              <ProjAndPropSlide propertyDetail={projectDetail} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SelectedProjHero;
