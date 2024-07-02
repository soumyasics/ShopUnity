import React from 'react'
import logoimg from "../../src/images/logos.png";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function CommonNav() {
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
    </div>
  )
}

export default CommonNav
