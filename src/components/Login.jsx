import React, { useRef } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { v4 as uuid4 } from "uuid";
import Chatting from "../assets/chatting.png";

const Login = ({ setId }) => {
  const idRef = useRef("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setId(idRef.current.value);
  };

  const createNewId = () => {
    setId(uuid4());
  };

  return (
    <React.Fragment>
      <Container className="mt-5 login">
        <div className="row">
          <div className="col-sm-8">
            <img src={Chatting} alt="" />
          </div>
          <div className="col-sm-4">
            <h3>Freee Chat App</h3>
            <p>No Signup Required</p>
            <Form onSubmit={handleSubmit}>
              <Form.Group>
                <Form.Label>Enter your Id</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="enter your id"
                  ref={idRef}
                  required
                ></Form.Control>
              </Form.Group>
              <Button type="submit" className="button">
                Login
              </Button>
              <Button className="ml-2 button" onClick={createNewId}>
                Create a new user ID
              </Button>
            </Form>
          </div>
        </div>
      </Container>
    </React.Fragment>
  );
};

export default Login;
