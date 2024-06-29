import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaArrowLeftLong } from "react-icons/fa6";
import { Card, Row, Col } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import axiosInstance from '../../APIS/axiosinstatnce';
function DeliveryAgentRequest({url}) {
    const[data,setData]=useState([])
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
      .get("/get_all_deliveryagents")
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
      .post("//" + id)
      .then((res) => {
        if (res.status === 200) {
          let msg =
            res?.data?.message || "DeliveryAgent Registration Request Rejected";
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
      .post("/" + id)
      .then((res) => {
        if (res.status === 200) {
          let msg =
            res?.data?.message || "DeliveryAgent Registrationeque Rst Accepted";
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
                  <h1 className="mt-5"> No DeliveryAgent Found</h1>
                )}
                {data?.length > 0 && (
                  <Row>
                    <h1>Delivery Agent Request</h1>
                    {data.map((item, index) => (
                      <Col key={index} sm={12} md={6} lg={4} className="mb-4">
                        <Card style={{ width: "25rem", borderRadius: "25px" }}>
                          <table>
                            <div className="p-4">
                              <tr>
                                <td>
                                  <Card.Subtitle className="mb-2 text-muted">
                                   Name
                                  </Card.Subtitle>
                                </td>
                                <td className="ps-3">
                                  <Card.Subtitle className="mb-2 text-muted">
                                    {item.name}
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
                                    {item.address}
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
                                    {item.city}
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
                                    {item.contactNumber}
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
  )
}

export default DeliveryAgentRequest
