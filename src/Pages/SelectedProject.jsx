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
  const { id } = useParams();

  useEffect(() => {
    const ids = { id };
    dispatch(resetState());
    dispatch(getAproject(ids));
  }, [dispatch, id]);

  //
  const [homePage, setHomePage] = useState(false);
  const [propsDetails, setPropsDetails] = useState(false);

  useEffect(() => {
    // Scroll to the top when the component is mounted
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SelectedProjHero projectDetail={projectDetail} />
      <Companies />
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
      <SelectedProjMap />
      <SelectedProjImg projectDetail={projectDetail} />
      <Footer />
      <FloatWhatsapp />
    </>
  );
};

export default SelectedProject;
