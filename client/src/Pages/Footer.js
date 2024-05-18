import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/esm/Container";
import "./footer.css";
import { FaInstagramSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
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
             For inquiries,
              partnerships, or general questions, please don't hesitate to
              contact us. We're here to help you succeed! 
              <div className="mt-3">
              Thank you for choosing
              Shop Unity. Together, let's build a stronger, more connected
              wholesale industry.</div>
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
