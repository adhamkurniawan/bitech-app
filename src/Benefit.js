import React, { Component } from 'react';
import smallCard from './Assets/img/sm_card.png';

class Benefit extends Component {
  render() {
    return (
      <div className="benefit">
        <h1 className="title-benefit capitalize center">set finance on your fingertip</h1>
        <div className="content-benefit">
          <div className="row row-1">
            <div className="cust-left">
              <h1 className="content-title-benefit">Send It</h1>
              <p className="content-tag-benefit">Send money faster than say dear</p>
            </div>
            <div className="cust-right">
              <h1 className="content-title-benefit">Dream Saver</h1>
              <p className="content-tag-benefit">Saving for dream as simple as posting pictures from smartphone</p>
            </div>
          </div>
          <div className="row row-2 center hide-on-med-and-down">
            <a href="index.html">
              <img src={smallCard} className="responsive-img" alt="Card" />
            </a>
          </div>
          <div className="row row-3">
            <div className="cust-left">
              <h1 className="content-title-benefit">Pay Me</h1>
              <p className="content-tag-benefit">Asking for money is easier than asking friends</p>
            </div>
            <div className="cust-right">
              <h1 className="content-title-benefit">Split Bill</h1>
              <p className="content-tag-benefit">Pay the joint venture that no was pretending again to be a statue</p>
            </div>
          </div>
        </div>

        <div className="row-4 center">
          <a href="/" className="btn btn-primary waves-effect">how it works <i className="material-icons right">play_circle_outline</i></a>
        </div>
      </div>
    );
  }
}

export default Benefit;
