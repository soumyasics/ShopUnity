import React from 'react'
import WholesaleDealerSidebar from './WholesaleDealerSidebar'
import WholesaleHome from './WholesaleHome'

function WholesalerMain() {
  return (
    <div>
      <div className='row'>
        <div className='col-3'>
            <WholesaleDealerSidebar/>
        </div>
        <div className='col-9'>
            <WholesaleHome/>
        </div>
      </div>
    </div>
  )
}

export default WholesalerMain
