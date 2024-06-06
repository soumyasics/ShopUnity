import React from "react";
import { useNavigate, Link } from "react-router-dom";
import "./sidebar.css"; // Ensure this CSS file contains the necessary styles
import sidebarimg from "../../images/sidebarimg.png"
import { MdDashboard } from "react-icons/md";

function Sidebar() {
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
    <div>
      <div className="sidebar-div1-color">
        <div className="row container">
          <div className="col-12 col-sm-6 col-md-3 mb-4">
            <img className="sidebar-img" src={sidebarimg} alt="img"></img>
          </div>
          <div className="col-12 col-sm-6 col-md-3 mb-4">
            <p className="side-bar-para">Admin</p>
          </div>
        </div>
      </div>
      <div className="sidebar-div2-color">
      <ul className="sidebar-nav nav-pills nav-stacked" >
             <li className="admin-dash-active ">
               <Link to="/Admin/admin_dashboard" className="sidebar-dashboard"><MdDashboard/>Dashboard</Link>
               <Link to="/shopownerslist" className="sidebar-shop">Shop Owners List</Link>
               <Link to="/shopownerspendinglist">Shop Owners Pending</Link>
               <Link to="/wholesaledealerslist">Wholesale Dealers List</Link>
               <Link to="/wholesaledealerspendinglist">Wholesale Pending</Link>
             </li>
             <li>
               <Link to="">Customers List</Link>
            </li>
            <li>
               <Link to="">Delivery Agent</Link>
               <Link>
                <div onClick={handleLogout}>Logout</div>
               </Link>
            </li>
          </ul>
      </div>
    </div>
  );
}

export default Sidebar;
