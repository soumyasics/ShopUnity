import React, { useEffect, useState } from 'react'
import ShopOwnerSidebar from './ShopOwnerSidebar'
import '../customer/customer.css'
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../APIS/axiosinstatnce';
function ShopownerComplaint() {

    const[complaint,setComplaint]=useState({
        complaintmsg:""
    });
    const[errors,setErrors]=useState({
        complaintmsg:""
    });
    const navigate=useNavigate();

    const handleChange = (e) => {
        setComplaint(e.target.value)
    }

    function validateField (fieldName,value) {
        if (typeof value === 'string' && !value.trim()) {
            return `${fieldName} is required`;
        }
    }
    
    useEffect(() => {
        if (
          localStorage.getItem("shopownertoken") == null &&
          localStorage.getItem("shopowner") == null
        ) {
          navigate("/shopownerlogin");
        }
      }, []);

      const handleSubmit = (e) => {
        e.preventDefault();
        let errors={}
        let formIsValid=true;

        errors.complaintmsg=validateField("Complaint",complaint.complaintmsg);

        setErrors(errors);

        const shopownerid = localStorage.getItem("shopowner");
        axiosInstance.post(`/shopownercomplaints/${shopownerid}`, { description: complaint })
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
            <ShopOwnerSidebar/>
        </div>
        <div className='col-9 ms-5 ps-5'>
            <div className=''>
                <div className='customer-complaint-divbox mt-5 me-5'>
                    <div className='text-center'>
                        <h2 className='customer-complaint-h2'>Complaints</h2>
                    </div>
                    <div className='pt-3 ms-5'>
                        <h5 className='customer-complaint-h2 mt-5 pt-5'>Issue</h5>
                    </div>
                    <div className='customer-complaint-divbox1 ms-5 mt-3 '>
                        <input type='text' 
                        className='customer-complaint-divbox2  ms-4 mt-4'
                        placeholder='Enter Your Complaint Here...'
                        value={complaint.complaintmsg}
                        onChange={handleChange}
                        name='complaintmsg'
                        />
                    </div> 
                    {errors.complaintmsg && <span className='text-danger ms-5 '>{errors.complaintmsg}</span>}
                    <div className='text-center mt-5'>
                        <button className='customer-complaint-submitbtn' onClick={handleSubmit}>Submit</button>
                    </div>          
                </div>
            </div>
        </div>
    </div>
  )
}

export default ShopownerComplaint
