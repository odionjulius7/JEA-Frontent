import React, { useState } from "react";

import Footer from "../components/Footer/Footer";
import NewsLetter from "../components/CantFind/NewsLetter";
import SelectedBlogHero from "../components/Hero/SelectedBlogHero";
import BlogBody from "../components/BlogBody/BlogBody";
import AllProperties from "../components/AllProperties/AllProperties";

const SelectedBlog = () => {
  const [newLetterComp, setNewLetterComp] = useState(true);
  const [allProps, setAllProps] = useState(true);
  const [blogPage, setBlogPage] = useState(true);

  const url_str = "selected-blog";
  return (
    <>
      <SelectedBlogHero />
      <BlogBody />
      <AllProperties
        allProps={allProps}
        blogPage={blogPage}
        url_str={url_str}
      />
      <NewsLetter newLetterComp={newLetterComp} />
      <Footer />
    </>
  );
};

export default SelectedBlog;
