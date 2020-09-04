import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  return (
    <React.Fragment>
      <div className="container mt-5">
        <h2 className="text-center mb-3">Join React Chat App</h2>
        <form>
          <input
            className="form-control mb-2"
            type="text"
            placeholder="enter name"
            onChange={(event) => setName(event.target.value)}
          />
          <input
            className="form-control"
            type="text"
            placeholder="enter room"
            onChange={(event) => setRoom(event.target.value)}
          />
          <Link
            onClick={(event) =>
              !name || !room ? event.preventDefault() : null
            }
            to={`/chat?name=${name}&room=${room}`}
          >
            <div className="text-center">
              <button type="button" className="btn btn-primary mt-3">
                Enter
              </button>
            </div>
          </Link>
        </form>
      </div>
    </React.Fragment>
  );
};

export default Login;
