import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../APIS/axiosinstatnce';
import './customer.css';
import customerforget from '../../images/customerforget.png';

function ForgetPswdCustomer() {
  const [data, setData] = useState({
    email: '',
    password: '',
    confirmpassword: '',
  });

  const [errors, setErrors] = useState({
    email: '',
    password: '',
    confirmpassword: '',
  });

  const [serverError, setServerError] = useState('');

  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setData({
      ...data,
      [name]: value,
    });
    setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
    setServerError('');
  };

  const validateForm = () => {
    let errors = {};
    let formValid = true;

    if (!data.email.trim()) {
      formValid = false;
      errors.email = 'Email is required';
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(data.email)) {
        formValid = false;
        errors.email = 'Email is not valid';
      }
    }

    const passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[A-Z]).{6,}$/;
    if (!data.password.trim()) {
      formValid = false;
      errors.password = 'Password is required';
    } else if (!passwordRegex.test(data.password)) {
      formValid = false;
      errors.password = 'Password must contain at least one number, one special character, and one capital letter';
    }

    if (!data.confirmpassword.trim()) {
      formValid = false;
      errors.confirmpassword = 'Confirm Password is required';
    } else if (data.confirmpassword !== data.password) {
      formValid = false;
      errors.confirmpassword = 'Passwords do not match';
    }

    setErrors(errors);
    return formValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        const response = await axiosInstance.post('/customerforget', data);
        if (response.status === 200) {
          alert(response.data.message)
          navigate('/customerlogin'); // Redirect to login page or any other page
        }
      } catch (error) {
        if (error.response && error.response.data) {
          setServerError(error.response.data.message);
        } else {
          setServerError('An error occurred. Please try again later.');
        }
      }
    }
  };

  return (
    <div className='container'>
      <div className='row'>
        <div className='col'>
          <img src={customerforget} className='customer-img' alt='Customer forget' />
        </div>
        <div className='col'>
          <div className='customer-forgetpswd-box'>
            <h1 className='text-center customerforgetpswd-h1'>Reset Password</h1>
            <form onSubmit={handleSubmit}>
              <div className='container mb-3'>
                <div className='ms-3'>
                  <label className='container customer-forgetpswd-label mt-3 ms-4' htmlFor='form-controler-email'>
                    Email
                  </label>
                </div>
                <input
                  type='email'
                  className='form-control form-input container mt-2'
                  id='customer-forgetpswd-textbox'
                  placeholder='Email'
                  name='email'
                  value={data.email}
                  onChange={handleInputChange}
                />
                {errors.email && <span className='customer-forgetpswd-span text-danger container ms-5'>{errors.email}</span>}
              </div>
              <div className='container mb-3'>
                <div className='ms-3'>
                  <label className='container customer-forgetpswd-label mt-2 ms-4' htmlFor='form-controler-password'>
                    Password
                  </label>
                </div>
                <input
                  type='password'
                  className='form-control form-input container mt-2'
                  id='customer-forgetpswd-textbox'
                  placeholder='Password'
                  name='password'
                  value={data.password}
                  onChange={handleInputChange}
                />
                {errors.password && <span className='text-danger text-center container ms-5'>{errors.password}</span>}
              </div>
              <div className='container mb-3'>
                <div className='ms-3'>
                  <label className='container customer-forgetpswd-label mt-2 ms-4' htmlFor='form-controler-confirmpassword'>
                    Confirm Password
                  </label>
                </div>
                <input
                  type='password'
                  className='form-control form-input container mt-2'
                  id='customer-forgetpswd-textbox'
                  placeholder='Confirm Password'
                  name='confirmpassword'
                  value={data.confirmpassword}
                  onChange={handleInputChange}
                />
                {errors.confirmpassword && <span className='text-danger container ms-5'>{errors.confirmpassword}</span>}
              </div>
              {serverError && <div className='text-danger text-center'>{serverError}</div>}
              <div className='container'>
                <button type='submit' className='customer-forgetpswd-btn mt-4'>
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgetPswdCustomer;
