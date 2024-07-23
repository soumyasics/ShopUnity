import React, { useState, useEffect } from 'react';
import DeliveryagentSidebar from './DeliveryagentSidebar';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import axiosInstance from '../../APIS/axiosinstatnce';

function DeliveryagentComplaint() {
    const [complaint, setComplaint] = useState("");
    const navigate = useNavigate();
    
    useEffect(() => {
        if (
          localStorage.getItem("token") == null &&
          localStorage.getItem("deliveryagent") == null
        ) {
          navigate("/login");
        }
      }, [navigate]);

    const handleChange = (e) => {
        setComplaint(e.target.value);
    }

    const handleSubmit = () => {
        const agentId = localStorage.getItem("deliveryagent");
        axiosInstance.post(`/deliveryagentcomplaints/${agentId}`, { description: complaint })
            .then(response => {
                if (response.status === 200) {
                    alert('Complaint sent successfully');
                    setComplaint("");
                } else {
                    alert('Failed to send complaint');
                }
            })
            .catch(error => {
                console.error('There was an error sending the complaint!', error);
            });
    }

    return (
        <div className='row'>
            <div className='col-2'>
                <DeliveryagentSidebar />
            </div>
            <div className='col-9 ms-5'>
                <div className=''>
                    <div className='customer-complaint-divbox mt-5 me-5'>
                        <div className='text-center'>
                            <h2 className='customer-complaint-h2'>Complaints</h2>
                        </div>
                        <div className='pt-3 ms-5'>
                            <h5 className='customer-complaint-h2 mt-5 pt-5'>Issue</h5>
                        </div>
                        <div className='customer-complaint-divbox1 ms-5 mt-3 '>
                            <input 
                                type='text' 
                                className='customer-complaint-divbox2 ms-4 mt-4'
                                placeholder='Enter Your Complaint Here...'
                                value={complaint}
                                onChange={handleChange}
                            />
                        </div> 
                        <div className='text-center mt-5'>
                            <button className='customer-complaint-submitbtn' onClick={handleSubmit}>Submit</button>
                        </div>          
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DeliveryagentComplaint;
