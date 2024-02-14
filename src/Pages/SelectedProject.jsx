import React, { useEffect, useState } from "react";
import Footer from "../components/Footer/Footer";
import SelectedProjHero from "../components/Hero/SelectedProjHero";
import Companies from "../components/Companies/Companies";
import PropsDetails from "../components/PropsDetails/PropsDetails";
import SelectedProjVideo from "../components/SelectedProjComp/SelectedProjVideo";
import SelectedProjMap from "../components/SelectedProjComp/SelectedProjMap";
import SelectedProjImg from "../components/SelectedProjComp/SelectedProjImg";
import FloatWhatsapp from "../components/FloatWhatsapp/FloatWhatsapp";

const SelectedProject = () => {
  const [homePage, setHomePage] = useState(false);
  const [propsDetails, setPropsDetails] = useState(false);

  useEffect(() => {
    // Scroll to the top when the component is mounted
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SelectedProjHero />
      <Companies />
      <SelectedProjVideo />
      <div
        className="py-5 text-white py-wrap"
        style={{
          backgroundColor: "#000000",
        }}
      >
        <PropsDetails propsDetails={propsDetails} />
      </div>
      <SelectedProjMap />
      <SelectedProjImg />
      <Footer />
      <FloatWhatsapp />
    </>
  );
};

export default SelectedProject;
