import React, { useContext, useState, useCallback } from "react";
import { Form, InputGroup, Button } from "react-bootstrap";
import { ChatsContext } from "../Context/ChatsProvider";

const OpenChat = () => {
  const [message, setMessage] = useState("");

  const setRef = useCallback((node) => {
    if (node) {
      node.scrollIntoView({ smooth: true });
    }
  }, []);

  const { formattedChats, selectedChat, sendMessage } = useContext(
    ChatsContext
  );

  console.table(formattedChats);

  const handleSubmit = (event) => {
    event.preventDefault();
    sendMessage(
      selectedChat.recipients.map((recipient) => recipient.id),
      message
    );
    setMessage("");
  };

  return (
    <React.Fragment>
      <div className="flex-grow-1 overflow-auto chat-text">
        <div className="d-flex flex-column align-items-start justify-content-end px-3 ">
          {selectedChat.messages.map((message, index) => {
            const lastMessage = selectedChat.messages.length - 1 === index;
            return (
              <div
                ref={lastMessage ? setRef : null}
                key={index}
                className={`my-1 d-flex flex-column ${
                  message.fromMe
                    ? "align-self-end align-items-end"
                    : "align-items-start"
                }`}
              >
                <div
                  className={`rounded px-2 py-1 ${
                    message.fromMe ? "bg-primary text-white" : "border"
                  }`}
                >
                  {message.message}
                </div>
                <div
                  className={`text-muted small ${
                    message.fromMe ? "text-right" : ""
                  }`}
                >
                  {message.fromMe ? "You" : message.sender}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Form onSubmit={handleSubmit} className="bottom">
        <Form.Group>
          <InputGroup>
            <Form.Control
              type="text"
              placeholder="enter your message"
              // as="text"
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
