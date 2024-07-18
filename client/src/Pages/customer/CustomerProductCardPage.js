import React, { useEffect, useState } from "react";
import "./customer.css";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import axiosInstance from "../../APIS/axiosinstatnce";
import minus from "../../images/minus.png";
import plus from "../../images/plus.png";

function CustomerProductCardPage({ url }) {
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
      .post(`/viewCustomercart/` + localStorage.getItem("customer"))
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
      .post("/deleteitemfromcart", {
        customerId: localStorage.getItem("customer"),
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

  const ReservedProduct = () => {
    alert("Product Reserved");
    var total=0;
    var pid = [];
    var cid = [];
    data.forEach((item) => {
      total = total + item.product?.price * item.quantity;
      var temp = {};
      temp.pid = item.product?._id;
      temp.quantity = item.quantity;
      pid.push(temp);
      cid.push(item._id)
    });
    const orderData = {
      customerId: localStorage.getItem("customer"),
      productId: pid,
      orderType: "reserved",
      totalAmount: total,
      paymentStatus: "pending",
      cid:cid,
      deliveryStatus:"pending"
    };
    axiosInstance
      .post("/placeorder", orderData)
      .then((res) => {
        alert(res.data.message);
        navigate('/customerordervieworder');
        // Optionally, you can update the UI or redirect the user after placing the order
      })
      .catch((err) => {
        console.log(err);
      });
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
      setErrors((prevErrors) => ({
        ...prevErrors,
        Expirydate: "Expiry date must be in the future",
      }));
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
      var total=0;
      var pid = [];
      var cid = [];
      data.forEach((item) => {
        total = total + item.product?.price * item.quantity;
        var temp = {};
        temp.pid = item.product._id;
        temp.quantity = item.quantity;
        cid.push(item._id)
        pid.push(temp);
      });

      const orderData = {
        customerId: localStorage.getItem("customer"),
        productId: pid,
        orderType: "delivery request",
        totalAmount: total,
        paymentStatus: "completed",
        cid:cid,
        deliveryStatus:"pending"
      };
      console.log(orderData,"k");
      axiosInstance
        .post("/placeorder", orderData)
        .then((res) => {
          alert(res.data.message);
          navigate('/customerordervieworder');
          // Optionally, you can update the UI or redirect the user after placing the order
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const updateQ = (item,action)=> {
    if (item.quantity >= 1){
    axiosInstance
    .post(`/addtocart`, {
      customerId: localStorage.getItem("customer"),
      productId: item.product._id,
      quantity:action=='dec'? -1 : 1,
    })
    .then((res) => {
    //  alert(res.data.message)
     viewData();
      console.log("Product added to cart:", res.data);
    })
    .catch((err) => {
      console.log(err);
    });}
  }

  return (
    <div>
      <div>
        <Link to="/customerviewshop">
          <FaArrowLeftLong className="text-dark ms-5 mt-5" />
        </Link>
      </div>
      <div className="customerproduct-cardpage-divbox container">
        <div className="row ms-5 mt-5">
          <div className="col-7">
            <div>
              <input
                type="text"
                placeholder="From Saved Addresses"
                className="customerproduct-cardpage-textbox ps-3"
              />
            </div>

            {data.map((item) => (
              
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
            ))}
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
                <button
                  onClick={ReservedProduct}
                  className="customerproduct-cardpage-reqbtn ms-5"
                >
                  Reserved Product
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

export default CustomerProductCardPage;
