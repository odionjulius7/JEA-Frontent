import React, { useEffect, useState } from "react";
import Footer from "../components/Footer/Footer";
import PropertyReqHero from "../components/Hero/PropertyReqHero";
import AboutVideo from "../components/About-Component/AboutVideo";
import AboutImages from "../components/About-Component/AboutImages";
import AboutWorkWithUs from "../components/About-Component/AboutWorkWithUs";
import WhatPeepsSay from "../components/About-Component/WhatPeepsSay";
import AboutBanner from "../components/About-Component/About_banner";
import AboutHero from "../components/Hero/AboutHero";
import { useDispatch, useSelector } from "react-redux";
import { allBlog, resetState } from "../features/Property/propertySlice";
const AboutUs = () => {
  const dispatch = useDispatch();
  const [newLetterComp, setNewLetterComp] = useState(true);

  const blogsState = useSelector((state) => state.property);

  const blogs = blogsState?.blogs?.blog || [];
  console.log(blogs);
  useEffect(() => {
    // Scroll to the top when the component is mounted
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    dispatch(resetState());
    dispatch(allBlog());
  }, [dispatch]);

  return (
    <>
      <AboutHero text="About" />
      <AboutVideo />
      <AboutImages blogs={blogs} />
      <AboutWorkWithUs />
      <WhatPeepsSay />
      <AboutBanner />
      <Footer />
    </>
  );
};
export default AboutUs;
