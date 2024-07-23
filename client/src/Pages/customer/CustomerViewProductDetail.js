import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import { HiOutlineShoppingCart } from "react-icons/hi";
import axiosInstance from "../../APIS/axiosinstatnce";
import axiosMultipartInstance from "../../APIS/axiosMultipartInstance";
import plus from "../../images/plus.png";
import minus from "../../images/minus.png";

function CustomerViewProductDetail({ url }) {
  const [data, setData] = useState({});
  const { productid } = useParams();

  const increment = () => {
    setData((prevData) => ({
      ...prevData,
      quantity: (prevData.quantity || 1) + 1,
      Tprice: ((prevData.quantity || 1) + 1) * prevData.price,
    }));
  };

  const decrement = () => {
    setData((prevData) => ({
      ...prevData,
      quantity: prevData.quantity > 1 ? prevData.quantity - 1 : 1,
      Tprice: (prevData.quantity > 1 ? prevData.quantity - 1 : 1) * prevData.price,
    }));
  };

  const navigate = useNavigate();

  useEffect(() => {
    if (
      localStorage.getItem("token") == null &&
      localStorage.getItem("customer") == null
    ) {
      navigate("/login");
    }
  }, [navigate]);

  const addToCart = () => {
    axiosInstance
      .post(`/addtocart`, {
        customerId: localStorage.getItem("customer"),
        productId: data._id,
        quantity: data.quantity || 1,
      })
      .then((res) => {
        alert("Product Added On Cart");
        console.log("Product added to cart:", res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    axiosMultipartInstance
      .post(`/view_a_product/${productid}`)
      .then((res) => {
        setData({ ...res.data.data, quantity: 1 });
        console.log(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [productid]);  

  console.log(data);
  return (
    <div>
      <div>
        <Link to="/customerviewshop">
          <FaArrowLeftLong className="text-dark ms-5 mt-5" />
        </Link>
      </div>
      <div className="customer-viewproduct-details-divbox container">
        <div className="row mt-5 mb-5">
          <div className="col">
            <div className="mt-3 customer-viewproduct-details-imgbox ">
              <img
                className="customer-viewproduct-details-img"
                src={`${url}${data.productimage?.filename}`}
                alt={data.productname}
              ></img>
            </div>
            <div className="text-center">
              <button onClick={addToCart} className="customer-viewproduct-details-cartbtn">
                <HiOutlineShoppingCart /> Add to Cart
              </button>
            </div>
          </div>
          <div className="col ms-5">
            <div className="mt-5">
              <h5 className="customer-viewproduct-details-h5">
                Product Brand :
                <span className="ms-2 customer-viewproduct-details-span">
                  {data.brand}
                </span>
              </h5>
            </div>
            <div className="mt-4">
              <h2 className="customer-viewproduct-details-h2">
                {data.productname}
              </h2>
              <p className="customer-viewproduct-details-p">(150kg)</p>
            </div>
            <div className="mt-4">
              <h2 className="customer-viewproduct-details-h2">
                <b>&#8377; {data.Tprice ? data.Tprice : data.price}</b>
              </h2>
            </div>
            <div className="row mt-5">
              <div className="col mt-2">
                <h1 className="customer-viewproduct-details-h2">Qty</h1>
              </div>
              <div className="col">
                <button
                  className="shopowner-viewproduct-minusbtn mt-4"
                  onClick={decrement}
                >
                  <img src={minus} alt="minus"></img>
                </button>
              </div>
              <div className="col">
                <label className="mt-3 customer-viewproduct-details-h2label">
                  {data.quantity}
                </label>
              </div>
              <div className="col">
                <button
                  className="shopowner-viewproduct-plusbtn mt-3"
                  onClick={increment}
                >
                  <img src={plus} alt="plus"></img>
                </button>
              </div>
            </div>
            <div className="mt-5">
              <h5 className="customer-viewproduct-details-h2">Expiry :</h5>
              <div className="customer-viewproduct-details-expirybox mt-3">
                <div className="customer-viewproduct-details-secondbox">
                  <label>{data.expirydate}</label>
                </div>
              </div>
            </div>
            <div className="customer-viewproduct-details-desbox mt-5">
              <div className="customer-viewproduct-details-desbox2">
                <h5 className="customer-viewproduct-details-h2">Description</h5>
                <p className="customer-viewproduct-details-h2 mt-3">
                  {data.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerViewProductDetail;
