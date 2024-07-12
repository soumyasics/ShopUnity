import React, { useState } from 'react'
import search from "../../images/search.png";
import Card from "react-bootstrap/Card";
import minus from "../../images/minus.png";
import plus from "../../images/plus.png";
import { Link } from 'react-router-dom';
import { HiOutlineShoppingCart } from "react-icons/hi";
import chocolate from '../../images/chocolate.png'
import ShopOwnerSidebar from './ShopOwnerSidebar';
function ShopownerViewWDProductView() {

  const [data, setData] = useState([]);
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
    <div className='row'>
      <div className='col-2'>
        <ShopOwnerSidebar/>
      </div>
      <div className='col-9'>
      <div className="customer-viewproduct-back">
        <div className="text-center pt-2">
          <h2 className="customer-viewproduct-h2">Products</h2>
        </div>
        <div className="row">
          <div className="col">
            <select className="ms-5 shopowner-viewproduct-select">
              <option>Select Category</option>
              <option>Cookies</option>
              <option>Fruits</option>
              <option>Milk Products</option>
            </select>
          </div>
          <div className="col"></div>
          <div className="col"></div>
          <div className="col">
            <div className="me-5" style={{ position: "relative" }}>
              <input
                type="text"
                className="shopowner-viewproduct-label ps-3"
                placeholder="Search Product"
                // value={searchQuery}
                // onChange={handleSearchChange}
              ></input>
              <button
                className="shopowner-viewproduct-imgbtn1 ms-5"
                style={{ position: "absolute" }}
              >
                <img src={search} className="shopowner-viewproduct-imgbtn"></img>
              </button>
            </div>
          </div>
        </div>
        <div className="row mt-3 container ms-2">
          {/* {filteredData.map((item, index) => ( */}
            <div  className="col-md-2 mb-4">
            {/* key={item._id} */}
              <Card className="">
                <div className="ms-3 mt-3">
                  <label className="shopowner-viewproduct-labelcard ps-3">
                    {/* {item.productname} */}
                  </label>
                </div>
                <div>
                  <Link to='/shopownerwdviewproduct'>
                  {/* ${item._id} */}
                    <img
                      src={chocolate}
                      // src={`${url}${item.productimage.filename}`}
                      // alt={item.productname}
                      className="customershoownerProductimg"
                    ></img>
                  </Link>
                </div>
                <div className="ms-4">
                  <label className="shopowner-viewproduct-b">
                    {/* <b>{item.productname}</b> */}
                    <b>Chocolate</b>
                    <b>Amul</b>
                    <br></br>
                  </label>
                  <br></br>
                  <label className="shopowner-viewproduct-b">
                    {/* <b>&#8377; {item.Tprice ? item.Tprice : item.price}</b> */}
                    <label>&#8377; 200</label>
                  </label>
                </div>
                <div className="ms-4 mb-3">
                  <div className="row">
                    <div className="col-2">
                      <label className="shopowner-viewproduct-b">
                        <b>Qty</b>
                      </label>
                    </div>
                    <div className="col-3">
                      <button
                        className="shopowner-viewproduct-minusbtn"
                        onClick={decrement}
                        // onClick={() => decrement(item)}
                      >
                        <img src={minus} alt="minus"></img>
                      </button>
                    </div>
                    <div className="col-1">
                      {/* <label>{item.quantity}</label> */}
                      <label className='ms-2'>{count}</label>
                    </div>
                    <div className="col-2">
                      <button
                        className="shopowner-viewproduct-plusbtn"
                        onClick={increment}
                        // onClick={() => increment(item)}
                      >
                        <img src={plus} alt="plus"></img>
                      </button>
                    </div>
                  </div>
                  <div className="mt-3">
                    <button
                      className="btn btn-dark shopowner-viewproduct-cartbtn"
                      // onClick={() => addToCart(item)}
                    >
                      <HiOutlineShoppingCart /> Add to Cart
                    </button>
                  </div>
                </div>
              </Card>
            </div>
          {/* ))} */}
        </div>
      </div>
      </div>
    </div>
  )
}

export default ShopownerViewWDProductView
