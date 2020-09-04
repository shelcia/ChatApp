import React from "react";

const InfoBar = ({ room }) => (
  <div className="row border">
    <div className="col-sm-9">
      <p>
        Room : <em style={{ color: "dodgerblue" }}>{room}</em>
      </p>
    </div>
    <div className="col-sm-3">
      <a href="/">
        <button type="button" className="btn btn-danger">
          close
        </button>
      </a>
    </div>
  </div>
);

export default InfoBar;
