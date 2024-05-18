import React from "react";
import AdminMainNav from "../../Pages/Navs/AdminMainNav";
import Footer from "../../Pages/Footer";
import ShopOwnersListPage from "../../Pages/ShopOwner/ShopOwnersListPage";

function ShopOwnerList({url}) {
  return (
    <div>
       <ShopOwnersListPage url={url}/>
    </div>
  );
}

export default ShopOwnerList;
