import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";

import "./AllProperties.css";
import Paginations from "../Pagination/Pagination";
import { Link } from "react-router-dom";

import ReactPaginate from "react-paginate";

const items = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23,
];

const AllProperties = ({ allProps, blogPage, url_str }) => {
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 6;

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(items.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items.length / itemsPerPage));
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
                display: allProps & !blogPage ? "block" : "none",
              }}
            >
              All Properties
            </h2>
            <h2
              style={{
                display: blogPage ? "block" : "none",
              }}
            >
              All Blog Posts
            </h2>
            <h2
              style={{
                display: !allProps & !blogPage ? "block" : "none",
              }}
            >
              Similar Properties In This Area
            </h2>
          </div>
        </div>
        <div className="row  my-3">
          {currentItems &&
            currentItems.map((item, i) => {
              return (
                <div className="col-4 my-2" key={i}>
                  <Link to={`/${url_str}`}>
                    <Card>
                      <Card.Img variant="top" src="./first-slide-img.png" />
                      <Card.Body
                        style={{
                          backgroundColor: "#f9f9f9",
                        }}
                      >
                        <Card.Title>
                          <b
                            style={{
                              display: allProps & !blogPage ? "block" : "none",
                            }}
                          >
                            4 Bedroom Terrace
                          </b>
                          <span
                            style={{
                              fontSize: "14px",
                              fontWeight: "400",
                              display: blogPage ? "block" : "none",
                            }}
                          >
                            October 31, 2023
                          </span>
                          <b
                            style={{
                              display: !allProps & !blogPage ? "block" : "none",
                            }}
                          >
                            4 Bedroom Terrace
                          </b>
                        </Card.Title>
                        <div className="py-2">
                          <img src="" alt="" />
                          <span
                            style={{
                              display: allProps & !blogPage ? "block" : "none",
                            }}
                          >
                            Osapa London | <b>₦140,000,000</b>{" "}
                          </span>
                          <span
                            style={{
                              display: blogPage ? "block" : "none",
                            }}
                          >
                            <b>
                              How urban greening projects affect sustainable
                              cities
                            </b>
                          </span>
                          <span
                            style={{
                              display: !allProps & !blogPage ? "block" : "none",
                            }}
                          >
                            Osapa London | <b>₦140,000,000</b>{" "}
                          </span>
                        </div>
                        <Card.Text className="fs-6 py-1">
                          <b>Features:</b> Nicely finished, Fully fitted
                          Kitchen, All rooms ensuite, Serene Neighbourhood ,
                          Secured Estate, BQ ...
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
            <div className="col-6 mx-auto">
              {/* <Paginations />
              <hr /> */}
              <ReactPaginate
                breakLabel="..."
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel="< previous"
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
            <div className="col-3 mx-auto">
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
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllProperties;
