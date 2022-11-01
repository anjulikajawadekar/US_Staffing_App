import React, { useState } from "react";
import Header from "../APP_Component/Header";
import UserSidebar from "./views/UserSidebar";
import base_url from "../api/bootapi";
import axios from "axios";
import { useEffect } from "react";
import { Table } from "reactstrap";

const IssueList2 = () => {

    //const App = () => {
    let userID = localStorage.getItem('userID');
    console.log("User ID IS : " + userID);

    const url = `${base_url}/getAllIssues`;

    const [dataiss, setData] = useState([])
    const [empdata, setEmpData] = useState([]);
    const [issuid_d, setIssueIDD] = useState([])
    const [empid_d, setEmpIDD] = useState([]);

    useEffect(() => {
        axios.get(url).then(json => setData(json.data))
        // axios.get(url2).then(json => setEmpData(json.data))
    }, [], [])

    console.log('AAAAAAAAAAAAAAAAAAA');

    const register = (e) => {

        e.preventDefault();
        const d1 = issuid_d;
        //const d2 = empid_d;
        console.log("issuid is: " + d1);
    }
    // {arr.map((element, index) => {
    //     if (element % 2 === 0) {
    //         return <h2 key={index}>{element}</h2>;
    //       }
    const renderTable = () => {
        return dataiss.map(issue => {
            console.log(issue.user.userid);
            console.log("issue list : "+JSON.stringify(issue));
            if (userID == issue.user.userid) {
                return (
                    <tr>
                        {/* <td>{issue.issueid}</td> */}
                        <td></td>
                        <td>{issue.description}</td>
                        <td>{issue.category}</td>
                        <td>{issue.priority}</td>
                        <td>{issue.status}</td>
                        <td>{issue.user.username}</td>
                        <td>{issue.employee.empname}</td>
                        <td>{issue.raise_date}</td>
                        <td>{issue.close_date}</td>
                    </tr>
                )
            }

        })
    }
    return (
        <div className="container-fluid">
            <div className="row">

                <div className="col-12 h-100 master_backgroung_heder">
                    <Header />
                </div>
                <div className="col-2 master_backgroung_side">
                    <UserSidebar />
                </div>
                <div className="col-10 vertical-scrollable">

                    <h1 id="title">IssuesList Table</h1>
                    <Table bordered className="css-serial">
                        {/* <table id="issues" bordered className="css-serial"> */}
                        {/* //Your Table in post changed to table to make it work */}
                        <thead>
                            <tr>
                                <th>Sr No.</th>
                                <th>Description</th>
                                <th>Category</th>
                                <th>Priority</th>
                                <th>Status</th>
                                <th>User Name</th>
                                <th>Assigned To</th>
                                <th>Issue Raised Date</th>
                                <th>Issue Closed Date</th>
                            </tr>
                        </thead>
                        <tbody>{renderTable()}</tbody>
                        {/* </table> */}
                    </Table>
                </div>
            </div>
        </div>
    )
}

export default IssueList2;