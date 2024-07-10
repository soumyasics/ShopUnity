import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { FaArrowLeftLong } from "react-icons/fa6";
import tick from '../../images/tick.png'
import wrong from '../../images/wrong.png'
import axiosInstance from '../../APIS/axiosinstatnce';
import ShopOwnerSidebar from './ShopOwnerSidebar';
function ShopownerEditProduct() {

    const navigate=useNavigate();
    const [count,setCount]=useState(1)
    const[profileImage,setProfileImage]=useState(null);

    const increment = () =>{
        setCount(count+1)
        console.log(count);
    }
    const decrement = () =>{
        if(count > 0){
            setCount(count-1)
        }
        console.log(count);
    }

    const[data,setData]=useState({
        name:"",
        brand:"",
        description:"",
        image:"",
        price:""
    });

    const[errors,setErrors]=useState({
        name:"",
        brand:"",
        description:"",
        image:"",
        price:""
    })

    const handleChange = (event) => {
        const { name, value } = event.target;
        console.log(name, value)

        setData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
        setErrors((prevErrors) => ({
          ...prevErrors,
          [name]: "",
        }));
    };

    const handleFileChange = (e) => {
        const { name, files } = e.target;
        console.log(name, files)
        setData({ ...data, [name]: files[0] });
    };

    function validateField(fieldName, value) {
        if (typeof value === 'string' && !value.trim()) {
          return `${fieldName} is required`;
        }
    }

    const {productid} = useParams();

    useEffect(() => {
        axiosInstance.post(`/view_a_product/${productid}`)
        .then((res) => {
            setData(res.data.data)
            setCount(res.data.data.quantity)
            console.log(res.data.data);
        })
        .catch((err) => {
            console.log(err);
        })
    },[])

    const handleSubmit = (e) => {
        console.log(data);
        e.preventDefault();
        let errors = {};
        let formIsValid = true;

        errors.name =validateField("Name",data.name);
        errors.brand =validateField("Brand",data.brand);
        errors.description =validateField("Description",data.description);
        errors.image =validateField("Image",data.image);
        errors.price =validateField("Price",data.price);

        setErrors(errors);

        const formData=new FormData();
        formData.append('category', data.category);
        formData.append('productname', data.name);
        formData.append('expirydate', data.expirydate);
        formData.append('description', data.description);
        formData.append('productimage', data.image);
        formData.append('quantity', count);
        formData.append('price', data.price);
        formData.append('brand', data.brand);

        console.log(data);
        e.preventDefault();

        axiosInstance.post(`/edit_a_product/${productid}`,formData)
        .then((res) => {
            alert("Updated Successfully")
            setInterval(()=>{
                navigate("/shopownerviewproduct")

            },1000)
            navigate("/shopownerviewproduct")

        })
        .catch((err) => {
            console.log(err);
        })
    }

    const DeleteAProduct=()=>{
        axiosInstance.post(`/delete_a_product/${productid}`)
        .then((res) => {
            alert("product Deleted")
            setInterval(()=>{
                navigate("/shopownerviewproduct")

            },1000)
        })
        .catch((err) => {
            console.log(err);
        })
    }
  return (
    <div className='row'>
        <div className='col-2'>
            <ShopOwnerSidebar/>
        </div>
        <div className='col-9'>
        <div>
            <Link to='/shopownerviewproduct' className='ms-5 mt-2 text-dark shopowner-editproduct-details-link'>
                <FaArrowLeftLong />
            </Link>
        </div>
        <div className='shopowner-additem-box'>
        <div className='text-center shopowner-additem-h1'>
            <h1>Edit Products</h1>
        </div>
        <div className='row container mt-3 ms-5'>
            <div className='col'>
                <div>
                    <label className='shopowner-additem-label'>Select Category</label>
                    <div className='shopowner-additem-labelbox mt-2'>
                        <select className='shopowner-additem-select ms-5 mt-4' name='category' onChange={handleChange} value={data.category}>
                            <option>Category</option>
                            <option>Cookies</option>
                            <option>Fruits</option>
                            <option>Milk Products</option>
                        </select>
                    </div>
                </div>
                <div className='mt-3'>
                    <label className='shopowner-additem-label'>Product Name & Brand</label>
                    <div className='shopowner-additem-labelbox mt-2'>
                        <input type='text'
                        name='name'
                        value={data.name}
                        placeholder={data.productname}
                        className='shopowner-additem-textbox ms-5 mt-4'
                        onChange={handleChange}
                        />
                    </div>
                    {errors.name && <span className='text-danger'>{errors.name}</span>}
                    <div className='shopowner-additem-labelbox mt-2'>
                        <input type='text' 
                        placeholder={data.brand}
                        className='shopowner-additem-textbox ms-5 mt-4'
                        name='brand'
                        value={data.brand}
                        onChange={handleChange}
                        />
                    </div>
                    {errors.brand && <span className='text-danger'>{errors.brand}</span>}

                </div>
                <div className='mt-3'>
                    <label className='shopowner-additem-label'>Expiry</label>
                    <div className='shopowner-additem-labelbox mt-2'>
                        <input type='date' className='shopowner-additem-textbox ms-5 mt-4' name='expirydate' onChange={handleChange}  value={data.expirydate}></input>
                    </div>
                </div>
                <div className='mt-3'>
                    <label className='shopowner-additem-label'>Description</label>
                    <div className='shopowner-additem-labelbox1 mt-2'>
                        <input type='text' 
                        className='shopowner-additem-textbox1 ms-5 mt-4'
                        name='description'
                        value={data.description}
                        onChange={handleChange}
                        placeholder={data.description}
                        />
                    </div>
                </div>
                {errors.description && <span className='text-danger'>{errors.description}</span>}
 
            </div>
            <div className='col ms-5 me-5'>
                <div>
                    <label className='shopowner-additem-label'>Product Image</label>
                    <div className='mt-3  shopowner-additem-divimglabel text-center'>
                        <div className='shopowner-additem-imgupload text-center'>
                           
                            {profileImage ? (
                                <img src={profileImage} alt="profile" className="rounded-circle" width="200" height="200" />
                            ) : (
                                <label></label>
                            )}
                            <label className='upload-icon text-primary mt-5 pt-3'><b>Click To Upload</b>
                                <input 
                                type='file'
                                style={{display:'none'}}
                                name='image'
                                id='img'
                                onChange={handleFileChange}
                                />
                            </label>
                            {errors.image && <span className='text-danger'>{errors.image}</span>}
                        </div>
                        <div className='mt-5 text-center'>                          
                            <button className='shopowner-additem-btn ms-4' onClick={(e)=>{e.preventDefault();document.getElementById('img').click()}}>Replace Image</button>
                        </div>
                    </div>
                </div>
                <div className='mt-2'>
                    <label className='shopowner-additem-label'>Quantity</label>
                    <div className='shopowner-additem-labelbox mt-2'>
                        <div className='row'>
                            <div className='col-8'>
                                <input type='text' placeholder='Quantity' className='shopowner-additem-textbox ms-5 mt-4' name='quantity' disabled  onChange={handleFileChange} value={count}/>
                            </div>
                            <div className='col-2  mt-4'>
                                <button className='shopowner-additem-quantitybtn' onClick={decrement}>-</button>
                            </div>
                            <div className='col-2 mt-4'>
                                <button className='shopowner-additem-quantitybtn1' onClick={increment}>+</button>
                            </div>
                        </div>  
                    </div>
                </div>
                <div className='mt-2'>
                    <label className='shopowner-additem-label'>Price</label> 
                    <div className='shopowner-additem-labelbox mt-2'>
                        <input type='text' 
                        className='shopowner-additem-textbox ms-5 mt-4' 
                        placeholder={data.price}
                        name='price'
                        value={data.price}
                        onChange={handleChange}
                        ></input>
                    </div>    
                </div>
                {errors.price && <span className='text-danger'>{errors.price}</span>}
                <div className='text-center'>
                    <button className='shopowner-editproduct-tickbtn' onClick={handleSubmit}><img src={tick}></img>Update</button>
                    <button className='shopowner-editproduct-wrongbtn ms-5' onClick={DeleteAProduct}><img src={wrong} className='shopowner-wrongproduct-img' ></img>Delete</button>
                </div>
            </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default ShopownerEditProduct
