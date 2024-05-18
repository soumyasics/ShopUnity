import React, { useState } from "react";
import "./wholesale.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import validator from "validator";

function WholesaleDealerRegistration() {
  const [wholesaleDealerRegister, setWholeSaleDealerRegister] = useState({
    companyname: "",
    lisenceno: "",
    email: "",
    password: "",
    address: "",
  });

  const [errors, setErrors] = useState({
    companyname: "",
    lisenceno: "",
    email: "",
    password: "",
    address: "",
  });

  let formValid = true;

  const WholeSaledealerChange = (e) => {
    console.log(e.target.value);
    setWholeSaleDealerRegister({
      ...wholesaleDealerRegister,
      [e.target.name]: e.target.value,
    });
  };
  const navigate = useNavigate();

  const registerHandled = (e) => {
    e.preventDefault();

    // let errors = {};
    // if (!wholesaleDealerRegister.companyname.trim()) {
    //   formValid = false;
    //   errors.name = "companyname is required";
    // }

    // if (!wholesaleDealerRegister.lisenceno.trim()) {
    //   formValid = false;
    //   errors.age = "lisenceno is required";
    // }

    // if (!wholesaleDealerRegister.email.trim()) {
    //   formValid = false;
    //   errors.email = "Email is required";
    // }
    // if (!wholesaleDealerRegister.password.trim()) {
    //   formValid = false;
    //   errors.password = "Password is required";
    // } else if (wholesaleDealerRegister.password.length < 5) {
    //   errors.password = "Password should be atleast 6 characters";
    // }
    // if (!wholesaleDealerRegister.address.trim()) {
    //   formValid = false;
    //   errors.password = "address is required";
    // }

    // setErrors(errors);

    // if (
    //   wholesaleDealerRegister.companyname &&
    //   wholesaleDealerRegister.lisenceno &&
    //   wholesaleDealerRegister.email &&
    //   wholesaleDealerRegister.password &&
    //   wholesaleDealerRegister.address
    // ) {
    //   formValid = true;
    // }
    // if (formValid) {
    //   // sendDataToServer();

    //   e.preventDefault();
    //   //Soumya
    //   const formData = new FormData();
    //   formData.append("companyname", wholesaleDealerRegister.companyname);
    //   formData.append("lisenceno", wholesaleDealerRegister.lisenceno);
    //   formData.append("email", wholesaleDealerRegister.email);
    //   formData.append("password", wholesaleDealerRegister.password);
    //   formData.append("address", wholesaleDealerRegister.address);
    //   console.log('form ', formData)

    //   axiosInstance
    //     .post("wholesaleDealerRegister", formData, {
    //       headers: {
    //         "Content-Type": "multipart/form-data",
    //       },
    //     })
    //     .then((res) => {
    //       console.log("Response:", res);
    //       // alert("Waiting for Admin approval..");
    //       // setTimeout(() => {
    //       //   navigate("/admin");
    //       // }, 1500);
    //     })
    //     .catch((err) => {
    //       console.error("Error:", err);
    //       let msg = err?.response?.data?.message || "Error occurred";
    //       alert(msg);
    //     });
    // } else {
    //   console.log("form is not valid", formValid);
    //   console.log("data entered", wholesaleDealerRegister);
    // }

    // console.log(wholesaleDealerRegister);
  };
  //  if (!validator.isByteLength(wholesaleDealerRegister.lisenceno, {
  //       min: 6,
  //       max: 6
  //     })) {
  //       alert("invalid Lisence number");
  //     } else if (!validator.isStrongPassword(wholesaleDealerRegister.password)) {
  //       alert("password should have mininum 8 charecters including  1 Uppercase letter,1 lowercase letter, a number and special charecter ");
  //     } else {
  // navigate("/wholesaledealerlogin");
  // };
  console.log(wholesaleDealerRegister);

  return (
    <div className="Wholesale_dealer_register p-5">
      <h5 className="text-center mt-5 text-light pt-4">
        Wholesale dealer register
      </h5>
      <Container>
        <Row className="wholesale_dealer_register_main">
          <Col></Col>
          <Col className=" wholesale_dealer_register_form">
            <FloatingLabel
              controlId="floatingInput"
              label="Company Name"
              className="mb-3"
            >
              <Form.Control
                type="text"
                placeholder="mm"
                required
                onChange={WholeSaledealerChange}
                name="companyname"
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingPassword"
              label="whole sale lisense number"
              className="mb-3"
            >
              <Form.Control
                type="text"
                placeholder="cs"
                required
                onChange={WholeSaledealerChange}
                name="lisenceno"
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingInput"
              label="Email address"
              className="mb-3"
            >
              <Form.Control
                type="email"
                placeholder="sdc"
                required
                onChange={WholeSaledealerChange}
                name="email"
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingPassword"
              label="Password"
              className="mb-3"
            >
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={WholeSaledealerChange}
                name="password"
                required
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingInput"
              label="Address"
              className="mb-3"
            >
              <Form.Control
                type="email"
                placeholder="name@example.com"
                onChange={WholeSaledealerChange}
                name="address"
                required
              />
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

export default WholesaleDealerRegistration;
