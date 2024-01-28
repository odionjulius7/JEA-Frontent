import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const LocatioCards = () => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src="./location-img.png"
        className="fit-content"
      />
    </Card>
  );
};

export default LocatioCards;
