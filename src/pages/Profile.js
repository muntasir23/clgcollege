import React from "react";
import AllAllumni from "../component/Profile/AllAllumni";
import HeaderProfile from "../component/Profile/HeaderProfile";


export default function Profile() {


  return (
    <div>
      <HeaderProfile />
      <div className="dashboard-h1">
        <h1>All Allumni List is bellow Down</h1>
      </div>
      <div>
        <AllAllumni />
      </div>
    </div>
  );
}
