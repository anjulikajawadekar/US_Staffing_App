import React, { useState, Fragment, useEffect } from "react";
//import './App.css';
import { Table, Form, Row, Col, Cell } from "reactstrap";
import { ReactDOM } from "react-router-dom";
import axios from "axios";
import base_url from "../api/bootapi";
import { Button, Card, CardBody } from "reactstrap";
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import Header from "../APP_Component/Header";
import EmpSidebar from "./views/EmpSidebar";
// import Form from "reactstrap";

const FetchIssuesList = () => {
    //const App = () => {
    const url = `${base_url}/getAllIssues`;
    const url2 = `${base_url}/getAllEmployee`;

    const [dataiss, setData] = useState([])
    const [empdata, setEmpData] = useState([]);
    const [issuid_d, setIssueIDD] = useState([])
    const [empid_d, setEmpIDD] = useState([]);

    useEffect(() => {
        axios.get(url).then(json => setData(json.data))
        axios.get(url2).then(json => setEmpData(json.data))
    }, [], [])

    console.log('AAAAAAAAAAAAAAAAAAA');

    const register = (e) => {

        e.preventDefault();
        const d1 = issuid_d;
        console.log("issuid is: " + d1);

    }


    const renderTable = () => {
        return dataiss.map(issue => {
            return (
                <tr>
                    <form
                method="POST" onSubmit={register}
            >
                    <td>
                        {/* <form action="AssignTo" method="POST"> */}
                        
                            <input type="text" name="issueid" value={issue.issueid} onChange={(e) => setIssueIDD(e.target.value)} />
                       
                    </td>
                    </form>

                    {/* <td>{issue.issueid}</td> */}
                    <td>{issue.description}</td>
                    <td>{issue.category}</td>
                    <td>{issue.priority}</td>
                    <td>{issue.status}</td>
                    <td>{issue.user.username}</td>
                    <td>{issue.employee.empname}</td>
                    <td>{issue.raise_date}</td>
                    <td>{issue.close_date}</td>
                    <td>
                        {
                            <select name="category" onChange={register} class="btn btn-success btn-sm dropdown-toggle">
                                {/* <select name="category" onChange={(e) => setEmpIDD(e.target.value)} class="btn btn-success btn-sm dropdown-toggle"> */}

                                {empdata.map((emp) => (
                                    <>
                                        <option selected disabled hidden>Select Employee</option>,
                                        <option value={emp.empid}>{emp.empname}</option>
                                    </>
                                ))}
                            </select>
                        }
                    </td>
                   
                    {/* //only company name shown, if you need to show complete company name then you need to iterate over `issue.name` object */}
                    
                </tr>
            )
        })
    }
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
                                    <th>Employee Name</th>

                                </tr>
                            </thead>
                            <tbody>{renderTable()}</tbody>
                        {/* </table> */}
                    </Table>
                    {/* <EmpHome/> */}
                </div>
            </div>
        </div>
    )
}

export default FetchIssuesList;