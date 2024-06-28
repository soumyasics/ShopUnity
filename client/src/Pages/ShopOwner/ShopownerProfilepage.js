import React, { useEffect, useState } from "react";
import axiosInstance from "../../APIS/axiosinstatnce";
import { Link, useNavigate } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BsPencil } from "react-icons/bs";

function ShopownerProfilepage({ url }) {
  

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
  }, []);

  const Navigate = useNavigate();

  const gotoEdit = (e) => {
    e.preventDefault();
    Navigate("/shopownerprofileedit");
  };
  console.log(`${url.url.url}${data.shoplicence}`,"kk");
  return (
  
    <div className="container">
      <div className="shopprofile-edit-header">
        <form>
          <Row className="container shopprofile-edit">
            <h2 className="shopprofile-edit-h2">My Profile</h2>
           
            <Col>
            <div>
              <img
                className="mt-3 mb-3"
                src={`${url.url.url}${data.shoplicence}`}
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
                  ShopName
                </label>
                <input
                  type="text"
                  className="form-control m-2"
                  placeholder={data.shopname}
                  id="shopprofile-editpage-text2"
                  disabled
                />
              </div>
              <div>
                <label className="container-fluid font" id="font">
                  ShopOwnerName
                </label>
                <input
                  type="text"
                  className="form-control m-2"
                  placeholder={data.shopownername}
                  id="shopprofile-editpage-text2"                  disabled

                />
              </div>
              <div>
                <label className="container-fluid font" id="font">
                  Shop Address
                </label>
                <input
                  type="text"
                  className="form-control m-2"
                  placeholder={data.shopowneraddress}
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
                  placeholder={data.shopownerdistrict}
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
                  placeholder={data.shopownercity}
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
                  placeholder={data.shopownerpincode}
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
                  placeholder={data.shopownercontact}
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
                  placeholder={data.shopowneremail}
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
                  placeholder={data.shopregistrationnumber}
                  id="shopprofile-editpage-text2"                   disabled

                />
              </div>
            </Col>
            <div className="shopprofile-editpage-btn">
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
  );
}

export default ShopownerProfilepage;
