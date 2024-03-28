import React, { useEffect, useRef, useState } from "react";
// import Header from "../components/Header";
import Map, {
  Marker,
  NavigationControl,
  FullscreenControl,
  ScaleControl,
} from "react-map-gl";
import mapboxgl from "mapbox-gl";
// import axios from "axios";
// import { NotificationManager } from "react-notifications";
// import Footer from "../components/Footer";
/* eslint-disable import/no-webpack-loader-syntax */
mapboxgl.workerClass =
  require("worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker").default;

export default function Contact({ projectDetail }) {
  const [longitude, setLongitude] = useState(projectDetail.longitude);
  const [latitude, setLatitude] = useState(projectDetail.latitude);
  //   const [longitude, setLongitude] = useState(5.6027986);
  //   const [latitude, setLatitude] = useState(6.4672911);

  console.log(longitude);
  console.log(latitude);

  useEffect(() => {
    if (projectDetail) {
      const isValidCoordinate = (coord) => {
        return typeof coord === "number" && !isNaN(coord);
      };

      const convertToNumber = (coord) => {
        if (typeof coord === "string") {
          return parseFloat(coord);
        }
        return coord;
      };

      const longitudeValue = convertToNumber(projectDetail.longitude);
      const latitudeValue = convertToNumber(projectDetail.latitude);

      if (
        isValidCoordinate(longitudeValue) &&
        isValidCoordinate(latitudeValue)
      ) {
        setLongitude(longitudeValue);
        setLatitude(latitudeValue);
      }
    }
  }, [projectDetail]);

  return (
    <div>
      {/* <Header /> */}
      <section
        className="map2"
        style={{
          width: "100vw",
          height: "70vh",
          overflow: "hidden",
        }}
      >
        <Map
          initialViewState={{
            longitude: longitude,
            latitude: latitude,
            // longitude: 5.6027986,
            // latitude: 6.4672911,
            zoom: 12,
            bearing: 0,
            pitch: 0,
          }}
          mapboxAccessToken="pk.eyJ1Ijoiam9zaDQzMjQiLCJhIjoiY2tiemoyYmN2MGJ6ODJ2bXJmM25pbjN1dSJ9.veWU3GwQOzzf0OSAA_TRNg"
          width="100%"
          height="100%"
          transitionDuration="200"
          mapStyle="mapbox://styles/mapbox/streets-v9"
        >
          <FullscreenControl position="top-left" />
          <NavigationControl position="top-left" />
          <ScaleControl />
          <Marker
            longitude={longitude}
            latitude={latitude}
            // longitude="5.6027986"
            // latitude="6.4672911"
            offsetLeft={-3.5 * 12}
            offsetTop={-7 * 12}
          ></Marker>
        </Map>
      </section>
      {/* <section className="contact_section2">
        <div className="contact_box1">
          <div className="contact_text1 ">We would love to hear from you</div>
          <div className="contact_text2">Mobile Number </div>
          <div className="contact_text3">08124584337</div>
          <div className="contact_text2">Mobile Number 2</div>
          <div className="contact_text3">08153139048</div>
          <div className="contact_text2">Email </div>
          <div className="contact_text3">contact@bakerversesuites.com</div>

          <div className="contact_text2">Opening-Closing hours</div>
          <div className="contact_text3">07:00 AM - 12 PM</div>
        </div>
        <div className="contact_box2">
          <form onSubmit={createReq} className="form">
            <div className="contact_box">
              <div className="contact_label">What’s your Full Name ? *</div>
              <input
                className="contact_input"
                placeholder="Enter your full name"
                ref={nameRef}
              />
            </div>

            <div className="contact_box">
              <div className="contact_label">How can we contact you ? *</div>
              <input
                className="contact_input"
                placeholder="Enter your email address"
                ref={emailRef}
                required
              />
            </div>

            <div className="contact_box">
              <div className="contact_label">What’s your Phone Number ? *</div>
              <input
                className="contact_input"
                placeholder="Enter your phone number"
                ref={phoneRef}
                required
              />
            </div>

            <div className="contact_box">
              <div className="contact_label">Write your Message *</div>
              <textarea
                ref={messageRef}
                required
                className="contact_textarea"
              ></textarea>
            </div>

            <button className="contact_but">Send message</button>
          </form>
        </div>
      </section> */}
      {/* <Footer /> */}
    </div>
  );
}
