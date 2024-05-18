import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axiosInstance from "../../APIS/axiosinstatnce";
import "./Admin.css";

function AdminHome() {
  const [customers, setCustomers] = useState([]);
  const [shopOwners, setShopOwners] = useState([]);
  const [Wholesale, setWholesale] = useState([]);
  const [Deliveryagent, setDeliveryagent] = useState([]);

  useEffect(() => {
    axiosInstance.get("/get_all_customers").then((responce) => {
      setCustomers(responce.data.data);
    });
    axiosInstance.get("/get_all_shopowners").then((responce) => {
      setShopOwners(responce.data.data);
    });
    axiosInstance.get("/get_all_wholesaledealer").then((responce) => {
      console.log(responce.data.data);
      setWholesale(responce.data.data);
    });
    axiosInstance.get("/get_all_deliveryagents").then((responce) => {
      setDeliveryagent(responce.data.data);
    });
  }, []);

  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("admin") !== null) {
      navigate("/admin_dashboard");
    } else {
      navigate("/admin");
    }
  }, []);

  return (
    <div>
      <div>
        <section className="home pt-5">
          <div className="row gx-5 m-5 admin_dashboard_main">
            <h1>Welcome Admin</h1>

            <div className="col-lg-6 mb-5 mt-5 mb-lg-0">
              <Link>
                <div className="revenue__box">
                  <h5>Total Customers</h5>
                  <span>{customers.length}</span>
                </div>
              </Link>
            </div>
            <div className="col-lg-6 mb-5 mt-5 mb-lg-0">
              <Link>
                <div className="order__box">
                  <h5>Total Shop Owners</h5>
                  <span>{shopOwners.length}</span>
                </div>
              </Link>
            </div>
            <div className="col-lg-6 mb-5 mt-5 mb-lg-0">
              <Link>
                <div className="products__box">
                  <h5>Total Wholesale Dealer</h5>
                  <span>{Wholesale.length}</span>
                </div>
              </Link>
            </div>
            <div className="col-lg-6 mb-5 mt-5 mb-lg-0">
              <Link>
                <div className="user__box">
                  <h5>Total Delivery Agents</h5>
                  <span>{Deliveryagent.length}</span>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default AdminHome;
