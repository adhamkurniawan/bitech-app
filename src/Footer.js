import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer className="page-footer page-footer-custom">
        <div className="container-fluid">
          <div className="row">
            <div className="col l2 s6">
              <h5 className="dark-text bold">About</h5>
              <div className="border-bottom"></div>
              <ul>
                <li><a className="light-dark-text" href="#!">Wolf moon kickstarter</a></li>
                <li><a className="light-dark-text" href="#!">Brunch</a></li>
                <li><a className="light-dark-text" href="#!">Hella cray synth</a></li>
              </ul>
            </div>
            <div className="col l2 s6">
              <h5 className="dark-text bold">Cards</h5>
              <div className="border-bottom"></div>
              <ul>
                <li><a className="light-dark-text" href="#!">Wolf moon kickstarter</a></li>
                <li><a className="light-dark-text" href="#!">Brunch</a></li>
              </ul>
            </div>
            <div className="col l2 s12">
              <h5 className="dark-text bold">Resources</h5>
              <div className="border-bottom"></div>
              <ul>
                <li><a className="light-dark-text" href="#!">Wolf moon kickstarter</a></li>
                <li><a className="light-dark-text" href="#!">Brunch</a></li>
                <li><a className="light-dark-text" href="#!">Wolf moon kickstarter</a></li>
                <li><a className="light-dark-text" href="#!">Wolf moon kickstarter</a></li>
              </ul>
            </div>
            <div className="col l3 s6">
              <h5 className="dark-text bold">Easy Use</h5>
              <div className="border-bottom"></div>
              <p>
                Brunch gastropub cray, 90's listicle copper mug succulents cronut synth pour-over crucifix. Hella cray synth, tousled brooklyn kombucha roof party PBR&amp;B
              </p>
            </div>
            <div className="col l3 s6">
              <h5 className="dark-text bold">Planning &amp; Investments</h5>
              <div className="border-bottom"></div>
              <p>
                Brunch gastropub cray, 90's listicle copper mug succulents cronut synth pour-over crucifix. Hella cray synth, tousled brooklyn kombucha roof party PBR&amp;B
              </p>
            </div>
          </div>
        </div>
        <div className="footer-copyright footer-copyright-custom">
          <div className="container-fluid">
            <div className="row">
              <div className="col l12 s12 dark-text">
                © 2017 Adham Kurniawan
                <a className="right" href="#!"><i className="fa fa-facebook-square blue-text text-darken-3 footer-icon"></i></a>
                <a className="right" href="#!"><i className="fa fa-twitter-square light-blue-text text-lighten-3 footer-icon"></i></a>
                <a className="right" href="#!"><i className="fa fa-linkedin-square blue-text text-lighten-1 footer-icon"></i></a>
                <a className="right" href="#!"><i className="fa fa-pinterest-square red-text footer-icon"></i></a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
