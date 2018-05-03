import React, { Component } from "react";
import swLogo from "./../Welcome/SWLib.jpg"
//import swapi from 'swapi-node';

class Data extends Component {
    render() {
        return (
            <div>
                <div class="row">
                    <div class="col">
                        <h1>Data</h1>
                        <br />
                    </div>
                </div>
                <div className="row">
                    <div className="col mainPic">
                        <img src={swLogo} alt="Star Wars Jedi Library" />
                    </div>
                </div>
                <div class="row">
                    <div class="col-md">
                        <button type="button" class="btn btn-primary btn-lg btn-block">Films</button>
                    </div>
                    <div class="col-md">
                        <button type="button" class="btn btn-primary btn-lg btn-block">People</button>
                    </div>
                    <div class="col-md">
                        <button type="button" class="btn btn-primary btn-lg btn-block">Planets</button>
                    </div>
                </div>
                <div class="row">
                    <br />
                </div>
                <div class="row">
                    <div class="col-md">
                        <button type="button" class="btn btn-primary btn-lg btn-block">Species</button>
                    </div>
                    <div class="col-md">
                        <button type="button" class="btn btn-primary btn-lg btn-block">Starships</button>
                    </div>
                    <div class="col-md">
                        <button type="button" class="btn btn-primary btn-lg btn-block">Vehicles</button>
                    </div>
                </div>
                <div class="row">
                    <br />
                </div>
            </div>

        );
    }
}

function printSWAPI() {
    const swapiNode = require("midichlorian");

    swapiNode.people.get(1).then(function (p) {
        <p>{p.name}</p>
        console.log(p.name);
    });
}


export default Data;