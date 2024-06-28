import React, { useState } from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import './CustomerLogin.css';
import { Link, useNavigate } from 'react-router-dom';
import img from '../../images/image 77.png';
import img2 from '../../images/Component 5.svg';
import axiosInstance from "../../APIS/axiosinstatnce";


function CustomerLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!username || !password) {
      setError('Both fields are required');
      return;
    }

    try {
      const response = await axiosInstance.post('/customer_login', {
        username,
        password,
      });
      
      if (response.data.message == 'Login successful') {
        navigate('/home');
      } else {
        console.log(response)
        setError(response.data.message);
      }
    } catch (err) {
      setError('An error occurred during login');
    }
  };

  return (
    <div className="CustomerLogin">
      <div className="CustomerLogin-contain-div">
        <div>
          <img src={img} alt=" " className="Custom" />
        </div>
        <div className="CustomerLogin-inputcontain-div">
          <div>
            <h1 className="CustomerLogin-inputcontain-div-h1">Customer Login</h1>
          </div>
          <div>
            <p className="CustomerLogin-inputcontain-div-p">Username</p>
            <input
              type="text"
              placeholder="Username"
              className='CustomerLogin-inputcontain-div-inp'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <p className="CustomerLogin-inputcontain-div-p">Password</p>
            <input
              type="password"
              placeholder="Password"
              id="pword"
              className='CustomerLogin-inputcontain-div-inp'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="CustomerLogin-inputcontain-div-pwordbutton"><img src={img2} alt="" /></button>
            <Link to="/customerforget" alt=" " className="CustomerLogin-inputcontain-div-a">Forgot Password?</Link>
            <button className="CustomerLogin-inputcontain-div-button" onClick={handleLogin}>Login</button>
            {error && <p className="CustomerLogin-inputcontain-div-error">{error}</p>}
            <p className='CustomerLogin-inputcontain-div-p-2'>Not a member?<Link to="/customerregistration" alt=" "> Sign up now</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerLogin;
