import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Col, Nav, Row, Tab } from "react-bootstrap";
import Inputs from "../Inputs";
import { useFormik } from "formik";
import {
  filterPrperty,
  resetState,
} from "../../features/Property/propertySlice";

import "./FindProp.css";
import SelectTwo from "../SelectTwo";
import { useDispatch, useSelector } from "react-redux";

import * as yup from "yup";

const schema = yup.object().shape({
  number_of_room: yup.number(),
  location: yup.string(),
  minPrice: yup.string(),
  maxPrice: yup.string(),
  // category: yup.string(),
});

const FindProperties = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const propertyState = useSelector((state) => state.property);

  // console.log(propertyState?.isLoading);

  const [category, setCategory] = useState("buy");

  const formik = useFormik({
    initialValues: {
      number_of_room: "",
      minPrice: "",
      maxPrice: "",
      location: "",
    },
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      const ids = { ...values, category };
      console.log(ids);

      try {
        // Perform your search logic and dispatch actions
        await dispatch(filterPrperty(ids));

        // Redirect to the search result page
        navigate("/search");
      } catch (error) {
        resetForm();
        setTimeout(() => {
          dispatch(resetState());
        }, 300);
        console.error("Error submitting form:", error);
      } finally {
        setSubmitting(false);
      }
    },
  });

  //
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 460);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleNavSelect = (selectedKey) => {
    // Assuming you have an array of objects with keys and corresponding text
    const navItems = [
      { key: "first", text: "buy" },
      { key: "second", text: "rent" },
      { key: "third", text: "shortlet" },
      { key: "fourth", text: "land" },
    ];
    const selectedText = navItems.find(
      (item) => item.key === selectedKey
    )?.text;

    setCategory(selectedText);
  };

  useEffect(() => {
    setCategory("buy");
  }, []);

  // https://jea-backend.onrender.com/api/property/search?price[lte]=10000000&price[gte]=20000&location=Ikota&number_of_room=6&category=land

  return (
    <>
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <Col
            xl={8}
            lg={10}
            md={12}
            sm={12}
            className="mx-auto d-flex justify-content-center"
            id="tab_1"
          >
            <Nav
              variant="pills"
              className="flex-row"
              onSelect={handleNavSelect}
            >
              <Nav.Item>
                <Nav.Link
                  eventKey="first"
                  className="py-2 pb-3 px-5xr mx-2"
                  style={{
                    fontWeight: "400",
                  }}
                >
                  Buy
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  eventKey="second"
                  className="py-2 pb-3 px-5x mx-2"
                  style={{
                    fontWeight: "400",
                  }}
                >
                  Rent
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  eventKey="third"
                  className="py-2 pb-3 px-5x mx-2"
                  style={{
                    fontWeight: "400",
                  }}
                >
                  Shortlet
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  eventKey="fourth"
                  className="py-2 pb-3 px-5x mx-2"
                  style={{
                    fontWeight: "400",
                  }}
                >
                  Land
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
        </Row>
        <Row>
          <Col
            lg={8}
            md={12}
            sm={12}
            className="mx-auto text-dark"
            style={{
              padding: isMobile ? "0 0.8rem" : "0 3rem",
            }}
          >
            <Tab.Content
              style={{
                marginTop: "-0.5rem",
                backgroundColor: "#FFFFFF",
                minHeight: "260px",
                borderRadius: "9px",
              }}
            >
              <Tab.Pane eventKey="first" className="py-3 px-3x">
                <form onSubmit={formik.handleSubmit}>
                  {" "}
                  <div
                    className="d-flex flex-row justify-content-center gap-4x align-items-center  mb-4 select_wrap_find"
                    style={{
                      paddingTop: !isMobile ? "1.6rem" : "",
                    }}
                  >
                    <div className="select-width">
                      <SelectTwo
                        text={"No. of Bedrooms"}
                        widthx={"inherit"}
                        heightx={"inherit"}
                        name="number_of_room"
                        onChange={formik.handleChange}
                        value={formik.values.number_of_room}
                        items={[1, 2, 3, 4, 5, 6]}
                      />
                    </div>
                    <div
                      className="divider py-1 bg-dark display-none"
                      style={{
                        borderRight: "1px solid #9B9B9B",
                        height: "35px",
                      }}
                    ></div>
                    <div className="select-width">
                      <SelectTwo
                        text={"Min. Price"}
                        widthx={"inherit"}
                        heightx={"inherit"}
                        name="minPrice"
                        onChange={formik.handleChange}
                        value={formik.values.minPrice}
                        items={[
                          200000, 300000, 400000, 500000, 600000, 1000000,
                          2000000, 3000000, 5000000, 10000000, 2000000,
                        ]}
                      />
                    </div>
                    <div
                      className="divider py-1 bg-dark display-none"
                      style={{
                        borderRight: "1px solid #9B9B9B",
                        height: "35px",
                      }}
                    ></div>
                    <div className="select-width">
                      <SelectTwo
                        text={"Max Price"}
                        widthx={"inherit"}
                        heightx={"inherit"}
                        name="maxPrice"
                        onChange={formik.handleChange}
                        value={formik.values.maxPrice}
                        items={[
                          500000, 1000000, 2000000, 3000000, 4000000, 5000000,
                          7000000, 9000000, 12000000, 15000000, 20000000,
                          30000000, 50000000,
                        ]}
                      />
                      {/* <SelectComp widthx={"inherit"} heightx={"inherit"} /> */}
                    </div>
                  </div>
                  <div className="row mt-4 pt-1">
                    <div className="col-10 mx-auto">
                      {/* <Inputs text={"Enter a property description or location"} /> */}
                      <Inputs
                        text={"Enter a property description or location"}
                        name="location"
                        onChange={formik.handleChange}
                        value={formik.values.location}
                      />
                    </div>
                  </div>
                  <div className="row my-4">
                    <div className="col-md-5 mx-auto search-home d-flex justify-content-center">
                      <button
                        id="search-btn"
                        className="button fit-content"
                        style={{
                          background: "#FBC344",
                          width: isMobile ? "80%" : "100%",
                          color: "#000000",
                          fontWeight: "400",
                          fontSize: "15px",
                          borderRadius: "9px",
                          padding: isMobile ? "10px" : "",
                        }}
                      >
                        {propertyState?.isLoading1 ? (
                          <div class="spinner-border" role="status">
                            <span class="visually-hidden">Loading...</span>
                          </div>
                        ) : (
                          "Search"
                        )}
                      </button>
                    </div>
                  </div>
                </form>
              </Tab.Pane>
              <Tab.Pane eventKey="second" className="py-3 px-3x">
                <form onSubmit={formik.handleSubmit}>
                  {" "}
                  <div
                    className="d-flex flex-row justify-content-center gap-4x align-items-center  mb-4 select_wrap_find"
                    style={{
                      paddingTop: !isMobile ? "1.6rem" : "",
                    }}
                  >
                    <div className="select-width">
                      <SelectTwo
                        text={"No. of Bedrooms"}
                        widthx={"inherit"}
                        heightx={"inherit"}
                        name="number_of_room"
                        onChange={formik.handleChange}
                        value={formik.values.number_of_room}
                        items={[1, 2, 3, 4, 5, 6]}
                      />
                    </div>
                    <div
                      className="divider py-1 bg-dark display-none"
                      style={{
                        borderRight: "1px solid #9B9B9B",
                        height: "35px",
                      }}
                    ></div>
                    <div className="select-width">
                      <SelectTwo
                        text={"Min. Price"}
                        widthx={"inherit"}
                        heightx={"inherit"}
                        name="minPrice"
                        onChange={formik.handleChange}
                        value={formik.values.minPrice}
                        items={[
                          200000, 300000, 400000, 500000, 600000, 1000000,
                          2000000, 3000000, 5000000, 10000000, 2000000,
                        ]}
                      />
                    </div>
                    <div
                      className="divider py-1 bg-dark display-none"
                      style={{
                        borderRight: "1px solid #9B9B9B",
                        height: "35px",
                      }}
                    ></div>
                    <div className="select-width">
                      <SelectTwo
                        text={"Max Price"}
                        widthx={"inherit"}
                        heightx={"inherit"}
                        name="maxPrice"
                        onChange={formik.handleChange}
                        value={formik.values.maxPrice}
                        items={[
                          2000000, 3000000, 4000000, 5000000, 7000000, 9000000,
                          12000000, 15000000, 20000000, 30000000, 50000000,
                        ]}
                      />
                      {/* <SelectComp widthx={"inherit"} heightx={"inherit"} /> */}
                    </div>
                  </div>
                  <div className="row mt-4 pt-1">
                    <div className="col-10 mx-auto">
                      {/* <Inputs text={"Enter a property description or location"} /> */}
                      <Inputs
                        text={"Enter a property description or location"}
                        name="location"
                        onChange={formik.handleChange}
                        value={formik.values.location}
                      />
                    </div>
                  </div>
                  <div className="row my-4">
                    <div className="col-md-5 mx-auto search-home d-flex justify-content-center">
                      <button
                        id="search-btn"
                        className="button fit-content"
                        style={{
                          background: "#FBC344",
                          width: isMobile ? "80%" : "100%",
                          color: "#000000",
                          fontWeight: "400",
                          fontSize: "15px",
                          borderRadius: "9px",
                          padding: isMobile ? "10px" : "",
                        }}
                      >
                        {propertyState?.isLoading ? (
                          <div class="spinner-border" role="status">
                            <span class="visually-hidden">Loading...</span>
                          </div>
                        ) : (
                          "Search"
                        )}
                      </button>
                    </div>
                  </div>
                </form>
              </Tab.Pane>
              <Tab.Pane eventKey="third" className="py-3 px-3x ">
                <form onSubmit={formik.handleSubmit}>
                  {" "}
                  <div
                    className="d-flex flex-row justify-content-center gap-4x align-items-center  mb-4 select_wrap_find"
                    style={{
                      paddingTop: !isMobile ? "1.6rem" : "",
                    }}
                  >
                    <div className="select-width">
                      <SelectTwo
                        text={"No. of Bedrooms"}
                        widthx={"inherit"}
                        heightx={"inherit"}
                        name="number_of_room"
                        onChange={formik.handleChange}
                        value={formik.values.number_of_room}
                        items={[1, 2, 3, 4, 5, 6]}
                      />
                    </div>
                    <div
                      className="divider py-1 bg-dark display-none"
                      style={{
                        borderRight: "1px solid #9B9B9B",
                        height: "35px",
                      }}
                    ></div>
                    <div className="select-width">
                      <SelectTwo
                        text={"Min. Price"}
                        widthx={"inherit"}
                        heightx={"inherit"}
                        name="minPrice"
                        onChange={formik.handleChange}
                        value={formik.values.minPrice}
                        items={[
                          200000, 300000, 400000, 500000, 600000, 1000000,
                          2000000, 3000000, 5000000, 10000000, 2000000,
                        ]}
                      />
                    </div>
                    <div
                      className="divider py-1 bg-dark display-none"
                      style={{
                        borderRight: "1px solid #9B9B9B",
                        height: "35px",
                      }}
                    ></div>
                    <div className="select-width">
                      <SelectTwo
                        text={"Max Price"}
                        widthx={"inherit"}
                        heightx={"inherit"}
                        name="maxPrice"
                        onChange={formik.handleChange}
                        value={formik.values.maxPrice}
                        items={[
                          2000000, 3000000, 4000000, 5000000, 7000000, 9000000,
                          12000000, 15000000, 20000000, 30000000, 50000000,
                        ]}
                      />
                      {/* <SelectComp widthx={"inherit"} heightx={"inherit"} /> */}
                    </div>
                  </div>
                  <div className="row mt-4 pt-1">
                    <div className="col-10 mx-auto">
                      {/* <Inputs text={"Enter a property description or location"} /> */}
                      <Inputs
                        text={"Enter a property description or location"}
                        name="location"
                        onChange={formik.handleChange}
                        value={formik.values.location}
                      />
                    </div>
                  </div>
                  <div className="row my-4">
                    <div className="col-md-5 mx-auto search-home d-flex justify-content-center">
                      <button
                        id="search-btn"
                        className="button fit-content"
                        style={{
                          background: "#FBC344",
                          width: isMobile ? "80%" : "100%",
                          color: "#000000",
                          fontWeight: "400",
                          fontSize: "15px",
                          borderRadius: "9px",
                          padding: isMobile ? "10px" : "",
                        }}
                      >
                        {propertyState?.isLoading1 ? (
                          <div class="spinner-border" role="status">
                            <span class="visually-hidden">Loading...</span>
                          </div>
                        ) : (
                          "Search"
                        )}
                      </button>
                    </div>
                  </div>
                </form>
              </Tab.Pane>
              <Tab.Pane eventKey="fourth" className="py-3 px-3x ">
                <form onSubmit={formik.handleSubmit}>
                  {" "}
                  <div
                    className="d-flex flex-row justify-content-center gap-4x align-items-center  mb-4 select_wrap_find"
                    style={{
                      paddingTop: !isMobile ? "1.6rem" : "",
                    }}
                  >
                    <div className="select-width">
                      <SelectTwo
                        text={"No. of Bedrooms"}
                        widthx={"inherit"}
                        heightx={"inherit"}
                        name="number_of_room"
                        onChange={formik.handleChange}
                        value={formik.values.number_of_room}
                        items={[1, 2, 3, 4, 5, 6]}
                      />
                    </div>
                    <div
                      className="divider py-1 bg-dark display-none"
                      style={{
                        borderRight: "1px solid #9B9B9B",
                        height: "35px",
                      }}
                    ></div>
                    <div className="select-width">
                      <SelectTwo
                        text={"Min. Price"}
                        widthx={"inherit"}
                        heightx={"inherit"}
                        name="minPrice"
                        onChange={formik.handleChange}
                        value={formik.values.minPrice}
                        items={[
                          200000, 300000, 400000, 500000, 600000, 1000000,
                          2000000, 3000000, 5000000, 10000000, 2000000,
                        ]}
                      />
                    </div>
                    <div
                      className="divider py-1 bg-dark display-none"
                      style={{
                        borderRight: "1px solid #9B9B9B",
                        height: "35px",
                      }}
                    ></div>
                    <div className="select-width">
                      <SelectTwo
                        text={"Max Price"}
                        widthx={"inherit"}
                        heightx={"inherit"}
                        name="maxPrice"
                        onChange={formik.handleChange}
                        value={formik.values.maxPrice}
                        items={[
                          2000000, 3000000, 4000000, 5000000, 7000000, 9000000,
                          12000000, 15000000, 20000000, 30000000, 50000000,
                        ]}
                      />
                      {/* <SelectComp widthx={"inherit"} heightx={"inherit"} /> */}
                    </div>
                  </div>
                  <div className="row mt-4 pt-1">
                    <div className="col-10 mx-auto">
                      {/* <Inputs text={"Enter a property description or location"} /> */}
                      <Inputs
                        text={"Enter a property description or location"}
                        name="location"
                        onChange={formik.handleChange}
                        value={formik.values.location}
                      />
                    </div>
                  </div>
                  <div className="row my-4">
                    <div className="col-md-5 mx-auto search-home d-flex justify-content-center">
                      <button
                        id="search-btn"
                        className="button fit-content"
                        style={{
                          background: "#FBC344",
                          width: isMobile ? "80%" : "100%",
                          color: "#000000",
                          fontWeight: "400",
                          fontSize: "15px",
                          borderRadius: "9px",
                          padding: isMobile ? "10px" : "",
                        }}
                      >
                        {propertyState?.isLoading ? (
                          <div class="spinner-border" role="status">
                            <span class="visually-hidden">Loading...</span>
                          </div>
                        ) : (
                          "Search"
                        )}
                      </button>
                    </div>
                  </div>
                </form>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </>
  );
};

export default FindProperties;
