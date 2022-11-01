import React from "react";
// import EmpHome from "./views/EmpHome";
import EmpSidebar from "./views/EmpSidebar";
import Header from "./Header";
import { useHistory } from "react-router-dom";
import AssignIssue from "./views/AssignIssue";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
<link href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
    <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
    <script src="//code.jquery.com/jquery-1.11.1.min.js"></script>
    {/* <!------ Include the above in your HEAD tag ----------> */}
</link>

const EmpMaster = () => {
    // return (
        let history=useHistory();

        const isAuthenticated = localStorage.getItem('empID');
  
        return isAuthenticated ? (

        <div className="container-fluid">
            <div className="row">

                <div className="col-12 h-100 master_backgroung_heder">
                    <Header />
                </div>
                <div className="col-2 master_backgroung_side">
                    
                    <EmpSidebar/>
                </div>
                <div className="col-10 master_backgroung_work">
                    <h3>Welcome to Employee Head Dashboard!!</h3>
                </div>                     
            </div>
        </div>

    // );
    ) : (
        history.push("/"),
       window.location.reload()
     );
};

export default EmpMaster;