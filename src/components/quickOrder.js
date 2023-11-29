import React, { useState, useEffect } from "react";
import getListener from "../firebase/getObserver.js";
import {
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  Button,
  Input,
} from "reactstrap";

import RecipeDetails from "./recipeDetails.js";
import deleteRecipe from "../firebase/deleteRecipe.js";

const quickOrder = () => {
  const [savedRecipes, setSavedRecipes] = useState([""]);
  const [showDetails, setShowDetails] = useState(false);
  const [meal, setMeal] = useState();
  const [email, setEmail] = useState("");

  const subject = "Your CookBook Pro shopping list";

  const mailLinkGenerator = () => {
    let body = "";
    if (savedRecipes != "") {
      savedRecipes.forEach((recipe, index) => {
        body = body + `${index + 1}. ${recipe.name}` + "%0D%0A";

        //body += JSON.stringify(recipe.ingredients)

        recipe.ingredients.forEach((recipe) => {
          body += "-" + recipe.name + "%0D%0A";
        });

        body += "%0D%0A";
      });
    }
    return (
      "https://mail.google.com/mail/?view=cm&fs=1&to=" +
      email +
      "&su=" +
      subject +
      "&body=" +
      body
    );
  };

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const toggle = (recipe) => {
    setMeal(recipe);
    setShowDetails(!showDetails);
  };

  //important to only get 1 listener, so use this thingy
  useEffect(() => {
    const unsubscibe = getListener("quickOrder", setSavedRecipes);
  }, []);

  let recipeDetails;
  const buttonOptions = (
    <Button
      onClick={() => {
        toggle();
        deleteRecipe("quickOrder", String(meal.id));
      }}
    >
      Remove from order
    </Button>
  );

  if (showDetails) {
    recipeDetails = (
      <RecipeDetails
        meal={meal}
        showDetails={showDetails}
        toggle={toggle}
        buttonOptions={buttonOptions}
      />
    );
  }

  return (
    <>
      {recipeDetails}
      <ListGroup>
        <ListGroupItemHeading>Quick Order</ListGroupItemHeading>

        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={handleInputChange}
          required
        />

        <Button
          target="_blank"
          rel="noopener noreferrer"
          href={mailLinkGenerator()}
        >
          send an email to {email}
        </Button>

        {savedRecipes.map((recipe, key) => {
          return (
            <ListGroupItem action onClick={() => toggle(recipe)} key={key}>
              {recipe.name}
            </ListGroupItem>
          );
        })}
      </ListGroup>
    </>
  );
};

export default quickOrder;

// import React, { useState } from 'react';
// import {
//   ListGroup,
//   ListGroupItemHeading,
//   ListGroupItem,
//   Button,
//   Input,
// } from "reactstrap";

// const QuickOrder = ({ recipes, clearOrder }) => {
//   const [email, setEmail] = useState('');

//   const collectEmail = (event) => {
//     setEmail(event.target.value);
//   };

//   const generateOrder = (recipes) => {
//     const listContents = recipes
//       .map((recipe, index) => `${index + 1}. ${recipe.name}`)
//       .join("\n");
//     console.log(listContents);
//   };

//   const clearCurrentOrderList = () => {
//     clearOrder();
//   };

//   return (
//     <div>
//       <ListGroup>
//         <ListGroupItemHeading>Quick Order</ListGroupItemHeading>
//         {/* Use Input component for email */}
//         <Input
//           type="email"
//           value={email}
//           onChange={collectEmail}
//           placeholder="Email"
//         />
//         <Button
//           onClick={() => {
//             generateOrder(recipes);
//             clearCurrentOrderList();
//           }}
//         >
//           Print Order
//         </Button>
//         {recipes.map((recipe, index) => (
//           <ListGroupItem key={index}>{recipe.name}</ListGroupItem>
//         ))}
//       </ListGroup>
//     </div>
//   );
// };

// export default QuickOrder;
