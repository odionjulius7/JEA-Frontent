import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import "./Cards.css";
import { Link } from "react-router-dom";

function Cards({ text, colr, gbColr }) {
  return (
    <Card
      style={{
        width: "90%",
        // width: "20rem",
        backgroundColor: gbColr,
        color: colr,
        position: "relative",
        cursor: "pointer",
      }}
      className="avail-card-wrap"
    >
      <Link to="/property-selected">
        {" "}
        <Card.Img variant="top" src="./avail-img.png" />
        <Card.Body>
          <div
            className="avail-card-num"
            style={{
              color: colr,
            }}
          >
            {text}
          </div>
          <Card.Title>
            <b className="font_21">4 Bedroom Terrace</b>
          </Card.Title>
          <div className="py-2 d-flex gap-2">
            <img src="./location_icon.svg" alt="" />
            <span>
              Osapa London | <b>₦140,000,000</b>{" "}
            </span>
          </div>
          <Card.Text className="fs-6 py-1">
            <b>Features:</b>{" "}
            <span>
              Nicely finished, Fully fitted Kitchen, All rooms ensuite, Serene
              Neighbourhood , Secured Estate, BQ ...
            </span>
          </Card.Text>
        </Card.Body>
      </Link>
    </Card>
  );
}

export default Cards;
