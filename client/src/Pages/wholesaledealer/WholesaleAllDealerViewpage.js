import React, { useEffect, useState } from "react";
import axiosInstance from "../../APIS/axiosinstatnce";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import { Card } from "react-bootstrap";

function WholesaleAllDealerViewpage({ url }) {
  const [data, setData] = useState([]);
  const [Awholesalerdata, setAwholesalerdata] = useState({});
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const handleClose = () => setShow(false);
  const handleShow = (wholesaledealerid) => {
    setShow(true);
    axiosInstance
      .get(`/get_a_wholesaledealer/${wholesaledealerid}`)
      .then((res) => {
        setAwholesalerdata(res.data.data);
      })
      .catch((err) => {
        console.log("Error fetching wholesale dealer data:", err);
      });
  };

  useEffect(() => {
    if (
      localStorage.getItem("admin") == null
    ) {
      navigate("/admin");
    }
  }, []);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axiosInstance
      .get("/get_all_accepted_wholesaledealer")
      .then((res) => {
        if (res.data.status === 200) {
          setData(res.data.data || []);
        } else {
          setData([]);
        }
      })
      .catch((err) => {
        console.log("Error fetching wholesale dealer list:", err);
      });
  };

  const toggleShopOwnerStatus = (id, currentStatus) => {
    const endpoint = currentStatus ? "/inactivatewholesale/" : "/activatewholesale/";
    axiosInstance
      .post(endpoint + id)
      .then((res) => {
        if (res.status === 200) {
          let msg = res?.data?.message || `Wholesaledealer is now ${currentStatus ? "Inactive" : "Active"}`;
          alert(msg);
          getData();
          setAwholesalerdata(prevState => ({
            ...prevState,
            ActiveStatus: !currentStatus // Update ActiveStatus here
          }));
        } else {
          console.log("Error on status change");
        }
      })
      .catch((err) => {
        console.log("Error toggling wholesale dealer status:", err);
      });
  };

  return (
    <div>
      <div>
        <Link to="/admin_dashboard" className="wholesale-alldealer-viewpage-icon">
          <FaArrowLeft className="mt-5 ms-5 " />
        </Link>
      </div>
      <div className="wholesale-alldealer-viewpage-div1 container">
        {data?.length === 0 && (
          <div className="pt-3">
            <h1 className="text-center "> No Wholesale Dealer Found</h1>
          </div>
        )}
        {data?.length > 0 && (
          <div>
            <h3 className="text-center pt-4 wholesale-alldealer-viewpage-h3">
              Wholesale Dealer List
            </h3>
            <div className="row rounded-pill m-5 p-2 container">
              <div className="col-1">
                <b>Sl/No</b>
              </div>
              <div className="col-2">
                <b>Dealer Name</b>
              </div>
              <div className="col-2">
                <b>Store Name</b>
              </div>
              <div className="col-2">
                <b>Email Id</b>
              </div>
              <div className="col-2">
                <b>Contact</b>
              </div>
              <div className="col-2">
                <b> </b>
              </div>
            </div>
            {data.map((wholesaledealer, index) => (
              <div className="row bg-light rounded-pill m-5 p-2" key={wholesaledealer._id}>
                <div className="col-1">
                  <b>{index + 1}.</b>
                </div>
                <div className="col-2">{wholesaledealer.dealername}</div>
                <div className="col-2">{wholesaledealer.storeName}</div>
                <div className="col-2">{wholesaledealer.email}</div>
                <div className="col-2 ms-5">{wholesaledealer.contact}</div>
                <div className="col-1">
                  <button
                    className="rounded-pill px-3 border-none ms-5"
                    onClick={() => handleShow(wholesaledealer._id)}
                    id="wholesale-alldealer-viewpage-viewbtn"
                  >
                    view
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton></Modal.Header>
        <div>
          <img
            className="parentimage"
            alt="img"
            style={{ width: "100%", height: "380px" }}
            src={`${url}${Awholesalerdata.dealerlisence?.originalname}`}
          />
          <div>
            <table>
              <div className="p-4">
                <tr>
                  <td>
                    <Card.Subtitle className="mb-2 text-muted">Dealer Name</Card.Subtitle>
                  </td>
                  <td className="ps-3">
                    <Card.Subtitle className="mb-2 text-muted">{Awholesalerdata.dealername}</Card.Subtitle>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Card.Subtitle className="mb-2 text-muted">Store Name</Card.Subtitle>
                  </td>
                  <td className="ps-3">
                    <Card.Subtitle className="mb-2 text-muted">{Awholesalerdata.storeName}</Card.Subtitle>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Card.Subtitle className="mb-2 text-muted">Address</Card.Subtitle>
                  </td>
                  <td className="ps-3">
                    <Card.Subtitle className="mb-2 text-muted">{Awholesalerdata.address}</Card.Subtitle>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Card.Subtitle className="mb-2 text-muted">Contact Number</Card.Subtitle>
                  </td>
                  <td className="ps-3">
                    <Card.Subtitle className="mb-2 text-muted">{Awholesalerdata.contact}</Card.Subtitle>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Card.Subtitle className="mb-2 text-muted">Email ID</Card.Subtitle>
                  </td>
                  <td className="ps-3">
                    <Card.Subtitle className="mb-2 text-muted">{Awholesalerdata.email}</Card.Subtitle>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Card.Subtitle className="mb-2 text-muted">City</Card.Subtitle>
                  </td>
                  <td className="ps-3">
                    <Card.Subtitle className="mb-2 text-muted">{Awholesalerdata.city}</Card.Subtitle>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Card.Subtitle className="mb-2 text-muted">District</Card.Subtitle>
                  </td>
                  <td className="ps-3">
                    <Card.Subtitle className="mb-2 text-muted">{Awholesalerdata.districts}</Card.Subtitle>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Card.Subtitle className="mb-2 text-muted">Pincode</Card.Subtitle>
                  </td>
                  <td className="ps-3">
                    <Card.Subtitle className="mb-2 text-muted">{Awholesalerdata.pincode}</Card.Subtitle>
                  </td>
                </tr>
                <tr className="mt-3 text-center">
                  <td colSpan="2">
                    <button
                      onClick={() => toggleShopOwnerStatus(Awholesalerdata._id, Awholesalerdata.ActiveStatus)}
                      className={`btn btn-${Awholesalerdata.ActiveStatus ? "danger" : "success"} rounded-pill`}
                    >
                      {Awholesalerdata.ActiveStatus ? "Deactivate" : "Activate"}
                    </button>
                  </td>
                </tr>
              </div>
            </table>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default WholesaleAllDealerViewpage;
