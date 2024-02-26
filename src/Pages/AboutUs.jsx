import React, { useEffect, useState } from "react";
import Footer from "../components/Footer/Footer";
import PropertyReqHero from "../components/Hero/PropertyReqHero";
import AboutVideo from "../components/About-Component/AboutVideo";
import AboutImages from "../components/About-Component/AboutImages";
import AboutWorkWithUs from "../components/About-Component/AboutWorkWithUs";
import WhatPeepsSay from "../components/About-Component/WhatPeepsSay";
import AboutBanner from "../components/About-Component/About_banner";
const AboutUs = () => {
  const [newLetterComp, setNewLetterComp] = useState(true);

  useEffect(() => {
    // Scroll to the top when the component is mounted
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <PropertyReqHero text="About" />
      <AboutVideo />
      <AboutImages />
      <AboutWorkWithUs />
      <WhatPeepsSay />
      <AboutBanner />
      <Footer />
    </>
  );
};
export default AboutUs;
