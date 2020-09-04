import React from "react";

const Input = ({ setMessage, sendMessage, message }) => (
  <div className="row mt-5">
    <div className="col-sm-9">
      <input
        className="form-control"
        type="text"
        placeholder="Type a message..."
        value={message}
        onChange={({ target: { value } }) => setMessage(value)}
        onKeyPress={(event) =>
          event.key === "Enter" ? sendMessage(event) : null
        }
      />
    </div>
    <div className="col-sm-3">
      <button className="btn btn-primary" onClick={(e) => sendMessage(e)}>
        Send
      </button>
    </div>
  </div>
);

export default Input;
