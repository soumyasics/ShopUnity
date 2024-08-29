import React, { useState, useEffect } from "react";
import "./deliveryagent.css";
import DeliveryagentSidebar from "./DeliveryagentSidebar";
import { Card, Col, Row } from "react-bootstrap";
import axiosInstance from "../../APIS/axiosinstatnce";
import { useNavigate } from "react-router-dom";

function DeliveryAgentCustomerDeliveryUpdate() {
  const [deliveryRequests, setDeliveryRequests] = useState([]);
  const [deliveryStatuses, setDeliveryStatuses] = useState({});
  const navigate = useNavigate();

  const getDeliveryRequests = async () => {
    const agentId = localStorage.getItem("deliveryagent");
    try {
      const response = await axiosInstance.get(
        `/getAlldeliveryShopownerrequestsbyagentid/${agentId}`
      );
      console.log(response.data,"m");
      
      const acceptedRequests = response.data.filter(
        (request) => request.deliveryStatus == "accepted"
      );
      console.log(acceptedRequests,"y");
      

      console.log(acceptedRequests, "p");

      // Initialize deliveryStatuses state
      const statuses = {};
      acceptedRequests.forEach((request) => {
        statuses[request._id] = request.deliveryStatus;
      });

      setDeliveryRequests(acceptedRequests);
      setDeliveryStatuses(statuses);
    } catch (error) {
      console.error("Error fetching delivery requests:", error);
    }
  };

  useEffect(() => {
    if (
      localStorage.getItem("token") == null &&
      localStorage.getItem("deliveryagent") == null
    ) {
      navigate("/deliveryagentlogin");
    }
  }, [navigate]);

  useEffect(() => {
    getDeliveryRequests();
  }, []);

  const handleUpdateDelivery = async (id) => {
    try {
      if (deliveryStatuses[id] === "delivered") {
        await axiosInstance.post(
          `/deliverDeliveryRequest/${id}`
        );
        alert("Order is Delivered Successfully")
        getDeliveryRequests(); // Refresh the delivery requests after updating
      }
    } catch (error) {
      console.error("Error updating delivery status:", error);
    }
  };

  const handleChange = (id, status) => {
    setDeliveryStatuses((prevStatuses) => ({
      ...prevStatuses,
      [id]: status,
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
                {deliveryRequests.length > 0
                  ? deliveryRequests.map((request) => (
                      <Col
                        xs={12}
                        md={6}
                        lg={4}
                        key={request._id}
                        className="mb-3"
                      >
                        <Card>
                          <Card.Body>
                            <div className="mt-2">
                              <label>Shop Name : </label>
                              <span className="mt-2">
                                {request.shopowner.shopname}
                              </span>
                            </div>
                            <div className="mt-2">
                              <label>Shop Owner Name : </label>
                              <span className="mt-2">
                                {request.shopowner.shopownername}
                              </span>
                            </div>
                            <div className="mt-2">
                              <label>Shop Owner Address : </label>
                              <span className="mt-2">
                                {request.shopowner.shopowneraddress}
                              </span>
                            </div>
                            <div className="mt-2">
                              <label>Customer Name : </label>
                              <span className="mt-2">
                                {request.customer.name}
                              </span>
                            </div>
                            <div className="mt-2">
                              <label>Customer Address : </label>
                              <span className="mt-2">
                                {request.customer.address}
                              </span>
                            </div>
                            <div className="mt-2">
                              <label>Delivery Status : </label>
                              <select
                                className="deliveryagent-deliveryupdate-textbox"
                                value={deliveryStatuses[request._id]}
                                onChange={(e) =>
                                  handleChange(request._id, e.target.value)
                                }
                              >
                                <option value="accepted" disabled>Accepted</option>
                                <option value="delivered">Delivered</option>
                              </select>
                            </div>
                            <div className="mt-2">
                              <button
                                className="deliveryagent-deliveryupdate-submitbtn"
                                onClick={() =>
                                  handleUpdateDelivery(request._id)
                                }
                              >
                                Submit
                              </button>
                            </div>
                          </Card.Body>
                        </Card>
                      </Col>
                    ))
                  :<div className="text-center">no request found</div>}
              </Row>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeliveryAgentCustomerDeliveryUpdate;
