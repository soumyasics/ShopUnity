import React, { useEffect, useState } from 'react'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BsPencil } from "react-icons/bs";
import '../ShopOwner/shopowner.css'
import axiosInstance from '../../APIS/axiosinstatnce';
import { Link, useNavigate } from 'react-router-dom';
import { FaArrowLeftLong } from "react-icons/fa6";
import './wholesale.css'

function WholesaleDelaerProfilePage({url}) {

    const[data,setData]=useState({})
    const Navigate=useNavigate();

    const wholesaledealerid = localStorage.getItem("wholesaledealer")
     console.log(wholesaledealerid);
   useEffect(() => {
    axiosInstance.get("/get_a_wholesaledealer/" + wholesaledealerid)
    .then((res) => {
      setData(res.data.data)
      console.log(res,"gg");
    })
    .catch((err) => {
      console.log(err);
    })
   },[])

    const gotoEdit = (e) =>{
        e.preventDefault();
        Navigate("/wholesaledealereditprofile")
    }
  return (
    <div className="container ">
      <div className="mt-2">
        <Link to="/wholesalermain" className='wholesale-dealer-profile-icon mt-5' >
          <FaArrowLeftLong />
        </Link>
      </div>
    <div className="shopprofile-edit-header">    
      <form>
        <Row className="container shopprofile-edit">
          <h2 className="shopprofile-edit-h2">My Profile</h2>
         
          <Col>
          <div>
            <img
              className="mt-3 mb-3"
              src={`${url}${data.shoplicence}`}
              style={{
                width:"50%",
                height:"200px",
                borderRadius: "5%",
                boxShadow: "rgba(0, 0, 0, 0.65) 0px 5px 15px",
              }}
            ></img>
          </div>
            <div>
              <label className="container-fluid font mt-4" id="font">
                StoreName
              </label>
              <input
                type="text"
                className="form-control m-2"
                placeholder={data.storeName}
                id="shopprofile-editpage-text2"
                disabled
              />
            </div>
            <div>
              <label className="container-fluid font" id="font">
                DealerName
              </label>
              <input
                type="text"
                className="form-control m-2"
                placeholder={data.dealername}
                id="shopprofile-editpage-text2"                  disabled

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
                id="shopprofile-editpage-text2"                  disabled

              />
            </div>
           
           
          </Col>
          <Col>
          <div>
              <label className="container-fluid font" id="font">
                {" "}
                District
              </label>
              <input
                type="text"
                className="form-control m-2"
                placeholder={data.districts}
                id="shopprofile-editpage-text2"                  disabled

              />
            </div>
          <div>
              <label className="container-fluid font" id="font">
                City
              </label>
              <input
                type="text"
                className="form-control m-2"
                placeholder={data.city}
                id="shopprofile-editpage-text2"                  disabled

              />
            </div>
            <div>
              <label className="container-fluid font" id="font">
                Pincode
              </label>
              <input
                type="text"
                className="form-control m-2"
                placeholder={data.pincode}
                id="shopprofile-editpage-text2"
                disabled

              />
            </div>
            <div>
              <label className="container-fluid font" id="font">
                Contact Number
              </label>
              <input
                type="text"
                className="form-control m-2"
                placeholder={data.contact}
                id="shopprofile-editpage-text2"                   disabled

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
                id="shopprofile-editpage-text2"                   disabled

              />
            </div>
            <div>
              <label className="container-fluid font" id="font">
                Registration Number
              </label>
              <input
                type="text"
                className="form-control m-2"
                placeholder={data.wholesaleregisternumber}
                id="shopprofile-editpage-text2"                   disabled

              />
            </div>
          </Col>
          <div className="shopprofile-editpage-btn text-center">
            <button
              type="submit"
              className="shopprofile-editpage-subbtn"
              onClick={gotoEdit}
            >
              <BsPencil />
              Edit Profile{" "}
            </button>
          </div>
        </Row>
      </form>
    </div>
  </div>
  )
}

export default WholesaleDelaerProfilePage
