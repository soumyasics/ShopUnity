import React from "react";
import { useNavigate, Link } from "react-router-dom";
import "./sidebar.css"; // Ensure this CSS file contains the necessary styles

function Sidebar() {
  const navigate = useNavigate();
  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem("admin");
    navigate("/admin");
  };

  return (
    <div>
      <div id="wrapper">
        <div id="sidebar-wrapper">
          <ul className="sidebar-nav nav-pills nav-stacked" id="menu">
            <li className="active mt-5">
              <Link to="/admin_dashboard">Dashboard</Link>
              <Link to="/shopownerslist">Shop Owners List</Link>
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
    </div>
  );
}

export default Sidebar;
