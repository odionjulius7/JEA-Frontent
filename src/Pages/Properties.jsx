import React, { useEffect, useMemo, useState } from "react";
import Footer from "../components/Footer/Footer";
import PropertyHero from "../components/Hero/PropertyHero";
import FeaturedProps from "../components/FeaturedProps/FeaturedProps";
import AllProperties from "../components/AllProperties/AllProperties";
import CantFind from "../components/CantFind/CantFind";
import FloatWhatsapp from "../components/FloatWhatsapp/FloatWhatsapp";
import { useDispatch, useSelector } from "react-redux";
import { allProperty, resetState } from "../features/Property/propertySlice";
import Preloader from "../components/Preloader/Preloader";

const Properties = () => {
  const dispatch = useDispatch();
  const propertyState = useSelector((state) => state.property);
  const propertys = useMemo(
    () => propertyState?.properties?.allProperty || [],
    [propertyState]
  );

  const featuredProperty = useMemo(() => {
    return propertys.filter((property) => property.tag === "featured");
  }, [propertys]);

  const [allProps, setAllProps] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    dispatch(resetState());
    dispatch(allProperty());
  }, [dispatch]);

  const url_str = "property";

  const [isLoading, setIsLoading] = useState(true);
  const propertyLoading = useSelector((state) => state.property.isLoading);

  useEffect(() => {
    setIsLoading(propertyLoading);
  }, [propertyLoading]);

  if (isLoading) {
    return <Preloader />;
  }

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
