import React, { useState, useEffect } from "react";
import "./shopowner.css";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
import sprite from "../../images/sprite.png";
import axiosInstance from "../../APIS/axiosinstatnce";
import Button from "react-bootstrap/Button";
import ShopOwnerSidebar from "./ShopOwnerSidebar";

function ShopownerViewProduct({ url }) {
  const [data, setData] = useState([]);
  const [filteredData, setfilteredData] = useState([]);
  useEffect(() => {
    axiosInstance
      .post("/view_all_product")
      .then((res) => {
        setData(res.data.data);
        setfilteredData(res.data.data);
        console.log(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });  
  }, []);
  const navigate=useNavigate()
  const handleViewproduct=(productid)=>{
    navigate("/shopownerviewproductdetails/"+productid)
  }

  const handleFilter = (e) => {
    console.log(e.target.value);
    if (e.target.value) {
      var filter = data.filter((item) => {
        return item.category == e.target.value;
      });
      setfilteredData(filter);
    } else {
      setfilteredData(data);
    }
  };
  return (
    <div>
    <div >
      {/* <div className="col-2">
        <ShopOwnerSidebar/>
      </div> */}
      <div className="me-5">
      <div>
      
      <div className="text-center">
        <h2 className="shopowner-viewproduct-h2">View Products</h2>
      </div>
      <div className="shopowner-viewproduct-divbox container">
        <div>
          <select
            className="ms-3 mt-5 shopowner-viewproduct-select"
            onChange={handleFilter}
          >
            <option value=""> Choose Category</option>
            <option value="Cookies">Cookies</option>
            <option value="Fruits">Fruits</option>
            <option value="Milk Products">Milk Products</option>
          </select>
        </div>
        <div className="row mt-4">
          {filteredData.map((item) => (
            <div className="col-6 col-md-4 col-lg-3 col-xl-2 mb-4">
              <Card className="shopowner-viewproduct-card">
                <label className="m-2">{item.productname}</label>
                <Card.Img
                  className="shopowner-viewproduct-cardimg mt-3"
                  src={`${url}${item.productimage.filename}`}
                />
                <div className="shopowner-viewproduct-button">
                  <button onClick={()=>handleViewproduct(item._id)}  className="shopowner-viewproduct-viewbtn me-4 mt-2 mb-3">
                    View
                  </button>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>

      </div>
    </div>
  </div>
  );
}

export default ShopownerViewProduct;
