import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import search from "../../images/search.png";
import chocolate from '../../images/chocolate.png'
import ShopOwnerSidebar from './ShopOwnerSidebar';
import { HiOutlineShoppingCart } from 'react-icons/hi';
import plus from '../../images/plus.png'
import minus from '../../images/minus.png'
import axiosInstance from '../../APIS/axiosinstatnce';
function DealerComparion({url}) {

  const [searchQuery, setSearchQuery] = useState("");
  const[data,setData]=useState([])
  const navigate=useNavigate();

  useEffect(() => {
    axiosInstance.post(`/view_all_product_bywholesale`)
    .then((res) => {
      if(res.status === 200){
        setData(res.data.data)
        console.log(res.data.data);
      }
    })
    .catch((err) => {
      console.log(err);
    })
    console.log(data);
  },[])

  useEffect(() => {
    if (
      localStorage.getItem("shopownertoken") == null &&
      localStorage.getItem("shopowner") == null
    ) {
      navigate("/shopownerlogin");
    }
  }, []);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className='row'>
      <div className='col-2 ms-5'>
        <ShopOwnerSidebar/>
      </div>
      <div className="col-9 ms-5 mt-1 customer-viewproduct-back p-5">
        <div className="text-center ">
          <h2 className="customer-viewproduct-h2">Products</h2>
        </div>
        <div className="row">
          <div className="col"></div>
          <div className="col"></div>
          <div className="col"></div>
          <div className="col">
            <div className="" style={{ position: "relative" }}>
              <input
                type="text"
                className="shopowner-viewproduct-label ps-1"
                placeholder="Search Product"
                value={searchQuery}
                onChange={handleSearchChange}
              ></input>
              <button
                className="shopowner-viewproduct-imgbtn1 ms-5"
                style={{ position: "absolute" }}
              >
                <img
                  src={search}
                  className="shopowner-viewproduct-imgbtn"
                  alt="search"
                ></img>
              </button>
            </div>
          </div>
        </div>
        <div className="row mt-3">
          {data.map((item) => (
            <div  className="col-md-4 mb-4">
              <Card>
                <div className="ms-3 mt-3">
                  <label className="shopowner-viewproduct-labelcard ps-3">
                    {item.productname}
                  </label>
                </div>
                <div>
                  <Link>
                  {/* <Link to={`/shopownerwdviewproduct/${item._id}`}> */}
                    <img
                      src={`${url}${item.productimage.filename}`}
                      alt={item.productname}
                      className="customershoownerProductimg"
                    ></img>
                  </Link>
                </div>
                <div className="ms-4">
                  <label className="shopowner-viewproduct-b">
                    <b></b>
                    <br></br>
                  </label>
                  <br></br>
                  <label className="shopowner-viewproduct-b">
                    <b>&#8377;{item.price}</b>
                  </label>
                </div>
                <div className='row'>
                  <div className='col-5'>
                    <div>
                      <label>Store Name</label>
                    </div>
                    <div>
                      <label>District</label>
                    </div>
                    <div>
                      <label>Dealer Name</label>
                    </div>
                  </div>
                  <div className='col-1'>
                    <div>
                      <label>:</label>
                    </div>
                    <div>
                      <label>:</label>
                    </div>
                    <div>
                      <label>:</label>
                    </div>
                  </div>
                  <div className='col-6'>
                    <div>
                        <label>{item?.wholesaledealer?.storeName}</label>
                      </div>
                      <div>
                        <label>{item?.wholesaledealer?.districts}</label>
                      </div>
                      <div>
                        <label>{item?.wholesaledealer?.dealername}</label>
                      </div>
                    </div>
                  <div>
                  </div>
                </div>
              </Card>
            </div>
           ))} 
       </div>
      </div>
      </div>
    
  )
}

export default DealerComparion
