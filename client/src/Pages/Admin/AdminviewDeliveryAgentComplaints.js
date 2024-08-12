import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import { GrCompliance } from 'react-icons/gr'
import axiosInstance from '../../APIS/axiosinstatnce';
import { useNavigate } from 'react-router-dom';

function AdminviewDeliveryAgentComplaints() {

    const [data,setData]=useState([]);
    const navigate=useNavigate();

    useEffect(() => {
        axiosInstance.post(`deliveryagentcomplaints`,data)
        
        .then((res) => {
            
            if(res.status === 200){
                setData(res.data.data)
                console.log(res.data.data);
            }
        })
        .catch((err) => {
            console.log(err);
        })
    },[])
    console.log(data);

    useEffect(() => {
        if (
          localStorage.getItem("admin") == null
        ) {
          navigate("/admin");
        }
      }, []);

  return (
    <div>
        <div className='row'>
            <div className='col-2'>
                <Sidebar/>
            </div>
            <div className='col-9'>
                <div className='admin-customer-complaint-divbox mt-5 ms-5'>
                    <div className='text-center'>
                        <h2 className='customer-complaint-h2'>Complaints</h2>
                    </div>
                    <div className='ms-5 mt-3'>
                        <label className='admin-customer-complaint-label'>Delivery Agent</label>
                        <div className='admin-customer-complaint-divbox1 '>
                            {data.map ((item) => (
                                <div className='ms-3 mt-3'>
                                    <label className='admin-customer-complaint-label1'><GrCompliance />{item.agentid.name}{"- "}{item.description}</label>
                                </div>
                            ))}
                        </div>                       
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AdminviewDeliveryAgentComplaints
