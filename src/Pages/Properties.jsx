import React, { useEffect, useState } from "react";
import Footer from "../components/Footer/Footer";
import PropertyHero from "../components/Hero/PropertyHero";
import FeaturedProps from "../components/FeaturedProps/FeaturedProps";
import AllProperties from "../components/AllProperties/AllProperties";
import CantFind from "../components/CantFind/CantFind";
import FloatWhatsapp from "../components/FloatWhatsapp/FloatWhatsapp";
import { useDispatch, useSelector } from "react-redux";
import { allProperty, resetState } from "../features/Property/propertySlice";

const Properties = () => {
  const dispatch = useDispatch();

  const propertyState = useSelector((state) => state.property);

  const propertys = propertyState?.properties?.allProperty || [];

  const featuredProperty = propertys.filter((property) => {
    return property.tag === "featured";
  });

  //
  const [allProps, setAllProps] = useState(true);

  useEffect(() => {
    // Scroll to the top when the component is mounted
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    dispatch(resetState());
    dispatch(allProperty());
  }, [dispatch]);

  const url_str = "property";
  return (
    <>
      <PropertyHero />
      <FeaturedProps featuredProperty={featuredProperty} />
      <AllProperties
        propertys={propertys}
        allProps={allProps}
        url_str={url_str}
      />
      <CantFind />
      <Footer />
      <FloatWhatsapp />
    </>
  );
};

export default Properties;
