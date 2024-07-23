import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./sidebar.css"; // Ensure this CSS file contains the necessary styles
import sidebarimg from "../../images/sidebarimg.png";
import { MdDashboard } from "react-icons/md";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaAngleRight, FaPeopleGroup } from "react-icons/fa6";
import { FaBoxOpen } from "react-icons/fa";
import { BsPeopleFill } from "react-icons/bs";
import { GrDeliver } from "react-icons/gr";
import { BsBoxSeam } from "react-icons/bs";
import { GrCompliance } from "react-icons/gr";
import { RiLogoutCircleLine } from "react-icons/ri";
import Collapse from "react-bootstrap/Collapse";
import { FaUserClock } from "react-icons/fa";
import { FiAlignJustify } from "react-icons/fi";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function Sidebar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem("admin");
    navigate("/admin");
  };

  const [dropdownVisible, setDropdownVisible] = useState(false);
  const toggleDropdown = () => {
      setDropdownVisible(!dropdownVisible);
  };
  const [dropdownVisible2, setDropdownVisible2] = useState(false);
  const toggleDropdown2 = () => {
      setDropdownVisible2(!dropdownVisible2);
  };
  const [dropdownVisible3, setDropdownVisible3] = useState(false);
  const toggleDropdown3 = () => {
      setDropdownVisible3(!dropdownVisible3);
  };
  const [dropdownVisible4, setDropdownVisible4] = useState(false);
  const toggleDropdown4 = () => {
      setDropdownVisible4(!dropdownVisible4);
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
                <p className="sidebar-para mb-1 ms-3">Admin</p>
              </Col>
            </Row>
          </div>
          <div className="sidebar-div2-color flex-grow-1">
            <ul className="sidebar-nav nav-pills nav-stacked p-0 m-0">
              <li className="nav-item" style={{ marginTop: "55%" }}>
                <Link
                  to="/admin_dashboard"
                  className="shopownersidebar-dashboard rounded-end-5 "
                >
                  <MdDashboard /> Dashboard
                </Link>
              </li>
              <li className="nav-item ms-4 ps-3 mt-4">
                <Link to="/customerlistpage" className="sidebar-shop">
                  <FaPeopleGroup /> Customers
                </Link>
              </li>
              <li className="nav-item">
                <div className='admin_dash_div '>
                  <label onClick={toggleDropdown}>
                    <div>
                    <FaAngleRight/><FaBoxOpen className="ms-2"/><span> Wholesale Dealer</span>
                    </div>
                  </label>
                  {dropdownVisible && (
                      <div className="dropdown_menu sidebar_dash_drop">
                          <div className="wholesaler-dash-backgroundcolor ms-3 me-3">
                            <Link to="/wholesaledealerrequests" className="wholesaler-dash-link"><label className="wholesaler-dash-label"> View All Request</label></Link>
                            <Link to="/wholesalealldealerviewpage" className="wholesaler-dash-link"><label className="wholesaler-dash-label ms-2">View All Wholesaler</label></Link>
                          </div>
                      </div>
                    )}
                </div>
              </li>
              <li className="nav-item">
                <div className='admin_dash_div '>
                  <label onClick={toggleDropdown2}>
                    <div>
                    <FaAngleRight/><BsPeopleFill className="ms-2"/><span> Shop Owners</span>
                    </div>
                  </label>
                  {dropdownVisible2 && (
                      <div className="dropdown_menu sidebar_dash_drop">
                          <div className="wholesaler-dash-backgroundcolor ms-3 me-3">
                            <Link to="/shopownerspendinglist" className="wholesaler-dash-link"><label className="wholesaler-dash-label">View All Request</label></Link>
                            <Link to="/shopownerslist" className="wholesaler-dash-link"><label className="wholesaler-dash-label ms-2">View All Shop Owners</label></Link>
                          </div>
                      </div>
                    )}
                </div>
              </li>
              <li className="nav-item">
                <div className='admin_dash_div '>
                  <label onClick={toggleDropdown3}>
                    <div>
                    <FaAngleRight/><GrDeliver className="ms-2"/><span> Delivery Agents</span>
                    </div>
                  </label>
                  {dropdownVisible3 && (
                      <div className="dropdown_menu sidebar_dash_drop">
                          <div className="wholesaler-dash-backgroundcolor ms-3 me-3">
                            <Link to="/alldeliveryagentviewpage" className="wholesaler-dash-link"><label className="wholesaler-dash-label">View All Request</label></Link>
                            <Link to="/deliveryagentrequest" className="wholesaler-dash-link"><label className="wholesaler-dash-label ms-2">View All Delivery Agents</label></Link>
                          </div>
                      </div>
                    )}
                </div>
              </li>
              <li className="nav-item">
                <div className='admin_dash_div '>
                  <label onClick={toggleDropdown4}>
                    <div>
                    <FaAngleRight/><BsBoxSeam className="ms-2"/><span> Orders</span>
                    </div>
                  </label>
                  {dropdownVisible4 && (
                      <div className="dropdown_menu sidebar_dash_drop">
                          <div className="wholesaler-dash-backgroundcolor ms-3 me-3">
                            <Link to="/adminviewcustomerorderlist" className="wholesaler-dash-link"><label className="wholesaler-dash-label"> Customer Orders</label></Link>
                            <Link to="/adminviewshoporderlist" className="wholesaler-dash-link"><label className="wholesaler-dash-label ms-2">Shop Orders</label></Link>
                          </div>
                      </div>
                    )}
                </div>
              </li>
              <li className="nav-item ms-4 ps-3">
                <Link to="/adminviewcomplaint" className="sidebar-shop">
                  <GrCompliance /> Complaints
                </Link>
              </li>
              {/* 
             
              <li className="nav-item">
                <Link to="/alldeliveryagentviewpage" className="sidebar-shop">
                  <GrDeliver /> Delivery Agents
                </Link>
              </li>
              <li className="nav-item">
              <Link to="/deliveryagentrequest" className="sidebar-shop">
                <GrDeliver /> Delivery Agents pending
              </Link>
            </li>
              <li className="nav-item">
                <Link to="" className="sidebar-shop">
                  < /> Customers Orders
                </Link>
              </li>
              */}
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

export default Sidebar;
