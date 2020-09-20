import React, { useContext } from "react";
import { ListGroup } from "react-bootstrap";
import { ChatsContext } from "../Context/ChatsProvider";

const Chats = () => {
  const { formattedChats, setSelectedChatIndex } = useContext(ChatsContext);

  return (
    <React.Fragment>
      <ListGroup variant="flush">
        {formattedChats.map((chat, index) => (
          <ListGroup.Item
            key={index}
            action
            active={chat.selected}
            onClick={() => setSelectedChatIndex(index)}
          >
            {chat.recipients.map((recipients) => recipients.name).join(", ")}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </React.Fragment>
  );
};

export default Chats;
