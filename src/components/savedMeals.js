import React, { useState, useEffect }  from "react";
import getListener from "../firebase/getListener.js";
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

    const list = savedRecipes.join(", ");


  return (
    <ListGroup>
      <ListGroupItemHeading>My Recipes</ListGroupItemHeading>
      
      {savedRecipes.map((element) =>
        <ListGroupItem>{element}</ListGroupItem>
      )}
      
    </ListGroup>
  );
};

export default savedMeals;
