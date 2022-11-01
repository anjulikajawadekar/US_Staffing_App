import React from "react";
import Header from "../Header";
import EmpSidebar from "./EmpSidebar";

const EmpHome = () => {
    return (
        <div className="container-fluid">
            <div className="row">

                <div className="col-12 h-100 master_backgroung_heder">
                    <Header />
                </div>
                <div className="col-2 master_backgroung_side">

                    <EmpSidebar />
                </div>
                <div className="col-10 master_backgroung_work">
                    <h1>Emp Home</h1>
                </div>

            </div>
        </div>
    )
}

export default EmpHome;