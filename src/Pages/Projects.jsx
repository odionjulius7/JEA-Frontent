import React, { useEffect, useState } from "react";
import Footer from "../components/Footer/Footer";
import ProjectsHero from "../components/Hero/ProjectsHero";
import GetInTouch from "../components/GetInTouch/GetInTouch";
import FloatWhatsapp from "../components/FloatWhatsapp/FloatWhatsapp";
import { allProject, resetState } from "../features/Property/propertySlice";
import { useDispatch, useSelector } from "react-redux";
import Preloader from "../components/Preloader/Preloader";

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

  const [isLoading, setIsLoading] = useState(true);
  // const blogsLoading = useSelector((state) => state.property.isLoadingBlog);
  // const propertyLoading = useSelector((state) => state.property.isLoading);
  const projectsLoading = useSelector((state) => state.property.isLoadingProj);

  useEffect(() => {
    setIsLoading(projectsLoading);
  }, [projectsLoading]);

  if (isLoading) {
    return <Preloader />;
  }

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
