import React, { Component } from "react";
import { Route, NavLink, Router } from "react-router-dom";
import "./App.css";
// import Auth from "../Components/Auth/auth";
import Home from "./Home";
import history from './history'
import Billing from './billing/billing';
import Survey from './Survey/survey';
import Reports from './reports/reports';
import AccountSettings from './accountSettings/accountSettings';
import Profile from "./myProfile/myProfile";

class App extends Component {
  getProfile() {
    this.props.auth.getProfile()
  }

  render() {
    return (
      <Router history={history}>
        <div className="App">
          <div className="navBar">
            <div className="navButton">
              <NavLink exact to="/home">
                Home
              </NavLink>
              &nbsp;|&nbsp;
              <NavLink to="/teamlist">
                Profile
              </NavLink>
              &nbsp;|&nbsp;
              <NavLink to="/survey">
                Survey
              </NavLink>
              &nbsp;|&nbsp;
              <NavLink to="/reports">
                Reports
              </NavLink>
              &nbsp;|&nbsp;
              <NavLink to="/billing">
                Billing
              </NavLink>
              &nbsp;|&nbsp;
              <NavLink to="/accountset">
                Account Settings
              </NavLink>
            </div>
          </div>
          <Route exact path="/home" component={Home} />
          <Route path="/billing" component={Billing} />
          <Route path="/profile" component={Profile} />
          <Route path="/survey" component={Survey} />
          <Route path="/reports" component={Reports} />
          <Route path="/accountset" component={AccountSettings} />
        </div>
      </Router>
    );
  }
}
export default App;

