import React, { useEffect, useState } from "react";
import axiosInstance from "../../APIS/axiosinstatnce";
import { Link, useNavigate } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaArrowLeftLong } from "react-icons/fa6";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function CustomerEditProfile() {
  const [data, setData] = useState({
    name: "",
    gender: "",
    email: "",
    contactNumber: "",
    password: "",
    city: "",
    district: "",
    address: "",
    pincode: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    gender: "",
    email: "",
    contactNumber: "",
    password: "",
    city: "",
    district: "",
    address: "",
    pincode: "",
  });

  const districts = [
    "Alappuzha",
    "Ernakulam",
    "Idukki",
    "Kannur",
    "Kasaragod",
    "Kollam",
    "Kottayam",
    "Kozhikode",
    "Malappuram",
    "Palakkad",
    "Pathanamthitta",
    "Thiruvananthapuram",
    "Thrissur",
    "Wayanad",
  ];

  const navigate = useNavigate();

  const customer = localStorage.getItem("customer");

  useEffect(() => {
    axiosInstance
      .get("/get_a_customer/" + customer)
      .then((res) => {
        setData(res.data.data);
        console.log(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleChange = (e) => {
    const { name, value, files } = e.target;

        if (name == 'pincode') {
            setErrors(d => ({
                ...d,
                pincode:  validatePincode(name, value)
            }))
        }
        if (name == 'contactNumber') {
            setErrors(d => ({
                ...d,
                contact:  validateContact(name, value)
            }))
        }
        
        setData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };


  function validateField(fieldName, value) {
    if (typeof value !== 'string' || !value.trim()) {
        return `${fieldName} is required`;
    }
    if (fieldName === "email" && !value.endsWith("@gmail.com")) {
        return "Email must be a valid Gmail address.";
    }
    return '';
}

function validateContact(fieldName, value) {
    if (typeof value !== 'string' || !value.trim()) {
        return `${fieldName} is required`;
    } else if (value.length !== 10) {
        return 'Please enter a valid Contact Number';
    }
    return '';
}

function validatePincode(fieldName, value) {
    if (typeof value !== 'string' || !value.trim()) {
        return `${fieldName} is required`;
    } else if (value.length !== 6) {
        return 'Please enter a valid Pincode';
    }
    return '';
}

  const handleSubmit = (e) => {
    e.preventDefault();
    let errors = {};
    let formIsValid = true;

    errors.name = validateField("Name", data.name);
    errors.gender = validateField("Gender", data.gender);
    errors.address = validateField("Address", data.address);
    errors.district = validateField("District", data.district);
    errors.city = validateField("City", data.city);
    errors.email = validateField("Email", data.email);
    // errors.pincode = validatePincode("Pincode", data.pincode);
    // errors.contact = validateContact("Contact", data.contact);

    setErrors(errors);

    if (Object.values(errors).some((error) => error !== "")) {
      formIsValid = false;
    }

    if (formIsValid) {
      axiosInstance
        .post(`/edit_a_customer/${customer}`, data)
        .then((result) => {
          alert("Updated Successfully");
          console.log("Updated Successfully");
          navigate("/customerprofile");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div className="container">
      <div className="mt-3">
        <Link className="customer-profile-link" to="/customerhome">
          <FaArrowLeftLong />
        </Link>
      </div>
      <div className="shopprofile-edit-header">
        <form onSubmit={handleSubmit}>
          <Row className="container shopprofile-edit">
            <h2 className="shopprofile-edit-h2">Edit Profile</h2>

            <Col>
              <div className="mt-5">
                <Form.Group>
                  <Form.Label className="customer-profile-label">Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Name"
                    className="customer-profile-text"
                    onChange={handleChange}
                    name="name"
                    value={data.name}
                    isInvalid={!!errors.name}
                  />
                  <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
                </Form.Group>
              </div>
              <div className="mt-5">
                <Form.Group>
                  <Form.Label className="customer-profile-label">Gender</Form.Label>
                  <div className="CustomerRegistration-input-radio">
                    <Form.Check
                      type="radio"
                      label="M"
                      name="gender"
                      value="M"
                      checked={data.gender === "M"}
                      onChange={handleChange}
                      className="CustomerRegistration-input-div-leftdiv-inp-radio"
                      isInvalid={!!errors.gender}
                    />
                    <Form.Check
                      type="radio"
                      label="F"
                      name="gender"
                      value="F"
                      checked={data.gender === "F"}
                      onChange={handleChange}
                      className="CustomerRegistration-input-div-leftdiv-inp-radio"
                      isInvalid={!!errors.gender}
                    />
                    <Form.Check
                      type="radio"
                      label="Other"
                      name="gender"
                      value="Other"
                      checked={data.gender === "Other"}
                      onChange={handleChange}
                      className="CustomerRegistration-input-div-leftdiv-inp-radio"
                      isInvalid={!!errors.gender}
                    />
                  </div>
                  <Form.Control.Feedback type="invalid">{errors.gender}</Form.Control.Feedback>
                </Form.Group>
              </div>
              <div className="mt-5">
                <Form.Group>
                  <Form.Label className="customer-profile-label">Address</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Address"
                    className="customer-profile-text"
                    onChange={handleChange}
                    name="address"
                    value={data.address}
                    isInvalid={!!errors.address}
                  />
                  <Form.Control.Feedback type="invalid">{errors.address}</Form.Control.Feedback>
                </Form.Group>
              </div>
              <div className="mt-5">
                <Form.Group>
                  <Form.Label className="customer-profile-label">District</Form.Label>
                  <Form.Control
                    as="select"
                    className="customer-profile-text"
                    onChange={handleChange}
                    name="district"
                    value={data.district}
                    isInvalid={!!errors.district}
                  >
                    <option value="">Select Your District</option>
                    {districts.map((district) => (
                      <option key={district} value={district}>
                        {district}
                      </option>
                    ))}
                  </Form.Control>
                  <Form.Control.Feedback type="invalid">{errors.district}</Form.Control.Feedback>
                </Form.Group>
              </div>
            </Col>
            <Col>
              <div className="mt-5">
                <Form.Group>
                  <Form.Label className="customer-profile-label">City</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="City"
                    className="customer-profile-text"
                    onChange={handleChange}
                    name="city"
                    value={data.city}
                    isInvalid={!!errors.city}
                  />
                  <Form.Control.Feedback type="invalid">{errors.city}</Form.Control.Feedback>
                </Form.Group>
              </div>
              <div className="mt-5">
                <Form.Group>
                  <Form.Label className="customer-profile-label">Pincode</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Pincode"
                    className="customer-profile-text"
                    onChange={handleChange}
                    name="pincode"
                    value={data.pincode}
                    isInvalid={!!errors.pincode}
                  />
                  <Form.Control.Feedback type="invalid">{errors.pincode}</Form.Control.Feedback>
                </Form.Group>
              </div>
              <div className="mt-5">
                <Form.Group>
                  <Form.Label className="customer-profile-label">Contact</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Contact"
                    className="customer-profile-text"
                    onChange={handleChange}
                    name="contactNumber"
                    value={data.contactNumber}
                    isInvalid={!!errors.contact}
                  />
                  <Form.Control.Feedback type="invalid">{errors.contactNumber}</Form.Control.Feedback>
                </Form.Group>
              </div>
              <div className="mt-5">
                <Form.Group>
                  <Form.Label className="customer-profile-label">Email ID</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Email ID"
                    className="customer-profile-text"
                    onChange={handleChange}
                    name="email"
                    value={data.email}
                    isInvalid={!!errors.email}
                    disabled
                  />
                  <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
                </Form.Group>
              </div>
            </Col>
            <div className="shopprofile-editpage-btn text-center mt-5">
              <Button
                type="submit"
                className="shopprofile-editpage-subbtn"
              >
                Update
              </Button>
            </div>
          </Row>
        </form>
      </div>
    </div>
  );
}

export default CustomerEditProfile;
