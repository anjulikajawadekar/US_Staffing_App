import React, { useState, useEffect } from "react";
import base_url from "../api/bootapi";
import { Table } from "reactstrap";
import Header from "../APP_Component/Header";
import EmpSidebar from "./views/EmpSidebar";
import axios from "axios";
import EmpTeamSidebar from "../APP_Component/EmpTeamSidebar";

const StatusChange = () => {

    // //const App = () => {
    // let empID = localStorage.getItem('empID');
    // // alert("Emp ID IS : " + empID);

    // // const url = `${base_url}/getEmps_Issue_jpa?empID=${empID}`;
    // const url = `${base_url}/getAllIssues`;

    // const [issue_list, setIssueList] = useState([])
    // const [status, setStatus] = useState([])
    // const [isID, setIsId] = useState([])
    

    // useEffect(() => {
    //     axios.get(url).then(json => setIssueList(json.data))
    //     // axios.get(url2).then(json => setEmpData(json.data))
    // }, [], [])

    // const handleChange = (e) => {
    //     let d1 = e.target.value;
    //     setStatus(d1);
    //     // alert(d1);
    // }

    // const onSave = ({ id, newStatus }) => {
         
    //      let d1=id;
    //      let d2=newStatus;
    //      alert(" newID : " + d1 + "neStatus : " + d2);
    //     //  setIsId(d1);
    //     //  setStatus(d2);
    //     //  alert(" newID : " + isID + "neStatus : " + status);
    //      postdata(d1, d2);
    // }

    // const postdata = (a1, a2) => {

    //     axios.post(`${base_url}/UpdateStatus?issueid=${a1}&updStat=${a2}`).then(
    //         // UpdateStatus?issueid=6&updStat=In progress

    //         (response) => {
    //             window.location.reload();
    //             console.log("Status of issue updated!");
    //         },
    //         (error) => {
    //             console.log(error);
    //             console.log("error");
    //         }
    //     );
    // }

    // const renderTableClose=()=>{
    //     return issue_list.map(issue => {
    //         console.log(issue.employee.empid);
    //         // console.log("issue list : " + JSON.stringify(issue));
    //         if (empID == issue.employee.empid && issue.status == 'Completed') {
    //             return (
    //                 <tr>
    //                     {/* <td>{issue.issueid}</td> */}
    //                     <td></td>
    //                     <td>{issue.description}</td>
    //                     <td>{issue.category}</td>
    //                     <td>{issue.priority}</td>
    //                     <td>{issue.status}</td>
    //                     <td>{issue.user.username}</td>
    //                     {/* <td>{issue.employee.empname}</td> */}
    //                     <td>{issue.raise_date}</td>
    //                     <td>{issue.close_date}</td>
    //                     <td>
    //                         <select name="status" class="btn btn-success btn-sm dropdown-toggle"
    //                             onChange={handleChange} disabled>
    //                             <option selected disabled hidden>Select Category</option>,
    //                             <option value={'Assigned'}>Assigned</option>
    //                             <option value={'In progress'}>In progress</option>
    //                             <option value={'Completed'}>Completed</option>
    //                         </select>
    //                     </td>
    //                     <td>
    //                         <button type="hidden" className="btn btn-primary theme-btn btn-sm mx-auto" disabled>
    //                             Submit
    //                         </button>
    //                     </td>
    //                 </tr>
    //             )
    //         }

    //     }) 
    // }

    // const renderTable = () => {
    //     return issue_list.map(issue => {
    //         console.log(issue.employee.empid);
    //         console.log("issue list : " + JSON.stringify(issue));
    //         if (empID == issue.employee.empid && issue.status != 'Completed') {
    //             return (
    //                 <tr>
    //                     {/* <td>{issue.issueid}</td> */}
    //                     <td></td>
    //                     <td>{issue.description}</td>
    //                     <td>{issue.category}</td>
    //                     <td>{issue.priority}</td>
    //                     <td>{issue.status}</td>
    //                     <td>{issue.user.username}</td>
    //                     {/* <td>{issue.employee.empname}</td> */}
    //                     <td>{issue.raise_date}</td>
    //                     <td>{issue.close_date}</td>
    //                     <td>
    //                         <select name="status" class="btn btn-success btn-sm dropdown-toggle"
    //                             onChange={handleChange}>
    //                             <option selected disabled hidden>Select Category</option>,
    //                             <option value={'Assigned'}>Assigned</option>
    //                             <option value={'In progress'}>In progress</option>
    //                             <option value={'Completed'}>Completed</option>
    //                         </select>
    //                     </td>
    //                     <td>
    //                         <button type="submit" className="btn btn-primary theme-btn btn-sm mx-auto"
    //                             onClick={() => onSave({ id: issue.issueid, newStatus: status })}>
    //                             Submit
    //                         </button>
    //                     </td>
    //                 </tr>
    //             )
    //         }

    //     })
    // }
    return (
        <div className="container-fluid">
            <div className="row">

                <div className="col-12 h-100 master_backgroung_heder">
                    <Header />
                </div>
                <div className="col-2 master_backgroung_side">
                    <EmpTeamSidebar />
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
                                {/* <th>Assigned To</th> */}
                                <th>Issue Raised Date</th>
                                <th>Issue Closed Date</th>
                                <th>SelectEmployee</th>
                                <th>Submit</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* {renderTable()}
                         {renderTableClose()} */}
                         </tbody>
                        {/* </table> */}
                    </Table>
                </div>
            </div>
        </div>
    )
}

export default StatusChange;