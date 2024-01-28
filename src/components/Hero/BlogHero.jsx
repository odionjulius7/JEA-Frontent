import { useState } from "react";
import Header from "../Header/Header";

import "./Hero.css";

const BlogHero = () => {
  return (
    <div className="App--props-selected text-white">
      <div>
        <div className="white-gradient" />
        <Header />
        <div className="container-fluid px-5 py-5 ">
          <div className="row py-5">
            <h2 className="fw-bold" style={{ textAlign: "center" }}>
              Our Blog
            </h2>
            <span
              className="fs-6 "
              style={{ textAlign: "center", padding: "10px " }}
            >
              Our Real Estate News Blog provides a comprehensive view of our{" "}
              <br />
              industry. Discover the multifaceted insights that shape the world
              of real estate
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogHero;
