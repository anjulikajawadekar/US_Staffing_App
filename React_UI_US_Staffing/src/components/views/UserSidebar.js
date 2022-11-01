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

const UserSidebar=()=>{

    let empName = localStorage.getItem('empName');
    let empPass= localStorage.getItem('empPassword');

    let eNameTeam = localStorage.getItem('empName');
    let ePassTeam= localStorage.getItem('empPassword');

    let userInfo = localStorage.getItem('userID');
    let userName = localStorage.getItem('userName');
    let userPassword= localStorage.getItem('userPassword');
    
    console.log("empName Sidebar "+empName);
    console.log("empPass Sidebar "+empPass);

    return (
        
        <ListGroup>            
            <ListGroupItem tag="a" href="/raise_issue" action>Raise Issue</ListGroupItem>
            <ListGroupItem tag="a" href="/users_issue_list" action>View Issue List</ListGroupItem>
        </ListGroup>
    )
};

export default UserSidebar;