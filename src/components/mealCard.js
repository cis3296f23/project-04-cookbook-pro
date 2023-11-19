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

/*
TODO: format to look nicer
meal.ingredients and meal.instructions are objects that need to be mapped
this should be done in objects.js i think
*/

const MealCard = ({ meal, addRecipe }) => {
  const [showDetails, setShowDetails] = useState(false);
  const toggle = () => {
    setShowDetails(!showDetails);
  };

  const handleAddRecipeClick = (meal) => {
    // Call the addRecipe function with the new meal data
    addRecipe(meal);
  };

  const width = { width: "18rem" };

  return (
    <Card className={"m-2 p-3 flex-fill shadow-sm"} style={width}>
      <CardTitle>
        <h5 className="text-truncate m-2 p-0">{meal.name}</h5>
      </CardTitle>
      {/* <CardImg src={require(`${meal.mealImage}`)} alt={`${meal.mealName} image`} /> */}
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
        <RecipeDetails meal={meal} showDetails={showDetails} toggle={toggle} />
        <Button onClick={() => handleAddRecipeClick(meal)}>
          Add to Quick Order
        </Button>
      </CardBody>
    </Card>
  );
};

export default MealCard;