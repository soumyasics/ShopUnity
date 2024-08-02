import React, { useState } from 'react'
import deliveryagentforgetpswd from '../../images/deliveryagentforgetpswd.png'
import './deliveryagent.css'
import { useNavigate } from 'react-router-dom'
import axiosInstance from '../../APIS/axiosinstatnce'
import { FiEyeOff } from 'react-icons/fi'
import { FaEye } from 'react-icons/fa6'
function Deliveryagentforgetpswd() {

  const[data,setData]=useState({
    email:"",
    password:"",
    confirmpassword:""
  })

  const[errors,setErrors]=useState({
    email:"", 
    password:"",
    confirmpassword:""
  })

  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const [showConfirmPassword, setshowConfirmPassword] = useState(false);
  const toggleConfirmPasswordVisibility = () => {
    setshowConfirmPassword(!showConfirmPassword);
  };
  
  const Navigate=useNavigate();
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setData({
      ...data,
      [name]: value,
    });
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };

  const handleSubmit =async (e) =>{
    console.log(data);
    e.preventDefault();
    let errors={};
    let formValid=true;

    if (!data.email.trim()) {
        formValid = false;
        errors.email = "Email is required";
    }

    const passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[A-Z]).{6,}$/;
    if (!data.password.trim()) {
        formValid = false;
        errors.password = "Password is required";
    } else if (!passwordRegex.test(data.password)) { // Pass the password to the test method
        errors.password =
        "Password must contain at least one number, one special character, and one capital letter";
    }

    if (!data.confirmpassword.trim()) {
        formValid = false;
        errors.confirmpassword = "Confirm Password is required";
    } else if (data.confirmpassword !== data.password) {
        formValid = false;
        errors.confirmpassword = "Passwords do not match";
    }

  setErrors(errors);
  if (formValid) {
    try {
      const response =await axiosInstance.post('/delivery_agent_forgot', {
        email: data.email,
        password: data.password,
      });

      if (response.status === 200) {
        alert("Password updated successfully");
        Navigate("/deliveryagentlogin")
      }
    } catch (error) {
      if (error.response || error.response.data || error.response.data.message) {
        alert(error.response.data.message);
      } else {
        alert("An error occurred. Please try again.");
      }
    }
  }}
  

  return (
    <div className='container'>
      <div className='row'>
        <div className='col'>
          <img src={deliveryagentforgetpswd} className='delivery-agent-img'></img>
        </div>
        <div className='col'>
        <div className='delivery-agent-forgetpswd-box'>
                    <h1 className="text-center  delivery-agent-forgetpswd-h1 ">Reset Password</h1>
                    <form onSubmit={handleSubmit}>
                        <div className=" container mb-3">
                          <div className='ms-3'>
                          <label className=" container delivery-agent-forgetpswd-label mt-3 ms-4" htmlFor="form-controler-email">
                                Email
                            </label>{' '}
                          </div>
                            
                            <input
                                type="email"
                                className="form-control form-input container mt-2"
                                id="delivery-agent-forgetpswd-textbox"
                                placeholder="Email"  
                                name='email'
                                value={data.email}
                                onChange={handleInputChange}
                            />
                            
                            {errors.email && <span className='delivery-agent-forgetpswd-span text-danger container ms-5'>{errors.email}</span>}
                           
                        </div>
                        <div className=" container mb-3">
                          <div className='ms-3'>
                            <label className=" container delivery-agent-forgetpswd-label mt-2 ms-4" htmlFor="form-controler-email">
                                  Password
                              </label>{' '}
                          </div>
                            
                            <input
                                type={showPassword ? "text" : "password"}
                                className="form-control form-input container mt-2"
                                id="delivery-agent-forgetpswd-textbox"
                                placeholder=" Password" 
                                name='password'
                                value={data.password}
                                onChange={handleInputChange} 
                            />
                            <div className="Customerforget-pswd-eyeicon" onClick={togglePasswordVisibility}>
                                  {showPassword ? <FiEyeOff /> : <FaEye/>}
                            </div>
                            {errors.password && <span  className='text-danger text-center container ms-5'>{errors.password}</span>}
                        </div>
                        <div className=" container mb-3">
                          <div className='ms-3'>
                            <label className=" container delivery-agent-forgetpswd-label mt-2 ms-4" htmlFor="form-controler-email">
                                  Confirm Password
                              </label>{' '}
                          </div>
                            
                            <input
                                type={showConfirmPassword ? "text" : "password"}
                                className="form-control form-input container mt-2"
                                id="delivery-agent-forgetpswd-textbox"
                                placeholder="Confirm Password"
                                name='confirmpassword'
                                value={data.confirmpassword}
                                onChange={handleInputChange}  
                            />
                            <div className="Customerforget-pswd-eyeicon" onClick={toggleConfirmPasswordVisibility}>
                                  {showConfirmPassword ? <FiEyeOff /> : <FaEye/>}
                            </div>
                            {errors.confirmpassword && <span  className='text-danger container ms-5'>{errors.confirmpassword}</span>}
                        </div>
                        <div className='container'>
                            <button type='submit' className='delivery-agent-forgetpswd-btn mt-4'>
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
         
                       
        </div>
      </div>
    </div>
  )
}

export default Deliveryagentforgetpswd
