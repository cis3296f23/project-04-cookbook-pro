import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

function RecipeDetails(meal) {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="primary" onClick={toggle}>
        Details
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>{meal.meal.mealName}</ModalHeader>
        <ModalBody>{meal.meal.mealID}</ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Save Recipe
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Don't Save
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default RecipeDetails;
