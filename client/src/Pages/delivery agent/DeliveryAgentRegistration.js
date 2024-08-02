import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import axiosInstance from "../../APIS/axiosinstatnce";
import "./DeliveryAgentRegistration.css";
import { useNavigate, Link } from "react-router-dom";
import img from "../../images/image 72.png";
import axiosMultipartInstance from "../../APIS/axiosMultipartInstance";
import { FiEyeOff } from "react-icons/fi";
import { FaEye } from "react-icons/fa6";
function DeliveryAgentRegistration() {
  const [data, setData] = useState({
    name: "",
    address: "",
    district: "",
    city: "",
    pincode: "",
    vehicleType: "",
    vehicleNumber: "",
    drivingLicense: null,
    contactNumber: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    address: "",
    district: "",
    city: "",
    pincode: "",
    vehicleType: "",
    vehicleNumber: "",
    drivingLicense: null,
    contactNumber: "",
    email: "",
    password: "",
    confirmPassword: "",
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
    "Wayanad",
  ];

  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const [showConfirmPassword, setshowConfirmPassword] = useState(false);
  const toggleConfirmPasswordVisibility = () => {
    setshowConfirmPassword(!showConfirmPassword);
  };

  const Navigate = useNavigate();

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
  }


  const handleFileChange = (e) => {
    console.log(data, "mmm");
    const { name, files } = e.target;
    setData({ ...data, [name]: files[0] });
  };


  const validateField = (fieldName, value) => {
    if (!value.trim()) {
      return `${fieldName} is Required`;
    }
    if (fieldName === "Email" && !value.endsWith("@gmail.com")) {
      return "Email must be a valid Gmail address";
    }
    return;
  };

  function validateContact(fieldName, value) {
    if (typeof value === "string" && !value.trim()) {
      return `${fieldName} is required`;
    } else if (value.length !== 10) {
      return "Please enter a valid Contact Number";
    }
    return "";
  }

  function validatePincode(fieldName, value) {
    if (typeof value === "string" && !value.trim()) {
      return `${fieldName} is required`;
    } else if (value.length !== 6) {
      return "Please enter a valid Pincode";
    }
    return "";
  }

  const handleSubmit = async (e) => {
    console.log(data);
    e.preventDefault();
    let errors = {};
    let formIsValid = true;

    errors.name = validateField("name", data.name);
    errors.vehicleType = validateField("vehicle Type", data.vehicleType);
    errors.address = validateField("Address", data.address);
    errors.district = validateField("District", data.district);
    errors.city = validateField("City", data.city);
    errors.pincode = validatePincode("Pincode", data.pincode);
    errors.contactNumber = validateContact("contactNumber", data.contactNumber);
    errors.email = validateField("Email", data.email);
    errors.vehicleNumber = validateField(
      "vehicleNumber",
      data.vehicleNumber
    );
    // errors.dealerlisence=validateField("DealerLicense",data.dealerlisence)
    errors.password = validateField("Password", data.password);
    errors.confirmPassword = validateField(
      "ConfirmPassword",
      data.confirmPassword
    );

    const passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[A-Z]).{6,}$/;

    if (!data.password || !data.password.trim()) {
      formIsValid = false;
      errors.password = "Password is required";
      console.log("in 1");
    } else if (!passwordRegex.test(data.password)) {
      errors.password =
        "Password must contain at least one number, one special character, and one capital letter";
      console.log("in 2");
    }

    if (!data.confirmPassword || !data.confirmPassword.trim()) {
      formIsValid = false;
      console.log("in 3");

      errors.confirmPassword = "Confirm Password is required";
    } else if (data.confirmPassword !== data.password) {
      formIsValid = false;
      console.log("in 4");

      errors.confirmPassword = "Passwords do not match";
    }

    setErrors(errors);

    for (let key in errors) {
      if (errors[key]) {
        console.log(errors[key]);
        formIsValid = false;
        console.log("in 6");
        break;
      }
    }
    console.log("form", formIsValid);
    if (formIsValid) {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("vehicleType", data.vehicleType);
      formData.append("address", data.address);
      formData.append("district", data.district);
      formData.append("city", data.city);
      formData.append("pincode", data.pincode);
      formData.append("contactNumber", data.contactNumber);
      formData.append("email", data.email);
      formData.append("vehicleNumber", data.vehicleNumber);
      formData.append("file", data.drivingLicense);
      formData.append("password", data.password);

      try {
        console.log("in try");
        const res = await axiosMultipartInstance.post(
          "/delivery_agent_register",
          formData
        );
        console.log(res);
        if (res.data.status === 200) {
          alert("Register Successfully");
          console.log("Register Successfully", res);
          Navigate("/deliveryagentlogin");
        } else {
          alert("Registration is Falied");
          console.log("Registration is Falied", res);
        }
      } catch (error) {
        console.error("There was an error!", error);
        alert("Error");
      }
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
                  <h1 className="AgentRegistration-input-div-leftdiv-h1">
                    Name
                  </h1>
                  <input
                    type="text"
                    className="AgentRegistration-input-div-leftdiv-inp"
                    placeholder="Name"
                    name="name"
                    value={data.name}
                    onChange={handleChange}
                  />
                  {errors.name && (
                    <span className="text-danger">{errors.name}</span>
                  )}
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
                    onChange={handleChange}
                  />
                  {errors.address && (
                    <span className="text-danger">{errors.address}</span>
                  )}
                </div>

                <div className="input-box mt-3">
                  {" "}
                  <label className="container font" id="font">
                    District
                  </label>{" "}
                  <select
                    className="form-select m-2  wholesale-dealer-register-textbox"
                    name="district"
                    value={data.district}
                    onChange={handleChange}
                  >
                    <option>Select District</option>
                    {district.map((district, index) => (
                      <option key={index} value={district}>
                        {district}
                      </option>
                    ))}
                  </select>
                  {errors.district && (
                    <span className="text-danger">{errors.district}</span>
                  )}
                </div>
                <div></div>

                <div>
                  <h1 className="AgentRegistration-input-div-leftdiv-h1">
                    City
                  </h1>
                  <input
                    type="text"
                    className="AgentRegistration-input-div-leftdiv-inp"
                    placeholder="City"
                    name="city"
                    value={data.city}
                    onChange={handleChange}
                  />
                  {errors.city && (
                    <span className="text-danger">{errors.city}</span>
                  )}
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
                    onChange={handleChange}
                  />
                  {errors.pincode && (
                    <span className="text-danger">{errors.pincode}</span>
                  )}
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
                    onChange={handleChange}
                  />
                  {errors.vehicleType && (
                    <span className="text-danger">{errors.vehicleType}</span>
                  )}
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
                    onChange={handleChange}
                  />
                  {errors.vehicleNumber && (
                    <span className="text-danger">{errors.vehicleNumber}</span>
                  )}
                </div>

                <div>
                  <h1 className="AgentRegistration-input-div-leftdiv-h1">
                    Driving License
                  </h1>
                  <input
                    type="file"
                    className="AgentRegistration-input-div-leftdiv-inp"
                    placeholder="Driving License"
                    name="drivingLicense"
                    // value={data.drivingLicense}
                    onChange={handleFileChange}
                  />
                  {errors.drivingLicense && (
                    <span className="text-danger">{errors.drivingLicense}</span>
                  )}
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
                    onChange={handleChange}
                  />
                  {errors.contactNumber && (
                    <span className="text-danger">{errors.contactNumber}</span>
                  )}
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
                    onChange={handleChange}
                  />
                  {errors.email && (
                    <span className="text-danger">{errors.email}</span>
                  )}
                </div>

                <div>
                  <h1 className="AgentRegistration-input-div-leftdiv-h1">
                    Password
                  </h1>
                  <input
                    type={showPassword ? "text" : "password"}
                    className="AgentRegistration-input-div-leftdiv-inp"
                    placeholder="Password"
                    name="password"
                    value={data.password}
                    onChange={handleChange}
                  />
                  <div className="deliveryreg-pswd-eyeicon" onClick={togglePasswordVisibility}>
                    {showPassword ? <FiEyeOff /> : <FaEye />}
                  </div>
                  {errors.password && (
                    <span className="text-danger">{errors.password}</span>
                  )}
                </div>

                <div className="mt-3">
                  <h1 className="AgentRegistration-input-div-leftdiv-h1">
                    Confirm Password
                  </h1>
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    className="AgentRegistration-input-div-leftdiv-inp"
                    placeholder="Confirm Password"
                    name="confirmPassword"
                    value={data.confirmPassword}
                    onChange={handleChange}
                  />
                  <div className="deliveryreg-pswd-eyeicon" onClick={toggleConfirmPasswordVisibility}>
                    {showConfirmPassword ? <FiEyeOff /> : <FaEye />}
                  </div>
                  {errors.confirmPassword && (
                    <span className="text-danger">
                      {errors.confirmPassword}
                    </span>
                  )}
                </div>
              </div>
            </div>

            <button
              className="AgentRegistration-input-div-button"
              type="submit"
            >
              Register
            </button>
          </form>

          <p className="AgentRegistration-input-div-p">
            Already have an account?{" "}
            <Link to="/deliveryagentlogin" alt="">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default DeliveryAgentRegistration;
