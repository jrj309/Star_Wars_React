import React, { Component } from "react";
import logo from "./logo.svg";
import gitlogo from "./GitHub-Mark-Light-64px.png";
import swLogo from "./SWLib.jpg";
//import swapi from 'swapi-node';
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container-fluid">
          <div className="Container">
            <header className="App-header">
              <div className="row">
                <div className="col-xs">
                  <div className="App-logo-react">
                    <img src={logo} className="App-logo" alt="logo" />
                  </div>
                </div>
                <div className="col-md">
                  <h1 className="App-title">
                    Star Wars: Information Unleashed
                  </h1>
                </div>
                <div className="col-xs">
                  <div className="App-logo-github">
                    <img src={gitlogo} className="Gitlogo" alt="github logo" />
                  </div>
                </div>
              </div>
            </header>
            <div className="navBar">
              <div className="row">
                <div className="col navSpace">
                  <a href="#">
                    {" "}
                    <p className="navButton">Credits</p>{" "}
                  </a>
                </div>
                <div className="col navSpace">
                  <a href="#">
                    {" "}
                    <p className="navButton">Home</p>{" "}
                  </a>
                </div>
                <div className="col navSpace">
                  <a href="#">
                    {" "}
                    <p className="navButton">Data</p>{" "}
                  </a>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col mainPic">
                <img src={swLogo} alt="Star Wars Logo" />
              </div>
            </div>
            <div className="row startButton">
              <div className="col">
                <button type="button" class="btn btn-warning">
                  Click Here to Begin!
                </button>
              </div>
            </div>
            <div className="row underPic">
              <div className="col">
                <h1>About</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam ut enim lacus. Phasellus purus sapien, fringilla sed
                  fermentum vel, accumsan molestie mauris. Nulla in vulputate
                  nisi, vitae volutpat nisl. Nam in magna eu lorem facilisis
                  tincidunt eu vel mauris. Nunc rutrum justo mauris, ac dictum
                  nisl pretium at. Praesent tempus sodales nisl, rhoncus
                  consectetur ex. Proin accumsan nisi quis ante lacinia, vel
                  varius sapien luctus. Integer fringilla hendrerit nisl quis
                  malesuada. Sed consequat sit amet magna a luctus. Duis euismod
                  scelerisque quam at lacinia. Ut porttitor, diam sit amet
                  mollis mattis, tortor risus cursus orci, sed condimentum mi
                  nisi quis eros. Ut id mauris et metus feugiat lacinia. Duis
                  euismod lorem sollicitudin dolor pulvinar volutpat. Integer
                  vestibulum ullamcorper posuere. Curabitur eleifend orci in ex
                  porttitor, vel vestibulum nibh molestie. Integer lacus urna,
                  hendrerit eu volutpat sit amet, rhoncus in augue.
                </p>
              </div>
              <div className="col">
                <h1>Quick Start</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam ut enim lacus. Phasellus purus sapien, fringilla sed
                  fermentum vel, accumsan molestie mauris. Nulla in vulputate
                  nisi, vitae volutpat nisl. Nam in magna eu lorem facilisis
                  tincidunt eu vel mauris. Nunc rutrum justo mauris, ac dictum
                  nisl pretium at. Praesent tempus sodales nisl, rhoncus
                  consectetur ex. Proin accumsan nisi quis ante lacinia, vel
                  varius sapien luctus. Integer fringilla hendrerit nisl quis
                  malesuada. Sed consequat sit amet magna a luctus. Duis euismod
                  scelerisque quam at lacinia. Ut porttitor, diam sit amet
                  mollis mattis, tortor risus cursus orci, sed condimentum mi
                  nisi quis eros. Ut id mauris et metus feugiat lacinia. Duis
                  euismod lorem sollicitudin dolor pulvinar volutpat. Integer
                  vestibulum ullamcorper posuere. Curabitur eleifend orci in ex
                  porttitor, vel vestibulum nibh molestie. Integer lacus urna,
                  hendrerit eu volutpat sit amet, rhoncus in augue.
                </p>
              </div>
              <div className="col">
                <h1>About</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam ut enim lacus. Phasellus purus sapien, fringilla sed
                  fermentum vel, accumsan molestie mauris. Nulla in vulputate
                  nisi, vitae volutpat nisl. Nam in magna eu lorem facilisis
                  tincidunt eu vel mauris. Nunc rutrum justo mauris, ac dictum
                  nisl pretium at. Praesent tempus sodales nisl, rhoncus
                  consectetur ex. Proin accumsan nisi quis ante lacinia, vel
                  varius sapien luctus. Integer fringilla hendrerit nisl quis
                  malesuada. Sed consequat sit amet magna a luctus. Duis euismod
                  scelerisque quam at lacinia. Ut porttitor, diam sit amet
                  mollis mattis, tortor risus cursus orci, sed condimentum mi
                  nisi quis eros. Ut id mauris et metus feugiat lacinia. Duis
                  euismod lorem sollicitudin dolor pulvinar volutpat. Integer
                  vestibulum ullamcorper posuere. Curabitur eleifend orci in ex
                  porttitor, vel vestibulum nibh molestie. Integer lacus urna,
                  hendrerit eu volutpat sit amet, rhoncus in augue.
                </p>
              </div>
            </div>
            <footer className="appFooter">
              <div className="row">
                <div className="col align-self-end">2018.</div>
              </div>
            </footer>
          </div>
        </div>
      </div>
    );
  }
}

function printSWAPI() {
  const swapiNode = require("midichlorian");

  swapiNode.people.get(1).then(function(p) {
    <p>{p.name}</p>;
    console.log(p.name);
  });
}

export default App;
