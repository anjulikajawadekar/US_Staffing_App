import React from "react";
import { Card, CardBody, ListGroup, ListGroupItem } from "reactstrap";
import { Link, useHistory } from "react-router-dom";
//import history from "./ResponseVal";

function Header() {

    let empName = localStorage.getItem('empName');
    let empPassword = localStorage.getItem('empPassword');
    let empID = localStorage.getItem('empID');

    let userID = localStorage.getItem('userID');
    let userName = localStorage.getItem('userName');
    let userPassword = localStorage.getItem('userPassword');

    let HeaderName = '';

    // if(empName != null || empName != 'undefined'){
    //     HeaderName = empName
    // }

    let history = useHistory();

    console.log(empName);
    console.log(empPassword);
    console.log("userName : " + userName);
    console.log("userPassword : " + userPassword);

    // const getPersonalInfo=()=>

    function logout() {
        localStorage.clear();
        history.push('/');
    }

    function ValidateName() {
        if (empName != null || empName != 'undefined') {

            <h2>Welcome {empName}</h2>
            console.log(empName);

        } else {
            <h2>Welcome {userName}</h2>
            console.log(userName);
        }
    }


    return (
        <div className="h3-heading">
            {/* document.getElementById("result").innerHTML = localStorage.getItem("textvalue");  */}
            <div class="row">
                <div class="col-10">
                <h2>Welcome {userName} {empName}</h2>
                    {/* <>{ValidateName()}</> */}
                </div>
                <div class="col-2">
                    <div className="text-center">
                        <button className="btn btn-primary w-100 theme-btn mx-auto"
                            style={{ color: 'white' }} onClick={logout}>
                            Logout
                        </button>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;