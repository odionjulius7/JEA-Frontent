import React, { useEffect, useState } from "react";

import Footer from "../components/Footer/Footer";
import NewsLetter from "../components/CantFind/NewsLetter";
import AllProperties from "../components/AllProperties/AllProperties";
import GetInTouch from "../components/GetInTouch/GetInTouch";
import PropsSelectedHero from "../components/Hero/PropsSelectedHero";
import PropsDetails from "../components/PropsDetails/PropsDetails";
import { useDispatch, useSelector } from "react-redux";
import Preloader from "../components/Preloader/Preloader";
import {
  allProperty,
  getAproperty,
  resetState,
} from "../features/Property/propertySlice";
import { useParams } from "react-router-dom";

const PropertySelected = () => {
  const dispatch = useDispatch();
  const propertyState = useSelector((state) => state.property);
  const propertiestState = useSelector((state) => state.property);
  const [isLoading, setIsLoading] = useState(true);

  const propertys = propertiestState?.properties?.allProperty || [];
  const propertyDetail = propertyState?.property?.property;
  // console.log(propertyDetail);
  // user auth

  const { slug } = useParams();

  // Assuming properties is an array of objects with a 'location' property
  const filteredProperties = propertys.filter(
    (item) => item.location === propertyDetail?.location
  );

  // Now 'filteredProperties' contains only the items with a matching location

  useEffect(() => {
    const ids = { slug };
    dispatch(resetState());
    dispatch(getAproperty(ids));
    dispatch(allProperty());
  }, [dispatch, slug]);

  // const blogsLoading = useSelector((state) => state.property.isLoadingBlog);
  const propertyLoading = useSelector((state) => state.property.isLoading);
  // const projectsLoading = useSelector((state) => state.property.isLoadingProj);

  useEffect(() => {
    setIsLoading(propertyLoading);
  }, [propertyLoading]);

  //

  //
  const [newLetterComp, setNewLetterComp] = useState(false);
  const [allProps, setAllProps] = useState(false);
  const [homePage, setHomePage] = useState(false);
  const [propsDetails, setPropsDetails] = useState(true);
  const [selectedProps, setSelectedProps] = useState(true);

  useEffect(() => {
    // Scroll to the top when the component is mounted
    window.scrollTo(0, 0);
  }, []);

  // const [allProps, setAllProps] = useState(true);
  const url_str = "property-selected";

  if (isLoading) {
    return <Preloader />;
  }

  return (
    <>
      <PropsSelectedHero propertyDetail={propertyDetail} />
      <PropsDetails
        propertyDetail={propertyDetail}
        propsDetails={propsDetails}
      />
      <NewsLetter newLetterComp={newLetterComp} selectedProps={selectedProps} />
      <AllProperties
        propertys={filteredProperties}
        allProps={allProps}
        url_str={url_str}
        selectedProps={selectedProps}
      />
      <GetInTouch homePage={homePage} />
      <Footer />
    </>
  );
};

export default PropertySelected;
