import React, { useState } from "react";
import Footer from "../components/Footer/Footer";
import SelectedProjHero from "../components/Hero/SelectedProjHero";
import Companies from "../components/Companies/Companies";
import PropsDetails from "../components/PropsDetails/PropsDetails";
import SelectedProjVideo from "../components/SelectedProjComp/SelectedProjVideo";
import SelectedProjMap from "../components/SelectedProjComp/SelectedProjMap";
import SelectedProjImg from "../components/SelectedProjComp/SelectedProjImg";

const SelectedProject = () => {
  const [homePage, setHomePage] = useState(false);
  const [propsDetails, setPropsDetails] = useState(false);

  return (
    <>
      <SelectedProjHero />
      <Companies />
      <SelectedProjVideo />
      <div
        className="py-5 text-white"
        style={{
          backgroundColor: "#000000",
        }}
      >
        <PropsDetails propsDetails={propsDetails} />
      </div>
      <SelectedProjMap />
      <SelectedProjImg />
      <Footer />
    </>
  );
};

export default SelectedProject;
