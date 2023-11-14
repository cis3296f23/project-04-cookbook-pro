import React from 'react';
import { Button, Card, CardBody, CardImg, CardText, CardTitle } from 'reactstrap';

const MealCard = ({ id, name, ingredients, instructions, image }) => {
    return (
        <Card>
            {/* <CardImg src={require(`./${image}`)} alt={`${image} image`} /> */}
            <CardBody>
                <CardTitle>{name}</CardTitle>
                <CardText>{id}</CardText>
                <CardText>{ingredients}</CardText>
                <CardText>{instructions}</CardText>
                <Button href="/recipes">Recipe</Button>
            </CardBody>
        </Card>
    );
};

export default MealCard;