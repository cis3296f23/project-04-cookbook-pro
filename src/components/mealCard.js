import React from 'react';
import { Button, Card, CardBody, CardImg, CardText, CardTitle } from 'reactstrap';

const MealCard = ({ mealName, ingredients, instructions, mealImage }) => {
    return (
      <Card>
        {/* <CardImg src={require(`./${mealImage}`)} alt={`${mealName} image`} /> */}
        <CardBody>
          <CardTitle>{mealName}</CardTitle>
          <CardText>{ingredients}</CardText>
          <CardText>{instructions}</CardText>
          <Button href="/recipes">Recipe</Button>
        </CardBody>
      </Card>
    );
  }; 

export default MealCard;