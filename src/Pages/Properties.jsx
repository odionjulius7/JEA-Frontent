import React, { useState } from "react";
import Footer from "../components/Footer/Footer";
import PropertyHero from "../components/Hero/PropertyHero";
import FeaturedProps from "../components/FeaturedProps/FeaturedProps";
import AllProperties from "../components/AllProperties/AllProperties";
import CantFind from "../components/CantFind/CantFind";

const Properties = () => {
  const [allProps, setAllProps] = useState(true);

  const url_str = "property-selected";
  return (
    <>
      <PropertyHero />
      <FeaturedProps />
      <AllProperties allProps={allProps} url_str={url_str} />
      <CantFind />
      <Footer />
    </>
  );
};

export default Properties;
