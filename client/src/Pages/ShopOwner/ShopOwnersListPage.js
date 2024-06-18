import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import axiosInstance from "../../APIS/axiosinstatnce";
import Sidebar from "../Admin/Sidebar";
import { Link } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Card, Row, Col } from "react-bootstrap";

function ShopOwnersListPage({ url }) {
  const [ShopOwner, SetShopOwner] = useState([]);

  const [Ashopownerdata, setAshopownerdata] = useState({});

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = (shopownerid) => {
    setShow(true);
    axiosInstance
      .get("/get_a_shopowner/" + shopownerid)
      .then((res) => {
        setAshopownerdata(res.data.data);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  function getData() {
    axiosInstance
      .get("/get_all_shopowners")
      .then((res) => {
        console.log("res", res);

        let allShopOwners = res?.data?.data || [];
        const filterShopowner = allShopOwners.filter(
          (ShopOwner) => ShopOwner?.status == "accepted"
        );
        console.log(filterShopowner, "data");
        SetShopOwner(filterShopowner);
      })
      .catch((err) => {
        console.log("err", err);
      });
  }

  const handleinactivate =(id)=>{
    axiosInstance
    .post("/innactivateshopowner/" + id)
    .then((res) => {
      if (res.status === 200) {
        let msg =
          res?.data?.message || "Shopowner is active ";
        alert(msg);
        getData();
      } else {
        console.log("err on activate");
      }
    })
    .catch((err) => {
      console.log("err", err);
    });
  }
  return (
    <div className="m-3">
      <div className="">
        <Link className="text-dark w-100" to="/admin_dashboard">
          <FaArrowLeftLong />
        </Link>
      </div>
      <div className="">
        <div className="shopownerpendingrequestdiv">
          <div className="">
            {ShopOwner.length === 0 && (
              <h1 className="text-center"> No ShopOwner Found</h1>
            )}
            {ShopOwner.length > 0 && (
              <div>
                <h3 className="text-center pt-4 ">All ShopOwner List</h3>
                <div className="row rounded-pill m-5 p-2">
                  <div className="col-1">
                    <b>Sl/No</b>
                  </div>
                  <div className="col-2">
                    <b>Shop Name</b>
                  </div>
                  <div className="col-2">
                    <b>Shopowner Name</b>
                  </div>
                  <div className="col-2">
                    <b>Email</b>
                  </div>
                  <div className="col-2">
                    <b>Shopowner Contact</b>
                  </div>
                  <div className="col-2">
                    <b> shopowner city</b>
                  </div>
                </div>
                {ShopOwner.map((item, index) => (
                  <div className="row bg-light rounded-pill m-5 p-2">
                    <div className="col-1">
                      <b>{index + 1}.</b>
                    </div>
                    <div className="col-2">{item.shopname}</div>
                    <div className="col-2">{item.shopownername}</div>
                    <div className="col-2">{item.shopowneremail} </div>
                    <div className="col-2"> {item.shopownercontact}</div>
                    <div className="col-2"> {item.shopownercity}</div>
                    <div className="col-1">
                      <button
                        className="rounded-pill px-3 border-none"
                        onClick={() => handleShow(item._id)}
                      >
                        view
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <>
          <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header closeButton></Modal.Header>
            <div>
              <div>
                {" "}
                 <img
                  className="parentimage"
                  alt="img"
                  style={{ width: "100%", height: "380px" }}
                  src={`${url}${Ashopownerdata.shoplicence}`}
                ></img> 
                <div>
                  <table>
                    <div className="p-4">
                      <tr>
                        <td>
                          <Card.Subtitle className="mb-2 text-muted">
                            shop name
                          </Card.Subtitle>
                        </td>
                        <td className="ps-3">
                          <Card.Subtitle className="mb-2 text-muted">
                            {Ashopownerdata.shopname}
                          </Card.Subtitle>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <Card.Subtitle className="mb-2 text-muted">
                            owner name
                          </Card.Subtitle>
                        </td>
                        <td className="ps-3">
                          <Card.Subtitle className="mb-2 text-muted">
                            {Ashopownerdata.shopownername}
                          </Card.Subtitle>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <Card.Subtitle className="mb-2 text-muted">
                            address
                          </Card.Subtitle>
                        </td>
                        <td className="ps-3">
                          <Card.Subtitle className="mb-2 text-muted">
                            {Ashopownerdata.shopowneraddress}
                          </Card.Subtitle>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <Card.Subtitle className="mb-2 text-muted">
                            contact number
                          </Card.Subtitle>
                        </td>
                        <td className="ps-3">
                          <Card.Subtitle className="mb-2 text-muted">
                            {Ashopownerdata.shopownercontact}
                          </Card.Subtitle>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <Card.Subtitle className="mb-2 text-muted">
                            email id
                          </Card.Subtitle>
                        </td>
                        <td className="ps-3">
                          <Card.Subtitle className="mb-2 text-muted">
                            {Ashopownerdata.shopowneremail}
                          </Card.Subtitle>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <Card.Subtitle className="mb-2 text-muted">
                            Shopowner City
                          </Card.Subtitle>
                        </td>
                        <td className="ps-3">
                          <Card.Subtitle className="mb-2 text-muted">
                            {Ashopownerdata.shopownercity}
                          </Card.Subtitle>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <Card.Subtitle className="mb-2 text-muted">
                            Shopowner District
                          </Card.Subtitle>
                        </td>
                        <td className="ps-3">
                          <Card.Subtitle className="mb-2 text-muted">
                            {Ashopownerdata.shopownerdistrict}
                          </Card.Subtitle>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <Card.Subtitle className="mb-2 text-muted">
                            Shopowner Pincode
                          </Card.Subtitle>
                        </td>
                        <td className="ps-3">
                          <Card.Subtitle className="mb-2 text-muted">
                            {Ashopownerdata.shopownerpincode}
                          </Card.Subtitle>
                        </td>
                      </tr>
                      <tr className="mt-3">
                        {" "}
                        <td>
                          <button onClick={() => handleinactivate(Ashopownerdata._id)} className="btn btn-outline-success rounded-pill">
                            inactivate
                          </button>
                        </td>
                        
                      </tr>
                    </div>
                  </table>
                </div>
              </div>
            </div>
          </Modal>
        </>
      </div>
    </div>
  );
}

export default ShopOwnersListPage;

//  <Table
//                      className="rounded-pill  "
//                       style={{width:"95%"}}
//                     >
//                       <thead style={{ height: "50px" }} className="rounded-pill">
//                         <tr className="rounded-circle p-5 m-5">
//                           <th>Shopname</th>
//                           <th>Shopowner Name</th>
//                           <th>Shoplisence</th>
//                           <th>Shop Registration Number</th>
//                           <th>Shopowner Contact</th>
//                         </tr>
//                       </thead>
//                       <tbody>
//                         {ShopOwner.map((ShopOwner, index) => {
//                           return (
//                             <tr key={index} className="mt-4">
//                               <td>{ShopOwner.shopname}</td>
//                               <td>{ShopOwner.shopownername}</td>
//                               <td>
//                                 <img
//                                   className="parentimage"
//                                   alt="img" style={{width:"50px",height:"50px"}}
//                                   src={`${url}${ShopOwner.shoplisence}`}
//                                 ></img>
//                               </td>
//                               <td>{ShopOwner.shopregistrationnumber}</td>
//                               <td>{ShopOwner.shopownercontact}</td>
//                             </tr>
//                           );
//                         })}
//                       </tbody>
//                     </Table>
