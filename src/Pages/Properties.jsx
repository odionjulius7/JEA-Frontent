import React, { useEffect, useState } from "react";
import Footer from "../components/Footer/Footer";
import PropertyHero from "../components/Hero/PropertyHero";
import FeaturedProps from "../components/FeaturedProps/FeaturedProps";
import AllProperties from "../components/AllProperties/AllProperties";
import CantFind from "../components/CantFind/CantFind";
import FloatWhatsapp from "../components/FloatWhatsapp/FloatWhatsapp";

const Properties = () => {
  const [allProps, setAllProps] = useState(true);

  useEffect(() => {
    // Scroll to the top when the component is mounted
    window.scrollTo(0, 0);
  }, []);

  const url_str = "property-selected";
  return (
    <>
      <PropertyHero />
      <FeaturedProps />
      <AllProperties allProps={allProps} url_str={url_str} />
      <CantFind />
      <Footer />
      <FloatWhatsapp />
    </>
  );
};

export default Properties;
