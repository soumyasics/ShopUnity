import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import "./deliveryagent.css";
import { useNavigate } from "react-router-dom";

function DeliveryAgentRegistration() {
  const navigate = useNavigate();
  const handleRegister = () => {
    navigate("/deliveryagentlogin");
  };
  return (
    <div className="delivery_agent_register">
      <h5 className="text-center mt-5 text-light">Delivery Agent Register</h5>
      <Container>
        <Row className="delivery_agent_register_main">
          <Col className=" delivery_agent_register_form">
            <FloatingLabel
              controlId="floatingInput"
              label="Agent Name"
              className="mb-3"
            >
              <Form.Control type="test" placeholder="name@example.com" />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingPassword"
              label="Email Id"
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
              controlId="floatingPassword"
              label="Conform Password"
              className="mb-3"
            >
              <Form.Control type="password" placeholder="Password" />
            </FloatingLabel>
          </Col>
          <Col>
            <FloatingLabel
              controlId="floatingInput"
              label="Delivery Areas"
              className="mb-3 mt-4"
            >
              <Form.Control type="text" placeholder="name@example.com" />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingPassword"
              label="Vehicle Type"
              className="mb-3"
            >
              <Form.Control type="text" placeholder="Password" />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingInput"
              label="Delivery Areas"
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
              label="License number"
              className="mb-3"
            >
              <Form.Control type="text" placeholder="name@example.com" />
            </FloatingLabel>

            <button onClick={handleRegister} className="btn btn-primary mt-5">
              {" "}
              Register
            </button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default DeliveryAgentRegistration;
