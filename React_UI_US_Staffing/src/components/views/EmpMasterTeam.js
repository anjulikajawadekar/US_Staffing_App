import React from "react";
import Header from "../Header";
import EmpSidebar from "./EmpSidebar";
import AssignIssue from "./AssignIssue";

const EmpMasterTeam = () => {
    return (
        <div className="container-fluid">
            <div className="row">

                <div className="col-12 h-100 master_backgroung_heder">
                    <Header />
                </div>
                <div className="col-2 master_backgroung_side">                    
                    <EmpSidebar/>
                </div>
                <div className="col-10 master_backgroung_work">
                    <h3>Welcome to Employee Team Dashboard!!</h3>
                </div>                     
            </div>
        </div>
    );
};

export default EmpMasterTeam;