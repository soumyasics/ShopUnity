import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { FaArrowLeftLong } from "react-icons/fa6";
import chocolate from '../../images/chocolate.png'
import coco1 from '../../images/coco1.png'
import coco2 from '../../images/coco2.png'
import coco3 from '../../images/coco3.png'
import plus from '../../images/plus.png'
import minus from '../../images/minus.png'
import { HiOutlineShoppingCart } from "react-icons/hi";
import axiosInstance from '../../APIS/axiosinstatnce';
import axiosMultipartInstance from '../../APIS/axiosMultipartInstance';

function CustomerViewProductDetail({url}) {

  const [count,setCount]=useState(1)
  const[data,setData]=useState([]);
  const {productid}=useParams()
  const increment = () => {
    setCount(count+1)
  }

  const decrement = () => {
    if(count > 0){
      setCount(count-1)
    }
  }

//  useEffect(() => {
//   axiosMultipartInstance.post(`/view_a_product/${productid}`)
//   .then((res) => {
//     setData(res.data.data)
//     console.log(res.data.data);
//   })
//   .catch((err) => {
//     console.log(err);
//   })
//  },[])
  
  return (
    <div>
      <div>
        <Link to='/customerviewproduct'>
            <FaArrowLeftLong className='text-dark ms-5 mt-5' />
        </Link>
      </div>
      <div className='customer-viewproduct-details-divbox container'>
      {data.map ((item) => (
        <div className='row mt-5 mb-5'>
          <div className='col'>
            
            <div className='mt-3 customer-viewproduct-details-imgbox '>
              <img className="customer-viewproduct-details-img" src={`${url}${item.productimage.filename}`}></img>
            </div>
            <div className='row '>
              <div className='col mt-3'>
                <img src={coco1} className='customer-viewproduct-details-cocoimg'></img>
              </div>
              <div className='col mt-3'>
                <img src={coco2} className='customer-viewproduct-details-cocoimg'></img>
              </div>
              <div className='col '>
                <img src={coco3} className='customer-viewproduct-details-coco3img'></img>
              </div>
            </div>
            <div className='text-center'>
              <button className='customer-viewproduct-details-cartbtn'><HiOutlineShoppingCart/> Add to Cart</button>
            </div>
          </div>
          <div className='col ms-5'>
            <div className='mt-5'>
              <h5 className='customer-viewproduct-details-h5'>Product Brand :<span className='ms-2 customer-viewproduct-details-span'>{item.brand}</span></h5>
            </div>
            <div className='mt-4'>
              <h2 className='customer-viewproduct-details-h2'>{item.productname}</h2>
              <p className='customer-viewproduct-details-p'>(150kg)</p>
            </div>
            <div className='mt-4'>
              <h2 className='customer-viewproduct-details-h2'>&#8377; {item.price}</h2>
            </div>
            <div className='row mt-5'>
              <div className='col mt-2'>
                <h1 className='customer-viewproduct-details-h2'>Qty</h1>
              </div>
              <div className='col'>
                <button className='shopowner-viewproduct-minusbtn mt-4' onClick={decrement}><img src={minus}></img></button>
              </div>
              <div className='col'>
                <label className='mt-3 customer-viewproduct-details-h2label'>{count}</label>
              </div>
              <div className='col'>
                <button className='shopowner-viewproduct-plusbtn mt-3' onClick={increment}><img src={plus}></img></button>
              </div>
            </div>
            <div className='mt-5'>
              <h5 className='customer-viewproduct-details-h2'>Expiry :</h5>
              <div className='customer-viewproduct-details-expirybox mt-3'>
                <div className='customer-viewproduct-details-secondbox'>
                  <label>{item.expirydate}</label>
                </div>
              </div>
            </div>
            <div className='customer-viewproduct-details-desbox mt-5'>
              <div className='customer-viewproduct-details-desbox2'>
                <h5 className='customer-viewproduct-details-h2'>Description</h5>
                <p className='customer-viewproduct-details-h2 mt-3'>{item.description}
                </p>
              </div>
            </div>
          </div>

          
        </div>
      ))}
      </div>
    </div>
  )
}

export default CustomerViewProductDetail
