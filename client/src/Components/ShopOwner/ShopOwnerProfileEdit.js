import React from "react";
import ShopOwnerprofileEditpage from "../../Pages/ShopOwner/ShopOwnerprofileEditpage";
import Footer from "../../Pages/Footer";
import ShopOwnerSidebar from "../../Pages/ShopOwner/ShopOwnerSidebar";

function ShopOwnerProfileEdit() {
  return (
    <div className="row">
      <div className="col-2">
        <ShopOwnerSidebar />
      </div>
      <div className="col-9 ms-4">
        <ShopOwnerprofileEditpage />
      </div>
      <Footer />
    </div>
  );
}

export default ShopOwnerProfileEdit;
