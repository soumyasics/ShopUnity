import React, { useState } from 'react'
import '../ShopOwner/shopowner.css'
import { Link, useNavigate } from 'react-router-dom';
import sprite from '../../images/sprite.png'
import { FaArrowLeftLong } from "react-icons/fa6";
function WholesaleDealerViewProductDetails() {

    const [data, setData] = useState({});


    const navigate=useNavigate()
    
  return (
    <div>
      <div>
        <Link to='/wholesalerviewproduct' className='ms-5 mt-2 text-dark shopowner-viewproductdetails-link'>
            <FaArrowLeftLong />
        </Link>
      </div>
      <div className='shopowner-viewproductdetails-boxdiv container'>
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
            <button className='shopowner-viewproductdetails-editbtn'  >Edit</button>
        </div>
      </div>
    </div>
  )
}

export default WholesaleDealerViewProductDetails
