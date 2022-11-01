import React, { useState, useEffect } from "react";
import Header from "../../APP_Component/Header";
import EmpSidebar from "./EmpSidebar";
import base_url from "../../api/bootapi";
import axios from "axios";
import { useHistory } from "react-router-dom";
import EmpTeamSidebar from "../../APP_Component/EmpTeamSidebar";

const EmpHomePage = () => {

    let history =useHistory();
    const [TotIssueCnt, setTolIssueCnt] = useState([]);
    const [OpenIssueCnt, setOpenIssueCnt] = useState([]);
    const [CloseIssueCnt, setCloseIssueCnt] = useState([]);

    const [TotEmpCnt, setTotEmpCnt] = useState([]);

    const results = [];
    let EmpIDD = 0;
    let cntTotIssue = 0;
    let cntOpenIssue = 0;
    let cntCloseIssue = 0;
    let cntInPro = 0;
    let cntAssigned = 0;

    
    let EmpTotCnt = 0;
    let EmpCloseCnt = 0;
    let EmpAssCnt = 0;
    let EmpInProCnt = 0;

    const[EmpTotCntUS, setEmpTotCntUS]=useState([]);
    const[EmpInProCntUS, setEmpInProCntUS]=useState([]);
    const[EmpCloseCntUS, setEmpCloseCntUS]=useState([]);
    const[EmpAssCntUS, setEmpAssCntUS]=useState([]);

    useEffect(() => {
        axios.get(`${base_url}/getAllIssues`).then(json => setTolIssueCnt(json.data))

        fetch(`${base_url}/getAllEmployee`)
            .then((res) => res.json())
            .then((data) => setTotEmpCnt([...data]))
    }, []);

    const renderTable = () => {
        return TotIssueCnt.map(issue => {
            cntTotIssue++;

            if (issue.status == "Open") {
                cntOpenIssue++;
            }
            if (issue.status == "Closed") {
                cntCloseIssue++;
            }
            if (issue.status == "In progress") {
                cntInPro++;
            }
            if (issue.status == "Assigned") {
                cntAssigned++;
            }
            console.log(issue.issueid);
            console.log(issue.description);
        }
        )
    }    

    const getEmpID = (e) => {
        EmpIDD = e.target.value
        alert("Employee id is " + EmpIDD);
        getEmpIssueCnt();
    }

    const getEmpIssueCnt = () => {
        return TotEmpCnt.map(emp1 => {
            if (emp1.empid == EmpIDD) {
                // alert("EmpIDD is Matched " + emp1.empid);
                // console.log("EmpIDD is Matched " + emp1.empid);
                <label id="empLabel">Welcome {emp1.empname}</label>

                TotIssueCnt.map(is => {

                    if (is.employee.empid == EmpIDD) {
                        EmpTotCnt++;
                        console.log("Test data : "+JSON.stringify(is));
                        alert("Status : " + is.status);
                    }
                    if (is.employee.empid == EmpIDD && is.status == "In progress") {
                        EmpInProCnt++;
                        console.log("EmpInProCnt : "+EmpInProCnt);
                    }
                    if (is.employee.empid == EmpIDD && is.status == "Assigned") {
                        EmpAssCnt++;
                    }
                    if (is.employee.empid == EmpIDD && is.status == "Closed") {
                        EmpCloseCnt++;
                    }
                }
                )
            }
            console.log("EmpTotCnt : " + EmpTotCnt);
            console.log("EmpInProCnt : " + EmpInProCnt);
            setEmpTotCntUS(EmpTotCnt);
            setEmpInProCntUS(EmpInProCnt);
            setEmpCloseCntUS(EmpCloseCnt);
            setEmpAssCntUS(EmpAssCnt);
            
        
        })        
    }

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
                <div className="col-10 master_backgroung_work">

                    <p>{renderTable()}</p>
                    <table className="table table-bordered border-secondary" >
                        <tbody>
                            <tr>
                                <th colSpan="4">Total Number of Issues : {cntTotIssue}</th>
                            </tr>
                            <tr>
                                <th colSpan={2}>Open Issues : {cntOpenIssue}</th>
                                <th colSpan={2}>Assigned Issues : {cntAssigned}</th>
                            </tr>
                            <tr>
                                <th colSpan={2}>In Progress Issues : {cntInPro}</th>
                                <th colSpan={2}>Closed Issues : {cntCloseIssue}</th>
                            </tr>
                        </tbody>
                    </table>

                    <hr>
                    </hr>

                    <select name="category" onChange={getEmpID} class="btn btn-success btn-sm dropdown-toggle">
                        
                        {TotEmpCnt.map((emp) => (
                            <>
                                <option selected disabled hidden>Select Employee</option>,
                                <option value={emp.empid} >{emp.empname}</option>
                            </>
                        ))}
                    </select>

                    <table className="table table-bordered border-secondary" >
                        <tbody>
                            <tr>
                                <th colSpan={2}>Total Issue : {EmpTotCntUS}</th>
                                <th colSpan={2}>Assigned Issues : {EmpAssCntUS}</th>
                            </tr>
                            <tr>
                                <th colSpan={2}>In Progress Issues : {EmpInProCntUS}</th>
                                <th colSpan={2}>Closed Issues : {EmpCloseCntUS}</th>
                            </tr>
                        </tbody>
                    </table>
                 
                </div>
            </div>
        </div>
    // )
    ) : (
        history.push("/"),
       window.location.reload()
     );
}

export default EmpHomePage;