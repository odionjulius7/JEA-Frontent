import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import "./Cards.css";
import { Link } from "react-router-dom";

function Cards({ text, colr, gbColr, slide }) {
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
  return (
    <Card
      style={{
        width: "87%",
        // width: "20rem",
        backgroundColor: gbColr,
        color: colr,
        position: "relative",
        cursor: "pointer",
      }}
      className="avail-card-wrap"
    >
      <Link to={`/property-selected/${slide._id}`}>
        {" "}
        {/* <Card.Img
          variant="top"
          src={slide?.image[0] || "./avail-img.png"}
          className="w-100"
          style={{
            height: "348px",
          }}
        /> */}
        {slide?.images && slide.images.length > 0 && (
          <Card.Img
            variant="top"
            className="w-100"
            style={{
              height: !isMobile ? "348px" : "280px",
            }}
            src={slide.images[0]}
          />
        )}
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
            <b className="font_21">{slide?.title}</b>
          </Card.Title>
          <div className="py-2 d-flex gap-2">
            <img src="./location_icon.svg" alt="" />
            <p>
              {slide?.location} |{" "}
              <b>
                {new Intl.NumberFormat("en-NG", {
                  style: "currency",
                  currency: "NGN",
                }).format(slide?.price)}
              </b>{" "}
            </p>
          </div>
          <Card.Text className="py-1">
            <b style={{ fontWeight: "700" }}>Features:</b>{" "}
            <span>{slide?.description?.slice(0, 72) ?? ""}...</span>
          </Card.Text>
        </Card.Body>
      </Link>
    </Card>
  );
}

export default Cards;
