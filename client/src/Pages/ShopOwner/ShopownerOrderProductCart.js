import React, { useEffect, useState } from "react";
import "./shopowner.css";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import axiosInstance from "../../APIS/axiosinstatnce";
import minus from "../../images/minus.png";
import plus from "../../images/plus.png";
import ShopOwnerSidebar from "./ShopOwnerSidebar";

function ShopownerOrderProductCart({ url }) {
  const [data, setData] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  const [cardData, setCardData] = useState({
    CardNumber: "",
    Expirydate: "",
    CVV: "",
    NameonCard: "",
  });

  const [errors, setErrors] = useState({
    CardNumber: "",
    Expirydate: "",
    CVV: "",
    NameonCard: "",
  });

  useEffect(() => {
    if (
      localStorage.getItem("shopownertoken") == null &&
      localStorage.getItem("shopowner") == null
    ) {
      navigate("/shopownerlogin");
    }
  }, []);
  
  const handleChange = (event) => {
    const { name, value } = event.target;
    setCardData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const viewData = () => {
    axiosInstance
      .post(`/viewshopownercart/`+localStorage.getItem("shopowner"))
      .then((res) => {
        console.log(res.data.data);
        setData(res.data.data);
        calculateTotalAmount(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const calculateTotalAmount = (items) => {
    const total = items.reduce(
      (sum, item) => sum + item.product?.price * item.quantity,
      0
    );
    setTotalAmount(total);
  };

  useEffect(() => {
    viewData();
  }, []);

  const handleRemoveItem = (id) => {
    axiosInstance
      .post("/deleteitemfromshopownercart", {
        shopowner: localStorage.getItem("shopowner"),
        productId: id,
      })
      .then((res) => {
        alert(res.data.message);
        viewData();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const RequestedDelivery = () => {
    document.getElementById("paymenthide").style.display = "block";
  };

  
  const navigate = useNavigate();

  const handleSubmit = () => {
    const { CardNumber, Expirydate, CVV, NameonCard } = cardData;
  
    const enteredDateObj = new Date(Expirydate);
    const currentDate = new Date();
  
    let valid = true;
  
    if (NameonCard.length <= 3) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        NameonCard: "Name on card must be longer than 3 characters",
      }));
      valid = false;
    }
  
    if (CardNumber.length !== 16 || !/^\d{16}$/.test(CardNumber)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        CardNumber: "Card number must be 16 digits",
      }));
      valid = false;
    }
      if (enteredDateObj <= currentDate) {
        errors.Expirydate = "Expiry date must be in the future";
        valid = false;
      }
    
  
    if (CVV.length !== 3 || !/^\d{3}$/.test(CVV)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        CVV: "CVV must be 3 digits",
      }));
      valid = false;
    }
  
    if (valid) {
      let total = 0;
      let pid = [];
      let sid = [];
      let wholesaledealers = [];
  
      data.forEach((item) => {
        total += item.product?.price * item.quantity;
        let temp = {
          pid: item.product._id,
          quantity: item.quantity,
        };
        sid.push(item._id);
        pid.push(temp);
        if (item.product?.wholesaledealer) {
          wholesaledealers.push(item.product.wholesaledealer);
        }
      });
  
      const orderData = {
        shopownerid: localStorage.getItem("shopowner"),
        productId: pid,
        orderType: "delivery request",
        totalAmount: total,
        paymentStatus: "completed",
        sid: sid,
        deliveryStatus: "pending",
        wholesaledealers: wholesaledealers
      };
  
      console.log(orderData, "k");
  
      axiosInstance
        .post("/shopownerplaceorder", orderData)
        .then((res) => {
          alert(res.data.message);
          navigate('/shopownerviewwdproductslist');
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };


  const updateQ = (item, action) => {
    const quantityChange = action === "dec" ? -1 : 1;
    const newQuantity = item.quantity + quantityChange;
  
    if (item.quantity === 1 && action === "dec") {
      alert("Only 1 product is available. You cannot reduce the quantity further.");
      return; 
    }
  
    if (newQuantity >= 0) {
      axiosInstance
        .post(`/shopowneraddtocart`, {
          shopowner: localStorage.getItem("shopowner"),
          productId: item.product._id,
          quantity:action=='dec'? -1 : 1,
        })
        .then((res) => {
          viewData();
          console.log("Product added to cart:", res.data);
        })
        .catch((err) => {
          console.error("Error updating cart:", err);
        });
    } else {
      alert("Item quantity is empty, please remove the item from your cart");
      handleRemoveItem();
    }
  };

  // const updateQ = (item,action)=> {
  //   if (item.quantity >= 1){
  //   axiosInstance
  //   .post(`/shopowneraddtocart`, {
  //     shopowner: localStorage.getItem("shopowner"),
  //     productId: item.product._id,
  //     quantity:action=='dec'? -1 : 1,
  //   })
  //   .then((res) => {
  //   //  alert(res.data.message)
  //    viewData();
  //     console.log("Product added to cart:", res.data);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   })
  // }
  //   else if(item.quantity >= 0){
  //     alert("product quantity get's empty please remove from your cart")
  //   }  
  // }
  

  return (
    <div className="row">
      <div className="col-2" >
        <ShopOwnerSidebar/>
      </div>
      <div className="col-9 customerproduct-cardpage-divbox ms-5 mt-5 ">
        <div className="row ms-5 mt-5">
          <div className="col-7">
            <div>
              <input
                type="text"
                placeholder="From Saved Addresses"
                className="customerproduct-cardpage-textbox ps-3"
              />
            </div>

            {data.length > 0
          ?data.map((item) => (
              
              <div
                key={item.product?._id}
                className="customerproduct-cardpage-2productview my-5"
              >


                <div>
                  <div className="row">
                    <div className="col mt-2">
                      <img
                        src={`${url}${item.product?.productimage?.filename}`}
                        className="ms-2"
                        style={{ width: "255px", height: "275px" }}
                      />
                      <div className="row p-4">
                      <div className="col-3" onClick={() => updateQ(item,'dec')}>
                      <button
                        className="shopowner-viewproduct-minusbtn"
                        
                      >
                        <img src={minus} alt="minus"></img>
                      </button>
                    </div>
                    <div className="col-1">
                      <label>{item.quantity}</label>
                    </div>
                    <div className="col-2" onClick={() => updateQ(item,'inc')}>
                      <button
                        className="shopowner-viewproduct-plusbtn"
                        
                      >
                        <img src={plus} alt="plus"></img>
                      </button>
                    </div></div>
                    </div>
                    <div className="col mt-3">
                      <div>
                        <h6 className="customerproduct-cardpage-h6">
                          Brand Name:
                          <b className="ms-2 customerproduct-cardpage-b">
                            {item.product?.brand}
                          </b>
                        </h6>
                      </div>
                      <div className="mt-3">
                        <h4 className="customerproduct-cardpage-h6">
                          {item.product?.productname}
                        </h4>
                        <label className="customerproduct-cardpage-h6"></label>
                      </div>
                      <div className="mt-4">
                        <b className="customerproduct-cardpage-h6">
                          &#8377; {item.product?.price}
                        </b>
                        
                      </div>
                      <div className="text-end me-5 pt-5 mt-5">
                        <h4
                          className="customerproduct-cardpage-h6"
                          onClick={() => handleRemoveItem(item.product?._id)}
                        >
                          Remove
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )): <div className="text-center"> Cart is Empty</div>}
          </div>
          <div className="col-5">
            <div className="customerproduct-cardpage-2columndiv">
              <div className="text-center mt-2">
                <h6 className="customerproduct-cardpage-h61">Cart Items</h6>
              </div>
              <hr />
              <div className="row ms-5">
                <div className="col">
                  {data.map((item) => (
                    <label
                      key={item.product?._id}
                      className="customerproduct-cardpage-h6"
                    >
                      {item.product?.productname} x {item.quantity}
                    </label>
                  ))}
                </div>
                <div className="col">
                  {data.map((item) => (
                    <label
                      key={item.product?._id}
                      className="customerproduct-cardpage-h6"
                    >
                      &#8377; {item.product?.price * item.quantity}
                    </label>
                  ))}
                </div>
              </div>
              <hr className="text-dark" />
              <div className="row ms-5">
                <div className="col">
                  <label className="customerproduct-cardpage-h6">
                    Total Amount
                  </label>
                </div>
                <div className="col">
                  <label className="customerproduct-cardpage-h6">
                    &#8377; {totalAmount}
                  </label>
                </div>
              </div>
              <hr />
              <div className="text-center">
                <label className="customerproduct-cardpage-label">
                  Place Order
                </label>
              </div>
              <div className="text-center">
                <button
                  className="customerproduct-cardpage-reqbtn"
                  onClick={RequestedDelivery}
                >
                  Request Delivery
                </button>
              </div>

              <div id="paymenthide" style={{ display: "none" }}>
                <div className="mt-3">
                  <button className="customerproduct-cardpage-paymentbtn">
                    Payment
                  </button>
                </div>
                <div className="mt-3 ">
                  <div className="ms-3 mb-3">
                    <h6 className="customerproduct-cardpage-h6">
                      Cardholder Name
                    </h6>
                    <div className="customerproduct-cardpage-namebox mb-3">
                      <input
                        type="text"
                        className="ms-3 mt-3 customerproduct-cardpage-textbox1"
                        name="NameonCard"
                        onChange={handleChange}
                        value={cardData.NameonCard}
                        placeholder="Cardholder Name"
                      ></input>
                      {errors.NameonCard && (
                        <div className="text-danger">{errors.NameonCard}</div>
                      )}
                    </div>
                  </div>
                  <div className="ms-3 mb-3">
                    <h6 className="customerproduct-cardpage-h6">Card Number</h6>
                    <div className="customerproduct-cardpage-namebox mb-3">
                      <input
                        type="text"
                        className="ms-3 mt-3 customerproduct-cardpage-textbox1"
                        name="CardNumber"
                        onChange={handleChange}
                        value={cardData.CardNumber}
                        placeholder="Card Number"
                      ></input>
                      {errors.CardNumber && (
                        <div className="text-danger">{errors.CardNumber}</div>
                      )}
                    </div>
                  </div>
                  <div className="ms-3 mb-3">
                    <h6 className="customerproduct-cardpage-h6">CVV</h6>
                    <div className="customerproduct-cardpage-namebox mb-3">
                      <input
                        type="text"
                        className="ms-3 mt-3 customerproduct-cardpage-textbox1"
                        placeholder="CVV"
                        name="CVV"
                        onChange={handleChange}
                        value={cardData.CVV}
                      ></input>
                      {errors.CVV && (
                        <div className="text-danger">{errors.CVV}</div>
                      )}
                    </div>
                  </div>
                  <div className="ms-3 mb-3">
                    <h6 className="customerproduct-cardpage-h6">Expiry Date</h6>
                    <div className="customerproduct-cardpage-namebox mb-3">
                      <input
                        type="date"
                        className="ms-3 mt-3 customerproduct-cardpage-textbox1"
                        placeholder="Expiry date"
                        name="Expirydate"
                        onChange={handleChange}
                        value={cardData.Expirydate}
                        min={new Date().toISOString().split("T")[0]}
                      ></input>
                      {errors.Expirydate && (
                        <div className="text-danger">{errors.Expirydate}</div>
                      )}
                    </div>
                  </div>
                  <div className="text-center">
                    <button
                      className="customerproduct-cardpage-submitbtn"
                      onClick={handleSubmit}
                    >
                      Submit
                    </button>
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

export default ShopownerOrderProductCart;
