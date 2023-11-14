import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

function RecipeDetails({meal}) {
  const [modal, setModal] = useState(false);

  const toggle = () => {setModal(!modal)};

    function saveData() {
        console.log("saving recipe "+meal.mealName);
        
        /*
        TODO: use firebase to store this recipe in the user's saved recipes collection
        get user state first and log user in
        */


        toggle(); //close modal
    }

  return (
    <div>
      <Button color="primary" onClick={toggle}>
        Details
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>{meal.mealName}</ModalHeader>
        <ModalBody>{meal.summary}</ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={saveData}>
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

