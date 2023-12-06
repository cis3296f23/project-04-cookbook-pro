/**
 * Renders a card component displaying meal details and options.
 * @param {Object} props - React props containing meal data.
 * @param {Object} props.meal - Object containing meal details (name, image, summary, etc.).
 * @returns {JSX.Element} - Returns a card component displaying meal information.
 */
import React, { useState } from "react";
import {
  Container,
  Button,
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
} from "reactstrap";
import RecipeDetails from "./recipeDetails.js";
import PutRecipe from "../firebase/putRecipe.js";
/*
TODO: format to look nicer
meal.ingredients and meal.instructions are objects that need to be mapped
this should be done in objects.js i think
*/

const MealCard = ({ meal }) => {
  const [showDetails, setShowDetails] = useState(false);

  /**
   * Toggles the display of detailed information about the meal.
   */
  const toggle = () => {
    setShowDetails(!showDetails);
  };

  /**
   * Saves the recipe into user's data and closes the modal.
   */
  function saveData() {
    const savedMeal = meal;
    savedMeal.isSaved = true;
    PutRecipe("savedRecipes", savedMeal);
    toggle(); //close modal
  }

  const width = { width: "18rem" };

  // Styles for the card component
  const cardStyle = {
    border: "2px outset #FFA6A6",
  };

  // Options for buttons within the card
  const buttonOptions = (
    <>
      <Button color="primary" onClick={saveData}>
        Save Recipe
      </Button>
      <Button color="secondary" onClick={toggle}>
        Close
      </Button>
    </>
  );

  return (
    <Card className={"m-2 p-3 flex-fill shadow-sm"} style={Object.assign(width, cardStyle)}>
      <CardTitle>
        <h5 className="text-truncate m-2 p-0">{meal.name}</h5>
      </CardTitle>
      <CardImg
        className="m-0 border"
        src={meal.image}
        alt={`${meal.name} image`}
      />
      <CardBody>
        <CardText className="text-truncate m-2 p-0">
          {String(meal.summary).replace(/<[^>]*>/g, "")}
        </CardText>
        <Button color="primary" onClick={toggle}>
          Details
        </Button>
        <RecipeDetails
          meal={meal}
          showDetails={showDetails}
          toggle={toggle}
          buttonOptions={buttonOptions}
        />
        <Button onClick={() => PutRecipe("quickOrder", meal)}>
          Add to Quick Order
        </Button>
      </CardBody>
    </Card>
  );
};

export default MealCard;
