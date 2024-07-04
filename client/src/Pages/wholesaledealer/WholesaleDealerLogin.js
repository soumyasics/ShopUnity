import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import "./wholesale.css";
import { Link, useNavigate } from "react-router-dom";
import wholesaledealerlogin from "../../images/wholesaledealerlogin.png";
import axios from "axios";
import axiosInstance from "../../APIS/axiosinstatnce";

function WholesaleDealerLogin() {
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
  
    if (formIsValid) {
      axiosInstance
        .post("/wholesaledealer_login", data)
        .then((res) => {
          console.log("Response:", res); // Log the entire response
          if (res.status === 200) {
            const { data: responseData } = res;
            console.log("Login Successfully", responseData);
            alert("Login Successfully");
            Navigate("/wholesalermain");
            localStorage.setItem("wholesaledealer", responseData.id);
            localStorage.setItem("storeName", responseData.storeName);
            localStorage.setItem("token", responseData.token);

          } else {
            alert("Logged in Failed", res);
            console.log("Error", res);
          }
        })
        .catch((err) => {
          console.log("Error Response:", err.response); // Log the entire error response
          if (err.response && err.response.data && err.response.data.message) {
            console.log(err.response.data.message);
            alert(err.response.data.message);
          } else {
            console.error("An unexpected error occurred:", err);
          }
        });
    }
  };
      return (
    <div>
      <Row className="container">
        <Col className="container">
          <img
            className="wholesale-dealer-login-img"
            src={wholesaledealerlogin}
            alt="img"
          ></img>
        </Col>
        <Col className="container">
          <div className="wholesale-dealer-login-div container">
            <h1 className="wholesale-dealer-login-h1 text-center">
              Wholesale Dealer Login
            </h1>
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-2"></div>
                <div className="col-8">
                  {/* Email */}
                  <div>
                    <label className="wholesale-dealer-login-email mt-3 ">
                      Email
                    </label>
                    <br></br>
                    <input
                      className="form-control wholesale-dealer-login-textbox mt-2 "
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
                  {/* Password */}
                  <div>
                    <label className="wholesale-dealer-login-email mt-3 ">
                      Password
                    </label>
                    <br></br>
                    <input
                      className="form-control wholesale-dealer-login-textbox mt-2 "
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
                  {/* Forget Password */}
                  <div className="mt-2 ">
                    <Link
                      to="/wholesaledealerforgetpswd"
                      className="wholesale-dealer-login-forgetpswd"
                    >
                      Forgot Password?
                    </Link>
                  </div>

                  {/* Button */}
                  <button
                    type="submit"
                    className="wholesale-dealer-login-btn mt-4"
                  >
                    Login
                  </button>

                  {/* Signup */}
                  <div className="">
                    <h6 className="text-dark text-center">
                      Not a member?{" "}
                      <Link
                        to="/wholesaledealerregistration"
                        className="text-decoration-none "
                      >
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
  );
}

export default WholesaleDealerLogin;
