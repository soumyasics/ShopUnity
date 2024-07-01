import React, { useEffect, useState } from 'react'
import './deliveryagent.css'
import { FaArrowLeft } from "react-icons/fa";
import axiosInstance from '../../APIS/axiosinstatnce';
import { Link } from 'react-router-dom';
import Modal from "react-bootstrap/Modal";
import { Card } from "react-bootstrap";


function AllDeliveryAgentViewPage({url}) {

    const[data,setData]=useState([])
    const [Ashopownerdata, setAshopownerdata] = useState({});
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = (deliveryagentid) => {
    setShow(true);
    axiosInstance
      .get("/get_all_deliveryagents/" + deliveryagentid)
      .then((res) => {
        setAshopownerdata(res.data.data);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  useEffect(() => {
    getData();
  }, []);

    const getData = ()=> { 
        axiosInstance.get("/get_all_deliveryagents")
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
           
            <div>
              <table>
                <div className="p-4">
                  <tr>
                    <td>
                      <Card.Subtitle className="mb-2 text-muted">Shop Name</Card.Subtitle>
                    </td>
                    <td className="ps-3">
                      <Card.Subtitle className="mb-2 text-muted">{Ashopownerdata.shopname}</Card.Subtitle>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <Card.Subtitle className="mb-2 text-muted">Owner Name</Card.Subtitle>
                    </td>
                    <td className="ps-3">
                      <Card.Subtitle className="mb-2 text-muted">{Ashopownerdata.shopownername}</Card.Subtitle>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <Card.Subtitle className="mb-2 text-muted">Address</Card.Subtitle>
                    </td>
                    <td className="ps-3">
                      <Card.Subtitle className="mb-2 text-muted">{Ashopownerdata.shopowneraddress}</Card.Subtitle>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <Card.Subtitle className="mb-2 text-muted">Contact Number</Card.Subtitle>
                    </td>
                    <td className="ps-3">
                      <Card.Subtitle className="mb-2 text-muted">{Ashopownerdata.shopownercontact}</Card.Subtitle>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <Card.Subtitle className="mb-2 text-muted">Email ID</Card.Subtitle>
                    </td>
                    <td className="ps-3">
                      <Card.Subtitle className="mb-2 text-muted">{Ashopownerdata.shopowneremail}</Card.Subtitle>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <Card.Subtitle className="mb-2 text-muted">Shopowner City</Card.Subtitle>
                    </td>
                    <td className="ps-3">
                      <Card.Subtitle className="mb-2 text-muted">{Ashopownerdata.shopownercity}</Card.Subtitle>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <Card.Subtitle className="mb-2 text-muted">Shopowner District</Card.Subtitle>
                    </td>
                    <td className="ps-3">
                      <Card.Subtitle className="mb-2 text-muted">{Ashopownerdata.shopownerdistrict}</Card.Subtitle>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <Card.Subtitle className="mb-2 text-muted">Shopowner Pincode</Card.Subtitle>
                    </td>
                    <td className="ps-3">
                      <Card.Subtitle className="mb-2 text-muted">{Ashopownerdata.shopownerpincode}</Card.Subtitle>
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
