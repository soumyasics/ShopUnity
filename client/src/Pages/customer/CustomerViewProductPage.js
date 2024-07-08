import React, { useEffect, useState } from 'react'
import './customer.css';
import search from '../../images/search.png'
import Card from 'react-bootstrap/Card';
import chocolate from '../../images/chocolate.png'
import minus from '../../images/minus.png'
import plus from '../../images/plus.png'
import { HiOutlineShoppingCart } from "react-icons/hi";
import { Link, useNavigate } from 'react-router-dom';
import axiosInstance from '../../APIS/axiosinstatnce';
function CustomerViewProductPage({url}) {

    const[count,setCount]=useState(1)
    const[data,setData]=useState([])
    const navigate=useNavigate()
    const increment = () => {
        setCount(count+1)
    }
    const decrement = () => {
        if(count > 0){
            setCount(count-1)
        }
    }

    const handleAddtocart = (productid) => {
        navigate('/customerviewproductdetail' + productid)
    }

    useEffect(() => {
        axiosInstance.post(`/view_all_product/`)
        .then((res) => {
            setData(res.data.data)
            console.log(res.data.data);
        })
        .catch((err) => {
            console.log(err);
        })
    },[])


  return (
    <div>
      <div className='customer-viewproduct-back'>
        <div className='text-center pt-2'>
            <h2 className='customer-viewproduct-h2'>Products</h2>
        </div>
        <div className='row'>
            <div className='col'>
                <select className='ms-5  shopowner-viewproduct-select'>
                    <option>Select Category</option>
                    <option>Cookies</option>
                    <option>Fruits</option>
                    <option>Milk Products</option>
                </select>
            </div>
            <div className='col'></div>
            <div className='col'></div>
            <div className='col'>
                <div className='me-5' style={{position:'relative'}}>
                    <input type='text' 
                    className='shopowner-viewproduct-label ps-3 '
                    placeholder='Search Product'
                    ></input>
                    <button className='shopowner-viewproduct-imgbtn1 ms-5 ' style={{position:'absolute'}}><img src={search} className='shopowner-viewproduct-imgbtn '></img></button>
                </div>
            </div>
        </div>
        <div className='row mt-3 container ms-2'>
            <div className='col'>
                {data.map ((item) => (
                <Card className=''>
                    <div className='ms-3 mt-3'>
                        <label className='shopowner-viewproduct-labelcard ps-3'>{item.productname}</label>
                    </div>
                    <div>
                        <Link to='/customerviewproductdetail'>
                        <img src={`${url}${item.productimage.filename}`}></img></Link>
                    </div>
                    <div className='ms-4'>
                        <label className='shopowner-viewproduct-b'><b>{item.productname}</b><br>
                        </br>(150kg)</label><br></br>
                        <label className='shopowner-viewproduct-b'> <b>&#8377; {item.price}</b></label>
                    </div> 
                    <div className='ms-4 mb-3'>
                        <div className='row'>
                            <div className='col-4'>
                                <label className='shopowner-viewproduct-b'><b>Qty</b></label>
                            </div>
                            <div className='col-3 '>
                                <button className='shopowner-viewproduct-minusbtn' onClick={decrement}><img src={minus}></img></button>
                            </div>
                            <div className='col-1 '>
                            <label>{count}</label>
                            </div>
                            <div className='col-2 '>
                                <button className='shopowner-viewproduct-plusbtn' onClick={increment}><img src={plus}></img></button>
                            </div>
                        </div>
                        <div className='mt-3'>
                            <Link >
                                <button className='shopowner-viewproduct-cartbtn'><HiOutlineShoppingCart/> Add to Cart</button>
                            </Link>
                            
                        </div>
                    </div> 
                </Card> 
                ))}
            </div>
            <div className='col'></div>
            <div className='col'></div>
            <div className='col'></div>
            <div className='col'></div>
            <div className='col'></div>
        </div>
      </div>
    </div>
  )
}

export default CustomerViewProductPage
