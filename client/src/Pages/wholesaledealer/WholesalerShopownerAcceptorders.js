import React, { useState, useEffect } from "react";
import "./wholesale.css";
import { Card, Col, Row } from "react-bootstrap";
import axiosInstance from "../../APIS/axiosinstatnce";
import WholesaleDealerSidebar from "./WholesaleDealerSidebar";
import { useNavigate } from "react-router-dom";

function WholesalerShopownerAcceptorders({ url }) {
  const [data, setData] = useState([]);
  const [dagent, setDagent] = useState([]);
  const [district, setDistrict] = useState("");
  const [assignDAgent, setAssignDAgent] = useState({});
  const [dreq, setDreq] = useState({});
  const navigate = useNavigate();

  const wholesaledealerid = localStorage.getItem("wholesaledealer");

  // useEffect(() => {
  //   if (
  //     localStorage.getItem("token") == null &&
  //     localStorage.getItem("wholesaledealer") == null
  //   ) {
  //     navigate("/wholesaledealerlogin");
  //   }
  // }, [navigate]);

  const viewData = () => {
    axiosInstance
      .post(`/vieworderswholesaledealerId/${wholesaledealerid}`)
      .then((res) => {
        const acceptedOrders = res.data.data.filter(
          (order) =>
            order.order.orderStatus === "accepted" &&
            order.order.paymentStatus === "completed" 
        );
        setData(acceptedOrders);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getDagent = () => {
    axiosInstance
      .get("/get_all_accepted_Deliveryagent")
      .then((res) => {
        setDagent(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getDagentRequest = () => {
    axiosInstance
      .get(`/deliveryRequestsbywholesaledealer/${wholesaledealerid}`)
      .then((res) => {
        const temp = {};
        for (const i in res.data) {
          const key = res.data[i].order;
          temp[key] = res.data[i];
        }
        setDreq(temp);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    viewData();
    getDagentRequest();
  }, [wholesaledealerid]);

  useEffect(() => {
    axiosInstance
      .get(`/get_a_wholesaledealer/${wholesaledealerid}`)
      .then((res) => {
        setDistrict(res.data.data.districts);
      })
      .catch((err) => {
        console.log(err);
      });
    getDagent();
  }, []);

  const handleAssignDeliveryAgent = (orderId, agentId) => {
    setAssignDAgent((prevErrors) => ({
      ...prevErrors,
      [orderId]: agentId,
    }));
  };

  const SubmitAssignDeliveryAgent = (orderID) => {
    axiosInstance
      .post(`/wholesalerassignDeliveryAgent`, {
        orderID: orderID,
        agentId: assignDAgent[orderID],
        wholesaledealerid: localStorage.getItem("wholesaledealer")
      })
      .then((res) => {
        alert(res.data.message);
        viewData(); // Refresh data after assigning the agent
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div className="row">
        <div className="col-3">
          <WholesaleDealerSidebar />
        </div>
        <div className="col-9">
          <div className="text-center mt-5">
            <h3 className="shopowner-customerorder-request-h3">
              Accepted Orders
            </h3>
          </div>
          <div className="shopowner-customerorder-request-divbox mt-5">
            <Row xs={1} md={2} lg={3} className="g-4 p-3">
              {data.map((order) => (
                <Col key={order.order._id}>
                  <Card className="mt-4 container ">
                    <div className="shopowner-customerorder-request-cardbox mt-3 mb-3">
                      <div className="text-center">
                        <h5 className="hopowner-customerorder-request-h5">
                          Order Details
                        </h5>
                      </div>
                      <div className="row">
                        <div className="col-3 ms-3">
                          <div>
                            <label className="hopowner-customerorder-request-label">
                              Shop owner{" "}
                            </label>
                          </div>
                          <div>
                            <label className="hopowner-customerorder-request-label">
                              Address{" "}
                            </label>
                          </div>
                        </div>
                        <div className="col-1">
                          <div className="hopowner-customerorder-request-label">
                            :
                          </div>
                          <div className="hopowner-customerorder-request-label">
                            :
                          </div>
                        </div>
                        <div className="col-7 mb-3">
                          <div>
                            <label className="hopowner-customerorder-request-span">
                            {order.shopowner?.shopname || "N/A"}
                            </label>
                            <div>
                              <label className="hopowner-customerorder-request-label">
                                {order.shopowner?.shopowneraddress || "N/A"}
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      {order.orderProducts.map((product, idx) => (
                        <div className="row mt-4" key={idx}>
                          <div className="col-2 ms-3 me-1" >
                            <img
                            src={`${url}${product.productData.productimage.filename}`}
                            className="shopowner-customerorder-request-img"
                            alt={product.productData.name}
                           style={{width:"50px",height:"50px"}}
                          />
                          </div>
                          <div className="col-9">
                            <label className="hopowner-customerorder-request-label">
                              Brand Name :
                            </label>
                            <span className="ms-2 hopowner-customerorder-request-span">
                              {product.productData.brand}
                            </span>
                            <div>
                              <label className="hopowner-customerorder-request-label">
                                {product.productData.name}
                              </label>
                            </div>
                            <div className="row">
                              <div className="col">
                                <label className="hopowner-customerorder-request-label">
                                  &#8377; {product.productData.price}
                                </label>
                              </div>
                              <div className="col">
                                <label className="hopowner-customerorder-request-label">
                                  Qty-{product.purchasedQuantity}
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                      <hr></hr>
                      <div className="row mt-4 p-2">
                        <div className="col-5">
                          <label className="hopowner-customerorder-request-label">
                            Total Amount{" "}
                          </label>
                          <label className="hopowner-customerorder-request-label">
                            Payment
                          </label>
                          <label className="hopowner-customerorder-request-label">
                            Order Status
                          </label>
                          <label className="hopowner-customerorder-request-label">
                            Delivery Status
                          </label>
                         
                        </div>
                        <div className="col-1">
                          <div>
                            <label className="hopowner-customerorder-request-label">
                              :
                            </label>
                          </div>
                          <div>
                            <label className="hopowner-customerorder-request-label">
                              :
                            </label>
                          </div>
                          <div>
                            <label className="hopowner-customerorder-request-label">
                              :
                            </label>
                          </div>
                          <div>
                            <label className="hopowner-customerorder-request-label">
                              :
                            </label>
                          </div>
                          <div>
                           
                          </div>
                        </div>
                        <div className="col-6">
                          <div>
                            <label className="hopowner-customerorder-request-label">
                              &#8377;{" "}
                              {order.orderProducts.reduce(
                                (acc, product) =>
                                  acc +
                                  product.purchasedQuantity *
                                    product.productData.price,
                                0
                              )}
                            </label>
                          </div>
                          <label className="hopowner-customerorder-request-labelsuccess">
                            {order.order.paymentStatus}
                          </label><br></br>
                          <label className="hopowner-customerorder-request-label">
                            {order.order.orderStatus}
                          </label>
                          <br></br>
                          <label className="hopowner-customerorder-request-label">
                            {order.order.deliveryStatus}
                          </label>
                          {order.order.deliveryStatus === "pending" ? (
                            <div>
                            Assign Delivery Agent
                              <select
                                className="hopowner-customerorder-request-select"
                                onChange={(e) =>
                                  handleAssignDeliveryAgent(
                                    order.order._id,
                                    e.target.value
                                  )
                                }
                              >
                                <option value="">Select Delivery Agent</option>
                                {dagent.map((deliveryAgent) => {
                                  return district === deliveryAgent.district ? (
                                    <option
                                      key={deliveryAgent._id}
                                      value={deliveryAgent._id}
                                    >
                                      {deliveryAgent.name}
                                    </option>
                                  ) : (
                                    ""
                                  );
                                })}
                              </select>
                              <div className="text-center my-3">
                                <button
                                  className="hopowner-customerorder-request-submitbtn"
                                  onClick={() =>
                                    SubmitAssignDeliveryAgent(order.order._id)
                                  }
                                >
                                  Submit
                                </button>
                              </div>
                            </div>
                          ) : ''}
                        </div>
                      </div>
                    </div>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WholesalerShopownerAcceptorders;
