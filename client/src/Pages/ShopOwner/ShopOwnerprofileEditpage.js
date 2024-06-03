import React, { useEffect, useState } from "react";
import axiosInstance from "../../APIS/axiosinstatnce";
import { Link, useNavigate } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function ShopOwnerProfileEditPage() {
  const [data, setData] = useState({
    shopname: "",
    shopownername: "",
    shopowneraddress:"",
    shopownerdistrict:"",
    shopownercity:"",
    shopownerpincode:"",
    shopownercontact: "",
    shopowneremail: "",
    shopregistrationnumber: "",
    shoplisence:""
  });

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
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
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
    // <div className="container">
     
    //   <div className="main">
    //     <Row className="">
    //       <Col className="container">
    //         <form>
    //         <div className="input-box">
    //           {" "}
    //           <label className="container-fluid font" id="font">Shop Name</label>{" "}
    //            <input
    //              type="text"
    //              placeholder="shopname"
    //            value={data.shopname}
    //              name="shopname"
    //              id="text1"
    //              className="form-control m-2 textbox "
    //            />
    //            </div>

    //            <div className="input-box">
    //           {" "}
    //           <label className="container-fluid font" id="font">ShopOwner Name</label>{" "}
    //            <input
    //              type="text"
    //              placeholder="shopownername"
    //            value={data.shopownername}
    //              name="shopownername"
    //              id="text1"
    //              className="form-control m-2 textbox "
    //            />
    //            </div>

    //            <div className="input-box">
    //           {" "}
    //           <label className="container-fluid font" id="font">Shop Address</label>{" "}
    //            <input
    //              type="text"
    //              placeholder="shopowneraddress"
    //            value={data.shopowneraddress}
    //              name="shopowneraddress"
    //              id="text1"
    //              className="form-control m-2 textbox "
    //            />
    //            </div>

    //            <div className="input-box">
    //           {" "}
    //           <label className="container-fluid font" id="font">Shop District</label>{" "}
    //            <input
    //              type="text"
    //              placeholder="shopownerdistrict"
    //            value={data.shopownerdistrict}
    //              name="shopownerdistrict"
    //              id="text1"
    //              className="form-control m-2 textbox "
    //            />
    //            </div>

    //            <div className="input-box">
    //           {" "}
    //           <label className="container-fluid font" id="font">Shop City</label>{" "}
    //            <input
    //              type="text"
    //              placeholder="shopownercity"
    //            value={data.shopownercity}
    //              name="shopownercity"
    //              id="text1"
    //              className="form-control m-2 textbox "
    //            />
    //            </div>
    //         </form>
    //       </Col>
    //       <Col className="container">
    //         <form>
    //         <div className="input-box">
    //           {" "}
    //           <label className="container-fluid font" id="font">Shop Pincode</label>{" "}
    //            <input
    //              type="text"
    //              placeholder="shopownerpincode"
    //            value={data.shopownerpincode}
    //              name="shopownerpincode"
    //              id="text1"
    //              className="form-control m-2 textbox "
    //            />
    //            </div>

    //            <div className="input-box">
    //           {" "}
    //           <label className="container-fluid font" id="font">Shop Contact</label>{" "}
    //            <input
    //              type="text"
    //              placeholder="Shopownercontact"
    //            value={data.shopownercontact}
    //              name="shopownercontact"
    //              id="text1"
    //              className="form-control m-2 textbox "
    //            />
    //            </div>

    //            <div className="input-box">
    //           {" "}
    //           <label className="container-fluid font" id="font">Shop Address</label>{" "}
    //            <input
    //              type="text"
    //              placeholder="shopowneraddress"
    //            value={data.shopowneraddress}
    //              name="shopowneraddress"
    //              id="text1"
    //              className="form-control m-2 textbox "
    //            />
    //            </div>

    //            <div className="input-box">
    //           {" "}
    //           <label className="container-fluid font" id="font">Shop District</label>{" "}
    //            <input
    //              type="text"
    //              placeholder="shopownerdistrict"
    //            value={data.shopownerdistrict}
    //              name="shopownerdistrict"
    //              id="text1"
    //              className="form-control m-2 textbox "
    //            />
    //            </div>

    //            <div className="input-box">
    //           {" "}
    //           <label className="container-fluid font" id="font">Shop City</label>{" "}
    //            <input
    //              type="text"
    //              placeholder="shopownercity"
    //            value={data.shopownercity}
    //              name="shopownercity"
    //              id="text1"
    //              className="form-control m-2 textbox "
    //            />
    //            </div>
    //         </form>
    //       </Col>
    //     </Row>
    //   </div>
    // </div>

    <div className=" container">
      <div className="">
      <div
              className=" shopownerbox"
              style={{
                margin: "2% 7%",
                boxShadow: " rgba(0, 0, 0, 0.24) 0px 3px 8px",
                borderRadius: "16px",
              }}
            >
      <form >
        <label>shopowner</label>
        <input type="text" cl></input>
       </form>
       </div>
      </div>
       
    </div>
  
  );
}

export default ShopOwnerProfileEditPage;
