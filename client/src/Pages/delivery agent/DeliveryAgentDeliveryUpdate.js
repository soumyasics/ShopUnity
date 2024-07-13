import React from 'react'
import './deliveryagent.css';
import DeliveryagentSidebar from './DeliveryagentSidebar';
import { Card } from 'react-bootstrap';
import tick from '../../images/tick.png';
import wrong from '../../images/wrong.png';
function DeliveryAgentDeliveryUpdate() {
  return (
    <div>
    <div className='row'>
      <div className='col-3'>
          <DeliveryagentSidebar/>
      </div>
      <div className='col-9 p-5'>
          <div className='deliveryagent-deliveryrequest-divbox'>
              <h3 className='deliveryagent-deliveryrequest-h3 pt-4 text-center'>Delivery Updates</h3>
              <div>
                    <h5 className='deliveryagent-deliveryrequest-h3 ms-3 pt-2'>ShopOwner Orders</h5>
                    <div className='row'>
                        <div className='col ms-3'>
                            <Card className='mb-3'>
                                <div className='row ms-3 mb-3'>
                                    <div className='col'>
                                        <div className='mt-2'>
                                          <label>Shop Name</label>
                                        </div>
                                        <div className='mt-2'>
                                          <label>Customer Name</label>
                                        </div>
                                        <div className='mt-2'>
                                          <label>Delivery Address</label>
                                        </div>
                                        <div  className='mt-2'>
                                        <label>Delivery Status</label>
                                        </div>
                                    </div>
                                    <div className='col'>
                                        <div className='mt-2'>
                                          <label>H & M Store</label>
                                        </div>
                                        <div className='mt-2'>
                                          <label>Rahul</label>
                                        </div>
                                        <div className='mt-2'>
                                          <label>Trivandrum</label>
                                        </div>                                     
                                        <div  className='mt-2'>
                                            <input type='text' className='deliveryagent-deliveryupdate-textbox'/>
                                        </div>
                                        <div className='mt-2'>
                                            <button className='deliveryagent-deliveryupdate-submitbtn'>Submit</button>
                                        </div>
                                  </div>
                                  
                              </div>   
                          </Card>
                          <Card className='mb-3'>
                              <div className='row ms-3 mb-3'>
                                  <div className='col'>
                                        <div className='mt-2'>
                                          <label>Shop Name</label>
                                        </div>
                                        <div className='mt-2'>
                                          <label>Customer Name</label>
                                        </div>
                                        <div className='mt-2'>
                                          <label>Delivery Address</label>
                                        </div>
                                        <div className='mt-2'>
                                          <label>Delivery Status</label>
                                        </div>
                                  </div>
                                    <div className='col'>
                                        <div className='mt-2'>
                                            <label>H & M Store</label>
                                        </div>
                                        <div className='mt-2'>
                                          <label>Rahul</label>
                                        </div>
                                        <div className='mt-2'>
                                          <label>Trivandrum</label>
                                        </div>
                                        <div className='mt-2'>
                                          <input type='text' className='deliveryagent-deliveryupdate-textbox'/>
                                        </div>
                                        <div className='mt-2'>
                                            <button className='deliveryagent-deliveryupdate-submitbtn'>Submit</button>
                                        </div>
                                    </div>
                                  
                                </div>
                              
                            </Card>
                      </div>
                      <div className='col'></div>
                      <div className='col'></div>
                  </div>
              </div>
              <div>
                  <h5 className='deliveryagent-deliveryrequest-h3 ms-3 pt-2'>WholeSale Dealer Orders</h5>
                  <div className='row'>
                      <div className='col ms-3'>
                          <Card className='mb-3'>
                              <div className='row ms-3 mb-3'>
                                  <div className='col'>
                                      <div className='mt-2'>
                                          <label>Dealer Name</label>
                                      </div>
                                      <div className='mt-2'>
                                          <label>Shop Name</label>
                                      </div>
                                      <div className='mt-2'>
                                          <label>Delivery Address</label>
                                      </div>
                                      <div  className='mt-2'>
                                        <label>Delivery Status</label>
                                      </div>
                                  </div>
                                  <div className='col'>
                                      <div className='mt-2'>
                                          <label>H & M Store</label>
                                      </div>
                                      <div className='mt-2'>
                                          <label>Rahul</label>
                                      </div>
                                      <div className='mt-2'>
                                          <label>Trivandrum</label>
                                      </div>
                                      <div className='mt-2'>
                                        <input type='text' className='deliveryagent-deliveryupdate-textbox'/>
                                      </div>
                                      <div className='mt-2'>
                                            <button className='deliveryagent-deliveryupdate-submitbtn'>Submit</button>
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
  </div>
  )
}

export default DeliveryAgentDeliveryUpdate
