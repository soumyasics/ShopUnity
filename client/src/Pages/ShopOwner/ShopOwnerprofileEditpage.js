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
    // files:""
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
    // shoplicence:""
  })

   
  const districts=[
    'Alappuzha','Ernakulam','Idukki','Kannur','Kasaragod',
    'Kollam', 'Kottayam', 'Kozhikode', 'Malappuram', 'Palakkad',
    'Pathanamthitta', 'Thiruvananthapuram', 'Thrissur', 'Wayanad'
  ];

  useEffect(() => {
    if (
      localStorage.getItem("shopownertoken") == null &&
      localStorage.getItem("shopowner") == null
    ) {
      navigate("/shopownerlogin");
    }
  }, [navigate]);
  
  const handleChange = (e) => {    
    const { name, value} = e.target;

    setData(prevData => ({
      ...prevData,
      [name]:value
    }));

    setErrors(prevErrors => ({
      ...prevErrors,
      [name]: ''
    }));
  };

 


  const handlecancel=()=>{
    
    navigate("/shopownerprofile")
  }
 

  const handleSubmit = (event) => {
    event.preventDefault();
  
  }
  const navigate = useNavigate();
  const shopownerid = localStorage.getItem("shopowner");

  useEffect(() => {
    axiosInstance
      .get("/get_a_shopowner/" + shopownerid)
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => {      
        console.log(err);
      });
  }, [shopownerid]);

  // const handleInputChange = (e) => {
  //   const { name, files } = e.target;
  //   setData({ ...data, [name]: files[0] });
  //   console.log(files);
  // };

  const handleEdit = (e) => {
    const formData=new FormData();

    for (const key in data) {
      formData.append(key, data[key]);
    }

    console.log(data,"j")
    e.preventDefault();
    axiosInstance
      .post(`/edit_a_shopowner/${shopownerid}`, formData)
      .then((res) => {
        alert("Updated Successfully")   
        console.log("Updated Successfully");
        navigate("/shopownerprofile");
      })
      .catch((err) => {
      });
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
          <div >
          <label className="container-fluid font" id="font">ShopName</label>
            <input type="text"className="form-control m-2" 
            placeholder={data.shopname}
            id="shopprofile-editpage-text2"
            name="shopname"
            
            onChange={handleChange}/>
          </div>
          <div>
          <label className="container-fluid font" id="font">Owner Name</label>
            <input type="text"className="form-control m-2" 
            placeholder={data.shopownername}
            id="shopprofile-editpage-text2"
            name="shopownername"
            
            onChange={handleChange}/>
          </div>
          <div>
          <label className="container-fluid font" id="font">Address</label>
            <input type="text"className="form-control m-2" 
            placeholder={data.shopowneraddress}
            id="shopprofile-editpage-text2"
            name="shopowneraddress"
            
            onChange={handleChange}
            />
          </div>
          <div>
          <label className="container-fluid font" id="font">District</label>
          <select className="form-control m-2" 
                              id="shopprofile-editpage-text2"
                              
                                name="shopownerdistrict" 
                                
                                onChange={handleChange}
                                >
                                    <option >Select District</option>
                                    {districts.map((district, index) => (
                                        <option key={index}  placeholde={data.shopownerdistrict}>{district}</option>
                                    ))}
              </select>
          </div>
          <div>
          <label className="container-fluid font" id="font">City</label>
            <input type="text"className="form-control m-2" 
            placeholder={data.shopownercity}
            id="shopprofile-editpage-text2"
            name="shopownercity"
            
            onChange={handleChange}
            />
          </div>
          
          </Col>
          <Col>
          <div>
          <label className="container-fluid font" id="font">Pincode</label>
            <input type="text"className="form-control m-2" 
            placeholder={data.shopownerpincode}
            id="shopprofile-editpage-text2"
            name="shopownerpincode"
            
            onChange={handleChange}
            />
          </div>
          <div>
          <label className="container-fluid font" id="font">Contact Number</label>
            <input type="text" className="form-control m-2" 
            placeholder={data.shopownercontact}
            id="shopprofile-editpage-text2"
            name="shopownercontact"
            
            onChange={handleChange}
            />
        
          </div>
          <div>
          <label className="container-fluid font" id="font">Email Id</label>
            <input type="text"className="form-control m-2" 
            placeholder={data.shopowneremail}
            id="shopprofile-editpage-text2"
            name="shopowneremail"
            
            onChange={handleChange}
            />
          </div>
          <div>
          <label className="container-fluid font" id="font">Registration Number</label>
            <input type="text"className="form-control m-2" 
            placeholder={data.shopregistrationnumber}
            id="shopprofile-editpage-text2"
            name="shopownerregistration"
            
            onChange={handleChange}
            />
          </div>
          <div>
          
          </div>
          </Col>
          <div className="shopprofile-editpage-btn ms-5 text-center">
            <button type="submit" className="shopprofile-editpage-subbtn ms-5" onClick={handleEdit}>
              Update</button>
              <button type="submit" className="shopprofile-editpage-subbtn ms-5" onClick={handlecancel}>
              Cancel</button>
          </div>
        </Row>
      </form>
        
    </div>
   </div>
  
  );
}

export default ShopOwnerProfileEditPage;
