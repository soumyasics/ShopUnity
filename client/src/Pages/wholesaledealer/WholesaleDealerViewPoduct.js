import React, { useState } from 'react'
import sprite from '../../images/sprite.png'
import WholesaleDealerSidebar from './WholesaleDealerSidebar'
import { Card } from 'react-bootstrap';
import '../ShopOwner/shopowner.css'
import { useNavigate } from 'react-router-dom';
function WholesaleDealerViewPoduct() {

    const [data, setData] = useState([]);
    const [filteredData, setfilteredData] = useState([]);
    const navigate =useNavigate()

    const handleFilter = (e) => {
        console.log(e.target.value);
        if (e.target.value) {
          var filter = data.filter((item) => {
            return item.category == e.target.value;
          });
          setfilteredData(filter);
        } else {
          setfilteredData(data);
        }
    };

    const handleViewproduct=(productid)=>{
      navigate("/wholesalerviewproductdetails/"+productid)
    }

  return (
    <div>
    <div className="row" >
      <div className="col-2">
        <WholesaleDealerSidebar/>
      </div> 
      <div className="col me-5">
      <div>
      
      <div className="text-center">
        <h2 className="shopowner-viewproduct-h2">View Products</h2>
      </div>
      <div className="shopowner-viewproduct-divbox container">
        <div>
          <select
            className="ms-3 mt-5 shopowner-viewproduct-select"
            onChange={handleFilter}
          >
            <option value=""> Choose Category</option>
            <option value="Cookies">Cookies</option>
            <option value="Fruits">Fruits</option>
            <option value="Milk Products">Milk Products</option>
          </select>
        </div>
        <div className="row mt-4">
          
            <div className="col-6 col-md-4 col-lg-3 col-xl-2 mb-4">
              <Card className="shopowner-viewproduct-card">
                <label className="m-2"></label>
                <Card.Img
                  className="shopowner-viewproduct-cardimg mt-3"
                  src={sprite}
                />
                <div className="shopowner-viewproduct-button">
                  <button className="shopowner-viewproduct-viewbtn me-4 mt-2 mb-3" onClick={()=>handleViewproduct}>
                    View
                  </button>
                </div>
              </Card>
            </div>
        
        </div>
      </div>
    </div>

      </div>
    </div>
  </div>
  )
}

export default WholesaleDealerViewPoduct
