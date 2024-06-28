import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import "./deliveryagent.css";
import { useNavigate } from "react-router-dom";

function DeliveryAgentRegistration() {

  const[data,setData]=useState({
    
  })
  
  return (
    // <div>
    //   <div className="row">
    //     <div className="col-6 container">
    //       <img className="wholesale-dealer-reg-img" src={wholesaledealerreg} alt="img"></img>
    //     </div>
    //     <div className="col-6 container">
    //     <div className="wholesale-dealer-reg-box container">
    //       <h1 className="wholesale-dealer-reg-h1 mt-2 text-center">WholeSale Dealer Register</h1>
    //       <form onSubmit={handleSubmit}>
    //         <div className="row">
    //           <div className=" col-6 container">
    //             <div className="input-box mt-3">
    //                   {" "}
    //                   <label className="wholesale-dealer-register-label ms-2">
    //                     Store Name
    //                   </label>{" "}
    //                   <input
    //                     type="text"
    //                     placeholder="Store Name"
    //                     className="form-control m-2 wholesale-dealer-register-textbox " 
    //                     name="storename"
    //                     value={data.storename}
    //                     onChange={handleChange}
    //                   />
    //                   {errors.storename && <span className="text-danger">{errors.storename}</span>}
    //                 </div>
    //                 <div className="input-box mt-3">
    //                   {" "}
    //                   <label className="wholesale-dealer-register-label ms-2">
    //                     Dealer Name
    //                   </label>{" "}
    //                   <input
    //                     type="text"
    //                     placeholder="Dealer Name"
    //                     className="form-control m-2 wholesale-dealer-register-textbox" 
    //                     name="dealername"
    //                     value={data.dealername}
    //                     onChange={handleChange}
    //                   />
    //                   {errors.dealername && <span className="text-danger">{errors.dealername}</span>}
    //                 </div>
    //                 <div className="input-box mt-3">
    //                   {" "}
    //                   <label className="wholesale-dealer-register-label ms-2">
    //                     Address
    //                   </label>{" "}
    //                   <input
    //                     type="text"
    //                     placeholder="Address"
    //                     className="form-control m-2 wholesale-dealer-register-textbox" 
    //                     name="address"
    //                     value={data.address}
    //                     onChange={handleChange}
    //                   />
    //                   {errors.address && <span  className="text-danger">{errors.address}</span>}
    //                 </div>
    //                 <div className="input-box mt-3">
    //                   {" "}
    //                   <label className="container font" id="font">
    //                     District
    //                   </label>{" "}
    //                   <select
    //                     className="form-select m-2  wholesale-dealer-register-textbox"
    //                     name="districts"
    //                     value={data.districts}
    //                     onChange={handleChange}
    //                   >
    //                     <option>Select District</option>
    //                     {districts.map((district, index) => (
    //                       <option key={index} value={district}>
    //                         {district}
    //                       </option>
    //                     ))}
    //                   </select>
    //                   {errors.districts && <span  className="text-danger">{errors.districts}</span>}
    //                 </div>
    //                 <div className="input-box mt-3">
    //                   {" "}
    //                   <label className="wholesale-dealer-register-label ms-2">
    //                     City
    //                   </label>{" "}
    //                   <input
    //                     type="text"
    //                     placeholder="City"
    //                     className="form-control m-2 wholesale-dealer-register-textbox" 
    //                     name="city"
    //                     value={data.city}
    //                     onChange={handleChange}
    //                   />
    //                   {errors.city && <span  className="text-danger">{errors.city}</span>}
    //                 </div>
    //                 <div className="input-box mt-3">
    //                   {" "}
    //                   <label className="wholesale-dealer-register-label ms-2">
    //                     Pincode
    //                   </label>{" "}
    //                   <input
    //                     type="text"
    //                     placeholder="Pincode"
    //                     className="form-control m-2 wholesale-dealer-register-textbox" 
    //                     name="pincode"
    //                     value={data.pincode}
    //                     onChange={handleChange}
    //                   />
    //                   {errors.pincode && <span  className="text-danger">{errors.pincode}</span>}
    //                 </div>

    //           </div>
    //           <div className=" col-6 container">
    //             <div className="input-box mt-3">
    //                   {" "}
    //                   <label className="wholesale-dealer-register-label ms-2" >
    //                     Contact Number
    //                   </label>{" "}
    //                   <input
    //                     type="text"
    //                     placeholder="Contact Number"
    //                     className="form-control m-2 wholesale-dealer-register-textbox" 
    //                     name="contact"
    //                     value={data.contact}
    //                     onChange={handleChange}

    //                   />
    //                   {errors.contact && <span  className="text-danger">{errors.contact}</span>}
    //               </div>
    //               <div className="input-box mt-3">
    //                   {" "}
    //                   <label className="wholesale-dealer-register-label ms-2" >
    //                     Email ID
    //                   </label>{" "}
    //                   <input
    //                     type="text"
    //                     placeholder="Email id"
    //                     className="form-control m-2 wholesale-dealer-register-textbox" 
    //                     name="email"
    //                     value={data.email}
    //                     onChange={handleChange}
    //                   />
    //                   {errors.email && <span  className="text-danger">{errors.email}</span>}
    //               </div>
    //               <div className="input-box mt-3">
    //                   {" "}
    //                   <label className="wholesale-dealer-register-label ms-2" >
    //                     Registration Number
    //                   </label>{" "}
    //                   <input
    //                     type="text"
    //                     placeholder="Registration Number"
    //                     className="form-control m-2 wholesale-dealer-register-textbox" 
    //                     name="wholesaleregisternumber"
    //                     value={data.wholesaleregisternumber}
    //                     onChange={handleChange}
    //                   />
    //                   {errors.wholesaleregisternumber && <span className="text-danger">{errors.wholesaleregisternumber}</span>}
    //               </div>
    //               <div className="input-box mt-3">
    //                   {" "}
    //                   <label className="wholesale-dealer-register-label ms-2" >
    //                     Dealer License
    //                   </label>{" "}
    //                   <input
    //                     type="file"
    //                     placeholder="Dealer License"
    //                     className="form-control m-2 wholesale-dealer-register-textbox" 
    //                     name="dealerlisence"
    //                     onChange={handleFileChange}
    //                   />
    //                   {/* {errors.dealerlisence && <span className="text-danger">{errors.dealerlisence}</span>} */}
    //               </div>
    //               <div className="input-box mt-3">
    //                   {" "}
    //                   <label className="wholesale-dealer-register-label ms-2" >
    //                    Password
    //                   </label>{" "}
    //                   <input
    //                     type="password"
    //                     placeholder="Password"
    //                     className="form-control m-2 wholesale-dealer-register-textbox" 
    //                     name="password"
    //                     value={data.password}
    //                     onChange={handleChange}

    //                   />
    //                   {errors.password && <span className="text-danger">{errors.password}</span>}
    //               </div>
    //               <div className="input-box mt-3">
    //                   {" "}
    //                   <label className="wholesale-dealer-register-label ms-2" >
    //                    Confirm Password
    //                   </label>{" "}
    //                   <input
    //                     type="password"
    //                     placeholder=" Confirm Password"
    //                     className="form-control m-2 wholesale-dealer-register-textbox" 
    //                     name="confirmPassword"
    //                     value={data.confirmPassword}
    //                     onChange={handleChange}
    //                   />
    //                   {errors.confirmPassword && <span className="text-danger">{errors.confirmPassword}</span>}
    //               </div>
    //           </div>
    //         </div>
    //         <button type="submit" className="wholesale-dealer-register-regbtn mt-4">
    //           Register
    //         </button>
    //       </form>
    //       <div className="wholesale-dealer-register-text">
    //             <h6 className="text-center">
    //               Already have an account?{" "}
    //               <Link to="/wholesaledealerlogin" className="wholesale-dealer-register-link">
    //                 Log In
    //               </Link>
    //             </h6>
    //           </div>
    //     </div>
    //     </div>
    //   </div>
    // </div>
    <div>
      
    </div>
  );
}

export default DeliveryAgentRegistration;
