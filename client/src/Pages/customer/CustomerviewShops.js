import React from 'react'
import { FaShop} from "react-icons/fa6";
import Card from 'react-bootstrap/Card';
import { PiHandTapBold } from "react-icons/pi";
function CustomerviewShops() {
  return (
    <div>
        <div className='text-center'>
            <h2 className='customer-view-shop-h1 ms-2'><FaShop/>Shops</h2>
        </div>
        <div className='customer-view-shop-divbox container-fluid '>
            <div className='row pt-5 container-fluid'>
                <div className='col'>
                    <Card style={{ width: "25rem", borderRadius: "25px" }}>
                        <table className='container ms-1 mt-3 mb-3'>
                            <tr>
                                <td className='customer-view-shop-td'>Shop Name</td>
                                <td className='customer-view-shop-td1'>HM Store</td>
                                <td><FaShop className='me-5 customer-view-shop-td2'/></td>
                            </tr>
                            <tr>
                                <td className='customer-view-shop-td'>Owner Name</td>
                                <td className='customer-view-shop-td1'>Hazi</td>
                            </tr>
                            <tr>
                                <td className='customer-view-shop-td'>City</td>
                                <td className='customer-view-shop-td1'>Trivandrum</td>
                            </tr>
                            <tr>
                                <td className='customer-view-shop-td'>Contact Number</td>
                                <td className='customer-view-shop-td1'>9090099009</td>
                            </tr>
                            <tr>
                                <td className='customer-view-shop-td'>Email ID</td>
                                <td className='customer-view-shop-td1'>hazi@gmail.com</td>
                            </tr>
                            <tr>
                                <td className='customer-view-shop-td'>Address</td>
                                <td className='customer-view-shop-td1'>neyyatinkara</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td><button className='mt-2 customer-view-shop-viewbtn'>View Product</button></td>
                                <td><PiHandTapBold className='customer-view-shop-handbtn'/></td>
                            </tr>
                            {/* <div className='text-end'>
                                
                            </div> */}
                           
                        </table>
                        
                    </Card> 
                </div>
                <div className='col'>
                    <Card className='shopowner-viewproduct-card'>
                        
                    </Card> 
                </div>
                <div className='col'>
                    <Card className='shopowner-viewproduct-card'>
                        
                    </Card> 
                </div>
            </div>
        </div>
    </div>
  )
}

export default CustomerviewShops
