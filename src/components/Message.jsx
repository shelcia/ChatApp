import React from "react";

import ReactEmoji from "react-emoji";

const Message = ({ message: { text, user }, name }) => {
  let isSentByCurrentUser = false;

  const trimmedName = name.trim().toLowerCase();

  if (user === trimmedName) {
    isSentByCurrentUser = true;
  }

  return isSentByCurrentUser ? (
    <div
      className="btn btn-info mt-2 mb-2 text-right"
      style={{
        marginLeft: "100%",
        transform: "translateX(-100%)",
        minWidth: "100px",
      }}
    >
      <p>{trimmedName}</p>
      <h6>{ReactEmoji.emojify(text)}</h6>
    </div>
  ) : (
    <div className="btn btn-warning mt-2 mb-2 text-left">
      <p>{user}</p>
      <h6>{ReactEmoji.emojify(text)}</h6>
    </div>
  );
};

export default Message;
