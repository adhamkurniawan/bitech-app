import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
      <div className="banner">
        <nav className="navbar-transparent padding-top">
          <div className="nav-wrapper">

            <div className="container">
              <a href="#!" data-activates="slide-out" className="button-collapse"><i className="material-icons">menu</i></a>
              <a href="/" className="brand-logo">Bitech</a>
              <ul className="right hide-on-med-and-down">
                <li><a href="#!">Home</a></li>
                <li><a href="#!">Features</a></li>
                <li><a href="#!">About</a></li>
                <li><a href="#!">Contact Us</a></li>
                <li><a href="#!">Sign In</a></li>
                <li><a href="#!">Sign Up</a></li>
              </ul>
            </div>

            <ul id="slide-out" className="side-nav">
              <li><div className="userView">
                <div className="background">
                  <img src="img/office.jpg" alt="Office" />
                </div>
                <a href="#!user"><img className="circle" src="images/yuna.jpg" alt="Profile" /></a>
                <a href="#!name"><span className="white-text name">John Doe</span></a>
                <a href="#!email"><span className="white-text email">jdandturk@gmail.com</span></a>
              </div></li>
              <li><a href="/"><i className="material-icons">cloud</i>First Link With Icon</a></li>
              <li><a href="/">Second Link</a></li>
              <li><div className="divider"></div></li>
              <li><a className="subheader">Subheader</a></li>
              <li><a className="waves-effect" href="#!">Third Link With Waves</a></li>
            </ul>
          </div>
        </nav>

        <div className="container">
          <ul className="main-wrapper-bullet hide-on-med-and-down">
            <li className="list-bullet ltr-first">
              <div className="bullet"></div>
              <div className="list-bullet-p">
                <p>Dream</p>
              </div>
            </li>

            <li className="list-bullet ltr">
              <div className="bullet"></div>
              <div className="list-bullet-p">
                <p className="centering-mir">Make It Real</p>
              </div>
            </li>
          </ul>

          <ul className="main-wrapper-bullet-border ltrc hide-on-med-and-down">
            <li className="list-bullet">
              <div className="main-bullet">
                <div className="bullet"></div>
              </div>
              <div className="list-bullet-p">
                <p>Save It</p>
              </div>
            </li>
          </ul>

          <div className="wrapper-card">
            <div className="lg-card"></div>
          </div>

          <div className="wrapper-title-banner">
            <h1 className="white-text title-banner">Experience Banking Reinvented</h1>
            <p className="white-text tag-title-banner">Set finances do not need to waste time. With Genius, find a new <br />way of life.</p>
          </div>
        </div>

        <div className="banner-art"></div>
      </div>
    );
  }
}

export default Navbar;
