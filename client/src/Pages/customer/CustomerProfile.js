import React, { useState ,useEffect} from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BsPencil } from "react-icons/bs";
import Form from "react-bootstrap/Form";
import "./customer.css";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link ,useNavigate} from "react-router-dom";
import axiosInstance from "../../APIS/axiosinstatnce";

function CustomerProfile() {
  const [data, setData] = useState({});
  const navigate = useNavigate();
  const customer = localStorage.getItem("customer");

  useEffect(() => {
    axiosInstance
      .get("/get_a_customer/" + customer)
      .then((res) => {
        setData(res.data.data);
        console.log(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // useEffect(() => {
  //   if (
  //     localStorage.getItem("token") == null &&
  //     localStorage.getItem("customer") == null
  //   ) {
  //     navigate("/login");
  //   }
  // }, [navigate]);

  const Navigate = useNavigate();

  const gotoEdit = (e) => {
    e.preventDefault();
    Navigate("/customereditprofile");
  };
//   console.log(`${url}${data.shoplicence}`, "kk");
  return (
    <div className="container">
      <div className="mt-3">
        <Link className="customer-profile-link" to="/customerhome">
          <FaArrowLeftLong />
        </Link>
      </div>
      <div className="shopprofile-edit-header">
        <form>
          <Row className="container shopprofile-edit">
            <h2 className="shopprofile-edit-h2">My Profile</h2>

            <Col>
              <div className="mt-5">
                <Form.Group>
                  <Form.Label className="customer-profile-label">
                    Name
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder={data.name}
                    className="customer-profile-text"
                    disabled
                  />
                  {/* <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback> */}
                </Form.Group>
              </div>
              <div className="mt-5">
                <Form.Group>
                  <Form.Label className="customer-profile-label">
                    Gender
                  </Form.Label>
                  <div className="CustomerRegistration-input-radio">
                  <Form.Check
                  type="radio"
                  label="M"
                  name="gender"
                  checked={data.gender === "M"}
                  readOnly
                  className="CustomerRegistration-input-div-leftdiv-inp-radio"
                />
                <Form.Check
                  type="radio"
                  label="F"
                  name="gender"
                  checked={data.gender === "F"}
                  readOnly
                  className="CustomerRegistration-input-div-leftdiv-inp-radio"
                />
                <Form.Check
                  type="radio"
                  label="Other"
                  name="gender"
                  checked={data.gender === "Other"}
                  readOnly
                  className="CustomerRegistration-input-div-leftdiv-inp-radio"
                />
                  </div>
                  {/* <Form.Control.Feedback type="invalid">{errors.gender}</Form.Control.Feedback> */}
                </Form.Group>
              </div>
              <div className="mt-5">
                <Form.Group>
                  <Form.Label className="customer-profile-label">
                    Address
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder={data.address}
                    disabled
                    className="customer-profile-text"
                  />
                  {/* <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback> */}
                </Form.Group>
              </div>
              <div className="mt-5">
                <Form.Group>
                  <Form.Label className="customer-profile-label">
                    District
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder={data.district}
                    className="customer-profile-text"
                    disabled
                  />
                  <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
                </Form.Group>
              </div>
            </Col>
            <Col>
              <div className="mt-5">
                <Form.Group>
                  <Form.Label className="customer-profile-label">
                    City
                  </Form.Label>
                  <Form.Control
                  disabled
                    type="text"
                    placeholder={data.city}
                    className="customer-profile-text"
                  />
                  {/* <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback> */}
                </Form.Group>
              </div>
              <div className="mt-5">
                <Form.Group>
                  <Form.Label className="customer-profile-label">
                    Pincode
                  </Form.Label>
                  <Form.Control
                    type="text"
                    disabled
                    placeholder={data.pincode}
                    className="customer-profile-text"
                  />
                  {/* <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback> */}
                </Form.Group>
              </div>
              <div className="mt-5">
                <Form.Group>
                  <Form.Label className="customer-profile-label">
                    Contact
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder={data.contactNumber}
                    className="customer-profile-text"
                    disabled
                  />
                  {/* <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback> */}
                </Form.Group>
              </div>
              <div className="mt-5">
                <Form.Group>
                  <Form.Label className="customer-profile-label">
                    Email ID
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder={data.email}
                    className="customer-profile-text"
                    disabled
                  />
                  {/* <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback> */}
                </Form.Group>
              </div>
            </Col>
            <div className="shopprofile-editpage-btn text-center mt-5">
              <button
                type="submit"
                className="shopprofile-editpage-subbtn"
                onClick={gotoEdit}
              >
                <BsPencil />
                Edit Profile{" "}
              </button>
            </div>
          </Row>
        </form>
      </div>
    </div>
  );
}

export default CustomerProfile;
