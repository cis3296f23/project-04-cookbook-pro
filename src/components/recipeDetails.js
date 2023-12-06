/**
 * Renders detailed information about a recipe within a modal.
 * @param {Object} props - React props containing recipe details and display options.
 * @param {Object} props.meal - The recipe details to display (name, image, summary, etc.).
 * @param {boolean} props.showDetails - Indicates whether to display the recipe details modal.
 * @param {function} props.toggle - Function to toggle the display of the modal.
 * @param {JSX.Element} [props.buttonOptions] - Optional buttons or actions to display in the modal footer.
 * @returns {JSX.Element} - The rendered JSX for the recipe details modal.
 */import React from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Container,
} from "reactstrap";
import PutRecipe from "../firebase/putRecipe.js";
import deleteRecipe from "../firebase/deleteRecipe.js";

/**
 * the parent of this component creates the button options
 * @param {Recipe} meal
 * @returns {JSX.Element} The rendered JSX for the recipe details.
 */
function RecipeDetails({ meal, showDetails, toggle, buttonOptions }) {
  // Logic to set default buttonOptions if not provided

  if (!buttonOptions) {
    buttonOptions = (
      <Button color="secondary" onClick={toggle}>
        Close
      </Button>
    );
  }

  return (
    <Modal isOpen={showDetails} toggle={toggle}>
      <ModalHeader toggle={toggle}>{meal.name}</ModalHeader>
      <Container className="d-flex justify-content-center">
        <img src={meal.image} alt={`${meal.name} image`} />
      </Container>
      <ModalBody>{String(meal.summary).replace(/<[^>]*>/g, "")}</ModalBody>
      <ModalFooter>{buttonOptions}</ModalFooter>
    </Modal>
  );
}

export default RecipeDetails;
