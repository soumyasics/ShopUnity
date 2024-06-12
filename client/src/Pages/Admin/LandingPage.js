import React, { useState } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Modal from "react-bootstrap/Modal";
import { Link, useNavigate } from "react-router-dom";
import "./landing.css";
import Form from "react-bootstrap/Form";
import { Row, Col, Container } from "react-bootstrap";
import logoimg from "../../images/logos.png"
import shopunity from "../../images/shopunity.mp4"
import landing from "../../images/landing.png"
import first from "../../images/first.mp4"
import { MdHome } from "react-icons/md";
import { MdOutlineRoundaboutRight } from "react-icons/md";
import { FaAngleDown } from "react-icons/fa";

function LandingPage() {
  const navigate = useNavigate();

  const Customer = () => {
    navigate("/customerlogin");
  };

  return (
    <div>
      <Navbar collapseOnSelect expand="lg" className="" id="navfixed">
        <div className="col-7">
          <Navbar.Brand href="/" className="toggleimg">
            <img src={logoimg} className="logoimg" alt="img"></img>
          </Navbar.Brand>
        </div>
        <div className="col-2">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <a href="#home" className="navlink ms-5 me-3 text-dark text-decoration-none">
                <h6 className="landing-home"><MdHome/>Home</h6>
              </a>
              <a href="#about " className="navlink text-dark text-decoration-none">
                <h6 className="landing-about"><MdOutlineRoundaboutRight className="landing-about-icon"/>About</h6>
              </a>
              
              <div class="dropdown" style={{ marginRight: "50px" }}>
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
      <div className="navshadow">
        <div id="home" className="shopunitytittle_main">
          <video  className="landingvdo" autoPlay="true" muted loop>
            <source src={first} type="video/mp4"></source> 
          </video> 
          <div className=" content">
            <p className="container para">
              " i think you're <br></br>
              really stressed out and<br></br>
              can't really face reality<br></br>
              you shop"
            </p>
          </div>


         
        </div>
        
      </div>
      <div id="about" className="container mt-5 pt-5">
        <Row>
          <Col>
            <img
              className="w-100 mt-5"
              src="https://whitekube.com/wp-content/uploads/2019/08/ecommerce-1.png"
              alt="img"
            ></img>
          </Col>
          <Col>
            <h5 className="us mt-5 pt-5" >About Us</h5>
            <div>
              <p className="p1">
              Welcome to Shop Unity, your one-stop destination for all your
              wholesale needs! At Shop Unity, we believe in fostering unity
              within the wholesale community by providing a platform where
              wholesale dealers, shop owners, delivery agents, and customers can
              come together to fulfill their business requirements seamlessly.
              Our mission is to revolutionize the wholesale industry by offering
              a user-friendly, efficient, and transparent platform that connects
              wholesalers with retailers and facilitates smooth transactions.
              </p>
            </div>
            
          </Col>
        </Row>
      </div>
      
      <div className="row container">
        <div className="col-7 container">
        <h4 className="h4 mt-5 pt-5">Our Vision:</h4>
        <p className="p1">
        At Shop Unity, we envision a future where wholesale businesses
        thrive in a collaborative ecosystem, empowered by cutting-edge
        technology and a shared commitment to excellence.
          
        Whether you're a wholesale dealer looking to expand your reach, a
        shop owner seeking top-notch products, a delivery agent ready to
        join our network, or a customer in search of great deals, we
        invite you to join the Shop Unity community today!
        </p>
        </div>
        <div className="col-5 container">
            <img src={landing} className="landing" alt="img"></img>
        </div>
      </div>
      <hr></hr>
    </div>
  );
}

export default LandingPage;
