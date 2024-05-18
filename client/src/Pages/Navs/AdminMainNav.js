import React from 'react'
import logo from "../../images/LOGO SHOP UNITY-1.png"
import Navbar from 'react-bootstrap/Navbar';

function AdminMainNav() {
  return (
    <div>
    <Navbar collapseOnSelect expand="md" className="" id="navfixed" >
    <div className="col-9">
      <Navbar.Brand href="/" className="toggleimg">
        <img src={logo} className="w-25" alt="img"></img>
      </Navbar.Brand>
    </div>
  </Navbar>

    </div>
  )
}

export default AdminMainNav