import React from "react";
import Sidebar from "../../Pages/Admin/Sidebar";
import AdminHome from "../../Pages/Admin/AdminDashboard";

function AdminDashboard() {
  return (
    <div>
      <div className="row">
        <div className="col-3">
          <Sidebar />
        </div>
        <div className="col-9">
          < AdminHome/>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
