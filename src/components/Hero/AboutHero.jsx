import React from "react";

import Header from "../Header/Header";

const AboutHero = ({ text }) => {
  return (
    <div className="App--about text-white">
      <div>
        <div className="white-gradient" />
        <Header />
        <div className="row py-5 mx-0">
          <div className="col-md-4 col-sm-12 mx-auto d-flex flex-column justify-content-center align-items-center gap-3 ">
            <h1 className="h1-one my-5">{text}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
