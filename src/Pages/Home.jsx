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
  allBlog,
  allProperty,
  resetState,
} from "../features/Property/propertySlice";

const Home = () => {
  const dispatch = useDispatch();

  const propertyState = useSelector((state) => state.property);
  const blogsState = useSelector((state) => state.property);

  const propertys = propertyState?.properties?.allProperty || [];
  const blogs = blogsState?.blogs?.blog || [];

  console.log(blogs);

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
    dispatch(allBlog());
  }, [dispatch]);
  //
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 460);
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

  const url_str = "property-selected";
  const url_strblog = "selected-blog";
  return (
    <>
      <Hero />
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
