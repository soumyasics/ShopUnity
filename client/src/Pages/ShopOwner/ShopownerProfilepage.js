import React, { useEffect, useState } from "react";
import axiosInstance from "../../APIS/axiosinstatnce";
import { Link, useNavigate } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BsPencil } from "react-icons/bs";

function ShopownerProfilepage({ url }) {
  console.log(url.url.url);

  const [data, setData] = useState({});

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
  }, [data]);

  const Navigate=useNavigate()
  const gotoEdit=(e)=>{
    e.preventDefault()
    Navigate("/shopownerprofileedit")
  }
  return (
    <div className="container">
      <div className="shopprofile-edit-header">
        <form>
          <Row className="container shopprofile-edit">
            <h2 className="shopprofile-edit-h2">My Profile</h2>
            <Col>
            <div >
          <label className="container-fluid font" id="font">ShopName</label>
            <input type="text"className="form-control m-2" 
            placeholder=""
            id="shopprofile-editpage-text2"
            />
          </div>
          <div >
          <label className="container-fluid font" id="font">ShopOwnerName</label>
            <input type="text"className="form-control m-2" 
            placeholder=""
            id="shopprofile-editpage-text2"
            />
          </div>
          <div >
          <label className="container-fluid font" id="font">Shop Address</label>
            <input type="text"className="form-control m-2" 
            placeholder=""
            id="shopprofile-editpage-text2"
            />
          </div>
          <div >
          <label className="container-fluid font" id="font"> District</label>
            <input type="text"className="form-control m-2" 
            placeholder=""
            id="shopprofile-editpage-text2"
            />
          </div>
          <div >
          <label className="container-fluid font" id="font">City</label>
            <input type="text"className="form-control m-2" 
            placeholder=""
            id="shopprofile-editpage-text2"
            />
          </div>
            </Col>
            <Col>
            <div >
          <label className="container-fluid font" id="font">Pincode</label>
            <input type="text"className="form-control m-2" 
            placeholder=""
            id="shopprofile-editpage-text2"
            />
          </div>
          <div >
          <label className="container-fluid font" id="font">Contact Number</label>
            <input type="text"className="form-control m-2" 
            placeholder=""
            id="shopprofile-editpage-text2"
            />
          </div>
          <div >
          <label className="container-fluid font" id="font">Email Id</label>
            <input type="text"className="form-control m-2" 
            placeholder=""
            id="shopprofile-editpage-text2"
            />
          </div>
          <div >
          <label className="container-fluid font" id="font">Registration Number</label>
            <input type="text"className="form-control m-2" 
            placeholder=""
            id="shopprofile-editpage-text2"
            />
          </div>
          <div >
          <label className="container-fluid font" id="font">Shop License</label>
            <input type="text"className="form-control m-2" 
            placeholder=""
            id="shopprofile-editpage-text2"
            />
          </div>
            </Col>
            <div className="shopprofile-editpage-btn">
            <button type="submit" className="shopprofile-editpage-subbtn">
              <BsPencil/> Edit Profile</button>
              </div>
          </Row>
        </form>
      </div>
    </div>
  );
}

export default ShopownerProfilepage;
