import React, { useState, useEffect } from 'react';
import Table from "react-bootstrap/Table";
import axiosInstance from '../../APIS/axiosinstatnce';
import Sidebar from '../Admin/Sidebar';
import 'bootstrap/dist/css/bootstrap.min.css';

function ShopOwnerPendingListPage({ url }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  function getData() {
    axiosInstance.get("/get_all_shopowners")
      .then((res) => {
        let allShopowners = res?.data?.data || [];
        const filterPendingReqs = allShopowners.filter(
          (shopowner) => shopowner?.status === "pending"
        );
        setData(filterPendingReqs);
      })
      .catch((err) => {
        console.log("err", err);
      });
  }

  function handleReject(id) {
    axiosInstance
      .post("/rejectshopowner/" + id)
      .then((res) => {
        if (res.status === 200) {
          let msg = res?.data?.message || "Shopowner Registration Request Rejected";
          alert(msg);
          getData();
        } else {
          console.log("err on reject request");
        }
      })
      .catch((err) => {
        console.log("err", err);
      });
  }

  function handleAccept(id) {
    axiosInstance
      .post("/acceptshopowner/" + id)
      .then((res) => {
        if (res.status === 200) {
          let msg = res?.data?.message || "Shopowner Registration Request Accepted";
          alert(msg);
          getData();
        } else {
          console.log("err on accept request");
        }
      })
      .catch((err) => {
        console.log("err", err);
      });
  }

  return (
    <div className="shop-owner-pending-list-page">
<div className="row">
  <div className="col-2">
    <Sidebar />
  </div>
  <div style={{ maxWidth: "77%" }} className="container">
    {data.length === 0 && (
      <h1 className="mt-5"> No ShopOwner Found</h1>
    )}
    {data.length > 0 && (
      <div>
        <h3 className="mt-5 ms-3">All ShopOwner List</h3>
        <Table
          striped
          bordered
          hover
          className="mt-5 ms-3"
          style={{ width: "100%" }}
        >
          <thead style={{ height: "50px" }}>
            <tr>
              <th>Shopname</th>
              <th>Shopowner Name</th>
              <th>Shoplisence</th>
              <th>Shop Registration Number</th>
              <th>Shopowner Contact</th>
              <th>Accept</th>
              <th>Reject</th>
            </tr>
          </thead>
          <tbody>
            {data.map((ShopOwner, index) => {
              return (
                <tr key={index} className="mt-4">
                  <td>{ShopOwner.shopname}</td>
                  <td>{ShopOwner.shopownername}</td>
                  <td>
                    <img
                      className="parentimage"
                      alt="img" style={{width:"50px",height:"50px"}}
                      src={`${url}${ShopOwner.shoplisence}`}
                    ></img>
                  </td>
                  <td>{ShopOwner.shopregistrationnumber}</td>
                  <td>{ShopOwner.shopownercontact}</td>
                  <td>
                          <button
                            className="btn btn-success"
                            onClick={() => handleAccept(ShopOwner._id)}
                          >
                            Accept
                          </button>
                        </td>
                        <td>
                          <button
                            className="btn btn-danger"
                            onClick={() => handleReject(ShopOwner._id)}
                          >
                            Reject
                          </button>
                        </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    )}
  </div>
</div>
</div>

  );
}

export default ShopOwnerPendingListPage;


