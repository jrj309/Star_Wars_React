import React, { Component } from "react";
//import { Nav, NavItem, NavLink } from 'reactstrap';
import { Link, withRouter } from "react-router-dom";
import logo from "./logo.svg";
import gitlogo from "./GitHub-Mark-Light-64px.png";

import rebel from "./Rebel_symbol_Yellow.png";

class MainNav extends Component {
  render() {
    return (
      <div>
        <header class="App-header">
          <div class="row">
            <div class="col-xs">
              <div class="App-logo-react">
                <img
                  src={logo}
                  class="img-fluid"
                  class="App-logo"
                  alt="React.js logo"
                />
              </div>
            </div>
            <div class="col-xs">
              <img
                src={rebel}
                class="img-fluid"
                alt="Rebel Alliance logo"
                height="80"
              />
            </div>
            <div class="col">
              <h1 class="App-title">
                Star Wars: Information Unleashed
                  </h1>
            </div>
            <div class="col-xs">
              <div class="App-logo-github">
                <img
                  src={gitlogo}
                  class="img-fluid"
                  class="Gitlogo"
                  alt="github logo"
                />
              </div>
            </div>
          </div>
        </header>
        <div class="row">
          <ul class="nav nav-pills justify-content-center">
            <li role="nav-item">
              <Link to="/credits">Credits</Link>
            </li>
            <li role="nav-item" class="active">
              <Link to="/">Home</Link>
            </li>
            <li role="nav-item">
              <Link to="/data">Data</Link>
            </li>
          </ul>
        </div>

        {/* <Route path="/:id" component={Child} /> */}
      </div>




    );
  }
}

export default withRouter(MainNav);