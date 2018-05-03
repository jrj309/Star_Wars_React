import React, { Component } from "react";
import { Button } from 'reactstrap';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Link, withRouter } from "react-router-dom";
import swLogo from "./SWLib.jpg";
import "./App.css";
import Welcome from './../Welcome';
import MainNav from "./../../components/MainNav";
import Credits from "./../Credits";
import Data from "./../Data"

class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container-fluid">
            <div className="Container">
              <MainNav />

              <Route exact path="/" component={Welcome} />
              <Route path="/credits" component={Credits} />
              <Route path="/data" component={Data} />

              <footer className="appFooter">
                <div className="row">
                  <div className="col align-self-end">2018.</div>
                </div>
              </footer>
            </div>
          </div>

        </div>
      </Router>
    );
  }
}


export default App;
