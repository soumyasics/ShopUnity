import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../images/LOGO SHOP UNITY-1.png";
import Navbar from "react-bootstrap/Navbar";

function ShopOwnerNav() {
  const Navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();

    console.log("hai");
    alert("please login");
    localStorage.removeItem("shopowner");
    localStorage.removeItem("shopownertoken");
    Navigate("/shopownerlogin");
  };

  return (
    <Navbar collapseOnSelect expand="lg" className="" id="navfixed">
      <div className="col-5">
        <Navbar.Brand href="/" className="toggleimg">
          <img src={logo} className="w-50" alt="img"></img>
        </Navbar.Brand>
      </div>
      <div className="col-2">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse d-flex" id="">
            <ul className="navbar-nav a1 gap-4 d-flex ms-5 ">
              <li style={{ cursor: "pointer" }} className="nav-item">
                <Link
                  to="/shopownerhome"
                  className="nav-link active ms-5 "
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li style={{ cursor: "pointer" }} className="nav-item">
                <a className="nav-link active " aria-current="page">
                  Shops
                </a>
              </li>
              <li className="nav-item" style={{ cursor: "pointer" }}>
                <a className="nav-link active " href="#" id="a3">
                  Products
                </a>
              </li>
              <li style={{ cursor: "pointer" }} className="nav-item">
                <a className="nav-link active " aria-current="page">
                  Orders
                </a>
              </li>
              <li style={{ cursor: "pointer" }} className="nav-item">
                <a className="nav-link active " aria-current="page">
                  Complaints
                </a>
              </li>

              <li style={{ cursor: "pointer" }} className="nav-item">
                <Link to="/shopownerprofile" className="nav-link active " aria-current="page">
                  Profile
                </Link>
              </li>
              <li style={{ cursor: "pointer" }} className="nav-item">
                <div className="btn btn-primary " onClick={handleLogout}>Logout</div>
              </li>
            </ul>
          </div>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

export default ShopOwnerNav;
