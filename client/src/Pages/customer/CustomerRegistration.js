import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import './CustomerRegister.css';
import { useNavigate } from "react-router-dom";
import img from '../../images/image 75.png'
import img2 from '../../images/Component 5.svg'

function CustomerRegistration() {

  const navigate = useNavigate();
  const registerHandled = () => {
    navigate("/customerlogin");
  };

  return (

    <div className="CustomerRegistration">

    <div className="CustomerRegistration-contain">

      <div className="mt-5">

        <img src={img} alt=""/>

      </div>

      <div className="CustomerRegistration-input-div">

        <h1 className="CustomerRegistration-input-div-h1">Customer Register</h1>
        
        <div className="CustomerRegistration-input-div-div">

          <div className="CustomerRegistration-input-div-leftdiv">

            <div>

              <h1 className="CustomerRegistration-input-div-leftdiv-h1">Name</h1>
              <input type="text" className="CustomerRegistration-input-div-leftdiv-inp" placeholder="Name"></input>

            </div>

            <div>

              <h1 className="CustomerRegistration-input-div-leftdiv-h1">Gender</h1>
              <div className="CustomerRegistration-input-radio">
                <input type="Radio" className="CustomerRegistration-input-div-leftdiv-inp-radio" ></input>
                <label className="mt-2">M</label>
                <input type="Radio" className="CustomerRegistration-input-div-leftdiv-inp-radio" ></input>
                <label className="mt-2">F</label>
                <input type="Radio" className="CustomerRegistration-input-div-leftdiv-inp-radio" ></input>
                <label className="mt-2">Other</label>
              </div>
            </div>

            <div>
              
              <h1 className="CustomerRegistration-input-div-leftdiv-h1">Address</h1>
              <input type="select" className="CustomerRegistration-input-div-leftdiv-inp" placeholder="Address"></input>

            </div>

            <div>

              <h1 className="CustomerRegistration-input-div-leftdiv-h1">District</h1>
              <select className="CustomerRegistration-input-div-leftdiv-inp">
                <option>Select Your District</option>
              </select>
            </div>

            <div>
              
              <h1 className="CustomerRegistration-input-div-leftdiv-h1">City</h1>
              <input type="text" className="CustomerRegistration-input-div-leftdiv-inp" placeholder="City"></input>

            </div>

          </div>

          <div className="CustomerRegistration-input-div-rightdiv">

            <div>

              <h1 className="CustomerRegistration-input-div-leftdiv-h1">Pincode</h1>
              <input type="text" className="CustomerRegistration-input-div-leftdiv-inp" placeholder="Pincode"></input>

            </div>

            <div>

              <h1 className="CustomerRegistration-input-div-leftdiv-h1">Contact Number</h1>
              <input type="text" className="CustomerRegistration-input-div-leftdiv-inp" placeholder="Contact Number"></input>

            </div>

            <div>

              <h1 className="CustomerRegistration-input-div-leftdiv-h1">Email ID</h1>
              <input type="select" className="CustomerRegistration-input-div-leftdiv-inp" placeholder="Email Id"></input>

            </div>

            <div>

              <h1 className="CustomerRegistration-input-div-leftdiv-h1">Password</h1>
              <input type="text" className="CustomerRegistration-input-div-leftdiv-inp" placeholder="Password"></input>
              <button className="CustomerRegistration-inputcontain-div-pwordbutton"><img src={img2} alt=""/></button>

            </div>

            <div>

              <h1 className="CustomerRegistration-input-div-leftdiv-h1">Confirm Password </h1>
              <input type="text" className="CustomerRegistration-input-div-leftdiv-inp" placeholder="Re-enter Password"></input>
              <button className="CustomerRegistration-inputcontain-div-pwordbutton"><img src={img2} alt=""/></button>
              
            </div>

          </div>
          
        </div>

        <button className="CustomerRegistration-input-div-button">Register</button>
        <p className="CustomerRegistration-input-div-p">Already have an account? <a href=" " alt="">Log in</a></p>
        
      </div>

    </div>
    

  </div>



    // <div className="customer_register">
    //   <h5 className='text-center mt-5 text-light'>Customer Register</h5>

    //   <Container>
    //     <Row className="customer_register_main">
    //       <Col>
    //         <FloatingLabel
    //           controlId="floatingInput"
    //           label="Customer Name"
    //           className="mb-3 mt-4"
    //         >
    //           <Form.Control type="text" placeholder="name@example.com" />
    //         </FloatingLabel>
    //         <FloatingLabel
    //           controlId="floatingPassword"
    //           label="Email ID"
    //           className="mb-3"
    //         >
    //           <Form.Control type="email" placeholder="Password" />
    //         </FloatingLabel>
    //         <FloatingLabel
    //           controlId="floatingPassword"
    //           label="Contact"
    //           className="mb-3"
    //         >
    //           <Form.Control type="text" placeholder="Password" />
    //         </FloatingLabel>
    //         <FloatingLabel
    //           controlId="floatingPassword"
    //           label="Password"
    //           className="mb-3"
    //         >
    //           <Form.Control type="password" placeholder="Password" />
    //         </FloatingLabel>
    //         <FloatingLabel
    //           controlId="floatingInput"
    //           label="District"
    //           className="mb-3 mt-4"
    //         >
    //           <Form.Control type="text" placeholder="name@example.com" />
    //         </FloatingLabel>
    //       </Col>

    //       <Col className=" customer_register_form">
    //         <FloatingLabel
    //           controlId="floatingPassword"
    //           label="Conform Password"
    //           className="mb-3"
    //         >
    //           <Form.Control type="password" placeholder="Password" />
    //         </FloatingLabel>
    //         <FloatingLabel
    //           controlId="floatingInput"
    //           label="Delivery Address"
    //           className="mb-3"
    //         >
    //           <Form.Control type="text" placeholder="name@example.com" />
    //         </FloatingLabel>
    //         <FloatingLabel
    //           controlId="floatingInput"
    //           label="Address"
    //           className="mb-3"
    //         >
    //           <Form.Control type="text" placeholder="name@example.com" />
    //         </FloatingLabel>
    //         <FloatingLabel
    //           controlId="floatingInput"
    //           label="city"
    //           className="mb-3 mt-4"
    //         >
    //           <Form.Control type="text" placeholder="name@example.com" />
    //         </FloatingLabel>
    //         <FloatingLabel
    //           controlId="floatingInput"
    //           label="Pin code"
    //           className="mb-3"
    //         >
    //           <Form.Control type="text" placeholder="name@example.com" />
    //         </FloatingLabel>
    //         <button onClick={registerHandled} className="btn btn-primary mt-2">
    //           {" "}
    //           Register
    //         </button>
    //       </Col>
    //     </Row>
    //   </Container>
    // </div>
  );
}

export default CustomerRegistration;
