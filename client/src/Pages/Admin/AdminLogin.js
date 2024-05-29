import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";
import "./Admin.css"
import adminlog from '../../images/adminlog.png'
function AdminLogin() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  let mail = "admin@gmail.com";
  let pass = "Admin@123";

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const Navigate = useNavigate();



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

  const handleSubmit = (e) => {
    e.preventDefault();
    let errors = {};
    errors.email = formValidating("Email", data.email);
    errors.password = formValidating("Password", data.password);
    setErrors(errors);

    if (!errors.email && !errors.password) {
      const values = { email: data.email, password: data.password };
      console.log(values);
      if (mail == data.email && pass == data.password) {
        alert("Loggedin Successfully");
        localStorage.setItem("admin", 1);
        Navigate("/admin_dashboard");
      } else {
        alert("Username or Password is incorrect");
      }
    }
  };

  return (
    <div>
      <Row>
        <Col className="col-7">
          <img className='adminlog mt-5' src={adminlog} alt="img"></img>
        </Col>
        <Col className="col-5">
          <div className="container">
        <form onSubmit={handleSubmit} className="p-3">
          <div className="mb-3 container">
             <h1 className=" mt-5 container" id="signin">Admin Login</h1>
             <label className="font" htmlFor="form-controler-email">
               Email
             </label>
             <input
              type="email"
              className="form-control form-input"
              id="textbox"
              placeholder="Email"
              required=""
              onChange={handleInputChange}
              name="email"
              value={data.email}
            />
             {errors.email && <div className="text-danger">{errors.email}</div>}
             <span className="glyphicon form-control-feedback" />
           </div>
           <div className="form-group has-feedback container" id="form-group">
             <label className="font" htmlFor="form-controler-password">
               Password
             </label>
             <input
               type="password"
               className="form-control form-input"
               id="textbox"
               placeholder="Password"
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
           </form>
           <div className=" container mt-4">
             <button type="submit" className="btn" id="text">
               Login
             </button>
           </div>
           
         </div>
        </Col>
      </Row>
    </div>
  );
}

export default AdminLogin;
