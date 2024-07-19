import React, { useEffect, useState } from "react";
import "./shopowner.css";
import search from "../../images/search.png";
import Card from "react-bootstrap/Card";
import minus from "../../images/minus.png";
import plus from "../../images/plus.png";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { Link, useNavigate, useParams } from "react-router-dom";
import axiosInstance from "../../APIS/axiosinstatnce";
import ShopOwnerSidebar from "./ShopOwnerSidebar";

function ShopownerViewproductList({ url }) {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    axiosInstance
      .post("/view_all_product_bywholesale")
      .then((res) => {
        const productsWithQuantity = res.data.data.map((product) => ({
          ...product,
          quantity: 1,
          Tprice: product.price,
        }));
        setData(productsWithQuantity);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const increment = (item) => {
    const updatedData = data.map((product) =>
      product._id === item._id
        ? {
            ...product,
            quantity: product.quantity + 1,
            Tprice: (product.quantity + 1) * product.price,
          }
        : product
    );
    setData(updatedData);
  };

  const decrement = (item) => {
    const updatedData = data.map((product) =>
      product._id === item._id && product.quantity > 1
        ? {
            ...product,
            quantity: product.quantity - 1,
            Tprice: (product.quantity - 1) * product.price,
          }
        : product
    );
    setData(updatedData);
  };

  const addToCart = (item) => {
    axiosInstance
      .post(`/shopowneraddtocart`, {
        shopowner: localStorage.getItem("shopowner"),
        productId: item._id,
        quantity: item.quantity,
      })
      .then((res) => {
        alert(res.data.message);
        console.log("Product added to cart:", res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredData = data.filter((product) =>
    product.productname.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="row">
      <div className="col-2">
        <ShopOwnerSidebar />
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
          {filteredData.map((item, index) => (
            <div key={item._id} className="col-md-3 mb-4">
              <Card>
                <div className="ms-3 mt-3">
                  <label className="shopowner-viewproduct-labelcard ps-3">
                    {item.productname}
                  </label>
                </div>
                <div>
                  <Link to={`/shopownerwdviewproduct/${item._id}`}>
                    <img
                      src={`${url}${item.productimage.filename}`}
                      alt={item.productname}
                      className="customershoownerProductimg"
                    ></img>
                  </Link>
                </div>
                <div className="ms-4">
                  <label className="shopowner-viewproduct-b">
                    <b>{item.productname}</b>
                    <br></br>
                  </label>
                  <br></br>
                  <label className="shopowner-viewproduct-b">
                    <b>&#8377; {item.Tprice}</b>
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
                        onClick={() => decrement(item)}
                      >
                        <img src={minus} alt="minus"></img>
                      </button>
                    </div>
                    <div className="col-1">
                      <label>{item.quantity}</label>
                    </div>
                    <div className="col-2">
                      <button
                        className="shopowner-viewproduct-plusbtn"
                        onClick={() => increment(item)}
                      >
                        <img src={plus} alt="plus"></img>
                      </button>
                    </div>
                  </div>
                  <div className="mt-3">
                    <button
                      className="btn btn-dark shopowner-viewproduct-cartbtn"
                      onClick={() => addToCart(item)}
                    >
                      <HiOutlineShoppingCart /> Add to Cart
                    </button>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ShopownerViewproductList;
