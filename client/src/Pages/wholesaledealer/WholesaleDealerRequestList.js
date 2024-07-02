import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import axiosInstance from "../../APIS/axiosinstatnce";
import Sidebar from "../Admin/Sidebar";
import "bootstrap/dist/css/bootstrap.min.css";
// import "./shopownerpendinglist.css";
import { Card, Row, Col } from "react-bootstrap";
import { FaArrowLeftLong } from "react-icons/fa6";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Link, useNavigate } from "react-router-dom";

function WholesaleDealerRequestList({ url }) {
  const [data, setData] = useState([]);
  const [Ashopownerdata, setAshopownerdata] = useState({});

  const [show, setShow] = useState(false);
  const [isDisabled, setisDisabled] = useState(false);

  const handleClose = () => setShow(false);

  const handleShow = (wholesaleid) => {
    setShow(true);
    setisDisabled(false);
    axiosInstance
      .get("/get_a_wholesaledealer/" + wholesaleid)
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
  const navigate = useNavigate();
  function getData() {
    axiosInstance
      .get("/get_all_wholesaledealer")
      .then((res) => {
        console.log(res);
        let allWholesaledealer = res?.data?.data || [];
        const filterPendingReqs = allWholesaledealer.filter(
          (wholesale) => wholesale?.status === "pending"
        );
        setData(filterPendingReqs);
      })
      .catch((err) => {
        console.log("err", err);
      });
  }

  function handleReject(id) {
    axiosInstance
      .post("/wholesaledealer_rejectrequest/" + id)
      .then((res) => {
        if (res.status === 200) {
          let msg =
            res?.data?.message || "wholesale Registration Request Rejected";
          setisDisabled(true);
          alert(msg);
          getData();
        } else {
          console.log("err on reject request");
        }
      })
      .catch((err) => {
        console.log("err", err);
      });
  }

  function handleAccept(id) {
    axiosInstance
      .post("/wholesaledealer_acceptrequest/" + id)
      .then((res) => {
        if (res.status === 200) {
          let msg =
            res?.data?.message || "wholesale Registrationeque Rst Accepted";
          setisDisabled(true);
          alert(msg);
          getData();
        } else {
          console.log("err on accept request");
        }
      })
      .catch((err) => {
        console.log("err", err);
      });
  }

  return (
    <div>
      <div>
        <div className="m-4">
          <div className="mt-2">
            <Link to="/admin_dashboard" className="text-dark w-100">
              <FaArrowLeftLong />
            </Link>
          </div>
          <div className="mt-4">
            <div className="shopownerpendingrequestdiv">
              <div style={{ maxWidth: "100%" }} className="p-4">
                {data?.length === 0 && (
                  <h1 className="mt-5"> No wholesale Found</h1>
                )}
                {data?.length > 0 && (
                  <Row>
                    {data.map((item, index) => (
                      <Col key={index} sm={12} md={6} lg={4} className="mb-4">
                        <Card style={{ width: "25rem", borderRadius: "25px" }}>
                          <table>
                            <div className="p-4">
                              <tr>
                                <td>
                                  <Card.Subtitle className="mb-2 text-muted">
                                    Store Name
                                  </Card.Subtitle>
                                </td>
                                <td className="ps-3">
                                  <Card.Subtitle className="mb-2 text-muted">
                                    {item.storeName}
                                  </Card.Subtitle>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <Card.Subtitle className="mb-2 text-muted">
                                    Delaer name
                                  </Card.Subtitle>
                                </td>
                                <td className="ps-3">
                                  <Card.Subtitle className="mb-2 text-muted">
                                    {item.dealername}
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
                                    {item.address}
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
                                    {item.contact}
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
                                    {item.email}
                                  </Card.Subtitle>
                                  <div className="text-end">
                                    {" "}
                                    <button
                                      className="btn btn-outline-secondary rounded-pill px-5 mt-2"
                                      onClick={() => handleShow(item._id)}
                                    >
                                      View
                                    </button>
                                  </div>
                                </td>
                              </tr>
                            </div>
                          </table>
                        </Card>
                      </Col>
                    ))}
                  </Row>
                )}
              </div>
            </div>
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
                {/*<img
                  className="parentimage"
                  alt="img"
                  style={{ width: "100%", height: "380px" }}
                  src={`${url}${Ashopownerdata.dealerlisence}`}
                ></img>*/}
                <div>
                  <table>
                    <div className="p-4">
                      <tr>
                        <td>
                          <Card.Subtitle className="mb-2 text-muted">
                            Store name
                          </Card.Subtitle>
                        </td>
                        <td className="ps-3">
                          <Card.Subtitle className="mb-2 text-muted">
                            {Ashopownerdata.storeName}
                          </Card.Subtitle>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <Card.Subtitle className="mb-2 text-muted">
                            Dealer name
                          </Card.Subtitle>
                        </td>
                        <td className="ps-3">
                          <Card.Subtitle className="mb-2 text-muted">
                            {Ashopownerdata.dealername}
                          </Card.Subtitle>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <Card.Subtitle className="mb-2 text-muted">
                            Address
                          </Card.Subtitle>
                        </td>
                        <td className="ps-3">
                          <Card.Subtitle className="mb-2 text-muted">
                            {Ashopownerdata.address}
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
                            {Ashopownerdata.contact}
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
                            {Ashopownerdata.email}
                          </Card.Subtitle>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <Card.Subtitle className="mb-2 text-muted">
                             City
                          </Card.Subtitle>
                        </td>
                        <td className="ps-3">
                          <Card.Subtitle className="mb-2 text-muted">
                            {Ashopownerdata.city}
                          </Card.Subtitle>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <Card.Subtitle className="mb-2 text-muted">
                             District
                          </Card.Subtitle>
                        </td>
                        <td className="ps-3">
                          <Card.Subtitle className="mb-2 text-muted">
                            {Ashopownerdata.districts}
                          </Card.Subtitle>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <Card.Subtitle className="mb-2 text-muted">
                             Pincode
                          </Card.Subtitle>
                        </td>
                        <td className="ps-3">
                          <Card.Subtitle className="mb-2 text-muted">
                            {Ashopownerdata.pincode}
                          </Card.Subtitle>
                        </td>
                      </tr>
                      <tr className="mt-3">
                        {" "}
                        <td>
                          <button
                            className="btn btn-outline-success rounded-pill"
                            disabled={isDisabled}
                            onClick={() => handleAccept(Ashopownerdata._id)}
                          >
                            Accept
                          </button>
                        </td>
                        <td>
                          <button
                            className="btn btn-outline-danger rounded-pill"
                            disabled={isDisabled}
                            onClick={() => handleReject(Ashopownerdata._id)}
                          >
                            Reject
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

export default WholesaleDealerRequestList;
