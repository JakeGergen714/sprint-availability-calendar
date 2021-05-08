import React from "react";
import { MenuItem } from "../menu/MenuItem";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import "./item.css";

export const item = (menuItem: MenuItem) => {
  return (
    <Container className="itemContainer">
      <Card className="item">
        <Card.Body>
          <Card.Title>{menuItem.getName()}</Card.Title>
          <Card.Text>{menuItem.getDescription()}</Card.Text>
          <p>{menuItem.getPrice()}</p>
        </Card.Body>
      </Card>
    </Container>
  );
};
