import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import search from "../../images/search.png";
import chocolate from '../../images/chocolate.png'
import ShopOwnerSidebar from './ShopOwnerSidebar';
function DealerComparion() {

  const [searchQuery, setSearchQuery] = useState("");
  const navigate=useNavigate();

  // useEffect(() => {
  //   if (
  //     localStorage.getItem("shopownertoken") == null &&
  //     localStorage.getItem("shopowner") == null
  //   ) {
  //     navigate("/shopownerlogin");
  //   }
  // }, [navigate]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className='row'>
      <div className='col-2 ms-5'>
        <ShopOwnerSidebar/>
      </div>
      <div className='col-9'>
      <div className="customer-viewproduct-back">
        <div className="text-center pt-2">
          <h2 className="customer-viewproduct-h2">Products</h2>
        </div>
        <div className="row">
          <div className="col">
            
          </div>
          <div className="col"></div>
          <div className="col"></div>
          <div className="col">
            <div className="me-5" style={{ position: "relative" }}>
              <input
                type="text"
                className="shopowner-viewproduct-label ps-3"
                placeholder="Search Product"
                value={searchQuery}
                onChange={handleSearchChange}
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
          {/* {filteredData.map((item) => ( */}
            {/* <div key={item._id} className="col-md-2 mb-4"> */}
              <Card className="">
                <div className="ms-3 mt-3">
                  <label className="shopowner-viewproduct-labelcard ps-3">
                    {/* {item.productname} */}
                    Amul
                  </label>
                </div>
                <div>
                    <Link to='/shopownerWDlist'>
                  {/* <Link to={`/customerviewproductdetail/${item._id}`}> */}
                    <img
                    src={chocolate}
                    //   src={`${url}${item.productimage.filename}`}
                      // alt={item.productname}
                      className="customershoownerProductimg"
                    ></img>
                  </Link>
                  <label>
                    Amul Dark chocolate<br></br>
                    <b>(150kg)</b>
                  </label>
                </div>
              </Card>
            </div>
          {/* ))} */}
        </div>
      </div>
      </div>
    
  )
}

export default DealerComparion
