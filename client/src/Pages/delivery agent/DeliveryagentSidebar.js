import React, { useState, useEffect } from "react";
import { GrCompliance } from "react-icons/gr";
import { RiLogoutCircleLine } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import sidebarimg from "../../images/sidebarimg.png";
import { MdDashboard } from "react-icons/md";
import { BsBoxes } from "react-icons/bs";
import Collapse from "react-bootstrap/Collapse";
import { FaUserAlt } from "react-icons/fa";
import { FiAlignJustify } from "react-icons/fi";
import { FaAngleRight } from "react-icons/fa6";
import { TbTrolley } from "react-icons/tb";
import { FaBoxOpen } from "react-icons/fa";

import "../Admin/Admin.css";
import axiosInstance from "../../APIS/axiosinstatnce";
function DeliveryagentSidebar() {
  const [open, setOpen] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [dropdownVisible1, setDropdownVisible1] = useState(false);

  const navigate = useNavigate();
  let shopname = localStorage.getItem("shopname");

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem("deliveryagent");
    localStorage.removeItem("token");

    alert("Logged out Successfully");
    navigate("/deliveryagentlogin");
  };

  const [data, setData] = useState({});

  const deliveryagent = localStorage.getItem("deliveryagent");

  useEffect(() => {
    axiosInstance
      .get("/get_a_deliveryagent/" + deliveryagent)
      .then((res) => {
        setData(res.data.data);
        console.log(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };
  const toggleDropdown1 = () => {
    setDropdownVisible1(!dropdownVisible1);
  };

  return (
    <div className={`shopownersidebar ${open ? "open" : ""}`}>
      <button
        className=" btn sidebaricon mb-3 d-lg-none"
        onClick={() => setOpen(!open)}
        aria-controls="sidebar"
        aria-expanded={open}
      >
        <FiAlignJustify className="toggglesidebar" />
      </button>
      <Collapse in={open} className="d-lg-block">
        <div id="sidebar" className="sidebar">
          <div className="sidebar-div1-color p-3">
            <Row className="align-items-center">
              <Col xs={3} md={2}>
                <img className="sidebarimg mt-3" src={sidebarimg} alt="img" />
              </Col>
              <Col xs={9} md={10}>
                <p to="" className="sidebar-para mb-1 ms-3">
                  {data.name}
                </p>
              </Col>
            </Row>
          </div>
          <div className="sidebar-div2-color flex-grow-1 ">
            <ul className="sidebar-nav nav-pills nav-stacked p-0 m-0">
              <li className="nav-item " style={{ marginTop: "55%" }}>
                <Link
                  to="/deliveryagentmain"
                  className="shopownersidebar-dashboard rounded-end-5 "
                >
                  <MdDashboard /> Dashboard
                </Link>
              </li>
              <li className="nav-item ps-3 mt-4">
                <Link
                  to="/deliveryagentprofile"
                  className="nav-link sidebar-shop"
                >
                  <FaUserAlt className="ms-4" /> Profile
                </Link>
              </li>
              <li className="nav-item">
              <div className='admin_dash_div '>
              <label onClick={toggleDropdown}>
                <div>
                <FaAngleRight/><TbTrolley className="ms-2"/><span> Delivery requests</span>
                </div>
              </label>
              {dropdownVisible && (
                  <div className="dropdown_menu sidebar_dash_drop">
                      <div className="wholesaler-dash-backgroundcolor ms-3 me-3">
                        <Link to="/deliveryagentdeliveryrequest" className="wholesaler-dash-link"><label className="wholesaler-dash-label">Shop Owner</label></Link>
                        <Link to="/viewWholesalerdeliveryrequest" className="wholesaler-dash-link"><label className="wholesaler-dash-label ms-2">Wholesale Dealer</label></Link>
                      </div>
                  </div>
              )}
            </div>
              </li>
              <li className="nav-item">
              <div className='admin_dash_div '>
              <label onClick={toggleDropdown1}>
                <div>
                <FaAngleRight/><FaBoxOpen className="ms-2"/><span> Delivery updates</span>
                </div>
              </label>
              {dropdownVisible1 && (
                  <div className="dropdown_menu sidebar_dash_drop">
                      <div className="wholesaler-dash-backgroundcolor ms-3 me-3">
                        <Link to="/deliveryagentdeliveryupdate" className="wholesaler-dash-link"><label className="wholesaler-dash-label"> Shop Owner</label></Link>
                        <Link to="/updatewholesalerdeliveryrequest" className="wholesaler-dash-link"><label className="wholesaler-dash-label ms-2">Wholesale dealer</label></Link>
                      </div>
                  </div>
              )}
            </div>
              </li>
              <li className="nav-item ps-3">
                <Link
                  to="/deliveryagentcomplaint"
                  className="nav-link sidebar-shop"
                >
                  <GrCompliance  className="ms-4"/> Complaints
                </Link>
              </li>
              <li className="nav-item mt-auto">
                <Link
                  to=""
                  className="nav-link sidebar-logout"
                  onClick={handleLogout}
                  style={{
                    background:
                      "linear-gradient(90deg, #FF0000 0%, #990000 100%)",
                    margin: "25%",
                    borderRadius: "25px",
                  }}
                >
                  <RiLogoutCircleLine /> Logout
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </Collapse>
    </div>
  );
}

export default DeliveryagentSidebar;
