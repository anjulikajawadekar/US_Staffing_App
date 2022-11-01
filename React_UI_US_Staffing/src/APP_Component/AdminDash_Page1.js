import React from "react";
import Header from "./Header";
import { Table } from "reactstrap";
import EmpTeamSidebar from "./EmpTeamSidebar";
import { useHistory } from "react-router-dom";

const AdminDash1 = () => {

    let history = useHistory();

    // const [Issue, setIssue] = useState([]);
    // const [Member, setMember] = useState([]);


    
    // const [DDvalue, setDDValue] = useState(0);
    // const [IssueIDD, setIssueIDD] = useState(0);

    // useEffect(() => {

    //     fetch(`${base_url}/getAllEmployee`)
    //         .then((res) => res.json())
    //         .then((data) => setMember([...data]))
    // }, []);
    // console.log(setIssue);

    const setCategory=()=>{
        alert('u selected the employee');
    }

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
                    <button type="button" class="btn btn-primary btn-sm" style={{ marginTop: 10, marginBottom: 10 }}>Export Data</button>
                    <div className="name mb-3">
                        <select name="category" onChange={(e) => setCategory(e.target.value)} class="btn btn-success btn-sm dropdown-toggle" style={{ width: '203px' }}>
                            <option selected disabled hidden>------Select Category------</option>,
                            <option value={'Hardware'}>Hardware</option>
                            <option value={'Software'}>Software</option>
                            <option value={'Networking'}>Networking</option>
                        </select>
                    </div>
                    <Table bordered className="css-serial">
                        {/* <table id="issues" bordered className="css-serial"> */}
                        {/* //Your Table in post changed to table to make it work */}
                        <thead>
                            <tr>
                                <th>Sr No.</th>
                                <th>Requirement worked on</th>
                                <th>1st interview</th>
                                <th>2nd interview</th>
                                <th>Closure</th>

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

export default AdminDash1;