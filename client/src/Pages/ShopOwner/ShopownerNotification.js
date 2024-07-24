import React, { useEffect } from 'react'
import ShopOwnerSidebar from './ShopOwnerSidebar'
import { IoIosNotifications } from 'react-icons/io'
import { useNavigate } from 'react-router-dom';

function ShopownerNotification() {

    const navigate = useNavigate();
    
    // useEffect(() => {
    //     if (
    //       localStorage.getItem("shopownertoken") == null &&
    //       localStorage.getItem("shopowner") == null
    //     ) {
    //       navigate("/shopownerlogin");
    //     }
    //   }, [navigate]);

  return (
    <div >
        <div className='row'>
            <div className='col-2'>
                <ShopOwnerSidebar/>
            </div>
            <div className='col-9 ms-5 mb-5'>
                <div className='text-center'>
                    <h2 className='customer-complaint-h2'>Notification</h2>
                </div>
                <div className='shopowner-notification-divbox mt-5'>
                    <div className='shopowner-notification-divbox2 mt-3 ms-3'>
                        <div className='ms-3 mt-3'>
                            <label className='shopowner-notification-label' ><IoIosNotifications className='shopowner-notification-icon'/> More than 10 Customers searched for a product<b> ‘Amul Dark Chocolate’</b> recently ...</label>
                        </div>
                    </div>
                </div>
                <div className='shopowner-notification-divbox mt-5'>
                    <div className='shopowner-notification-divbox2 mt-3 ms-3'>
                        <div className='ms-3 mt-3'>
                            <label className='shopowner-notification-label' ><IoIosNotifications className='shopowner-notification-icon'/> More than 10 Customers searched for a product<b> ‘Amul Dark Chocolate’</b> recently ...</label>
                        </div>
                    </div>
                </div>
                <div className='shopowner-notification-divbox mt-5'>
                    <div className='shopowner-notification-divbox2 mt-3 ms-3'>
                        <div className='ms-3 mt-3'>
                            <label className='shopowner-notification-label' ><IoIosNotifications className='shopowner-notification-icon'/> More than 10 Customers searched for a product<b> ‘Amul Dark Chocolate’</b> recently ...</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ShopownerNotification
