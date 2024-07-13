import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WholesaleDealerRegistration from "./Pages/wholesaledealer/WholesaleDealerRegistration";
import WholesaleDealerLogin from "./Pages/wholesaledealer/WholesaleDealerLogin";
import CustomerRegistration from "./Pages/customer/CustomerRegistration";
import CustomerLogin from "./Pages/customer/CustomerLogin";
import DeliveryAgentRegistration from "./Pages/delivery agent/DeliveryAgentRegistration";
import DeliveryagentLogin from "./Pages/delivery agent/DeliveryagentLogin";
import ShopOwnerRegistration from "./Pages/ShopOwner/ShopOwnerRegistration";
import ShopOwnerLogin from "./Pages/ShopOwner/ShopOwnerLogin";
import AdminLogin from "./Pages/Admin/AdminLogin";
import DeliveryagentHomepage from "./Pages/delivery agent/DeliveryagentHomepage";
import CustomerHomePage from "./Pages/customer/CustomerHomePage";
import Footer from "./Pages/Footer";
import LandingPage from "./Pages/Admin/LandingPage";
import AdminDashboard from "./Components/Admin/AdminDashboard";
import ShopHomePage from "./Components/ShopOwner/ShopHomePage";
import Shopownerforgotpswrd from "./Components/ShopOwner/Shopownerforgotpswrd";
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
import CustomerProductCardPage from './Pages/customer/CustomerProductCardPage';
import OrderConfirmation from './Pages/customer/OrderConfirmation';
import ShopownerCustomerOrderRequest from './Pages/ShopOwner/ShopownerCustomerOrderRequest';
import ShopownerCustomerOrderAccept from './Pages/ShopOwner/ShopownerCustomerOrderAccept';
import DeliveryAgentDeliveryRequest from './Pages/delivery agent/DeliveryAgentDeliveryRequest';
import DeliveryAgentDeliveryUpdate from "./Pages/delivery agent/DeliveryAgentDeliveryUpdate";
import CustomerOrdersViewOrder from "./Pages/customer/CustomerOrdersViewOrder";
import CustomerViewallproduct from "./Pages/customer/CustomerViewallproduct";
import WholesaleDealerAddProduct from "./Pages/wholesaledealer/WholesaleDealerAddProduct";
import WholesaleDealerViewPoduct from "./Pages/wholesaledealer/WholesaleDealerViewPoduct";
import WholesaleDealerViewProductDetails from "./Pages/wholesaledealer/WholesaleDealerViewProductDetails";
import WholesaleDealerEditProduct from "./Pages/wholesaledealer/WholesaleDealerEditProduct";
import ShopownerViewWholesaleDealer from "./Pages/ShopOwner/ShopownerViewWholesaleDealer";
import WholesaleDealerViewShops from "./Pages/wholesaledealer/WholesaleDealerViewShops";
import ShopownerViewWDProductView from "./Pages/ShopOwner/ShopownerViewWDProductView";
import Shopownerorderproductviewproduct from "./Pages/ShopOwner/Shopownerorderproductviewproduct";
import Shopownerwdviewproduct from "./Pages/ShopOwner/Shopownerwdviewproduct";
import ShopownerOrderProductCart from "./Pages/ShopOwner/ShopownerOrderProductCart";
import WholesalerShopownerNewRequest from "./Pages/wholesaledealer/WholesalerShopownerNewRequest";
import WholesalerShopownerAcceptorders from "./Pages/wholesaledealer/WholesalerShopownerAcceptorders";
import ShopownerOrderProductAcceptOrder from "./Pages/ShopOwner/ShopownerOrderProductAcceptOrder";


function App() {
  const url="http://hybrid.srishticampus.in:4028/"
  // const url = "http://localhost:4028/";

  return (
    <BrowserRouter basename="/shopunity">
      <Routes>
        <Route path="/" element={[<LandingPage />, <Footer />]} />

        {/* wholesaledealer */}

        <Route
          path="/wholesaledealerregistration"
          element={[<MainNav />, <WholesaleDealerRegistration />, <Footer />]}
        />
        <Route
          path="/wholesaledealerlogin"
          element={[<MainNav />, <WholesaleDealerLogin />, <Footer />]}
        />
        <Route
          path="/wholesaledealerhome"
          element={[<CommonNav />, <WholesaleHome />]}
        />
        <Route
          path="/wholesaledealerforgetpswd"
          element={[<MainNav />, <WholesaleDealerForgetpswd />, <Footer />]}
        />
        <Route
          path="/wholesalealldealerviewpage"
          element={[<WholesaleAllDealerViewpage url={url} />]}
        />
        <Route
          path="/wholesaledealerrequests"
          element={[<WholesaleDealerRequestList url={url} />]}
        />
        <Route
          path="/wholesaledealersidebar"
          element={<WholesaleDealerSidebar />}
        />
        <Route
          path="/wholesaledealerprofile"
          element={<WholesaleDelaerProfilePage url={url} />}
        />
        <Route
          path="/wholesaledealereditprofile"
          element={<WholesaleDealerEditProfile />}
        />
        <Route path="/wholesalermain" element={<WholesalerMain />} />
        <Route path="/wholesaleraddproduct" element={<WholesaleDealerAddProduct/>} />
        <Route path="/wholesalerviewproduct" element={<WholesaleDealerViewPoduct/>} />
        <Route path="/wholesalerviewproductdetails" element={<WholesaleDealerViewProductDetails/>} />
        <Route path="/wholesalereditproduct" element={<WholesaleDealerEditProduct/>} />
        <Route path="/wholesalerviewshops" element={<WholesaleDealerViewShops/>} />
        <Route path="/wholesalershopownernewrequest" element={<WholesalerShopownerNewRequest/>} />
        <Route path="/wholesalershopowneracceptorders" element={<WholesalerShopownerAcceptorders/>} />

        {/* Customer */}


    <Route path='/customerregistration' element={ [<MainNav/>,<CustomerRegistration/>,<Footer/>]} />
    <Route path='/customerlogin' element={[<MainNav/>,<CustomerLogin/>,<Footer/>]} />
    <Route path='/customerhome' element={[<CustomerHomePage/>]} />
    <Route path='/customerforget' element={[<MainNav/>,<ForgetPswdCustomer/>,<Footer/>]} />
    <Route path='/customerlistpage' element={[<CustomerlistPage url={url}/>]} />
    <Route path='/customerprofile' element={<CustomerProfile/>} />
    <Route path='/customereditprofile' element={<CustomerEditProfile/>} />
    <Route path='/customerviewshop' element={[<CustomerNavbar/>,<CustomerviewShops/>]} />
    <Route path='/customerviewproduct' element={[<CustomerNavbar/>,<CustomerViewallproduct url={url}/>]} />
    <Route path='/customerviewproductdetail' element={<CustomerViewProductDetail url={url}/>} />
    <Route path='/customerproductcardpage' element={<CustomerProductCardPage/>} />
    <Route path='/customerordervieworder' element={<CustomerOrdersViewOrder/>} />

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
    <Route path='/deliveryagentdeliveryrequest' element={<DeliveryAgentDeliveryRequest/>} />
    <Route path='/deliveryagentdeliveryupdate' element={<DeliveryAgentDeliveryUpdate/>} />

        <Route
          path="/customerregistration"
          element={[<MainNav />, <CustomerRegistration />, <Footer />]}
        />
        <Route
          path="/customerlogin"
          element={[<MainNav />, <CustomerLogin />, <Footer />]}
        />
        <Route path="/customerhome" element={[<CustomerHomePage />]} />
        <Route
          path="/customerforget"
          element={[<MainNav />, <ForgetPswdCustomer />, <Footer />]}
        />
        <Route
          path="/customerlistpage"
          element={[<CustomerlistPage url={url} />]}
        />
        <Route path="/customerprofile" element={<CustomerProfile />} />
        <Route path="/customereditprofile" element={<CustomerEditProfile />} />
        <Route
          path="/customerviewshop"
          element={[<CustomerNavbar />, <CustomerviewShops />]}
        />
        <Route
          path="/customerviewproduct/:shopownerid"
          element={[<CustomerNavbar />, <CustomerViewProductPage url={url} />]}
        />
        <Route
          path="/customerviewproductdetail/:productid"
          element={<CustomerViewProductDetail url={url} />}
        />

        <Route path="/customerproductcart" element={<CustomerProductCardPage url={url}/>} />

        {/* deliveryagent */}

        <Route
          path="/deliveryagentregistration"
          element={[<MainNav />, <DeliveryAgentRegistration />, <Footer />]}
        />
        <Route
          path="/deliveryagentlogin"
          element={[<MainNav />, <DeliveryagentLogin />, <Footer />]}
        />
        <Route
          path="/deliveryagenthome"
          element={[<CommonNav />, <DeliveryagentHomepage />]}
        />
        <Route
          path="/deliveryagentforgetpswd"
          element={[<MainNav />, <Deliveryagentforgetpswd />, <Footer />]}
        />
        <Route
          path="/alldeliveryagentviewpage"
          element={[<AllDeliveryAgentViewPage url={url} />]}
        />
        <Route
          path="/deliveryagentrequest"
          element={[<DeliveryAgentRequest url={url} />]}
        />
        <Route
          path="/deliveryagentsidebar"
          element={<DeliveryagentSidebar />}
        />
        <Route path="/deliveryagentmain" element={<DeliveryagentMain />} />
        <Route
          path="/deliveryagentprofile"
          element={<DeliveryAgentProfile url={url} />}
        />
        <Route
          path="/deliveryagentprofileedit"
          element={<DeliveryagentProfileEdit url={url} />}
        />

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
    <Route path='/shopownercustomerorderrequest' element={<ShopownerCustomerOrderRequest url={url}/>} />
    <Route path='/shopownercustomerorderaccept' element={<ShopownerCustomerOrderAccept url={url} />} />
    <Route path='/shopownerviewwholesaledealer' element={<ShopownerViewWholesaleDealer/>} />
    <Route path='/shopownerviewwdproductview' element={<ShopownerViewWDProductView/>} />
    <Route path='/shopownerorderproductviewproduct' element={<Shopownerorderproductviewproduct/>} />
    <Route path='/shopownerwdviewproduct' element={<Shopownerwdviewproduct/>} />
    <Route path='/shopownerorderproductcart' element={<ShopownerOrderProductCart/>} />
    <Route path='/shopownerorderproductacceptorder' element={<ShopownerOrderProductAcceptOrder url={url} />} />


{/* Admin */}
        {/* shopowner */}


        <Route
          path="/shopownerregistration"
          element={[<MainNav />, <ShopOwnerRegistration />, <Footer />]}
        />
        <Route
          path="/shopownerlogin"
          element={[<MainNav />, <ShopOwnerLogin />, <Footer />]}
        />
        <Route path="/shopownerhome" element={[<ShopHomePage />]} />
        <Route
          path="/shopownerforgotpaswd"
          element={<Shopownerforgotpswrd />}
        />
        <Route
          path="/shopownerprofile"
          element={<ShopownerProfilepage data="shopownerprofile" url={url} />}
        />
        <Route
          path="/shopownerprofileedit"
          element={<ShopOwnerProfileEditPage />}
        />
        <Route path="/shopowneradditem" element={<ShopAddItem />} />
        <Route
          path="/shopownerviewproduct"
          element={<ShopownerViewProduct url={url} />}
        />
        <Route
          path="/shopownerviewproductdetails/:productid"
          element={<ShopownerviewProductDetails url={url} />}
        />
        <Route
          path="/shopownereditproduct/:productid"
          element={<ShopownerEditProduct url={url} />}
        />
        <Route path="/shopownerdashboard" element={<ShopownerDashBoard />} />
        {/* /:productid */}
        {/* Admin */}

        <Route
          path="/Admin"
          element={[<AdminMainNav />, <AdminLogin />, <Footer />]}
        />
        <Route path="/admin_dashboard" element={<AdminDashboard />} />
        <Route
          path="/shopownerspendinglist"
          element={<ShopOwnerPendingList url={url} />}
        ></Route>
        <Route
          path="/shopownerslist"
          element={<ShopOwnerList url={url} />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
