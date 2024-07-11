import React, { useState } from 'react'
import '../ShopOwner/shopowner.css'
import { Link, useNavigate } from 'react-router-dom';
import sprite from '../../images/sprite.png'
import { FaArrowLeftLong } from "react-icons/fa6";
import WholesaleDealerSidebar from './WholesaleDealerSidebar';
function WholesaleDealerViewProductDetails() {

    const [data, setData] = useState({});


    const navigate=useNavigate()
    
  return (
    <div className='row'>
        <div className='col-2'>
            <WholesaleDealerSidebar/>
        </div>
        <div className='col-9 pt-5'>
      <div className='shopowner-viewproductdetails-boxdiv container ms-5 '>
        <div className='row'>
            <div className='col-8'>
                <div className='text-center mt-5'>
                    <h1 className='shopowner-viewproductdetails-h1'>View Details</h1>
                </div>
                <div className='row container ms-5 mt-5'>
                    <div className='col-5'>
                        <label className='shopowner-viewproductdetailslabel'>Category</label>
                    </div>
                    <div className='col-2'>
                        <label className='shopowner-viewproductdetailslabel'>:</label>
                    </div>
                    <div className='col-5'>
                        <label className='shopowner-viewproductdetailslabel1'> </label>
                    </div>
                </div>
                <div className='row container ms-5 mt-5'>
                    <div className='col-5'>
                        <label className='shopowner-viewproductdetailslabel'>Product Name</label>
                    </div>
                    <div className='col-2'>
                        <label className='shopowner-viewproductdetailslabel'>:</label>
                    </div>
                    <div className='col-5'>
                        <label className='shopowner-viewproductdetailslabel1'></label>
                    </div>
                </div>
                <div className='row container ms-5 mt-5'>
                    <div className='col-5'>
                        <label className='shopowner-viewproductdetailslabel'>Product Brand</label>
                    </div>
                    <div className='col-2'>
                        <label className='shopowner-viewproductdetailslabel'>:</label>
                    </div>
                    <div className='col-5'>
                        <label className='shopowner-viewproductdetailslabel1'></label>
                    </div>
                </div>
                <div className='row container ms-5 mt-5'>
                    <div className='col-5'>
                        <label className='shopowner-viewproductdetailslabel'>Expriy</label>
                    </div>
                    <div className='col-2'>
                        <label className='shopowner-viewproductdetailslabel'>:</label>
                    </div>
                    <div className='col-5'>
                        <label className='shopowner-viewproductdetailslabel1'></label>
                    </div>
                </div>
                <div className='row container ms-5 mt-5'>
                    <div className='col-5'>
                        <label className='shopowner-viewproductdetailslabel'>Description</label>
                    </div>
                    <div className='col-2'>
                        <label className='shopowner-viewproductdetailslabel'>:</label>
                    </div>
                    <div className='col-5'>
                        <label className='shopowner-viewproductdetailslabel1'></label>
                    </div>
                </div>
                <div className='row container ms-5 mt-5'>
                    <div className='col-5'>
                        <label className='shopowner-viewproductdetailslabel'>Quantity</label>
                    </div>
                    <div className='col-2'>
                        <label className='shopowner-viewproductdetailslabel'>:</label>
                    </div>
                    <div className='col-5'>
                        <label className='shopowner-viewproductdetailslabel1'></label>
                    </div>
                </div>
                <div className='row container ms-5 mt-5'>
                    <div className='col-5'>
                        <label className='shopowner-viewproductdetailslabel'>Price</label>
                    </div>
                    <div className='col-2'>
                        <label className='shopowner-viewproductdetailslabel'>:</label>
                    </div>
                    <div className='col-5'>
                        <label className='shopowner-viewproductdetailslabel1'>&#8377; </label>
                    </div>
                </div>
            </div>
            <div className='col-4'>
                <div className='shopowner-viewproductdetails-imgdiv '>
                    <img src={sprite}></img>
                </div>
            </div>
            
        </div>
        <div className='text-center'>
            <Link to='/wholesalereditproduct'>
                <button className='shopowner-viewproductdetails-editbtn'>Edit</button>
            </Link>
        </div>
      </div>
      </div>
    </div>
  )
}

export default WholesaleDealerViewProductDetails
