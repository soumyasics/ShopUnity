import React from 'react'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
// import img from '../../images/customer (3).png'
import './customer.css'
import { Link } from 'react-router-dom';

function CustomerLogin() {
  return (
    <div className='customer_login'>
    <h5 className='text-center mt-5'>Customer Login</h5>
    <Container>
    <Row className="customer_login_main">
      <Col>
       
      </Col>

      <Col className=" customer_login_form bg-transparent">
        <FloatingLabel
          controlId="floatingInput"
          label="Email address"
          className="mb-3 bg-transparent"
        >
          <Form.Control type="email" placeholder="name@example.com" />
        </FloatingLabel>
        <FloatingLabel controlId="floatingPassword" label="Password">
          <Form.Control type="password" placeholder="Password" />
        </FloatingLabel>
        <Link to="#" className="forgotpassword" style={{float:"right"}} >forgot password</Link>

        <Link to="/customerhome" className="btn btn-primary mt-3"> Login</Link>

      </Col>
      <label className='text-center'>not a member? <Link to={'/customerregistration'}>Sign up now</Link></label>
    </Row>
  </Container>
    </div>
  )
}

export default CustomerLogin
