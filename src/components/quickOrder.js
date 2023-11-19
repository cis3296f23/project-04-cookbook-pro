import React, { useState } from 'react';
import {
  ListGroup,
  ListGroupItemHeading,
  ListGroupItem,
  Button,
  Input,
} from "reactstrap";

const QuickOrder = ({ recipes, clearOrder }) => {
  const [email, setEmail] = useState('');

  const collectEmail = (event) => {
    setEmail(event.target.value);
  };

  const generateOrder = (recipes) => {
    const listContents = recipes
      .map((recipe, index) => `${index + 1}. ${recipe.name}`)
      .join("\n");
    console.log(listContents);
  };

  const clearCurrentOrderList = () => {
    clearOrder();
  };

  return (
    <div>
      <ListGroup>
        <ListGroupItemHeading>Quick Order</ListGroupItemHeading>
        {/* Use Input component for email */}
        <Input
          type="email"
          value={email}
          onChange={collectEmail}
          placeholder="Email"
        />
        <Button
          onClick={() => {
            generateOrder(recipes);
            clearCurrentOrderList();
          }}
        >
          Print Order
        </Button>
        {recipes.map((recipe, index) => (
          <ListGroupItem key={index}>{recipe.name}</ListGroupItem>
        ))}
      </ListGroup>
    </div>
  );
};

export default QuickOrder;