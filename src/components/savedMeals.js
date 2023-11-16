import React, { useState, useEffect } from "react";
import getListener from "../firebase/setListener.js";
import {
  Card,
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText,
  ListInlineItem,
} from "reactstrap";

import RecipeDetails from "./recipeDetails.js";

const savedMeals = () => {
  const [savedRecipes, setSavedRecipes] = useState([""]);
  const [showDetails, setShowDetails] = useState(false);
  const [meal, setMeal] = useState();

  const toggle = (recipe) => {
    setMeal(recipe);
    setShowDetails(!showDetails);
  };

  //important to only get 1 listener, so use this thingy
  useEffect(() => {
    const unsubscibe = getListener("savedRecipes", setSavedRecipes);
  }, []);

  let recipeDetails;

  if (showDetails) {
    recipeDetails = (
      <RecipeDetails meal={meal} showDetails={showDetails} toggle={toggle} />
    );
  }

  return (
    <ListGroup>
      <ListGroupItemHeading>My Recipes</ListGroupItemHeading>
      {recipeDetails}
      {savedRecipes.map((recipe, key) => {
        return (
          <ListGroupItem action onClick={() => toggle(recipe)} key={key}>
            {recipe.name}
          </ListGroupItem>
        );
      })}
    </ListGroup>
  );
};

export default savedMeals;
