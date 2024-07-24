import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import tick from "../../images/tick.png";
import axiosInstance from "../../APIS/axiosinstatnce";
import WholesaleDealerSidebar from "./WholesaleDealerSidebar";
import "./wholesale.css";
import { useNavigate } from "react-router-dom";

function WholesalerShopownerNewRequest({ url }) {
  const [data, setData] = useState([]);
  const wholesaledealerid = localStorage.getItem("wholesaledealer");

  const viewData = () => {
    axiosInstance
      .post(`/vieworderswholesaledealerId/${wholesaledealerid}`)
      .then((res) => {
        console.log(res, "o");
        const pendingOrders = res.data.data.filter(
          (order) => order.order.orderStatus === "pending"
        );
        setData(pendingOrders);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const navigate = useNavigate();

  // useEffect(() => {
  //   if (
  //     localStorage.getItem("token") == null &&
  //     localStorage.getItem("wholesaledealer") == null
  //   ) {
  //     navigate("/wholesaledealerlogin");
  //   }
  // }, [navigate]);

  useEffect(() => {
    viewData();
  }, [wholesaledealerid]);

  const handleAcceptOrder = (orderid) => {
    console.log("Accepting order with ID:", orderid);
    axiosInstance
      .post(`/acceptOrderRequestbywholesaler/${orderid}`)
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          alert(res.data.message);
          viewData();
        } else {
          alert("Order is already accepted");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="row">
      <div className="col-3">
        <WholesaleDealerSidebar />
      </div>
      <div className="col-9">
        <div className="text-center mt-5">
          <h3 className="shopowner-customerorder-request-h3">Order Request</h3>
        </div>
        <div className="shopowner-customerorder-request-divbox mt-5">
          <Row xs={1} md={2} lg={2} className="g-4">
            {data.map((item) => (
              <Col className="mt-4" key={item.order._id}>
                <Card className="shopowner-customerorder-request-cardbox mt-3 mb-3 bg-light">
                  <Card.Body>
                    <div className="text-center">
                      <h5 className="shopowner-customerorder-request-h5">
                        Order Details
                      </h5>
                    </div>
                    <div className="row">
                      <div className="col-3 ms-3">
                        <div>
                          <label className="shopowner-customerorder-request-label">
                            Shop Name
                          </label>
                        </div>
                        <div>
                          <label className="shopowner-customerorder-request-label">
                            Address
                          </label>
                        </div>
                      </div>
                      <div className="col-1">
                        <div className="shopowner-customerorder-request-label">
                          :
                        </div>
                        <div className="shopowner-customerorder-request-label">
                          :
                        </div>
                      </div>
                      <div className="col-7 mb-3">
                        <div>
                          <label className="shopowner-customerorder-request-span">
                            {item.shopowner?.shopname || "N/A"}
                          </label>
                          <div>
                            <label className="shopowner-customerorder-request-label">
                              {item.shopowner?.shopowneraddress || "N/A"}
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    {item.orderProducts.map((product, idx) => (
                      <div className="row" key={idx}>
                        <div className="col-3">
                          <img
                            src={`${url}${product.productData.productimage.filename}`}
                            className="shopowner-customerorder-request-img w-100"
                            alt={product.productData.name}
                          />
                        </div>
                        <div className="col-9">
                          <label className="shopowner-customerorder-request-label">
                            Brand Name:
                          </label>
                          <span className="ms-2 shopowner-customerorder-request-span">
                            {product.productData.brand || "N/A"}
                          </span>
                          <div>
                            <label className="shopowner-customerorder-request-label">
                              {product.productData.name || "N/A"}
                            </label>
                          </div>
                          <div className="row">
                            <div className="col">
                              <label className="shopowner-customerorder-request-label">
                                &#8377; {product.productData.price || "N/A"}
                              </label>
                            </div>
                            <div className="col">
                              <label className="shopowner-customerorder-request-label">
                                Qty-{product.purchasedQuantity || "0"}
                              </label>
                            </div>
                          </div>
                          <hr />
                          <div className="row">
                            <div className="col-5">
                              <label className="shopowner-customerorder-request-label">
                                Total Amount
                              </label>
                              <label className="shopowner-customerorder-request-label">
                                Payment Status
                              </label>
                              <label className="shopowner-customerorder-request-label">
                                Order Type
                              </label>
                            </div>
                            <div className="col-1">
                              <div>
                                <label className="shopowner-customerorder-request-label">
                                  :
                                </label>
                              </div>
                              <div>
                                <label className="shopowner-customerorder-request-label">
                                  :
                                </label>
                              </div>
                              <div>
                                <label className="shopowner-customerorder-request-label">
                                  :
                                </label>
                              </div>
                            </div>
                            <div className="col-6">
                              <div>
                                <label className="shopowner-customerorder-request-label">
                                  &#8377;{" "}
                                  {product.purchasedQuantity *
                                    product.productData.price || "0"}
                                </label>
                              </div>
                              <label className="shopowner-customerorder-request-labelsuccess">
                                {item.order.paymentStatus || "Pending"}
                              </label>
                              <div>
                                <label className="shopowner-customerorder-request-label">
                                  {item.order.orderType || "N/A"}
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="text-center">
                            <button
                              className="shopowner-customerorder-request-tickbtn"
                              onClick={() =>
                                handleAcceptOrder(item.order._id)
                              }
                            >
                              <img src={tick} alt="Update" /> Accept
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </div>
  );
}

export default WholesalerShopownerNewRequest;
