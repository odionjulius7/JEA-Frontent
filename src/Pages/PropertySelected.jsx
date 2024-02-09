import React, { useEffect, useState } from "react";

import Footer from "../components/Footer/Footer";
import NewsLetter from "../components/CantFind/NewsLetter";
import AllProperties from "../components/AllProperties/AllProperties";
import GetInTouch from "../components/GetInTouch/GetInTouch";
import PropsSelectedHero from "../components/Hero/PropsSelectedHero";
import PropsDetails from "../components/PropsDetails/PropsDetails";

const PropertySelected = () => {
  const [newLetterComp, setNewLetterComp] = useState(false);
  const [allProps, setAllProps] = useState(false);
  const [homePage, setHomePage] = useState(false);
  const [propsDetails, setPropsDetails] = useState(true);
  const [selectedProps, setSelectedProps] = useState(true);

  useEffect(() => {
    // Scroll to the top when the component is mounted
    window.scrollTo(0, 0);
  }, []);

  const url_str = "property-selected";
  return (
    <>
      <PropsSelectedHero />
      <PropsDetails propsDetails={propsDetails} />
      <NewsLetter newLetterComp={newLetterComp} selectedProps={selectedProps} />
      <AllProperties allProps={allProps} url_str={url_str} />
      <GetInTouch homePage={homePage} />
      <Footer />
    </>
  );
};

export default PropertySelected;
