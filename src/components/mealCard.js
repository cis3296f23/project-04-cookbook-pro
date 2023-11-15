import React from "react";
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

const MealCard = ({ meal }) => {
  return (
    <Card className={"w-100 p-3 shadow-sm"}>
      <CardTitle>
        <h5>{meal.name}</h5>
      </CardTitle>
      {/* <CardImg src={require(`${meal.mealImage}`)} alt={`${meal.mealName} image`} /> */}
      <CardImg src={meal.image} alt={`${meal.name} image`} />
      <CardBody>
        <CardText>
          <Container className="col-12 text-truncate m-0 p-0">{meal.summary}</Container>
        </CardText>
        {/* <CardText>{meal.ingredients}</CardText>
                <CardText>{meal.instructions}</CardText> */}
        {/* <Button href="/recipes">Recipe</Button> */}
        <RecipeDetails meal={meal} />
      </CardBody>
    </Card>
  );
};

export default MealCard;
