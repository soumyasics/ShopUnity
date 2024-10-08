import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useNavigate, Link } from "react-router-dom";
import axios from 'axios';
import img from '../../images/image 75.png';
import img2 from '../../images/Component 5.svg';
import './CustomerRegister.css';
import axiosInstance from "../../APIS/axiosinstatnce";
import { FiEyeOff } from 'react-icons/fi';
import { FaEye } from 'react-icons/fa6';


const districtsInKerala = [
  "Alappuzha", "Ernakulam", "Idukki", "Kannur", "Kasaragod",
  "Kollam", "Kottayam", "Kozhikode", "Malappuram", "Palakkad",
  "Pathanamthitta", "Thiruvananthapuram", "Thrissur", "Wayanad"
];

function CustomerRegistration() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    gender: '',
    address: '',
    district: '',
    city: '',
    pincode: '',
    contactNumber: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const [showConfirmPassword, setshowConfirmPassword] = useState(false);

  const toggleConfirmPasswordVisibility = () => {
    setshowConfirmPassword(!showConfirmPassword);
  };

  const validate = () => {
    let errors = {};
    const namePattern = /^[A-Za-z]+$/;
    const pincodePattern = /^\d{6}$/;
    const contactNumberPattern = /^\d{10}$/;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{4,}$/;

    if (!formData.name || !namePattern.test(formData.name)) {
      errors.name = "Name should contain only alphabets and is required.";
    }
    if (!formData.gender) {
      errors.gender = "Gender is required.";
    }
    if (!formData.address) {
      errors.address = "Address is required.";
    }
    if (!formData.district) {
      errors.district = "District is required.";
    }
    if (!formData.city) {
      errors.city = "City is required.";
    }
    if (!formData.pincode || !pincodePattern.test(formData.pincode)) {
      errors.pincode = "Pincode should be a 6 digit number and is required.";
    }
    if (!formData.contactNumber || !contactNumberPattern.test(formData.contactNumber)) {
      errors.contactNumber = "Contact Number should be a 10 digit number and is required.";
    }
    if (!formData.email || !emailPattern.test(formData.email)) {
      errors.email = "Valid email is required.";
    }
    if (!formData.password || !passwordPattern.test(formData.password)) {
      errors.password = "Password should contain a special character, a number, a capital and a small letter, and is required.";
    }
    if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = "Passwords do not match.";
    }
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validate();
    if (Object.keys(errors).length === 0) {
      setErrors({});
      try {
        await axiosInstance.post('/customer_register', formData);
        alert("Successfully Registered");
        navigate("/customerlogin");
      } catch (error) {
        if (error.response && error.response.status === 409) {
          alert("Email Id Already Registered");
        } else {
          console.error("There was an error registering!", error);
        }
      }
    } else {
      setErrors(errors);
    }
  };
  return (
    <div className="CustomerRegistration">
      <div className="CustomerRegistration-contain">
        < div className="row">
          <div className="col-6">
            <div className="mt-5">
              <img src={img} alt="Registration Illustration" className="CustomerRegistration-img" />
            </div>
          </div>
          <div className="col-6 customerreg-wholediv container">
            {/* CustomerRegistration-input-div */}
            <div >
              <h1 className="CustomerRegistration-input-div-h1">Customer Register</h1>
            </div>
            <div className="row">
              <Form onSubmit={handleSubmit}>
                <div className="CustomerRegistration-input-div-div">
                  <div className="col-6">
                    <div className="CustomerRegistration-input-div-leftdiv">
                      <Form.Group>
                        <Form.Label className="CustomerRegistration-input-div-leftdiv-h1">Name</Form.Label>
                        <Form.Control type="text" name="name" placeholder="Name" className="CustomerRegistration-input-div-leftdiv-inp" value={formData.name} onChange={handleChange} isInvalid={!!errors.name} />
                        <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
                      </Form.Group>

                      <Form.Group>
                        <Form.Label className="CustomerRegistration-input-div-leftdiv-h1">Gender</Form.Label>
                        <div className="CustomerRegistration-input-radio">
                          <Form.Check type="radio" label="M" name="gender" value="M" className="CustomerRegistration-input-div-leftdiv-inp-radio" onChange={handleChange} isInvalid={!!errors.gender} />
                          <Form.Check type="radio" label="F" name="gender" value="F" className="CustomerRegistration-input-div-leftdiv-inp-radio" onChange={handleChange} isInvalid={!!errors.gender} />
                          <Form.Check type="radio" label="Other" name="gender" value="Other" className="CustomerRegistration-input-div-leftdiv-inp-radio" onChange={handleChange} isInvalid={!!errors.gender} />
                        </div>
                        <Form.Control.Feedback type="invalid">{errors.gender}</Form.Control.Feedback>
                      </Form.Group>

                      <Form.Group>
                        <Form.Label className="CustomerRegistration-input-div-leftdiv-h1">Address</Form.Label>
                        <Form.Control type="text" name="address" placeholder="Address" className="CustomerRegistration-input-div-leftdiv-inp" value={formData.address} onChange={handleChange} isInvalid={!!errors.address} />
                        <Form.Control.Feedback type="invalid">{errors.address}</Form.Control.Feedback>
                      </Form.Group>

                      <Form.Group>
                        <Form.Label className="CustomerRegistration-input-div-leftdiv-h1">District</Form.Label>
                        <Form.Control as="select" name="district" className="CustomerRegistration-input-div-leftdiv-inp" value={formData.district} onChange={handleChange} isInvalid={!!errors.district}>
                          <option value="">Select Your District</option>
                          {districtsInKerala.map(district => (
                            <option key={district} value={district}>{district}</option>
                          ))}
                        </Form.Control>
                        <Form.Control.Feedback type="invalid">{errors.district}</Form.Control.Feedback>
                      </Form.Group>

                      <Form.Group>
                        <Form.Label className="CustomerRegistration-input-div-leftdiv-h1">City</Form.Label>
                        <Form.Control type="text" name="city" placeholder="City" className="CustomerRegistration-input-div-leftdiv-inp" value={formData.city} onChange={handleChange} isInvalid={!!errors.city} />
                        <Form.Control.Feedback type="invalid">{errors.city}</Form.Control.Feedback>
                      </Form.Group>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="CustomerRegistration-input-div-rightdiv">
                      <Form.Group>
                        <Form.Label className="CustomerRegistration-input-div-leftdiv-h1">Pincode</Form.Label>
                        <Form.Control type="text" name="pincode" placeholder="Pincode" className="CustomerRegistration-input-div-leftdiv-inp" value={formData.pincode} onChange={handleChange} isInvalid={!!errors.pincode} />
                        <Form.Control.Feedback type="invalid">{errors.pincode}</Form.Control.Feedback>
                      </Form.Group>

                      <Form.Group>
                        <Form.Label className="CustomerRegistration-input-div-leftdiv-h1">Contact Number</Form.Label>
                        <Form.Control type="text" name="contactNumber" placeholder="Contact Number" className="CustomerRegistration-input-div-leftdiv-inp" value={formData.contactNumber} onChange={handleChange} isInvalid={!!errors.contactNumber} />
                        <Form.Control.Feedback type="invalid">{errors.contactNumber}</Form.Control.Feedback>
                      </Form.Group>

                      <Form.Group>
                        <Form.Label className="CustomerRegistration-input-div-leftdiv-h1">Email ID</Form.Label>
                        <Form.Control type="email" name="email" placeholder="Email ID" className="CustomerRegistration-input-div-leftdiv-inp" value={formData.email} onChange={handleChange} isInvalid={!!errors.email} />
                        <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
                      </Form.Group>

                      <Form.Group>
                        <Form.Label className="CustomerRegistration-input-div-leftdiv-h1">Password</Form.Label>
                        <Form.Control type={showPassword ? "text" : "password"} name="password" placeholder="Password" className="CustomerRegistration-input-div-leftdiv-inp" value={formData.password} onChange={handleChange} isInvalid={!!errors.password} />
                        <div className="Customerreg-pswd-eyeicon" onClick={togglePasswordVisibility}>
                          {showPassword ? <FiEyeOff /> : <FaEye />}
                        </div>
                        <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
                      </Form.Group>

                      <Form.Group>
                        <Form.Label className="CustomerRegistration-input-div-leftdiv-h1 mt-5">Confirm Password</Form.Label>
                        <Form.Control type={showConfirmPassword ? "text" : "password"} name="confirmPassword" placeholder="Re-enter Password" className="CustomerRegistration-input-div-leftdiv-inp" value={formData.confirmPassword} onChange={handleChange} isInvalid={!!errors.confirmPassword} />
                        <Form.Control.Feedback type="invalid">{errors.confirmPassword}</Form.Control.Feedback>
                      </Form.Group>
                      <div className="Customerreg-pswd-eyeicon" onClick={toggleConfirmPasswordVisibility}>
                      {showConfirmPassword ? <FiEyeOff /> : <FaEye/>}
                  </div>
                    </div>
                  </div>
                </div>
                <button type="submit" className="CustomerRegistration-input-div-button" id="CustomerRegistration-button">Register</button>
                <p className="CustomerRegistration-input-div-p">Already have an account? <Link to="/customerlogin">Log in</Link></p>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerRegistration;
