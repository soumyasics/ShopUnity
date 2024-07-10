import React from 'react'
import ShopOwnerSidebar from './ShopOwnerSidebar'
import ShopAddItem from './ShopAddItem'
import ShopownerProfilepage from './ShopownerProfilepage'
import ShopownerViewProduct from './ShopownerViewProduct'
import ShopOwnerLogin from './ShopOwnerLogin'

function ShopownerDashBoard({data}) {
  return (
    <div>
      <div className='row'>
        <div className='col-3'>
            <ShopOwnerSidebar/>
        </div>
        <div className='col-9'>
            {data === 'shopownerprofile' ? (
                <ShopownerProfilepage/>
            ):data === 'shopownerproduct' ? (
                <ShopAddItem/>
            ):data === 'shopownerviewproduct' ? (
                <ShopownerViewProduct/>
            ):(
                <ShopownerDashBoard/>
            )}
        </div>
      </div>
    </div>
  )
}

export default ShopownerDashBoard
