import React, { useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { toast } from "react-toastify";
import { useContacts } from "../Context/ContactsProvider";
import { useConversations } from "../Context/ConversationsProvider";

export default function NewConversationModal({ closeModal }) {
  const [selectedContactIds, setSelectedContactIds] = useState([]);
  const { contacts } = useContacts();
  const { createConversation } = useConversations();

  function handleSubmit(e) {
    e.preventDefault();
    if (selectedContactIds.length === 0) {
      toast.error("Add atleast one contact");
      return;
    }
    createConversation(selectedContactIds);
    closeModal();
  }

  function handleCheckboxChange(contactId) {
    setSelectedContactIds((prevSelectedContactIds) => {
      if (prevSelectedContactIds.includes(contactId)) {
        return prevSelectedContactIds.filter((prevId) => {
          return contactId !== prevId;
        });
      } else {
        return [...prevSelectedContactIds, contactId];
      }
    });
  }

  return (
    <>
      <Modal.Header closeButton>Create Chat</Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          {contacts.map((contact) => (
            <Form.Group controlId={contact.id} key={contact.id}>
              <Form.Check
                type="checkbox"
                value={selectedContactIds.includes(contact.id)}
                label={contact.name}
                onChange={() => handleCheckboxChange(contact.id)}
              />
            </Form.Group>
          ))}
          <div className="text-center mt-4">
            <Button type="submit" className="button w-100">
              Create
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </>
  );
}
