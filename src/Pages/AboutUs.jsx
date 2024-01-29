import React, { useState } from "react";
import Footer from "../components/Footer/Footer";
import PropertyReqHero from "../components/Hero/PropertyReqHero";
import PropReqForm from "../components/PropReqForm/PropReqForm";
import NewsLetter from "../components/CantFind/NewsLetter";
const AboutUs = () => {
  const [newLetterComp, setNewLetterComp] = useState(true);
  return (
    <>
      <PropertyReqHero />
      <PropReqForm />
      <NewsLetter newLetterComp={newLetterComp} />
      <Footer />
    </>
  );
};
export default AboutUs;
