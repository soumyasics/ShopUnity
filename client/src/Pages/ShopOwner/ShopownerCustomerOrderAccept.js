import React from 'react'
import './shopowner.css';
import ShopOwnerSidebar from './ShopOwnerSidebar';
import { Card, Col, Row } from 'react-bootstrap';
import chocolate from '../../images/chocolate.png'
import tick from '../../images/tick.png'
import wrong from '../../images/wrong.png'
function ShopownerCustomerOrderAccept() {
  return (
    <div>
      <div className='row'>
        <div className='col-3'>
            <ShopOwnerSidebar/>
        </div>
        <div className='col-9'>
            <div className='text-center mt-5'>
                <h3 className='shopowner-customerorder-request-h3'>Accepted Orders</h3>
            </div>
            <div className='shopowner-customerorder-request-divbox mt-5'>
                <div className='row'>
                    <div className='col-5'>
                        <Card className='mt-4 container ms-3 '>
                            <div className='shopowner-customerorder-request-cardbox mt-3 mb-3'>
                                <div className='text-center'>
                                    <h5 className='hopowner-customerorder-request-h5'>Order Details</h5>
                                </div>
                                <div className='row'>
                                    <div className='col-3 ms-3 '>
                                        <div>
                                            <label className='hopowner-customerorder-request-label'>Customer </label>
                                        </div>
                                        <div>
                                            <label className='hopowner-customerorder-request-label'>Address </label>
                                        </div>
                                    </div>
                                    <div className='col-1'>
                                        <div className='hopowner-customerorder-request-label'>:</div>
                                        <div className='hopowner-customerorder-request-label'>:</div>
                                    </div>
                                    <div className='col-7 mb-3'>
                                        <div>
                                            <label className='hopowner-customerorder-request-span'>Rahul</label>
                                            <div>
                                                <label className='hopowner-customerorder-request-label'>Trivandrum,Thambanoor</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-3'>
                                        <img src={chocolate} className='hopowner-customerorder-request-img'></img>
                                    </div>
                                    <div className='col-9'>
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
                                        <hr></hr>
                                        <div className='row'>
                                            <div className='col-5'>
                                                <label className='hopowner-customerorder-request-label'>Total Amount </label>
                                                <label className='hopowner-customerorder-request-label'>Payment Status</label>
                                                <label className='hopowner-customerorder-request-label'>Assign Delivery Agent</label>
                                            </div>
                                            <div className='col-1'>
                                                <div>
                                                    <label className='hopowner-customerorder-request-label'>:</label>
                                                </div>
                                                <div>
                                                    <label className='hopowner-customerorder-request-label'>:</label>
                                                </div>
                                                <div>
                                                    <label className='hopowner-customerorder-request-label'>:</label>
                                                </div>
                                            </div>
                                            <div className='col-6'>
                                                <div>
                                                    <label className='hopowner-customerorder-request-label'>&#8377; 296</label>
                                                </div>
                                               
                                               <label className='hopowner-customerorder-request-labelsuccess'> Success</label>
                                               <div>
                                                <select className='hopowner-customerorder-request-select'>
                                                    <option> Delivery Agent</option>
                                                </select>
                                               </div>
                                            </div>
                                        </div>
                                        <div className='text-center'>
                                            <button className='hopowner-customerorder-request-submitbtn'>Submit</button>
                                        </div>
                                        
                                    </div>  
                                     
                                </div>
                                
                            </div>
                            
                        </Card>
                    </div>
                    <div className='col'></div>
                    <div className='col'></div>
                </div>
                
            </div>
        </div>
      </div>
    </div>
  )
}

export default ShopownerCustomerOrderAccept
