import React, { useState } from "react";
import Footer from "../components/Footer/Footer";
import ProjectsHero from "../components/Hero/ProjectsHero";
import GetInTouch from "../components/GetInTouch/GetInTouch";
import FloatWhatsapp from "../components/FloatWhatsapp/FloatWhatsapp";
import ProjectsTab from "../components/FindProperties/ProjectsTab";

const Projects = () => {
  const [homePage, setHomePage] = useState(false);

  return (
    <>
      <ProjectsHero />
      <GetInTouch homePage={homePage} />

      <Footer />
      <FloatWhatsapp />
    </>
  );
};

export default Projects;
