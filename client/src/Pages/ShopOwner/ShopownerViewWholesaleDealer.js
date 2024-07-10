import React, { useEffect, useState } from 'react';
import './shopowner.css';
import ShopOwnerSidebar from './ShopOwnerSidebar';
import WholesaleAllDealerViewpage from '../wholesaledealer/WholesaleAllDealerViewpage';
import axiosInstance from '../../APIS/axiosinstatnce';
import { PiHandTapBold } from "react-icons/pi";
import { Link } from 'react-router-dom';
function ShopownerViewWholesaleDealer() {

    const [data, setData] = useState([]);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    
    useEffect(() => {
        axiosInstance.get('/get_all_wholesaledealer')
        .then((res) => {
            if(res.data.data === 200){
                setData(res.data.data || [])
            }
            else{
                setData([]);
            }
        })
        .catch((err) => {
            console.log(err);
        })
    })

  return (
    <div>
      <div className='row'>
        <div className='col-2'>
            <ShopOwnerSidebar/>
        </div>
        <div className='col-9'>
        <div className="wholesale-alldealer-viewpage-div1 mt-2">
        {data?.length === 0 && (
          <div className="pt-3">
            <h1 className="text-center "> No Wholesale Dealer Found</h1>
          </div>
        )}
        {data?.length > 0 && (
          <div>
            <h3 className="text-center pt-4 wholesale-alldealer-viewpage-h3">
              Wholesale Dealer List
            </h3>
            <div className="row rounded-pill m-5 p-2 container">
              <div className="col-1">
                <b>Sl/No</b>
              </div>
              <div className="col-2">
                <b>Dealer Name</b>
              </div>
              <div className="col-2">
                <b>Store Name</b>
              </div>
              <div className="col-2">
                <b>Email Id</b>
              </div>
              <div className="col-2">
                <b>Contact</b>
              </div>
              <div className="col-2">
                <b> </b>
              </div>
            </div>
            {data.map((wholesaledealer, index) => (
              <div className="row bg-light rounded-pill m-5 p-2" key={wholesaledealer._id}>
                <div className="col-1">
                  <b>{ index + 1}.</b>
                </div>
                <div className="col-2">{wholesaledealer.dealername}</div>
                <div className="col-2">{wholesaledealer.storeName}</div>
                <div className="col-2">{wholesaledealer.email}</div>
                <div className="col-2 ms-5">{wholesaledealer.contact}</div>
                <div className="col-1">
                    <Link to=''>
                        <button
                            className="rounded-pill px-3 border-none ms-5"
                            id="wholesale-alldealer-viewpage-viewbtn"
                        >
                            View Product<PiHandTapBold className='ms-2'/>
                        </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )} 
      </div>
        </div>
      </div>
    </div>
  )
}

export default ShopownerViewWholesaleDealer
