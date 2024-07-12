import React from 'react'
import ShopOwnerSidebar from './ShopOwnerSidebar'
import minus from "../../images/minus.png";
import plus from "../../images/plus.png";
function ShopownerOrderProductCart() {
  return (
    <div className='row'>
        <div className='col-2'>
            <ShopOwnerSidebar/>
        </div>
        <div className='col-9'>
        <div className="customerproduct-cardpage-divbox container ms-5">
        <div className="row ms-5 mt-5">
          <div className="col-7">
            <div>
              <input
                type="text"
                placeholder="From Saved Addresses"
                className="customerproduct-cardpage-textbox ps-3"
              />
            </div>

            {/* {data.map((item) => ( */}
              
              <div
                // key={item.product?._id}
                className="customerproduct-cardpage-2productview my-5"
              >


              


                <div>
                  <div className="row">
                    <div className="col mt-2">
                      <img
                        // src={`${url}/${item.product?.productimage?.filename}`}
                        className="ms-2"
                        style={{ width: "255px", height: "275px" }}
                      />
                      <div className="row p-4">
                      <div className="col-3">
                      <button
                        className="shopowner-viewproduct-minusbtn"
                        // onClick={() => updateQ(item,'dec')}
                      >
                        <img src={minus} alt="minus"></img>
                      </button>
                    </div>
                    <div className="col-1">
                      {/* <label>{item.quantity}</label> */}
                    </div>
                    <div className="col-2">
                      <button
                        className="shopowner-viewproduct-plusbtn"
                        // onClick={() => updateQ(item,'inc')}
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
                            {/* {item.product?.brand} */}
                          </b>
                        </h6>
                      </div>
                      <div className="mt-3">
                        <h4 className="customerproduct-cardpage-h6">
                          {/* {item.product?.productname} */}
                        </h4>
                        <label className="customerproduct-cardpage-h6"></label>
                      </div>
                      <div className="mt-4">
                        <b className="customerproduct-cardpage-h6">
                          &#8377; 200
                          {/* {item.product?.price} */}
                        </b>
                        
                      </div>
                      <div className="text-end me-5 pt-5 mt-5">
                        <h4
                          className="customerproduct-cardpage-h6"
                        //   onClick={() => handleRemoveItem(item.product?._id)}
                        >
                          Remove
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            {/* // ))} */}
          </div>
          <div className="col-5">
            <div className="customerproduct-cardpage-2columndiv">
              <div className="text-center mt-2">
                <h6 className="customerproduct-cardpage-h61">Cart Items</h6>
              </div>
              <hr />
              <div className="row ms-5">
                <div className="col">
                  {/* {data.map((item) => ( */}
                    <label
                    //   key={item.product?._id}
                      className="customerproduct-cardpage-h6"
                    >
                      {/* {item.product?.productname} x {item.quantity} */}
                    </label>
                {/* //   ))} */}
                </div>
                <div className="col">
                  {/* {data.map((item) => ( */}
                    <label
                    //   key={item.product?._id}
                      className="customerproduct-cardpage-h6"
                    >
                      &#8377; 200
                      {/* {item.product?.price * item.quantity} */}
                    </label>
                  {/* ))} */}
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
                    &#8377; 200
                    {/* {totalAmount} */}
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
                //   onClick={RequestedDelivery}
                >
                  Request Delivery
                </button>
                <button
                //   onClick={ReservedProduct}
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
                        // onChange={handleChange}
                        // value={cardData.NameonCard}
                        placeholder="Cardholder Name"
                      ></input>
                      {/* {errors.NameonCard && (
                        <div className="text-danger">{errors.NameonCard}</div>
                      )} */}
                    </div>
                  </div>
                  <div className="ms-3 mb-3">
                    <h6 className="customerproduct-cardpage-h6">Card Number</h6>
                    <div className="customerproduct-cardpage-namebox mb-3">
                      <input
                        type="text"
                        className="ms-3 mt-3 customerproduct-cardpage-textbox1"
                        name="CardNumber"
                        // onChange={handleChange}
                        // value={cardData.CardNumber}
                        placeholder="Card Number"
                      ></input>
                      {/* {errors.CardNumber && (
                        <div className="text-danger">{errors.CardNumber}</div>
                      )} */}
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
                        // onChange={handleChange}
                        // value={cardData.CVV}
                      ></input>
                      {/* {errors.CVV && (
                        <div className="text-danger">{errors.CVV}</div>
                      )} */}
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
                        // onChange={handleChange}
                        // value={cardData.Expirydate}
                      ></input>
                      {/* {errors.Expirydate && (
                        <div className="text-danger">{errors.Expirydate}</div>
                      )} */}
                    </div>
                  </div>
                  <div className="text-center">
                    <button
                      className="customerproduct-cardpage-submitbtn"
                    //   onClick={handleSubmit}
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
    </div>
  )
}

export default ShopownerOrderProductCart
