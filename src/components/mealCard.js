
import React from 'react';
import {Button, Card, CardBody, CardImg, CardText, CardTitle } from 'reactstrap';
 
const MealCard = () => {
    return (
        <Card>
            <CardImg src={require("./food.png")}/>
            <CardBody>
                <CardTitle>Card title</CardTitle>
                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                <Button href="/recipes">
                    Recipe
                </Button>
            </CardBody>
        </Card>
    );
};
 
export default MealCard;