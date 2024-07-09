import React, { useState } from 'react'
import './customer.css'
import { Link } from 'react-router-dom'
import { FaArrowLeftLong } from "react-icons/fa6";
import chocolate from '../../images/chocolate.png';
import minus from '../../images/minus.png'
import plus from '../../images/plus.png'
function CustomerProductCardPage() {

    const[count,setCount]=useState(1)

    const increment = () => {
        setCount(count+1);
    }
    const decrement = () => {
        if(count > 0){
            setCount(count-1)
        }
    }
  return (
    <div>
      <div>
        <Link to=''>
            <FaArrowLeftLong className='text-dark ms-5 mt-5' />
        </Link>
      </div>
      <div className='customerproduct-cardpage-divbox container'>
        <div className='row ms-5 mt-5'>
            <div className='col-7'>
                <div>
                    <input type='text' 
                    placeholder='From Saved Addresses'
                    className='customerproduct-cardpage-textbox ps-3'
                    />
                </div>
                <div className='customerproduct-cardpage-2productview mt-5'>
                    <div>
                        <div className='row'>
                            <div className='col mt-2'>
                                <img src={chocolate}/>
                                <div className='row'>
                                    <div className='col-2 ms-4 '>
                                        <button className='shopowner-viewproduct-minusbtn' onClick={decrement}><img src={minus}></img></button>
                                    </div>
                                    <div className='col-1 '>
                                        <label>{count}</label>
                                    </div>
                                    <div className='col-2 '>
                                        <button className='shopowner-viewproduct-plusbtn' onClick={increment}><img src={plus}></img></button>
                                    </div>
                                </div>
                            </div>
                            <div className='col mt-3'>
                                <div>
                                    <h6 className='customerproduct-cardpage-h6'>Brand Name:<b className='ms-2 customerproduct-cardpage-b'>Amul</b></h6>
                                </div>
                                <div className='mt-3'>
                                    <h4 className='customerproduct-cardpage-h6'>Amul Dark Chocolate</h4>
                                    <label className='customerproduct-cardpage-h6'>(150g)</label>
                                </div>
                                <div className='mt-4'>
                                    <b className='customerproduct-cardpage-h6'>&#8377; 148.00</b>
                                </div>
                                <div className='text-end me-5 pt-5  mt-5'>
                                    <h4 className='customerproduct-cardpage-h6'>Remove</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className='customerproduct-cardpage-hr'></hr>
                    <div className='row'>
                            <div className='col mt-2'>
                                <img src={chocolate}/>
                                <div className='row'>
                                    <div className='col-2 ms-4 '>
                                        <button className='shopowner-viewproduct-minusbtn' onClick={decrement}><img src={minus}></img></button>
                                    </div>
                                    <div className='col-1 '>
                                        <label>{count}</label>
                                    </div>
                                    <div className='col-2 '>
                                        <button className='shopowner-viewproduct-plusbtn' onClick={increment}><img src={plus}></img></button>
                                    </div>
                                </div>
                            </div>
                            <div className='col mt-3'>
                                <div>
                                    <h6 className='customerproduct-cardpage-h6'>Brand Name:<b className='ms-2 customerproduct-cardpage-b'>Amul</b></h6>
                                </div>
                                <div className='mt-3'>
                                    <h4 className='customerproduct-cardpage-h6'>Amul Dark Chocolate</h4>
                                    <label className='customerproduct-cardpage-h6'>(150g)</label>
                                </div>
                                <div className='mt-4'>
                                    <b className='customerproduct-cardpage-h6'>&#8377; 148.00</b>
                                </div>
                                <div className='text-end me-5 pt-5  mt-5'>
                                    <h4 className='customerproduct-cardpage-h6'>Remove</h4>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
            <div className='col-5'>
                <div className='customerproduct-cardpage-2columndiv'>
                    <div className='text-center mt-2'>
                        <h6 className='customerproduct-cardpage-h61'>Cart Items</h6>
                    </div>
                    <hr></hr>
                    <div className='row ms-5'>
                        <div className='col'>
                            <label className='customerproduct-cardpage-h6'>Amul dark chocolate</label>
                            <label className='customerproduct-cardpage-h6'>Amul dark chocolate</label>
                        </div>
                        <div className='col'>
                            <label className='customerproduct-cardpage-h6'>&#8377; 148.00</label><br></br>
                            <label className='customerproduct-cardpage-h6'>&#8377; 148.00</label>
                        </div>
                    </div>
                    <hr className='text-dark'></hr>
                    <div className='row ms-5'>
                        <div className='col'>
                            <label className='customerproduct-cardpage-h6'>Total Amount</label>
                        </div>
                        <div className='col'>
                            <label className='customerproduct-cardpage-h6'>&#8377; 296</label>
                        </div>
                    </div>
                    <hr></hr>
                    <div className='text-center'>
                        <label className='customerproduct-cardpage-label'>Place Order</label>
                    </div>
                    <div className='text-center'>
                        <button className='customerproduct-cardpage-reqbtn'>Request Delivery</button>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default CustomerProductCardPage
