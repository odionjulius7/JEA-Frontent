import React, { useState } from "react";
import Footer from "../components/Footer/Footer";
import PropertyReqHero from "../components/Hero/PropertyReqHero";
import AboutVideo from "../components/About-Component/AboutVideo";
import AboutImages from "../components/About-Component/AboutImages";
import AboutWorkWithUs from "../components/About-Component/AboutWorkWithUs";
const AboutUs = () => {
  const [newLetterComp, setNewLetterComp] = useState(true);
  return (
    <>
      <PropertyReqHero text="About" />
      <AboutVideo />
      <AboutImages />
      <AboutWorkWithUs />
      <Footer />
    </>
  );
};
export default AboutUs;
