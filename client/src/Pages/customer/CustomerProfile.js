import React, { useState } from 'react'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BsPencil } from "react-icons/bs";
import Form from "react-bootstrap/Form";
import './customer.css'
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from 'react-router-dom';

function CustomerProfile() {
    const[data,setData]=useState()

    const districtsInKerala = [
        "Alappuzha", "Ernakulam", "Idukki", "Kannur", "Kasaragod",
        "Kollam", "Kottayam", "Kozhikode", "Malappuram", "Palakkad",
        "Pathanamthitta", "Thiruvananthapuram", "Thrissur", "Wayanad"
      ];
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
            <h2 className="shopprofile-edit-h2">My Profile</h2>
           
            <Col>
                <div className='mt-5'>
                    <Form.Group >
                    <Form.Label className="customer-profile-label">Name</Form.Label>
                    <Form.Control type="text" placeholder="Name" className="customer-profile-text" />
                    {/* <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback> */}
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
                  {/* <Form.Control.Feedback type="invalid">{errors.gender}</Form.Control.Feedback> */}
                </Form.Group>
                </div>
                <div className='mt-5'>
                    <Form.Group>
                    <Form.Label className="customer-profile-label">Address</Form.Label>
                    <Form.Control type="text"  placeholder="Address" className="customer-profile-text" />
                    {/* <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback> */}
                    </Form.Group>
                </div>
                <div className='mt-5'>
                    <Form.Group>
                        <Form.Label className="customer-profile-label">District</Form.Label>
                        <Form.Control as="select"className="customer-profile-text" >
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
                    <Form.Control type="text" placeholder="City" className="customer-profile-text" />
                    {/* <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback> */}
                    </Form.Group>
                </div>
                <div className='mt-5'>
                    <Form.Group >
                    <Form.Label className="customer-profile-label">Pincode</Form.Label>
                    <Form.Control type="text" placeholder="Pincode" className="customer-profile-text" />
                    {/* <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback> */}
                    </Form.Group>
                </div>
                <div className='mt-5'>
                    <Form.Group >
                    <Form.Label className="customer-profile-label">Contact</Form.Label>
                    <Form.Control type="text" placeholder="Contact" className="customer-profile-text" />
                    {/* <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback> */}
                    </Form.Group>
                </div>
                <div className='mt-5'>
                    <Form.Group>
                    <Form.Label className="customer-profile-label">Email ID</Form.Label>
                    <Form.Control type="text" placeholder="Email ID" className="customer-profile-text" />
                    {/* <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback> */}
                    </Form.Group>
                </div>
            </Col>
            <div className="shopprofile-editpage-btn text-center mt-5">
              <button
                type="submit"
                className="shopprofile-editpage-subbtn"
                // onClick={gotoEdit}
              >
                <BsPencil />
                Edit Profile{" "}
              </button>
            </div>
          </Row>
        </form>
      </div>
    </div>
  )
}

export default CustomerProfile
