import React, { useEffect, useState } from "react";

import Footer from "../components/Footer/Footer";
import SelectedBlogHero from "../components/Hero/SelectedBlogHero";
import Card from "react-bootstrap/Card";

// import "./AllProperties.css";
import { Link } from "react-router-dom";

import moment from "moment";

import { useSelector } from "react-redux";

const SearchResult = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 640);

  const [searchPage, setSearchPage] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  //
  const propertyState = useSelector((state) => state.property);
  console.log(propertyState?.filteredProperties?.data);
  const [allProps, setAllProps] = useState(true);

  useEffect(() => {
    // Scroll to the top when the component is mounted
    window.scrollTo(0, 0);
  }, []);

  const url_str = "property";

  return (
    <>
      <SelectedBlogHero searchPage={searchPage} />
      <div className="container my-3">
        <h2 className="m-4">Search Results:</h2>
        <div className="row  my-3">
          {propertyState?.filteredProperties?.data &&
          propertyState?.filteredProperties?.data.length > 0 ? (
            propertyState?.filteredProperties?.data.map((item, i) => {
              return (
                <div className="col-md-4 col-sm-6 my-4" key={i}>
                  <Link to={`/${url_str}/${item?._id}`}>
                    <Card>
                      {item?.images && item.images.length > 0 && (
                        <Card.Img
                          variant="top"
                          className="w-100"
                          style={{
                            height: !isMobile ? "258px" : "180px",
                          }}
                          src={item.images[0]}
                        />
                      )}
                      <Card.Body
                        style={{
                          backgroundColor: "#f9f9f9",
                          padding: !isMobile ? "20px" : "10px",
                          // height: !isMobile ? "225px" : "200px",
                        }}
                      >
                        <Card.Title>
                          <b
                            style={{
                              fontWeight: "700",
                              fontSize: "21px",
                            }}
                          >
                            {item?.title}
                          </b>
                          <b
                            style={{
                              display: !allProps ? "block" : "none",
                              fontWeight: "500",
                            }}
                          >
                            {item?.title}
                          </b>
                        </Card.Title>
                        <div className="py-2 d-flex gap-2">
                          <img src="./location_icon.svg" alt="" />
                          <span
                            style={{
                              display: allProps ? "block" : "none",
                              fontWeight: "400",
                              fontSize: "15px",
                            }}
                          >
                            {item?.location} |{" "}
                            <b style={{ fontWeight: "700" }}>
                              {new Intl.NumberFormat("en-NG", {
                                style: "currency",
                                currency: "NGN",
                              }).format(item?.price)}
                            </b>{" "}
                          </span>
                          <span
                            style={{
                              display: !allProps ? "block" : "none",
                              fontWeight: "400",
                              fontSize: "15px",
                            }}
                          >
                            {item?.price?.location} |{" "}
                            <b style={{ fontWeight: "700" }}>
                              {new Intl.NumberFormat("en-NG", {
                                style: "currency",
                                currency: "NGN",
                              }).format(item?.price)}
                            </b>{" "}
                          </span>
                        </div>
                        <Card.Text
                          className="py-2"
                          style={{
                            fontSize: "13px",
                            fontWeight: "400",
                          }}
                        >
                          <b
                            style={{
                              fontWeight: "700",
                            }}
                          >
                            Features:
                          </b>{" "}
                          {item?.description?.slice(0, 73)} ...
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Link>
                </div>
              );
            })
          ) : (
            <h5 className="m-5">No Property Found!</h5>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SearchResult;
