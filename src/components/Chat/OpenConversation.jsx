import React, { useState, useCallback } from "react";
import { Form, InputGroup, Button } from "react-bootstrap";
import { useConversations } from "../Context/ConversationsProvider";
import Picker from "emoji-picker-react";
import ReactEmoji from "react-emoji";

export default function OpenConversation() {
  const [text, setText] = useState("");
  const [showEmojiBoard, setShowEmojiBoard] = useState(false);

  const setRef = useCallback((node) => {
    if (node) {
      node.scrollIntoView({ smooth: true });
    }
  }, []);

  const onEmojiClick = (event, emojiObject) => {
    setText((text) => text.concat(emojiObject.emoji));
    console.log(emojiObject);
  };

  const { sendMessage, selectedConversation } = useConversations();

  const handleSubmit = (event) => {
    event.preventDefault();
    sendMessage(
      selectedConversation.recipients.map((r) => r.id),
      text
    );
    setText("");
  };

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
              <div className="message">{ReactEmoji.emojify(message.text)}</div>
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
        {showEmojiBoard && <Picker onEmojiClick={onEmojiClick} />}
        <Form.Group className="m-2">
          <InputGroup>
            <Form.Control
              type="text"
              required
              placeholder="enter your message"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <Button
              className="material-icons button"
              onClick={() => setShowEmojiBoard(!showEmojiBoard)}
            >
              insert_emoticon
            </Button>
            <InputGroup.Append>
              <Button type="submit" className="button ml-1">
                Send
              </Button>
            </InputGroup.Append>
          </InputGroup>
        </Form.Group>
      </Form>
    </div>
  );
}
