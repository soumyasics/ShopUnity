import React, { useEffect, useState } from 'react'
import { FaShop} from "react-icons/fa6";
import { Card, Row, Col } from "react-bootstrap";
import { PiHandTapBold } from "react-icons/pi";
import axiosInstance from '../../APIS/axiosinstatnce';
import { Link } from 'react-router-dom';
function CustomerviewShops() {

    const[data,setData]=useState([])

    useEffect(() => {
        axiosInstance.get(`/get_all_shopowners`)
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
    <div className='text-center'>
        <h2 className='customer-view-shop-h1 ms-2'><FaShop/>Shops</h2>
    </div>
    <div className='customer-view-shop-divbox container-fluid' >
        <div className='row pt-5'>
            {data.map((item, index) => (
                <div key={index} className='col-md-4 mb-4'>
                    <Card style={{ width: "100%", borderRadius: "25px", height:"450px", padding:"2%" }}>
                        <table className='container ms-1 mt-3 mb-3'>
                            <tbody>
                                <tr>
                                    <td className='customer-view-shop-td'>Shop Name</td>
                                    <td className='customer-view-shop-td1'>{item.shopname}</td>
                                    <td><FaShop className='me-5 customer-view-shop-td2'/></td>
                                </tr>
                                <tr>
                                    <td className='customer-view-shop-td'>Owner Name</td>
                                    <td className='customer-view-shop-td1'>{item.shopownername}</td>
                                </tr>
                                <tr>
                                    <td className='customer-view-shop-td'>City</td>
                                    <td className='customer-view-shop-td1'>{item.shopownercity}</td>
                                </tr>
                                <tr>
                                    <td className='customer-view-shop-td'>Contact Number</td>
                                    <td className='customer-view-shop-td1'>{item.shopownercontact}</td>
                                </tr>
                                <tr>
                                    <td className='customer-view-shop-td'>Email ID</td>
                                    <td className='customer-view-shop-td1'>{item.shopowneremail}</td>
                                </tr>
                                <tr>
                                    <td className='customer-view-shop-td'>Address</td>
                                    <td className='customer-view-shop-td1'>{item.shopowneraddress}</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>
                                        <Link to={`/customerviewproduct/${item._id}`}>
                                            <button className='mt-2 customer-view-shop-viewbtn'>View Product</button>
                                        </Link>
                                    </td>
                                    <td><PiHandTapBold className='customer-view-shop-handbtn'/></td>
                                </tr>
                            </tbody>
                        </table>
                    </Card>
                </div>
            ))}
        </div>
    </div>
</div>

  )
}

export default CustomerviewShops
