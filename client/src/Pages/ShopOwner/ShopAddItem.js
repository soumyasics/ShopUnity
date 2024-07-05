import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaArrowLeftLong } from "react-icons/fa6";
import { BiImageAdd } from "react-icons/bi";
import { FaPlus } from "react-icons/fa6";

function ShopAddItem() {
    
    const[profileImage,setProfileImage]=useState(null);
    
    const[count,setCount]=useState(1)

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
        setData({ ...data, [name]: files[0] });
    };

    function validateField(fieldName, value) {
        if (typeof value === 'string' && !value.trim()) {
          return `${fieldName} is required`;
        }
    }

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
    }

  return (
    <div>
      <div className="">
        <Link className="text-dark ms-5 shopowner-additem-link" to="">
          <FaArrowLeftLong />
        </Link>
      </div>
      <div className='shopowner-additem-box'>
        <div className='text-center shopowner-additem-h1'>
            <h1>Add Products</h1>
        </div>
        <div className='row container mt-3 ms-5'>
            <div className='col'>
                <div>
                    <label className='shopowner-additem-label'>Select Category</label>
                    <div className='shopowner-additem-labelbox mt-2'>
                        <select className='shopowner-additem-select ms-5 mt-4'>
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
                        placeholder='Name'
                        className='shopowner-additem-textbox ms-5 mt-4'
                        onChange={handleChange}
                        />
                    </div>
                    {errors.name && <span className='text-danger'>{errors.name}</span>}
                    <div className='shopowner-additem-labelbox mt-2'>
                        <input type='text' 
                        placeholder='Brand' 
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
                        <input type='date' className='shopowner-additem-textbox ms-5 mt-4'></input>
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
                                value={data.image}
                                onChange={handleFileChange}
                                />
                            </label>
                            {errors.image && <span className='text-danger'>{errors.image}</span>}
                        </div>
                        <div className='mt-5 '>
                            <button className='shopowner-additem-btn'>Remove</button>
                            <button className='shopowner-additem-btn ms-4'>Replace</button>
                        </div>
                    </div>
                </div>
                <div className='mt-2'>
                    <label className='shopowner-additem-label'>Quantity</label>
                    <div className='shopowner-additem-labelbox mt-2'>
                        <div className='row'>
                            <div className='col-8'>
                                <input type='text' placeholder='Quantity' className='shopowner-additem-textbox ms-5 mt-4' value={count}/>
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
                        placeholder=''
                        name='price'
                        value={data.price}
                        onChange={handleChange}
                        ></input>
                    </div>    
                </div>
                {errors.price && <span className='text-danger'>{errors.price}</span>}
                <div className='text-center'>
                    <button className='shopowner-additem-addbtn' onClick={handleSubmit}>Add Product</button>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ShopAddItem
