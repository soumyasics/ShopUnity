import React, { useEffect } from 'react'
import ShopOwnerSidebar from '../ShopOwner/ShopOwnerSidebar';
import { Link, useNavigate } from 'react-router-dom';
function ShopownerWholesaleDealerList() {

    const navigate=useNavigate();

    // useEffect(() => {
    //     if (
    //       localStorage.getItem("shopownertoken") == null &&
    //       localStorage.getItem("shopowner") == null
    //     ) {
    //       navigate("/shopownerlogin");
    //     }
    //   }, [navigate]);
  return (
    <div>
        <div className='row'>
            <div className='col-2'>
                <ShopOwnerSidebar/>
            </div>
            <div className='col-10'>
                <div className='text-center'>
                    <h4 className='customer-complaint-h2'>Wholesale Delaer List</h4>
                </div>
                <div className='admin-customer-order-list-divbox ms-5'>
                    {/* <div className="pt-3">
                        <h1 className="text-center">No Wholesale Dealer Found</h1>
                    </div> */}

                    <div className='pt-3'>
                        {/* <h3 className="text-center pt-4 wholesale-alldealer-viewpage-h3">
                            Customer List
                        </h3> */}
                        <div className="row rounded-pill m-5 p-2 container">
                            <div className="col-1">
                                <b className='admin-customer-order-list-list1'>Sl/No</b>
                            </div>
                            <div className="col-2">
                                <b className='admin-customer-order-list-list1'>Store Name</b>
                            </div>
                            <div className="col-2">
                                <b className='admin-customer-order-list-list1'>Dealer Name</b>
                            </div>
                            <div className="col-2">
                                <b className='admin-customer-order-list-list1'>Email Id</b>
                            </div>
                            <div className="col-2">
                                <b className='admin-customer-order-list-list1'>Contact</b>
                            </div>
                            <div className="col-2">
                                <b className='admin-customer-order-list-list1'>Offered Price </b>
                            </div>
                        </div>
                    </div>

                    <div className="row bg-light rounded-pill m-5 p-2 ps-3">
                        <div className="col-1">
                            <b className='admin-customer-order-list-list '>1.</b>
                        {/* <b>{index + 1}.</b> */}
                        </div>
                        <div className="col-2 admin-customer-order-list-list ps-3">Joy Shop</div>
                        <div className="col-2 admin-customer-order-list-list ps-4">Sharik Non</div>
                        <div className="col-3 admin-customer-order-list-list ps-4 ">shariknon@gmail.com</div>
                        <div className="col-2 admin-customer-order-list-list">9087564309</div>
                        <div className="col-2 admin-customer-order-list-list ps-5">&#8377;115</div>
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ShopownerWholesaleDealerList
