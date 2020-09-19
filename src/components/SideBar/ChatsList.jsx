import React, { useContext } from "react";
import { ListGroup } from "react-bootstrap";
import { ChatsContext } from "../Context/ChatsProvider";

const Chats = () => {
  const { formattedChats } = useContext(ChatsContext);

  return (
    <React.Fragment>
      <ListGroup variant="flush">
        {formattedChats.map((chat, index) => (
          <ListGroup.Item key={index}>
            {chat.recipients.map((recipients) => recipients.name).join(", ")}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </React.Fragment>
  );
};

export default Chats;
