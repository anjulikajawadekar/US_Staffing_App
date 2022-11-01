
import React, { useState, useEffect } from "react";
import Header from "../../APP_Component/Header";
import base_url from "../../api/bootapi";
import { Card, CardBody, Table, Col, Row } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
// import { toast } from "react-toastify";
// import Menu2 from "./menu2";
//import {  Col, Row } from 'reactstrap';
import EmpSidebar from "./EmpSidebar";

export default function AssignIssue2() {

    const [Issue, setIssue] = useState([]);
    const [Member, setMember] = useState([]);

    useEffect(() => {
        fetch(`${base_url}/getAllIssues`)
            .then((res) => res.json())
            .then((data) => setIssue([...data]))

        fetch(`${base_url}/getAllEmployee`)
            .then((res) => res.json())
            .then((data) => setMember([...data]))
    }, []);
    console.log(setIssue);

    const results = [];
    const head = [];

    const handleSubmit = (e) => {
        e.preventDefault();

        const a = new FormData(e.target);

        let o = a.get('aa'); // reference by form input's `name` tag
        let o1 = a.get('emp1');
        console.log(o);
        console.log(o1);

        // postdata(o,o1);
    }

    const postdata = (data1, data2) => {
        axios.post(`${base_url}/AssignTo?issueId=${data1}&empId=${data2}`).then(

            (response) => {
                window.location.reload();

                console.log(data1);
                console.log(data2);
                console.log("success");
                // toast.success("Issue Assigned", {
                //     position: "bottom-center"
                // });
            },
            (error) => {
                console.log(error);
                console.log("error");
            }
        );
    }

    // ***************************************Table Start with <thead>***************************//
    head.push(
        <Table border={2}>
            <thead>
                <tr>
                    {/* <th>Sr. No</th> */}
                    <th>Description</th>
                    <th>Category</th>
                    <th>Priority</th>
                    <th>status</th>
                    <th>Raise Date</th>
                    {/* <th>Close Date</th>  */}
                    <th>User Name</th>
                    <th>Assigned Name</th>
                    <th>Employee Name</th>
                    <th>Submit</th>
                </tr>
            </thead>
            <tbody>
                {
                    Issue.forEach((is) =>

                        results.push(
                            <form onSubmit={handleSubmit}>

                                <tr key={is.issueid}>
                                    <td></td>
                                    <td> <input type="hidden" name="aa" value={is.issueid} ></input></td>
                                    <td>{is.description}</td>
                                    <td>{is.category}</td>
                                    <td>{is.priority}</td>
                                    <td>{is.status}</td>
                                    <td>{is.raise_Date}</td>
                                    {/* <td>{is.close_Date}</td> */}
                                    <td>{is.user.username}</td>
                                    <td>{is.employee.empname}</td>

                                    <td>
                                        <select name="emp1" class="btn btn-success dropdown-toggle" >
                                            {Member.map((e) => (
                                                <>
                                                    <option hidden value="">Select Employee</option>
                                                    <option value={e.empid}>{e.empname}</option>
                                                </>
                                            ))}
                                        </select>
                                    </td>
                                    <input type="Submit"></input>
                                </tr>
                            </form>
                        ))
                }
            </tbody>
        </Table>
    )
    // ************************************End Table Start with <thead>***************************//

    return (
        <div>
            <Row>
                <Header />
                <Col md={2}> <br></br> <br></br> <br></br> <br></br>
                    <EmpSidebar />
                </Col>
                <Col md={10}>
                    <Card>
                        <CardBody className="my-2 bg-secondary">
                            <h1 className="center3"> Issue List</h1>
                        </CardBody>
                    </Card>
                    <br></br>
                    {head}
                    {results}
                </Col>
            </Row>
        </div>
    );
}

