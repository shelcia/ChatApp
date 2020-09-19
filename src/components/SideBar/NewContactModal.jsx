import React, { useRef, useContext } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { ContactsContext } from "../Context/ContactsProvider";

const NewContactModal = ({ closeModal }) => {
  const idRef = useRef("");
  const nameRef = useRef("");

  const { createContact } = useContext(ContactsContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    createContact(idRef.current.value, nameRef.current.value);
    closeModal();
  };

  return (
    <React.Fragment>
      <Modal.Header closeButton>
        <h4>Contacts</h4>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Id</Form.Label>
            <Form.Control
              type="text"
              placeholder="enter"
              ref={idRef}
              required
            ></Form.Control>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="enter"
              ref={nameRef}
              required
            ></Form.Control>
          </Form.Group>
          <Button type="submit">Create</Button>
        </Form>
      </Modal.Body>
    </React.Fragment>
  );
};

export default NewContactModal;
