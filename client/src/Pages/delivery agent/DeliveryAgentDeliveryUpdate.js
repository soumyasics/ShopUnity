import React, { useState, useEffect } from "react";
import "./deliveryagent.css";
import DeliveryagentSidebar from "./DeliveryagentSidebar";
import { Card, Col, Row } from "react-bootstrap";
import axiosInstance from "../../APIS/axiosinstatnce";
import { useNavigate } from "react-router-dom";

function DeliveryAgentDeliveryUpdate() {
  const [deliveryRequests, setDeliveryRequests] = useState([]);
  const [deliveryStatuses, setDeliveryStatuses] = useState({});
  const navigate = useNavigate();
  const getDeliveryRequests = async () => {
    try {
      const agentId = localStorage.getItem("deliveryagent");
      const response = await axiosInstance.get(`/getAllwholesalerdeliveryRequestsbyagentid/${agentId}`);
      const assignedRequests = response.data.filter(
        (request) => request.deliveryStatus === "accepted"
      );

      

      // Initialize deliveryStatuses state
      const statuses = {};
      assignedRequests.forEach(request => {
        statuses[request._id] = request.deliveryStatus;
      });

      setDeliveryRequests(assignedRequests);
      setDeliveryStatuses(statuses);
    } catch (error) {
      console.error("Error fetching delivery requests:", error);
    }
  };

  // useEffect(() => {
  //   if (
  //     localStorage.getItem("token") == null &&
  //     localStorage.getItem("deliveryagent") == null
  //   ) {
  //     navigate("/deliveryagentlogin");
  //   }
  // }, [navigate]);

  useEffect(() => {
    getDeliveryRequests();
  }, []);

  const handleUpdateDelivery = async (id) => {
    try {
      if (deliveryStatuses[id] === "delivered") {
        await axiosInstance.post(`/deliverDeliveryRequestofwholesaledealer/${id}`);
        getDeliveryRequests(); // Refresh the delivery requests after updating
      }
    } catch (error) {
      console.error("Error updating delivery status:", error);
    }
  };

  const handleChange = (id, status) => {
    setDeliveryStatuses(prevStatuses => ({
      ...prevStatuses,
      [id]: status
    }));
  };

  return (
    <div>
      <div className="row">
        <div className="col-3">
          <DeliveryagentSidebar />
        </div>
        <div className="col-9 p-5">
          <div className="deliveryagent-deliveryrequest-divbox">
            <h3 className="deliveryagent-deliveryrequest-h3 pt-4 text-center">
              Delivery Updates
            </h3>
            <div>
              <h5 className="deliveryagent-deliveryrequest-h3 ms-3 pt-2">
                ShopOwner Orders
              </h5>
              <Row>
                {deliveryRequests ? deliveryRequests.map((request) => (
                  <Col xs={12} md={6} lg={4} key={request._id} className="mb-3">
                    <Card>
                      <Card.Body>
                        <div className="mt-2">
                          <label>Whole Sale Shop Name : </label>
                          <span className="mt-2">{request.wholesaledealer.storeName}</span>
                        </div>
                        <div className="mt-2">
                          <label>Whole Sale Dealer Name : </label>
                          <span className="mt-2">{request.wholesaledealer.dealername}</span>
                        </div>
                        <div className="mt-2">
                          <label>Whole Sale Shop Address : </label>
                          <span className="mt-2">{request.wholesaledealer.address}</span>
                        </div>
                        <div className="mt-2">
                          <label>Shop Name : </label>
                          <span className="mt-2">{request.wholesaledealer.shopname}</span>
                        </div>
                        <div className="mt-2">
                          <label>Shop Owner Name : </label>
                          <span className="mt-2">{request.shopOwner.shopownername}</span>
                        </div>
                        <div className="mt-2">
                          <label>Shop/Delivery Address : </label>
                          <span className="mt-2">{request.shopOwner.shopowneraddress}</span>
                        </div>
                        
                        <div className="mt-2">
                          <label>Delivery Status : </label>
                          <select
                            className="deliveryagent-deliveryupdate-textbox"
                            value={deliveryStatuses[request._id]}
                            onChange={(e) => handleChange(request._id, e.target.value)}
                          >
                            <option value="accepted">Accepted</option>
                            <option value="delivered">Delivered</option>
                          </select>
                        </div>
                        <div className="mt-2">
                          <button
                            className="deliveryagent-deliveryupdate-submitbtn"
                            onClick={() => handleUpdateDelivery(request._id)}
                          >
                            Submit
                          </button>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                )):''}
              </Row>
            </div>
            <div>
            {/*
              <h5 className="deliveryagent-deliveryrequest-h3 ms-3 pt-2">
                WholeSale Dealer Orders
              </h5>
              <Row>
                {deliveryRequests.map((request) => (
                  <Col xs={12} md={6} lg={4} key={request._id} className="mb-3">
                    <Card>
                      <Card.Body>
                        <div className="mt-2">
                          <label>Dealer Name</label>
                          <div>{request.dealerName}</div>
                        </div>
                        <div className="mt-2">
                          <label>Shop Name</label>
                          <div>{request.shopName}</div>
                        </div>
                        <div className="mt-2">
                          <label>Delivery Address</label>
                          <div>{request.deliveryAddress}</div>
                        </div>
                        <div className="mt-2">
                          <label>Delivery Status</label>
                          <input
                            type="text"
                            className="deliveryagent-deliveryupdate-textbox"
                            defaultValue={request.deliveryStatus}
                          />
                        </div>
                        <div className="mt-2">
                          <button className="deliveryagent-deliveryupdate-submitbtn">
                            Submit
                          </button>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>*/}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeliveryAgentDeliveryUpdate;
