import React, { useEffect, useState } from 'react'
import WholesaleDealerSidebar from './WholesaleDealerSidebar'
import axiosInstance from '../../APIS/axiosinstatnce';
import { Card, Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function WholesaleDealerViewShops() {

    const [ShopOwner, SetShopOwner] = useState([]);
    const [Ashopownerdata, setAshopownerdata] = useState({});
    const [show, setShow] = useState(false);
    const navigate = useNavigate();
    
    const handleClose = () => setShow(false);
    const handleShow = (shopownerid) => {
        setShow(true);
        axiosInstance
        .get("/get_a_shopowner/" + shopownerid)
        .then((res) => {
            setAshopownerdata(res.data.data);
        })
        .catch((err) => {
            console.log("err", err);
        });
    };

    // useEffect(() => {
    //   if (
    //     localStorage.getItem("token") == null &&
    //     localStorage.getItem("wholesaledealer") == null
    //   ) {
    //     navigate("/wholesaledealerlogin");
    //   }
    // }, [navigate]);

    useEffect(() => {
        getData();
      }, []);
    
        const getData = () => {
            axiosInstance
            .get("/get_all_shopowners")
            .then((res) => {
                let allShopOwners = res?.data?.data || [];
                const filterShopowner = allShopOwners.filter(
                (ShopOwner) => ShopOwner?.status === "accepted"
                );
                SetShopOwner(filterShopowner);
            })
            .catch((err) => {
                console.log("err", err);
            });
        };

        const toggleShopOwnerStatus = (id, currentStatus) => {
            const endpoint = currentStatus ? "/inactivateshopowner/" : "/activateshopowner/";
            axiosInstance
            .post(endpoint + id)
            .then((res) => {
                if (res.status === 200) {
                let msg = res?.data?.message || `Shopowner is now ${currentStatus ? "Inactive" : "Active"}`;
                alert(msg);
                getData();
                setAshopownerdata(prevState => ({
                    ...prevState,
                    ActiveStatus: !currentStatus
                }));
                } else {
                console.log("Error on status change");
                }
            })
            .catch((err) => {
                console.log("err", err);
            });
        };

  return (
    <div>
        <div className='row'>
            <div className='col-2'>
                <WholesaleDealerSidebar/>
            </div>
            <div className='col-9 ms-5'>
                <div className="shopownerpendingrequestdiv">
                    <div className="">
                        {ShopOwner.length === 0 && (
                        <h1 className="text-center"> No ShopOwner Found</h1>
                        )}
                        {ShopOwner.length > 0 && (
                        <div>
                            <h3 className="text-center pt-4">All ShopOwner List</h3>
                            <div className="row rounded-pill m-5 p-2">
                            <div className="col-1">
                                <b>Sl/No</b>
                            </div>
                            <div className="col-2">
                                <b>Shop Name</b>
                            </div>
                            <div className="col-2">
                                <b>Shopowner Name</b>
                            </div>
                            <div className="col-2">
                                <b>Email</b>
                            </div>
                            <div className="col-2">
                                <b>Shopowner Contact</b>
                            </div>
                            <div className="col-2">
                                <b>Shopowner City</b>
                            </div>
                            </div>
                            {ShopOwner.map((item, index) => (
                            <div className="row bg-light rounded-pill m-5 p-2" key={item._id}>
                                <div className="col-1">
                                <b>{index + 1}.</b>
                                </div>
                                <div className="col-2">{item.shopname}</div>
                                <div className="col-2">{item.shopownername}</div>
                                <div className="col-2">{item.shopowneremail}</div>
                                <div className="col-2">{item.shopownercontact}</div>
                                <div className="col-2">{item.shopownercity}</div>
                                <div className="col-1">
                                <button
                                    className="rounded-pill px-3 border-none"
                                    onClick={() => handleShow(item._id)}
                                >
                                    View
                                </button>
                                </div>
                            </div>
                            ))}
                        </div>
                        )}
                    </div>
                </div>
            </div>
            <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
          <Modal.Header closeButton></Modal.Header>
          <div>
            <div>
              <table>
                <div className="p-4">
                  <tr>
                    <td>
                      <Card.Subtitle className="mb-2 text-muted">Shop Name</Card.Subtitle>
                    </td>
                    <td className="ps-3">
                      <Card.Subtitle className="mb-2 text-muted">{Ashopownerdata.shopname}</Card.Subtitle>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <Card.Subtitle className="mb-2 text-muted">Owner Name</Card.Subtitle>
                    </td>
                    <td className="ps-3">
                      <Card.Subtitle className="mb-2 text-muted">{Ashopownerdata.shopownername}</Card.Subtitle>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <Card.Subtitle className="mb-2 text-muted">Address</Card.Subtitle>
                    </td>
                    <td className="ps-3">
                      <Card.Subtitle className="mb-2 text-muted">{Ashopownerdata.shopowneraddress}</Card.Subtitle>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <Card.Subtitle className="mb-2 text-muted">Contact Number</Card.Subtitle>
                    </td>
                    <td className="ps-3">
                      <Card.Subtitle className="mb-2 text-muted">{Ashopownerdata.shopownercontact}</Card.Subtitle>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <Card.Subtitle className="mb-2 text-muted">Email ID</Card.Subtitle>
                    </td>
                    <td className="ps-3">
                      <Card.Subtitle className="mb-2 text-muted">{Ashopownerdata.shopowneremail}</Card.Subtitle>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <Card.Subtitle className="mb-2 text-muted">Shopowner City</Card.Subtitle>
                    </td>
                    <td className="ps-3">
                      <Card.Subtitle className="mb-2 text-muted">{Ashopownerdata.shopownercity}</Card.Subtitle>
                    </td>
                  </tr>
                </div>
              </table>
            </div>
          </div>
        </Modal>
        </div>
    </div>
  )
}

export default WholesaleDealerViewShops
