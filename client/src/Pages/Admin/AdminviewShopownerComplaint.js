import React, { useEffect, useState } from 'react'
import { GrCompliance } from 'react-icons/gr'
import Sidebar from './Sidebar'
import axiosInstance from '../../APIS/axiosinstatnce';

function AdminviewShopownerComplaint() {

    const [data,setData]=useState([]);

    useEffect(() => {
        axiosInstance.post(`shopownercomplaints`,data)
        
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
                        <label className='admin-customer-complaint-label'>Shop Owners</label>
                        <div className='admin-customer-complaint-divbox1 '>
                            {data.map((item) => (
                                <div className='ms-3 mt-3'>
                                    <label className='admin-customer-complaint-label1'><GrCompliance />{" "}{item.description}</label>
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

export default AdminviewShopownerComplaint
