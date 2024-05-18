import React, { useState } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Modal from "react-bootstrap/Modal";
import { Link, useNavigate } from "react-router-dom";
import "./landing.css";
import Form from "react-bootstrap/Form";
import { Row, Col, Container } from "react-bootstrap";
import logoimg from "../../images/LOGO SHOP UNITY-1.png";

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
            <img src={logoimg} className="w-25 m-2" alt="img"></img>
          </Navbar.Brand>
        </div>
        <div className="col-2">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <a href="#home" className="navlink ms-5 me-3 text-dark text-decoration-none">
                <h6>Home</h6>
              </a>
              <a href="#about " className="navlink text-dark text-decoration-none">
                <h6>About</h6>
              </a>
              <a href="#contact" className="navlink ms-3 me-3 text-dark text-decoration-none">
                <h6>Contact</h6>
              </a>
            </Nav>

            <Nav className="navlist">
              <div class="dropdown " style={{ marginRight: "20px" }}>
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
                    <Link class="dropdown-item" to="customerregistration">
                      Customer
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to="shopownerregistration">
                      Shop Owner
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to="deliveryagentregistration">
                      Delivery Agent
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to="wholesaledealerregistration">
                      Wholesale Dealer
                    </Link>
                  </li>
                </ul>
              </div>
              <div class="dropdown" style={{ marginRight: "50px" }}>
                <button
                  class="btn btn-outline-success dropdown-toggle rounded-4"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Register
                </button>
                <ul class="dropdown-menu">
                  <li>
                    <Link class="dropdown-item" to="customerlogin">
                      Customer
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to="shopownerlogin">
                      Shop Owner
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to="deliveryagentlogin">
                      Delivery Agent
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to="wholesaledealerlogin">
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
          <h5 className="shopunitytittle">ShopUnity</h5>
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
            <h5 className="mt-5 pt-5">About As</h5>
            <div>
              Welcome to Shop Unity, your one-stop destination for all your
              wholesale needs! At Shop Unity, we believe in fostering unity
              within the wholesale community by providing a platform where
              wholesale dealers, shop owners, delivery agents, and customers can
              come together to fulfill their business requirements seamlessly.
              Our mission is to revolutionize the wholesale industry by offering
              a user-friendly, efficient, and transparent platform that connects
              wholesalers with retailers and facilitates smooth transactions.
            </div>
            <div className="mt-5">
              <h5>Our Vision:</h5>
              At Shop Unity, we envision a future where wholesale businesses
              thrive in a collaborative ecosystem, empowered by cutting-edge
              technology and a shared commitment to excellence.
            </div>
            <div className="mt-2">
              {" "}
              Whether you're a wholesale dealer looking to expand your reach, a
              shop owner seeking top-notch products, a delivery agent ready to
              join our network, or a customer in search of great deals, we
              invite you to join the Shop Unity community today!{" "}
            </div>
          </Col>
        </Row>
      </div>
      <hr></hr>
      <div id="contact" className="container mt-5 pt-5 ">
        <h5 className="text-center mt-5 pt-5 ">contact</h5>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Name</Form.Label>
            <Form.Control type="email" placeholder="" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Contact number</Form.Label>
            <Form.Control type="email" placeholder="" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
          <button className="btn btn-primary">Get in touch</button>
        </Form>
      </div>
      <hr></hr>
    </div>
  );
}

export default LandingPage;
