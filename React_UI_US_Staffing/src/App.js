/*
 Copyright (c) 2021 Christer Johansson of Sweden Inc.

 Permission is hereby granted, free of charge, to any person obtaining a copy of
 this software and associated documentation files (the "Software"), to deal in
 the Software without restriction, including without limitation the rights to
 use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
 the Software, and to permit persons to whom the Software is furnished to do so,
 subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./APP_Component/Login";
import Register from "./components/views/Register";
import Forgot from "./components/views/Forgot";
import FetchIssuesList from "./components/FetchIssueList";
import Header from "./APP_Component/Header";
import IssueRaise from "./components/IssueRaise";
import IssueList2 from "./components/IssueList2";
import EmpHomePage from "./components/views/EmpHomePage";
import App2 from "./components/views/AssignIssue";
import StatusChange from "./components/StatusChange";
import ExportData from "./components/views/ExportData";
import AdminDash1 from "./APP_Component/AdminDash_Page1";

const Auth = () => {
  return (

    <div className="container-fluid">
      <Router>
        <Switch>
          <div className="row">
            <div className="col-12">
              <Route exact path="/" component={Login} />

              {/* ********************* Admin Dashboard*************************** */}
                <Route path="/admin_page1" component={AdminDash1} />
              {/* ********************* End Admin Dashboard*********************** */}

              {/*********************** Employee Head Dashboard *********************************/}
              <Route path="/assign_issue" component={App2} />
              <Route path="/emp_home" component={EmpHomePage} />
              <Route path="/emp_export_data" component={ExportData} />
              {/*********************** End Employee Head Dashboard *********************************/}

              {/*********************** Employee Team Dashboard *********************************/}
              <Route path="/issue_list_team" component={StatusChange} />
              {/*********************** End Employee Team Dashboard *********************************/}

              <Route path="/raise_issue" component={IssueRaise} />
              <Route path="/users_issue_list" component={IssueList2} />

              <Route path="/login" component={Login} />
              <Route path="/issue_list" component={FetchIssuesList} />
              <Route path="/header" component={Header} />
              <Route path="/register" component={Register} />
              <Route path="/forgot-password" component={Forgot} />

            </div>
          </div>

        </Switch>
      </Router>
    </div >

  );
};

export default Auth;
