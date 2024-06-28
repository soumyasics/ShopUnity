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
    <Route path='/wholesaledealerhome' element={[<Navigation/>,<WholesaleDealerHomepage/>,<Footer/>]} />
    <Route path='/wholesaledealerforgetpswd' element={[<MainNav/>,<WholesaleDealerForgetpswd/>,<Footer/>]} />
    <Route path='/wholesalealldealerviewpage' element={[<MainNav/>,<WholesaleAllDealerViewpage/>]} />
    

{/* Customer */} 

    <Route path='/customerregistration' element={ [<Navigation/>,<CustomerRegistration/>,<Footer/>]} />
    <Route path='/customerlogin' element={[<Navigation/>,<CustomerLogin/>,<Footer/>]} />
    <Route path='/customerhome' element={[<Navigation/>,<CustomerHomePage/>,<Footer/>]} />

{/* deliveryagent */}

    <Route path='/deliveryagentregistration' element={[<LocalNav/>,<DeliveryAgentRegistration/>,<Footer/>]} />
    <Route path='/deliveryagentlogin' element={[<MainNav/>,<DeliveryagentLogin/>,<Footer/>]} />
    <Route path='/deliveryagenthome' element={[<Navigation/>,<DeliveryagentHomepage/>,<Footer/>]} />

{/* shopowner */}

    <Route path='/shopownerregistration' element={[<MainNav/>,<ShopOwnerRegistration/>,<Footer/>]} />
    <Route path='/shopownerlogin' element={[<MainNav/>,<ShopOwnerLogin/>,<Footer/>]} />
    <Route path='/shopownerhome' element={[<ShopHomePage/>]} />
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
