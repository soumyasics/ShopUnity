import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "./shopowner.css";
import { Link, useNavigate } from "react-router-dom";
import axiosInstance from "../../APIS/axiosinstatnce";

function ShopownerForgot() {
  const [data, setData] = useState({
    email: "",
    password: "",
    confirmpassword: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
    confirmpassword: "",
  });

  const Navigate = useNavigate();


  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setData({
      ...data,
      [name]: value,
    });
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };


  const handleSubmit = (e) => {
      e.preventDefault();
      let errors = {};
      let formValid = true; // Move this inside the handleSubmit function
    
      if (!data.email.trim()) {
        formValid = false;
        errors.email = "Email is required";
      }
    
      const passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[A-Z]).{6,}$/;
      if (!data.password.trim()) {
        formValid = false;
        errors.password = "Password is required";
      } else if (!passwordRegex.test(data.password)) { // Pass the password to the test method
        errors.password =
          "Password must contain at least one number, one special character, and one capital letter";
      }
    
      if (!data.confirmpassword.trim()) {
        formValid = false;
        errors.confirmpassword = "Confirm Password is required";
      } else if (data.confirmpassword !== data.password) {
        formValid = false;
        errors.confirmpassword = "Passwords do not match";
      }
    
      setErrors(errors);
    
      if (formValid) { // Only proceed if the form is valid
        axiosInstance
          .post("/shopowner_forgot", data)
          .then((result) => {
            console.log(result);
              alert(result.data.msg);
              Navigate("/shopownerlogin");
          })
          .catch((err) => {
            console.log(err);
              alert(err.response.data.msg);
          });
      }
    };
    
  return (
    <div className=" pt-5">
      <h5 className="text-center pt-5 text-light">Shop owner Login</h5>
      <Container>
        <Row className="shop_login_main">
          <div className="container">
            <div
              className=""
              style={{
                margin: "1% 30%",
                boxShadow: " rgba(0, 0, 0, 0.84) 0px 3px 8px",
                borderRadius: "16px",
              }}
            >
              <form onSubmit={handleSubmit} className="p-3" st>
                <div className="mb-3">
                  <label className="" htmlFor="form-controler-email">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control form-input"
                    id="form-controler-email"
                    placeholder=""
                    required=""
                    onChange={handleInputChange}
                    name="email"
                    value={data.email}
                  />
                  {errors.email && (
                    <div className="text-danger">{errors.email}</div>
                  )}
                  <span className="glyphicon form-control-feedback" />
                </div>
                <div className="form-group has-feedback" id="form-group">
                  <label className="" htmlFor="form-controler-password">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control form-input"
                    id="form-controler-password m-3"
                    placeholder=""
                    required=""
                    name="password"
                    onChange={handleInputChange}
                    value={data.password}
                  />
                  {errors.password && (
                    <div className="text-danger">{errors.password}</div>
                  )}
                  <span className="glyphicon form-control-feedback" />
                </div>

                <div className="form-group has-feedback" id="form-group">
                  <label className=" mt-3" htmlFor="form-controler-password">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    className="form-control form-input"
                    id="form-controler-password m-3"
                    placeholder=""
                    required=""
                    name="confirmpassword"
                    onChange={handleInputChange}
                    value={data.confirmpassword}
                  />
                  {errors.confirmpassword && (
                    <div className="text-danger">{errors.confirmpassword}</div>
                  )}
                  <span className="glyphicon form-control-feedback" />
                </div>

                <div className="text-center">
                  <button type="submit" className="btn btn-primary m-4">
                    Confirm Password
                  </button>
                </div>
              </form>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default ShopownerForgot;
