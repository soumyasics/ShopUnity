import React from 'react'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
// import img from '../../images/customer (3).png'
//import './customer.css'
import './CustomerLogin.css'
import { Link } from 'react-router-dom';
import img from '../../images/image 77.png'
import img2 from '../../images/Component 5.svg'

function CustomerLogin() {
  return (

    <div className=" CustomerLogin" >

      <div className="CustomerLogin-contain-div">

        <div>

          <img src={img} alt=" " className="Custom" />

        </div>

        <div className="CustomerLogin-inputcontain-div">


          <div>

            <h1 className="CustomerLogin-inputcontain-div-h1">Customer Login</h1>

          </div>

          <div>

            <p className="CustomerLogin-inputcontain-div-p">Username</p>
            <input type="text" placeholder="Username" className='CustomerLogin-inputcontain-div-inp'></input>
            <p className="CustomerLogin-inputcontain-div-p">Password</p>
            <input type="password" placeholder="Password" id="pword" className='CustomerLogin-inputcontain-div-inp'></input>
            <button className="CustomerLogin-inputcontain-div-pwordbutton"><img src={img2} alt=""/></button>
            <a href=" " alt=" " className="CustomerLogin-inputcontain-div-a" >Forgot Password?</a>
            <button className="CustomerLogin-inputcontain-div-button">Login</button>
            <p className='CustomerLogin-inputcontain-div-p-2'>Not a member?<Link to="/customerregistration" alt=" "> Sign up now</Link></p>
            

            

          </div>

        </div>

      </div>

    </div>

    // <div className='customer_login'>
    //   <h5 className='text-center mt-5'>Customer Login</h5>
    //   <Container>
    //     <Row className="customer_login_main">
    //       <Col>

    //       </Col>

    //       <Col className=" customer_login_form bg-transparent">
    //         <FloatingLabel
    //           controlId="floatingInput"
    //           label="Email address"
    //           className="mb-3 bg-transparent"
    //         >
    //           <Form.Control type="email" placeholder="name@example.com" />
    //         </FloatingLabel>
    //         <FloatingLabel controlId="floatingPassword" label="Password">
    //           <Form.Control type="password" placeholder="Password" />
    //         </FloatingLabel>
    //         <Link to="#" className="forgotpassword" style={{ float: "right" }} >forgot password</Link>

    //         <Link to="/customerhome" className="btn btn-primary mt-3"> Login</Link>

    //       </Col>
    //       <label className='text-center'>not a member? <Link to={'/customerregistration'}>Sign up now</Link></label>
    //     </Row>
    //   </Container>
    // </div>


  )
}

export default CustomerLogin
