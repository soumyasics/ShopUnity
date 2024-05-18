import React from 'react'
import ShopOwnerNav from '../../Pages/Navs/ShopOwnerNav'
import ShopownerProfilepage from '../../Pages/ShopOwner/ShopownerProfilepage'
import Footer from '../../Pages/Footer'

function ShopownerProfile({url}) {
  return (
    <div className=''>
    <ShopOwnerNav/>,
    <ShopownerProfilepage url={{url}}/>,
    <Footer/>
    </div>
  )
}

export default ShopownerProfile