import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link, useNavigate } from "react-router-dom";
import deliveryagentlogin from "../../images/deliveryagentlogin.png";
import axiosInstance from "../../APIS/axiosinstatnce"; // Adjust this import based on your actual axios instance setup

function DeliveryagentLogin() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const formValidating = (fieldName, value) => {
    if (!value.trim()) {
      return `${fieldName} is required.`;
    }

    if (fieldName === "Email" && !value.endsWith("@gmail.com")) {
      return "Email must be a valid Gmail address";
    }

    if (fieldName === "Password") {
      const passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[A-Z]).{6,}$/;
      if (!passwordRegex.test(value)) {
        return "Password must contain at least one number, one special character, and one capital letter";
      }
    }
    return "";
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let formIsValid = true;
    let validationErrors = {};

    validationErrors.email = formValidating("Email", data.email);
    if (validationErrors.email) formIsValid = false;
    validationErrors.password = formValidating("Password", data.password);
    if (validationErrors.password) formIsValid = false;

    setErrors(validationErrors);

    if (formIsValid) {
      try {
        const response = await axiosInstance.post("/delivery_agent_login", {
          email: data.email,
          password: data.password,
        });

        // Handle successful login response
        if (response.data && response.data.token) {
          if (response.data.status === "pending") {
            alert("Your account is pending admin approval.");
          } else if (response.data.status === "approved") {
            alert("Login successful!"); // Successful login alert
            localStorage.setItem("deliveryagent", response.data.id);
            localStorage.setItem("token", response.data.token);
            navigate("/deliveryagenthome"); // Adjust path based on your routing setup
          }
        } else {
          setErrors({
            email: "Login failed. Please try again.",
            password: "",
          });
        }
      } catch (error) {
        // Handle errors from API (e.g., display error messages)
        console.error("Login error:", error.response?.data);
        // Example: Display error message to user
        setErrors({
          email: error.response?.data?.message || "Login failed. Please try again.",
          password: "", // Clear password error on generic error
        });
      }
    }
  };

  return (
    <div>
      <div>
        <Row className="container">
          <Col>
            <img src={deliveryagentlogin} className="delivery-agent-img" alt="Delivery Agent Login" />
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
                      <label className="delivery-agent-login-email mt-3">Email</label>
                      <br />
                      <input
                        className="form-control delivery-agent-login-textbox mt-2"
                        type="email"
                        placeholder="Email"
                        name="email"
                        value={data.email}
                        onChange={handleInputChange}
                      />
                      {errors.email && (
                        <span className="text-danger">{errors.email}</span>
                      )}
                    </div>
                    <div>
                      <label className="delivery-agent-login-email mt-3">Password</label>
                      <br />
                      <input
                        className="form-control delivery-agent-login-textbox mt-2"
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={data.password}
                        onChange={handleInputChange}
                      />
                      {errors.password && (
                        <span className="text-danger">{errors.password}</span>
                      )}
                    </div>
                    <div className="mt-2 delivery-agent-login-forgetpswdlink">
                      <Link to="/deliveryagentforgetpswd" className="delivery-agent-login-forgetpswd">
                        Forgot Password?
                      </Link>
                    </div>
                    <div>
                      <button type="submit" className="delivery-agent-login-btn mt-4">
                        Login
                      </button>
                    </div>

                    <div className="">
                      <h6 className="text-dark text-center">
                        Not a member?{" "}
                        <Link to="/deliveryagentregistration" className="text-decoration-none">
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
