import React, { useEffect, useState } from 'react'
import './deliveryagent.css'
import { FaArrowLeft } from "react-icons/fa";
import axiosInstance from '../../APIS/axiosinstatnce';
import { Link } from 'react-router-dom';



function AllDeliveryAgentViewPage() {

    const[data,setData]=useState([])

    useEffect(()=> { 
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
    },[])
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
                <div className="col-2">
                  <b> </b>
                </div>
              </div>
              {data.map((deliveryagent, index) => (
                <div className="row bg-light rounded-pill m-5 p-2">
                  <div className="col-1">
                    <b>{index + 1}.</b>
                  </div>
                  <div className="col-2">{deliveryagent.dealername}</div>
                  <div className="col-2">{deliveryagent.storename}</div>
                  <div className="col-2">{deliveryagent.email} </div>
                  <div className="col-2 ms-5">{deliveryagent.contact}</div>
                  <div className="col-1">
                    <button
                      className="rounded-pill px-3 border-none ms-5"
                      // onClick={() => handleShow()}
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
  </div>
  )
}

export default AllDeliveryAgentViewPage
