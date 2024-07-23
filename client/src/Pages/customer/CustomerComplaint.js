import React, { useEffect } from 'react'
import { FaArrowLeftLong } from 'react-icons/fa6'
import { Link, useNavigate } from 'react-router-dom'

function CustomerComplaint() {

  const navigate = useNavigate();

  useEffect(() => {
    if (
      localStorage.getItem("token") == null &&
      localStorage.getItem("customer") == null
    ) {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <div className='container '>
        <Link className="customer-profile-link" to="/customerhome">
          <FaArrowLeftLong />
        </Link>
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
                required
                />
            </div> 
            <div className='text-center mt-5'>
                <button className='customer-complaint-submitbtn'>Submit</button>
            </div>          
        </div>     
    </div>
  )
}

export default CustomerComplaint
