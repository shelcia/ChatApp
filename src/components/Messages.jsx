import React from "react";
import ScrollToBottom from "react-scroll-to-bottom";
import Message from "./Message";

const Messages = ({ messages, name }) => (
  <ScrollToBottom className="container">
    <div style={{ height: "300px" }}>
      {messages.map((message, i) => (
        <div key={i}>
          <Message message={message} name={name} />
        </div>
      ))}
    </div>
  </ScrollToBottom>
);

export default Messages;
