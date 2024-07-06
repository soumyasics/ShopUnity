import React, { useEffect, useState } from 'react';
import '../ShopOwner/shopowner.css';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../APIS/axiosinstatnce';

function WholesaleDealerEditProfile() {
    const [data, setData] = useState({
        storeName: "",
        dealername: "",
        address: "",
        districts: "",
        city: "",
        pincode: "",
        contact: "",
        wholesaleregisternumber: "",
        email: "",
        dealerlisence: null,
        file:''
    });

    const [errors, setErrors] = useState({
        storeName: "",
        dealername: "",
        address: "",
        districts: "",
        city: "",
        pincode: "",
        contact: "",
        wholesaleregisternumber: "",
        email: ""
    });

    const districts = [
        'Alappuzha', 'Ernakulam', 'Idukki', 'Kannur', 'Kasaragod',
        'Kollam', 'Kottayam', 'Kozhikode', 'Malappuram', 'Palakkad',
        'Pathanamthitta', 'Thiruvananthapuram', 'Thrissur', 'Wayanad'
    ];

    const handleChange = (e) => {
        const { name, value, files } = e.target;

        if (name == 'pincode') {
            setErrors(d => ({
                ...d,
                pincode:  validatePincode(name, value)
            }))
        }
        if (name == 'contact') {
            setErrors(d => ({
                ...d,
                contact:  validateContact(name, value)
            }))
        }
        if (name == 'dealerlisence') {
            setData(prevData => ({
                ...prevData,
                file: files[0]
            }));
        }
        setData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    function validateField(fieldName, value) {
        if (typeof value !== 'string' || !value.trim()) {
            return `${fieldName} is required`;
        }
        if (fieldName === "email" && !value.endsWith("@gmail.com")) {
            return "Email must be a valid Gmail address.";
        }
        return '';
    }

    function validateContact(fieldName, value) {
        if (typeof value !== 'string' || !value.trim()) {
            return `${fieldName} is required`;
        } else if (value.length !== 10) {
            return 'Please enter a valid Contact Number';
        }
        return '';
    }

    function validatePincode(fieldName, value) {
        if (typeof value !== 'string' || !value.trim()) {
            return `${fieldName} is required`;
        } else if (value.length !== 6) {
            return 'Please enter a valid Pincode';
        }
        return '';
    }

    const Navigation = useNavigate();
    const wholesaledealerid = localStorage.getItem("wholesaledealer");

    useEffect(() => {
        axiosInstance.get('/get_a_wholesaledealer/' + wholesaledealerid)
            .then((res) => {
                setData(res.data.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [wholesaledealerid]);

    const handleEdit = (e) => {
        e.preventDefault();

        // Validate form fields
        let validationErrors = {};
        validationErrors.storeName = validateField('Store Name', data.storeName);
        validationErrors.dealername = validateField('Dealer Name', data.dealername);
        validationErrors.address = validateField('Address', data.address);
        validationErrors.city = validateField('City', data.city);
        validationErrors.districts = validateField('District', data.districts);
        // validationErrors.contact = validateContact('Contact', data.contact);
        // validationErrors.pincode = validatePincode('Pincode', data.pincode);
        validationErrors.wholesaleregisternumber = validateField('Wholesale Register Number', data.wholesaleregisternumber);
        validationErrors.email = validateField('Email', data.email);

        setErrors(validationErrors);

        // Check if there are any validation errors
        const isValid = Object.values(validationErrors).every(error => error === '');
        if (!isValid) {
            return;
        }

        const formData = new FormData();
        for (const key in data) {
            if (key != 'dealerlisence' && key != 'file') {
                formData.append(key, data[key]);
            }
            if (key == 'dealerlisence') {
                console.log(data.file)
                formData.append('file', data.file);
            }
        }

        axiosInstance.post('/edit_a_wholesaledealer/' + wholesaledealerid, formData,{ headers: {
            'Content-Type': 'multipart/form-data',
          }})
            .then((res) => {
                alert("Updated Successfully");
                Navigation("/wholesaledealerprofile");
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const handleCancel = () => {
        Navigation("/wholesaledealerprofile");
    }

    return (
        <div className="container">
            <div className="shopprofile-editpage-header">
                <form onSubmit={handleEdit}>
                    <Row className="container shopprofile-editpage mt-5 pt-3">
                        <h2 className="shopprofile-editpage-h2">Edit Profile</h2>
                        <Col className="container">
                            <div>
                                <label className="container-fluid font" id="font">Store Name</label>
                                <input
                                    type="text"
                                    className="form-control m-2"
                                    placeholder="Store Name"
                                    id="shopprofile-editpage-text2"
                                    name="storeName"
                                    value={data.storeName}
                                    onChange={handleChange}
                                />
                                {errors.storeName && <div className="text-danger color">{errors.storeName}</div>}
                            </div>
                            <div>
                                <label className="container-fluid font" id="font">Dealer Name</label>
                                <input
                                    type="text"
                                    className="form-control m-2"
                                    placeholder="Dealer Name"
                                    id="shopprofile-editpage-text2"
                                    name="dealername"
                                    value={data.dealername}
                                    onChange={handleChange}
                                />
                                {errors.dealername && <div className="text-danger color">{errors.dealername}</div>}
                            </div>
                            <div>
                                <label className="container-fluid font" id="font">Address</label>
                                <input
                                    type="text"
                                    className="form-control m-2"
                                    placeholder="Address"
                                    id="shopprofile-editpage-text2"
                                    name="address"
                                    value={data.address}
                                    onChange={handleChange}
                                />
                                {errors.address && <div className="text-danger color">{errors.address}</div>}
                            </div>
                            <div>
                                <label className="container-fluid font" id="font">District</label>
                                <select
                                    className="form-control m-2"
                                    id="shopprofile-editpage-text2"
                                    name="districts"
                                    value={data.districts}
                                    onChange={handleChange}
                                >
                                    <option>Select District</option>
                                    {districts.map((district, index) => (
                                        <option key={index} value={district}>{district}</option>
                                    ))}
                                </select>
                                {errors.districts && <div className="text-danger color">{errors.districts}</div>}
                            </div>
                            <div>
                                <label className="container-fluid font" id="font">City</label>
                                <input
                                    type="text"
                                    className="form-control m-2"
                                    placeholder="City"
                                    id="shopprofile-editpage-text2"
                                    name="city"
                                    value={data.city}
                                    onChange={handleChange}
                                />
                                {errors.city && <div className="text-danger color">{errors.city}</div>}
                            </div>
                        </Col>
                        <Col>
                            <div>
                                <label className="container-fluid font" id="font">Pincode</label>
                                <input
                                    type="number"
                                    className="form-control m-2"
                                    placeholder="Pincode"
                                    id="shopprofile-editpage-text2"
                                    name="pincode"
                                    value={data.pincode}
                                    onChange={handleChange}
                                     pattern="^\d+$"
                                />
                                {errors.pincode && <div className="text-danger color">{errors.pincode}</div>}
                            </div>
                            <div>
                                <label className="container-fluid font" id="font">Contact Number</label>
                                <input
                                    type="text"
                                    className="form-control m-2"
                                    placeholder="Contact Number"
                                    id="shopprofile-editpage-text2"
                                    name="contact"
                                    value={data.contact}
                                    onChange={handleChange}
                                     pattern="^\d+$"
                                />
                                {errors.contact && <div className="text-danger color">{errors.contact}</div>}
                            </div>
                            <div>
                                <label className="container-fluid font" id="font">Email Id</label>
                                <input
                                    type="email"
                                    className="form-control m-2"
                                    placeholder="Email Id"
                                    id="shopprofile-editpage-text2"
                                    name="email"
                                    value={data.email}
                                    onChange={handleChange}
                                    disabled
                                />
                                {errors.email && <div className="text-danger color">{errors.email}</div>}
                            </div>
                            <div>
                                <label className="container-fluid font" id="font">Registration Number</label>
                                <input
                                    type="text"
                                    className="form-control m-2"
                                    placeholder="Registration Number"
                                    id="shopprofile-editpage-text2"
                                    name="wholesaleregisternumber"
                                    value={data.wholesaleregisternumber}
                                    onChange={handleChange}
                                />
                                {errors.wholesaleregisternumber && <div className="text-danger color">{errors.wholesaleregisternumber}</div>}
                            </div>
                            <div>
                                <label className="container-fluid font" id="font">Dealer License (optional)</label>
                                <input
                                    type="file"
                                    className="form-control m-2"
                                    id="shopprofile-editpage-text2"
                                    name="dealerlisence"
                                    onChange={handleChange}
                                />
                            
                            </div>
                        </Col>
                        <div className="shopprofile-editpage-btn ms-5">
                            <button type="submit" className="shopprofile-editpage-subbtn ms-5">
                                Update
                            </button>
                            <button type="button" className="shopprofile-editpage-subbtn ms-5" onClick={handleCancel}>
                                Cancel
                            </button>
                        </div>
                    </Row>
                </form>
            </div>
        </div>
    )
}

export default WholesaleDealerEditProfile;
