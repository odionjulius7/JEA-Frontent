import React, { useEffect, useState } from "react";
import Footer from "../components/Footer/Footer";
import PropertyReqHero from "../components/Hero/PropertyReqHero";
import PropReqForm from "../components/PropReqForm/PropReqForm";
import NewsLetter from "../components/CantFind/NewsLetter";
import FloatWhatsapp from "../components/FloatWhatsapp/FloatWhatsapp";
const PropertyRequested = () => {
  const [newLetterComp, setNewLetterComp] = useState(true);

  useEffect(() => {
    // Scroll to the top when the component is mounted
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <PropertyReqHero text="Property Request" />
      <PropReqForm />
      <NewsLetter newLetterComp={newLetterComp} />
      <Footer />
      <FloatWhatsapp />
    </>
  );
};

export default PropertyRequested;
