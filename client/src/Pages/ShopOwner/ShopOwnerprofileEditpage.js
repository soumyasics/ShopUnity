import React, { useEffect, useState } from "react";
import axiosInstance from "../../APIS/axiosinstatnce";
import { Link, useNavigate } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import editprofile from '../../images/editprofile.png'
import editprooutline from '../../images/editprooutline.png'

function ShopOwnerProfileEditPage() {
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
    shoplicense:""
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
    shoplicense:""
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
    if (!(value).trim()) {
      return `${fieldName} is required`;
    } else if (value.length !== 10) {
      return 'Please enter a valid Contact Number';
    }
    return '';
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    let errors = {};
    let formIsValid=true;

    errors.shopname=validateField('Shopname',data.shopname);
    errors.shopownername=validateField('Shopownername',data.shopownername);
    errors.shopowneraddress=validateField('Shopowneraddress',data.shopowneraddress);
    errors.shopownerdistrict=validateField('Shopownerdistrict',data.shopownerdistrict);
    errors.shopownercity=validateField('Shopownercity',data.shopownercity);
    errors.shopownerpincode=validateContact('Shopownerpincode',data.shopownerpincode);
    errors.shopownercontact=validateField('Shopownercontact',data.shopownercontact);
    errors.shopowneremail=validateField('Shopowneremail',data.shopowneremail);
    errors.shopownerregistration=validateField('Shopownerregistration',data.shopownerregistration);
    errors.shoplicense=validateField('Shoplicense',data.shoplicense);


    setErrors(errors);
    if (formIsValid){
      console.log("data",data);
    }
  }
  const navigate = useNavigate();
  const shopownerid = localStorage.getItem("shopowner");

  useEffect(() => {
    axiosInstance
      .get("/get_a_shopowner/" + shopownerid)
      .then((res) => {
        setData(res.data.data);
        console.log(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [shopownerid]);

  const handleInputChange = (e) => {
    const { name, files } = e.target;
    setData({ ...data, [name]: files[0] });
    console.log(files);
  };

  const handleEdit = (e) => {
    e.preventDefault();
    axiosInstance
      .post("/edit_a_shopowner/" + shopownerid, data)
      .then((res) => {
        console.log(res);
        navigate("/shopownerprofile");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
   <div className="container">
    <div className="shopprofile-editpage-header">
      <form onSubmit={handleSubmit}>
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
          <div >
          <label className="container-fluid font" id="font">ShopName</label>
            <input type="text"className="form-control m-2" 
            placeholder="ShopName"
            id="shopprofile-editpage-text2"
            name="shopname"
            value={data.shopname}
            onChange={handleChange}/>
            {errors.shopname && <div  className="text-danger color">{errors.shopname}</div>}
          </div>
          <div>
          <label className="container-fluid font" id="font">Owner Name</label>
            <input type="text"className="form-control m-2" 
            placeholder="Owner Name"
            id="shopprofile-editpage-text2"
            name="shopownername"
            value={data.shopownername}
            onChange={handleChange}/>
          </div>
          {errors.shopownername && <div  className="text-danger color">{errors.shopownername}</div>}
          <div>
          <label className="container-fluid font" id="font">Address</label>
            <input type="text"className="form-control m-2" 
            placeholder="Address"
            id="shopprofile-editpage-text2"
            name="shopowneraddress"
            value={data.shopowneraddress}
            onChange={handleChange}
            />
            {errors.shopowneraddress && <div  className="text-danger color">{errors.shopowneraddress}</div>}
          </div>
          <div>
          <label className="container-fluid font" id="font">District</label>
          <select className="form-control m-2" 
                              id="shopprofile-editpage-text2"
                                name="shopownerdistrict" 
                                value={data.shopownerdistrict}
                                onChange={handleChange}
                                >
                                    <option >Select District</option>
                                    {districts.map((district, index) => (
                                        <option key={index} value={district}>{district}</option>
                                    ))}
              </select>
            {errors.shopownerdistrict && <div  className="text-danger color">{errors.shopownerdistrict}</div>}
          </div>
          <div>
          <label className="container-fluid font" id="font">City</label>
            <input type="text"className="form-control m-2" 
            placeholder="City"
            id="shopprofile-editpage-text2"
            name="shopownercity"
            value={data.shopownercity}
            onChange={handleChange}
            />
            {errors.shopownercity && <div  className="text-danger color">{errors.shopownercity}</div>}
          </div>
          
          </Col>
          <Col>
          <div>
          <label className="container-fluid font" id="font">Pincode</label>
            <input type="text"className="form-control m-2" 
            placeholder="Pincode"
            id="shopprofile-editpage-text2"
            name="shopownerpincode"
            value={data.shopownerpincode}
            onChange={handleChange}
            />
             {errors.shopownerpincode && <div  className="text-danger color">{errors.shopownerpincode}</div>}
          </div>
          <div>
          <label className="container-fluid font" id="font">Contact Number</label>
            <input type="text"className="form-control m-2" 
            placeholder="Contact No"
            id="shopprofile-editpage-text2"
            name="shopownercontact"
            value={data.shopownercontact}
            onChange={handleChange}
            />
             {errors.shopownercontact && <div  className="text-danger color">{errors.shopownercontact}</div>}
          </div>
          <div>
          <label className="container-fluid font" id="font">Email Id</label>
            <input type="text"className="form-control m-2" 
            placeholder="Email"
            id="shopprofile-editpage-text2"
            name="shopowneremail"
            value={data.shopowneremail}
            onChange={handleChange}
            />
             {errors.shopowneremail && <div  className="text-danger color">{errors.shopowneremail}</div>}
          </div>
          <div>
          <label className="container-fluid font" id="font">Registration Number</label>
            <input type="text"className="form-control m-2" 
            placeholder="Registration"
            id="shopprofile-editpage-text2"
            name="shopownerregistration"
            value={data.shopregistrationnumber}
            onChange={handleChange}
            />
             {errors.shopownerregistration && <div  className="text-danger color">{errors.shopownerregistration}</div>}
          </div>
          <div>
          <label className="container-fluid font" id="font">Shop License</label>
            <input type="file"className="form-control m-2" 
            
            placeholder="Shop License"
            id="shopprofile-editpage-text2"
            name="shoplicense"
            // value={data.shoplicense}
            onChange={handleInputChange}
            />
            
            {errors.shoplicense && <div  className="text-danger color">{errors.shoplicense}</div>}
          </div>
          </Col>
          <div className="shopprofile-editpage-btn">
            <button type="submit" className="shopprofile-editpage-subbtn" onClick={handleEdit}>
              Update</button>
          </div>
        </Row>
      </form>
        
    </div>
   </div>
  
  );
}

export default ShopOwnerProfileEditPage;
