
import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import { Button } from 'reactstrap';

export default (props) => {
  return <Button color="danger">Danger!</Button>;
};



// React
import { Modal, ModalBody, ModalHeader } from 'reactstrap';

<Modal isOpen={open} toggle={() => setOpen(false)}>
  <ModalHeader>
    Modal title
  </ModalHeader>
  <ModalBody>
    Modal body text goes here.
  </ModalBody>
</Modal>