import React, { useState } from "react";
// import { FaLongArrowAltLeft } from "react-icons/fa";
// import { FaLongArrowAltRight } from "react-icons/fa";

import "./FeaturedProps.css";
import CommonSlide from "../CommonSlide/CommonSlide";

const FeaturedProps = ({ featuredProperty }) => {
  const [featuredProp, setFeaturedProp] = useState(true);
  return (
    <div className="container-fluid FeaturedProps">
      <CommonSlide
        px={"5px"}
        colr={"#000000"}
        gbColr={"#ffffff"}
        stlr={"none"}
        featuredProp={featuredProp}
        availableLuxury={featuredProperty}
      />
      {/* </div> */}
    </div>
  );
};

export default FeaturedProps;
