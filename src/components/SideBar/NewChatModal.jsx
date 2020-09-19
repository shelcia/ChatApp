import React, { useRef } from "react";
import { Form, Modal } from "react-bootstrap";

const NewChattModal = ({ closeModal }) => {
  const idRef = useRef("");

  return (
    <React.Fragment>
      <Modal.Header closeButton>
        <h4>Chat</h4>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="enter"
              ref={idRef}
            ></Form.Control>
          </Form.Group>
        </Form>
      </Modal.Body>
    </React.Fragment>
  );
};

export default NewChattModal;
