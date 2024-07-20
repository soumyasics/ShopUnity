import React from 'react'
import Sidebar from './Sidebar'
import '../customer/customer.css'
import { GrCompliance } from 'react-icons/gr'
function Complaints() {
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
                        <label className='admin-customer-complaint-label'>Customer</label>
                        <div className='admin-customer-complaint-divbox1 '>
                            <div className='ms-3 mt-3'>
                                <label className='admin-customer-complaint-label1'><GrCompliance />{" "}You Have A New Complaint From Customer Rahul...</label>
                            </div>
                            <div className='ms-3 mt-3'>
                                <label className='admin-customer-complaint-label1'><GrCompliance />{" "}You Have A New Complaint From Customer Rahul...</label>
                            </div>
                            <div className='text-end me-3'>
                                <button className='admin-customer-complaint-viewbtn'>View All</button>
                            </div>
                        </div>
                    </div>
                    <div className='ms-5 mt-3'>
                        <label className='admin-customer-complaint-label'>Shop Owners</label>
                        <div className='admin-customer-complaint-divbox1 '>
                            <div className='ms-3 mt-3'>
                                <label className='admin-customer-complaint-label1'><GrCompliance />{" "}You Have A New Complaint From Customer Rahul...</label>
                            </div>
                            <div className='text-end me-3'>
                                <button className='admin-customer-complaint-viewbtn'>View All</button>
                            </div>
                        </div>
                    </div>
                    <div className='ms-5 mt-3'>
                        <label className='admin-customer-complaint-label'>Wholesale Dealer</label>
                        <div className='admin-customer-complaint-divbox1 '>
                            <div className='ms-3 mt-3'>
                                <label className='admin-customer-complaint-label1'><GrCompliance />{" "}You Have A New Complaint From Customer Rahul...</label>
                            </div>
                            <div className='text-end me-3'>
                                <button className='admin-customer-complaint-viewbtn'>View All</button>
                            </div>
                        </div>
                    </div>
                    <div className='ms-5 mt-3'>
                        <label className='admin-customer-complaint-label'>Delivery Agent</label>
                        <div className='admin-customer-complaint-divbox1 '>
                            <div className='ms-3 mt-3'>
                                <label className='admin-customer-complaint-label1'><GrCompliance />{" "}You Have A New Complaint From Customer Rahul...</label>
                            </div>
                            <div className='text-end me-3'>
                                <button className='admin-customer-complaint-viewbtn'>View All</button>
                            </div>
                        </div>                       
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Complaints
