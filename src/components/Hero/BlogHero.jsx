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
          <div className="row py-5 blog_text">
            <h1 className="fw-bold" style={{ textAlign: "center" }}>
              Our Blog
            </h1>
            <span
              className="span_12"
              style={{ textAlign: "center", padding: "10px " }}
            >
              Our Real Estate News Blog provides a comprehensive view of our{" "}
              <br className="brk_none" />
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
