import React from 'react'
import { FaPeopleGroup } from "react-icons/fa6";
import { FaBoxOpen } from "react-icons/fa";
import { BsPeopleFill } from "react-icons/bs";
import { GrDeliver } from "react-icons/gr";
import { BsBoxSeam } from "react-icons/bs";
import { GrCompliance } from "react-icons/gr";
import { RiLogoutCircleLine } from "react-icons/ri";
import { Link, useNavigate } from 'react-router-dom';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import sidebarimg from "../../images/sidebarimg.png"
import { MdDashboard } from "react-icons/md";
import { BsBoxes } from "react-icons/bs";
import { GiInjustice } from "react-icons/gi";
import { FaBell } from "react-icons/fa";
function ShopOwnerSidebar() {

    const navigate = useNavigate();
    const handleLogout = (e) => {
      e.preventDefault();
      localStorage.removeItem("shopowner");
      localStorage.removeItem("shopownertoken");
      navigate("/shopownerlogin");
    };
  return (
    <div>
        <div className="sidebar-div1-color">
        <Row>
          <Col>
          <img className="sidebar-img" src={sidebarimg} alt="img"></img>
          </Col>
          <Col>
            <p className="sidebar-para">Admin</p>
          </Col>
        </Row>
      </div>
      <div className="sidebar-div2-color">
      <ul className="sidebar-nav nav-pills nav-stacked" >
              <li className="admin-dash-active ">
                <Link to="/Admin/admin_dashboard" className="sidebar-dashboard"><MdDashboard/> Dashboard</Link>
                <Link to=""className="sidebar-shop"><BsBoxes/> Products</Link>
                <Link to=""className="sidebar-shop"><FaPeopleGroup/> Customer Orders</Link>
                <Link to=""className="sidebar-shop"><BsBoxSeam/> Orders Products</Link>
                <Link to="/wholesaledealerslist" className="sidebar-shop"><FaBoxOpen/> Wholesale Dealers</Link>
                <Link to="/shopownerslist" className="sidebar-shop"><GiInjustice/>Dealer Comparison</Link>
                <Link to="" className="sidebar-shop"><FaBell/> Notification</Link>
                <Link to="" className="sidebar-shop"><GrCompliance/> Complaints</Link>
              </li>
             <li>
                <Link  className="sidebar-logout">
                 <div onClick={handleLogout} className="sidebar-logout-btn"><RiLogoutCircleLine/>Logout</div>
                </Link>
             </li>
           </ul>
      </div>
    
    </div>
  )
}

export default ShopOwnerSidebar
