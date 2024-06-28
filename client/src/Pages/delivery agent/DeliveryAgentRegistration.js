import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import "./deliveryagent.css";
import { useNavigate } from "react-router-dom";
import img from '../../images/image 72.png'

function DeliveryAgentRegistration() {
  const navigate = useNavigate();
  const handleRegister = () => {
    navigate("/deliveryagentlogin");
  };
  return (

    <div className="AgentRegistration">

    <div className="AgentRegistration-contain">

      <div className="mt-5">

        <img src={img} alt=""/>

      </div>

      <div className="AgentRegistration-input-div">

        <h1 className="AgentRegistration-input-div-h1">Delivery Agent Register</h1>
        
        <div className="AgentRegistration-input-div-div">

          <div className="AgentRegistration-input-div-leftdiv">

            <div>

              <h1 className="AgentRegistration-input-div-leftdiv-h1">Name</h1>
              <input type="text" className="AgentRegistration-input-div-leftdiv-inp" placeholder="Name"></input>

            </div>

            <div>

              <h1 className="AgentRegistration-input-div-leftdiv-h1">Address</h1>
              <input type="text" className="AgentRegistration-input-div-leftdiv-inp" placeholder="Address"></input>

            </div>

            <div>
              
              <h1 className="AgentRegistration-input-div-leftdiv-h1">District</h1>
              <input type="select" className="AgentRegistration-input-div-leftdiv-inp" placeholder="District"></input>

            </div>

            <div>

              <h1 className="AgentRegistration-input-div-leftdiv-h1">City</h1>
              <input type="text" className="AgentRegistration-input-div-leftdiv-inp" placeholder="City"></input>

            </div>

            <div>
              
              <h1 className="AgentRegistration-input-div-leftdiv-h1">Pincode</h1>
              <input type="text" className="AgentRegistration-input-div-leftdiv-inp" placeholder="Pincode"></input>

            </div>

            <div>

              <h1 className="AgentRegistration-input-div-leftdiv-h1">Vehicle Type </h1>
              <input type="text" className="AgentRegistration-input-div-leftdiv-inp" placeholder="Vehicle Type"></input>

            </div>

          </div>

          <div className="AgentRegistration-input-div-rightdiv">

            <div>

              <h1 className="AgentRegistration-input-div-leftdiv-h1">Vehicle Number</h1>
              <input type="text" className="AgentRegistration-input-div-leftdiv-inp" placeholder="Name"></input>

            </div>

            <div>

              <h1 className="AgentRegistration-input-div-leftdiv-h1">Driving License</h1>
              <input type="text" className="AgentRegistration-input-div-leftdiv-inp" placeholder="Address"></input>

            </div>

            <div>

              <h1 className="AgentRegistration-input-div-leftdiv-h1">Contact Number</h1>
              <input type="select" className="AgentRegistration-input-div-leftdiv-inp" placeholder="District"></input>

            </div>

            <div>

              <h1 className="AgentRegistration-input-div-leftdiv-h1">Email Id</h1>
              <input type="text" className="AgentRegistration-input-div-leftdiv-inp" placeholder="City"></input>

            </div>

            <div>

              <h1 className="AgentRegistration-input-div-leftdiv-h1">Password</h1>
              <input type="text" className="AgentRegistration-input-div-leftdiv-inp" placeholder="Pincode"></input>

            </div>

            <div>

              <h1 className="AgentRegistration-input-div-leftdiv-h1">Confirm Password </h1>
              <input type="text" className="AgentRegistration-input-div-leftdiv-inp" placeholder="Vehicle Type"></input>

            </div>

          </div>
          
        </div>

        <button className="AgentRegistration-input-div-button">Register</button>
        <p className="AgentRegistration-input-div-p">Already have an account? <a href=" " alt="">Log in</a></p>
        
      </div>

    </div>
    

  </div>

    // <div className="delivery_agent_register">
    //   <h5 className="text-center mt-5 text-light">Delivery Agent Register</h5>
    //   <Container>
    //     <Row className="delivery_agent_register_main">
    //       <Col className=" delivery_agent_register_form">
    //         <FloatingLabel
    //           controlId="floatingInput"
    //           label="Agent Name"
    //           className="mb-3"
    //         >
    //           <Form.Control type="test" placeholder="name@example.com" />
    //         </FloatingLabel>
    //         <FloatingLabel
    //           controlId="floatingPassword"
    //           label="Email Id"
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
    //           controlId="floatingPassword"
    //           label="Conform Password"
    //           className="mb-3"
    //         >
    //           <Form.Control type="password" placeholder="Password" />
    //         </FloatingLabel>
    //       </Col>
    //       <Col>
    //         <FloatingLabel
    //           controlId="floatingInput"
    //           label="Delivery Areas"
    //           className="mb-3 mt-4"
    //         >
    //           <Form.Control type="text" placeholder="name@example.com" />
    //         </FloatingLabel>
    //         <FloatingLabel
    //           controlId="floatingPassword"
    //           label="Vehicle Type"
    //           className="mb-3"
    //         >
    //           <Form.Control type="text" placeholder="Password" />
    //         </FloatingLabel>
    //         <FloatingLabel
    //           controlId="floatingInput"
    //           label="Delivery Areas"
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
    //           label="License number"
    //           className="mb-3"
    //         >
    //           <Form.Control type="text" placeholder="name@example.com" />
    //         </FloatingLabel>

    //         <button onClick={handleRegister} className="btn btn-primary mt-5">
    //           {" "}
    //           Register
    //         </button>
    //       </Col>
    //     </Row>
    //   </Container>
    // </div>
  );
}

export default DeliveryAgentRegistration;
