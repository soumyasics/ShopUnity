import React from 'react'
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from 'react-router-dom';
import { MdHome } from "react-icons/md";
import { MdOutlineRoundaboutRight } from "react-icons/md";
import { FaAngleDown } from "react-icons/fa";
import logoimg from "../../images/logos.png"
import './Nav.css'
function MainNav() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" className="fixed-top" id="navfixed">
        <div className="col-7">
          <Navbar.Brand href="/" className="toggleimg">
            <img src={logoimg} className="logoimg" alt="img"></img>
          </Navbar.Brand>
        </div>
        <div className="col-2 ms-5 ps-5">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto ms-5 ps-5">
              <a href="#home" className="navlink text-dark text-decoration-none">
                <h6 className="landing-home"><MdHome/>Home</h6>
              </a>
              <a href="#about " className="navlink text-dark text-decoration-none">
                <h6 className="landing-about"><MdOutlineRoundaboutRight className="landing-about-icon"/>About</h6>
              </a>
              
              <div class="dropdown" >
                <button
                  // class="btn btn-outline-success dropdown-toggle rounded-4"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  id="landing-button"
                >
                  Login<FaAngleDown/>
                </button>
                <ul class="dropdown-menu" id="landing-dropdown">
                  <li>
                    <Link class="dropdown-item" to="/customerlogin" id="landing-drop-link">
                      Customer
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to="/shopownerlogin" id="landing-drop-link">
                      Shop Owner
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to="/deliveryagentlogin" id="landing-drop-link">
                      Delivery Agent
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to="/wholesaledealerlogin" id="landing-drop-link">
                      Wholesale Dealer
                    </Link>
                  </li>
                </ul>
              </div>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </div>
  )
}

export default MainNav
