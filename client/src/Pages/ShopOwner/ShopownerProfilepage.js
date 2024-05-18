import React, { useEffect, useState } from "react";
import axiosInstance from "../../APIS/axiosinstatnce";
import { Link, useNavigate } from "react-router-dom";

function ShopownerProfilepage({ url }) {
  console.log(url.url.url);

  const [data, setData] = useState({});

  const shopownerid = localStorage.getItem("shopowner");

  useEffect(() => {
    axiosInstance
      .get("/get_a_shopowner/" + shopownerid)
      .then((res) => {
        setData(res.data.data);
        console.log(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [data]);

  const Navigate=useNavigate()
  const gotoEdit=(e)=>{
    e.preventDefault()
    Navigate("/shopownerprofileedit")
  }
  return (
    <div className="shopownerprofile pt-5 mt-5">
      <div>
        <div className="shopownerprofilepage">
          <div className="row container d-flex justify-content-center">
            <div className="">
              <div className=" user-card-full">
                <div className="shopownerprofilepagediv">
                  <div className="row   shopownerprofilepagediv1">
                    <div className="col-sm-4 bg-c-lite-green user-profile">
                      <div className="card-block text-center text-white">
                        <div className="">
                          <img
                            className="mt-3 mb-3"
                            src={`${url.url.url}${data.shoplisence}`}
                            style={{
                              width: "80%",
                              height: "250px",
                              borderRadius: "5%",
                              boxShadow:"rgba(0, 0, 0, 0.65) 0px 5px 15px"
                            }}
                          ></img>
                        </div>
                        <div>
                          <button className="btn btn-dark px-5 " onClick={gotoEdit}> Edit </button>
                          
                        </div>
                        <i className=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16" />
                      </div>
                    </div>
                    <div className="col-sm-8">
                      <div className="card-block">
                        <h6 className="mt-5 mb-5 fs-4 text-center">Information</h6>
                        <div className="row">
                          <div className="col-sm-6">
                            <p className="m-b-10 f-w-600">Shop Owner Name:</p>
                            <h6 className="text-muted f-w-400">
                              {data.shopownername}
                            </h6>
                          </div>
                          <div className="col-sm-6">
                            <p className="m-b-10 f-w-600">Shop Name:</p>
                            <h6 className="text-muted f-w-400">
                              {data.shopname}
                            </h6>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-sm-6">
                            <p className="m-b-10 f-w-600">
                              Shop Registration Number:
                            </p>
                            <h6 className="text-muted f-w-400">
                              {data.shopregistrationnumber}
                            </h6>
                          </div>
                          <div className="col-sm-6">
                            <p className="m-b-10 f-w-600">Shopowner Contact:</p>
                            <h6 className="text-muted f-w-400">
                              {data.shopownercontact}
                            </h6>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-sm-6">
                            <p className="m-b-10 f-w-600">Shopowner Address:</p>
                            <h6 className="text-muted f-w-400">
                              {data.shopowneraddress}
                            </h6>
                          </div>
                          <div className="col-sm-6">
                            <p className="m-b-10 f-w-600">Shopowner Email:</p>
                            <h6 className="text-muted f-w-400">
                              {data.shopowneremail}
                            </h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShopownerProfilepage;
