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
  const [isvalid, setIsvalid]=useState(false);
  
  const handleChange = (e) => {
    const{name,value} =e.target;
    switch (name){
      case 'shopname':
        setData(value);
        setIsvalid({...isvalid, shopname:value.length > 0});
        break;
        case 'shopownername':
          setData(value);
          setIsvalid({...isvalid, shopownername:value.length > 0});
          break;
        case 'shopowneraddress':
          setData(value);
          setIsvalid({...isvalid, shopowneraddress:value.length > 0});
          break;
        case 'shopownerdistrict':
          setData(value);
          setIsvalid({...isvalid, shopownerdistrict:value.length > 0});
          break;
        case 'shopownercity':
          setData(value);
          setIsvalid({...isvalid, shopownercity:value.length > 0});
          break;   
    }
  }
  const PasswordChange = (e) => {
    const{name,value}= e.target;
    
    if(name == 'shopownerpassword'){
      setData(value)
    }
    else if(name == 'shopownerconfirmpassword'){
      setData(value);
    }
  }
  const handlePincodeChange = (e) => {
    const value = e.target.value;
    const pinRegex = /^\d{6}$/;
    setIsvalid(pinRegex.test(value));
    setData(value);
  }

  const handlePhoneNumberChange = (e) => {
    const value = e.target. value;
    const phoneRegex = /^[0-9]{10}$/;
    setIsvalid(phoneRegex.test(value));
    setData(value);
  }

    const handleSubmit =  (e) => {
    e.preventDefault();

    // if(shopownerpassword == shopownerconfirmpassword){
    //   setIsvalid(true);
    // }
    // else{
    //   setIsvalid(false)
    // }

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
                 placeholder="Shopname"
                 value={data.shopname}
                 name="shopname"
                 id="text1"
                 className="form-control m-2 textbox "
                 onChange={handleChange}
               />
               {!isvalid.shopname && <p>Shopname is required.{isvalid.shopname}</p>}
             </div><br></br>
             <div className="input-box">
               <label className="container-fluid font" id="font">Shop Owner Name</label>{" "}
               <input
                 type="text"
                 placeholder="Shopownername"
                value={data.shopownername}
                 name="shopownername"
                 id="text1"
                 className="form-control m-2"
                 onChange={handleChange}
               />
                {!isvalid.shopname && <p>Shopname is required.</p>}

           </div><br></br>
           <div className="input-box">
               <div className="label">
                 {" "}
                 <label className="container-fluid font" id="font">Shopowner Address</label>{" "}
               </div>
               <input
                 type="text"
                 value={data.shopowneraddress}
                 placeholder="Shopowneraddress"
                 name="shopowneraddress"
                 className="form-control m-2"
                 id="text1"
                 onChange={handleChange}
              />
               {!isvalid.shopname && <p>Shopname is required.</p>}
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
              {!isvalid.shopname && <p>Shopname is required.</p>}
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
               {!isvalid.shopname && <p>Shopname is required.</p>}
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
               {!isvalid.shopname && <p>Shopname is required.</p>}
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
                 onChange={handlePhoneNumberChange}
               />              
               {!isvalid.shopname && <p>Shopname is required.</p>}
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
               {!isvalid.shopowneremail && <p>Email is required.</p>}
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
               {!isvalid. shopregistartionnumber && <p>Shopregistartionnumber is required.</p>}
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
               {!isvalid.shoplisence && <p>Shoplisence is required.</p>}
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
                 onChange={PasswordChange}
              />
               {!isvalid.shopownerpassword && <p>Password is required.</p>}
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
                 onChange={PasswordChange}
              />
               {!isvalid.shopownerconfirmpassword && <p>Password do not match.</p>}
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
               <h6 className="text-center" >
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