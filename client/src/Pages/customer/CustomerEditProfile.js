import React, { useState } from 'react'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import './customer.css'
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from 'react-router-dom';
function CustomerEditProfile() {

    const[data,setData]=useState({
        name:"",
        gender:"",
        address:"",
        districtsInKerala:"",
        city:"",
        pincode:"",
        contact:"",
        email:"",
    });

    const[errors,setErrors]=useState({
        name:"",
        gender:"",
        address:"",
        districtsInKerala:"",
        city:"",
        pincode:"",
        contact:"",
        email:"", 
    })
    const districtsInKerala = [
        "Alappuzha", "Ernakulam", "Idukki", "Kannur", "Kasaragod",
        "Kollam", "Kottayam", "Kozhikode", "Malappuram", "Palakkad",
        "Pathanamthitta", "Thiruvananthapuram", "Thrissur", "Wayanad"
      ];

      const handleChange = (event) => {
        const { name, value } = event.target;
        setData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
        setErrors((prevErrors) => ({
          ...prevErrors,
          [name]: "",
        }));
      };

      function validateField(fieldName, value) {
        if (typeof value === 'string' && !value.trim()) {
          return `${fieldName} is required`;
        }
        if (fieldName === "Email" && typeof value === 'string' && !value.endsWith("@gmail.com")) {
          return "Email must be a valid Gmail address.";
        }
        return "";
      }
      function validateContact(fieldName, value) {
        if (typeof value === 'string' && !value.trim()) {
          return `${fieldName} is required`;
        } else if (value.length !== 10) {
          return "Please enter a valid Contact Number";
        }
        return "";
      }
    
      function validatePincode(fieldName, value) {
        if (typeof value === 'string' && !value.trim()) {
          return `${fieldName} is required`;
        } else if (value.length !== 6) {
          return "Please enter a valid Pincode";
        }
        return "";
      }


      const handleSubmit = (e) => {
       e.preventDefault();
       let errors = {};
       let formIsValid = true;

       errors.name = validateField("Name",data.name)
       errors.gender = validateField("Gender",data.gender)
       errors.address = validateField("Address",data.address)
       errors.districtsInKerala = validateField("District",data.districtsInKerala)
       errors.city = validateField("City",data.city)
       errors.email = validateField("Email",data.email)
       errors.pincode = validatePincode("Pincode",data.pincode)
       errors.contact = validateContact("Contact",data.contact)
      }
  return (
    <div className="container">
        <div className="mt-3">
            <Link className="customer-profile-link" to="/customerhome">
            <FaArrowLeftLong />
            </Link>
        </div>
      <div className="shopprofile-edit-header">
        <form>
          <Row className="container shopprofile-edit">
            <h2 className="shopprofile-edit-h2">Edit Profile</h2>
           
            <Col>
                <div className='mt-5'>
                    <Form.Group >
                    <Form.Label className="customer-profile-label">Name</Form.Label>
                    <Form.Control type="text" placeholder="Name" className="customer-profile-text" onChange={handleChange} name='name' value={data.name}/>
                    <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
                    </Form.Group>
                </div>
                <div className='mt-5'>
                <Form.Group>
                  <Form.Label className="customer-profile-label">Gender</Form.Label>
                  <div className="CustomerRegistration-input-radio">
                    <Form.Check type="radio" label="M" name="gender" value="M" className="CustomerRegistration-input-div-leftdiv-inp-radio" />
                    <Form.Check type="radio" label="F" name="gender" value="F" className="CustomerRegistration-input-div-leftdiv-inp-radio"  />
                    <Form.Check type="radio" label="Other" name="gender" value="Other" className="CustomerRegistration-input-div-leftdiv-inp-radio" />
                  </div>
                  <Form.Control.Feedback type="invalid">{errors.gender}</Form.Control.Feedback>
                </Form.Group>
                </div>
                <div className='mt-5'>
                    <Form.Group>
                    <Form.Label className="customer-profile-label">Address</Form.Label>
                    <Form.Control type="text"  placeholder="Address" className="customer-profile-text" onChange={handleChange} name='address' value={data.address}/>
                    <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
                    </Form.Group>
                </div>
                <div className='mt-5'>
                    <Form.Group>
                        <Form.Label className="customer-profile-label">District</Form.Label>
                        <Form.Control as="select"className="customer-profile-text"onChange={handleChange} name='districtsInKerala' value={data.districtsInKerala} >
                            <option value="">Select Your District</option>
                            {districtsInKerala.map(district => (
                            <option key={district} value={district}>{district}</option>
                            ))}
                        </Form.Control>
                        <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
                    </Form.Group>
                </div>
              
              
            </Col>
            <Col>
                <div className='mt-5'>
                    <Form.Group >
                    <Form.Label className="customer-profile-label">City</Form.Label>
                    <Form.Control type="text" placeholder="City" className="customer-profile-text" onChange={handleChange} name='city' value={data.city} />
                    <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
                    </Form.Group>
                </div>
                <div className='mt-5'>
                    <Form.Group >
                    <Form.Label className="customer-profile-label">Pincode</Form.Label>
                    <Form.Control type="text" placeholder="Pincode" className="customer-profile-text" onChange={handleChange} name='pincode' value={data.pincode} />
                    <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
                    </Form.Group>
                </div>
                <div className='mt-5'>
                    <Form.Group >
                    <Form.Label className="customer-profile-label">Contact</Form.Label>
                    <Form.Control type="text" placeholder="Contact" className="customer-profile-text" onChange={handleChange} name='contact' value={data.contact} />
                    <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
                    </Form.Group>
                </div>
                <div className='mt-5'>
                    <Form.Group>
                    <Form.Label className="customer-profile-label">Email ID</Form.Label>
                    <Form.Control type="text" placeholder="Email ID" className="customer-profile-text" onChange={handleChange} name='email' value={data.email}/>
                    <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
                    </Form.Group>
                </div>
            </Col>
            <div className="shopprofile-editpage-btn text-center mt-5">
              <button
                type="submit"
                className="shopprofile-editpage-subbtn"
                onClick={handleSubmit}
              >
                Update{" "}
              </button>
            </div>
          </Row>
        </form>
      </div>
    </div>
  )
}

export default CustomerEditProfile
