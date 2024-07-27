import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axiosInstance from "../../APIS/axiosinstatnce";
import "./Admin.css";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaBoxOpen } from "react-icons/fa";
import { BsPeopleFill } from "react-icons/bs";
import { GrDeliver } from "react-icons/gr";
import Footer from "../Footer";
function AdminHome() {
  const [customers, setCustomers] = useState([]);
  const [shopOwners, setShopOwners] = useState([]);
  const [Wholesale, setWholesale] = useState([]);
  const [Deliveryagent, setDeliveryagent] = useState([]);

  useEffect(() => {
    axiosInstance.get("/get_all_customers").then((responce) => {
      console.log(responce, "ll");
      if(responce.data.data!=null)
        setCustomers(responce.data.data);
      else
        setCustomers([])
    });
    axiosInstance.get("/get_all_shopowners").then((responce) => {
      console.log(responce);
      if(responce.data.data!=null)
        setShopOwners(responce.data.data);
      else
        setShopOwners([])
    });
    axiosInstance.get("/get_all_accepted_wholesaledealer").then((responce) => {
      console.log(responce.data.data);
      if(responce.data.data!=null)
        setWholesale(responce.data.data);
      else
      setWholesale([])
    });
    axiosInstance.get("/get_all_accepted_Deliveryagent").then((responce) => {
      console.log(responce);
      if(responce.data.data !=null)
        setDeliveryagent(responce.data.data);
      else
        setDeliveryagent([])
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
      <div className="admin-dash-color mt-5">
        <section className="pt-5">
          <div className="row container ">
            <div className="col-12 col-sm-6 col-md-3 mb-4">
              <Link className="admin-dash-link">
                <div>
                  <h5 className="admin-dash-h5-1">
                    <FaPeopleGroup /> Total Customers
                  </h5>
                </div>
                <div className="revenue__box">
                  <FaPeopleGroup className="admin-dash-icon" />
                  <br></br>
                  <br></br>
                  <span>
                    {(customers.length) > 0 ? customers.length:0}
                    <p className="admin-dash-para">Customers</p>
                  </span>
                </div>
              </Link>
            </div>

            <div className="col-12 col-sm-6 col-md-3 mb-4">
              <Link className="admin-dash-link">
                <h5 className="admin-dash-h5-2">
                  <FaBoxOpen />
                  Total Wholesale Dealers
                </h5>
                <div className="order__box">
                  <FaBoxOpen className="admin-dash-icon" />
                  <br></br>
                  <br></br>
                  <span>
                    {(Wholesale.length) > 0 ? Wholesale.length :0}
                    <p className="admin-dash-para">Dealers</p>
                  </span>
                </div>
              </Link>
            </div>

            <div className="col-12 col-sm-6 col-md-3 mb-4">
              <Link className="admin-dash-link">
                <h5 className="admin-dash-h5-3">
                  <BsPeopleFill /> Total Shop Owners
                </h5>
                <div className="products__box">
                  <BsPeopleFill className="admin-dash-icon" />
                  <br></br>
                  <br></br>
                  <span>
                    {(shopOwners.length > 0 ? shopOwners.length : 0)}
                    <p className="admin-dash-para">Shop Owners</p>
                  </span>
                </div>
              </Link>
            </div>

            <div className="col-12 col-sm-6 col-md-3 mb-4">
              <Link className="admin-dash-link">
                <h5 className="admin-dash-h5-4">
                  <GrDeliver /> Total Delivery Agents
                </h5>
                <div className="user__box">
                  <GrDeliver className="admin-dash-icon" />
                  <br></br>
                  <br></br>
                  <span>
                   {( Deliveryagent.length > 0 ? Deliveryagent.length : 0)}
                    <p className="admin-dash-para">Delivery Agent</p>
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </div>
      <Footer/>
    </div>
  );
}

export default AdminHome;
