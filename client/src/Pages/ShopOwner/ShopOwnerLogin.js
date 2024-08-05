import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./shopowner.css";
import { Link, useNavigate } from "react-router-dom";
import axiosInstance from "../../APIS/axiosinstatnce";
import shopownerlogin from "../../images/shopownerlogin.png";
import { FiEyeOff } from "react-icons/fi";
import { FaEye } from "react-icons/fa6";

function ShopOwnerLogin() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const Navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const formValidating = (fieldName, value) => {
    if (!value.trim()) {
      return `${fieldName} is required`;
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

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setData({
      ...data,
      [name]: value,
    });
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };
  const validateForm = () => {
    let formErrors = {};

    if (!data.email) formErrors.email = "Email Required";
    if (!data.password) formErrors.password = "Password Required";

    return formErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    let errors = {};
    errors.email = formValidating("Email", data.email);
    errors.password = formValidating("Password", data.password);
    setErrors(errors);

    if (!errors.email && !errors.password) {
      axiosInstance
        .post("/shopowner_login", data)
        .then((result) => {
          const { status, message, id, token, shopname, ActiveStatus } =
            result.data;

          if (status === "pending") {
            alert("Waiting for admin approval");  
          } else if (status === "accepted") {
            if (ActiveStatus === false) {
              alert(
                "Profile inactivated. Please contact admin for further information"
              );
            } else {
              alert("Login successful");
              localStorage.setItem("shopowner", id);
              localStorage.setItem("shopownertoken", token);
              localStorage.setItem("shopname", shopname);
              Navigate("/shopownerhome");
            }
          } else {
            alert(message);
          }
        })
        .catch((err) => {
          alert(err.response.data.message);
        });
    }
  };

  return (
    <div className="shop_login container">
      <Row className="shop_login_main">
        <Col>
          <img className="shopownerlogin" src={shopownerlogin} alt=""></img>
        </Col>
        <Col>
          <div className="container-fluid">
            <div
              className=" shopownerbox"
              style={{
                margin: "2% 7%",
                boxShadow: " rgba(0, 0, 0, 0.24) 0px 3px 8px",
                borderRadius: "16px",
              }}
            >
              <h1 className="text-center mt-5 pt-5 " id="ownerreg">
                Shop Owner Login
              </h1>
              <div className="container">
                <form onSubmit={handleSubmit} className="p-3">
                  <div className="mb-3 container">
                    <label className="font" htmlFor="form-controler-email">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control form-input txthei"
                      id="form-controler-email ownerinput "
                      placeholder="Email "
                      required=""
                      onChange={handleInputChange}
                      name="email"
                      value={data.email}
                    />
                    {errors.email && (
                      <span className="span-required">{errors.email}</span>
                    )}
                  </div>
                  <div
                    className="form-group has-feedback container"
                    id="form-group"
                  >
                    <label className="font" htmlFor="form-controler-password">
                      Password
                    </label>
                    <input
                      type={showPassword ? "text" : "password"}
                      className="form-control form-input txthei "
                      id="form-controler-password m-3"
                      placeholder="Password"
                      required=""
                      name="password"
                      onChange={handleInputChange}
                      value={data.password}
                    />
                    <div className="wholesaler-eyeicon" onClick={togglePasswordVisibility}>
                      {showPassword ? <FiEyeOff /> : <FaEye/>}
                    </div>
                    {errors.password && (
                      <span className="span-required">{errors.password}</span>
                    )}
                  </div>
                  <br></br>

                  <Link
                    to={"/shopownerforgotpaswd"}
                    className="shopownerforpass"
                  >
                    <a>Forgot Password?</a>
                  </Link>
                  <div className="text-center">
                    <button
                      className="btn text-white container shopownerlogbtn"
                      id="color"
                    >
                      Login
                    </button>
                  </div>
                  <div className="text">
                    <h6 className="text-dark text-center">
                      Not a member?{" "}
                      <Link
                        to="/shopownerregistration"
                        className="text-decoration-none"
                      >
                        Sign up now
                      </Link>
                      <p style={{display:"none"}}>Ajeena</p>
                    </h6>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default ShopOwnerLogin;
