import React from "react";
import Header from "./Header";
import ResponseVal from "./ResponseVal";
import UserSidebar from "./views/UserSidebar";

const UserMaster=()=>{
    return(
        <div className="container-fluid">
        <div className="row">

            <div className="col-12 h-100 master_backgroung_heder">
                <Header />
            </div>
            <div className="col-2 master_backgroung_side">
                
                <UserSidebar/>
            </div>
            <div className="col-10 master_backgroung_work">
                my Work Space
                {/* <EmpHome/> */}
            </div>                     
        </div>
    </div>
    );
}

export default UserMaster;
