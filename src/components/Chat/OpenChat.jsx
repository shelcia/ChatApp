import React, { useContext, useState } from "react";
import { Form, InputGroup, Button } from "react-bootstrap";
import { ChatsContext } from "../Context/ChatsProvider";

const OpenChat = () => {
  const [message, setMessage] = useState("");

  const { formattedChats, selectedChat, sendMessage } = useContext(
    ChatsContext
  );

  console.log(formattedChats);

  const handleSubmit = (event) => {
    event.preventDefault();
    sendMessage(
      selectedChat.recipients.map((recipient) => recipient.id, message)
    );
    setMessage("");
  };

  return (
    <React.Fragment>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <InputGroup>
            <Form.Control
              as="textarea"
              required
              value={message}
              onChange={(event) => setMessage(event.target.value)}
            ></Form.Control>
            <InputGroup.Append>
              <Button type="submit"> Send</Button>
            </InputGroup.Append>
          </InputGroup>
        </Form.Group>
      </Form>
    </React.Fragment>
  );
};

export default OpenChat;
