import React from 'react'
import ShopownerHomepage from '../../Pages/ShopOwner/ShopownerHomepage'
import ShopOwnerSidebar from '../../Pages/ShopOwner/ShopOwnerSidebar'

function ShopHomePage() {
  return (
    <div>
      <div className="row">
        <div className="col-2">
          <ShopOwnerSidebar/>
        </div>
        <div className="col-10">
          <ShopownerHomepage/>
        </div>
      </div>
    </div>
  )
}

export default ShopHomePage