import React from 'react';
import swLogo from './SWLib.jpg';
import { Link } from 'react-router-dom';

const Welcome = () => (
    <div>
        <div className="row">
            <div className="col mainPic">
                <img src={swLogo} alt="Star Wars Jedi Library" />
            </div>
        </div>
        <div className="row startButton">
            <div className="col">
                <Link to="/data"> <button className="btn btn-warning" >Click Here to Start!</button> </Link>
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
        </div>    </div>
)

export default Welcome