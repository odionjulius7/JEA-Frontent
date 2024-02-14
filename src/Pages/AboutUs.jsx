import React, { useState } from "react";
import Footer from "../components/Footer/Footer";
import PropertyReqHero from "../components/Hero/PropertyReqHero";
import AboutVideo from "../components/About-Component/AboutVideo";
import AboutImages from "../components/About-Component/AboutImages";
import AboutWorkWithUs from "../components/About-Component/AboutWorkWithUs";
import WhatPeepsSay from "../components/About-Component/WhatPeepsSay";
const AboutUs = () => {
  const [newLetterComp, setNewLetterComp] = useState(true);
  return (
    <>
      <PropertyReqHero text="About" />
      <AboutVideo />
      <AboutImages />
      <AboutWorkWithUs />
      <WhatPeepsSay />
      <Footer />
    </>
  );
};
export default AboutUs;
