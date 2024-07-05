import React, { useEffect, useState } from 'react'
import '../ShopOwner/shopowner.css'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../APIS/axiosinstatnce';
function WholesaleDealerEditProfile() {

    const [data,setData]=useState({
        storeName:"",
        dealername:"",
        address:"",
        districts:"",
        city:"",
        pincode:"",
        contact:"",
        wholesaleregisternumber:"",
        email:""
    });

    const[errors,setErrors]=useState({
        storeName:"",
        dealername:"",
        address:"",
        districts:"",
        city:"",
        pincode:"",
        contact:"",
        wholesaleregisternumber:"",
        email:""
    });

    const districts=[
        'Alappuzha','Ernakulam','Idukki','Kannur','Kasaragod',
        'Kollam', 'Kottayam', 'Kozhikode', 'Malappuram', 'Palakkad',
        'Pathanamthitta', 'Thiruvananthapuram', 'Thrissur', 'Wayanad'
    ];

    const handleChange = (e) => {    
        const { name, value, files} = e.target;
    
        setData(prevData => ({
          ...prevData,
          [name]: name == 'files' ? files[0] : value
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
    const handlecancel=()=>{
        Navigation("/wholesaledealerprofile")
    }
    function validateContact(fieldName, value) {
        if (!(value).trim()) {
          return `${fieldName} is required`;
        } else if (value.length !== 10) {
          return 'Please enter a valid Contact Number';
        }
        return '';
    }
    function validatePincode(fieldName, value) {
        if (!(value).trim()) {
          return `${fieldName} is required`;
        } else if (value.length !== 10) {
          return 'Please enter a valid Contact Number';
        }
        return '';
    }

    // const handleSubmit = (e) => {
    //     e.preventDefault();

    //     let errors = {};
    //     let formIsValid=true;

    //     errors.storeName=validateField('StoreName',data.storeName);
    //     errors.dealername=validateField('DealerName',data.dealername);
    //     errors.address=validateField('Address',data.address);
    //     errors.city=validateField('City',data.city);
    //     errors.districts=validateField('District',data.districts);
    //     errors.contact=validateContact('Contact',data.contact);
    //     errors.pincode=validatePincode('Pincode',data.pincode);
    //     errors.wholesaleregisternumber=validateField('Wholesalergister',data.wholesaleregisternumber);
    //     errors.email=validatePincode('Email',data.email);

    //     setErrors(errors);

    // }

    const Navigation=useNavigate();
    const wholesaledealerid = localStorage.getItem("wholesaledealer");

    useEffect(() => {
        axiosInstance.get('/get_a_wholesaledealer/' + wholesaledealerid)
        .then((res) => {
            setData(res.data.data);
        })
        .catch((err) => {
            console.log(err);
        })
    },[wholesaledealerid]);

    const handleEdit = (e) => {
        const formData = new FormData();

        for(const key in data){
            formData.append(key,data[key]);
        }
        console.log(data,'data');
        e.preventDefault();
        axiosInstance.post('/edit_a_wholesaledealer/' + wholesaledealerid,formData)
        .then((res) => {
          alert("Updated Successfully");
          console.log(res);
            // Navigation("/wholesaledealerprofile");
        })
        .catch((err) => {
            console.log(err);
        });
    };

  return (
    <div className="container">
    <div className="shopprofile-editpage-header">
      <form >
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
          <label className="container-fluid font" id="font">StoreName</label>
            <input type="text"className="form-control m-2" 
            placeholder={data.storeName}
            id="shopprofile-editpage-text2"
            name="shopname"
            
            onChange={handleChange}/>
            
          </div>
          <div>
          <label className="container-fluid font" id="font">Dealer Name</label>
            <input type="text"className="form-control m-2" 
            placeholder={data.dealername}
            id="shopprofile-editpage-text2"
            name="shopownername"
            
            onChange={handleChange}/>
          </div>
          <div>
          <label className="container-fluid font" id="font">Address</label>
            <input type="text"className="form-control m-2" 
            placeholder={data.address}
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
                                        <option key={index} placeholder={data.districts}>{district}</option>
                                    ))}
              </select>
            {errors.shopownerdistrict && <div  className="text-danger color">{errors.shopownerdistrict}</div>}
          </div>
          <div>
          <label className="container-fluid font" id="font">City</label>
            <input type="text"className="form-control m-2" 
            placeholder={data.city}
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
            placeholder={data.pincode}
            id="shopprofile-editpage-text2"
            name="shopownerpincode"
            onChange={handleChange}
            />
          </div>
          <div>
          <label className="container-fluid font" id="font">Contact Number</label>
            <input type="text"className="form-control m-2" 
            placeholder={data.contact}
            id="shopprofile-editpage-text2"
            name="shopownercontact"
            onChange={handleChange}
            />
          </div>
          <div>
          <label className="container-fluid font" id="font">Email Id</label>
            <input type="text"className="form-control m-2" 
            placeholder={data.email}
            id="shopprofile-editpage-text2"
            name="shopowneremail"
            onChange={handleChange}
            />
          </div>
          <div>
          <label className="container-fluid font" id="font">Registration Number</label>
            <input type="text"className="form-control m-2" 
            placeholder={data.wholesaleregisternumber}
            id="shopprofile-editpage-text2"
            name="shopownerregistration"
            onChange={handleChange}
            />
          </div>
          <div>
          
          </div>
          </Col>
          <div className="shopprofile-editpage-btn ms-5">
            <button type="submit" className="shopprofile-editpage-subbtn ms-5"onClick={handleEdit} >
              Update</button>
              <button type="submit" className="shopprofile-editpage-subbtn ms-5" onClick={handlecancel}>
              Cancel</button>
          </div>
        </Row>
      </form>
        
    </div>
   </div>
  )
}

export default WholesaleDealerEditProfile
