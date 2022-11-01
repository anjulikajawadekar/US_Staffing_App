import React, { useState, useEffect } from "react";
import Header from "../../APP_Component/Header";
import EmpSidebar from "./EmpSidebar";
import base_url from "../../api/bootapi";
import axios from "axios";
import Form from "../../utilities/Forms";
import { Link, useHistory } from "react-router-dom";
import { Card, CardBody, Table, Col, Row } from "reactstrap";
// import Form from "reactstrap";

function App2() {

    let history = useHistory();

    const [Issue, setIssue] = useState([]);
    const [Member, setMember] = useState([]);
    const [DDvalue, setDDValue] = useState(0);
    const [IssueIDD, setIssueIDD] = useState(0);

    const handleChange = (e) => {
        const a1 = e.target.value;
        console.log("target value : " + JSON.stringify(e.target.value));
        setDDValue(a1);
        console.log(DDvalue);
        // console.log(JSON.stringify(e));
        // alert("DDvalue : "+ DDvalue);
        // postdata(IssueIDD, e.target.value);
    };

    const handleChange2 = (e) => {
        const a1 = e.target.value;
        // console.log("Issue id value : "+JSON.stringify(IssueIDD));
        setIssueIDD(a1);
        console.log(DDvalue);
        alert("IssueIDD : " + IssueIDD);
        postdata(IssueIDD, e.target.value);
    };

    const handleChange3 = (e) => {
        // console.log("target value : " + JSON.stringify(e.target.value));
        const t1 = e.id
        const t2 = e.newEmpID;
        console.log("issue id= "+t1+ " empid= "+t2);       
        postdata(t1, t2);
    };

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


    const postdata = (id, newEmpID) => {

        axios.post(`${base_url}/AssignTo?issueid=${id}&empid=${newEmpID}`).then(

            (response) => {
                window.location.reload();

                console.log("success");
            },
            (error) => {
                console.log(error);
                console.log("error");
            }
        );
    }

    const onSave = ({ id, newEmpID }) => {
        alert("issue id :" + id + " newEmpID :" + newEmpID)
        postdata(id, newEmpID);
    }

    Issue.forEach((is) => {
        results.push(

            <tr key={is.issueid}>
                <td></td>
                <input type="hidden" name="aa" value={is.issueid} onChange={handleChange2}></input>
                <td>{is.description}</td>
                <td>{is.category}</td>
                <td>{is.priority}</td>
                <td>{is.status}</td>
                <td>{is.raise_date}</td>
                <td>{is.close_date}</td>
                <td>{is.user.username}</td>
                <td>{is.employee.empname}</td>
                {/* <td>{
                        if(is.issueid == 1){

                        }
                    }</td> */}

                <td>
                    <select name="emp1" onChange={(evt) => handleChange3({ id: is.issueid, newEmpID: evt.target.value })} className="btn btn-success dropdown-toggle" >
                    {/* <select name="emp1" onChange={handleChange} className="btn btn-success dropdown-toggle" > */}
                        {Member.map((emp) => (
                            // if(emp.role === 'TeamMember'){
                            <>
                                <option hidden value="">Select Employee</option>
                                <option value={emp.empid}>{emp.empname}</option>
                            </>
                            // }
                        ))}
                    </select>
                </td>
                <td>
                    <input type="Submit" onClick={() => onSave({ id: is.issueid, newEmpID: DDvalue })}></input>
                </td>
            </tr>
            // </Form>

        )
    });

    // return (
    const isAuthenticated = localStorage.getItem('empID');
    return isAuthenticated ? (

        <div className="container-fluid">
            <div className="row">

                <div className="col-12 h-100 master_backgroung_heder">
                    <Header />
                </div>
                <div className="col-2 master_backgroung_side">

                    <EmpSidebar />
                </div>
                {/* <div className="col-10 master_backgroung_work"> */}
                <div className="col-10 scroll-bar" >
                    <button type="button" class="btn btn-primary btn-sm" style={{ marginTop: 10, marginBottom: 10 }}>Export Data</button>
                    {/* <h6 id="title">Issues List</h6> */}
                    <Table bordered className="css-serial" width={100}>
                        <thead>
                            <tr>
                                <th>Sr.No.</th>
                                <th>Description</th>
                                <th>Category</th>
                                <th>Priority</th>
                                <th>status</th>
                                <th>Raise Date</th>
                                <th>Close Date</th>
                                <th>User Name</th>
                                <th>Assigned Name</th>
                                <th>Employee Name</th>
                                <th>Submit</th>

                            </tr>
                        </thead>
                        <tbody><>
                            {results}
                        </>
                        </tbody>

                        {/* </table> */}
                    </Table>
                    {/* {results} */}
                </div>
            </div>
        </div>
        // )
    ) : (
        history.push("/"),
        window.location.reload()
    );
}

export default App2;
