import React, { useEffect, useState } from "react";
import "./shopowner.css";
import { Link } from "react-router-dom";
import { BsBoxes } from "react-icons/bs";
import { FaRegSquarePlus } from "react-icons/fa6";
import { MdNoSim } from "react-icons/md";
import axiosInstance from "../../APIS/axiosinstatnce";
import Footer from "../Footer";
import dummymale from "../../images/dummy-male.png";

function ShopownerHomepage() {
  const [products, setProducts] = useState([]);
  const [added, setAdded] = useState([]);
  const [unsold, setUnsold] = useState([]);
  const [ShopOwner, setShopOwner] = useState();

  const shopownerid = localStorage.getItem("shopowner");

  useEffect(() => {
    axiosInstance
      .post("/view_all_productbyshopowner/" + shopownerid)
      .then((res) => {
        console.log(res);
        if (res.data.data != null) setProducts(res.data.data);
        else setProducts([]);
      });

    axiosInstance
      .post("/getTodayAddedProducts", { shopownerid: shopownerid })
      .then((res) => {
        console.log(res);
        if (res.data.data != null) setAdded(res.data.data);
        else setAdded([]);
      });

    axiosInstance
      .post("/getTotalProductQuantity/" + shopownerid)
      .then((res) => {
        console.log(res);
        if (res.data != null) setUnsold(res.data);
        else setUnsold([]);
      });

    getData();
  }, []);

  const getData = () => {
    axiosInstance
      .post("/viewRecentOrdersByShopOwner/" + shopownerid)
      .then((res) => {
        console.log(res.data.data, "pp");
        const pendingOrders = res.data.data.filter(
          (order) => order.order.orderStatus === "pending"
        );
        setShopOwner(pendingOrders);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
  return (
    <div>
      <div className="shop-dash-color mt-5">
        <section className="pt-5">
          <div className="row container-fluid">
            <div className="col-12 col-sm-6 col-md-3 mb-4">
              <Link className="shop-dash-link">
                <div>
                  <h5 className="shop-dash-h5-1">
                    <BsBoxes /> Total Products
                  </h5>
                </div>
                <div className="revenue__box">
                  <BsBoxes className="shop-dash-icon" />
                  <br></br>
                  <br></br>
                  <span>
                    {products.length > 0 ? products.length : 0}
                    <p className="shop-dash-para">Items</p>
                  </span>
                </div>
              </Link>
            </div>
            <div className="col-12 col-sm-6 col-md-3 mb-4">
              <Link className="shop-dash-link">
                <div>
                  <h5 className="shop-dash-h5-2">
                    <FaRegSquarePlus /> Recently Added products
                  </h5>
                </div>
                <div className="order__box">
                  <FaRegSquarePlus className="shop-dash-icon" />
                  <br></br>
                  <br></br>
                  <span>
                    {added.length}
                    <p className="shop-dash-para">Items</p>
                  </span>
                </div>
              </Link>
            </div>
            <div className="col-12 col-sm-6 col-md-3 mb-4">
              <Link className="shop-dash-link">
                <div>
                  <h5 className="shop-dash-h5-3">
                    <MdNoSim /> Unsold Items
                  </h5>
                </div>
                <div className="products__box">
                  <MdNoSim className="shop-dash-icon" />
                  <br></br>
                  <br></br>
                  <span>
                    {unsold.totalQuantity}
                    <p className="shop-dash-para">Items</p>
                  </span>
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
                  <h1 className="text-center"> No request Found Found</h1>
                )}
                {ShopOwner?.length > 0 && (
                  <div>
                    <h3 className="text-center pt-4">Recent order requests</h3>
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
                          You Have New Request From{" "}
                          <b>{item.order.customer.name} </b> In{" "}
                          {item.order.customer.district}{" "}
                        </div>
                        <div className="col-1">
                          <button className="rounded-pill px-3 border-none">
                            <Link
                              className="text-decoration-none text-dark"
                              to={"/wholesalershopownernewrequest"}
                            >
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
  );
}

export default ShopownerHomepage;
