import React from 'react'
import DeliveryagentSidebar from './DeliveryagentSidebar'
import DeliveryagentHomepage from './DeliveryagentHomepage'

function DeliveryagentMain() {
  return (
    <div>
      <div className='row'>
         <div className='col-3'>
            <DeliveryagentSidebar/>
         </div>
         <div className='col-9'>
            <DeliveryagentHomepage/>
         </div>
      </div>
    </div>
  )
}

export default DeliveryagentMain
