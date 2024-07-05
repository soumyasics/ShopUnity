import React from 'react'
import './shopowner.css'
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import sprite from '../../images/sprite.png'
import Button from 'react-bootstrap/Button';
function ShopownerViewProduct() {
  return (
    <div>
        <div className="">
            <Link to="" className='ms-5 mt-2 text-dark shopowner-viewproduct-link' >
            <FaArrowLeftLong />
            </Link>
        </div>
        <div className='text-center'>
            <h2 className='shopowner-viewproduct-h2'>View Products</h2>
        </div>
        <div className='shopowner-viewproduct-divbox container'>
            <div>
                <select className='ms-3 mt-5 shopowner-viewproduct-select'>
                    <option>Category</option>
                    <option>Cookies</option>
                    <option>Fruits</option>
                    <option>Milk Products</option>
                </select>
            </div>
            <div className='row mt-4'>
                <div className='col'>
                    <Card className='shopowner-viewproduct-card'>
                        <label className='shopowner-viewproduct-label ms-2 ps-3 mt-2'>Sprite</label>
                        <Card.Img className='shopowner-viewproduct-cardimg mt-3' src={sprite} />
                        <div className='shopowner-viewproduct-button'>
                            <button className='shopowner-viewproduct-viewbtn me-4 mt-2 mb-3'>View</button>
                        </div>
                        
                    </Card>
                </div>
                <div className='col'>
                    <Card className='shopowner-viewproduct-card'>
                        <label className='shopowner-viewproduct-label ms-2 ps-3 mt-2'>Sprite</label>
                        <Card.Img className='shopowner-viewproduct-cardimg mt-3' src={sprite} />
                        <div className='shopowner-viewproduct-button'>
                            <button className='shopowner-viewproduct-viewbtn me-4 mt-2 mb-3'>View</button>
                        </div>
                    </Card> 
                </div>
                <div className='col'>
                    <Card className='shopowner-viewproduct-card'>
                        <label className='shopowner-viewproduct-label ms-2 ps-3 mt-2'>Sprite</label>
                        <Card.Img className='shopowner-viewproduct-cardimg mt-3' src={sprite} />
                        <div className='shopowner-viewproduct-button'>
                            <button className='shopowner-viewproduct-viewbtn me-4 mt-2 mb-3'>View</button>
                        </div>
                    </Card> 
                </div>
                {/* <div className='col'>
                    <Card className='shopowner-viewproduct-card'>
                        <label className='shopowner-viewproduct-label ms-2 ps-3 mt-2'>Sprite</label>
                        <Card.Img className='shopowner-viewproduct-cardimg mt-3' src={sprite} />
                        <div className='shopowner-viewproduct-button'>
                            <button className='shopowner-viewproduct-viewbtn me-4 mt-2 mb-3'>View</button>
                        </div>
                    </Card> 
                </div> */}
                {/* <div className='col'>
                    <Card className='shopowner-viewproduct-card'>
                        <label className='shopowner-viewproduct-label ms-2 ps-3 mt-2'>Sprite</label>
                        <Card.Img className='shopowner-viewproduct-cardimg mt-3' src={sprite} />
                        <div className='shopowner-viewproduct-button'>
                            <button className='shopowner-viewproduct-viewbtn me-4 mt-2 mb-3'>View</button>
                        </div>
                    </Card>  
                </div> */}
            </div>
        </div>
    </div>
  )
}

export default ShopownerViewProduct
