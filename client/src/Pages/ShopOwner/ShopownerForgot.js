import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./shopowner.css";
import { Link, useNavigate } from "react-router-dom";
import axiosInstance from "../../APIS/axiosinstatnce";
import forgot from '../../images/shopownerforgetpswd.png';
import { FiEyeOff } from "react-icons/fi";
import { FaEye } from "react-icons/fa6";
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

  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const [showConfirmPassword, setshowConfirmPassword] = useState(false);
  const toggleConfirmPasswordVisibility = () => {
    setshowConfirmPassword(!showConfirmPassword);
  };

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
        <div className="container-fluid">
        <Row className="shop_login_main">
          <Col classname='col-7'>
            <img className="forgot" src={forgot} alt=''></img>
          </Col>
          <Col className="col-5">
          <div>
            <div classname='forgetpswd' >
            <div
              className=" shopownerbox"
              style={{
                margin: "2% 9%",
                boxShadow: " rgba(0, 0, 0, 0.84) 0px 3px 8px",
                borderRadius: "16px",
              }}
            >
            <h1 className="text-center reset">Reset Password</h1>
              <form onSubmit={handleSubmit} className="p-3" st>
                <div className="mb-3">
                  <label className="forgotlabel " htmlFor="form-controler-email">
                    Email
                  </label>{' '}
                  <input
                    type="email"
                    className="form-control form-input txthei"
                    id="form-controler-email"
                    placeholder="Email"
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
                  <label className="forgotlabel " htmlFor="form-controler-password">
                   New Password
                  </label>
                  <input
                    type={showPassword ? "text" : "password"}
                    className="form-control txthei"
                    id="form-controler-email"
                    placeholder="New Password"
                    required=""
                    name="password"
                    onChange={handleInputChange}
                    value={data.password}
                  />
                  <div className="shopownerforget-pswd-eyeicon" onClick={togglePasswordVisibility}>
                      {showPassword ? <FiEyeOff /> : <FaEye/>}
                </div>
                  {errors.password && (
                    <div className="text-danger">{errors.password}</div>
                  )}
                  <span className="glyphicon form-control-feedback" />
                </div>

                <div className="form-group has-feedback mt-4"  id="form-group">
                  <label className="forgotlabel mt-3" htmlFor="form-controler-password">
                    Confirm Password
                  </label>
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    className="form-control txthei"
                    id="form-controler-email textbox"
                    placeholder="Confirm Password"
                    required=""
                    name="confirmpassword"
                    onChange={handleInputChange}
                    value={data.confirmpassword}
                  />
                  <div className="shopownerforget-pswd-eyeicon" onClick={toggleConfirmPasswordVisibility}>
                      {showConfirmPassword ? <FiEyeOff /> : <FaEye/>}
                </div>
                  {errors.confirmpassword && (
                    <div className="text-danger">{errors.confirmpassword}</div>
                  )}
                  <span className="glyphicon form-control-feedback" />
                </div>

                <div className="mt-4">
                  <button type="submit" className="btn container shopownerlogbtn" id='submitbtn'>
                    Submit
                  </button><br></br>
                </div>
              </form>
            </div>
          </div>
          </div>
          </Col>
        </Row>
        </div>
    </div>
  );
}

export default ShopownerForgot;
