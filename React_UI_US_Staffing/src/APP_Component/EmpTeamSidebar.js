import React from "react";
import {List, ListGroup, ListGroupItem} from "reactstrap";

const EmpTeamSidebar=()=>{

    let empName = localStorage.getItem('empName');
    let empPass= localStorage.getItem('empPassword');
    
    console.log("empName Sidebar "+empName);
    console.log("empPass Sidebar "+empPass);

    return (
        
        <ListGroup>            
            <ListGroupItem tag="a" href="/issue_list_team" action>Home</ListGroupItem>
            {/* <ListGroupItem tag="a" href="/issue_list_team" action>ViewList</ListGroupItem> */}
        </ListGroup>
    )
};

export default EmpTeamSidebar;