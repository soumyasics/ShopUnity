import React from 'react';
import { useNavigate } from 'react-router-dom';
import logoimg from "../../images/logos.png";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import './customer.css';
import { Link } from 'react-router-dom';
import { MdHome, MdOutlineRoundaboutRight } from "react-icons/md";
import { FaShop, FaCartShopping } from "react-icons/fa6";
import { BsBoxes, BsBoxSeam } from "react-icons/bs";
import { GrCompliance } from "react-icons/gr";
import { IoMdContact } from "react-icons/io";
import { RiLogoutCircleLine } from "react-icons/ri";
import customerpage2 from '../../images/customerpage2.png';
import customerpage1 from '../../images/customerpage1.png';
import veg from '../../images/veg.png';
import sea from '../../images/sea.png';
import egg from '../../images/egg.png';
import cheese from '../../images/cheese.png';
import fruits from '../../images/fruits.png';
import meat from '../../images/meat.png';
import milk from '../../images/milk.png';
import snacks from '../../images/snacks.png';
import dryfruits from '../../images/dryfruits.png';
import cleaning from '../../images/cleaning.png';
import beauty from '../../images/beauty.png';
import crunchy from '../../images/crunchy.png';
import foods from '../../images/foods.png';
import drinks from '../../images/drinks.png';
import baby from '../../images/baby.png';
import oil from '../../images/oil.png';
import carousel3 from '../../images/carousal3.png';
import carousel2 from '../../images/carousal2.png';
import carousel1 from '../../images/carousal1.png';
import Carousel from 'react-bootstrap/Carousel';
import customerdelivery from '../../images/customerdelivery.png';
import starcustomer from '../../images/startcustomer.png';
import tickcustomer from '../../images/tickcustomer.png';
import headsetcustomer from '../../images/headsetcustomer.png';
import deliverycustomer from '../../images/deliverycustomerpage.png';
import Footer from '../Footer';

function CustomerHomePage() {
  const navigate = useNavigate();

  const handlelogout = () => {
    alert("please login again!!!")
    localStorage.removeItem("customer");
    localStorage.removeItem("token");

    navigate("/customerlogin");
  };

  return (
    <div className='mb-5'>
      <div className='mb-5'>
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
          <div className='customer-home-background'>
            <div className='row'>
              <div className='col'>
                <img src={customerpage2} className='customer-home-customerpage2'></img>
              </div>
              <div className='col mt-5'>
                <div className='customer-home mt-5'>
                  <div className=' text-center pt-5'>
                    <p className='customer-home-delivered'>freshness delivered to your doorstep </p>
                  </div>
                  <div className='text-center'>
                    <p className='customer-home-delivered'>shop the best selection of groceries</p>
                  </div>
                  <div className='text-center'>
                    <p className='customer-home-delivered'>online  </p>
                  </div>
                  <div className='text-center'>
                    <p className='customer-home-delivered1'>better ingredients, better food and beverages at low prices</p>
                  </div>
                </div>
              </div>
              <div className='col'>
                <img src={customerpage1} className='customer-home-customerpage1'></img>
              </div>
            </div>
          </div>
        </div>
        <div className='mt-4 mb-5'>
          <h4 className='customer-home-h4'>shop by category</h4>
          <div className='container'>
            <div className='row mt-5'>
              <div className='col'>
                <div>
                  <img src={veg} className='customer-home-row-img'></img>
                </div>
                <div className='text-center'>
                  <h6>Vegtables</h6>
                </div>
              </div>
              <div className='col'>
                <div>
                  <img src={sea} className='customer-home-row-img'></img>
                </div>
                <div className='text-center'>
                  <h6>Sea Foods</h6>
                </div>
              </div>
              <div className='col'>
                <div>
                  <img src={egg} className='customer-home-row-img'></img>
                </div>
                <div className='text-center'>
                  <h6>Egg</h6>
                </div>
              </div>
              <div className='col'>
                <div>
                  <img src={cheese} className='customer-home-row-img'></img>
                </div>
                <div className='text-center'>
                  <h6>Cheese</h6>
                </div>
              </div>
              <div className='col'>
                <div>
                  <img src={fruits} className='customer-home-row-img'></img>
                </div>
                <div className='text-center'>
                  <h6>Fresh Fruits</h6>
                </div>
              </div>
              <div className='col'>
                <div>
                  <img src={meat} className='customer-home-row-img'></img>
                </div>
                <div className='text-center'>
                  <h6>Meat</h6>
                </div>
              </div>
              <div className='col'>
                <div>
                  <img src={milk} className='customer-home-row-img'></img>
                </div>
                <div className='text-center'>
                  <h6>Milk</h6>
                </div>
              </div>
              <div className='col'>
                <div>
                  <img src={snacks} className='customer-home-row-img'></img>
                </div>
                <div className='text-center'>
                  <h6>Snacks</h6>
                </div>
              </div>
            </div>
            <div className='container'>
              <div className='row mt-5'>
                <div className='col'>
                  <div>
                    <img src={dryfruits} className='customer-home-row-img'></img>
                  </div>
                  <div className='text-center'>
                    <h6>Dry Fruits</h6>
                  </div>
                </div>
                <div className='col'>
                  <div>
                    <img src={cleaning} className='customer-home-row-img'></img>
                  </div>
                  <div className='text-center'>
                    <h6>Cleaning & Household</h6>
                  </div>
                </div>
                <div className='col'>
                  <div>
                    <img src={drinks} className='customer-home-row-img'></img>
                  </div>
                  <div className='text-center'>
                    <h6>Drinks</h6>
                  </div>
                </div>
                <div className='col'>
                  <div>
                    <img src={beauty} className='customer-home-row-img'></img>
                  </div>
                  <div className='text-center'>
                    <h6>Beauty & Hygine</h6>
                  </div>
                </div>
                <div className='col'>
                  <div>
                    <img src={crunchy} className='customer-home-row-img'></img>
                  </div>
                  <div className='text-center'>
                    <h6>Crunchy Snacks</h6>
                  </div>
                </div>
                <div className='col'>
                  <div>
                    <img src={foods} className='customer-home-row-img'></img>
                  </div>
                  <div className='text-center'>
                    <h6>Snacks & Branded Foods</h6>
                  </div>
                </div>
                <div className='col'>
                  <div>
                    <img src={oil} className='customer-home-row-img'></img>
                  </div>
                  <div className='text-center'>
                    <h6>Food Grains & Oils</h6>
                  </div>
                </div>
                <div className='col'>
                  <div>
                    <img src={baby} className='customer-home-row-img'></img>
                  </div>
                  <div className='text-center'>
                    <h6>Baby Care & Accessories</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='container'>
          <Carousel className='container' prevIcon={null} nextIcon={null}>
            <Carousel.Item className='mt-3'>
              <div className='text-center'>
                <img src={carousel1} className='customer-home-carouselitem1'></img>
              </div>
            </Carousel.Item>
            <Carousel.Item className='mt-3'>
              <div className='text-center'>
                <img src={carousel2} className='customer-home-carouselitem2 '></img>
              </div>
            </Carousel.Item>
            <Carousel.Item className='mt-3 '>
              <div className='text-center'>
                <img src={carousel3} className='customer-home-carouselitem3'></img>
              </div>
            </Carousel.Item>
          </Carousel>
        </div>

        <div>
          <img src={customerdelivery} className='customer-home-customerdelivery'></img>
        </div>

        <div className='row mt-4 mb-5'>
          <div className='col-3 text-center'>
            <div>
              <img src={deliverycustomer} className='customer-home-deliverycustomer'></img>
            </div>
            <div>
              <div className='mt-3'>
                <p className='customer-home-deliveryfast'>Fastest Delivery
                </p>
              </div>
              <div className='customer-home-deliveryfast1'>
                <p>Delivery At Your Door Step</p>
              </div>
            </div>
          </div>
          <div className='col-3 text-center'>
            <div>
              <img src={headsetcustomer} className='customer-home-deliverycustomer'></img>
            </div>
            <div>
              <div className='mt-3'>
                <p className='customer-home-deliveryfast'>24/7 Services
                </p>
              </div>
              <div className='customer-home-deliveryfast1'>
                <p>Contact Us When Needed</p>
              </div>
            </div>
          </div>
          <div className='col-3 text-center'>
            <div>
              <img src={tickcustomer} className='customer-home-deliverycustomer'></img>
            </div>
            <div>
              <div className='mt-3'>
                <p className='customer-home-deliveryfast'>Verified Brands
                </p>
              </div>
              <div className='customer-home-deliveryfast1'>
                <p>guaranteed products</p>
              </div>
            </div>
          </div>
          <div className='col-3 text-center'>
            <div>
              <img src={starcustomer} className='customer-home-deliverycustomer'></img>
            </div>
            <div>
              <div className='mt-3'>
                <p className='customer-home-deliveryfast'>100% Assurance
                </p>
              </div>
              <div className='customer-home-deliveryfast1'>
                <p>We Provide 100% Assurance</p>
              </div>
            </div>
          </div>
        </div>

        <div className='mb-5'></div>
      </div>
    </div>
  );
}

export default CustomerHomePage;
