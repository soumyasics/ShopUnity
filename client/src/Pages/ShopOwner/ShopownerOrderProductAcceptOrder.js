import React, { useState, useEffect } from "react";
import ShopOwnerSidebar from "./ShopOwnerSidebar";
import axiosInstance from "../../APIS/axiosinstatnce";
import chocolate from "../../images/chocolate.png"; // Placeholder image
import { useNavigate } from "react-router-dom";

function ShopownerOrderProductAcceptOrder({ url }) {
  const [data, setData] = useState([]);
  const navigate=useNavigate()
  const shopownerid = localStorage.getItem("shopowner");

  // useEffect(() => {
  //   if (
  //     localStorage.getItem("shopownertoken") == null &&
  //     localStorage.getItem("shopowner") == null
  //   ) {
  //     navigate("/shopownerlogin");
  //   }
  // }, [navigate]);

  const viewData = () => {
    axiosInstance
      .post(`/viewordersshopownerbyId/${shopownerid}`)
      .then((res) => {
        // Filter out only the orders with status 'accepted'
        const acceptedOrders = res.data.data.filter(
          (order) => order.order.orderStatus == "accepted"
        );
        setData(acceptedOrders);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    viewData();
  }, [shopownerid]);

  console.log(data, "o");

  return (
    <div className="row">
      <div className="col-3">
        <ShopOwnerSidebar />
      </div>
      <div className="col-8">
        <div className="text-center">
          <h3 className="customerorder-vieworder-h2 mt-3">View Orders</h3>
        </div>
        <div className="customerorder-vieworder-divbox ms-2 me-2 mb-2">
          <div className="container mt-2">
            {data.length === 0 ? (
              <div className="text-center">
                <h4>No Accepted Orders</h4>
              </div>
            ) : (
              data.map((order) => (
                <div
                  key={order.order._id}
                  className="customerorder-vieworder-orderbox mb-3 p-2"
                >
                  <div className="text-center mt-2">
                    <h4 className="hopowner-customerorder-request-h5">
                      Order Details
                    </h4>
                  </div>
                  {order.orderProducts.map((product, index) => (
                    <div className="row mt-2" key={index}>
                      <div className="col-5 text-center ">
                        <img
                          src={
                            product.productData.productimage
                              ? `${url}${product.productData.productimage.filename}`
                              : chocolate
                          }
                          className="view-customerorder-request-img"
                          alt={product.productData.name}
                        />
                      </div>
                      <div className="col-7">
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
                  <div className="text-center mt-2">
                    <h4 className="hopowner-customerorder-request-h5">
                      Order Summary
                    </h4>
                  </div>
                  <div className="row mt-2">
                    <div className="col-5 text-center">
                      <img
                        src={
                          order.orderProducts[0]?.productData.productimage
                            ? `${url}${order.orderProducts[0]?.productData.productimage.filename}`
                            : chocolate
                        }
                        className="view-customerorder-request-img"
                        alt="Order Summary"
                      />
                    </div>
                    <div className="col-7">
                      <div className="row">
                        <div className="col">
                          <div>
                            <h5 className="hopowner-customerorder-request-label">
                              Total Amount
                            </h5>
                          </div>
                          <div>
                            <h5 className="hopowner-customerorder-request-label">
                              Payment Status
                            </h5>
                          </div>
                        </div>
                        <div className="col">
                          <div>
                            <h5 className="hopowner-customerorder-request-label">
                              :
                            </h5>
                          </div>
                          <div>
                            <h5 className="hopowner-customerorder-request-label">
                              :
                            </h5>
                          </div>
                        </div>
                        <div className="col">
                          <div>
                            <h5 className="hopowner-customerorder-request-label">
                              &#8377;{" "}
                              {order.orderProducts.reduce(
                                (acc, product) =>
                                  acc +
                                  product.purchasedQuantity *
                                    product.productData.price,
                                0
                              )}
                            </h5>
                          </div>
                          <div>
                            <h5 className="hopowner-customerorder-request-labelsuccess">
                              {order.order.paymentStatus || "Pending"}
                            </h5>
                          </div>
                        </div>
                      </div>
                      <div className="ms-5 ps-5 mt-3 customerorder-vieworder-tracking">
                        Tracking Delivery
                      </div>
                      <div className="row mt-2">
                        <div className="col">
                          <h5 className="hopowner-customerorder-request-label">
                            Delivery Status
                          </h5>
                        </div>
                        <div className="col">
                          <h5 className="hopowner-customerorder-request-label">
                            :
                          </h5>
                        </div>
                        <div className="col">
                          <h5 className="customerorder-vieworder-pending">
                            {order.order.orderStatus}
                          </h5>
                        </div>
                        <div className="col"></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShopownerOrderProductAcceptOrder;
