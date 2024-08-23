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
import ShopownerViewproductList from "./Pages/ShopOwner/ShopownerViewproductList";
import ViewWholesalerdeliveryrequest from "./Pages/delivery agent/ViewWholesalerdeliveryrequest";
import DeliveryagentComplaint from "./Pages/delivery agent/DeliveryagentComplaint";
import WholesaleDealerComplaint from "./Pages/wholesaledealer/WholesaleDealerComplaint";
// import Complaints from "./Pages/Admin/AdminCustomerComplaints";
import ShopownerComplaint from "./Pages/ShopOwner/ShopownerComplaint";
import CustomerComplaint from "./Pages/customer/CustomerComplaint";
import CustomerOrderlist from "./Pages/Admin/CustomerOrderlist";
import ShoporderList from "./Pages/Admin/ShoporderList";
import ShopownerWholesaleDealerList from "./Pages/ShopOwner/ShopownerWholesaleDealerList";
import DealerComparion from "./Pages/ShopOwner/DealerComparion";
import ShopownerNotification from "./Pages/ShopOwner/ShopownerNotification";
import AdminCustomerComplaints from "./Pages/Admin/AdminCustomerComplaints";
import AdminviewShopownerComplaint from "./Pages/Admin/AdminviewShopownerComplaint";
import AdminviewDeliveryAgentComplaints from "./Pages/Admin/AdminviewDeliveryAgentComplaints";
import AdminviewWholesalerComplaints from "./Pages/Admin/AdminviewWholesalerComplaints";
import DeliveryAgentCustomerDeliveryUpdate from "./Pages/delivery agent/DeliveryAgentCustomerDeliveryUpdate";


function App() {
  const url="http://hybrid.srishticampus.in:4028/"
  // const url = "http://localhost:4028/";

  return (
    <BrowserRouter basename="/shopunity">
      <Routes>
        <Route path="/" element={[<LandingPage />,<Footer />]} />

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
          element={[<CommonNav />, <WholesaleHome url={url} />,<Footer />]}
        />
        <Route
          path="/wholesaledealerforgetpswd"
          element={[<MainNav />, <WholesaleDealerForgetpswd />, <Footer />]}
        />
        <Route
          path="/wholesalealldealerviewpage"
          element={[<WholesaleAllDealerViewpage url={url} />,<Footer />]}
        />
        <Route
          path="/wholesaledealerrequests"
          element={[<WholesaleDealerRequestList url={url} />,<Footer />]}
        />
        <Route
          path="/wholesaledealersidebar"
          element={[<WholesaleDealerSidebar />,<Footer />]}
        />
        <Route
          path="/wholesaledealerprofile"
          element={[<WholesaleDelaerProfilePage url={url} />]}
        />
        <Route
          path="/wholesaledealereditprofile"
          element={[<WholesaleDealerEditProfile />,<Footer />]}
        />
        <Route path="/wholesalermain" element={[<WholesalerMain />]} />
        <Route path="/wholesaleraddproduct" element={[<WholesaleDealerAddProduct/>]} />
        <Route path="/wholesalerviewproduct" element={[<WholesaleDealerViewPoduct url={url} />]} />
        <Route path="/wholesalerviewproductdetails/:productid" element={[<WholesaleDealerViewProductDetails url={url} />,<Footer />]} />
        <Route path="/wholesalereditproduct/:productid" element={[<WholesaleDealerEditProduct/>,<Footer />]} />
        <Route path="/wholesalerviewshops" element={[<WholesaleDealerViewShops/>]} />
        <Route path="/wholesalershopownernewrequest" element={[<WholesalerShopownerNewRequest url={url} />]} />
        <Route path="/wholesalershopowneracceptorders" element={[<WholesalerShopownerAcceptorders url={url} />]} />
        <Route path="/wholesaledealercomplaints" element={[<WholesaleDealerComplaint/>]} />

        {/* Customer */}


    <Route path='/customerregistration' element={ [<MainNav/>,<CustomerRegistration/>,<Footer/>]} />
    <Route path='/customerlogin' element={[<MainNav/>,<CustomerLogin/>,<Footer/>]} />
    <Route path='/customerhome' element={[<CustomerHomePage/>]} />
    <Route path='/customerforget' element={[<MainNav/>,<ForgetPswdCustomer/>,<Footer/>]} />
    <Route path='/customerlistpage' element={[<CustomerlistPage url={url}/>,<Footer />]} />
    <Route path='/customerprofile' element={[<CustomerProfile/>,<Footer />]} />
    <Route path='/customereditprofile' element={[<CustomerEditProfile/>,<Footer />]} />
    <Route path='/customerviewshop' element={[<CustomerNavbar/>,<CustomerviewShops/>]} />
    <Route path='/customerviewproduct' element={[<CustomerNavbar/>,<CustomerViewallproduct url={url}/>]} />
    <Route path='/customerviewproductdetail' element={[<CustomerViewProductDetail url={url}/>,<Footer />]} />
    <Route path='/customerproductcardpage' element={[<CustomerProductCardPage/>,<Footer />]} />
    <Route path='/customerordervieworder' element={[<CustomerOrdersViewOrder url={url} />,<Footer />]} />
    {/* <Route path='/customercomplaints' element={[<CustomerComplaint />,<Footer />]} /> */}


{/* deliveryagent */}

    <Route path='/deliveryagentregistration' element={[<MainNav/>,<DeliveryAgentRegistration/>,<Footer/>]} />
    <Route path='/deliveryagentlogin' element={[<MainNav/>,<DeliveryagentLogin/>,<Footer/>]} />
    <Route path='/deliveryagenthome' element={[<CommonNav/>,<DeliveryagentHomepage/>,<Footer />]} />
    <Route path='/deliveryagentforgetpswd' element={[<MainNav/>,<Deliveryagentforgetpswd/>,<Footer/>]} />
    {/* <Route path='/alldeliveryagentviewpage' element={[<AllDeliveryAgentViewPage url={url}/>]}/> */}
    {/* <Route path='/deliveryagentsidebar' element={[<DeliveryagentSidebar/>,<Footer />]}/> */}
    <Route path='/deliveryagentmain' element={[<DeliveryagentMain/>]} />
    <Route path='/deliveryagentprofile' element={<DeliveryAgentProfile url={url}/>} />
  <Route path='/deliveryagentprofileedit' element={[<DeliveryagentProfileEdit url={url}/>,<Footer />]} />
    <Route path='/deliveryagentdeliveryrequest' element={[<DeliveryAgentDeliveryRequest/>]} />
    <Route path='/deliveryagentdeliveryupdate' element={[<DeliveryAgentCustomerDeliveryUpdate/>]} />
    <Route path='/deliveryagentcomplaint' element={[<DeliveryagentComplaint/>]} />
    <Route path='/viewWholesalerdeliveryrequest' element={[<ViewWholesalerdeliveryrequest/>]} />
    <Route path='/updatewholesalerdeliveryrequest' element={[<DeliveryAgentDeliveryUpdate/>]} />
    {/* <Route path='/deliveryagentcomplaint' element={[<DeliveryagentComplaint />,]} /> */}



        <Route
          path="/customerregistration"
          element={[<MainNav />, <CustomerRegistration />, <Footer />]}
        />
        <Route
          path="/customercomplaints"
          element={[<MainNav />, <CustomerComplaint />, <Footer />]}
        />
        <Route
          path="/customerlogin"
          element={[<MainNav />, <CustomerLogin />, <Footer />]}
        />
        <Route path="/customerhome" element={[<CustomerHomePage />,<Footer />]} />
        <Route
          path="/customerforget"
          element={[<MainNav />, <ForgetPswdCustomer />, <Footer />]}
        />
        <Route
          path="/customerlistpage"
          element={[<CustomerlistPage url={url} />,<Footer />]}
        />
        <Route path="/customerprofile" element={[<CustomerProfile />,<Footer />]} />
        <Route path="/customereditprofile" element={[<CustomerEditProfile />,<Footer />]} />
        <Route
          path="/customerviewshop"
          element={[<CustomerNavbar />, <CustomerviewShops />,<Footer />]}
        />
        <Route
          path="/customerviewproduct/:shopownerid"
          element={[<CustomerNavbar />, <CustomerViewProductPage url={url} />,<Footer />]}
        />
        <Route
          path="/customerviewproductdetail/:productid"
          element={[<CustomerViewProductDetail url={url} />,<Footer />]}
        />

        <Route path="/customerproductcart" element={[<CustomerProductCardPage url={url}/>,<Footer />]} />

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
          element={[<CommonNav />, <DeliveryagentHomepage />,<Footer />]}
        />
        <Route
          path="/deliveryagentforgetpswd"
          element={[<MainNav />, <Deliveryagentforgetpswd />, <Footer />]}
        />
        <Route
          path="/alldeliveryagentviewpage"
          element={[<AllDeliveryAgentViewPage url={url} />,<Footer />]}
        />
        <Route
          path="/deliveryagentrequest"
          element={[<DeliveryAgentRequest url={url} />,<Footer />]}
        />
        <Route
          path="/deliveryagentsidebar"
          element={[<DeliveryagentSidebar />,<Footer />]}
        />
        <Route path="/deliveryagentmain" element={[<DeliveryagentMain />,<Footer />]} />
        <Route
          path="/deliveryagentprofile"
          element={[<DeliveryAgentProfile url={url} />,<Footer />]}
        />
        <Route
          path="/deliveryagentprofileedit"
          element={[<DeliveryagentProfileEdit url={url} />,<Footer />]}
        />
        <Route
          path="/deliveryagentcomplaint"
          element={[<DeliveryagentComplaint url={url} />,<Footer />]}
          
        />

    <Route path='/shopownerregistration' element={[<MainNav/>,<ShopOwnerRegistration/>,<Footer/>]} />
    <Route path='/shopownerlogin' element={[<MainNav/>,<ShopOwnerLogin/>,<Footer/>]} />
    <Route path='/shopownerhome' element={[<ShopHomePage/>]} />
    <Route path='/shopownerforgotpaswd' element={[<Shopownerforgotpswrd/>,<Footer />]}/>
    <Route path='/shopownerprofile' element={[<ShopownerProfilepage data="shopownerprofile" url={url}/>]}/>
    <Route path='/shopownerprofileedit' element={[<ShopOwnerProfileEditPage/>]}/>
    <Route path='/shopowneradditem' element={ [<ShopAddItem/>]} />
    <Route path='/shopownerviewproduct' element={[<ShopownerViewProduct url={url}/>]}/>
    <Route path='/shopownerviewproductdetails/:productid' element={[<ShopownerviewProductDetails url={url} />,<Footer />]}/>
    <Route path='/shopownereditproduct/:productid' element={[<ShopownerEditProduct url={url}/>,<Footer />]}/>
    <Route path='/shopownerdashboard' element={[<ShopownerDashBoard/>,<Footer />]}/>
    <Route path='/shopownercustomerorderrequest' element={[<ShopownerCustomerOrderRequest url={url}/>]} />
    <Route path='/shopownercustomerorderaccept' element={[<ShopownerCustomerOrderAccept url={url} />]} />
    <Route path='/shopownerviewwholesaledealer' element={[<ShopownerViewWholesaleDealer/>]} />
    <Route path='/shopownerviewwdproductview/:whosaleid' element={[<ShopownerViewWDProductView url={url} />]} />
    {/* <Route path='/shopownerorderproductviewproduct' element={[<Shopownerorderproductviewproduct/>,<Footer />]} /> */}
    <Route path='/shopownerwdviewproduct/:productid' element={[<Shopownerwdviewproduct url={url} />,<Footer />]} />
    <Route path='/shopownerorderproductcart' element={[<ShopownerOrderProductCart url={url} />]} />
    <Route path='/shopownerorderproductacceptorder' element={[<ShopownerOrderProductAcceptOrder url={url} />]} />
    <Route path='/shopownerviewwdproductslist' element={[<ShopownerViewproductList url={url} />]} />
    <Route path='/shopownercomplaint' element={[<ShopownerComplaint />]} />
    <Route path='/shopownerWDlist' element={[<ShopownerWholesaleDealerList />,<Footer />]} />
    <Route path='/shopownerdealercomparison' element={[<DealerComparion url={url}/>]} />

   {/* <Route path='/shopownernotification' element={[<ShopownerNotification />]} /> */} 


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
          element={[<Shopownerforgotpswrd />,<Footer />]}
        />
        <Route
          path="/shopownerprofile"
          element={[<ShopownerProfilepage data="shopownerprofile" url={url} />]}
        />
        <Route
          path="/shopownerprofileedit"
          element={[<ShopOwnerProfileEditPage />,<Footer />]}
        />
        <Route path="/shopowneradditem" element={[<ShopAddItem />]} />
        
        
        <Route
          path="/shopownereditproduct/:productid"
          element={[<ShopownerEditProduct url={url} />,<Footer />]}
        />
        <Route path="/shopownerdashboard" element={[<ShopownerDashBoard />,<Footer />]} />
        {/* /:productid */}
        {/* Admin */}

        <Route
          path="/Admin"
          element={[<AdminMainNav />, <AdminLogin />, <Footer />]}
        />
        <Route path="/admin_dashboard" element={[<AdminDashboard />]} />
        <Route
          path="/shopownerspendinglist"
          element={[<ShopOwnerPendingList url={url} />,<Footer />]}
        ></Route>
        <Route
          path="/shopownerslist"
          element={[<ShopOwnerList url={url} />,<Footer />]}
        ></Route>

        <Route path="/admincustomercomplaints" element={<AdminCustomerComplaints/>} />
        <Route path="/adminviewcustomerorderlist" element={<CustomerOrderlist/>} />
        <Route path="/adminviewshoporderlist" element={<ShoporderList/>} />
        <Route path="/adminviewshopownercomplaint" element={<AdminviewShopownerComplaint/>} />
        <Route path="/adminviewdeliveryagentcomplaint" element={<AdminviewDeliveryAgentComplaints/>} />
        <Route path="/adminviewwholesalercomplaint" element={<AdminviewWholesalerComplaints/>} />
        <Route path='/shopownerorderproductacceptorder' element={<ShopownerOrderProductAcceptOrder url={url} />} />


      </Routes>
    </BrowserRouter>
  );
}

export default App;
