import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";
import deliveryagentlogin from "../../images/deliveryagentlogin.png";

function DeliveryagentLogin() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });
  const Navigate = useNavigate();

  const formValidating = (fieldName, value) => {
    if (!value.trim()) {
      return `${fieldName} is required.`;
    }

    if (fieldName === "Email" && !value.endsWith("@gmail.com")) {
      return "Email must be a valid Gmail address";
    }

    if (fieldName === "Passwors") {
      const passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[A-Z]).{6,}$/;
      if (!passwordRegex.test(value)) {
        return "Passowrd must contain at least one number, one special character, and one capital letter";
      }
    }
    return;
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let formIsValid = true;
    let errors = {};

    errors.email = formValidating("Email", data.email);
    if (errors.email) formIsValid = false;
    errors.password = formValidating("Password", data.password);
    if (errors.password) formIsValid = false;

    setErrors(errors);
  };
  return (
    <div>
      <div>
        <Row className="container">
          <Col>
            <img src={deliveryagentlogin} className="delivery-agent-img"></img>
          </Col>
          <Col>
            <div className="delivery-agent-box">
              <div className="text-center pt-5">
                <h1 className="delivery-agent-h2">Delivery Agent Login</h1>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-2"></div>
                  <div className="col-8">
                    <div>
                      <label className="delivery-agent-login-email mt-3 ">
                        Email
                      </label>
                      <br></br>
                      <input
                        className="form-control delivery-agent-login-textbox mt-2 "
                        type="Email"
                        placeholder="Email"
                        name="email"
                        value={data.email}
                        onChange={handleInputChange}
                      ></input>
                      {errors.email && (
                        <span className="text-danger">{errors.email}</span>
                      )}
                    </div>
                    <div>
                      <label className="delivery-agent-login-email mt-3 ">
                        Password
                      </label>
                      <br></br>
                      <input
                        className="form-control delivery-agent-login-textbox mt-2 "
                        type="Password"
                        placeholder="Passowrd"
                        name="password"
                        value={data.password}
                        onChange={handleInputChange}
                      ></input>
                      {errors.password && (
                        <span className="text-danger">{errors.password}</span>
                      )}
                    </div>
                    <div className="mt-2 delivery-agent-login-forgetpswdlink">
                      <Link to="" className="delivery-agent-login-forgetpswd">
                        Forgot Password?
                      </Link>
                    </div>
                    <div>
                      <button
                        type="submit"
                        className="delivery-agent-login-btn mt-4"
                      >
                        Login
                      </button>
                    </div>

                    <div className="">
                      <h6 className="text-dark text-center">
                        Not a member?{" "}
                        <Link to="" className="text-decoration-none ">
                          Sign up now
                        </Link>
                      </h6>
                    </div>
                  </div>
                  <div className="col-2"></div>
                </div>
              </form>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default DeliveryagentLogin;
