import React from "react";
import { CardGroup, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
/* eslint-disable react/prop-types */

const CountryCard = ({ item }) => {
  return (
    <CardGroup>
      <Card style={{ width: "18rem", backgroundColor:"darksalmon" }}>
        <p className="card-title" style={{ textAlign: "center" }}>
          {item.name.common}
        </p>
        <Card.Body className="card-body">Some conent about countries</Card.Body>
      </Card>
    </CardGroup>
  );
};

export default CountryCard;
