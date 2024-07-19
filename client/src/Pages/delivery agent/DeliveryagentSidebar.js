import React, { useState ,useEffect} from "react";
import { GrCompliance } from "react-icons/gr";
import { RiLogoutCircleLine } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import sidebarimg from "../../images/sidebarimg.png";
import { MdDashboard } from "react-icons/md";
import { BsBoxes } from "react-icons/bs";
import Collapse from "react-bootstrap/Collapse";
import { FaUserAlt } from "react-icons/fa";
import { FiAlignJustify } from "react-icons/fi";
import "../Admin/Admin.css";
import axiosInstance from "../../APIS/axiosinstatnce";
function DeliveryagentSidebar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  let shopname = localStorage.getItem("shopname");

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem("deliveryagent");
    localStorage.removeItem("token");

    alert("Logged out Successfully");
    navigate("/deliveryagentlogin");
  };

  const [data, setData] = useState({});

  const deliveryagent = localStorage.getItem("deliveryagent");

  useEffect(() => {
    axiosInstance
      .get("/get_a_deliveryagent/" + deliveryagent)
      .then((res) => {
        setData(res.data.data);
        console.log(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className={`shopownersidebar ${open ? "open" : ""}`}>
      <button
        className=" btn sidebaricon mb-3 d-lg-none"
        onClick={() => setOpen(!open)}
        aria-controls="sidebar"
        aria-expanded={open}
      >
        <FiAlignJustify className="toggglesidebar" />
      </button>
      <Collapse in={open} className="d-lg-block">
        <div id="sidebar" className="sidebar">
          <div className="sidebar-div1-color p-3">
            <Row className="align-items-center">
              <Col xs={3} md={2}>
                <img className="sidebarimg mt-3" src={sidebarimg} alt="img" />
              </Col>
              <Col xs={9} md={10}>
                <p to="" className="sidebar-para mb-1 ms-3">
                  {data.name}
                </p>
              </Col>
            </Row>
          </div>
          <div className="sidebar-div2-color flex-grow-1">
            <ul className="sidebar-nav nav-pills nav-stacked p-0 m-0">
              <li className="nav-item" style={{ marginTop: "55%" }}>
                <Link
                  to=""
                  className="shopownersidebar-dashboard rounded-end-5 "
                >
                  <MdDashboard /> Dashboard
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/deliveryagentprofile"
                  className="nav-link sidebar-shop"
                >
                  <BsBoxes /> Profile
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/deliveryagentdeliveryrequest" className="nav-link sidebar-shop">
                  <FaUserAlt /> Delivery Requests
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/deliveryagentdeliveryupdate" className="nav-link sidebar-shop">
                  <BsBoxes /> Delivery Updates
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/deliveryagentcomplaint" className="nav-link sidebar-shop">
                  <GrCompliance /> Complaints
                </Link>
              </li>
              <li className="nav-item mt-auto">
                <Link
                  to=""
                  className="nav-link sidebar-logout"
                  onClick={handleLogout}
                  style={{
                    background:
                      "linear-gradient(90deg, #FF0000 0%, #990000 100%)",
                    margin: "25%",
                    borderRadius: "25px",
                  }}
                >
                  <RiLogoutCircleLine /> Logout
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </Collapse>
    </div>
  );
}

export default DeliveryagentSidebar;
