import React from 'react'
import logoimg from "../../images/logos.png"
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import './customer.css'
import { Link } from 'react-router-dom';
import { MdHome } from "react-icons/md";
import { MdOutlineRoundaboutRight } from "react-icons/md";
import { FaShop } from "react-icons/fa6";
import { BsBoxes } from "react-icons/bs";
import { BsBoxSeam } from "react-icons/bs";
import { GrCompliance } from "react-icons/gr";
import { FaCartShopping } from "react-icons/fa6";
import { IoMdContact } from "react-icons/io";
import { RiLogoutCircleLine } from "react-icons/ri";
import customerpage2 from '../../images/customerpage2.png'
import customerpage1 from '../../images/customerpage1.png'
function CustomerHomePage() {
  return (
    <div>
      <div>
        <Navbar collapseOnSelect expand="lg" className="fixed-top" id="navfixed">
          <div className="col-7">
            <Navbar.Brand href="/" className="toggleimg">
              <img src={logoimg} className="logoimg" alt="img"></img>
            </Navbar.Brand>
          </div>
        </Navbar>
      </div>
      <div className='container customer-home-div1'>
        <div className='pt-1'>
          <div className='customer-home-div2 mt-5'>
            <div className='row'>
              <div className='col-2'></div>
              <div className='col-7'>
              <Navbar expand="lg" className="">
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="">
                    <Nav className=" customer-home-nav-link">
                      <Nav.Link href="#home"><MdHome className='customer-home-icon'/>Home</Nav.Link>
                      <Nav.Link href="#link" className='ms-2'><MdOutlineRoundaboutRight className='customer-home-about-icon'/>About</Nav.Link>
                      <Nav.Link href="#link" className='ms-2'><FaShop className='customer-home-icon'/>Shops</Nav.Link>
                      <Nav.Link href="#link" className='ms-2'><BsBoxes className='customer-home-icon'/>Products</Nav.Link>
                      <Nav.Link href="#link" className='ms-2'><BsBoxSeam className='customer-home-icon'/>Orders</Nav.Link>
                      <Nav.Link href="#link" className='ms-2'><GrCompliance className='customer-home-icon'/>Complaints</Nav.Link>
                    </Nav>
                  </Navbar.Collapse>    
              </Navbar>
              </div>
              <div className='col-3'>
                <div className='row'>
                  <div className='col'>
                    <FaCartShopping className='ms-5 customer-home-cart-icon mt-2'/>
                  </div>
                  <div className='col'>
                    <IoMdContact className='ms-5 customer-home-cart-icon mt-2'/>
                  </div>
                  <div className='col'>
                    <RiLogoutCircleLine className='ms-5 customer-home-cart-icon mt-2'/>
                  </div>
                </div>
              </div>
            </div>
        </div>
        <div className='customer-home-backgoround'>
          <div className='row'>
            <div className='col'>
              <img src={customerpage2} className='customer-home-customerpage2'></img>
            </div>
            <div className='col'>
              <div className='customer-home-'>
                <div>
                  <p>freshness delivered to your doorstep </p>
                </div>
                <div>
                  <p>shop the best selection of groceries</p>
                </div>
                <div>
                  <p>online  </p>
                </div>
              </div>
            </div>
            <div className='col'>
              <img src={customerpage1} className='customer-home-customerpage1'></img>
            </div>           
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default CustomerHomePage
