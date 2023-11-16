import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import PutRecipe from "../firebase/putRecipe.js";
import deleteRecipe from "../firebase/deleteRecipe.js";

/**
 *
 * @param {Recipe} meal
 * @returns
 */
function RecipeDetails({ meal, showDetails, toggle }) {
  function saveData() {
    /*
        TODO: save recipe into user's data
        */
    const savedMeal = meal;
    savedMeal.isSaved = true;
    PutRecipe("savedRecipes", savedMeal);
    toggle(); //close modal
  }

  function unsaveRecipe() {
    meal.isSaved = false;
    //close the modal and remove the recipe
    toggle();
    deleteRecipe("savedRecipes", String(meal.id));
  }

  let buttonOptions;

  //conditionally render the buttons at the bottom of the modal depending on if the recipe is saved or not
  if (meal.isSaved) {
    buttonOptions = (
      <>
        <Button color="primary" onClick={unsaveRecipe}>
          Unsave recipe
        </Button>
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
      </>
    );
  } else {
    buttonOptions = (
      <>
        <Button color="primary" onClick={saveData}>
          Save Recipe
        </Button>
        <Button color="secondary" onClick={toggle}>
          Close
        </Button>
      </>
    );
  }

  return (
    <Modal isOpen={showDetails} toggle={toggle}>
      <ModalHeader toggle={toggle}>{meal.name}</ModalHeader>
      <ModalBody>{meal.summary}</ModalBody>
      <ModalFooter>{buttonOptions}</ModalFooter>
    </Modal>
  );
}

export default RecipeDetails;
