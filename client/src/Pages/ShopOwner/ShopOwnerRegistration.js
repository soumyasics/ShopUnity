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
 <div>
  <div>
    <Row>
      <Col>
      
      </Col>
      <Col>
      <Row>
        <form>
          <Col>
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
          </Col>
          <Col>
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
          </Col>
        </form>
      </Row>
      </Col>
    </Row>
  </div>
 </div>
  );
}
export default ShopOwnerRegistration;