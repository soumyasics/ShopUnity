import React from 'react'
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logoimg from "../../images/logos.png";
import { RiLogoutCircleLine } from "react-icons/ri";
import { Link, useNavigate } from 'react-router-dom';
import { MdHome, MdOutlineRoundaboutRight } from "react-icons/md";
import { FaShop, FaCartShopping } from "react-icons/fa6";
import { BsBoxes, BsBoxSeam } from "react-icons/bs";
import { GrCompliance } from "react-icons/gr";
import { IoMdContact } from "react-icons/io";
function CustomerNavbar() {
    const navigate=useNavigate();

    const handlelogout = () => {
        alert("please login again!!!")
        localStorage.removeItem("customer");
        localStorage.removeItem("token");
    
        navigate("/customerlogin");
      };
  return (
    <div>
        <div className='mb-5'>
        <Navbar collapseOnSelect expand="lg" className="fixed-top" id="navfixed">
          <div className="col-7">
            <Navbar.Brand href="/" className="toggleimg">
              <img src={logoimg} className="logoimg" alt="img"></img>
            </Navbar.Brand>
          </div>
        </Navbar>
      </div>
      <div className='customer-navbar-div2 '>
            <div className='row'>
              <div className='col-2'></div>
              <div className='col-7'>
                <Navbar expand="lg" className="">
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="">
                  <Nav className=" customer-home-nav-link">
                      <Link to='/customerhome' className='ms-2 mt-2 customer-home-link'><MdHome className='customer-home-icon ms-2' />Home</Link>
                      {/* <Nav.Link href="#link" className='ms-2'><MdOutlineRoundaboutRight className='customer-home-about-icon' />About</Nav.Link> */}
                      <Link to='/customerviewshop' className='ms-2 mt-2 customer-home-link'><FaShop className='customer-home- ms-2' />Shops</Link>
                      <Link to='/customerviewproduct' className='ms-2 mt-2 customer-home-link'><BsBoxes className='customer-home-icon ms-2' />Products</Link>
                      <Link to='' className='ms-2 mt-2 customer-home-link'><BsBoxSeam className='customer-home-icon ms-2' />Orders</Link>
                      <Link to='' className='ms-2 mt-2 customer-home-link'><GrCompliance className='customer-home-icon ms-2' />Complaints</Link>
                    </Nav>
                  </Navbar.Collapse>
                </Navbar>
              </div>
              <div className='col-3'>
                <div className='row'>
                  <div className='col'>
                    <Link to='/customerproductcart'>
                      <FaCartShopping className='ms-5 customer-home-cart-icon mt-2' />
                    </Link>
                  </div>
                  <div className='col'>
                    <Link to='/customerprofile'>
                      <IoMdContact className='ms-5 customer-home-cart-icon mt-2' />
                    </Link>
                    
                  </div>
                  <div onClick={handlelogout} className='col'>
                    <RiLogoutCircleLine className='ms-5 customer-home-cart-icon mt-2' />
                  </div>
                </div>
              </div>
            </div>
          </div>
    </div>
  )
}

export default CustomerNavbar
