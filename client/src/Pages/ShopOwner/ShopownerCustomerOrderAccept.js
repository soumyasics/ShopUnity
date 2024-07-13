import React, { useState, useEffect } from "react";
import "./shopowner.css";
import ShopOwnerSidebar from "./ShopOwnerSidebar";
import { Card, Col, Row } from "react-bootstrap";
import axiosInstance from "../../APIS/axiosinstatnce";

function ShopownerCustomerOrderAccept({ url }) {
  const [data, setData] = useState([]);
  const [dagent, setDagent] = useState([]);
  const [district, setDistrict] = useState("");
  const [assignDAgent, setAssignDAgent] = useState({});

  const shopownerid = localStorage.getItem("shopowner");

  const viewData = () => {
    axiosInstance
      .post(`/viewordersshopownerbyId/${shopownerid}`)
      .then((res) => {
        // Filter out only the orders with status 'accepted'
        const acceptedOrders = res.data.data.filter(
          (order) => order.order.orderStatus === "accepted"
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

  useEffect(() => {
    viewData();
  }, [shopownerid]);

  useEffect(() => {
    axiosInstance
      .get(`/get_a_shopowner/${shopownerid}`)
      .then((res) => {
        console.log(res.data.data.shopownerdistrict);
        setDistrict(res.data.data.shopownerdistrict);
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
      .post(`/assignDeliveryAgent`, {
        orderID: orderID,
        agentId: assignDAgent[orderID],
      })
      .then((res) => {
        alert(res.data.message);
        viewData(); // Refresh data after assigning the agent
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div>
      <div className="row">
        <div className="col-3">
          <ShopOwnerSidebar />
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
                              Customer{" "}
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
                              {order.order.customer?.name || "N/A"}
                            </label>
                            <div>
                              <label className="hopowner-customerorder-request-label">
                                {order.order.customer?.address || "N/A"}
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      {order.orderProducts.map((product, idx) => (
                        <div className="row mt-4" key={idx}>
                          <div className="col-3">
                            <img
                              src={`${url}${product.productData.productimage.filename}`}
                              className="hopowner-customerorder-request-img"
                              alt={product.productData.name}
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
                      <div className="row mt-4">
                        <div className="col-5">
                          <label className="hopowner-customerorder-request-label">
                            Total Amount{" "}
                          </label>
                          <label className="hopowner-customerorder-request-label">
                            Payment Status
                          </label>
                          <label className="hopowner-customerorder-request-label">
                            Assign Delivery Agent
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
                            {order.order.paymentStatus || "Pending"}
                          </label>
                          <div>
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
                              {/* Populate with actual delivery agents */}
                              {dagent.map((deliveryAgent) => {
                                return district == deliveryAgent.district ? (
                                  <option value={deliveryAgent._id}>
                                    {deliveryAgent.name}
                                  </option>
                                ) : (
                                  ""
                                );
                              })}
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="text-center mt-3">
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

export default ShopownerCustomerOrderAccept;
