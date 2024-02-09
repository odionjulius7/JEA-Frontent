import React from "react";
import Card from "react-bootstrap/Card";

const LocatioCards = () => {
  return (
    <Card className="location_carded">
      <Card.Img
        variant="top"
        src="./location-img.png"
        // className="fit-content"
      />
    </Card>
  );
};

export default LocatioCards;
