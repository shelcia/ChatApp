import React, { useRef } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { v4 as uuidV4 } from "uuid";
import Chatting from "../assets/chatting.png";

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
    <Container className="mt-5 login">
      <div className="row">
        <div className="col-sm-8">
          <img src={Chatting} alt="" />
        </div>
        <div className="col-sm-4">
          <h3>Freee Chat App</h3>
          <p>No Signup Required</p>
          <Form onSubmit={handleSubmit} className="w-100">
            <Form.Group>
              <Form.Label>Enter Your Id</Form.Label>
              <Form.Control
                type="text"
                ref={idRef}
                required
                placeholder="Enter ID"
              />
            </Form.Group>
            <Button type="submit" className="mr-2 button">
              Login
            </Button>
            <Button onClick={createNewId} className="button">
              Create A New Id
            </Button>
          </Form>
        </div>
      </div>
    </Container>
  );
}
