import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import "./customer.css";
import { useNavigate } from "react-router-dom";
function CustomerRegistration() {
  const navigate = useNavigate();
  const registerHandled = () => {
    navigate("/customerlogin");
  };
  return (
    <div className="customer_register">
      <h5 className='text-center mt-5 text-light'>Customer Register</h5>

      <Container>
        <Row className="customer_register_main">
          <Col>
            <FloatingLabel
              controlId="floatingInput"
              label="Customer Name"
              className="mb-3 mt-4"
            >
              <Form.Control type="text" placeholder="name@example.com" />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingPassword"
              label="Email ID"
              className="mb-3"
            >
              <Form.Control type="email" placeholder="Password" />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingPassword"
              label="Contact"
              className="mb-3"
            >
              <Form.Control type="text" placeholder="Password" />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingPassword"
              label="Password"
              className="mb-3"
            >
              <Form.Control type="password" placeholder="Password" />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingInput"
              label="District"
              className="mb-3 mt-4"
            >
              <Form.Control type="text" placeholder="name@example.com" />
            </FloatingLabel>
          </Col>

          <Col className=" customer_register_form">
            <FloatingLabel
              controlId="floatingPassword"
              label="Conform Password"
              className="mb-3"
            >
              <Form.Control type="password" placeholder="Password" />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingInput"
              label="Delivery Address"
              className="mb-3"
            >
              <Form.Control type="text" placeholder="name@example.com" />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingInput"
              label="Address"
              className="mb-3"
            >
              <Form.Control type="text" placeholder="name@example.com" />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingInput"
              label="city"
              className="mb-3 mt-4"
            >
              <Form.Control type="text" placeholder="name@example.com" />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingInput"
              label="Pin code"
              className="mb-3"
            >
              <Form.Control type="text" placeholder="name@example.com" />
            </FloatingLabel>
            <button onClick={registerHandled} className="btn btn-primary mt-2">
              {" "}
              Register
            </button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default CustomerRegistration;
