import React, { useEffect, useState } from "react";
import Footer from "../components/Footer/Footer";
import SelectedProjHero from "../components/Hero/SelectedProjHero";
import Companies from "../components/Companies/Companies";
import PropsDetails from "../components/PropsDetails/PropsDetails";
import SelectedProjVideo from "../components/SelectedProjComp/SelectedProjVideo";
import SelectedProjMap from "../components/SelectedProjComp/SelectedProjMap";
import SelectedProjImg from "../components/SelectedProjComp/SelectedProjImg";
import FloatWhatsapp from "../components/FloatWhatsapp/FloatWhatsapp";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getAproject, resetState } from "../features/Property/propertySlice";

const SelectedProject = () => {
  const dispatch = useDispatch();
  // const loanState = useSelector((state) => state.loan);
  const projectState = useSelector((state) => state.property);

  const projectDetail = projectState?.project?.project;
  const { slug } = useParams();

  useEffect(() => {
    const ids = { slug };
    dispatch(resetState());
    dispatch(getAproject(ids));
  }, [dispatch, slug]);
  console.log(projectDetail?.featuresAndLogos);
  //
  const [homePage, setHomePage] = useState(false);
  const [propsDetails, setPropsDetails] = useState(false);

  useEffect(() => {
    // Scroll to the top when the component is mounted
    window.scrollTo(0, 0);
  }, []);

  const location = {
    latitude: "11.63777",
    longitude: "40.63777",
  };

  return (
    <>
      <SelectedProjHero projectDetail={projectDetail} />
      <Companies featuresAndLogos={projectDetail?.featuresAndLogos || []} />
      <SelectedProjVideo projectDetail={projectDetail} />
      <div
        className="py-5 text-white py-wrap"
        style={{
          backgroundColor: "#000000",
        }}
      >
        <PropsDetails
          propertyDetail={projectDetail}
          propsDetails={propsDetails}
        />
      </div>
      <SelectedProjMap location={location} />
      <SelectedProjImg projectDetail={projectDetail} />
      <Footer />
      <FloatWhatsapp />
    </>
  );
};

export default SelectedProject;
