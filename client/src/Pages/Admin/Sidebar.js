import React,{useState} from "react";
import { useNavigate, Link } from "react-router-dom";
import "./sidebar.css"; // Ensure this CSS file contains the necessary styles
import sidebarimg from "../../images/sidebarimg.png"
import { MdDashboard } from "react-icons/md";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaBoxOpen } from "react-icons/fa";
import { BsPeopleFill } from "react-icons/bs";
import { GrDeliver } from "react-icons/gr";
import { BsBoxSeam } from "react-icons/bs";
import { GrCompliance } from "react-icons/gr";
import { RiLogoutCircleLine } from "react-icons/ri";
import Collapse from "react-bootstrap/Collapse";
import { FaUserClock } from "react-icons/fa";
import { FiAlignJustify } from "react-icons/fi";

function Sidebar() {

  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

 
  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem("admin");
    navigate("/admin");
  };

  return (
    // <div>
    //   <div id="wrapper">
    //     <div id="sidebar-wrapper">
    //       
    //     </div>
    //   </div>
    // </div>
    // <div>
    //   <div className="sidebar-div1-color">
    //     <div className="row container">
    //       <div className="col-12 col-sm-6 col-md-3 mb-4">
    //         <img className="sidebar-img" src={sidebarimg} alt="img"></img>
    //       </div>
    //       <div className="col-12 col-sm-6 col-md-3 mb-4">
    //         <p className="side-bar-para">Admin</p>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="sidebar-div2-color">
    //   <ul className="sidebar-nav nav-pills nav-stacked" >
    //          <li className="admin-dash-active ">
    //            <Link to="/Admin/admin_dashboard" className="sidebar-dashboard"><MdDashboard/>Dashboard</Link>
    //            <Link to="/shopownerslist" className="sidebar-shop">Shop Owners List</Link>
    //            <Link to="/shopownerspendinglist">Shop Owners Pending</Link>
    //            <Link to="/wholesaledealerslist">Wholesale Dealers List</Link>
    //            <Link to="/wholesaledealerspendinglist">Wholesale Pending</Link>
    //          </li>
    //          <li>
    //            <Link to="">Customers List</Link>
    //         </li>
    //         <li>
    //            <Link to="">Delivery Agent</Link>
    //            <Link>
    //             <div onClick={handleLogout}>Logout</div>
    //            </Link>
    //         </li>
    //       </ul>
    //   </div>
    // </div>
 
      

<div className={`shopownersidebar ${open ? 'open' : ''}`}>
<button  className=" btn sidebaricon mb-3 d-lg-none"
  onClick={() => setOpen(!open)}
  aria-controls="sidebar"
  aria-expanded={open}
 
>
  <FiAlignJustify  className="toggglesidebar"/>
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
        <li className="nav-item" style={{marginTop:"55%"}}>
          <Link to="/admin_dashboard" className="shopownersidebar-dashboard rounded-end-5 ">
            <MdDashboard /> Dashboard
          </Link>
        </li>
        <li className="nav-item">
        <Link to=""className="sidebar-shop"><FaPeopleGroup/> Customers</Link>
        </li>
        <li className="nav-item">
        <Link to="" className="sidebar-shop"><FaBoxOpen/> Wholesale Dealers</Link>
        </li>
        <li className="nav-item">
        <Link to="/shopownerspendinglist" className="sidebar-shop"><FaUserClock/> Shop Owners Pending</Link>
        </li>
        <li className="nav-item">
        <Link to="/shopownerslist" className="sidebar-shop"><BsPeopleFill/> Shop Owners</Link>
        </li>
        <li className="nav-item">
        <Link to="" className="sidebar-shop"><GrDeliver/> Delivery Agents</Link>
        </li>
        <li className="nav-item">
        <Link to="" className="sidebar-shop"><BsBoxSeam/> Customers Orders</Link>
        </li>
        <li className="nav-item">
        <Link to="" className="sidebar-shop"><GrCompliance/> Complaints</Link>

        </li>
        <li className="nav-item mt-auto">
          <Link to="" className="nav-link sidebar-logout" onClick={handleLogout}  style={{ background :"linear-gradient(90deg, #FF0000 0%, #990000 100%)", margin:"25%",borderRadius:"25px"}}>
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
