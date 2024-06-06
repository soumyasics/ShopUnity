import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./shopowner.css";
import { useNavigate, Link } from "react-router-dom";
import axiosInstance from "../../APIS/axiosinstatnce";
import shopownerimg from '../../images/shopownerreg.png'
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
    shoplicence:"",
    shopownerpassword:"",
    shopownerconfirmpassword:""
  })

  const[errors,setErrors]=useState({
    shopname:"",
    shopownername:"",
    shopowneraddress:"",
    shopownerdistrict:"",
    shopownercity:"",
    shopownerpincode:"",
    shopownercontact:"",
    shopowneremail:"",
    shopownerregistration:"",
    shoplicence:"",
    shopownerpassword:"",
    shopownerconfirmpassword:""
  })

  const districts=[
    'Alappuzha','Ernakulam','Idukki','Kannur','Kasaragod',
    'Kollam', 'Kottayam', 'Kozhikode', 'Malappuram', 'Palakkad',
    'Pathanamthitta', 'Thiruvananthapuram', 'Thrissur', 'Wayanad'
  ];

  const handleChange = (event) => {    
    const { name, value } = event.target;
    setData(prevData => ({
      ...prevData,
      [name]: value
    }));
    setErrors(prevErrors => ({
      ...prevErrors,
      [name]: ''
    }));
  };

  function validateField(fieldName, value) {
    if (!value.trim()) {
      return `${fieldName} is required`;
    }
    if(fieldName === "Email" && !value.endsWith("@gmail.com")){
      return "Email must be a valid Gmail address."
    }
    return '';
  }

  function validateContact(fieldName, value) {
    if (!value.trim()) {
      return `${fieldName} is required`;
    } else if (value.length !== 10) {
      return 'Please enter a valid Contact Number';
    }
    return '';
  }

  function validatePincode(fieldName, value) {
    if (!value.trim()) {
      return `${fieldName} is required`;
    } else if (value.length !== 6) {
      return 'Please enter a valid Pincode';
    }
    return '';
  }

  const handleSubmit = (event) => {
    event.preventDefault();
console.log("ok ");
    let errors={};
    let formIsValid=true;

    errors.shopname = validateField('Shopname', data.shopname);
    errors.shopownername = validateField('Shopownername', data.shopownername);
    errors.shopowneraddress = validateField('Shopowneraddress', data.shopowneraddress);
    errors.shopownerdistrict = validateField('Shopownerdistrict', data.shopownerdistrict);
    errors.shopownercity = validateField('Shopownercity', data.shopownercity);
    errors.shopownerpincode = validatePincode('Shopownerpincode', data.shopownerpincode);
    errors.shopownercontact = validateContact('Shopownercontact', data.shopownercontact);
    errors.shopowneremail = validateField('Shopowneremail', data.shopowneremail);
    errors.shopownerregistration = validateField('Shopownerregistration', data.shopownerregistration);
    errors.shoplicence = validateField('Shoplisence', data.shoplicence);
    errors.shopownerpassword = validateField ('Shopownerpassword',data.shopownerpassword);
    errors.shopownerconfirmpassword = validateField ('Shopownerconfirmpassword',data.shopownerconfirmpassword);


    const passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[A-Z]).{6,}$/;
      if ((!data.password).toString().trim()) {
        formIsValid = false;
        errors.password = "Password is required";
      } else if (!passwordRegex.test(data.password)) { // Pass the password to the test method
        errors.password =
          "Password must contain at least one number, one special character, and one capital letter";
      }
      
      if ((!data.confirmpassword).toString().trim()) {
        formIsValid = false;
        errors.confirmpassword = "Confirm Password is required";
      } else if (data.confirmpassword !== data.password) {
        formIsValid = false;
        errors.confirmpassword = "Passwords do not match";
      }

    setErrors(errors);
    if (formIsValid){
      console.log("data",data);
    }
  }
  
return (
 <div>
  <div className="ownerregg container-fluid">
    <Row className="container-fluid">
      <Col className="col-6 container">
        <img className="shopownerimg" src={shopownerimg} alt="img"></img>
      </Col>
      <Col className="col-6 container-fluid ">
        <div className="ownerreg">
        <h1  className="text-center reg" id="ownerreg">Shop Owner Register</h1><br></br>
          <form onSubmit={handleSubmit}>
            <Row>
            <Col>
            <div className="input-box">
             {" "}
              <label className="container-fluid font" id="font">Shop Name</label>{" "}
               <input
                 type="text"
                 placeholder="Shopname"
                 value={data.shopname}
                 name="shopname"
                 className="form-control m-2"
                 id="text1"
                 onChange={handleChange}
               />              
                {errors.shopname && <div className="container text-danger ">{errors.shopname}</div>}         

             </div><br></br>
             <div className="input-box">
             {" "}
              <label className="container-fluid font" id="font">Owner Name</label>{" "}
               <input
                 type="text"
                 placeholder="Shopownername"
                 value={data.shopownername}
                 name="shopownername"
                 className="form-control m-2"
                 id="text1"
                 onChange={handleChange}
               />     
               {errors.shopownername && <div className="container text-danger">{errors.shopownername}</div>}         
             </div><br></br>
             <div className="input-box">
             {" "}
              <label className="container-fluid font" id="font">Address</label>{" "}
               <input
                 type="text"
                 placeholder="Shopowneraddress"
               value={data.shopowneraddress}
                 name="shopowneraddress"
                 className="form-control m-2"
                 id="text1"
                 onChange={handleChange}
               />    
               {errors.shopowneraddress && <div className=" container text-danger">{errors.shopowneraddress}</div>}           
             </div><br></br>
             <div className="input-box">
             {" "}
              <label className="container font" id="font">District</label>{" "}
              <select className="form-control m-2" 
                                name="shopownerdistrict" 
                                value={data.shopownerdistrict}
                                id="text1"
                                onChange={handleChange}
                                >
                                    <option >Select District</option>
                                    {districts.map((district, index) => (
                                        <option key={index} value={district}>{district}</option>
                                    ))}
              </select>       
              {errors.shopownerdistrict && <div className="container text-danger">{errors.shopownerdistrict}</div>}     
             </div><br></br>
             <div className="input-box">
             {" "}
              <label className="container-fluid font" id="font">City</label>{" "}
               <input
                 type="text"
                 placeholder="Shopownercity"
               value={data.shopownercity}
                 name="shopownercity"
                 className="form-control m-2"
                 id="text1"
                 onChange={handleChange}
               />      
               {errors.shopownercity && <div className=" container text-danger">{errors.shopownercity}</div>}        
             </div><br></br>
             <div className="input-box">
             {" "}
              <label className="container-fluid font" id="font">PinCode</label>{" "}
               <input
                 type="text"
                 placeholder="PinCode"
               value={data.shopownerpincode}
                 name="shopownerpincode"
                 className="form-control m-2"
                 id="text1"
                 onChange={handleChange}
               />             
               {errors.shopownerpincode && <div className="container text-danger">{errors.shopownerpincode}</div>}  
             </div><br></br>
            </Col>
            <Col>
            <div className="input-box">
             {" "}
              <label className="container-fluid font" id="font">Contact Number</label>{" "}
               <input
                 type="text"
                 placeholder="Contact Number"
                value={data.shopownercontact}
                 name="shopownercontact"
                 className="form-control m-2"
                 id="text1"
                 onChange={handleChange}
               />       
               {errors.shopownercontact && <div className="container text-danger">{errors.shopownercontact}</div>}       
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
               {errors.shopowneremail && <div className="container text-danger">{errors.shopowneremail}</div>}
           </div><br></br>

           <div className="input-box">
               <div className="label">
                 {" "}
                 <label className="container-fluid font" id="font">Registartion Number</label>{" "}
               </div>
               <input
                 type="text"
                 value={data.shopownerregistration}
                 placeholder="Registartion Number"
                 name="shopownerregistration"
                 className="form-control m-2"
                 id="text1"
                 onChange={handleChange}
              /> 
              {errors.shopownerregistration && <div className=" container text-danger">{errors.shopownerregistration}</div>}
              </div><br></br>

              <div className="input-box">
               <div className="label">
                 {" "}
                 <label className="container-fluid font" id="font">Shop Licence</label>{" "}
               </div>
               <input
                 type="file"
                 value={data.shoplicence}
                 placeholder="Shop Lisence"
                 name="shoplicence"
                 className="form-control m-2"
                 id="text1"
                 onChange={handleChange}
              />
              {errors.shoplicence && <div className="container text-danger">{errors.shoplicence}</div>}
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
                 name="shopownerpassword"
                 className="form-control m-2"
                 id="text1"
                 onChange={handleChange}
              />
              {errors.shopownerpassword && <div className="container text-danger">{errors.shopownerpassword}</div>}
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
                 name="shopownerconfirmpassword"
                 id="text1"
                 className="form-control m-2"
                 onChange={handleChange}
              />
               {errors.shopownerconfirmpassword && <div className="container text-danger">{errors.shopownerconfirmpassword}</div>}
              </div><br></br>
            </Col>
            </Row>
            <div className="inbutton d-flex justify-content-center" id="signup">
               <button type="submit" className="btn text-white" id="colors">
                 Register
               </button>
        </div>
          </form>
       
        <div className="text">
               <h6 className="text-center" >
                 Already have an account? <Link to="/shopownerlogin" className="shopownweracc">Log In</Link>
               </h6>
        </div>
        </div>
      </Col>
    </Row>
  </div>
 </div>
  );
}
export default ShopOwnerRegistration;