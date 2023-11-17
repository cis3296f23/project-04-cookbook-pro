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

const MealCard = ({ meal }) => {

    const [showDetails, setShowDetails] = useState(false);
    const toggle = () => {
        setShowDetails(!showDetails);
    };

    const width={width: "18rem"};

  return (
    <Card className={"m-2 p-3 flex-fill shadow-sm"} style={width}>
      <CardTitle>
        <h5 className="col-11 text-truncate m-2 p-0">{meal.name}</h5>
      </CardTitle>
      {/* <CardImg src={require(`${meal.mealImage}`)} alt={`${meal.mealName} image`} /> */}
      <CardImg className="m-0 border" src={meal.image} alt={`${meal.name} image`} />
      <CardBody>
        <CardText className="col-12 text-truncate m-2 p-0">
          {meal.summary}
        </CardText>
        <Button color="primary" onClick={toggle}>Details</Button>
        <RecipeDetails meal={meal} showDetails={showDetails} toggle={toggle} />
      </CardBody>
    </Card>
  );
};

export default MealCard;
