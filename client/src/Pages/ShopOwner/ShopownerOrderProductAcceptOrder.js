import React, { useEffect, useState } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import axiosInstance from "../../APIS/axiosinstatnce";
import chocolate from "../../images/chocolate.png";

function ShopownerOrderProductAcceptOrder({ url }) {

  const shopownerid = localStorage.getItem("shopowner");
  console.log(shopownerid);
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axiosInstance.post(
          `/viewOrdersByShopownerid/${shopownerid}`
        );
        console.log(response,"o");
        setOrders(response.data.data);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    fetchOrders();
  }, [shopownerid]);

  // useEffect(() => {
  //   if (
  //     localStorage.getItem("token") == null &&
  //     localStorage.getItem("customer") == null
  //   ) {
  //     navigate("/login");
  //   }
  // }, [navigate]);

  return (
    <div>
      <div>
        <Link to="/customerhome">
          <FaArrowLeftLong className="text-dark ms-5 mt-5" />
        </Link>
      </div>
      <div className="text-center">
        <h3 className="customerorder-vieworder-h2">View Orders</h3>
      </div>
      <div className="customerorder-vieworder-divbox ms-2 me-2">
        <div className="container mt-5">
          <label className="ms-5 customerorder-vieworder-label">Order</label>
          {orders.map((order, index) => (
            <div key={index} className="customerorder-vieworder-orderbox mb-5">
              <div className="text-center mt-5">
                <h4 className="hopowner-customerorder-request-h5">
                  Order Details
                </h4>
              </div>
              {order.orderProducts.map((product, prodIndex) => (
                <div className="row mt-2" key={prodIndex}>
                  <div className="col-5 text-center ">
                    <img
                      src={
                        product.productData?.productimage
                          ? `${url}${product.productData.productimage.filename}`
                          : chocolate
                      }
                      className="view-customerorder-request-img"
                      alt={product.productData?.name || "Product"}
                    />
                  </div>
                  <div className="col-7">
                    <label className="hopowner-customerorder-request-label">
                      Brand Name :
                    </label>
                    <span className="ms-2 hopowner-customerorder-request-span">
                      {product.productData?.brand}
                    </span>
                    <div>
                      <label className="hopowner-customerorder-request-label">
                        {product.productData?.name}
                      </label>
                    </div>
                    <div className="row">
                      <div className="col">
                        <label className="hopowner-customerorder-request-label">
                          &#8377; {product.productData?.price}
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
              <div className="row m-5">
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
                  <div>
                    <h5 className="hopowner-customerorder-request-label">
                      Delivery Status
                    </h5>
                  </div>
                  <div>
                    <h5 className="hopowner-customerorder-request-label">
                      Order Status
                    </h5>
                  </div>
                </div>
                <div className="col">
                  <div>
                    <h5 className="hopowner-customerorder-request-label">:</h5>
                  </div>
                  <div>
                    <h5 className="hopowner-customerorder-request-label">:</h5>
                  </div>
                  <div>
                    <h5 className="hopowner-customerorder-request-label">:</h5>
                  </div>
                  <div>
                    <h5 className="hopowner-customerorder-request-label">:</h5>
                  </div>
                </div>
                <div className="col">
                  <div>
                    <h5 className="hopowner-customerorder-request-label">
                      &#8377; {order.order.totalAmount}
                    </h5>
                  </div>
                  <div>
                    <h5 className="hopowner-customerorder-request-labelsuccess">
                      {order.order.paymentStatus}
                    </h5>
                  </div>
                  <div>
                    <h5 className="customerorder-vieworder-pending">
                      {order.order.deliveryStatus}
                    </h5>
                  </div>
                  <div>
                    <h5 className="customerorder-vieworder-pending">
                      {order.order.orderStatus}
                    </h5>
                  </div>
                </div>
                <div className="col"></div>
              </div>
              <div className="ps-5 m-3 customerorder-vieworder-tracking">
                Tracking Delivery:{" "}
                <span className="customerorder-vieworder-pending">
                  {order.order.deliveryStatus}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ShopownerOrderProductAcceptOrder;
