import React from 'react'
import { FaArrowLeftLong } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import chocolate from '../../images/chocolate.png'
function CustomerOrdersViewOrder() {
  return (
    <div>
      <div>
        <Link to='/customerhome'>
            <FaArrowLeftLong className='text-dark ms-5 mt-5' />
        </Link>
      </div>
      <div className='text-center'>
        <h3 className='customerorder-vieworder-h2'>View Orders</h3>
      </div>
      <div className='customerorder-vieworder-divbox ms-2 me-2'>
        <div className='container mt-5'>
            <label className='ms-5 customerorder-vieworder-label'>Order</label>
            <div className='customerorder-vieworder-orderbox'>
                <div className='text-center mt-5'>
                    <h4 className='hopowner-customerorder-request-h5'>Order Details</h4>
                </div>
                <div className='row mt-4'>
                    <div className='col-5 text-center '>
                        <img src={chocolate} className='view-customerorder-request-img'></img>
                    </div>
                    <div className='col-7'>
                        <label className='hopowner-customerorder-request-label'>Brand Name :</label>
                        <span className='ms-2 hopowner-customerorder-request-span'>Amul</span>
                        <div>
                            <label className='hopowner-customerorder-request-label'>Amul Dark Chocolate</label>
                        </div>
                        <p className='hopowner-customerorder-request-label'>(150g)</p>
                        <div className='row'>
                            <div className='col'>
                                <label className='hopowner-customerorder-request-label'>&#8377; 148</label>
                            </div>
                            <div className='col'>
                                <label className='hopowner-customerorder-request-label'>Qty-2</label>
                            </div>
                        </div>
                    </div>
                </div>
                <hr></hr>
                <div className='text-center mt-5'>
                    <h4 className='hopowner-customerorder-request-h5'>Order Details</h4>
                </div>
                <div className='row mt-4'>
                    <div className='col-5 text-center '>
                        <img src={chocolate} className='view-customerorder-request-img'></img>
                    </div>
                    <div className='col-7'>
                        <label className='hopowner-customerorder-request-label'>Brand Name :</label>
                        <span className='ms-2 hopowner-customerorder-request-span'>Amul</span>
                        <div>
                            <label className='hopowner-customerorder-request-label'>Amul Dark Chocolate</label>
                        </div>
                        <p className='hopowner-customerorder-request-label'>(150g)</p>
                        <div className='row'>
                            <div className='col'>
                                <label className='hopowner-customerorder-request-label'>&#8377; 148</label>
                            </div>
                            <div className='col'>
                                <label className='hopowner-customerorder-request-label'>Qty-2</label>
                            </div>
                        </div>
                        <hr className='mt-5'></hr>
                        <div className='row'>
                            <div className='col'>
                                <div>
                                    <h5 className='hopowner-customerorder-request-label'>Total Amount</h5>
                                </div>
                                <div>
                                    <h5 className='hopowner-customerorder-request-label'>Payment Status</h5>
                                </div>
                            </div>
                            <div className='col'>
                                <div>
                                    <h5 className='hopowner-customerorder-request-label'>:</h5>
                                </div>
                                <div>
                                    <h5 className='hopowner-customerorder-request-label'>:</h5>
                                </div>
                            </div>
                            <div className='col'>
                                <div>
                                    <h5 className='hopowner-customerorder-request-label'>&#8377; 592.00</h5>
                                </div>
                                <div>
                                    <h5 className='hopowner-customerorder-request-labelsuccess'>Success</h5>
                                </div>
                            </div>
                           
                            <div className='col'></div>
                        </div>
                        <div className='ms-5 ps-5 mt-3 customerorder-vieworder-tracking'>
                            Tracking Delivery
                        </div>
                        <div className='row mt-2'>
                            <div className='col'>
                                <h5 className='hopowner-customerorder-request-label'>Delivery Status</h5>
                            </div>
                            <div className='col'>
                                <h5 className='hopowner-customerorder-request-label'>:</h5>
                            </div>
                            <div className='col'>
                                <h5 className='customerorder-vieworder-pending'>Pending</h5>
                            </div>
                            <div className='col'></div>
                        </div>                        
                    </div>
                </div>
            </div>
        </div>       
      </div>
    </div>
  )
}

export default CustomerOrdersViewOrder
