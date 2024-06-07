import React from 'react'
import ShopOwnerNav from '../../Pages/Navs/ShopOwnerNav'
import ShopownerProfilepage from '../../Pages/ShopOwner/ShopownerProfilepage'
import Footer from '../../Pages/Footer'
import MainNav from '../../Pages/Navs/MainNav'
function ShopownerProfile({url}) {
  return (
    <div className=''>
    <div className='row'>
      <div className='col-3'>
       
      </div>
      <div className='col-9'>
        <ShopownerProfilepage url={{url}}/>
      </div>
    </div>
    
    </div>
  )
}

export default ShopownerProfile
