import React, { useState } from 'react'
import './wholesale.css';

function WholesaleAllDealerViewpage() {
  const [rowsPerPage, setRowsPerPage] = useState(10);
  
    const handleRowsChange = (event) => {
      setRowsPerPage(event.target.value);
    };
  return (
    <div>
      <div className='container'>
        <div id='wholesale-alldealer-viewpage-box'>
          <div className='pt-4 text-center' id='wholesale-alldealer-viewpage-h4'>
            <h4 >Wholesale Dealers List</h4>
          </div>
           <div className='ms-5 mt-5'>
            <label className='wholesale-alldealer-viewpage-label text-center'>Row Per Page {" "}
              <select className='mt-2'>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </label>
           </div>
           <div className='wholesale-alldealer-viewpage-table mt-4 container'>
              <div className='row container ms-5'>
                <div className='col-1'>
                  <span>S.No</span>
                </div>
                <div className='col'>
                  <span>DealerName</span>
                </div>
                <div className='col'>
                  <span>StoreName</span>
                </div>
                <div className='col'>
                  <span>Email ID</span>
                </div>
                <div className='col'>
                  <span>Contact</span>
                </div>
                <div className='col'>
                  <span>View</span>
                </div>
              </div>
           </div>
           <div className='mt-5 container ms-5 wholesale-alldealer-viewpage-table'>
              <div className='row'>
                  <div className='col-1'>
                    <span> &nbsp; &nbsp; &nbsp; 1</span>
                  </div>
                  <div className='col ms-5'>
                    <span>vikas</span>
                  </div>
                  <div className='col'>
                    <span>vk</span>
                  </div>
                  <div className='col me-5'>
                    <span>vikas@gmail.com</span>
                  </div>
                  <div className='col me-5'>
                    <span>9090909090</span>
                  </div>
                  <div className='col'>
                    <button>view</button>
                  </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  )
}

export default WholesaleAllDealerViewpage
