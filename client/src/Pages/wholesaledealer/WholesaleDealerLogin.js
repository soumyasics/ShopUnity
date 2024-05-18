import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import "./wholesale.css";
import { Link } from "react-router-dom";

function WholesaleDealerLogin() {
  return (
    <div className="wholesale_dealer_login ">
    <h5 className='text-center mt-5 text-light'>Wholesale dealer Login</h5>
      <Container>
        <Row className="wholesale_dealer_login_main">
          <Col>
            
          </Col>

          <Col className=" wholesale_dealer_login_form">
            <FloatingLabel
              controlId="floatingInput"
              label="Email address"
              className="mb-3"
            >
              <Form.Control type="email" placeholder="name@example.com" />
            </FloatingLabel>
            <FloatingLabel controlId="floatingPassword" label="Password">
              <Form.Control type="password" placeholder="Password" />
            </FloatingLabel>
            <Link to="" className="forgotpassword" style={{float:"right"}} >forgot password</Link>
            <Link to="/wholesaledealerhome" className="btn btn-primary mt-3 "> Login</Link>

          </Col>
          <label className='text-center text-light'>not a member? <Link to={'/wholesaledealerregistration'}>Sign up now</Link></label>

        </Row>
      </Container>
    </div>
  );
}

export default WholesaleDealerLogin;
