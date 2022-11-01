import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import {
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
    CardFooter,
    Button,
    Container,
    List, ListGroup, ListGroupItem
} from "reactstrap";

const EmpSidebar=()=>{

    let empName = localStorage.getItem('empName');
    let empPass= localStorage.getItem('empPassword');

    // let eNameTeam = localStorage.getItem('empName');
    // let ePassTeam= localStorage.getItem('empPassword');
    
    console.log("empName Sidebar "+empName);
    console.log("empPass Sidebar "+empPass);

    return (
        
        <ListGroup>            
            <ListGroupItem tag="a" href="/emp_home" action>Home</ListGroupItem>
            <ListGroupItem tag="a" href="/assign_issue" action>Action</ListGroupItem>
            {/* <ListGroupItem tag="a" href="/emp_export_data" action>Export Data</ListGroupItem> */}
        
        </ListGroup>
    )
};

export default EmpSidebar;