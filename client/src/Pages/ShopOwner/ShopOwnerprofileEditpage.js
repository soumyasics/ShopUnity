import React, { useEffect, useState } from "react";
import axiosInstance from "../../APIS/axiosinstatnce";
import { Link, useNavigate } from "react-router-dom";

function ShopOwnerProfileEditPage() {
  const [data, setData] = useState({
    shopname: "",
    shopownername: "",
    shopownercontact: "",
    shopowneremail: "",
    shopowneraddress: "",
    shopregistrationnumber: "",
  });

  const navigate = useNavigate();
  const shopownerid = localStorage.getItem("shopowner");

  useEffect(() => {
    axiosInstance
      .get("/get_a_shopowner/" + shopownerid)
      .then((res) => {
        setData(res.data.data);
        console.log(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [shopownerid]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleEdit = (e) => {
    e.preventDefault();
    axiosInstance
      .post("/edit_a_shopowner/" + shopownerid, data)
      .then((res) => {
        console.log(res);
        navigate("/shopownerprofile");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="pt-5">
      <div className="shopownerprofile pt-5">
        <div className="pt-5">
          <div className="container border p-5 rounded">
            <div className="row">
              <div className="col">
                <label className="mt-4">Shop Name: </label>
                <input
                  className="shopownerprofilinput form-control text-light bg-transparent border-none"
                  placeholder="Enter Shop Name"
                  name="shopname"
                  value={data.shopname}
                  onChange={handleInputChange}
                ></input>
                <label className="mt-4">Shop Owner Email: </label>
                <input
                  className="shopownerprofilinput form-control text-light bg-transparent border-none"
                  placeholder="Enter Shop Owner Email"
                  name="shopowneremail"
                  value={data.shopowneremail}
                  onChange={handleInputChange}
                ></input>
                <label className="mt-4">Shop Registration Number: </label>
                <input
                  className="shopownerprofilinput form-control text-light bg-transparent border-none"
                  placeholder="Enter Shop Registration Number"
                  name="shopregistrationnumber"
                  value={data.shopregistrationnumber}
                  onChange={handleInputChange}
                ></input>
              </div>
              <div className="col">
                <label className="mt-4">Shop Owner Name: </label>
                <input
                  className="shopownerprofilinput form-control bg-transparent border-none"
                  placeholder="Enter Shop Owner Name"
                  name="shopownername"
                  value={data.shopownername}
                  onChange={handleInputChange}
                  style={{ color: "white" }}
                ></input>
                <label className="mt-4">Shop Owner Contact: </label>
                <input
                  className="shopownerprofilinput form-control text-light bg-transparent border-none"
                  placeholder="Enter Shop Owner Contact"
                  name="shopownercontact"
                  value={data.shopownercontact}
                  onChange={handleInputChange}
                ></input>
                <label className="mt-4">Shop Owner Address: </label>
                <input
                  className="shopownerprofilinput form-control text-light bg-transparent border-none"
                  placeholder="Enter Shop Owner Address"
                  name="shopowneraddress"
                  value={data.shopowneraddress}
                  onChange={handleInputChange}
                ></input>
              </div>
              <div className="btn btn-light mt-4" onClick={handleEdit}>
                Edit
              </div>
              <Link to="/shopownerprofile">
                <div className="btn btn-secondary mt-4">Cancel</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShopOwnerProfileEditPage;
