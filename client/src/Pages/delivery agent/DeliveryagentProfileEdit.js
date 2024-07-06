import React, { useEffect, useState } from "react";
import axiosInstance from "../../APIS/axiosinstatnce";
import { Link, useNavigate } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import editprofile from "../../images/editprofile.png";
import editprooutline from "../../images/editprooutline.png";

function DeliveryagentProfileEdit() {
  const [data, setData] = useState({
    name: "",
    vehicleNumber: "",
    address: "",
    district: "",
    city: "",
    pincode: "",
    contactNumber: "",
    email: "",
    drivingLicense: "",
    vehicleType:""
    // files:""
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
    vehicleType:""
    // shoplicence:""
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

  const handleChange = (e) => {
    const { name, value } = e.target;

    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const handlecancel = () => {
    navigate("/deliveryagentprofile");
  };


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

  // const handleInputChange = (e) => {
  //   const { name, files } = e.target;
  //   setData({ ...data, [name]: files[0] });
  //   console.log(files);
  // };

  const handleEdit = (e) => {
    const formData = new FormData();

    for (const key in data) {
      formData.append(key, data[key]);
    }

    console.log(data, "j");
    e.preventDefault();
    axiosInstance
      .post(`/edit_a_deliveryagent/${deliveryagent}`, data)
      .then((res) => {
        alert("Updated Successfully");
        console.log("Updated Successfully");
        navigate("/deliveryagentprofile");
      })
      .catch((err) => {});
  };

  return (
    <div className="container">
      <div className="shopprofile-editpage-header">
        <form>
          <Row className="container shopprofile-editpage mt-5 pt-3">
            {/* <Row>
            <Col><img className="shopprofile-editpage-img" src={editprofile} alt="img"></img>
            <img className="shopprofile-editpage-imgs" src={editprooutline} alt="img"></img>
            </Col>
            <Col></Col> 
          </Row>
           */}
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
              <div>
                <label className="container-fluid font" id="font">
                  drivingLicense
                </label>
                <input
                  type="text"
                  className="form-control m-2"
                  placeholder={data.drivingLicense}
                  id="shopprofile-editpage-text2"
                  name="drivingLicense"
                  onChange={handleChange}
                />
              </div>
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
                  {districts.map((district, index) => (
                    <option key={index} placeholde={data.district}>
                      {district}
                    </option>
                  ))}
                </select>
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
              </div>
              <div>
                <label className="container-fluid font" id="font">
                  vehicleTyper
                </label>
                <input
                  type="text"
                  className="form-control m-2"
                  placeholder={data.vehicleType}
                  id="shopprofile-editpage-text2"
                  name="vehicleType"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="container-fluid font" id="font">
                  vehicle Number
                </label>
                <input
                  type="text"
                  className="form-control m-2"
                  placeholder={data.vehicleNumber}
                  id="shopprofile-editpage-text2"
                  name="vehicleNumber"
                  onChange={handleChange}
                />
              </div>
              <div></div>
            </Col>
            <div className="shopprofile-editpage-btn ms-5 text-center">
              <button
                type="submit"
                className="shopprofile-editpage-subbtn ms-5"
                onClick={handleEdit}
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
