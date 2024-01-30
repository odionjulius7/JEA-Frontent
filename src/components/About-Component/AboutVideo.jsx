import React from "react";

import "./style.css";
import { Card } from "react-bootstrap";

const AboutVideo = () => {
  return (
    <div className="container-fluid AboutVideo">
      <div className="row py-5 align-items-center">
        <div className="col-6 p-5">
          <h3>Defying The Ordinary</h3>
          <p className="py-4">
            Joe Etoniru & Associates is a leading Real Estate firm raising the
            bar for property ownership in Lagos, Nigeria using city knowledge,
            great customer service and a special eye for detail. We aim to bring
            our customers comfort and ease using technology and industry
            expertise.
          </p>
        </div>
        <div className="col-6">
          <img src="/about-vid.png" className="fit-content" alt="" />
        </div>
      </div>
      <div className="row py-5 core-val ">
        <div className="d-flex justify-content-center">
          <h2 className="mt-3 mb-5 fw-bold">Core Values</h2>
        </div>
        <div className="row">
          <div className="col-3">
            <h5>Integrity</h5>
          </div>
          <div className="col-8">
            <p>
              We promise what we can deliver, and deliver as promised. We have a
              ”No Hidden Charges” policy and offer full disclosure with clients
              on every step of the way. Word is bond, and we take that very
              seriously.
            </p>
          </div>
        </div>
        <div className="my-3 grey-border"></div>
        <div className="row py-3">
          <div className="col-3">
            <h5>Quality Over Quantity</h5>
          </div>
          <div className="col-8">
            <p>
              Across our spheres of offerings, the most common thing about JEA
              remains quality and close attention to detail. We source materials
              from high quality vendors across the globe and leave no room for
              compromises
            </p>
          </div>
        </div>
        <div className="my-3 grey-border"></div>
        <div className="row py-3">
          <div className="col-3">
            <h5>Customer - centric</h5>
          </div>
          <div className="col-8">
            <p>
              Our priority remains the clients; our clients. Our process,
              training, working environment and conduct is carefully curated to
              give you the best real estate client experience.
            </p>
          </div>
        </div>
        <div className="my-3 grey-border"></div>
        <div className="row py-3">
          <div className="col-3">
            <h5>Innovative</h5>
          </div>
          <div className="col-8">
            <p>
              We continue to grow and drive innovation by prioritizing client
              needs, collating market insights and translating these data to
              practical products and services that meet demand. This is a major
              reason why we have risen to become a key player in the real estate
              industry for the past 10 years
            </p>
          </div>
        </div>
      </div>
      <div className="row py-5 px-5 align-items-center">
        <div className="col-6">
          <img src="/about-mission.png" className="w-100 fit-content" alt="" />
        </div>
        <div className="col-6 py-5 px-3">
          <h3>Our Mission / Vision</h3>
          <span
            className="fs-6"
            style={{
              color: "#FBC344",
            }}
          >
            “Decades Worth of Customer Satisfaction
          </span>
          <p className="py-2 fs-6">
            Our mission is to create an easy pathway to home ownership using a
            hybrid of digital and physical means
          </p>
          <span
            className="fs-6"
            style={{
              color: "#FBC344",
            }}
          >
            “A Legacy in the Making”
          </span>
          <p className="py-2 fs-6">
            The vision is to cement our approach to home ownership, as a gold
            standard in Real Estate; anywhere, everywhere.
          </p>
        </div>
      </div>
      <div className="row py-5 affil-sub ">
        <h3 className="my-2">Affiliations and Subsidiaries</h3>
        <p>
          Our services spread across the experience of property ownership – from
          development, to buying, rental, moving, cleaning, and pest
          extermination. We believe that luxury is a lifestyle everyone
          deserves. In addition to our commitment to providing an
          all-encompassing real estate experience, we understand that the
          concept of luxury transcends the physical confines of a property. It's
          about having peace of mind, convenience, and a sense of belonging.
          That's why, beyond the traditional real estate services, we offer
          exceptional customer support and ongoing consultation to ensure that
          your journey in property ownership is as smooth and rewarding as
          possible. We're here to help you not only find a house but transform
          it into a true home – a place where cherished memories are made, and
          your unique lifestyle is celebrated.
        </p>
      </div>
      <div className="row comp-logo py-5">
        <div className="paddings innerWidth flexCenter c-container py-5">
          <img
            src="./Jea-projects.png"
            alt=""
            className="fit-content"
            style={{
              width: "65px",
            }}
          />
          <img
            src="./Movesmart.png"
            alt=""
            className="fit-content"
            style={{
              width: "120px",
            }}
          />
          <img
            src="./clean-smart.png"
            alt=""
            className="fit-content"
            style={{
              width: "90px",
            }}
          />
          <img
            src="./rentall.png"
            alt=""
            className="fit-content"
            style={{
              width: "90px",
            }}
          />
          <img
            src="./Bug-boss.png"
            alt=""
            className="fit-content"
            style={{
              width: "70px",
            }}
          />
          <img
            src="./Lodge-logo.png"
            alt=""
            className="fit-content"
            style={{
              width: "77px",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default AboutVideo;
