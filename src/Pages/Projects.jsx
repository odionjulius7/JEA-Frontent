import React, { useEffect, useState } from "react";
import Footer from "../components/Footer/Footer";
import ProjectsHero from "../components/Hero/ProjectsHero";
import GetInTouch from "../components/GetInTouch/GetInTouch";
import FloatWhatsapp from "../components/FloatWhatsapp/FloatWhatsapp";
import { allProject, resetState } from "../features/Property/propertySlice";
import { useDispatch, useSelector } from "react-redux";

const Projects = () => {
  const dispatch = useDispatch();

  const projectState = useSelector((state) => state.property);

  const projs = projectState?.projects?.allProject || [];

  const [homePage, setHomePage] = useState(false);

  useEffect(() => {
    // Scroll to the top when the component is mounted
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    dispatch(resetState());
    dispatch(allProject());
  }, [dispatch]);

  return (
    <>
      <ProjectsHero projs={projs} />
      <GetInTouch homePage={homePage} />

      <Footer />
      <FloatWhatsapp />
    </>
  );
};

export default Projects;
