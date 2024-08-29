import React, { useEffect, useState } from "react";
import "../ShopOwner/shopowner.css";
import { Link } from "react-router-dom";
import { BsBoxes } from "react-icons/bs";
import { FaRegSquarePlus } from "react-icons/fa6";
import { MdNoSim } from "react-icons/md";
import dummymale from "../../images/dummy-male.png"
import axiosInstance from "../../APIS/axiosinstatnce";

function DeliveryagentHomepage() {
  const[deliveryRequests,setDeliveryRequests]=useState([])
  const[shoponerDeliveryRequests,setshoponerDeliveryRequests]=useState([])

  const [ShopOwner, SetShopOwner] = useState([]);
  const [Wholesaler, SetWholesaler] = useState([]);

  const agentId = localStorage.getItem("deliveryagent");

  const getDeliveryRequests = async () => {
    try {
      
      const response = await axiosInstance.post(`/getAllwholesalerdeliveryRequestsbyagentid/${agentId}`);
      // console.log(response,"k");
      const assignedRequests = response.data.filter(
        (request) => request.deliveryStatus == "assigned"
      );

      // Update the state with the filtered delivery requests
      setDeliveryRequests(assignedRequests);
    } catch (error) {
      console.error("Error fetching delivery requests:", error);
    }
  };

  console.log(deliveryRequests,",,,");
  

  const getshopownerDeliveryRequests = async () => {
    try {
      const response = await axiosInstance.get(`/deliveryRequests/${agentId}`);
      const assignedRequests = response.data.filter(
        (request) => request.deliveryStatus == "assigned"
      );

      // Update the state with the filtered delivery requests
      setshoponerDeliveryRequests(assignedRequests);
    } catch (error) {
      console.error("Error fetching delivery requests:", error);
    }
  };
  useEffect (() => {
    getDeliveryRequests()
    getshopownerDeliveryRequests()

    getData()
    getWholesalerData()
  },[])


const getData = async() => {
  try {
    const response = await axiosInstance.get(`/getResentDeliveryRequests/${agentId}`);
    const assignedRequests = response.data.filter(
      (request) => request.deliveryStatus == "assigned"
    );

    // Update the state with the filtered delivery requests
    SetShopOwner(assignedRequests);
  } catch (error) {
    console.error("Error fetching delivery requests:", error);
  }
  };

  console.log(ShopOwner,"m000");
  
  console.log(Wholesaler,"000");
  const getWholesalerData = async() => {
    try {
      const response = await axiosInstance.get(`/getResentWholesalerDeliveryRequests/${agentId}`);
      const assignedRequests = response.data.filter(
        (request) => request.deliveryStatus == "assigned"
      );
  
      // Update the state with the filtered delivery requests
      SetWholesaler(assignedRequests);
    } catch (error) {
      console.error("Error fetching delivery requests:", error);
    }
    };
  
    console.log(SetWholesaler,"w");
  return (


    <div className="">
    <div className="shop-dash-color mt-5">
      <section className="pt-5">
        <div className="row ">
          <div className="col-12 col-sm-6 col-md-3 mb-4 ms-5">
          <Link className="shop-dash-link">
            <div>
            <h5 className="shop-dash-h5-1"><BsBoxes/> ShopOwner Requests</h5>
            </div>
              <div className="revenue__box">
              <BsBoxes className="shop-dash-icon"/>
              <br></br><br></br>
                <span>
                  {(shoponerDeliveryRequests.length) > 0 ? shoponerDeliveryRequests.length:0}
                  <p className="shop-dash-para">Items</p>
                </span>
              </div>
            </Link>
          </div>
          <div className="col-12 col-sm-6 col-md-3 mb-4">
          <Link className="shop-dash-link">
            <div>
            <h5 className="shop-dash-h5-2"><FaRegSquarePlus/> Wholesaler Requests</h5>
            </div>
              <div className="order__box">
              <FaRegSquarePlus className="shop-dash-icon"/>
              <br></br><br></br>
                <span>{deliveryRequests.length}<p className="shop-dash-para">requests</p></span>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>

    <section className="mt-5">
          <div>
            <div className="col-9 ms-5">
              <div className="">
                <div className="">
                  {ShopOwner?.length === 0 && (
                    <h1 className="text-center"> No shopowner recent request Found</h1>
                  )}
                  {ShopOwner?.length > 0 && (
                    <div>
                      <h3 className="text-center pt-4">
                        Recent Shopowner order requests
                      </h3>
                      {ShopOwner.map((item, index) => (
                        <div
                          className="row bg-light rounded-pill m-5 p-2"
                          key={item._id}
                        >
                         
                           <div className="col-1">
                            <img
                              src={dummymale}
                              className="shopowner-customerorder-request-img"
                              alt="mm"
                              style={{ width: "50px", height: "50px" }}
                            />
                          </div>
                          <div className="col-9">
                            You Have New Request From{" "}{item?.shopOwner?.shopownername} in  {item?.shopOwner?.shopownerdistrict}
                            
                          </div>
                          <div className="col-1">
                            <button className="rounded-pill px-3 border-none">
                              <Link className="text-decoration-none text-dark" to={"/deliveryagentdeliveryrequest"}>
                                View
                              </Link>
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

<hr></hr>
        <section className="mt-5">
          <div>
            <div className="col-9 ms-5">
              <div className="">
                <div className="">
                  {deliveryRequests?.length === 0 && (
                    <h1 className="text-center"> No Wholesaler recent request Found</h1>
                  )}
                  {deliveryRequests?.length > 0 && (
                    <div>
                      <h3 className="text-center pt-4">
                        Recent Shopowner order requests
                      </h3>
                      {deliveryRequests?.map((item, index) => (
                        <div
                          className="row bg-light rounded-pill m-5 p-2"
                          key={item?._id}
                        >
                         
                           <div className="col-1">
                            <img
                              src={dummymale}
                              className="shopowner-customerorder-request-img"
                              alt="mm"
                              style={{ width: "50px", height: "50px" }}
                            />
                          </div>
                          <div className="col-9">
                            You Have New Request From{" "}{item?.wholesaledealer?.dealername} in  {item?.wholesaledealer?.districts}
                            
                          </div>
                          <div className="col-1">
                            <button className="rounded-pill px-3 border-none">
                              <Link className="text-decoration-none text-dark" to={"/viewWholesalerdeliveryrequest"}>
                                View
                              </Link>
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

  </div>

  )
}

export default DeliveryagentHomepage
