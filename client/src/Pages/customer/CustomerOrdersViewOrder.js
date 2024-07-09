import React from 'react'
import { FaArrowLeftLong } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

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

      </div>
    </div>
  )
}

export default CustomerOrdersViewOrder
