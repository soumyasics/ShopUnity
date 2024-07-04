import React from "react";
import ShopownerProfilepage from "../../Pages/ShopOwner/ShopownerProfilepage";
import Footer from "../../Pages/Footer";
import ShopOwnerSidebar from "../../Pages/ShopOwner/ShopOwnerSidebar";

function ShopownerProfile({ url }) {
  return (
    <div className="row">
      <div className="col-2">
        <ShopOwnerSidebar />
      </div>
      <div className="col-9 ms-3">
        {" "}
        <ShopownerProfilepage url={{ url }} />
      </div>
      <Footer />
    </div>
  );
}

export default ShopownerProfile;
