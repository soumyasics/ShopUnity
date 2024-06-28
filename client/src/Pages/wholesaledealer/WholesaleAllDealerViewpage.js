import React, { useEffect, useState } from 'react'
import './wholesale.css';
import axiosInstance from '../../APIS/axiosinstatnce';
import { FaArrowLeft } from "react-icons/fa";
import { Link } from 'react-router-dom';

function WholesaleAllDealerViewpage() {
  const[data,setData]=useState([])

  useEffect(()=>{
    axiosInstance.get("/get_all_accepted_wholesaledealer")
    .then((res)=>{
      if(res.data.status === 200){
        console.log(res);
        setData(res.data.data || [])
      }
      else{
        setData([])
      }
    })
    .catch((err)=>{
      console.log("Error",err);
    })
  }, [])
  
  return (
    <div>
      <div className=''>
        <Link to="/admin_dashboard" className='wholesale-alldealer-viewpage-icon'><FaArrowLeft className='mt-5 ms-5 '/></Link>
      </div>
          <div className="">
      </div>
      <div className="">
        <div className="">
          <div className="wholesale-alldealer-viewpage-div1 container">
            {data?.length === 0 && (
              <div className='pt-3'>
                <h1 className="text-center "> No WholeSaleDealer Found</h1>
             </div>
             )} 
             {data?.length > 0 && ( 
              <div>
                <h3 className="text-center pt-4 wholesale-alldealer-viewpage-h3 ">WholeSale Dealer List</h3>
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
                    <b>Email Id </b>
                  </div>
                  <div className="col-2">
                    <b>Contact</b>
                  </div>
                  <div className="col-2">
                    <b> </b>
                  </div>
                </div>
                {data.map((wholesaledealer, index) => (
                  <div className="row bg-light rounded-pill m-5 p-2">
                    <div className="col-1">
                      <b>{index + 1}.</b>
                    </div>
                    <div className="col-2">{wholesaledealer.dealername}</div>
                    <div className="col-2">{wholesaledealer.storename}</div>
                    <div className="col-2">{wholesaledealer.email} </div>
                    <div className="col-2 ms-5">{wholesaledealer.contact}</div>
                    <div className="col-1">
                      <button
                        className="rounded-pill px-3 border-none ms-5"
                        // onClick={() => handleShow()}
                        id='wholesale-alldealer-viewpage-viewbtn'
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

export default WholesaleAllDealerViewpage
