import React, { useRef } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { v4 as uuidV4 } from "uuid";
import Img from "../assets/img.svg";

export default function Login({ onIdSubmit }) {
  const idRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    onIdSubmit(idRef.current.value);
  };

  function createNewId() {
    onIdSubmit(uuidV4());
  }

  return (
    <Container className="login">
      <div className="row">
        <div className="col-sm-8 d-flex align-items-center">
          <img
            // src="https://cdn.discordapp.com/attachments/795010536365752320/799761776824418354/bg4.png"
            src={Img}
            alt=""
            style={{ maxHeight: "100vh", maxWidth: "90%" }}
          />
        </div>
        <div className="col-sm-4 d-flex flex-column justify-content-center">
          <div className="ps-0">
            <h1 className="text-white mb-2">Chat App</h1>
            <p className="text-blue mb-0">
              <i className="material-icons" style={{ fontSize: "18px" }}>
                check
              </i>{" "}
              for Instant Messaging
            </p>
            <p className="text-blue mb-0">
              <i className="material-icons" style={{ fontSize: "18px" }}>
                check
              </i>{" "}
              No Signup Required
            </p>
            <p className="text-blue">
              <i className="material-icons" style={{ fontSize: "18px" }}>
                check
              </i>{" "}
              Multiple Group Chats with no limit on members
            </p>
          </div>
          <Form onSubmit={handleSubmit} className="w-100 mt-2">
            <Form.Group>
              <Form.Label className="text-white">Enter Your Id</Form.Label>
              <Form.Control
                type="text"
                ref={idRef}
                required
                placeholder="Enter ID"
              />
            </Form.Group>
            <Button type="submit" className="me-2 mt-3 button">
              Login
            </Button>
            <Button onClick={createNewId} className="button mt-3">
              Create A New Id
            </Button>
          </Form>
        </div>
      </div>
    </Container>
  );
}
