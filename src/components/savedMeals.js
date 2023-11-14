
import React from 'react';
import { Card, ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText, ListInlineItem } from 'reactstrap';

/*
TODO: this component should have a firebase listner to the user's saved meals collection. 
when the collection is updated the list will be updated to display up to date info.
updated to the list will happen in recipeDeatils.js, which will give a popup to the user and have a button to save recipe

*/

const savedMeals = () => {

    return (
        <ListGroup>
            <ListGroupItemHeading>My Recipes</ListGroupItemHeading>
            <ListGroupItem>An item</ListGroupItem>
            <ListGroupItem>An item</ListGroupItem>
            <ListGroupItem>An item</ListGroupItem>
            <ListGroupItem>An item</ListGroupItem>
            <ListGroupItem>An item</ListGroupItem>
        </ListGroup>
    );
};


export default savedMeals;