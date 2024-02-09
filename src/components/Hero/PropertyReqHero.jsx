import React from "react";

import Header from "../Header/Header";
import FindProperties from "../FindProperties/FindProperties";

const PropertyReqHero = ({ text }) => {
  return (
    <div className="App--prop-reqed text-white">
      <div>
        <div className="white-gradient" />
        <Header />
        <div className="row py-5">
          <div className="col-4 mx-auto d-flex flex-column justify-content-center align-items-center gap-3 ">
            <h1 className="h1-one my-5">{text}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyReqHero;
