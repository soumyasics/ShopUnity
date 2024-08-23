import React, { useState, useEffect } from "react";
import "./deliveryagent.css";
import DeliveryagentSidebar from "./DeliveryagentSidebar";
import { Card } from "react-bootstrap";
import tick from "../../images/tick.png";
import wrong from "../../images/wrong.png";
import axiosInstance from "../../APIS/axiosinstatnce";
import { useNavigate } from "react-router-dom";

function DeliveryAgentDeliveryRequest() {
  const [deliveryRequests, setDeliveryRequests] = useState([]);

  const getDeliveryRequests = async () => {
    try {
      const agentId = localStorage.getItem("deliveryagent");
      const response = await axiosInstance.get(`/deliveryRequests/${agentId}`);
      const assignedRequests = response.data.filter(
        (request) => request.deliveryStatus == "assigned"
      );

      // Update the state with the filtered delivery requests
      setDeliveryRequests(assignedRequests);
    } catch (error) {
      console.error("Error fetching delivery requests:", error);
    }
  };

  const navigate = useNavigate();

  useEffect(() => {
    if (
      localStorage.getItem("token") == null &&
      localStorage.getItem("deliveryagent") == null
    ) {
      navigate("/deliveryagentlogin");
    }
  }, []);

  useEffect(() => {
    getDeliveryRequests();
  }, []);

  const handleAcceptRequest = async (requestId) => {
    try {
      const response = await axiosInstance.post(
        `/acceptdeliveryRequests/${requestId}`
      );
      setDeliveryRequests((prevRequests) =>
        prevRequests.map((request) =>
          request._id === requestId
            ? { ...request, deliveryStatus: "accepted" }
            : request
        )
      );
      getDeliveryRequests();
      alert("Accepted")
    } catch (error) {
      console.error("Error accepting delivery request:", error);
    }
  };

  const handleRejectRequest = async (requestId) => {
    try {
      const response = await axiosInstance.post(
        `/rejectdeliveryRequests/${requestId}`
      );
      setDeliveryRequests((prevRequests) =>
        prevRequests.map((request) =>
          request._id === requestId
            ? { ...request, deliveryStatus: "rejected" }
            : request
        )
      );
      alert("Rejected")
      getDeliveryRequests();
    } catch (error) {
      console.error("Error rejecting delivery request:", error);
    }
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
              Delivery Request
            </h3>
            <div className="row">
              {deliveryRequests.map((request, index) => (
                <div key={index} className="col-md-4 mb-4">
                  <Card className="h-100">
                    <div className="row ms-3 mb-3">
                      <div className="col">
                        <div className="mt-2">
                          <label>Shop Name: </label>
                          <label className="mt-2">{request.shopOwner.shopname}</label>
                        </div>
                        <div className="mt-2">
                          <label>Customer Name: </label>
                          <label className="mt-2">{request.customer.name}</label>
                        </div>
                        <div className="mt-2">
                          <label>Product Name: </label>
                          <div className="mt-2">
                            {request.orderProducts.map((product, i) => (
                              <label key={i}>
                                {product.productData.productname}
                              </label>
                            ))}
                          </div>
                        </div>
                        <div className="mt-2">
                          <label>Delivery Address: </label>
                          <label className="mt-2">{request.customer.address}</label>
                        </div>
                        <div className="mt-2">
                          <label>Shop Owner Address: </label>
                          <label className="mt-2">
                            {request.shopOwner.shopowneraddress}
                          </label>
                        </div>
                        <div className="mt-2">
                          <label>Delivery Status: </label>
                          <label className="mt-2">{request.deliveryStatus}</label>
                        </div>
                      </div>
                      <div className="text-center mt-2">
                        <button
                          className="deliveryagent-deliveryrequest-tickbtn"
                          onClick={() => handleAcceptRequest(request._id)}
                        >
                          <img src={tick} alt="tick" />
                          Accept
                        </button>
                        <button
                          className="deliveryagent-deliveryrequest-wrongbtn ms-5"
                          onClick={() => handleRejectRequest(request._id)}
                        >
                          <img
                            src={wrong}
                            className="shopowner-wrongproduct-img"
                            alt="wrong"
                          />
                          Reject
                        </button>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeliveryAgentDeliveryRequest;
