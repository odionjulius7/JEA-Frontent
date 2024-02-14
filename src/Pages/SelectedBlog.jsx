import React, { useEffect, useState } from "react";

import Footer from "../components/Footer/Footer";
import NewsLetter from "../components/CantFind/NewsLetter";
import SelectedBlogHero from "../components/Hero/SelectedBlogHero";
import BlogBody from "../components/BlogBody/BlogBody";
import AllProperties from "../components/AllProperties/AllProperties";
import FloatWhatsapp from "../components/FloatWhatsapp/FloatWhatsapp";

const SelectedBlog = () => {
  const [newLetterComp, setNewLetterComp] = useState(true);
  const [allProps, setAllProps] = useState(true);
  const [selblogPage, setSelBlogPage] = useState(true);

  useEffect(() => {
    // Scroll to the top when the component is mounted
    window.scrollTo(0, 0);
  }, []);

  const url_str = "selected-blog";
  return (
    <>
      <SelectedBlogHero />
      <BlogBody />
      <AllProperties
        allProps={allProps}
        selblogPage={selblogPage}
        url_str={url_str}
      />
      <NewsLetter newLetterComp={newLetterComp} />
      <Footer />
      <FloatWhatsapp />
    </>
  );
};

export default SelectedBlog;
