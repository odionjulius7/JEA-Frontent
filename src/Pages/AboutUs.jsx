import React, { useState } from "react";
import Footer from "../components/Footer/Footer";
import PropertyReqHero from "../components/Hero/PropertyReqHero";
import PropReqForm from "../components/PropReqForm/PropReqForm";
import NewsLetter from "../components/CantFind/NewsLetter";
import AboutVideo from "../components/About-Component/AboutVideo";
const AboutUs = () => {
  const [newLetterComp, setNewLetterComp] = useState(true);
  return (
    <>
      <PropertyReqHero text="About" />
      <AboutVideo />
      <Footer />
    </>
  );
};
export default AboutUs;
