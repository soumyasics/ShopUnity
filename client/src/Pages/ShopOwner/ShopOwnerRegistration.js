import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./shopowner.css";
import { useNavigate, Link } from "react-router-dom";
import axiosInstance from "../../APIS/axiosinstatnce";

function ShopOwnerRegistration() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    shopname: "",
    shopownername: "",
    shopownercontact: "",
    shopowneremail: "",
    shopowneraddress: "",
    shopregistrationnumber: " ",
    shoplisence: "",
    shopownerpassword: "",
  });

  const [errors, setErrors] = useState({
    shopname: "",
    shopownername: "",
    shopownercontact: "",
    shopowneremail: "",
    shopowneraddress: "",
    shopregistrationnumber: " ",
    shoplisence: "",
    shopownerpassword: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setData({ ...data, [name]: files[0] });
    console.log(files);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let errors = {};

    let formValid = true;

    if (!data.shopname.trim()) {
      formValid = false;
      errors.shopname = "shopname is required";
    }
    if (!data.shopownername.trim()) {
      formValid = false;
      errors.shopownername = "shopownername is required";
    }

    if (!data.shopownercontact.trim()) {
      formValid = false;
      errors.contact = "Contact number is required";
    } else if (data.shopownercontact.length < 10) {
      errors.shopownercontact = "Enter a valid 10-digit contact number";
    }

    if (!data.shopowneraddress.trim()) {
      formValid = false;
      errors.shopowneraddress = "shopowneraddress is required";
    }

    if (!data.shopowneremail.trim()) {
      formValid = false;
      errors.shopowneremail = "Email is required";
    } else if (!data.shopowneremail.endsWith("@gmail.com")) {
      formValid = false;
      errors.shopowneremail = "Email must be a valid Gmail address";
    }

    if (!data.shopregistrationnumber.trim()) {
      formValid = false;
      errors.shopregistrationnumber =
        "Shop registration number number is required";
    } else if (data.shopregistrationnumber.length <= 3) {
      errors.shopregistrationnumber = "Enter a valid Registartion number";
    }

    if (!data.shopownerpassword.trim()) {
      formValid = false;
      errors.shopownerpassword = "Password is required";
    } else if (
      !/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}/.test(
        data.shopownerpassword
      )
    ) {
      formValid = false;
      errors.shopownerpassword =
        "Password should be at least 6 characters long and contain at least one lowercase letter, one uppercase letter, one number, and one special character";
    }

    setErrors(errors);

    // console.log(data.shoplisence);
    if (
      data.shopname &&
      data.shopownername &&
      data.shopowneremail &&
      data.shopownercontact &&
      data.shopowneraddress &&
      data.shopregistrationnumber &&
      data.shopownerpassword &&
      data.shoplisence
    ) {
      formValid = true;
    }

    if (Object.keys(errors).length === 0 && formValid) {
      const formData = new FormData();

      console.log(data.shoplisence, data.shopname);
      formData.append("shopname", data.shopname);
      formData.append("shopownername", data.shopownername);
      formData.append("shopowneremail", data.shopowneremail);
      formData.append("shopownercontact", data.shopownercontact);
      formData.append("shopowneraddress", data.shopowneraddress);
      formData.append("shopregistrationnumber", data.shopregistrationnumber);
      formData.append("shopownerpassword", data.shopownerpassword);
      formData.append("file", data.shoplisence);
      try {
        console.log(formData, "formdata");
        var response;
        if (formData) {
          response = await axiosInstance.post("/shopeowner_register", formData);
        }

        console.log("Response:", response);
        alert("Waiting for Admin approval..");
        setTimeout(() => {
          navigate("/shopownerlogin");
        }, 1500);
      } catch (error) {
        console.error("Error:", error);
        let msg = error?.response?.data?.message || "Error occurred";
        alert(msg);
      }
    } else {
      // console.log("Form is not valid", formValid);
      // console.log("Data entered", data);
    }
  };
  return (
    <div className="shop_register">
      <h5 className="text-center mt-5 text-light"> Shop Owner Register</h5>
      <Row className="shop_register_main">
        <div className="col">
          <form
            onSubmit={handleSubmit}
            className="p-4"
            style={{
              margin: "0% 18%",
              boxShadow: " rgba(0, 0, 0, 0.24) 0px 3px 8px",
              borderRadius: "16px",
            }}
          >
            <div className="input-box">
              {" "}
              <label className="text-light">Shop Name</label>{" "}
              <input
                type="text"
                placeholder="shopname"
                value={data.shopname}
                name="shopname"
                className="form-control m-2"
                onChange={handleInputChange}
              />
              {errors.shopname && (
                <div className="text-danger errortext">{errors.shopname}</div>
              )}
            </div>

            <div className="input-box">
              <label className="text-light">Shop Owner Name</label>{" "}
              <input
                type="text"
                placeholder="shopownername"
                value={data.shopownername}
                name="shopownername"
                className="form-control m-2"
                onChange={handleInputChange}
              />
              {errors.shopownername && (
                <div className="text-danger errortext">
                  {errors.shopownername}
                </div>
              )}
            </div>
            <div className="input-box">
              <div className="label">
                {" "}
                <label className="text-light">Shopowner Contact</label>{" "}
              </div>
              <input
                type="number"
                placeholder="shopownercontact"
                name="shopownercontact"
                className="form-control m-2"
                value={data.shopownercontact}
                onChange={handleInputChange}
              />

              {errors.shopownercontact && (
                <div className="text-danger errortext">
                  {errors.shopownercontact}
                </div>
              )}
            </div>

            <div className="input-box">
              <div className="label">
                {" "}
                <label className="text-light">Email</label>{" "}
              </div>
              <input
                type="email"
                value={data.shopowneremail}
                placeholder="shopowneremail"
                name="shopowneremail"
                className="form-control m-2"
                onChange={handleInputChange}
              />

              {errors.shopowneremail && (
                <div className="text-danger errortext">
                  {errors.shopowneremail}
                </div>
              )}
            </div>

            <div className="input-box">
              <div className="label">
                {" "}
                <label className="text-light">Shopowner Address</label>{" "}
              </div>
              <input
                type="text"
                value={data.shopowneraddress}
                placeholder="shopowneraddress"
                name="shopowneraddress"
                className="form-control m-2"
                onChange={handleInputChange}
              />

              {errors.shopowneraddress && (
                <div className="text-danger errortext">
                  {errors.shopowneraddress}
                </div>
              )}
            </div>

            <div className="input-box">
              <div className="label">
                {" "}
                <label className="text-light">Shop Registration Number</label>
              </div>
              <input
                type="text"
                placeholder="shopregistrationnumber"
                name="shopregistrationnumber"
                className="form-control m-2"
                value={data.shopregistrationnumber}
                onChange={handleInputChange}
              />

              {errors.shopregistrationnumber && (
                <div className="text-danger errortext">
                  {errors.shopregistrationnumber}
                </div>
              )}
            </div>

            <div className="input-box">
              <div className="label">
                {" "}
                <label className="text-light">Password</label>{" "}
              </div>
              <input
                type="password"
                className="form-control m-2"
                placeholder="shopownerpassword"
                value={data.shopownerpassword}
                name="shopownerpassword"
                onChange={handleInputChange}
              />

              {errors.shopownerpassword && (
                <div className="text-danger errortext">
                  {errors.shopownerpassword}
                </div>
              )}
            </div>

            <div className="mt-3">
              {" "}
              <label className="text-light">Shop Lisence</label>{" "}
              <input
                className="text-light border border-light w-100 rounded p-2"
                type="file"
                name="shoplisence"
                onChange={handleFileChange}
                // required
              />
              {errors.shoplisence && (
                <div className="form-control m-2 text-danger errortext">
                  {errors.shoplisence}
                </div>
              )}
            </div>

            <div className="text m-3">
              <h6 className="text-light">
                Already have an account? <Link to="/login">Login now</Link>
              </h6>
            </div>

            <div className="inbutton d-flex justify-content-center">
              <button type="submit" className="btn btn-primary icon text-light">
                Sign UP
              </button>
            </div>
          </form>
        </div>
        <Col></Col>
      </Row>
    </div>
  );
}

export default ShopOwnerRegistration;
