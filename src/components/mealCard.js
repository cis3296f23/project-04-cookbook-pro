import React from "react";
import {
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

const MealCard = ({ meal }) => {
  return (
    <Card className={"w-100 p-3 shadow-sm"}>
      <CardTitle>
        <h5>{meal.mealName}</h5>
      </CardTitle>
      {/* <CardImg src={require(`${meal.mealImage}`)} alt={`${meal.mealName} image`} /> */}
      <CardImg src={meal.mealImage} alt={`${meal.mealName} image`} />
      <CardBody>
        <CardText><div class="col-12 text-truncate">{meal.summary}</div></CardText>
        {/* <CardText>{meal.ingredients}</CardText>
                <CardText>{meal.instructions}</CardText> */}
        {/* <Button href="/recipes">Recipe</Button> */}
        <RecipeDetails meal={meal} />
      </CardBody>
    </Card>
  );
};

export default MealCard;
