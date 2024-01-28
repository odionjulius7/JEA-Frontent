import React from "react";

import "./Highlight.css";
import Inputs from "../Inputs";

const Highlight = () => {
  return (
    <div className="container-fluid Highlight">
      <div className="row py-4 mb-5 flex-row justify-content-between align-items-center">
        <div className="col-3 ">
          <h4 className="fw-bold">Highlights</h4>
        </div>
        <div className="col-5">
          <Inputs />
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-6 pt-5">
          <p className="fs-6 mt-2">October 31, 2023</p>
          <h4 className="fw-bold mt-2">
            Futuristic Floating Cities: The Next Frontier in Luxury Real Estate
          </h4>
          <p className="fs-6 mt-2">
            In a groundbreaking and imaginative leap forward in real estate, the
            concept of "Floating Cities" is taking the industry by storm.
            Imagine a world where entire commu ...
          </p>
          <button className="btn btn-outline-light mt-5 px-5">READ MORE</button>
        </div>
      </div>
    </div>
  );
};

export default Highlight;
