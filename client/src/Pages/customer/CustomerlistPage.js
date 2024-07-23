import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaArrowLeftLong } from "react-icons/fa6";
import Modal from "react-bootstrap/Modal";
import { Card } from "react-bootstrap";
import axiosInstance from '../../APIS/axiosinstatnce';

function CustomerlistPage({ url }) {
  const [data, setData] = useState([]);
  const [Ashopownerdata, setAshopownerdata] = useState({});
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = (customerid) => {
    setShow(true);
    axiosInstance
      .get("/get_a_customer/" + customerid)
      .then((res) => {
        setAshopownerdata(res.data.data);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
  const navigate = useNavigate();

  useEffect(() => {
    if (
      localStorage.getItem("token") == null &&
      localStorage.getItem("customer") == null
    ) {
      navigate("/login");
    }
  }, [navigate]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axiosInstance.get('/get_all_customers')
      .then((res) => {
        if (res.data.status === 200) {
          setData(res.data.data || []);
        } else {
          setData([]);
        }
      })
      .catch((err) => {
        console.log("Error", err);
      });
  }

  const toggleShopOwnerStatus = (id, currentStatus) => {
    const endpoint = currentStatus ? "/diactivate_customer/" : "/activate_customer/";
    axiosInstance
      .post(endpoint + id)
      .then((res) => {
        if (res.status === 200) {
          let msg = res?.data?.message || `Customer is now ${currentStatus ? "Inactive" : "Active"}`;
          alert(msg);
          // Update the data array to reflect the change in status
          setData(prevData =>
            prevData.map(customer =>
              customer._id === id ? { ...customer, ActiveStatus: !currentStatus } : customer
            )
          );
          // Update the state for the selected customer if it's currently being viewed
          if (Ashopownerdata._id === id) {
            setAshopownerdata(prevState => ({
              ...prevState,
              ActiveStatus: !currentStatus
            }));
          }
        } else {
          console.log("Error on status change");
        }
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  return (
    <div className="m-3">
      <div className="">
        <Link className="text-dark w-100" to="/admin_dashboard">
          <FaArrowLeftLong />
        </Link>
      </div>
      <div className="">
        <div className="shopownerpendingrequestdiv">
          <div className="">
            {data.length === 0 && (
              <h1 className="text-center"> No Customer Found</h1>
            )}
            {data.length > 0 && (
              <div>
                <h3 className="text-center pt-4">All Customer List</h3>
                <div className="row rounded-pill m-5 p-2">
                  <div className="col-1">
                    <b>Sl/No</b>
                  </div>
                  <div className="col-2">
                    <b>Shop Name</b>
                  </div>
                  <div className="col-2">
                    <b>Name</b>
                  </div>
                  <div className="col-2">
                    <b>Email ID</b>
                  </div>
                  <div className="col-2">
                    <b>Contact Number</b>
                  </div>
                  <div className="col-2">
                    <b>Shopowner City</b>
                  </div>
                </div>
                {data.map((customer, index) => (
                  <div className="row bg-light rounded-pill m-5 p-2" key={customer._id}>
                    <div className="col-1">
                      <b>{index + 1}.</b>
                    </div>
                    <div className="col-2">{customer.name}</div>
                    <div className="col-2">{customer.city}</div>
                    <div className="col-2">{customer.email}</div>
                    <div className="col-2">{customer.contactNumber}</div>
                    
                    <div className="col-1 text-center">
                      <button
                        className="rounded-pill px-3 border-none"
                        onClick={() => handleShow(customer._id)}
                      >
                        View
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
          <Modal.Header closeButton></Modal.Header>
          <div>
            <div>
              <table>
                <div className="p-4">
                  <tr>
                    <td>
                      <Card.Subtitle className="mb-2 text-muted">Name</Card.Subtitle>
                    </td>
                    <td className="ps-3">
                      <Card.Subtitle className="mb-2 text-muted">{Ashopownerdata.name}</Card.Subtitle>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <Card.Subtitle className="mb-2 text-muted">Gender</Card.Subtitle>
                    </td>
                    <td className="ps-3">
                      <Card.Subtitle className="mb-2 text-muted">{Ashopownerdata.gender}</Card.Subtitle>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <Card.Subtitle className="mb-2 text-muted">Address</Card.Subtitle>
                    </td>
                    <td className="ps-3">
                      <Card.Subtitle className="mb-2 text-muted">{Ashopownerdata.address}</Card.Subtitle>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <Card.Subtitle className="mb-2 text-muted">District</Card.Subtitle>
                    </td>
                    <td className="ps-3">
                      <Card.Subtitle className="mb-2 text-muted">{Ashopownerdata.district}</Card.Subtitle>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <Card.Subtitle className="mb-2 text-muted">City</Card.Subtitle>
                    </td>
                    <td className="ps-3">
                      <Card.Subtitle className="mb-2 text-muted">{Ashopownerdata.city}</Card.Subtitle>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <Card.Subtitle className="mb-2 text-muted">Pincode</Card.Subtitle>
                    </td>
                    <td className="ps-3">
                      <Card.Subtitle className="mb-2 text-muted">{Ashopownerdata.pincode}</Card.Subtitle>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <Card.Subtitle className="mb-2 text-muted">Contact</Card.Subtitle>
                    </td>
                    <td className="ps-3">
                      <Card.Subtitle className="mb-2 text-muted">{Ashopownerdata.contactNumber}</Card.Subtitle>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <Card.Subtitle className="mb-2 text-muted">Email ID</Card.Subtitle>
                    </td>
                    <td className="ps-3">
                      <Card.Subtitle className="mb-2 text-muted">{Ashopownerdata.email}</Card.Subtitle>
                    </td>
                  </tr>
                  <tr className="mt-3 text-center">
                    <td colSpan="2">
                      <button
                        onClick={() => toggleShopOwnerStatus(Ashopownerdata._id, Ashopownerdata.ActiveStatus)}
                        className="btn btn-success rounded-pill"
                      >
                        {Ashopownerdata.ActiveStatus ? "Deactivate" : "Activate"}
                      </button>
                    </td>
                  </tr>
                </div>
              </table>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
}

export default CustomerlistPage;
