import React,{useState,useEffect} from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { FaArrowLeftLong } from "react-icons/fa6";
import axiosInstance from '../../APIS/axiosinstatnce';

function WholesaleDealerViewProductDetails({url}) {
    const [data, setData] = useState({});

  const {productid}=useParams()

    useEffect(() => {
      axiosInstance
        .post("/view_a_product_bywholesale/" + productid)
        .then((res) => {
          setData(res.data.data);
          console.log(res.data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }, []);

    useEffect(() => {
        if (
          localStorage.getItem("token") == null &&
          localStorage.getItem("wholesaledealer") == null
        ) {
          navigate("/wholesaledealerlogin");
        }
      }, []);

    const navigate=useNavigate()
    const GotoEditproduct=()=>{
        navigate("/wholesalereditproduct/"+productid)
    }

  return (
    <div>
      <div>
        <Link to='/wholesalerviewproduct' className='ms-5 mt-2 text-dark shopowner-viewproductdetails-link'>
            <FaArrowLeftLong />
        </Link>
      </div>
      <div className='shopowner-viewproductdetails-boxdiv container'>
        <div className='row'>
            <div className='col-8'>
                <div className='text-center mt-5'>
                    <h1 className='shopowner-viewproductdetails-h1'>View Details</h1>
                </div>
                <div className='row container ms-5 mt-5'>
                    <div className='col-5'>
                        <label className='shopowner-viewproductdetailslabel'>Category</label>
                    </div>
                    <div className='col-2'>
                        <label className='shopowner-viewproductdetailslabel'>:</label>
                    </div>
                    <div className='col-5'>
                        <label className='shopowner-viewproductdetailslabel1'> {data.category}</label>
                    </div>
                </div>
                <div className='row container ms-5 mt-5'>
                    <div className='col-5'>
                        <label className='shopowner-viewproductdetailslabel'>Product Name</label>
                    </div>
                    <div className='col-2'>
                        <label className='shopowner-viewproductdetailslabel'>:</label>
                    </div>
                    <div className='col-5'>
                        <label className='shopowner-viewproductdetailslabel1'>{data.productname}</label>
                    </div>
                </div>
                <div className='row container ms-5 mt-5'>
                    <div className='col-5'>
                        <label className='shopowner-viewproductdetailslabel'>Product Brand</label>
                    </div>
                    <div className='col-2'>
                        <label className='shopowner-viewproductdetailslabel'>:</label>
                    </div>
                    <div className='col-5'>
                        <label className='shopowner-viewproductdetailslabel1'>{data.brand}</label>
                    </div>
                </div>
                <div className='row container ms-5 mt-5'>
                    <div className='col-5'>
                        <label className='shopowner-viewproductdetailslabel'>Expriy</label>
                    </div>
                    <div className='col-2'>
                        <label className='shopowner-viewproductdetailslabel'>:</label>
                    </div>
                    <div className='col-5'>
                        <label className='shopowner-viewproductdetailslabel1'>{data.expirydate}</label>
                    </div>
                </div>
                <div className='row container ms-5 mt-5'>
                    <div className='col-5'>
                        <label className='shopowner-viewproductdetailslabel'>Description</label>
                    </div>
                    <div className='col-2'>
                        <label className='shopowner-viewproductdetailslabel'>:</label>
                    </div>
                    <div className='col-5'>
                        <label className='shopowner-viewproductdetailslabel1'> {data.description}</label>
                    </div>
                </div>
                <div className='row container ms-5 mt-5'>
                    <div className='col-5'>
                        <label className='shopowner-viewproductdetailslabel'>Quantity</label>
                    </div>
                    <div className='col-2'>
                        <label className='shopowner-viewproductdetailslabel'>:</label>
                    </div>
                    <div className='col-5'>
                        <label className='shopowner-viewproductdetailslabel1'> {data.quantity}</label>
                    </div>
                </div>
                <div className='row container ms-5 mt-5'>
                    <div className='col-5'>
                        <label className='shopowner-viewproductdetailslabel'>Price</label>
                    </div>
                    <div className='col-2'>
                        <label className='shopowner-viewproductdetailslabel'>:</label>
                    </div>
                    <div className='col-5'>
                        <label className='shopowner-viewproductdetailslabel1'>&#8377; {data.price}</label>
                    </div>
                </div>
            </div>
            <div className='col-4'>
                <div className='shopowner-viewproductdetails-imgdiv '>
                    <img src={`${url}/${data.productimage?.filename}`}></img>
                </div>
            </div>
            
        </div>
        <div className='text-center'>
            <button className='shopowner-viewproductdetails-editbtn' onClick={()=>GotoEditproduct()} >Edit</button>
        </div>
      </div>
    </div>
  )
}

export default WholesaleDealerViewProductDetails
