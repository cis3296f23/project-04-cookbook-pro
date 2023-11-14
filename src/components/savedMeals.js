import React from "react";
import {
  Card,
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText,
  ListInlineItem,
} from "reactstrap";

const savedMeals = () => {
  return (
    <ListGroup>
      <ListGroupItemHeading>My Recipes</ListGroupItemHeading>
      <ListGroupItem>An item</ListGroupItem>
      <ListGroupItem>An item</ListGroupItem>
      <ListGroupItem>An item</ListGroupItem>
      <ListGroupItem>An item</ListGroupItem>
      <ListGroupItem>An item</ListGroupItem>
    </ListGroup>
  );
};

export default savedMeals;
