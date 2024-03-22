import React, { useEffect, useState } from "react";

import ApartmentAvailable from "../components/ApartmentAvailable/ApartmentAvailable";
import FindProperties from "../components/FindProperties/FindProperties";
import Footer from "../components/Footer/Footer";
import GetInTouch from "../components/GetInTouch/GetInTouch";
import Hero from "../components/Hero/Hero";
import LocationProps from "../components/LocationProps/LocationProps";
import HomeBlog from "../components/WeeklyProps/HomeBlog";
import WeeklyProps from "../components/WeeklyProps/WeeklyProps";
import FloatWhatsapp from "../components/FloatWhatsapp/FloatWhatsapp";
import { useDispatch, useSelector } from "react-redux";
import {
  // allBlog,
  allProject,
  allProperty,
  resetState,
} from "../features/Property/propertySlice";
import Preloader from "../components/Preloader/Preloader";

const Home = () => {
  const dispatch = useDispatch();

  const propertyState = useSelector((state) => state.property);
  // const blogsState = useSelector((state) => state.property);
  const projectState = useSelector((state) => state.property);

  const projs = projectState?.projects?.allProject || [];
  const propertys = propertyState?.properties?.allProperty || [];
  // const blogs = blogsState?.blogs?.blog || [];

  // console.log(propertyState?.isLoading);

  const featuredPrj = projs
    .filter((property) => {
      return property.tag === "featured";
    })
    .reverse();
  const propertyOfTheWeek = propertys.filter((property) => {
    return property.tag === "property of the week";
  });
  const availableLuxury = propertys.filter((property) => {
    return property.tag === "available luxury";
  });

  const uniqueLocations = [
    ...new Set(propertys.map((property) => property.location)),
  ];

  // console.log(uniqueLocations);

  useEffect(() => {
    dispatch(resetState());
    dispatch(allProperty());
    // dispatch(allBlog());
    dispatch(allProject());
  }, [dispatch]);
  //
  const [isLoading, setIsLoading] = useState(true);

  const propertyLoading = useSelector((state) => state.property.isLoading);
  // const blogsLoading = useSelector((state) => state.property.isLoadingBlog);
  const projectsLoading = useSelector((state) => state.property.isLoadingProj);

  useEffect(() => {
    setIsLoading(propertyLoading || projectsLoading);
  }, [propertyLoading, projectsLoading]);

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 640);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [homePage, setHomePage] = useState(true);
  // const [blogPage, setBlogPage] = useState(true);
  const [homeBg, setHomeBg] = useState(true);

  useEffect(() => {
    // Scroll to the top when the component is mounted
    window.scrollTo(0, 0);
  }, []);

  const url_str = "property";
  const url_strblog = "selected-blog";

  if (isLoading) {
    return <Preloader />;
  }

  // console.log(isLoading);

  return (
    <>
      <Hero featuredPrj={featuredPrj} />
      <div
        className="container-fluid px-5x text-white home-prop"
        style={{
          paddingTop: isMobile ? "50px" : "80px",
          paddingBottom: isMobile ? "70px" : "100px",
        }}
      >
        <div className="row mb-5">
          <div className="col d-flex justify-content-center">
            <h2 className="text-center">Find Your Next Property</h2>
          </div>
        </div>
        <FindProperties />
      </div>
      <WeeklyProps
        propertyOfTheWeek={propertyOfTheWeek}
        homeBg={homeBg}
        homePage={homePage}
        url_str={url_str}
      />
      <ApartmentAvailable
        availableLuxury={availableLuxury}
        homePage={homePage}
      />
      <LocationProps uniqueLocations={uniqueLocations} />
      {/* <WeeklyProps blogPage={blogPage} url_str={url_strblog} homeBg={homeBg} /> */}
      <HomeBlog
        // blogs={blogs}
        homeBg={homeBg}
        homePage={homePage}
        url_strblog={url_strblog}
      />
      <GetInTouch homePage={homePage} />
      <Footer />
      <FloatWhatsapp />
    </>
  );
};

export default Home;
