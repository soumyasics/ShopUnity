import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WholesaleDealerRegistration from './Pages/wholesaledealer/WholesaleDealerRegistration';
import WholesaleDealerLogin from './Pages/wholesaledealer/WholesaleDealerLogin';
import CustomerRegistration from './Pages/customer/CustomerRegistration'
import CustomerLogin from './Pages/customer/CustomerLogin';
import DeliveryAgentRegistration from './Pages/delivery agent/DeliveryAgentRegistration'
import DeliveryagentLogin from './Pages/delivery agent/DeliveryagentLogin'
import ShopOwnerRegistration from './Pages/ShopOwner/ShopOwnerRegistration'
import ShopOwnerLogin from './Pages/ShopOwner/ShopOwnerLogin'
import AdminLogin from './Pages/Admin/AdminLogin';
import DeliveryagentHomepage from './Pages/delivery agent/DeliveryagentHomepage'
import CustomerHomePage from './Pages/customer/CustomerHomePage'
import Footer from './Pages/Footer'
import LandingPage from './Pages/Admin/LandingPage';
import AdminDashboard from './Components/Admin/AdminDashboard';
import ShopHomePage from './Components/ShopOwner/ShopHomePage';
import Shopownerforgotpswrd from './Components/ShopOwner/Shopownerforgotpswrd';
// import ShopownerProfile from './Components/ShopOwner/ShopownerProfile';
import ShopOwnerPendingList from './Components/Admin/ShopOwnerPendingList';
import ShopOwnerList from './Components/Admin/ShopOwnerList';
import AdminMainNav from './Pages/Navs/AdminMainNav';
import MainNav from './Pages/Navs/MainNav';
import WholesaleDealerForgetpswd from './Pages/wholesaledealer/WholesaleDealerForgetpswd';
import WholesaleAllDealerViewpage from './Pages/wholesaledealer/WholesaleAllDealerViewpage';

import WholesaleDealerRequestList from './Pages/wholesaledealer/WholesaleDealerRequestList';

import Deliveryagentforgetpswd from './Pages/delivery agent/Deliveryagentforgetpswd';
import ForgetPswdCustomer from './Pages/customer/ForgetPswdCustomer';
import AllDeliveryAgentViewPage from './Pages/delivery agent/AllDeliveryAgentViewPage';
import CustomerlistPage from './Pages/customer/CustomerlistPage';
import DeliveryAgentRequest from './Pages/delivery agent/DeliveryAgentRequest';
import CommonNav from './Components/CommonNav';
import WholesaleHome from './Pages/wholesaledealer/WholesaleHome';
import DeliveryagentSidebar from './Pages/delivery agent/DeliveryagentSidebar';
import WholesaleDealerSidebar from './Pages/wholesaledealer/WholesaleDealerSidebar';
import WholesaleDelaerProfilePage from './Pages/wholesaledealer/WholesaleDelaerProfilePage';
import WholesaleDealerEditProfile from './Pages/wholesaledealer/WholesaleDealerEditProfile';
import WholesalerMain from './Pages/wholesaledealer/WholesalerMain';
import DeliveryagentMain from './Pages/delivery agent/DeliveryagentMain';
import CustomerProfile from './Pages/customer/CustomerProfile';
import ShopAddItem from './Pages/ShopOwner/ShopAddItem';
import ShopownerViewProduct from './Pages/ShopOwner/ShopownerViewProduct';
import ShopownerviewProductDetails from './Pages/ShopOwner/ShopownerviewProductDetails';
import ShopownerEditProduct from './Pages/ShopOwner/ShopownerEditProduct';
import CustomerNavbar from './Pages/customer/CustomerNavbar';
import CustomerviewShops from './Pages/customer/CustomerviewShops';
import CustomerViewProductPage from './Pages/customer/CustomerViewProductPage';
import CustomerViewProductDetail from './Pages/customer/CustomerViewProductDetail';
import CustomerMainNav from './Pages/customer/CustomerMainNav';
import CustomerEditProfile from './Pages/customer/CustomerEditProfile';
import DeliveryAgentProfile from './Pages/delivery agent/DeliveryAgentProfile';
import DeliveryagentProfileEdit from './Pages/delivery agent/DeliveryagentProfileEdit';
import ShopownerProfilepage from './Pages/ShopOwner/ShopownerProfilepage';
import ShopOwnerProfileEditPage from './Pages/ShopOwner/ShopOwnerprofileEditpage';
import ShopownerDashBoard from './Pages/ShopOwner/ShopownerDashBoard';






function App() {
  // const url="http://hybrid.srishticampus.in:4028/"
  const url="http://localhost:4028/"
  
  return (
    <BrowserRouter basename="/shopunity">
    <Routes>
    <Route path='/' element={[<LandingPage/>,<Footer/>]}/>

    {/* wholesaledealer */}

    <Route path='/wholesaledealerregistration' element={[<MainNav/>,<WholesaleDealerRegistration/>,<Footer/>]} />
    <Route path='/wholesaledealerlogin' element={[<MainNav/>,<WholesaleDealerLogin/>,<Footer/>]} />
    <Route path='/wholesaledealerhome' element={[<CommonNav/>,<WholesaleHome/>]} />
    <Route path='/wholesaledealerforgetpswd' element={[<MainNav/>,<WholesaleDealerForgetpswd/>,<Footer/>]} />
    <Route path='/wholesalealldealerviewpage' element={[<WholesaleAllDealerViewpage url={url} />]} />
    <Route path='/wholesaledealerrequests' element={[<WholesaleDealerRequestList url={url} />]} />
    <Route path='/wholesaledealersidebar' element={<WholesaleDealerSidebar/>} />
    <Route path='/wholesaledealerprofile' element={<WholesaleDelaerProfilePage url={url}/>} />
    <Route path='/wholesaledealereditprofile' element={<WholesaleDealerEditProfile />} />
    <Route path='/wholesalermain' element={<WholesalerMain/>} />

{/* Customer */} 

    <Route path='/customerregistration' element={ [<MainNav/>,<CustomerRegistration/>,<Footer/>]} />
    <Route path='/customerlogin' element={[<MainNav/>,<CustomerLogin/>,<Footer/>]} />
    <Route path='/customerhome' element={[<CustomerHomePage/>]} />
    <Route path='/customerforget' element={[<MainNav/>,<ForgetPswdCustomer/>,<Footer/>]} />
    <Route path='/customerlistpage' element={[<CustomerlistPage url={url}/>]} />
    <Route path='/customerprofile' element={<CustomerProfile/>} />
    <Route path='/customereditprofile' element={<CustomerEditProfile/>} />
    <Route path='/customerviewshop' element={[<CustomerNavbar/>,<CustomerviewShops/>]} />
    <Route path='/customerviewproduct' element={[<CustomerNavbar/>,<CustomerViewProductPage url={url}/>]} />
    <Route path='/customerviewproductdetail' element={<CustomerViewProductDetail url={url}/>} />
    
{/* deliveryagent */}

    <Route path='/deliveryagentregistration' element={[<MainNav/>,<DeliveryAgentRegistration/>,<Footer/>]} />
    <Route path='/deliveryagentlogin' element={[<MainNav/>,<DeliveryagentLogin/>,<Footer/>]} />
    <Route path='/deliveryagenthome' element={[<CommonNav/>,<DeliveryagentHomepage/>]} />
    <Route path='/deliveryagentforgetpswd' element={[<MainNav/>,<Deliveryagentforgetpswd/>,<Footer/>]} />
    <Route path='/alldeliveryagentviewpage' element={[<AllDeliveryAgentViewPage url={url}/>]}/>
    <Route path='/deliveryagentrequest' element={[<DeliveryAgentRequest url={url}/>]}/>
    <Route path='/deliveryagentsidebar' element={<DeliveryagentSidebar/>}/>
    <Route path='/deliveryagentmain' element={<DeliveryagentMain/>} />
    <Route path='/deliveryagentprofile' element={<DeliveryAgentProfile url={url}/>} />
    <Route path='/deliveryagentprofileedit' element={<DeliveryagentProfileEdit url={url}/>} />

{/* shopowner */}

    <Route path='/shopownerregistration' element={[<MainNav/>,<ShopOwnerRegistration/>,<Footer/>]} />
    <Route path='/shopownerlogin' element={[<MainNav/>,<ShopOwnerLogin/>,<Footer/>]} />
    <Route path='/shopownerhome' element={[<ShopHomePage/>]} />
    <Route path='/shopownerforgotpaswd' element={<Shopownerforgotpswrd/>}/>
    <Route path='/shopownerprofile' element={<ShopownerProfilepage data="shopownerprofile" url={url}/>}/>
    <Route path='/shopownerprofileedit' element={<ShopOwnerProfileEditPage/>}/>
    <Route path='/shopowneradditem' element={ <ShopAddItem/>} />
    <Route path='/shopownerviewproduct' element={<ShopownerViewProduct url={url}/>}/>
    <Route path='/shopownerviewproductdetails/:productid' element={<ShopownerviewProductDetails url={url} />}/>
    <Route path='/shopownereditproduct/:productid' element={<ShopownerEditProduct url={url}/>}/>
    <Route path='/shopownerdashboard' element={<ShopownerDashBoard/>}/>
    {/* /:productid */}
{/* Admin */}

    <Route path='/Admin' element={[<AdminMainNav/>,<AdminLogin/>,<Footer/>]} />
    <Route path='/admin_dashboard' element={<AdminDashboard/>}/>
    <Route path='/shopownerspendinglist' element={<ShopOwnerPendingList url={url} />}></Route>
    <Route path='/shopownerslist' element={<ShopOwnerList url={url} />}></Route>
    </Routes>
     
    </BrowserRouter>

  );
}

export default App;
