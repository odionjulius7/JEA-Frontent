import React, { useEffect, useState } from "react";

import Footer from "../components/Footer/Footer";
import NewsLetter from "../components/CantFind/NewsLetter";
import AllProperties from "../components/AllProperties/AllProperties";
import RecentBlog from "../components/AllProperties/RecentBlog";
// import WeeklyProps from "../components/WeeklyProps/WeeklyProps";
import BlogHero from "../components/Hero/BlogHero";
import Highlight from "../components/Highlight/Highlight";
import HomeBlog from "../components/WeeklyProps/HomeBlog";
import { useDispatch, useSelector } from "react-redux";
import { allBlog, resetState } from "../features/Property/propertySlice";
import AllBlogs from "../components/AllProperties/AllBlogs";

const Blogs = () => {
  const dispatch = useDispatch();
  const blogsState = useSelector((state) => state.property);

  const blogs = blogsState?.blogs?.blog || [];

  //
  const [newLetterComp, setNewLetterComp] = useState(false);
  const [allProps, setAllProps] = useState(true);
  const [blogPage, setBlogPage] = useState(true);
  // const [homePage, setHomePage] = useState(false);
  // const [propsDetails, setPropsDetails] = useState(true);

  useEffect(() => {
    // Scroll to the top when the component is mounted
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    dispatch(resetState());
    dispatch(allBlog());
  }, [dispatch]);

  const url_str = "selected-blog";
  return (
    <>
      <BlogHero />
      <Highlight />
      <HomeBlog blogPage={blogPage} blogs={blogs} url_strblog={url_str} />
      <RecentBlog />
      <AllBlogs allProps={allProps} blogPage={blogPage} url_str={url_str} />
      <NewsLetter newLetterComp={newLetterComp} blogPage={blogPage} />
      <Footer />
    </>
  );
};

export default Blogs;
