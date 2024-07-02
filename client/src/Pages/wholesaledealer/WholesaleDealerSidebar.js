import React, { useState } from "react";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaBoxOpen } from "react-icons/fa";
import { BsPeopleFill } from "react-icons/bs";
import { GrDeliver } from "react-icons/gr";
import { BsBoxSeam } from "react-icons/bs";
import { GrCompliance } from "react-icons/gr";
import { RiLogoutCircleLine } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import sidebarimg from "../../images/sidebarimg.png";
import { MdDashboard } from "react-icons/md";
import { BsBoxes } from "react-icons/bs";
import { GiInjustice } from "react-icons/gi";
import { FaBell } from "react-icons/fa";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";
import { FaUserAlt } from "react-icons/fa";
import "./shopownersidebar.css";
import { FiAlignJustify } from "react-icons/fi";

function WholesaleDealerSidebar() {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();
    let shopname = localStorage.getItem("shopname");
  
    const handleLogout = (e) => {
      e.preventDefault();
      localStorage.removeItem("shopowner");
      localStorage.removeItem("shopownertoken");
      navigate("/shopownerlogin");
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
                  <p to="" className="sidebar-para mb-1 ms-3">{shopname}</p>
                </Col>
              </Row>
          </div>
          <div className="sidebar-div2-color flex-grow-1">
            <ul className="sidebar-nav nav-pills nav-stacked p-0 m-0">
              <li className="nav-item" style={{ marginTop: "55%" }}>
                <Link
                  to="/shopownerhome"
                  className="shopownersidebar-dashboard rounded-end-5 "
                >
                  <MdDashboard /> Dashboard
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/shopownerprofile" className="nav-link sidebar-shop">
                  <FaUserAlt /> Profile
                </Link>
              </li>
              <li className="nav-item">
                <Link to="" className="nav-link sidebar-shop">
                  <BsBoxes /> Products
                </Link>
              </li>
              <li className="nav-item">
                <Link to="" className="nav-link sidebar-shop">
                  <FaPeopleGroup /> Customer Orders
                </Link>
              </li>
              <li className="nav-item">
                <Link to="" className="nav-link sidebar-shop">
                  <BsBoxSeam /> Orders Products
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/wholesaledealerslist"
                  className="nav-link sidebar-shop"
                >
                  <FaBoxOpen /> Wholesale Dealers
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/shopownerslist" className="nav-link sidebar-shop">
                  <GiInjustice /> Dealer Comparison
                </Link>
              </li>

              <li className="nav-item">
                <Link to="" className="nav-link sidebar-shop">
                  <FaBell /> Notification
                </Link>
              </li>
              <li className="nav-item">
                <Link to="" className="nav-link sidebar-shop">
                  <GrCompliance /> Complaints
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
  )
}

export default WholesaleDealerSidebar
