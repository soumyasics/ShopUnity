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
import Collapse from "react-bootstrap/Collapse";
import { FiAlignJustify } from "react-icons/fi";
import './wholesale.css'
import { FaAngleRight } from "react-icons/fa6";
import { BsShop } from "react-icons/bs";
import '../Admin/Admin.css'

function WholesaleDealerSidebar({url}) {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();   
    let shopname = localStorage.getItem("shopname");

    const [dropdownVisible, setDropdownVisible] = useState(false);
    const [dropdownVisible1, setDropdownVisible1] = useState(false);
    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
    };
    const toggleDropdown1 = () => {
      setDropdownVisible1(!dropdownVisible);
  };
  
    const handleLogout = (e) => {
      e.preventDefault();
      localStorage.removeItem("wholesaledealer");
      localStorage.removeItem("token");

      alert("Logged out Successfully")
      navigate("/wholesaledealerlogin");
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
                <Link to="/wholesaledealerprofile" className="sidebar-link">
                  <img className="sidebarimg mt-3" src={sidebarimg} alt="img" />tyt
                  </Link>
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
                  to="/wholesaledealerprofile"
                  className="shopownersidebar-dashboard rounded-end-5 "
                >
                  <MdDashboard /> Dashboard
                </Link>
              </li>
              <li>
                <div className='admin_dash_div mt-4'>
                  <label onClick={toggleDropdown}>
                    <BsBoxes className="wholesaler-dash-icon"/> <span className="wholesaler-dash-iconspan"> Products</span><FaAngleRight className="ms-3"/>    
                  </label>
                  {dropdownVisible && (
                      <div className="dropdown_menu sidebar_dash_drop">
                          <div className="wholesaler-dash-backgroundcolor ms-3 me-3">
                            <Link className="wholesaler-dash-link"><label className="wholesaler-dash-label"> Add Product</label></Link>
                            <Link className="wholesaler-dash-link"><label className="wholesaler-dash-label ms-2">View Product</label></Link>
                          </div>
                      </div>
                  )}
                </div>
              </li>
              <li className="nav-item mt-3">
                <Link to="" className="nav-link sidebar-shop">
                   <BsShop className="wholesaler-dash-icon ms-3"/><span className="wholesaler-dash-iconspan ms-2"> Shops</span>
                </Link>
              </li>
              <li>
                <div className='admin_dash_div mt-4'>
                  <label onClick={toggleDropdown1} >
                    <BsBoxSeam className="wholesaler-dash-icon"/> <span className="wholesaler-dash-iconspan ms-1"> Shop Orders</span><FaAngleRight className="ms-3"/>    
                  </label>
                  {dropdownVisible && (
                      <div className="dropdown_menu sidebar_dash_drop">
                          <div className="wholesaler-dash-backgroundcolor ms-3 me-3">
                            <Link className="wholesaler-dash-link"><label className="wholesaler-dash-label"> New Requests</label></Link>
                            <Link className="wholesaler-dash-link"><label className="wholesaler-dash-label ms-2">Accept orders</label></Link>
                          </div>
                      </div>
                  )}
                </div>
              </li>
              <li className="nav-item mt-3">
                <Link to="" className="nav-link sidebar-shop">
                  <GrCompliance className="wholesaler-dash-icon ms-3" /><span className="wholesaler-dash-iconspan ms-2"> Complaints</span> 
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
