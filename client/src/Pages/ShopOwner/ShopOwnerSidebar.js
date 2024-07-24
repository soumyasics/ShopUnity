import React, { useState,useEffect } from "react";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaBoxOpen } from "react-icons/fa";
import { BsBoxSeam } from "react-icons/bs";
import { GrCompliance } from "react-icons/gr";
import { RiLogoutCircleLine } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import sidebarimg from "../../images/sidebarimg.png";
import { MdDashboard } from "react-icons/md";
import { BsBoxes } from "react-icons/bs";
import { GiInjustice } from "react-icons/gi";
import { FaBell } from "react-icons/fa";
import Collapse from "react-bootstrap/Collapse";
import { FaUserAlt } from "react-icons/fa";
import "./shopownersidebar.css";
import { FiAlignJustify } from "react-icons/fi";
import axiosInstance from "../../APIS/axiosinstatnce";
import { FaAngleRight } from "react-icons/fa6";

function ShopOwnerSidebar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  let shopname = localStorage.getItem("shopname");

  const [data, setData] = useState({});

  const shopownerid = localStorage.getItem("shopowner");

  useEffect(() => {
    axiosInstance
      .get("/get_a_shopowner/" + shopownerid)
      .then((res) => {
        setData(res.data.data);
        console.log(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


  const handleLogout = (e) => {
    e.preventDefault();
    alert("logged out ")
    localStorage.removeItem("shopowner");
    localStorage.removeItem("shopownertoken");
    localStorage.removeItem("shopname");

    navigate("/shopownerlogin");
  };
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const toggleDropdown = () => {
      setDropdownVisible(!dropdownVisible);
  };
  const [dropdownVisible1, setDropdownVisible1] = useState(false);
  const toggleDropdown1 = () => {
      setDropdownVisible1(!dropdownVisible1);
  };
  const [dropdownVisible2, setDropdownVisible2] = useState(false);
  const toggleDropdown2 = () => {
      setDropdownVisible2(!dropdownVisible2);
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
                  <p to="" className="sidebar-para mb-1 ms-3">{data.shopname}</p>
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
              <li className="nav-item mt-4">
                <Link to="/shopownerprofile" className="nav-link sidebar-shop">
                  <FaUserAlt className="ms-5" /> Profile
                </Link>
              </li>
              <li className="nav-item">
              <div className='admin_dash_div '>
                <label onClick={toggleDropdown}>
                  <div>
                  <FaAngleRight/><BsBoxes className="ms-2"/><span> Products</span>
                  </div>
                </label>
                {dropdownVisible && (
                    <div className="dropdown_menu sidebar_dash_drop">
                        <div className="wholesaler-dash-backgroundcolor ms-3 me-3">
                          <Link to="/shopowneradditem" className="wholesaler-dash-link"><label className="wholesaler-dash-label"> Add Products</label></Link>
                          <Link to="/shopownerviewproduct" className="wholesaler-dash-link"><label className="wholesaler-dash-label ms-2">View Products</label></Link>
                        </div>
                    </div>
                  )}
                </div>
              </li>
              <li className="nav-item">
              <div className='admin_dash_div'>
              <label onClick={toggleDropdown1}>
                <div>
                <FaAngleRight/><FaPeopleGroup className="ms-2"/><span> Customer Orders</span> 
                </div>
              </label>
              {dropdownVisible1 && (
                  <div className="dropdown_menu sidebar_dash_drop">
                      <div className="wholesaler-dash-backgroundcolor ms-3 me-3">
                        <Link to="/shopownercustomerorderrequest" className="wholesaler-dash-link"><label className="wholesaler-dash-label">New Request</label></Link>
                        <Link to="/shopownercustomerorderaccept" className="wholesaler-dash-link"><label className="wholesaler-dash-label ms-2">Accepted Orders</label></Link>
                      </div>
                  </div>
              )}
            </div>
              </li>
              <li className="nav-item">
              <div className='admin_dash_div'>
              <label onClick={toggleDropdown2}>
                <div>
                <FaAngleRight/><BsBoxSeam className="ms-2"/><span> Order Products</span> 
                </div>
              </label>
              {dropdownVisible2 && (
                  <div className="dropdown_menu sidebar_dash_drop">
                      <div className="wholesaler-dash-backgroundcolor ms-3 me-3">
                        <Link to="/shopownerviewwdproductslist" className="wholesaler-dash-link"><label className="wholesaler-dash-label"> View Products</label></Link>
                        <Link to="/shopownerorderproductacceptorder" className="wholesaler-dash-link"><label className="wholesaler-dash-label ms-2">Accept Orders</label></Link>
                      </div>
                  </div>
              )}
            </div>
              </li>
              <li className="nav-item">
                <Link
                  to="/shopownerviewwholesaledealer"
                  className="nav-link sidebar-shop"
                >
                  <FaBoxOpen className="ms-5"/> Wholesale Dealers
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/shopownerdealercomparison" className="nav-link sidebar-shop">
                  <GiInjustice className="ms-5"/> Dealer Comparison
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/shopownernotification" className="nav-link sidebar-shop">
                  <FaBell className="ms-5"/> Notification
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/shopownercomplaint" className="nav-link sidebar-shop">
                  <GrCompliance className="ms-5"/> Complaints
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/shopownerorderproductcart" className="nav-link sidebar-shop">
                  <FaCartShopping className="ms-5"/> Cart
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

export default ShopOwnerSidebar;
