import React, { useEffect, useState } from "react";
import "../ShopOwner/shopowner.css";
import { Link } from "react-router-dom";
import { BsBoxes } from "react-icons/bs";
import { FaRegSquarePlus } from "react-icons/fa6";
import { MdNoSim } from "react-icons/md";
import axiosInstance from "../../APIS/axiosinstatnce";
function WholesaleHome() {
    const[products,setProducts]=useState([])
    const[added,setAdded]=useState([])
    const[unsold,setUnsold]=useState([])

    useEffect (() => {
      const wholesalerid=localStorage.getItem("wholesaledealer")
      axiosInstance.post("/view_all_product_bywholesale",wholesalerid)
      .then((res) => {
        console.log(res);
        if(res.data.data!=null)
          setProducts(res.data.data);
        else
          setProducts([])
      });
  
      axiosInstance.post("/getTodayAddedwholesalerProducts",wholesalerid)
    .then((res) => {
      console.log(res);
      if(res.data.data!=null)
        setAdded(res.data.data);
      else
      setAdded([])
    });

    axiosInstance.post("/getTotalwholesalerProductQuantity",wholesalerid)
    .then((res) => {
      console.log(res);
      if(res.data!=null)
        setUnsold(res.data);
      else
      setUnsold([])
    });

    },[])
  
  return (
    <div className="mt-5 pt-3 me-5">
    <div className="container"> 
    <div className="shop-dash-color mt-5">
      <section className="pt-5">
        <div className="row container-fluid">
          <div className="col-12 col-sm-6 col-md-3 mb-4">
          <Link className="shop-dash-link">
            <div>
            <h5 className="shop-dash-h5-1"><BsBoxes/> Total Products</h5>
            </div>
              <div className="revenue__box">
              <BsBoxes className="shop-dash-icon"/>
              <br></br><br></br>
                <span>
                {(products.length) > 0 ? products.length:0}
                  <p className="shop-dash-para">Items
                  </p>
                </span>
              </div>
            </Link>
          </div>
          <div className="col-12 col-sm-6 col-md-3 mb-4">
          <Link className="shop-dash-link">
            <div>
            <h5 className="shop-dash-h5-2"><FaRegSquarePlus/> Recently Added Items</h5>
            </div>
              <div className="order__box">
              <FaRegSquarePlus className="shop-dash-icon"/>
              <br></br><br></br>
                <span>{added.length}<p className="shop-dash-para">Items</p></span>
              </div>
            </Link>
          </div>
          <div className="col-12 col-sm-6 col-md-3 mb-4">
          <Link className="shop-dash-link">
            <div>
            <h5 className="shop-dash-h5-3"><MdNoSim/> Unsold Items</h5>
            </div>
              <div className="products__box">
              <MdNoSim className="shop-dash-icon"/>
              <br></br><br></br>
                <span>{unsold.totalQuantity}<p className="shop-dash-para">Items</p></span>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  </div>

    </div>
  )
}

export default WholesaleHome
