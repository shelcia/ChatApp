import React from "react";

const EmptyChat = () => {
  return (
    <React.Fragment>
      <div
        className="d-flex justify-content-center align-items-center w-100 text-white flex-column"
        style={{ height: "70vh" }}
      >
        <h1>
          Your chatbox is empty
          <span role="img" aria-label="">
            🥺🥺🥺
          </span>
        </h1>
        <div className="mt-4 ml-5 text-blue w-50">
          <p className="mb-1">
            <i className="material-icons pr-2" style={{ fontSize: "18px" }}>
              check
            </i>
            Share your <b>id</b> with your friends
          </p>
          <p className="mb-1">
            <i className="material-icons pr-2" style={{ fontSize: "18px" }}>
              check
            </i>
            Get their <b>id</b> and create contacts
          </p>
          <p className="mb-1">
            <i className="material-icons pr-2" style={{ fontSize: "18px" }}>
              check
            </i>
            Now you can either create private or group chat rooms by selecting
            your Friends name
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default EmptyChat;
