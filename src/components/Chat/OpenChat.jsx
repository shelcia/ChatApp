import React, { useContext, useState, useCallback } from "react";
import { Form, InputGroup, Button } from "react-bootstrap";
import { ChatsContext } from "../Context/ChatsProvider";
import Picker from "emoji-picker-react";

const OpenChat = () => {
  const [message, setMessage] = useState("");
  const [chosenEmoji, setChosenEmoji] = useState(null);
  const [showEmojiBoard, setShowEmojiBoard] = useState(false);

  const setRef = useCallback((node) => {
    if (node) {
      node.scrollIntoView({ smooth: true });
    }
  }, []);

  const { formattedChats, selectedChat, sendMessage } = useContext(
    ChatsContext
  );

  console.table(formattedChats);
  console.log(message);

  const onEmojiClick = (event, emojiObject) => {
    setChosenEmoji(emojiObject);
  };

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
      <div className="chat-text-container">
        {typeof selectedChat !== "undefined" && (
          <div className="chat-text">
            {selectedChat.messages.map((message, index) => {
              const lastMessage = selectedChat.messages.length - 1 === index;
              return (
                <div
                  ref={lastMessage ? setRef : null}
                  key={index}
                  className={`text${
                    message.fromMe ? "-sameUser" : "-diffUser"
                  }`}
                >
                  <div
                    // className={`message ${
                    //   message.fromMe ? "-sameUser" : "border"
                    // }`}
                    className="message"
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
        )}
      </div>
      <Form onSubmit={handleSubmit} className="bottom">
        {showEmojiBoard && (
          <Picker
            onEmojiClick={onEmojiClick}
            onClick={() =>
              setMessage((prevMessage) => prevMessage.concat(chosenEmoji.emoji))
            }
          />
        )}
        {chosenEmoji ? <span>You chose: {chosenEmoji.emoji}</span> : null}
        <Form.Group>
          <InputGroup>
            <Form.Control
              type="text"
              placeholder="enter your message"
              required
              value={message}
              onChange={(event) => setMessage(event.target.value)}
            ></Form.Control>
            <Button
              className="fa button"
              onClick={() => setShowEmojiBoard(!showEmojiBoard)}
            >
              &#xf118;
            </Button>
            <InputGroup.Append>
              <Button type="submit" className="button">
                Send
              </Button>
            </InputGroup.Append>
          </InputGroup>
        </Form.Group>
      </Form>
    </React.Fragment>
  );
};

export default OpenChat;
