import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaArrowLeftLong } from "react-icons/fa6";
import chocolate from '../../images/chocolate.png'
import plus from '../../images/plus.png'
import minus from '../../images/minus.png'
function CustomerViewProductDetail() {

  const [count,setCount]=useState(1)

  const increment = () => {
    setCount(count+1)
  }

  const decrement = () => {
    if(count > 0){
      setCount(count-1)
    }
  }
  return (
    <div>
      <div>
        <Link to='/customerviewproduct'>
            <FaArrowLeftLong className='text-dark ms-5 mt-5' />
        </Link>
      </div>
      <div className='customer-viewproduct-details-divbox container'>
        <div className='row mt-5'>
          <div className='col'>
            <div className='mt-3 customer-viewproduct-details-imgbox '>
              <img className="customer-viewproduct-details-img" src={chocolate}></img>
            </div>
          </div>
          <div className='col ms-5'>
            <div className='mt-3'>
              <h5 className='customer-viewproduct-details-h5'>Product Brand :<span className='ms-2 customer-viewproduct-details-span'>Amul</span></h5>
            </div>
            <div className='mt-3'>
              <h2 className='customer-viewproduct-details-h2'>Amul Dark Chocolate</h2>
              <p className='customer-viewproduct-details-p'>(150kg)</p>
            </div>
            <div>
              <h2 className='customer-viewproduct-details-h2'>&#8377; 185.00</h2>
            </div>
            <div className='row'>
              <div className='col mt-2'>
                <h1 className='customer-viewproduct-details-h2'>Qty</h1>
              </div>
              <div className='col'>
                <button className='shopowner-viewproduct-minusbtn mt-4' onClick={decrement}><img src={minus}></img></button>
              </div>
              <div className='col'>
                <label className='mt-3 customer-viewproduct-details-h2label'>{count}</label>
              </div>
              <div className='col'>
                <button className='shopowner-viewproduct-plusbtn mt-3' onClick={increment}><img src={plus}></img></button>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default CustomerViewProductDetail
