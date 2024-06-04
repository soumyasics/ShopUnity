import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/esm/Container";
import "./footer.css";
import { FaInstagramSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import logos from './../images/logos.png'

function Footer() {
  
  return (
    <div className="footer">
      <div className="contactfooter">
        <Container>
          <Row>
            <Col>
              <h6>Information</h6>
              <div>Home</div>
              <div className="mb-4">About</div>
              <h6>social Meadia</h6>
              <div className="footericons">
             <FaInstagramSquare/> &nbsp;
                <MdEmail/>&nbsp;
                <FaTwitter/>&nbsp;
                <FaFacebook/>&nbsp;
              </div>
            </Col>
            <Col>
              <h6>Address</h6>
              <p>23-15 English street in India</p>
              <p>shopunity@gmail.com</p>
              <div>8765342367</div>
            </Col>
            <Col>
              <img src={logos} alt="img" className="logo"></img><br></br>
              We Inivite You To Join<br>
              </br>
              The Shop Unity Community today!
            </Col>
          </Row>
        </Container>
      </div>
      <Container>
        <hr></hr>
      </Container>
      <div className="text-center pb-5">
      <div>Copyright &#169; shopunity.com | All right reserved</div>
</div>
    </div>
  );
}

export default Footer;
