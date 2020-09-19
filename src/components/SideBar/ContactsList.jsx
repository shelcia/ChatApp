import React, { useContext } from "react";
import { ListGroup } from "react-bootstrap";
import { ContactsContext } from "../Context/ContactsProvider";

const Contacts = () => {
  const { contacts } = useContext(ContactsContext);
  console.log(contacts);

  return (
    <React.Fragment>
      <ListGroup variant="flush">
        {contacts.map((contact) => (
          <ListGroup.Item key={contact.id}>{contact.name}</ListGroup.Item>
        ))}
      </ListGroup>
    </React.Fragment>
  );
};

export default Contacts;
