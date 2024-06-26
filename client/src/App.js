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
import WholesaleDealerHomepage from './Pages/wholesaledealer/WholesaleDealerHomepage'
import ShopownerHomepage from './Pages/ShopOwner/ShopownerHomepage'
import DeliveryagentHomepage from './Pages/delivery agent/DeliveryagentHomepage'
import CustomerHomePage from './Pages/customer/CustomerHomePage'
import Navigation from './Pages/Navigation'
import Footer from './Pages/Footer'
import LandingPage from './Pages/Admin/LandingPage';
import AdminDashboard from './Components/Admin/AdminDashboard';
import ShopHomePage from './Components/ShopOwner/ShopHomePage';
import ShopOwnerNav from './Pages/Navs/ShopOwnerNav';
import Shopownerforgotpswrd from './Components/ShopOwner/Shopownerforgotpswrd';
import ShopownerProfile from './Components/ShopOwner/ShopownerProfile';
import ShopOwnerProfileEdit from './Components/ShopOwner/ShopOwnerProfileEdit';
import ShopOwnerPendingList from './Components/Admin/ShopOwnerPendingList';
import ShopOwnerList from './Components/Admin/ShopOwnerList';
import AdminMainNav from './Pages/Navs/AdminMainNav';
import MainNav from './Pages/Navs/MainNav';
import ShopOwnerSidebar from './Pages/ShopOwner/ShopOwnerSidebar';
import WholesaleDealerForgetpswd from './Pages/wholesaledealer/WholesaleDealerForgetpswd';
import WholesaleAllDealerViewpage from './Pages/wholesaledealer/WholesaleAllDealerViewpage';
import LocalNav from './Pages/Navs/LocalNav';

import WholesaleDealerRequestList from './Pages/wholesaledealer/WholesaleDealerRequestList';

import Deliveryagentforgetpswd from './Pages/delivery agent/Deliveryagentforgetpswd';
import ForgetPswdCustomer from './Pages/customer/ForgetPswdCustomer';
import AllDeliveryAgentViewPage from './Pages/delivery agent/AllDeliveryAgentViewPage';
import CustomerlistPage from './Pages/customer/CustomerlistPage';
import DeliveryAgentRequest from './Pages/delivery agent/DeliveryAgentRequest';
import CommonNav from './Components/CommonNav';

// import LocalNav from './Pages/Navs/LocalNav';





function App() {
  const url="http://hybrid.srishticampus.in:4028/"
  // const url="http://localhost:4028/"
  
  return (
    <BrowserRouter basename="/shopunity">
    <Routes>
    <Route path='/' element={[<LandingPage/>,<Footer/>]}/>

    {/* wholesaledealer */}

    <Route path='/wholesaledealerregistration' element={[<MainNav/>,<WholesaleDealerRegistration/>,<Footer/>]} />
    <Route path='/wholesaledealerlogin' element={[<MainNav/>,<WholesaleDealerLogin/>,<Footer/>]} />
    <Route path='/wholesaledealerhome' element={[<CommonNav/>,<WholesaleDealerHomepage/>]} />
    <Route path='/wholesaledealerforgetpswd' element={[<MainNav/>,<WholesaleDealerForgetpswd/>,<Footer/>]} />
    <Route path='/wholesalealldealerviewpage' element={[<WholesaleAllDealerViewpage url={url} />]} />
    <Route path='/wholesaledealerrequests' element={[<WholesaleDealerRequestList url={url} />]} />


{/* Customer */} 

    <Route path='/customerregistration' element={ [<MainNav/>,<CustomerRegistration/>,<Footer/>]} />
    <Route path='/customerlogin' element={[<MainNav/>,<CustomerLogin/>,<Footer/>]} />
    <Route path='/customerhome' element={[<CustomerHomePage/>]} />
    <Route path='/customerforget' element={[<MainNav/>,<ForgetPswdCustomer/>,<Footer/>]} />
    <Route path='/customerlistpage' element={[<CustomerlistPage url={url}/>]} />
    
{/* deliveryagent */}

    <Route path='/deliveryagentregistration' element={[<MainNav/>,<DeliveryAgentRegistration/>,<Footer/>]} />
    <Route path='/deliveryagentlogin' element={[<MainNav/>,<DeliveryagentLogin/>,<Footer/>]} />
    <Route path='/deliveryagenthome' element={[<CommonNav/>,<DeliveryagentHomepage/>]} />
    <Route path='/deliveryagentforgetpswd' element={[<MainNav/>,<Deliveryagentforgetpswd/>,<Footer/>]} />
    <Route path='/alldeliveryagentviewpage' element={[<AllDeliveryAgentViewPage/>]}/>
    <Route path='/deliveryagentrequest' element={[<DeliveryAgentRequest url={url}/>]}/>

{/* shopowner */}

    <Route path='/shopownerregistration' element={[<MainNav/>,<ShopOwnerRegistration/>,<Footer/>]} />
    <Route path='/shopownerlogin' element={[<MainNav/>,<ShopOwnerLogin/>,<Footer/>]} />
    <Route path='/shopownerhome' element={[<CommonNav/>,<ShopHomePage/>]} />
    <Route path='/shopownerforgotpaswd' element={<Shopownerforgotpswrd/>}/>
    <Route path='/shopownerprofile' element={<ShopownerProfile url={{url}}/>}/>
    <Route path='/shopownerprofileedit' element={<ShopOwnerProfileEdit/>}/>
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
