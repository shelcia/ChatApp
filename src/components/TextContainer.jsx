import React from "react";

const TextContainer = ({ users }) => (
  <div className="container mt-5">
    <div>
      <h2 style={{ color: "dodgerblue" }}>
        <u>React Chat App</u>
      </h2>
    </div>
    {users ? (
      <div>
        <h4 className="mt-5">People currently chatting:</h4>
        <div className="container">
          <ul className="list-group">
            {users.map(({ name }) => (
              <li key={name} className="list-item">
                {name}
                {/* <img alt="Online Icon" src={onlineIcon}/> */}
              </li>
            ))}
          </ul>
        </div>
      </div>
    ) : null}
  </div>
);

export default TextContainer;
