import React, { useEffect, useState } from 'react'
import './deliveryagent.css'
import { FaArrowLeft } from "react-icons/fa";
import axiosInstance from '../../APIS/axiosinstatnce';
import { Link, useNavigate } from 'react-router-dom';
import Modal from "react-bootstrap/Modal";
import { Card } from "react-bootstrap";


function AllDeliveryAgentViewPage({url}) {

    const[data,setData]=useState([])
    const [Ashopownerdata, setAshopownerdata] = useState({});
    const [show, setShow] = useState(false);
    const navigate = useNavigate();

    const handleClose = () => setShow(false);
    const handleShow = (deliveryagentid) => {
    setShow(true);
    axiosInstance
      .get("/get_a_deliveryagent/" + deliveryagentid)
      .then((res) => {
        setAshopownerdata(res.data.data);
      })
      .catch((err) => {
        console.log("err", err);
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

    const getData = ()=> { 
        axiosInstance.get("/get_all_accepted_Deliveryagent")
        .then ((res) => {
            if(res.data.status  === 200){
                console.log(res);
                setData(res.data.data || [])
            }
            else{
                setData([])
            }
        })
        .catch((err) => {
            console.log("Error",err);
        })
    }

    const toggleShopOwnerStatus = (id, currentStatus) => {
        const endpoint = currentStatus ? "/inactivateshopowner/" : "/activateshopowner/";
        axiosInstance
          .post(endpoint + id)
          .then((res) => {
            if (res.status === 200) {
              let msg = res?.data?.message || `Shopowner is now ${currentStatus ? "Inactive" : "Active"}`;
              alert(msg);
              getData();
              setAshopownerdata(prevState => ({
                ...prevState,
                ActiveStatus: !currentStatus
              }));
            } else {
              console.log("Error on status change");
            }
          })
          .catch((err) => {
            console.log("err", err);
          });
      };
  return (
    <div>
    <div className=''>
      <Link to="/admin_dashboard" className='alldeliveryagent-viewpage-icon'><FaArrowLeft className='mt-5 ms-5 '/></Link>
    </div>
        <div className="">
    </div>
    <div className="">
      <div className="">
        <div className="alldeliveryagent-viewpage-div1 container">
          {data?.length === 0 && (
            <div className='pt-3'>
              <h1 className="text-center "> No DeliveryAgent Found</h1>
           </div>
           )} 
           {data?.length > 0 && ( 
            <div>
              <h3 className="text-center pt-4 alldeliveryagent-viewpage-h3 ">Delivery Agent List</h3>
              <div className="row rounded-pill m-5 p-2 container">
                <div className="col-1">
                  <b>Sl/No</b>
                </div>
                <div className="col-2">
                  <b> Name</b>
                </div>
                <div className="col-2">
                  <b>City</b>
                </div>
                <div className="col-2">
                  <b>Email Id </b>
                </div>
                <div className="col-2">
                  <b>Contact</b>
                </div>
              </div>
              {data.map((deliveryagent, index) => (
                <div className="row bg-light rounded-pill m-5 p-2">
                  <div className="col-1">
                    <b>{index + 1}.</b>
                  </div>
                  <div className="col-2">{deliveryagent.name}</div>
                  <div className="col-2">{deliveryagent.city}</div>
                  <div className="col-2">{deliveryagent.email} </div>
                  <div className="col-2 ms-5">{deliveryagent.contactNumber}</div>
                  <div className="col-1">
                    <button
                      className="rounded-pill px-3 border-none ms-5"
                      onClick={() => handleShow(deliveryagent._id)}
                      id='alldeliveryagent-viewpage-viewbtn'
                    >
                      view
                    </button>
                  </div>
                </div>
              ))}
            </div>
           )} 
        </div>
      </div>
    </div>

    <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
          <Modal.Header closeButton></Modal.Header>
          <div>
          <img
          className="parentimage"
          alt="img"
          style={{ width: "100%", height: "380px" }}
          src={`${url}${Ashopownerdata.drivingLicense?.originalname}`}
        />
            <div>
              <table>
                <div className="p-4">
                  <tr>
                    <td>
                      <Card.Subtitle className="mb-2 text-muted"> Name</Card.Subtitle>
                    </td>
                    <td className="ps-3">
                      <Card.Subtitle className="mb-2 text-muted">{Ashopownerdata.name}</Card.Subtitle>
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
                      <Card.Subtitle className="mb-2 text-muted">Contact Number</Card.Subtitle>
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
                  <tr>
                    <td>
                      <Card.Subtitle className="mb-2 text-muted">vehicleNumbery</Card.Subtitle>
                    </td>
                    <td className="ps-3">
                      <Card.Subtitle className="mb-2 text-muted">{Ashopownerdata.vehicleNumber}</Card.Subtitle>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <Card.Subtitle className="mb-2 text-muted"> District</Card.Subtitle>
                    </td>
                    <td className="ps-3">
                      <Card.Subtitle className="mb-2 text-muted">{Ashopownerdata.district}</Card.Subtitle>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <Card.Subtitle className="mb-2 text-muted"> Pincode</Card.Subtitle>
                    </td>
                    <td className="ps-3">
                      <Card.Subtitle className="mb-2 text-muted">{Ashopownerdata.pincode}</Card.Subtitle>
                    </td>
                    
                  </tr>
                  <tr>
                    <td>
                      <Card.Subtitle className="mb-2 text-muted"> vehicleType</Card.Subtitle>
                    </td>
                    <td className="ps-3">
                      <Card.Subtitle className="mb-2 text-muted">{Ashopownerdata.vehicleType}</Card.Subtitle>
                    </td>
                    
                  </tr>
                  <tr className="mt-3 text-center">
                    <td colSpan="2">
                      <button
                        onClick={() => toggleShopOwnerStatus(Ashopownerdata._id, Ashopownerdata.ActiveStatus)}
                        className="btn btn-success rounded-pill"
                      >
                        {Ashopownerdata.ActiveStatus ? "DeActivate" : "Activate"}
                      </button>
                    </td>
                  </tr>
                </div>
              </table>
            </div>
          </div>
        </Modal>
      
  </div>
  )
}

export default AllDeliveryAgentViewPage
