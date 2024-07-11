import React, { useState } from 'react'
import { HiOutlineShoppingCart } from 'react-icons/hi'
import { Link } from 'react-router-dom'
import chocolate from '../../images/chocolate.png'
import plus from "../../images/plus.png";
import minus from "../../images/minus.png";
import { FaArrowLeftLong } from 'react-icons/fa6';
function Shopownerwdviewproduct() {

    const[count,setCount]=useState(1)

    const increment = () => {
        setCount(count+1)
    }
    const decrement = () => {
        if(count > 0){
            setCount(count-1)
        }
    }
  return (
    <div>
      <div>
        <Link to="/shopownerviewwdproductview">
          <FaArrowLeftLong className="text-dark ms-5 mt-5" />
        </Link>
      </div>
      <div className="customer-viewproduct-details-divbox container">
        <div className="row mt-5 mb-5">
          <div className="col">
            <div className="mt-3 customer-viewproduct-details-imgbox ">
              <img
                src={chocolate}
                className="customer-viewproduct-details-img"
                // src={`${url}${data.productimage?.filename}`}
                // alt={data.productname}
              ></img>
            </div>
            <div className="text-center">
              <button  className="customer-viewproduct-details-cartbtn">
                <HiOutlineShoppingCart /> Add to Cart
              </button>
            </div>
          </div>
          <div className="col ms-5">
            <div className="mt-5">
              <h5 className="customer-viewproduct-details-h5">
                Product Brand :
                <span className="ms-2 customer-viewproduct-details-span">
                    Amul
                  {/* {data.brand} */}
                </span>
              </h5>
            </div>
            <div className="mt-4">
              <h2 className="customer-viewproduct-details-h2">
                chocolate
                {/* {data.productname} */}
              </h2>
              <p className="customer-viewproduct-details-p">(150kg)</p>
            </div>
            <div className="mt-4">
              <h2 className="customer-viewproduct-details-h2">
                {/* <b>&#8377; {data.Tprice ? data.Tprice : data.price}</b> */}
                <b>&#8377; 200</b>
              </h2>
            </div>
            <div className="row mt-5">
              <div className="col mt-2">
                <h1 className="customer-viewproduct-details-h2">Qty</h1>
              </div>
              <div className="col">
                <button
                  className="shopowner-viewproduct-minusbtn mt-4"
                  onClick={decrement}
                >
                  <img src={minus} alt="minus"></img>
                </button>
              </div>
              <div className="col">
                <label className="mt-3 customer-viewproduct-details-h2label">
                    {count}
                  {/* {data.quantity} */}
                </label>
              </div>
              <div className="col">
                <button
                  className="shopowner-viewproduct-plusbtn mt-3"
                  onClick={increment}
                >
                  <img src={plus} alt="plus"></img>
                </button>
              </div>
            </div>
            <div className="mt-5">
              <h5 className="customer-viewproduct-details-h2">Expiry :</h5>
              <div className="customer-viewproduct-details-expirybox mt-3">
                <div className="customer-viewproduct-details-secondbox">
                    <label>12/09/2026</label>
                  {/* <label>{data.expirydate}</label> */}
                </div>
              </div>
            </div>
            <div className="customer-viewproduct-details-desbox mt-5">
              <div className="customer-viewproduct-details-desbox2">
                <h5 className="customer-viewproduct-details-h2">Description</h5>
                <p className="customer-viewproduct-details-h2 mt-3">
                With orange extracts from the Netherlands infused in intense dark 
                chocolate made from the finest cocoa beans, Amul Tropical Orange 
                surprise with a taste that's absolutely unforgettable.
                  {/* {data.description} */}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Shopownerwdviewproduct
