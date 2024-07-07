import React, { useEffect, useState } from "react";
import axiosInstance from "../../APIS/axiosinstatnce";
import { Link, useNavigate } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BsPencil } from "react-icons/bs";
import { FaArrowLeftLong } from "react-icons/fa6";

function DeliveryAgentProfile({url}) {
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

  const Navigate = useNavigate();

  const gotoEdit = (e) => {
    e.preventDefault();
    Navigate("/deliveryagentprofileedit");
  };
//   console.log(`${url}${data.shoplicence}`, "kk");

  return (
    <div>
      {" "}

      <div className="container">
      <div className="mt-3">
            <Link className="customer-profile-link" to="/deliveryagentmain">
            <FaArrowLeftLong />
            </Link>
        </div>
        <div className="shopprofile-edit-header">
          <form>
            <Row className="container shopprofile-edit">
              <h2 className="shopprofile-edit-h2">My Profile</h2>

              <Col>
              <div>
            <img
              className="mt-3 mb-3"
              src={`${url}${data?.drivingLicense?.filename}`}
              style={{
                width:"50%",
                height:"200px",
                borderRadius: "5%",
                boxShadow: "rgba(0, 0, 0, 0.65) 0px 5px 15px",
              }}
            ></img>
          </div>
                <div>
                  <label className="container-fluid font mt-4" id="font">
                  name
                  </label>
                  <input
                    type="text"
                    className="form-control m-2"
                    placeholder={data.name}
                    id="shopprofile-editpage-text2"
                    disabled
                  />
                </div>
                <div>
                  <label className="container-fluid font" id="font">
                  address
                  </label>
                  <input
                    type="text"
                    className="form-control m-2"
                    placeholder={data.address}
                    id="shopprofile-editpage-text2"
                    disabled
                  />
                </div>
                <div>
                  <label className="container-fluid font" id="font">
                  contactNumber
                  </label>
                  <input
                    type="text"
                    className="form-control m-2"
                    placeholder={data.contactNumber}
                    id="shopprofile-editpage-text2"
                    disabled
                  />
                </div>
                
                
              </Col>
              <Col>
              <div>
                  <label className="container-fluid font" id="font">
                    Email Id
                  </label>
                  <input
                    type="text"
                    className="form-control m-2"
                    placeholder={data.email}
                    id="shopprofile-editpage-text2"
                    disabled
                  />
                </div>
                <div>
                  <label className="container-fluid font" id="font">
                    {" "}
                    District
                  </label>
                  <input
                    type="text"
                    className="form-control m-2"
                    placeholder={data.district}
                    id="shopprofile-editpage-text2"
                    disabled
                  />
                </div>
                <div>
                  <label className="container-fluid font" id="font">
                    City
                  </label>
                  <input
                    type="text"
                    className="form-control m-2"
                    placeholder={data.city}
                    id="shopprofile-editpage-text2"
                    disabled
                  />
                </div>
                <div>
                  <label className="container-fluid font" id="font">
                    Pincode
                  </label>
                  <input
                    type="text"
                    className="form-control m-2"
                    placeholder={data.pincode}
                    id="shopprofile-editpage-text2"
                    disabled
                  />
                </div>
                <div>
                  <label className="container-fluid font" id="font">
                  vehicleNumber
                  </label>
                  <input
                    type="text"
                    className="form-control m-2"
                    placeholder={data.vehicleNumber}
                    id="shopprofile-editpage-text2"
                    disabled
                  />
                </div>
                <div>
                  <label className="container-fluid font" id="font">
                  vehicleType
                  </label>
                  <input
                    type="text"
                    className="form-control m-2"
                    placeholder={data.vehicleType}
                    id="shopprofile-editpage-text2"
                    disabled
                  />
                </div>
                
              </Col>
              <div className="shopprofile-editpage-btn text-center">
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
    </div>
  );
}

export default DeliveryAgentProfile;
