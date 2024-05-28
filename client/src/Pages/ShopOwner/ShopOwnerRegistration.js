import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./shopowner.css";
import { useNavigate, Link } from "react-router-dom";
import axiosInstance from "../../APIS/axiosinstatnce";
import shopownerreg from "../../images/shopownerreg.png"
function ShopOwnerRegistration() {
  const[data,setData]=useState({
    shopname:"",
    shopownername:"",
    shopowneraddress:"",
    shopownerdistrict:"",
    shopownercity:"",
    shopownerpincode:"",
    shopownercontact:"",
    shopowneremail:"",
    shopownerregistration:"",
    shoplisence:"",
    shopownerpassword:"",
    shopownerconfirmpassword:""
  })
  const districts=[
    'Alappuzha','Ernakulam','Idukki','Kannur','Kasaragod',
    'Kollam', 'Kottayam', 'Kozhikode', 'Malappuram', 'Palakkad',
    'Pathanamthitta', 'Thiruvananthapuram', 'Thrissur', 'Wayanad'
  ];

  const handlePhoneNumberChange = (value) => {
    let newValue = value.replace(/\D/g, '');
    if (newValue.length > 10) {
        newValue = newValue.slice(0, 10);
    }
    return newValue;
};

const handlePincodeChange = (value) => {
  let newValue = value.replace(/\D/g, '');
  if (newValue.length > 6) {
      newValue = newValue.slice(0, 6);
  }
  return newValue;
};

const handleChange = (e) => {
  const { name, value } = e.target;
  let newValue;
  
  if (name === "phone") {
      newValue = handlePhoneNumberChange(value);
  } else if (name === "name") {
      newValue = value.replace(/[^a-zA-Z\s]/g, '');
  } else {
      newValue = value;
  }
  
  setData({ ...data, [name]: newValue });
  
  setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: newValue.trim() === "" ? `${name.charAt(0).toUpperCase() + name.slice(1)} required` : null
  }));
};
  const validateForm=()=>{
    let formErrors={};

    if(!data.shopname)
      formErrors.shopname='ShopName Required';
    if(!data.shopownername)
      formErrors.shopownername='ShopownerName Required';
    if(!data.shopowneraddress)
      formErrors.shopowneraddress='Address Required';
    if(!data.shopownerdistrict)
      formErrors.shopownerdistrict='District Required';
    if(!data.shopownercity)
      formErrors.shopownercity='City Required';
    if(!data.shopownerpincode)
      formErrors.shopownerpincode='Pincode Required';
    if(!data.shopownercontact)
      formErrors.shopownercontact='Contact Required';
    if(!data.shopowneremail)
      formErrors.shopowneremail='Email Required';
    if(!data.shopownerregistration)
      formErrors.shopownerregistration='Registration Required';
    if(!data.shoplisence)
      formErrors.shoplisence='Shoplisence Required';
    if(!data.shopownerpassword)
      formErrors.shopownerpassword='SPassword Required';
    if(!data.shopownerconfirmpassword)
      formErrors.shopownerconfirmpassword='Password Required';

    return formErrors;
  }

  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
  e.preventDefault();
  const formErrors = validateForm();
  setErrors(formErrors);
};

return (
  <div  className="ownerregg container-fluid">
    <Row className="container-fluid">
      <Col className="col-6 container">
      <img className="shopownerimg container" src={shopownerreg} alt=''></img>
      </Col>
      <Col className="col-6">
        <div className="ownerreg">
        <h1  className="text-center reg" id="ownerreg">Shop Owner Register</h1><br></br>
        <Row className="container-fluid">
          <Col className="col-6" id="regcol">
          <form onSubmit={handleSubmit}>
          <div className="input-box">
              {" "}
              <label className="container-fluid font" id="font">Shop Name</label>{" "}
               <input
                 type="text"
                 placeholder="shopname"
               value={data.shopname}
                 name="shopname"
                 id="text1"
                 className="form-control m-2 textbox "
                 onChange={handleChange}
               />
               {errors.shopname && <span className='span-required'>{errors.shopname}</span>}
             </div><br></br>
             <div className="input-box">
               <label className="container-fluid font" id="font">Shop Owner Name</label>{" "}
               <input
                 type="text"
                 placeholder="shopownername"
                value={data.shopownername}
                 name="shopownername"
                 id="text1"
                 className="form-control m-2"
                 onChange={handleChange}
               />
               {errors.shopownername && <span className='span-required'>{errors.shopownername}</span>}
           </div><br></br>
           <div className="input-box">
               <div className="label">
                 {" "}
                 <label className="container-fluid font" id="font">Shopowner Address</label>{" "}
               </div>
               <input
                 type="text"
                 value={data.shopowneraddress}
                 placeholder="shopowneraddress"
                 name="shopowneraddress"
                 className="form-control m-2"
                 id="text1"
                 onChange={handleChange}
              />
              {errors.shopowneraddress && <span className='span-required'>{errors.shopowneraddress}</span>}
             </div><br></br>
              
              <div className="input-box">
               <div className="label">
                 {" "}
                 <label className="container-fluid font" id="font">District</label>{" "}
               </div>
               <select className="form-control controls m-2" 
                                name="shopownerdistrict" 
                                id="text1"
                                value={data.shopownerdistrict} 
                                onChange={handleChange}>
                                    <option >Select District</option>
                                    {districts.map((district, index) => (
                                        <option key={index} value={district}>{district}</option>
                                    ))}
              </select>
              {errors.shopownerdistrict && <span className='span-required'>{errors.shopownerdistrict}</span>}
              </div><br></br>
              <div className="input-box">
               <div className="label">
                 {" "}
                 <label className="container-fluid font" id="font">City</label>{" "}
               </div>
               <input
                 type="text"
                 value={data.shopownercity}
                 placeholder="City"
                 name="shopownercity"
                 className="form-control m-2"
                 id="text1"
                 onChange={handleChange}
              />
              {errors.shopownercity && <span className='span-required'>{errors.shopownercity}</span>}
              </div><br></br>
              <div className="input-box">
               <div className="label">
                 {" "}
                 <label className="container-fluid font" id="font">Pincode</label>{" "}
               </div>
               <input
                 type="text"
                 value={data.shopownerpincode}
                 placeholder="Pincode"
                 name="shopownerpincode"
                 className="form-control m-2"
                 id="text1"
                 onChange={handlePincodeChange}
              />
              {errors.shopownerpincode && <span className='span-required'>{errors.shopownerpincode}</span>}
              </div><br></br>
          </form>
          </Col>
          <Col className="col-6">
          <form onSubmit={handleSubmit}>
            <div className="input-box">
             {" "}
              <label className="container-fluid font" id="font">Contact Number</label>{" "}
               <input
                 type="text"
                 placeholder="Contact Number"
               value={data.handlePhoneNumberChange}
                 name="contactnumber"
                 className="form-control m-2"
                 id="text1"
                 onChange={handleChange}
               />              
                {errors.shopownercontact && <span className='span-required'>{errors.shopownercontact}</span>}
             </div><br></br>
             <div className="input-box">
               <label className=" container-fluid font" id="font">Email</label>{" "}
               <input
                 type="email"
                 placeholder="Email"
                value={data.shopowneremail}
                 name="shopowneremail"
                 className="form-control m-2"
                 id="text1"
                 onChange={handleChange}
               />
               {errors.shopowneremail && <span className='span-required'>{errors.shopowneremail}</span>}
           </div><br></br>
           <div className="input-box">
               <div className="label">
                 {" "}
                 <label className="container-fluid font" id="font">Registartion Number</label>{" "}
               </div>
               <input
                 type="text"
                 value={data.shopownerregstration}
                 placeholder="Registartion Number"
                 name="shopregistartionnumber"
                 className="form-control m-2"
                 id="text1"
                 onChange={handleChange}
              /> 
              {errors.shopregistrationnumber && <span className='span-required'>{errors.shopregistrationnumber}</span>}
              </div><br></br>
              <div className="input-box">
               <div className="label">
                 {" "}
                 <label className="container-fluid font" id="font">Shop Lisence</label>{" "}
               </div>
               <input
                 type="file"
                 value={data.shoplisence}
                 placeholder="Shop Lisence"
                 name="shoplisence"
                 className="form-control m-2"
                 id="text1"
                 onChange={handleChange}
              />
              {errors.shoplisence && <span className='span-required'>{errors.shoplisence}</span>}
              </div><br></br>
              <div className="input-box">
               <div className="label">
                 {" "}
                 <label className="container-fluid font" id="font">Password</label>{" "}
               </div>
               <input
                 type="text"
                 value={data.shopownerpassword}
                 placeholder="Password"
                 name="password"
                 className="form-control m-2"
                 id="text1"
                 onChange={handleChange}
              />
              {errors.shopownerpassword && <span className='span-required'>{errors.shopownerpassword}</span>}
              </div><br></br>
              <div className="input-box">
               <div className="label">
                 {" "}
                 <label className="container-fluid font" id="font">Confirm Password</label>{" "}
               </div>
               <input
                 type="text"
                 value={data.shopownerconfirmpassword}
                 placeholder="Confirm Password"
                 name="confirmpassword"
                 id="text1"
                 className="form-control m-2"
                 onChange={handleChange}
              />
              {errors.shopownerconfirmpassword && <span className='span-required'>{errors.shopownerconfirmpassword}</span>}
              </div><br></br>  
              </form>
          </Col>
        </Row>
        <div className="inbutton d-flex justify-content-center" id="signup">
               <button type="submit" className="btn text-white" id="colors">
                 Register
               </button>
        </div>
        <div className="text">
               <h6 className="text-center" id="text">
                 Already have an account? <Link to="/shopownerlogin" className="shopownweracc">Log In</Link>
               </h6>
        </div>
        </div>
      </Col>
    </Row>
  </div>
  );
}
export default ShopOwnerRegistration;