import React, { useEffect, useState } from "react";
import axiosInstance from "../../APIS/axiosinstatnce";
import { Link, useNavigate } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import editprofile from "../../images/editprofile.png";
import editprooutline from "../../images/editprooutline.png";

function DeliveryagentProfileEdit({url}) {
  const [data, setData] = useState({
    name: "",
    vehicleNumber: "",
    address: "",
    district: "",
    city: "",
    pincode: "",
    contactNumber: "",
    email: "",
    drivingLicense: null,
    vehicleType: "",
    file: ""
  });

  const [errors, setErrors] = useState({
    name: "",
    vehicleNumber: "",
    address: "",
    district: "",
    city: "",
    pincode: "",
    contactNumber: "",
    email: "",
    drivingLicense: "",
    vehicleType: ""
  });

  const district = [
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
    "Wayanad"
  ];

  useEffect(() => {
    if (
      localStorage.getItem("token") == null &&
      localStorage.getItem("deliveryagent") == null
    ) {
      navigate("/login");
    }
  }, [navigate]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    
    if (name === 'pincode') {
      setErrors(prevErrors => ({
        ...prevErrors,
        pincode: validatePincode(name, value)
      }));
    }
    
    if (name === 'contact') {
      setErrors(prevErrors => ({
        ...prevErrors,
        contact: validateContact(name, value)
      }));
    }

    if (name === 'drivingLicense') {
      setData(prevData => ({
        ...prevData,
        file: files[0]
      }));
    } else {
      setData(prevData => ({
        ...prevData,
        [name]: value
      }));
    }
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

  const navigate = useNavigate();
  const deliveryagent = localStorage.getItem("deliveryagent");

  useEffect(() => {
    axiosInstance
      .get("/get_a_deliveryagent/" + deliveryagent)
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [deliveryagent]);

  const handleEdit = (e) => {
    e.preventDefault();

    // Validate form fields
    let validationErrors = {};
    validationErrors.name = validateField('name', data.name);
    validationErrors.address = validateField('Address', data.address);
    validationErrors.city = validateField('City', data.city);
    validationErrors.district = validateField('District', data.district);
    validationErrors.vehicleNumber = validateField('vehicleNumber', data.vehicleNumber);
    validationErrors.email = validateField('Email', data.email);

    setErrors(validationErrors);

    // Check if there are any validation errors
    const isValid = Object.values(validationErrors).every(error => error === '');
    if (!isValid) {
      return;
    }

    const formData = new FormData();
    for (const key in data) {
      if (key !== 'drivingLicense' && key !== 'file') {
        formData.append(key, data[key]);
      }
      if (key === 'drivingLicense') {
        console.log(data.file)
        formData.append('file', data.file);
      }
    }

    axiosInstance.post('/edit_a_deliveryagent/' + deliveryagent, formData, { 
      headers: {
        'Content-Type': 'multipart/form-data',
      }
    })
    .then((res) => {
      alert("Updated Successfully");
      navigate("/deliveryagentprofile");
    })
    .catch((err) => {
      console.log(err);
    });
  };

  const handlecancel = () => {
    navigate("/deliveryagentprofile")
  }

  return (
    <div className="container">
      <div className="shopprofile-editpage-header">
        <form onSubmit={handleEdit}>
          <Row className="container shopprofile-editpage mt-5 pt-3">
            <h2 className="shopprofile-editpage-h2">Edit Profile</h2>
            <Col className="container">
              <div>
                <label className="container-fluid font" id="font">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control m-2"
                  placeholder={data.name}
                  id="shopprofile-editpage-text2"
                  name="name"
                  onChange={handleChange}
                />
              </div>
              {errors.name && <div className="text-danger color">{errors.name}</div>}
              <div>
                <label className="container-fluid font" id="font">
                  Driving License
                </label>
                <input
                  type="file"
                  className="form-control m-2"
                  id="shopprofile-editpage-text2"
                  name="drivingLicense"
                  onChange={handleChange}
                />
              </div>
              {errors.drivingLicense && <div className="text-danger color">{errors.drivingLicense}</div>}

              <div>
                <label className="container-fluid font" id="font">
                  Address
                </label>
                <input
                  type="text"
                  className="form-control m-2"
                  placeholder={data.address}
                  id="shopprofile-editpage-text2"
                  name="address"
                  onChange={handleChange}
                />
              </div>
              {errors.address && <div className="text-danger color">{errors.address}</div>}

              <div>
                <label className="container-fluid font" id="font">
                  District
                </label>
                <select
                  className="form-control m-2"
                  id="shopprofile-editpage-text2"
                  name="district"
                  onChange={handleChange}
                >
                  <option>Select District</option>
                  {district.map((district, index) => (
                    <option key={index} placeholde={data.district}>
                      {district}
                    </option>
                  ))}
                </select>
                {errors.district && <div className="text-danger color">{errors.district}</div>}
              </div>
              <div>
                <label className="container-fluid font" id="font">
                  City
                </label>
                <input
                  type="text"
                  className="form-control m-2"
                  placeholder={data.city}
                  id="shopprofile-editpage-text2"
                  name="city"
                  onChange={handleChange}
                />
                {errors.city && <div className="text-danger color">{errors.city}</div>}
              </div>
            </Col>
            <Col>
              <div>
                <label className="container-fluid font" id="font">
                  Pincode
                </label>
                <input
                  type="text"
                  className="form-control m-2"
                  placeholder={data.pincode}
                  id="shopprofile-editpage-text2"
                  name="pincode"
                  onChange={handleChange}
                />
                {errors.pincode && <div className="text-danger color">{errors.pincode}</div>}
              </div>
              <div>
                <label className="container-fluid font" id="font">
                  Contact Number
                </label>
                <input
                  type="text"
                  className="form-control m-2"
                  placeholder={data.contactNumber}
                  id="shopprofile-editpage-text2"
                  name="contactNumber"
                  onChange={handleChange}
                />
                {errors.contactNumber && <div className="text-danger color">{errors.contactNumber}</div>}
              </div>
              <div>
                <label className="container-fluid font" id="font">
                  Email Id
                </label>
                <input
                  type="text"
                  className="form-control m-2"
                  placeholder={data.email}
                  id="shopprofile-editpage-text2"
                  name="email"
                  onChange={handleChange}
                />
                {errors.email && <div className="text-danger color">{errors.email}</div>}
              </div>
              <div>
                <label className="container-fluid font" id="font">
                  Vehicle Type
                </label>
                <input
                  type="text"
                  className="form-control m-2"
                  placeholder={data.vehicleType}
                  id="shopprofile-editpage-text2"
                  name="vehicleType"
                  onChange={handleChange}
                />
                {errors.vehicleType && <div className="text-danger color">{errors.vehicleType}</div>}
              </div>
              <div>
                <label className="container-fluid font" id="font">
                  Vehicle Number
                </label>
                <input
                  type="text"
                  className="form-control m-2"
                  placeholder={data.vehicleNumber}
                  id="shopprofile-editpage-text2"
                  name="vehicleNumber"
                  onChange={handleChange}
                />
                {errors.vehicleNumber && <div className="text-danger color">{errors.vehicleNumber}</div>}
              </div>
              <div></div>
            </Col>
            <div className="shopprofile-editpage-btn ms-5 text-center">
              <button
                type="submit"
                className="shopprofile-editpage-subbtn ms-5"
              >
                Update
              </button>
              <button
                type="submit"
                className="shopprofile-editpage-subbtn ms-5"
                onClick={handlecancel}
              >
                Cancel
              </button>
            </div>
          </Row>
        </form>
      </div>
    </div>
  );
}

export default DeliveryagentProfileEdit;
