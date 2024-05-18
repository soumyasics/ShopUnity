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
        <div className="col-8">
          {data.length === 0 ? (
            <h1 className="mt-5 text-center">No Shop Owner Requests Found</h1>
          ) : (
            <div>
              <h3 className="mt-5 ms-3">All Shop Owner Requests</h3>
              <div className="table-responsive">
                <Table striped bordered hover className="mt-5 ms-3">
                  <thead>
                    <tr>
                      <th>Shop Name</th>
                      <th>Shop Owner Name</th>
                      <th>Shop Registration Number</th>
                      <th>Shop License</th>
                      <th>Phone Number</th>
                      <th>Accept</th>
                      <th>Reject</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((shopOwner, index) => (
                      <tr key={index}>
                        <td>{shopOwner.shopname}</td>
                        <td>{shopOwner.shopownername}</td>
                        <td>{shopOwner.shopregistrationnumber}</td>
                        <td>
                          <img
                            className="parentimage"
                            style={{ width: "50px", height: "50px" }}
                            src={`${url}${shopOwner.shoplisence}`}
                            alt="Shop License"
                          />
                        </td>
                        <td>{shopOwner.shopownercontact}</td>
                        <td>
                          <button
                            className="btn btn-success"
                            onClick={() => handleAccept(shopOwner._id)}
                          >
                            Accept
                          </button>
                        </td>
                        <td>
                          <button
                            className="btn btn-danger"
                            onClick={() => handleReject(shopOwner._id)}
                          >
                            Reject
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ShopOwnerPendingListPage;
