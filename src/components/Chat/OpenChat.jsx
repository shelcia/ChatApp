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
  console.log(chosenEmoji);

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
      <div className="flex-grow-1 overflow-auto chat-text">
        {typeof selectedChat !== "undefined" && (
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
        )}
      </div>
      <Form onSubmit={handleSubmit} className="bottom">
        {showEmojiBoard && <Picker onEmojiClick={onEmojiClick} />}
        {chosenEmoji ? <span>You chose: {chosenEmoji.emoji}</span> : null}
        {/* {chosenEmoji ? setMessage(chosenEmoji.emoji) : null} */}
        {/* <Picker onEmojiClick={onEmojiClick} /> */}
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
            <i
              style={{
                fontSize: "24px",
                display: "flex",
                alignItems: "center",
                padding: "0px 10px",
                color: "white",
                backgroundColor: "#007bff",
                cursor: "pointer",
              }}
              className="fa"
              onClick={() => setShowEmojiBoard(!showEmojiBoard)}
            >
              &#xf118;
            </i>
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
