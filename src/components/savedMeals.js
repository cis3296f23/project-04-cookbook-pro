/**
 * Renders a component displaying saved recipes.
 * Allows users to view saved recipes and unsave them.
 * @returns {JSX.Element} - Returns a component for managing saved recipes.
 */
import React, { useState, useEffect } from "react";
import getListener from "../firebase/setListener.js";
import {
  Card,
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText,
  ListInlineItem,
  Button,
} from "reactstrap";

import RecipeDetails from "./recipeDetails.js";
import deleteRecipe from "../firebase/deleteRecipe.js";

const savedMeals = () => {
  const [savedRecipes, setSavedRecipes] = useState([""]);
  const [showDetails, setShowDetails] = useState(false);
  const [meal, setMeal] = useState();

  /**
   * Toggles the display of recipe details.
   * @param {Object} recipe - The recipe object for which details are to be displayed.
   */
  const toggle = (recipe) => {
    setMeal(recipe);
    setShowDetails(!showDetails);
  };

  // Important to only get 1 listener, so use this effect
  useEffect(() => {
    const unsubscribe = getListener("savedRecipes", setSavedRecipes);
    // Cleanup function if needed
    return () => {
      unsubscribe(); // Unsubscribe listener on unmount or re-render
    };
  }, []);

  /**
   * Unsave a recipe by removing it from the saved recipes list.
   */
  function unsaveRecipe() {
    meal.isSaved = false;
    // Close the modal and remove the recipe
    toggle();
    deleteRecipe("savedRecipes", String(meal.id));
  }

  let recipeDetails;

  const buttonOptions = (
    <>
      <Button color="primary" onClick={unsaveRecipe}>
        Unsave recipe
      </Button>
      <Button color="secondary" onClick={toggle}>
        Cancel
      </Button>
    </>
  );

  if (showDetails) {
    recipeDetails = (
      <RecipeDetails
        meal={meal}
        showDetails={showDetails}
        toggle={toggle}
        buttonOptions={buttonOptions}
      />
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
