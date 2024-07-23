import React, { useEffect, useState } from "react";
import "./shopowner.css";
import ShopOwnerSidebar from "./ShopOwnerSidebar";
import axiosInstance from "../../APIS/axiosinstatnce";
import { PiHandTapBold } from "react-icons/pi";
import { Link, useNavigate } from "react-router-dom";

function ShopownerViewWholesaleDealer() {
  const [data, setData] = useState([]);
  const [selectDistrict, setSelectDistrict] = useState("");
  const navigate=useNavigate()
  const shopowner = localStorage.getItem("shopowner");

  useEffect(() => {
    if (
      localStorage.getItem("shopownertoken") == null &&
      localStorage.getItem("shopowner") == null
    ) {
      navigate("/shopownerlogin");
    }
  }, [navigate]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch the customer district
        const customerResponse = await axiosInstance.get(`/get_a_shopowner/${shopowner}`);
        const shopownerDistrict = customerResponse.data.data.shopownerdistrict;
        setSelectDistrict(shopownerDistrict);
        console.log("Customer Data:", shopownerDistrict);

        // Fetch all shop owners and filter based on district
        const shopOwnersResponse = await axiosInstance.get("/get_all_accepted_wholesaledealer");
        const filteredShopOwners = shopOwnersResponse.data.data.filter(
          (wholesale) => wholesale.districts === shopownerDistrict
        );
        setData(filteredShopOwners);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  console.log(data);
  return (
    <div>
      <div className="row">
        <div className="col-2">
          <ShopOwnerSidebar />
        </div>
        <div className="col-9">
          <div className="wholesale-alldealer-viewpage-div1 mt-2">
            {data.length === 0 && (
              <div className="pt-3">
                <h1 className="text-center">No Wholesale Dealer Found</h1>
              </div>
            )}
            {data.length > 0 && (
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
                  <div key={index} className="row bg-light rounded-pill m-5 p-2">
                    <div className="col-1">
                      <b>{index + 1}.</b>
                    </div>
                    <div className="col-2">{wholesaledealer.dealername}</div>
                    <div className="col-2">{wholesaledealer.storeName}</div>
                    <div className="col-2">{wholesaledealer.email}</div>
                    <div className="col-2">{wholesaledealer.contact}</div>
                    <div className="col-2">
                      <Link to={`/shopownerviewwdproductview/${wholesaledealer._id}`}>
                        <button
                          className="rounded-pill px-3 border-none"
                          id="wholesale-alldealer-viewpage-viewbtn"
                        >
                          View Product
                          <PiHandTapBold className="ms-2" />
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
  );
}

export default ShopownerViewWholesaleDealer;
