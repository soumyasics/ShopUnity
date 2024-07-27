import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaArrowLeftLong } from 'react-icons/fa6';
import { BiImageAdd } from 'react-icons/bi';
import { FaPlus } from 'react-icons/fa6';
import ShopOwnerSidebar from './ShopOwnerSidebar';
import axiosInstance from '../../APIS/axiosinstatnce';
import Footer from '../Footer';

function ShopAddItem() {
  const [profileImage, setProfileImage] = useState(null);
  const [count, setCount] = useState(1);
  const [data, setData] = useState({
    category: '',
    productname: '',
    brand: '',
    description: '',
    productimage: '',
    price: '',
    quantity: 1,
    expirydate: ''
  });

  const [errors, setErrors] = useState({
    category: '',
    productname: '',
    brand: '',
    description: '',
    productimage: '',
    price: '',
    quantity: '',
    expirydate: ''
  });
  const navigate=useNavigate()

  const increment = () => {
    setCount(count + 1);
    setData((prevData) => ({
      ...prevData,
      quantity: count + 1
    }));
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
      setData((prevData) => ({
        ...prevData,
        quantity: count - 1
      }));
    }
  };

  useEffect(() => {
    if (
      localStorage.getItem("shopownertoken") == null &&
      localStorage.getItem("shopowner") == null
    ) {
      navigate("/shopownerlogin");
    }
  }, []);

  const validateField = (name, value) => {
    let error = '';
    if (name === 'category' && !value.trim()) {
      error = 'Category is required';
    } else if (name === 'productname' && !value.trim()) {
      error = 'Product name is required';
    } else if (name === 'brand' && !value.trim()) {
      error = 'Brand is required';
    } else if (name === 'description' && !value.trim()) {
      error = 'Description is required';
    } else if (name === 'price') {
      if (!value) {
        error = 'Price is required';
      } else if (isNaN(value) || value <= 0) {
        error = 'Price must be a positive number';
      }
    } else if (name === 'quantity') {
      if (!value) {
        error = 'Quantity is required';
      } else if (isNaN(value) || value <= 0) {
        error = 'Quantity must be a positive number';
      }
    } else if (name === 'expirydate') {
      if (!value) {
        error = 'Expiry date is required';
      } else if (new Date(value) <= new Date()) {
        error = 'Expiry date must be a future date';
      }
    } else if (name === 'productimage' && !value) {
      error = 'Product image is required';
    }
    return error;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: validateField(name, value)
    }));
  };

  const handleFileChange = (event) => {
    const { name, files } = event.target;
    const file = files[0];
    setData((prevData) => ({
      ...prevData,
      [name]: file
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: validateField(name, file ? file.name : '')
    }));
    // if (file) {
    //   const reader = new FileReader();
    //   reader.onloadend = () => {
    //     setProfileImage(reader.result);
    //   };
    //   reader.readAsDataURL(file);
    // } else {
    //   setProfileImage(null);
    // }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newErrors = {};
    let formIsValid = true;

    Object.keys(data).forEach((key) => {
      const error = validateField(key, data[key]);
      if (error) {
        formIsValid = false;
        newErrors[key] = error;
      }
    });

    setErrors(newErrors);

    if (formIsValid) {
      console.log(data);
      const formData=new FormData();

      for (const key in data) {
        formData.append(key, data[key]);
      }
      formData.append('shopOwner', localStorage.getItem('shopowner'));

      axiosInstance.post("/add_a_product",formData).then((res)=>{
        alert(res.data.message)
        navigate('/shopownerviewproduct')
      })
      .catch((err)=>{
        alert("Add product Failed")
      })
    }
  };

  return (
    <div>
      <div className='row ' >
         <div className="col-2">
          <ShopOwnerSidebar />
        </div> 
        <div className='col-9 mt-5' >
          <div>
            <div className="">
              
            </div>
            <div className="shopowner-additem-box">
              <div className="text-center shopowner-additem-h1">
                <h1>Add Products</h1>
              </div>
              <div className="row container mt-3 ms-5">
                <div className="col">
                  <div>
                    <label className="shopowner-additem-label">Select Category</label>
                    <div className="shopowner-additem-labelbox mt-2">
                      <select
                        name="category"
                        className="shopowner-additem-select ms-5 mt-4"
                        value={data.category}
                        onChange={handleChange}
                      >
                        <option value="">Category</option>
                        <option value="Cookies">Cookies</option>
                        <option value="Fruits">Fruits</option>
                        <option value="Egg">Egg</option>
                        <option value="Vegtables">Vegtables</option>
                        <option value="Sea Foods">Sea Foods</option>
                        <option value="Cheese">Cheese</option>
                        <option value="Milk Products">Milk Products</option>
                        <option value="Meat">Meat</option>
                        <option value="Food Grains & Oils">Food Grains & Oils</option>
                        <option value="Cleaning & Household">Cleaning & Household</option>
                      </select>
                      {errors.category && <span className="text-danger">{errors.category}</span>}
                    </div>
                  </div>
                  <div className="mt-3">
                    <label className="shopowner-additem-label">Product Name & Brand</label>
                    <div className="shopowner-additem-labelbox mt-2">
                      <input
                        type="text"
                        name="productname"
                        value={data.productname}
                        placeholder="Name"
                        className="shopowner-additem-textbox ms-5 mt-4"
                        onChange={handleChange}
                      />
                      {errors.productname && <span className="text-danger">{errors.productname}</span>}
                    </div>
                    <div className="shopowner-additem-labelbox mt-2">
                      <input
                        type="text"
                        name="brand"
                        value={data.brand}
                        placeholder="Brand"
                        className="shopowner-additem-textbox ms-5 mt-4"
                        onChange={handleChange}
                      />
                      {errors.brand && <span className="text-danger">{errors.brand}</span>}
                    </div>
                  </div>
                  <div className="mt-3">
                    <label className="shopowner-additem-label">Expiry</label>
                    <div className="shopowner-additem-labelbox mt-2">
                      <input
                        type="date"
                        name="expirydate"
                        value={data.expirydate}
                        className="shopowner-additem-textbox ms-5 mt-4"
                        onChange={handleChange}
                      />
                      {errors.expirydate && <span className="text-danger">{errors.expirydate}</span>}
                    </div>
                  </div>
                  <div className="mt-3">
                    <label className="shopowner-additem-label">Description</label>
                    <div className="shopowner-additem-labelbox1 mt-2">
                      <input
                        type="text"
                        name="description"
                        value={data.description}
                        className="shopowner-additem-textbox1 ms-5 mt-4"
                        onChange={handleChange}
                      />
                      {errors.description && <span className="text-danger">{errors.description}</span>}
                    </div>
                  </div>
                </div>
                <div className="col ms-5 me-5">
                  <div>
                    <label className="shopowner-additem-label">Product Image</label>
                    <div className="mt-3 shopowner-additem-divimglabel text-center">
                      <div className="shopowner-additem-imgupload text-center">
                        {profileImage ? (
                          <img src={profileImage} alt="profile" className="rounded-circle" width="200" height="200" />
                        ) : (
                          <label className="upload-icon text-primary mt-5 pt-3">
                            <b></b>
                          </label>
                        )}
                        <label className="upload-icon text-primary mt-5 pt-3">
                          <b>Click To Upload</b>
                          <input
                            type="file"
                            name="productimage"
                            style={{ display: 'none' }}
                            onChange={handleFileChange}
                          />
                        </label>
                        {errors.productimage && <span className="text-danger">{errors.productimage}</span>}
                      </div>
                      
                    </div>
                  </div>
                  <div className="mt-2">
                    <label className="shopowner-additem-label">Quantity</label>
                    <div className="shopowner-additem-labelbox mt-2">
                      <div className="d-flex justify-content-between">
                        
                        <input
                          type="text"
                          name="quantity"
                          value={data.quantity}
                          readOnly
                          className="shopowner-additem-textboxs mt-4"
                        />
                        <div className='mt-3 me-3'>
                          <button onClick={decrement} className='shopowner-additem-quantitybtn'>-</button>
                          <button onClick={increment} className='shopowner-additem-quantitybtn1 ms-3'>+</button>
                        </div>
                      </div>
                      {errors.quantity && <span className="text-danger">{errors.quantity}</span>}
                    </div>
                  </div>
                  <div className="mt-3">
                    <label className="shopowner-additem-label">Price</label>
                    <div className="shopowner-additem-labelbox mt-2">
                      <input
                        type="text"
                        name="price"
                        value={data.price}
                        className="shopowner-additem-textbox ms-5 mt-4"
                        onChange={handleChange}
                      />
                      {errors.price && <span className="text-danger">{errors.price}</span>}
                    </div>
                  </div>
                  <div className="text-center mt-4">
                    <button onClick={handleSubmit} className="shopowner-additem-submit">
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
       
      </div>
      
    </div>
  );
}

export default ShopAddItem;
