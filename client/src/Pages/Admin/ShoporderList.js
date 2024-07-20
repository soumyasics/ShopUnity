import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';

function ShoporderList() {

    const[show,setShow]=useState(false)

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <div>
        <div className='row'>
            <div className='col-2'>
                <Sidebar/>
            </div>
            <div className='col-9'>
                <div className='text-center'>
                    <h4 className='customer-complaint-h2'>Shop Orders List</h4>
                </div>
                <div className='admin-customer-order-list-divbox ms-5'>
                    {/* <div className="pt-3">
                        <h1 className="text-center">No Wholesale Dealer Found</h1>
                    </div> */}

                    <div className='pt-3'>
                        {/* <h3 className="text-center pt-4 wholesale-alldealer-viewpage-h3">
                            Customer List
                        </h3> */}
                        <div className="row rounded-pill m-5 p-2 container">
                            <div className="col-1">
                                <b className='admin-customer-order-list-list1'>Sl/No</b>
                            </div>
                            <div className="col-2">
                                <b className='admin-customer-order-list-list1'>Shop Name</b>
                            </div>
                            <div className="col-2">
                                <b className='admin-customer-order-list-list1'>Wholesale Store </b>
                            </div>
                            <div className="col-2">
                                <b className='admin-customer-order-list-list1'>Total Amount</b>
                            </div>
                            <div className="col-2">
                                <b className='admin-customer-order-list-list1'>Delivery Status</b>
                            </div>
                            <div className="col-2">
                                <b> </b>
                            </div>
                        </div>
                    </div>

                    <div className="row bg-light rounded-pill m-5 p-2 ps-3">
                        <div className="col-1">
                            <b className='admin-customer-order-list-list '>1.</b>
                        {/* <b>{index + 1}.</b> */}
                        </div>
                        <div className="col-2 admin-customer-order-list-list ps-5">Joy Shop</div>
                        <div className="col-2 admin-customer-order-list-list ps-5">A & M Store</div>
                        <div className="col-2 admin-customer-order-list-list ps-5">&#8377; 150</div>
                        <div className="col-2 admin-customer-order-list-list ps-5">Pending</div>
                        <div className="col-1 admin-customer-order-list-list ps-5 ">
                        <Link to=''>
                            <button
                            className="rounded-pill px-3 border-none"
                            id="wholesale-alldealer-viewpage-viewbtn"
                            onClick={handleShow}
                            >
                            View 
                            </button>
                        </Link>
                    </div>
                  </div>
                </div>
            </div>
        </div>
        <>
            <Modal show={show} onHide={handleClose} closeButton>
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body>
                    <div className='row'>
                        <div className='col-5'>
                            <div>
                                <label className='admin-customer-complaint-label12'>Shop Name</label>
                            </div>
                            <div>
                                <label className='admin-customer-complaint-label12'>Wholesale Store Name</label>
                            </div>
                            {/* <div>
                                <label className='admin-customer-complaint-label12'>Delivery Agent Name</label>
                            </div>     */}
                        </div>
                        <div className='col-1'>
                            <div>
                                <label className='admin-customer-complaint-label12'>:</label>
                            </div>
                            <div>
                                <label className='admin-customer-complaint-label12'>:</label>
                            </div>
                            {/* <div>
                                <label className='admin-customer-complaint-label12'>:</label>
                            </div>    */}
                        </div>
                        <div className='col-6'>
                            <div>
                                <label className='admin-customer-complaint-label12'>Joy Shop</label>
                            </div>
                            <div>
                                <label className='admin-customer-complaint-label12'>A & M Store</label>
                            </div>
                            {/* <div>
                                <label className='admin-customer-complaint-label12'>Shashan</label>
                            </div>     */}
                        </div>
                    </div>
                    <div className='text-center'>
                        <h5 className='admin-customer-order-list-h5'>Order Details</h5>
                    </div>
                    <div className='row'>
                        <div className='col-5'>
                            <div>
                                <label className='admin-customer-complaint-label12'>Total Amount</label>
                            </div>
                            <div>
                                <label className='admin-customer-complaint-label12'>Payment Status</label>
                            </div>
                            <div>
                                <label className='admin-customer-complaint-label12'>Track Delivery Status</label>
                            </div>    
                        </div>
                        <div className='col-1'>
                            <div>
                                <label className='admin-customer-complaint-label12'>:</label>
                            </div>
                            <div>
                                <label className='admin-customer-complaint-label12'>:</label>
                            </div>
                            <div>
                                <label className='admin-customer-complaint-label12'>:</label>
                            </div>   
                        </div>
                        <div className='col-6'>
                            <div>
                                <label className='admin-customer-complaint-label12'>&#8377; 150</label>
                            </div>
                            <div>
                                <label className='admin-customer-complaint-success'>Success</label>
                            </div>
                            <div>
                                <label className='admin-customer-complaint-pending'>Pending</label>
                            </div>    
                        </div>
                    </div>
                </Modal.Body>
                
            </Modal>
        </>
    </div>
  )
}

export default ShoporderList