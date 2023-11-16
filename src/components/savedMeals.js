import React, { useState, useEffect }  from "react";
import getListener from "../firebase/setListener.js";
import {
  Card,
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText,
  ListInlineItem,
} from "reactstrap";



const savedMeals = () => {
    const [savedRecipes, setSavedRecipes] = useState([""]);


    //important to only get 1 listener, so use this thingy
    useEffect(()=>{
        const unsubscibe = getListener("savedRecipes", setSavedRecipes);
    }, [])


  return (
    <ListGroup>
      <ListGroupItemHeading >My Recipes</ListGroupItemHeading>
      
      { Object.entries(savedRecipes).map(([key, value]) => {
        return <ListGroupItem key={key}>{value}</ListGroupItem>
    })}
      
    </ListGroup>
  );
};

export default savedMeals;
