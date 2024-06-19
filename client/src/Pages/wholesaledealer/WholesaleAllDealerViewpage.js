import React, { useEffect, useState } from 'react'
import './wholesale.css';
import axiosInstance from '../../APIS/axiosinstatnce';

function WholesaleAllDealerViewpage() {
  const[data,setData]=useState([])

  useEffect(()=>{
    axiosInstance.get("/get_all_wholesaledealer")
    .then((res)=>{
      if(res.data.status === 200){
        console.log(res);
        setData(res.data.data || [])
      }
      else{
        setData([])
      }
    })
    .catch((err)=>{
      console.log("error",err);
    })
  }, [])
  
  return (
    // <div>
    //   <div className='container'>
    //     <div id='wholesale-alldealer-viewpage-box'>
    //       <div className='pt-4 text-center' id='wholesale-alldealer-viewpage-h4'>
    //         <h4 >Wholesale Dealers List</h4>
    //       </div>
    //       <div className='ms-5 mt-5'>
    //         <label className='wholesale-alldealer-viewpage-label text-center'>Row Per Page {" "}
    //           <select className='mt-2'>
    //             <option>1</option>
    //             <option>2</option>
    //             <option>3</option>
    //             <option>4</option>
    //             <option>5</option>
    //           </select>
    //         </label>
    //       </div>
          
    //         <div className='wholesale-alldealer-viewpage-table mt-4 container'>
    //           <div className='row container ms-5'>
    //             <div className='col-1'>
    //               <span>S.No</span>
    //             </div>
    //             <div className='col'>
    //               <span>DealerName</span>
    //             </div>
    //             <div className='col'>
    //               <span>StoreName</span>
    //             </div>
    //             <div className='col'>
    //               <span>Email ID</span>
    //             </div>
    //             <div className='col'>
    //               <span>Contact</span>
    //             </div>
    //             <div className='col'>
    //               <span>View</span>
    //             </div>
    //           </div>
    //        </div>
    //        <div className='table'>
    //         <table className='table'>
    //           <tbody className='container'>
    //             <tr>
    //               <td ms-5>1</td>
    //               <td>Vikas</td>
    //               <td>Vk</td>
    //               <td>vikas@gmail.com</td>
    //               <td>90900909</td>
    //               <td><button type='submit'>View</button></td>
    //             </tr>
    //           </tbody>
    //           </table>
    //        </div>
           
    //         {/* <div className='mt-5  ms-5 wholesale-alldealer-viewpage-table1'>
    //         <div className='row'>
    //             <div className='col-1 mt-1'>
    //               <span> &nbsp; &nbsp; &nbsp; 1</span>
    //             </div>
    //             <div className='col mt-1 ms-5'>
    //               <span></span>
    //             </div>
    //             <div className='col v'>
    //               <span></span>
    //             </div>
    //             <div className='col mt-1 '>
    //               <span>vikas@gmail.com</span>
    //             </div>
    //             <div className='col mt-1'>
    //               <span>9090909090</span>
    //             </div>
    //             <div className='col mt-1'>
    //               <button className='wholesale-alldealer-viewpage-viewbtn'>view</button>
    //             </div>
    //         </div>
    //      </div> */}
           
    //         {/* <div>
    //           <h1>No data found</h1>
    //         </div> */}
         
           
           
    //     </div>
    //   </div>
    // </div>
    <div>
          <div className="">
        {/* <Link className="text-dark w-100" to="/admin_dashboard">
          <FaArrowLeftLong />
        </Link> */}
      </div>
      <div className="">
        <div className="">
          <div className="wholesale-alldealer-viewpage-div1 container">
            {data.length === 0 && (
             <h1 className="text-center"> No ShopOwner Found</h1>
             )} 
             {data.length > 0 && ( 
              <div>
                <h3 className="text-center pt-4 wholesale-alldealer-viewpage-h3 ">WholeSale Dealer List</h3>
                <div className="row rounded-pill m-5 p-2 container">
                  <div className="col-1">
                    <b>Sl/No</b>
                  </div>
                  <div className="col-2">
                    <b>Dealer Name</b>
                  </div>
                  <div className="col-2">
                    <b>Store Name</b>
                  </div>
                  <div className="col-2">
                    <b>Email Id </b>
                  </div>
                  <div className="col-2">
                    <b>Contact</b>
                  </div>
                  <div className="col-2">
                    <b> </b>
                  </div>
                </div>
                {data.map((wholesaledealer, index) => (
                  <div className="row bg-light rounded-pill m-5 p-2">
                    <div className="col-1">
                      <b>{index + 1}.</b>
                    </div>
                    <div className="col-2">{wholesaledealer.dealername}</div>
                    <div className="col-2">{wholesaledealer.storename}</div>
                    <div className="col-2">{wholesaledealer.email} </div>
                    <div className="col-2 ms-5">{wholesaledealer.contact}</div>
                    <div className="col-1">
                      <button
                        className="rounded-pill px-3 border-none ms-5"
                        // onClick={() => handleShow()}
                        id='wholesale-alldealer-viewpage-viewbtn'
                      >
                        view
                      </button>
                    </div>
                  </div>
                ))}
              </div>
             )} 
          </div>
        </div>
    </div>
    </div>
  )
}

export default WholesaleAllDealerViewpage
