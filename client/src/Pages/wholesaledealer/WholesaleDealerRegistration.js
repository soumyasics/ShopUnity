import React, { useState } from "react";
import "./wholesale.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import wholesaledealerreg from "../../images/wholesaledealerreg.png";
import { Link, Navigate, useNavigate } from "react-router-dom";
import axiosMultipartInstance from "../../APIS/axiosMultipartInstance";

function WholesaleDealerRegistration() {
  const [data, setData] = useState({
    storename: "",
    dealername: "",
    address: "",
    districts: "",
    city: "",
    pincode: "",
    contact: "",
    email: "",
    wholesaleregisternumber: "",
    dealerlisence: null,
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({
    storename: "",
    dealername: "",
    address: "",
    districts: "",
    city: "",
    pincode: "",
    contact: "",
    email: "",
    wholesaleregisternumber: "",
    dealerlisence: null,
    password: "",
    confirmPassword: "",
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
  };

  const handleFileChange = (e) => {
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

    errors.storename = validateField("Storename", data.storename);
    errors.dealername = validateField("DealerName", data.dealername);
    errors.address = validateField("Address", data.address);
    errors.districts = validateField("District", data.districts);
    errors.city = validateField("City", data.city);
    errors.pincode = validatePincode("Pincode", data.pincode);
    errors.contact = validateContact("Contact", data.contact);
    errors.email = validateField("Email", data.email);
    errors.wholesaleregisternumber = validateField(
      "RegistrationNumber",
      data.wholesaleregisternumber
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
      formData.append("storename", data.storename);
      formData.append("dealername", data.dealername);
      formData.append("address", data.address);
      formData.append("districts", data.districts);
      formData.append("city", data.city);
      formData.append("pincode", data.pincode);
      formData.append("contact", data.contact);
      formData.append("email", data.email);
      formData.append("wholesaleregisternumber", data.wholesaleregisternumber);
      formData.append("dealerlisence", data.dealerlisence);
      formData.append("password", data.password);

      try {
        console.log("in try");
        const res = await axiosMultipartInstance.post(
          "/wholesale_register",
          data
        );
        console.log(res);
        if (res.data.status === 200) {
          alert("Register Successfully");
          console.log("Register Successfully", res);
          Navigate("/wholesaledealerlogin");
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
    <div>
      <div className="row">
        <div className="col-6 container">
          <img
            className="wholesale-dealer-reg-img"
            src={wholesaledealerreg}
            alt="img"
          ></img>
        </div>
        <div className="col-6 container">
          <div className="wholesale-dealer-reg-box container">
            <h1 className="wholesale-dealer-reg-h1 mt-2 text-center">
              WholeSale Dealer Register
            </h1>
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className=" col-6 container">
                  <div className="input-box mt-3">
                    {" "}
                    <label className="wholesale-dealer-register-label ms-2">
                      Store Name
                    </label>{" "}
                    <input
                      type="text"
                      placeholder="Store Name"
                      className="form-control m-2 wholesale-dealer-register-textbox "
                      name="storename"
                      value={data.storename}
                      onChange={handleChange}
                    />
                    {errors.storename && (
                      <span className="text-danger">{errors.storename}</span>
                    )}
                  </div>
                  <div className="input-box mt-3">
                    {" "}
                    <label className="wholesale-dealer-register-label ms-2">
                      Dealer Name
                    </label>{" "}
                    <input
                      type="text"
                      placeholder="Dealer Name"
                      className="form-control m-2 wholesale-dealer-register-textbox"
                      name="dealername"
                      value={data.dealername}
                      onChange={handleChange}
                    />
                    {errors.dealername && (
                      <span className="text-danger">{errors.dealername}</span>
                    )}
                  </div>
                  <div className="input-box mt-3">
                    {" "}
                    <label className="wholesale-dealer-register-label ms-2">
                      Address
                    </label>{" "}
                    <input
                      type="text"
                      placeholder="Address"
                      className="form-control m-2 wholesale-dealer-register-textbox"
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
                      name="districts"
                      value={data.districts}
                      onChange={handleChange}
                    >
                      <option>Select District</option>
                      {districts.map((district, index) => (
                        <option key={index} value={district}>
                          {district}
                        </option>
                      ))}
                    </select>
                    {errors.districts && (
                      <span className="text-danger">{errors.districts}</span>
                    )}
                  </div>
                  <div className="input-box mt-3">
                    {" "}
                    <label className="wholesale-dealer-register-label ms-2">
                      City
                    </label>{" "}
                    <input
                      type="text"
                      placeholder="City"
                      className="form-control m-2 wholesale-dealer-register-textbox"
                      name="city"
                      value={data.city}
                      onChange={handleChange}
                    />
                    {errors.city && (
                      <span className="text-danger">{errors.city}</span>
                    )}
                  </div>
                  <div className="input-box mt-3">
                    {" "}
                    <label className="wholesale-dealer-register-label ms-2">
                      Pincode
                    </label>{" "}
                    <input
                      type="text"
                      placeholder="Pincode"
                      className="form-control m-2 wholesale-dealer-register-textbox"
                      name="pincode"
                      value={data.pincode}
                      onChange={handleChange}
                    />
                    {errors.pincode && (
                      <span className="text-danger">{errors.pincode}</span>
                    )}
                  </div>
                </div>
                <div className=" col-6 container">
                  <div className="input-box mt-3">
                    {" "}
                    <label className="wholesale-dealer-register-label ms-2">
                      Contact Number
                    </label>{" "}
                    <input
                      type="text"
                      placeholder="Contact Number"
                      className="form-control m-2 wholesale-dealer-register-textbox"
                      name="contact"
                      value={data.contact}
                      onChange={handleChange}
                    />
                    {errors.contact && (
                      <span className="text-danger">{errors.contact}</span>
                    )}
                  </div>
                  <div className="input-box mt-3">
                    {" "}
                    <label className="wholesale-dealer-register-label ms-2">
                      Email ID
                    </label>{" "}
                    <input
                      type="text"
                      placeholder="Email id"
                      className="form-control m-2 wholesale-dealer-register-textbox"
                      name="email"
                      value={data.email}
                      onChange={handleChange}
                    />
                    {errors.email && (
                      <span className="text-danger">{errors.email}</span>
                    )}
                  </div>
                  <div className="input-box mt-3">
                    {" "}
                    <label className="wholesale-dealer-register-label ms-2">
                      Registration Number
                    </label>{" "}
                    <input
                      type="text"
                      placeholder="Registration Number"
                      className="form-control m-2 wholesale-dealer-register-textbox"
                      name="wholesaleregisternumber"
                      value={data.wholesaleregisternumber}
                      onChange={handleChange}
                    />
                    {errors.wholesaleregisternumber && (
                      <span className="text-danger">
                        {errors.wholesaleregisternumber}
                      </span>
                    )}
                  </div>
                  <div className="input-box mt-3">
                    {" "}
                    <label className="wholesale-dealer-register-label ms-2">
                      Dealer License
                    </label>{" "}
                    <input
                      type="file"
                      placeholder="Dealer License"
                      className="form-control m-2 wholesale-dealer-register-textbox"
                      name="dealerlisence"
                      onChange={handleFileChange}
                    />
                    {/* {errors.dealerlisence && <span className="text-danger">{errors.dealerlisence}</span>} */}
                  </div>
                  <div className="input-box mt-3">
                    {" "}
                    <label className="wholesale-dealer-register-label ms-2">
                      Password
                    </label>{" "}
                    <input
                      type="password"
                      placeholder="Password"
                      className="form-control m-2 wholesale-dealer-register-textbox"
                      name="password"
                      value={data.password}
                      onChange={handleChange}
                    />
                    {errors.password && (
                      <span className="text-danger">{errors.password}</span>
                    )}
                  </div>
                  <div className="input-box mt-3">
                    {" "}
                    <label className="wholesale-dealer-register-label ms-2">
                      Confirm Password
                    </label>{" "}
                    <input
                      type="password"
                      placeholder=" Confirm Password"
                      className="form-control m-2 wholesale-dealer-register-textbox"
                      name="confirmPassword"
                      value={data.confirmPassword}
                      onChange={handleChange}
                    />
                    {errors.confirmPassword && (
                      <span className="text-danger">
                        {errors.confirmPassword}
                      </span>
                    )}
                  </div>
                </div>
              </div>
              <button
                type="submit"
                className="wholesale-dealer-register-regbtn mt-4"
              >
                Register
              </button>
            </form>
            <div className="wholesale-dealer-register-text">
              <h6 className="text-center">
                Already have an account?{" "}
                <Link
                  to="/wholesaledealerlogin"
                  className="wholesale-dealer-register-link"
                >
                  Log In
                </Link>
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WholesaleDealerRegistration;
