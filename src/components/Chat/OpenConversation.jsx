import React, { useState, useCallback } from "react";
import { Form, InputGroup, Button } from "react-bootstrap";
import { useConversations } from "../Context/ConversationsProvider";

export default function OpenConversation() {
  const [text, setText] = useState("");
  const setRef = useCallback((node) => {
    if (node) {
      node.scrollIntoView({ smooth: true });
    }
  }, []);
  const { sendMessage, selectedConversation } = useConversations();

  function handleSubmit(e) {
    e.preventDefault();

    sendMessage(
      selectedConversation.recipients.map((r) => r.id),
      text
    );
    setText("");
  }

  return (
    <div className="chat-text-container">
      <div className="chat-text">
        {selectedConversation.messages.map((message, index) => {
          const lastMessage =
            selectedConversation.messages.length - 1 === index;
          return (
            <div
              ref={lastMessage ? setRef : null}
              key={index}
              className={`text${message.fromMe ? "-sameUser" : "-diffUser"}`}
            >
              <div className="message">{message.text}</div>
              <div
                className={`text-muted small ${
                  message.fromMe ? "text-right" : ""
                }`}
              >
                {message.fromMe ? "You" : message.senderName}
              </div>
            </div>
          );
        })}
      </div>
      <Form onSubmit={handleSubmit} className="bottom">
        <Form.Group className="m-2">
          <InputGroup>
            <Form.Control
              type="text"
              required
              placeholder="enter your message"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <InputGroup.Append>
              <Button type="submit" className="button">
                Send
              </Button>
            </InputGroup.Append>
          </InputGroup>
        </Form.Group>
      </Form>
    </div>
  );
}
