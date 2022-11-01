import React, {useState, useEffect } from "react";
import base_url from "../../api/bootapi";

const AssignIssueGrid = () => {

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

    const showGrid=()=>{
        <div>
            <h1>Welcome to Assign Issue Page </h1>
            <h3>This tutorial is on CSS grid property</h3>

            <div className="main-grid">
                <div class="gfg-grid">Discription</div>
                <div class="gfg-grid">Status</div>
                <div class="gfg-grid">User Name</div>
                <div class="gfg-grid">Assigned To</div>
                <div class="gfg-grid">Select Assignee</div>
               
            </div>

            <div className="main-grid">
                <div class="gfg-grid">1</div>
                <div class="gfg-grid">2</div>
                <div class="gfg-grid">3</div>
                <div class="gfg-grid">4</div>
                <div class="gfg-grid">5</div>
                <div class="gfg-grid">6</div>
                <div class="gfg-grid">7</div>
                <div class="gfg-grid">8</div>
                <div class="gfg-grid">9</div>
            </div>

        </div>

    }


    return (
        <div>
            <h1>Welcome to Assign Issue Page </h1>
            <h3>This tutorial is on CSS grid property</h3>
            <div>
                {showGrid}
            </div>

            <div className="main-grid">
                <div class="gfg-grid">Discription</div>
                <div class="gfg-grid">Status</div>
                <div class="gfg-grid">User Name</div>
                <div class="gfg-grid">Assigned To</div>
                <div class="gfg-grid">Select Assignee</div>
               
            </div>

            <div className="main-grid">
                <div class="gfg-grid">1</div>
                <div class="gfg-grid">2</div>
                <div class="gfg-grid">3</div>
                <div class="gfg-grid">4</div>
                <div class="gfg-grid">5</div>
                <div class="gfg-grid">6</div>
                <div class="gfg-grid">7</div>
                <div class="gfg-grid">8</div>
                <div class="gfg-grid">9</div>
            </div>
        </div>

    );
}

export default AssignIssueGrid;
