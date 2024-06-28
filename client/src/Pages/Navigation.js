import React from "react";
import logo from "../images/LOGO SHOP UNITY-1.png";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import logos from "./../images/logos.png";
import "./Footer";
import "./Navigation.css";
function Navigation() {
  return (
    <Navbar collapseOnSelect expand="md" className="" id="navfixed">
      <div className="col-9">
        <Navbar.Brand href="/" className="toggleimg">
          <img src={logos} className="logoimg" alt="img"></img>
        </Navbar.Brand>
      </div>
      <div className="col-2">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="navlist">
            <div>
              <button
                class="btn btn-outline-success dropdown-toggle rounded-4"
                type="button"
                aria-expanded="false"
              >
                Home
              </button>
            </div>
            {"   "}
            <div class="dropdown" style={{ marginRight: "50px" }}>
              <button
                class="btn btn-outline-success dropdown-toggle rounded-4"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Login
              </button>
              <ul class="dropdown-menu">
                <li>
                  <Link class="dropdown-item" to="/customerlogin">
                    Customer
                  </Link>
                </li>
                <li>
                  <Link class="dropdown-item" to="/shopownerlogin">
                    Shop Owner
                  </Link>
                </li>
                <li>
                  <Link class="dropdown-item" to="/deliveryagentlogin">
                    Delivery Agent
                  </Link>
                </li>
                <li>
                  <Link class="dropdown-item" to="/wholesaledealerlogin">
                    Wholesale Dealer
                  </Link>
                </li>
              </ul>
            </div>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

export default Navigation;
