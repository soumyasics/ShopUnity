import React, { useState } from 'react'
import './wholesale.css'
import wholesaledealerforgetpswd from '../../images/wholesaledealerforgetpswd.png'
import { useNavigate } from 'react-router-dom'
function WholesaleDealerForgetpswd() {

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

    const Navigate=useNavigate();

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setData({
          ...data,
          [name]: value,
        });
        setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
      };

      const handleSubmit = (e) =>{
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
    }

  return (
    <div>
      <div>
        <div className='row'>
            <div className='col-7'>
                <img className='wholesale-dealer-forgetpswd-img' src={wholesaledealerforgetpswd} alt='img'></img>
            </div>
            <div className='col-5 container'>
                <div className='wholesale-dealer-forgetpswd-box'>
                    <h1 className="text-center  wholesale-dealer-forgetpswd-h1 ">Reset Password</h1>
                    <form onSubmit={handleSubmit}>
                        <div className=" container mb-3">
                            <label className=" container wholesale-dealer-forgetpswd-label mt-3 ms-4" htmlFor="form-controler-email">
                                Email
                            </label>{' '}
                            <input
                                type="email"
                                className="form-control form-input container mt-2"
                                id="wholesale-dealer-forgetpswd-textbox"
                                placeholder="Email"  
                                name='email'
                                value={data.email}
                                onChange={handleInputChange}
                            />
                            {errors.email && <span className='wholesale-dealer-forgetpswd-span text-danger container'>{errors.email}</span>}
                        </div>
                        <div className=" container mb-3">
                            <label className=" container wholesale-dealer-forgetpswd-label mt-2 ms-4" htmlFor="form-controler-email">
                                Password
                            </label>{' '}
                            <input
                                type="email"
                                className="form-control form-input container mt-2"
                                id="wholesale-dealer-forgetpswd-textbox"
                                placeholder=" Password" 
                                name='password'
                                value={data.password}
                                onChange={handleInputChange} 
                            />
                            {errors.password && <span  className='text-danger text-center container'>{errors.password}</span>}
                        </div>
                        <div className=" container mb-3">
                            <label className=" container wholesale-dealer-forgetpswd-label mt-2 ms-4" htmlFor="form-controler-email">
                                Confirm Password
                            </label>{' '}
                            <input
                                type="email"
                                className="form-control form-input container mt-2"
                                id="wholesale-dealer-forgetpswd-textbox"
                                placeholder="Confirm Password"
                                name='confirmpassword'
                                value={data.confirmpassword}
                                onChange={handleInputChange}  
                            />
                            {errors.confirmpassword && <span  className='text-danger container'>{errors.confirmpassword}</span>}
                        </div>
                        <div className='container'>
                            <button type='submit' className='wholesale-dealer-forgetpswd-btn mt-4'>
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default WholesaleDealerForgetpswd
