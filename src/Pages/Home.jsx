import React, { useState } from "react";

import ApartmentAvailable from "../components/ApartmentAvailable/ApartmentAvailable";
import FindProperties from "../components/FindProperties/FindProperties";
import Footer from "../components/Footer/Footer";
import GetInTouch from "../components/GetInTouch/GetInTouch";
import Hero from "../components/Hero/Hero";
import LocationProps from "../components/LocationProps/LocationProps";
import HomeBlog from "../components/WeeklyProps/HomeBlog";
import WeeklyProps from "../components/WeeklyProps/WeeklyProps";

const Home = () => {
  const [homePage, setHomePage] = useState(true);
  const [blogPage, setBlogPage] = useState(true);
  const [homeBg, setHomeBg] = useState(true);

  const url_str = "property-selected";
  const url_strblog = "selected-blog";
  return (
    <>
      <Hero />
      <div
        className="container-fluid px-5x text-white home-prop"
        style={{
          paddingTop: "80px",
          paddingBottom: "100px",
        }}
      >
        <div className="row mb-5">
          <div className="col d-flex justify-content-center">
            <h2 className="text-center">Find Your Next Property</h2>
          </div>
        </div>
        <FindProperties />
      </div>
      <WeeklyProps homePage={homePage} url_str={url_str} />
      <ApartmentAvailable />
      <LocationProps />
      <WeeklyProps blogPage={blogPage} url_str={url_strblog} homeBg={homeBg} />
      {/* <HomeBlog homePage={homePage} /> */}
      <GetInTouch homePage={homePage} />
      <Footer />
    </>
  );
};

export default Home;
