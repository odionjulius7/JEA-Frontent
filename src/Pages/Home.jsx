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

  const url_str = "property-selected";
  return (
    <>
      <Hero />
      <div className="container-fluid p-5 text-white home-prop">
        <FindProperties />
      </div>
      <WeeklyProps homePage={homePage} url_str={url_str} />
      <ApartmentAvailable />
      <LocationProps />
      <HomeBlog />
      <GetInTouch homePage={homePage} />
      <Footer />
    </>
  );
};

export default Home;
