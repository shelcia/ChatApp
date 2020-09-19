import React, { useContext, useState } from "react";
import { Form, Modal, Button } from "react-bootstrap";
import { ContactsContext } from "../Context/ContactsProvider";
import { ChatsContext } from "../Context/ChatsProvider";

const NewChattModal = ({ closeModal }) => {
  const [selectedContactIds, setSelectedContactIds] = useState([]);

  const { contacts } = useContext(ContactsContext);
  const { createChats } = useContext(ChatsContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    createChats(selectedContactIds);
    closeModal();
  };

  const handleCheckBox = (contactId) => {
    setSelectedContactIds((prevSelectedContactIds) => {
      if (prevSelectedContactIds.includes(contactId)) {
        return prevSelectedContactIds.filter((prevId) => {
          return prevId !== contactId;
        });
      } else {
        return [...prevSelectedContactIds, contactId];
      }
    });
  };

  return (
    <React.Fragment>
      <Modal.Header closeButton>
        <h4>Chats</h4>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          {contacts.map((contact) => (
            <Form.Group controlId={contact.id} key={contact.id}>
              <Form.Check
                type="checkbox"
                value={selectedContactIds.includes(contact.id)}
                label={contact.name}
                onChange={() => handleCheckBox(contact.id)}
              ></Form.Check>
            </Form.Group>
          ))}

          <Button type="submit">Create</Button>
        </Form>
      </Modal.Body>
    </React.Fragment>
  );
};

export default NewChattModal;
