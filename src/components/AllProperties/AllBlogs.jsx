import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";

import "./AllProperties.css";
import Paginations from "../Pagination/Pagination";
import { Link } from "react-router-dom";

import ReactPaginate from "react-paginate";
import moment from "moment";

const items = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23,
];

const AllBlogs = ({
  allProps,
  blogPage,
  url_str,
  selblogPage,
  propertys,
  selectedProps,
}) => {
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 12;

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(items?.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items?.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, items]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };

  return (
    <div className="container-fluid AllProperties">
      <div className="row">
        <div className="col-12">
          <div className="col-12">
            <h2
              style={{
                display: allProps & !blogPage & !selblogPage ? "block" : "none",
              }}
            >
              All Properties
            </h2>
            <h2
              style={{
                display: blogPage & !selblogPage ? "block" : "none",
              }}
            >
              All Blog Posts
            </h2>
            <h2
              style={{
                display:
                  !allProps & !blogPage & !selblogPage ? "block" : "none",
              }}
            >
              Similar Properties In This Area
            </h2>
            <h2
              style={{
                display: selblogPage ? "block" : "none",
              }}
            >
              Related Posts
            </h2>
          </div>
        </div>
        <div className="row  my-3">
          {currentItems &&
            currentItems.map((item, i) => {
              return (
                <div
                  className="col-md-4 col-sm-6 my-2"
                  key={i}
                  style={{ width: "414px", height: "503px" }}
                >
                  <Link to={`/${url_str}/${item}`}>
                    <Card>
                      <Card.Img variant="top" src="/first-slide-img.png" />
                      {/* {item?.images && item.images.length > 0 && (
                        <Card.Img
                          variant="top"
                          className="w-100"
                          style={{
                            height: "258px",
                          }}
                          src={item.images[0]}
                        />
                      )} */}
                      <Card.Body
                        style={{
                          backgroundColor: "#f9f9f9",
                          padding: "25px",
                          height: "208px",
                        }}
                      >
                        <Card.Title>
                          <b
                            style={{
                              display: allProps & !blogPage ? "block" : "none",
                              fontWeight: "700",
                              fontSize: "21px",
                            }}
                          >
                            {item?.title}
                          </b>
                          <span
                            style={{
                              fontWeight: "400",
                              display: blogPage ? "block" : "none",
                            }}
                          >
                            {/* October 31, 2023 */}
                            {/* {item?.createdAt} */}
                            {moment(item?.createdAt).format(
                              "MMMM Do YYYY, h:mm:ss a"
                            )}
                          </span>
                          <b
                            style={{
                              display: !allProps & !blogPage ? "block" : "none",
                              fontWeight: "500",
                            }}
                          >
                            {item?.title}
                          </b>
                        </Card.Title>
                        <div className="py-2 d-flex gap-2">
                          {!blogPage && <img src="/location_icon.svg" alt="" />}
                          <span
                            style={{
                              display: !blogPage ? "block" : "none",
                              fontWeight: "400",
                              fontSize: "15px",
                            }}
                          >
                            {item?.location} |{" "}
                            <b style={{ fontWeight: "700" }}>
                              {" "}
                              {new Intl.NumberFormat("en-NG", {
                                style: "currency",
                                currency: "NGN",
                              }).format(item?.price)}
                            </b>{" "}
                          </span>
                          <h5
                            style={{
                              display: blogPage ? "block" : "none",
                            }}
                          >
                            How urban greening projects affect sustainable
                            cities
                          </h5>
                          {/* <span
                            style={{
                              display: !allProps & !blogPage ? "block" : "none",
                              fontWeight: "400",
                              fontSize: "15px",
                            }}
                          >
                            {item?.price?.location} |{" "}
                            <b style={{ fontWeight: "700" }}>
                              {" "}
                              {new Intl.NumberFormat("en-NG", {
                                style: "currency",
                                currency: "NGN",
                              }).format(item?.price)}
                            </b>{" "}
                          </span> */}
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
            })}
        </div>

        <div className="row pagination__react my-3">
          {allProps ? (
            <div className="col-md-6 col-sm-12 mx-auto">
              {/* <Paginations />
              <hr /> */}
              <ReactPaginate
                breakLabel="..."
                nextLabel=">>"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel="<<"
                renderOnZeroPageCount={null}
                // styling the whole btns, note: always know when to use thw class with link a tags and without for just li tags
                containerClassName="pagination"
                pageLinkClassName="page-num"
                previousLinkClassName="page-num"
                nextLinkClassName="page-num"
                activeLinkClassName="active"
              />
            </div>
          ) : (
            <div className="col-md-3 col-sm-12 d-flex justify-content-center mx-auto">
              <Link to="/properties">
                <button
                  id="search-btn"
                  className="button fit-content my-4"
                  style={{
                    background: "#FBC344",
                    // width: "50%",
                    color: "#000000",
                    fontWeight: "600",
                  }}
                >
                  VIEW ALL PROPERTIES
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllBlogs;
