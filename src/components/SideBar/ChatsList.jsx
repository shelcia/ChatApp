import React, { useContext } from "react";
import { ListGroup } from "react-bootstrap";
import { ChatContext } from "../Context/ContactsProvider";

const Chats = () => {
  const { chats } = useContext(ChatContext);
  console.log(chats);

  return (
    <React.Fragment>
      <ListGroup variant="flush">
        {/* {chats.map((chat) => (
          <ListGroup.Item key={chat.id}>{contact.name}</ListGroup.Item>
        ))} */}
      </ListGroup>
    </React.Fragment>
  );
};

export default Chats;
