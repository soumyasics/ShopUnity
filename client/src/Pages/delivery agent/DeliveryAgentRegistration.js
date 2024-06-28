import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import axiosInstance from "../../APIS/axiosinstatnce"; 
import './DeliveryAgentRegistration.css';
import { useNavigate } from "react-router-dom";
import img from "../../images/image 72.png";

function DeliveryAgentRegistration() {
  const [data, setData] = useState({
    name: "",
    address: "",
    district: "",
    city: "",
    pincode: "",
    vehicleType: "",
    vehicleNumber: "",
    drivingLicense: "",
    contactNumber: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validate = () => {
    const errors = {};

    if (!data.name.trim()) errors.name = "Name is required";
    if (!data.address.trim()) errors.address = "Address is required";
    if (!data.district.trim()) errors.district = "District is required";
    if (!data.city.trim()) errors.city = "City is required";
    if (!data.pincode.trim()) errors.pincode = "Pincode is required";
    if (!data.vehicleType.trim()) errors.vehicleType = "Vehicle type is required";
    if (!data.vehicleNumber.trim()) errors.vehicleNumber = "Vehicle number is required";
    if (!data.drivingLicense.trim()) errors.drivingLicense = "Driving license is required";
    if (!data.contactNumber.trim()) errors.contactNumber = "Contact number is required";
    if (!data.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      errors.email = "Email is invalid";
    }
    if (!data.password.trim()) {
      errors.password = "Password is required";
    } else if (data.password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    }
    if (!data.confirmPassword.trim()) {
      errors.confirmPassword = "Confirm password is required";
    } else if (data.confirmPassword !== data.password) {
      errors.confirmPassword = "Passwords do not match";
    }

    return errors;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      try {
        const response = await axiosInstance.post("/delivery_agent_register", data);
        if (response.status === 200) {
          alert("Registration successful");
          navigate("/deliveryagentlogin"); // Adjust the route as needed
        }
      } catch (error) {
        console.error("There was an error!", error);
        alert("There was an error during registration");
      }
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="AgentRegistration">
      <div className="AgentRegistration-contain">
        <div className="mt-5">
          <img src={img} alt="" />
        </div>

        <div className="AgentRegistration-input-div">
          <h1 className="AgentRegistration-input-div-h1">
            Delivery Agent Register
          </h1>

          <form onSubmit={handleSubmit} noValidate>
            <div className="AgentRegistration-input-div-div">
              <div className="AgentRegistration-input-div-leftdiv">
                <div>
                  <h1 className="AgentRegistration-input-div-leftdiv-h1">Name</h1>
                  <input
                    type="text"
                    className="AgentRegistration-input-div-leftdiv-inp"
                    placeholder="Name"
                    name="name"
                    value={data.name}
                    onChange={handleInputChange}
                  />
                  {errors.name && <span className="text-danger">{errors.name}</span>}
                </div>

                <div>
                  <h1 className="AgentRegistration-input-div-leftdiv-h1">
                    Address
                  </h1>
                  <input
                    type="text"
                    className="AgentRegistration-input-div-leftdiv-inp"
                    placeholder="Address"
                    name="address"
                    value={data.address}
                    onChange={handleInputChange}
                  />
                  {errors.address && <span className="text-danger">{errors.address}</span>}
                </div>

                <div>
                  <h1 className="AgentRegistration-input-div-leftdiv-h1">
                    District
                  </h1>
                  <input
                    type="text"
                    className="AgentRegistration-input-div-leftdiv-inp"
                    placeholder="District"
                    name="district"
                    value={data.district}
                    onChange={handleInputChange}
                  />
                  {errors.district && <span className="text-danger">{errors.district}</span>}
                </div>

                <div>
                  <h1 className="AgentRegistration-input-div-leftdiv-h1">City</h1>
                  <input
                    type="text"
                    className="AgentRegistration-input-div-leftdiv-inp"
                    placeholder="City"
                    name="city"
                    value={data.city}
                    onChange={handleInputChange}
                  />
                  {errors.city && <span className="text-danger">{errors.city}</span>}
                </div>

                <div>
                  <h1 className="AgentRegistration-input-div-leftdiv-h1">
                    Pincode
                  </h1>
                  <input
                    type="text"
                    className="AgentRegistration-input-div-leftdiv-inp"
                    placeholder="Pincode"
                    name="pincode"
                    value={data.pincode}
                    onChange={handleInputChange}
                  />
                  {errors.pincode && <span className="text-danger">{errors.pincode}</span>}
                </div>

                <div>
                  <h1 className="AgentRegistration-input-div-leftdiv-h1">
                    Vehicle Type
                  </h1>
                  <input
                    type="text"
                    className="AgentRegistration-input-div-leftdiv-inp"
                    placeholder="Vehicle Type"
                    name="vehicleType"
                    value={data.vehicleType}
                    onChange={handleInputChange}
                  />
                  {errors.vehicleType && <span className="text-danger">{errors.vehicleType}</span>}
                </div>
              </div>

              <div className="AgentRegistration-input-div-rightdiv">
                <div>
                  <h1 className="AgentRegistration-input-div-leftdiv-h1">
                    Vehicle Number
                  </h1>
                  <input
                    type="text"
                    className="AgentRegistration-input-div-leftdiv-inp"
                    placeholder="Vehicle Number"
                    name="vehicleNumber"
                    value={data.vehicleNumber}
                    onChange={handleInputChange}
                  />
                  {errors.vehicleNumber && <span className="text-danger">{errors.vehicleNumber}</span>}
                </div>

                <div>
                  <h1 className="AgentRegistration-input-div-leftdiv-h1">
                    Driving License
                  </h1>
                  <input
                    type="text"
                    className="AgentRegistration-input-div-leftdiv-inp"
                    placeholder="Driving License"
                    name="drivingLicense"
                    value={data.drivingLicense}
                    onChange={handleInputChange}
                  />
                  {errors.drivingLicense && <span className="text-danger">{errors.drivingLicense}</span>}
                </div>

                <div>
                  <h1 className="AgentRegistration-input-div-leftdiv-h1">
                    Contact Number
                  </h1>
                  <input
                    type="text"
                    className="AgentRegistration-input-div-leftdiv-inp"
                    placeholder="Contact Number"
                    name="contactNumber"
                    value={data.contactNumber}
                    onChange={handleInputChange}
                  />
                  {errors.contactNumber && <span className="text-danger">{errors.contactNumber}</span>}
                </div>

                <div>
                  <h1 className="AgentRegistration-input-div-leftdiv-h1">
                    Email Id
                  </h1>
                  <input
                    type="email"
                    className="AgentRegistration-input-div-leftdiv-inp"
                    placeholder="Email"
                    name="email"
                    value={data.email}
                    onChange={handleInputChange}
                  />
                  {errors.email && <span className="text-danger">{errors.email}</span>}
                </div>

                <div>
                  <h1 className="AgentRegistration-input-div-leftdiv-h1">
                    Password
                  </h1>
                  <input
                    type="password"
                    className="AgentRegistration-input-div-leftdiv-inp"
                    placeholder="Password"
                    name="password"
                    value={data.password}
                    onChange={handleInputChange}
                  />
                  {errors.password && <span className="text-danger">{errors.password}</span>}
                </div>

                <div>
                  <h1 className="AgentRegistration-input-div-leftdiv-h1">
                    Confirm Password
                  </h1>
                  <input
                    type="password"
                    className="AgentRegistration-input-div-leftdiv-inp"
                    placeholder="Confirm Password"
                    name="confirmPassword"
                    value={data.confirmPassword}
                    onChange={handleInputChange}
                  />
                  {errors.confirmPassword && <span className="text-danger">{errors.confirmPassword}</span>}
                </div>
              </div>
            </div>

            <button className="AgentRegistration-input-div-button" type="submit">
              Register
            </button>
          </form>

          <p className="AgentRegistration-input-div-p">
            Already have an account?{" "}
            <a href="/login" alt="">
              Log in
            </a>
          </p>
        </div>
      </div>
    </div>

  );
}

export default DeliveryAgentRegistration;
