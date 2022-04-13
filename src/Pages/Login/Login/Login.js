import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const Login = () => {
  
  const emailRef = useRef("");
  const passwordRef = useRef("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    console.log(email, password);
  };
  

  return (
    <div>
      <h2 className="text-center">Login</h2>
      <div className="row w-50 mx-auto">
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              required
              ref={emailRef}
              type="email"
              placeholder="Enter email"
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              required
              ref={passwordRef}
              type="password"
              placeholder="Password"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button className="mb-3" variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        <p>
          New to Genius Car ?{" "}
          <Link
            className="text-danger text-text-decoration-none pe-auto"
             to='/register'
          >
            Register Now
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
