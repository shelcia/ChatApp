import React, { useRef } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { v4 as uuid4 } from "uuid";

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
      <Container className="mt-5">
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
          <Button type="submit">Login</Button>
          <Button className="ml-2" onClick={createNewId}>
            Create a new user ID
          </Button>
        </Form>
      </Container>

      {/* <div className="container mt-5">
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
      </div> */}
    </React.Fragment>
  );
};

export default Login;
